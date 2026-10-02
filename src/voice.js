// Four-player, audio-only WebRTC mesh. No audio passes through the game server.
export function createRoomVoice({send,identity,notify}) {
  const $ = id => document.getElementById(id);
  let available = false, active = false, joining = false, generation = 0;
  let stream, context, selfSession = '', members = [], config = {}, muted = false, deafened = false;
  let joinTimer, meterTimer, message = 'Join to talk with your crew.';
  const peers = new Map(), meters = new Map();
  const supported = !!(window.isSecureContext && navigator.mediaDevices?.getUserMedia && window.RTCPeerConnection);

  function status(text) { message = text; paint(); }
  function paint() {
    $('voice-join').hidden = active;
    $('voice-join').disabled = joining || !available || !supported;
    $('voice-join').textContent = joining ? 'Connecting…' : '🎙 Join voice';
    for (const id of ['voice-mic','voice-speaker','voice-leave']) $(id).hidden = !active;
    $('voice-mic').textContent = muted ? '🎙 Unmute' : '🎙 Mute';
    $('voice-mic').setAttribute('aria-pressed',String(muted));
    $('voice-speaker').textContent = deafened ? '🔇 Hear crew' : '🔊 Sound on';
    $('voice-speaker').setAttribute('aria-pressed',String(deafened));
    $('voice-status').textContent = message;
    $('voice-hear').hidden = ![...peers.values()].some(p => p.blocked);
    paintPlayers();
  }
  function paintPlayers() {
    const me = identity();
    document.querySelectorAll('[data-voice-seat]').forEach(el => {
      const member = members.find(p => p.seat === Number(el.dataset.voiceSeat));
      const peer = member && peers.get(member.id);
      const local = member?.id === me.id;
      const ready = local ? active : peer?.pc.connectionState === 'connected';
      const talking = ready && !member.muted && !!meters.get(member.id)?.talking;
      el.hidden = !member;
      el.textContent = member?.muted ? '🔇' : talking ? '●' : '🎙';
      el.title = member?.muted ? 'Microphone muted' : talking ? 'Speaking' : ready ? 'In voice chat' : 'Joining voice';
      const card = el.closest('.player-card');
      card?.classList.toggle('voice-talking',!!talking);
      card?.classList.toggle('voice-connected',!!ready);
    });
  }
  function updateStatus() {
    if (!active) return;
    const list = [...peers.values()];
    if (list.some(p => p.pc.connectionState === 'failed' || p.retries >= 3 && p.pc.connectionState !== 'connected')) status('Voice could not connect. Leave and rejoin, or try Wi-Fi.');
    else if (list.some(p => p.blocked)) status('Tap Hear crew to enable sound.');
    else if (list.some(p => p.pc.connectionState !== 'connected')) status('Connecting your crew…');
    else status(list.length ? `${list.length+1} in voice · ${muted?'Mic muted':'Mic on'}` : `${muted?'Mic muted':'Mic on'} · waiting for your crew`);
  }
  function meter(id,audioStream) {
    removeMeter(id);
    if (!context) return;
    try {
      const source = context.createMediaStreamSource(audioStream), analyser = context.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      meters.set(id,{source,analyser,data:new Uint8Array(analyser.fftSize),talking:false,until:0});
    } catch {}
  }
  function removeMeter(id) { const m = meters.get(id); if (m) { m.source.disconnect(); m.analyser.disconnect(); meters.delete(id); } }
  function startMeters() {
    clearInterval(meterTimer);
    meterTimer = setInterval(() => {
      if (document.hidden || !active) return;
      const me = identity();
      let changed = false;
      for (const [id,m] of meters) {
        m.analyser.getByteTimeDomainData(m.data);
        let sum = 0; for (const value of m.data) sum += ((value-128)/128)**2;
        if (Math.sqrt(sum/m.data.length) > .025) m.until = performance.now()+250;
        const next = (id === me.id ? !muted : !members.find(p => p.id === id)?.muted) && performance.now() < m.until;
        if (next !== m.talking) { m.talking = next; changed = true; }
      }
      if (changed) paintPlayers();
    },125);
  }
  function signal(peer,data) {
    if (active && peers.get(peer.member.id) === peer) send({type:'voice-signal',to:peer.member.id,fromSession:selfSession,toSession:peer.member.session,data});
  }
  function enqueue(peer,operation) {
    peer.queue = peer.queue.then(async () => {
      if (peers.get(peer.member.id) === peer && active) await operation();
    }).catch(() => {
      if (peers.get(peer.member.id) === peer && active) status('Voice connection interrupted. Try leaving and rejoining voice.');
    });
  }
  async function offer(peer,restart = false) {
    if (peer.pc.signalingState !== 'stable') return;
    await peer.pc.setLocalDescription(await peer.pc.createOffer({iceRestart:restart}));
    signal(peer,{description:{type:peer.pc.localDescription.type,sdp:peer.pc.localDescription.sdp}});
  }
  async function play(peer) {
    if (!peer.audio) return;
    peer.audio.muted = deafened;
    try { await peer.audio.play(); peer.blocked = false; }
    catch { peer.blocked = true; }
    updateStatus();
  }
  function restart(peer) {
    clearTimeout(peer.retryTimer);
    if (peer.retries >= 3) { updateStatus(); return; }
    peer.retryTimer = setTimeout(() => {
      if (peers.get(peer.member.id) !== peer || peer.pc.connectionState === 'connected') return;
      peer.retries++;
      if (identity().seat < peer.member.seat) enqueue(peer,() => offer(peer,true));
      else signal(peer,{restart:true});
      updateStatus();
      restart(peer);
    },4000);
  }
  function addPeer(member) {
    const pc = new RTCPeerConnection({iceServers:config.iceServers || [],bundlePolicy:'max-bundle'});
    const peer = {member,pc,queue:Promise.resolve(),candidates:[],audio:null,blocked:false,retries:0};
    peers.set(member.id,peer);
    for (const track of stream.getAudioTracks()) {
      const sender = pc.addTrack(track,stream);
      const parameters = sender.getParameters();
      if (parameters.encodings?.length) {
        parameters.encodings[0].maxBitrate = 24000;
        sender.setParameters(parameters).catch(() => {});
      }
    }
    pc.onicecandidate = e => { if (e.candidate) signal(peer,{candidate:e.candidate.toJSON()}); };
    pc.ontrack = e => {
      if (peers.get(member.id) !== peer) return;
      const remote = e.streams[0] || new MediaStream([e.track]);
      peer.audio?.remove();
      const element = document.createElement('audio');
      element.autoplay = true; element.setAttribute('playsinline',''); element.srcObject = remote;
      $('voice-audio').append(element); peer.audio = element;
      meter(member.id,remote); play(peer);
    };
    pc.onconnectionstatechange = () => {
      if (peers.get(member.id) !== peer) return;
      if (pc.connectionState === 'connected') { clearTimeout(peer.retryTimer); peer.retries = 0; }
      else if (['failed','disconnected'].includes(pc.connectionState)) restart(peer);
      updateStatus();
    };
    restart(peer); // Also covers a peer stuck in the initial ICE negotiation.
    if (identity().seat < member.seat) enqueue(peer,() => offer(peer));
    return peer;
  }
  function removePeer(id) {
    const peer = peers.get(id);
    if (!peer) return;
    peers.delete(id); clearTimeout(peer.retryTimer);
    peer.pc.ontrack = peer.pc.onicecandidate = peer.pc.onconnectionstatechange = null;
    peer.pc.close();
    if (peer.audio) { peer.audio.pause(); peer.audio.srcObject = null; peer.audio.remove(); }
    removeMeter(id);
  }
  function sync() {
    if (!active || !selfSession || !stream) { paintPlayers(); return; }
    const me = identity();
    const own = members.find(p => p.id === me.id && p.session === selfSession);
    if (!own) { stop(false,'Voice ended. Join again to talk.'); return; }
    for (const [id,peer] of peers) if (!members.some(p => p.id === id && p.session === peer.member.session)) removePeer(id);
    for (const member of members) {
      if (member.id === me.id) continue;
      if (!peers.has(member.id)) addPeer(member);
      else peers.get(member.id).member = member;
    }
    updateStatus();
  }
  function stop(tellServer = true,text = 'Join to talk with your crew.') {
    generation++; clearTimeout(joinTimer); clearInterval(meterTimer);
    if (tellServer && (active || joining)) send({type:'voice-leave'});
    active = joining = false; selfSession = ''; muted = deafened = false;
    for (const id of [...peers.keys()]) removePeer(id);
    for (const id of [...meters.keys()]) removeMeter(id);
    stream?.getTracks().forEach(track => track.stop()); stream = null;
    context?.close().catch(() => {}); context = null;
    status(text);
  }
  async function join() {
    if (joining || active || !available || !supported) return;
    joining = true; const current = ++generation; status('Allow your microphone to join voice.');
    try {
      // Resume on the click gesture so mobile browsers can play incoming audio.
      context = new (window.AudioContext || window.webkitAudioContext)();
      await context.resume();
      if (current !== generation) return;
      const captured = await navigator.mediaDevices.getUserMedia({video:false,audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true,channelCount:1}});
      if (current !== generation) { captured.getTracks().forEach(t => t.stop()); return; }
      stream = captured;
      stream.getAudioTracks()[0].onended = () => stop(true,'Microphone disconnected. Join voice again.');
      meter(identity().id,stream);
      if (!send({type:'voice-join'})) { stop(false,'Reconnect to the room, then join voice.'); return; }
      status('Joining room voice…');
      joinTimer = setTimeout(() => stop(true,'Voice is unavailable. Refresh after the server update.'),8000);
    } catch (e) {
      if (current !== generation) return;
      const text = ['NotAllowedError','SecurityError'].includes(e.name) ? 'Microphone permission denied. Allow it in browser settings, then join again.' : e.name === 'NotFoundError' ? 'No microphone found. Connect one and try again.' : 'Microphone is busy or unavailable. Close other calls and try again.';
      stop(false,text); notify(text);
    }
  }
  function receive(m) {
    if (m.type === 'voice-ready') {
      if (!joining || !stream) return;
      clearTimeout(joinTimer); selfSession = m.session; config = m; active = true; joining = false;
      startMeters(); status('Mic on · waiting for your crew');
    } else if (m.type === 'voice-state') { members = m.members || []; sync(); }
    else if (m.type === 'voice-error') { stop(true,m.message); notify(m.message); }
    else if (m.type === 'voice-signal') {
      const peer = peers.get(m.from);
      if (!active || m.toSession !== selfSession || !peer || peer.member.session !== m.fromSession) return;
      enqueue(peer,async () => {
        const d = m.data;
        if (d.description) {
          // Only the lower seat offers, preventing offer collisions on simultaneous joins.
          if (d.description.type === 'offer' && identity().seat < peer.member.seat) return;
          await peer.pc.setRemoteDescription(d.description);
          for (const c of peer.candidates.splice(0)) await peer.pc.addIceCandidate(c);
          if (d.description.type === 'offer') {
            await peer.pc.setLocalDescription(await peer.pc.createAnswer());
            signal(peer,{description:{type:peer.pc.localDescription.type,sdp:peer.pc.localDescription.sdp}});
          }
        } else if (d.candidate) {
          if (peer.pc.remoteDescription) await peer.pc.addIceCandidate(d.candidate);
          else if (peer.candidates.length < 64) peer.candidates.push(d.candidate);
        } else if (d.restart && identity().seat < peer.member.seat) await offer(peer,true);
      });
    }
  }
  $('voice-join').onclick = join;
  $('voice-leave').onclick = () => stop();
  $('voice-mic').onclick = () => {
    if (!active) return;
    muted = !muted; stream.getAudioTracks().forEach(t => t.enabled = !muted);
    send({type:'voice-mute',fromSession:selfSession,muted}); updateStatus();
  };
  $('voice-speaker').onclick = () => {
    deafened = !deafened; for (const peer of peers.values()) play(peer); paint();
  };
  $('voice-hear').onclick = () => { context?.resume(); for (const peer of peers.values()) play(peer); };
  window.addEventListener('pagehide',() => stop());
  document.addEventListener('visibilitychange',() => { if (!document.hidden && active) { context?.resume().catch(() => {}); updateStatus(); } });
  paint();
  return {
    receive,paintPlayers,
    connected(version) { available = version === 1; status(!supported?'Voice needs HTTPS and a browser with microphone support.':!available?'Voice server update pending.':'Join to talk with your crew.'); },
    disconnect() { available = false; members = []; stop(false,'Reconnect to the room, then join voice.'); },
    leave() { members = []; stop(false); },
    diagnostics() { return {active,joining,muted,deafened,microphoneLive:!!stream?.getAudioTracks().some(t => t.readyState === 'live'),relayConfigured:!!config.relayConfigured,
      peers:[...peers.values()].map(p => ({seat:p.member.seat,state:p.pc.connectionState,blocked:p.blocked})),talking:[...meters].filter(([,m]) => m.talking).map(([id]) => members.find(p => p.id === id)?.seat)}; },
    async stats() {
      const result = [];
      for (const p of peers.values()) {
        const stats = await p.pc.getStats();
        for (const s of stats.values()) if (s.type === 'inbound-rtp' && s.kind === 'audio') result.push({seat:p.member.seat,bytes:s.bytesReceived,packets:s.packetsReceived,energy:s.totalAudioEnergy,samples:s.totalSamplesReceived});
      }
      return result;
    }
  };
}
