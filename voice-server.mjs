import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';

// Only signaling uses the game socket. Microphone audio travels over WebRTC.
export function loadVoiceConfig() {
  let config = {};
  try { config = JSON.parse(readFileSync(new URL('./voice-config.json',import.meta.url),'utf8')); }
  catch (e) { if (e.code !== 'ENOENT') throw new Error('Invalid voice-config.json: '+e.message); }
  if (process.env.VOICE_ICE_SERVERS) config.iceServers = JSON.parse(process.env.VOICE_ICE_SERVERS);
  const iceServers = config.iceServers ?? [{urls:'stun:stun.l.google.com:19302'}];
  if (!Array.isArray(iceServers) || iceServers.length > 8) throw new Error('Voice ICE configuration must be a list of at most eight servers.');
  for (const server of iceServers) {
    const urls = Array.isArray(server.urls) ? server.urls : [server.urls];
    if (!urls.length || urls.length > 8 || urls.some(url => typeof url !== 'string' || !/^(stun|stuns|turn|turns):[^\s]+$/.test(url))) throw new Error('Invalid voice ICE server URL.');
    for (const key of ['username','credential']) if (server[key] !== undefined && typeof server[key] !== 'string') throw new Error('Invalid voice ICE credentials.');
  }
  return {iceServers,relayConfigured:iceServers.some(s => (Array.isArray(s.urls)?s.urls:[s.urls]).some(u => /^turns?:/.test(u)))};
}

export function createVoiceSignaling(send,config = loadVoiceConfig()) {
  function broadcast(room) {
    const members = room.seats.flatMap((p,seat) => p?.ws && p.voice ? [{seat,id:p.id,session:p.voice.session,muted:p.voice.muted}] : []);
    for (const p of room.seats) if (p?.ws) send(p.ws,{type:'voice-state',members});
  }
  function clear(room,p) { if (p?.voice) { p.voice = null; broadcast(room); } }
  function handle(ws,m,room,p) {
    if (!room || !p || p.ws !== ws) throw new Error('Join a room before joining voice.');
    if (m.type === 'voice-join') {
      p.voice ??= {session:randomUUID(),muted:false};
      send(ws,{type:'voice-ready',session:p.voice.session,...config});
      broadcast(room); return;
    }
    if (m.type === 'voice-leave') { clear(room,p); return; }
    if (!p.voice || m.fromSession !== p.voice.session) throw new Error('Voice session expired. Join voice again.');
    if (m.type === 'voice-mute') {
      if (typeof m.muted !== 'boolean') throw new Error('Invalid microphone state.');
      p.voice.muted = m.muted; broadcast(room); return;
    }
    if (m.type !== 'voice-signal') throw new Error('Unknown voice action.');
    const other = room.seats.find(player => player?.id === m.to && !player.bot && player.ws && player.voice?.session === m.toSession);
    // A peer may leave while ICE is gathering. Ignore stale signals quietly.
    if (!other || other === p) return;
    const d = m.data;
    let data;
    if (d?.description && ['offer','answer'].includes(d.description.type) && typeof d.description.sdp === 'string' && d.description.sdp.length <= 16000) {
      data = {description:{type:d.description.type,sdp:d.description.sdp}};
    } else if (d?.candidate && typeof d.candidate.candidate === 'string' && d.candidate.candidate.length <= 2048 &&
      (d.candidate.sdpMid === null || typeof d.candidate.sdpMid === 'string' && d.candidate.sdpMid.length <= 64) &&
      (d.candidate.sdpMLineIndex === null || Number.isInteger(d.candidate.sdpMLineIndex) && d.candidate.sdpMLineIndex >= 0 && d.candidate.sdpMLineIndex < 8)) {
      data = {candidate:{candidate:d.candidate.candidate,sdpMid:d.candidate.sdpMid,sdpMLineIndex:d.candidate.sdpMLineIndex,
        ...(typeof d.candidate.usernameFragment === 'string' && d.candidate.usernameFragment.length <= 256 ? {usernameFragment:d.candidate.usernameFragment}: {})}};
    } else if (d?.restart === true) data = {restart:true};
    else throw new Error('Invalid voice signal.');
    send(other.ws,{type:'voice-signal',from:p.id,fromSession:p.voice.session,toSession:other.voice.session,data});
  }
  return {broadcast,clear,handle};
}
