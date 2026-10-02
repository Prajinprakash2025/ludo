async (page) => {
  const browser = page.context().browser(), contexts = [], peers = [], errors = [];
  const origin = 'http://127.0.0.1:4184';
  const assert = (value,message) => { if (!value) throw new Error(message); };
  const pause = ms => new Promise(r=>setTimeout(r,ms));
  async function energy(peer,seat) {
    return await peer.evaluate(async seat => (await window.ludoVoice.stats()).find(s=>s.seat===seat)?.energy || 0,seat);
  }
  try {
    for (let i=0;i<4;i++) {
      const context = await browser.newContext({viewport:{width:i===1?390:1280,height:i===1?844:900},deviceScaleFactor:i===1?3:1,isMobile:i===1,hasTouch:i===1});
      contexts.push(context);
      // Synthesized microphones exercise real SDP/ICE/Opus/RTP without using the user's mic.
      await context.addInitScript(({frequency,denyFirst,blockPlayback}) => {
        const Socket = window.WebSocket;
        window.WebSocket = class extends Socket { constructor(...args) { super(...args); window.__qaSocket=this; } };
        window.__qaTracks = [];
        if (blockPlayback) {
          const nativePlay = HTMLMediaElement.prototype.play, blocked = new WeakSet();
          HTMLMediaElement.prototype.play = function() {
            if (!blocked.has(this)) { blocked.add(this); return Promise.reject(new DOMException('Autoplay blocked for QA','NotAllowedError')); }
            return nativePlay.call(this);
          };
        }
        let denied = denyFirst;
        navigator.mediaDevices.getUserMedia = async () => {
          if (denied) { denied=false; throw new DOMException('Denied for QA','NotAllowedError'); }
          const audio = new AudioContext(), oscillator = audio.createOscillator(), gain = audio.createGain(), destination = audio.createMediaStreamDestination();
          oscillator.frequency.value=frequency; gain.gain.value=.18;
          oscillator.connect(gain); gain.connect(destination); oscillator.start(); await audio.resume();
          const track=destination.stream.getAudioTracks()[0]; window.__qaTracks.push(track);
          track.addEventListener('ended',()=>{oscillator.stop();audio.close();});
          window.__qaAudio=audio;
          return destination.stream;
        };
      },{frequency:300+i*90,denyFirst:i===1,blockPlayback:i===2});
      const peer = await context.newPage(); peers.push(peer);
      peer.on('pageerror',e=>errors.push(e.message));
      await peer.goto(origin+(i?'/?room='+new URL(peers[0].url()).searchParams.get('room'):'/'));
      await peer.locator('#name').fill('Voice QA '+i); await peer.locator('#begin').click();
      await peer.locator('#room-screen').waitFor({state:'visible'});
    }
    await peers[1].locator('#voice-join').click();
    await peers[1].waitForFunction(()=>document.getElementById('voice-status').textContent.includes('permission denied'));
    assert(!await peers[1].evaluate(()=>window.ludoVoice.snapshot().microphoneLive),'Denied microphone left a live track');
    await Promise.all(peers.map(p=>p.locator('#voice-join').click()));
    await peers[2].locator('#voice-hear').waitFor({state:'visible'});
    await peers[2].waitForFunction(()=>window.ludoVoice.snapshot().peers.length===3 && window.ludoVoice.snapshot().peers.every(p=>p.state==='connected'));
    await peers[2].locator('#voice-hear').click();
    await Promise.all(peers.map(p=>p.waitForFunction(()=>{
      const v=window.ludoVoice.snapshot(); return v.active && v.peers.length===3 && v.peers.every(p=>p.state==='connected' && !p.blocked);
    },null,{timeout:25000})));
    await Promise.all(peers.map(p=>p.waitForFunction(async ()=>{
      const s=await window.ludoVoice.stats();return s.length===3 && s.every(p=>p.bytes>100 && p.energy>0);
    },null,{timeout:15000})));
    const mesh = await Promise.all(peers.map(p=>p.evaluate(()=>window.ludoVoice.stats())));
    await peers[0].waitForFunction(()=>document.querySelectorAll('.voice-talking').length===4);
    await peers[0].getByRole('button',{name:'Start the race'}).click();
    await peers[0].locator('#roll').click();
    await peers[0].locator('#board .token.movable').first().waitFor();
    await peers[0].locator('#board .token.movable').first().press('Enter');
    await Promise.all(peers.map(p=>p.waitForFunction(()=>document.querySelector('#board [data-seat="0"][data-token="0"]')?.getAttribute('data-visual-step')==='0')));
    await peers[1].locator('#voice-mic').click();
    await peers[0].waitForFunction(()=>document.querySelector('[data-voice-seat="1"]').title==='Microphone muted');
    await pause(1000); const mutedStart=await energy(peers[0],1); await pause(1200); const mutedEnd=await energy(peers[0],1);
    assert(mutedEnd-mutedStart<.001,'Muted microphone still transmits audible tone');
    assert(!await peers[1].evaluate(()=>window.__qaTracks.at(-1).enabled),'Mute did not disable microphone');
    await peers[1].locator('#voice-mic').click();
    await pause(800); const unmutedStart=await energy(peers[0],1); await pause(1000); const unmutedEnd=await energy(peers[0],1);
    assert(unmutedEnd-unmutedStart>.001,'Unmute did not restore received audio');
    await peers[1].locator('#voice-speaker').click();
    assert(await peers[1].evaluate(()=>[...document.querySelectorAll('#voice-audio audio')].every(a=>a.muted)),'Speaker mute failed');
    await peers[1].locator('#voice-speaker').click();
    assert(await peers[1].evaluate(()=>[...document.querySelectorAll('#voice-audio audio')].every(a=>!a.muted)),'Speaker unmute failed');
    assert(!await peers[1].evaluate(()=>document.documentElement.scrollWidth>innerWidth),'Voice controls overflow mobile');
    await peers[1].screenshot({path:'output/playwright/voice-mobile.png',fullPage:true});
    await peers[0].screenshot({path:'output/playwright/voice-desktop.png',fullPage:true});
    await peers[1].locator('#voice-leave').click();
    assert(await peers[1].evaluate(()=>!window.ludoVoice.snapshot().microphoneLive && window.__qaTracks.every(t=>t.readyState==='ended') && !document.querySelector('#voice-audio audio')),'Voice exit leaked a microphone/audio element');
    await peers[0].waitForFunction(()=>window.ludoVoice.snapshot().peers.length===2);
    await peers[1].locator('#voice-join').click();
    await peers[1].waitForFunction(()=>window.ludoVoice.snapshot().peers.length===3 && window.ludoVoice.snapshot().peers.every(p=>p.state==='connected'));
    await peers[1].evaluate(()=>window.__qaSocket.close());
    await peers[1].waitForFunction(()=>!window.ludoVoice.snapshot().active && !window.ludoVoice.snapshot().microphoneLive);
    await peers[1].waitForFunction(()=>!document.getElementById('voice-join').disabled);
    assert(await peers[1].evaluate(()=>window.__qaTracks.every(t=>t.readyState==='ended')),'Disconnect leaked capture');
    assert(!await peers[1].evaluate(()=>window.ludoVoice.snapshot().active),'Reconnect silently enabled the mic');
    await peers[1].locator('#voice-join').click();
    await peers[1].waitForFunction(()=>window.ludoVoice.snapshot().peers.length===3 && window.ludoVoice.snapshot().peers.every(p=>p.state==='connected'));
    peers[1].once('dialog',d=>d.accept()); await peers[1].locator('#leave').click();
    await peers[1].locator('#welcome').waitFor({state:'visible'});
    assert(await peers[1].evaluate(()=>!window.ludoVoice.snapshot().microphoneLive && window.__qaTracks.every(t=>t.readyState==='ended')),'Room leave leaked capture');
    assert(!errors.length,errors.join('\n'));
    return {players:4,realRtpAudioPaths:mesh.flat().length,received:mesh,muteEnergyDelta:mutedEnd-mutedStart,unmuteEnergyDelta:unmutedEnd-unmutedStart,gameMoveSynced:true,autoplayRecovery:true,permissionDeniedRecovery:true,speakerMute:true,voiceRejoin:true,disconnectStopsMic:true,roomLeaveStopsMic:true,mobileOverflow:false,pageErrors:errors};
  } finally { for (const context of contexts) await context.close(); }
}
