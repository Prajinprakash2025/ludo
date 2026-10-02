import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { networkInterfaces } from 'node:os';
import { randomInt, randomUUID } from 'node:crypto';
import { WebSocketServer, WebSocket } from 'ws';
import * as rules from './game.mjs';
import { createVoiceSignaling } from './voice-server.mjs';

const root = fileURLToPath(new URL('./public/',import.meta.url));
const TURN_MS = 45000;
const EMOTES = ['Nice move! ✨','Oops! 🙈','Let’s go! 🚀','Good game! 🤝'];
const MIME = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
export function createLudoServer({die = () => randomInt(1,7), turnMs = TURN_MS, botDelay = 1000,
  allowedOrigins = process.env.ALLOWED_ORIGINS || '', publicUrl = process.env.PUBLIC_URL || '', voiceConfig} = {}) {
  const origins = new Set(allowedOrigins.split(',').map(x => x.trim()).filter(Boolean).map(value => {
    const url = new URL(value);
    if (!['http:','https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
      throw new Error('ALLOWED_ORIGINS must contain exact HTTP(S) website origins.');
    }
    return url.origin;
  }));
  const rooms = new Map();
  const server = http.createServer(async (req,res) => {
    const path = new URL(req.url,'http://localhost').pathname;
    const files = {'/':'index.html','/app.js':'app.js','/styles.css':'styles.css','/game.mjs':'../game.mjs'};
    const file = files[path];
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','same-origin');
    res.setHeader('Content-Security-Policy',"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self' ws: wss:; media-src 'self' blob:; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'");
    res.setHeader('Cache-Control','no-cache');
    if (path === '/health') { res.writeHead(200,{'Content-Type':'application/json'}); res.end(JSON.stringify({ok:true,voiceVersion:1})); return; }
    if (!file) { res.writeHead(404); res.end('Not found'); return; }
    try {
      const ext = file.endsWith('.mjs') ? '.js' : file.slice(file.lastIndexOf('.'));
      res.writeHead(200,{'Content-Type':MIME[ext]});
      res.end(await readFile(root+file));
    } catch { res.writeHead(500); res.end('Unable to load game.'); }
  });
  const wss = new WebSocketServer({server,maxPayload:24576});
  const send = (ws,data) => { if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(data)); };
  const voice = createVoiceSignaling(send,voiceConfig);
  const names = r => r.seats.map(p => p?.name || 'Player');
  function publicRoom(r) {
    return {code:r.code,owner:r.owner,mode:r.mode,revision:r.revision,
      seats:r.seats.map(p => p ? {name:p.name,bot:p.bot,connected:p.bot || !!p.ws,id:p.id} : null),
      game:r.game,serverTime:Date.now()};
  }
  function broadcast(r) {
    const data = {type:'state',room:publicRoom(r)};
    for (const p of r.seats) if (p?.ws) send(p.ws,data);
    r.touched = Date.now();
  }
  function deadline(r) {
    if (r.game?.phase === 'celebration') r.game.deadline = r.game.celebration.endsAt;
    else if (r.game && r.game.phase !== 'done') r.game.deadline = Date.now()+turnMs;
    r.botAt = Date.now()+botDelay;
  }
  function attach(ws,r,seat) {
    const p = r.seats[seat];
    const paused = !r.seats.some(player => player?.ws);
    if (p.ws && p.ws !== ws) { p.ws.room = null; p.ws.close(4001,'Session opened on another tab'); }
    p.ws = ws; ws.room = r; ws.seat = seat;
    voice.clear(r,p);
    if (paused && r.game && r.game.deadline < Date.now()) deadline(r);
    send(ws,{type:'joined',code:r.code,token:p.token,seat,id:p.id,shareBase:ws.shareBase,voiceVersion:1});
    broadcast(r);
    voice.broadcast(r);
  }
  const cleanName = x => typeof x === 'string' ? x.trim().replace(/[\u0000-\u001f<>]/g,'').slice(0,18) || 'Player' : 'Player';
  function addPlayer(r,ws,name) {
    const seat = r.seats.indexOf(null);
    if (seat < 0) throw new Error('This room is full.');
    r.seats[seat] = {id:randomUUID(),token:randomUUID(),name:cleanName(name),bot:false,ws:null};
    if (!r.owner) r.owner = r.seats[seat].id;
    r.revision++;
    attach(ws,r,seat);
  }
  function start(r) {
    r.game = rules.createGame(r.seats);
    deadline(r); r.revision++; broadcast(r);
  }
  function handle(ws,m) {
    if (!m || typeof m.type !== 'string') throw new Error('Invalid action.');
    if (m.type === 'create') {
      if (ws.room) throw new Error('Leave your current room first.');
      let code;
      const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      do { code = Array.from({length:6},() => alphabet[randomInt(alphabet.length)]).join(''); } while (rooms.has(code));
      const r = {code,seats:[null,null,null,null],owner:null,game:null,revision:0,touched:Date.now(),mode:m.mode === 'solo' ? 'solo' : 'friends'};
      rooms.set(code,r); addPlayer(r,ws,m.name);
      if (r.mode === 'solo') {
        for (let i=1;i<4;i++) r.seats[i] = {id:randomUUID(),name:['','Mint Bot','Sunny Bot','Berry Bot'][i],bot:true};
        start(r);
      }
      return;
    }
    if (m.type === 'join' || m.type === 'resume') {
      if (ws.room) throw new Error('Already connected to a room.');
      const r = rooms.get(String(m.code || '').toUpperCase());
      if (!r) throw new Error('Room not found. Check the code or create a fresh room.');
      if (m.type === 'resume') {
        const seat = r.seats.findIndex(p => p && !p.bot && p.token === m.token);
        if (seat < 0) throw new Error('This session expired. Join a new room.');
        attach(ws,r,seat); return;
      }
      if (r.game) throw new Error('This game has started. Join a new room.');
      addPlayer(r,ws,m.name); return;
    }
    const r = ws.room, p = r?.seats[ws.seat];
    if (!r || !p || p.ws !== ws) throw new Error('Join a room first.');
    if (m.type.startsWith('voice-')) { voice.handle(ws,m,r,p); return; }
    if (m.type === 'leave') {
      voice.clear(r,p);
      const oldSeat = ws.seat;
      ws.room = null;
      if (r.game) rules.forfeit(r.game,oldSeat,names(r));
      r.seats[oldSeat] = null;
      if (r.owner === p.id) r.owner = r.seats.find(x => x && !x.bot)?.id || null;
      r.revision++; deadline(r); send(ws,{type:'left'}); broadcast(r); return;
    }
    if (m.type === 'emote') {
      if (!Number.isInteger(m.index) || !EMOTES[m.index] || Date.now()-(p.lastEmote || 0) < 2000) return;
      p.lastEmote = Date.now();
      for (const other of r.seats) if (other?.ws) send(other.ws,{type:'emote',seat:ws.seat,text:EMOTES[m.index]});
      return;
    }
    if (m.type === 'bot' || m.type === 'start' || m.type === 'rematch') {
      if (r.owner !== p.id) throw new Error('Only the host can do that.');
      if (m.type === 'rematch') {
        if (r.game?.phase !== 'done') throw new Error('Finish this race first.');
        start(r); return;
      }
      if (r.game) throw new Error('The race has already started.');
      if (m.type === 'bot') {
        const i = m.seat;
        if (!Number.isInteger(i) || i < 0 || i > 3) throw new Error('Invalid seat.');
        if (r.seats[i] && !r.seats[i].bot) throw new Error('That seat belongs to a player.');
        r.seats[i] = r.seats[i] ? null : {id:randomUUID(),name:['Ruby Bot','Mint Bot','Sunny Bot','Berry Bot'][i],bot:true};
        r.revision++; broadcast(r); return;
      }
      start(r); return;
    }
    if (!r.game || r.game.phase === 'done') throw new Error('The race is not running.');
    const g = r.game;
    if (g.phase === 'celebration') throw new Error('Enjoy the victory dance. The dice will return after it.');
    // Stale requests resync instead of punishing double clicks or a slow connection.
    if (m.revision !== g.revision) { send(ws,{type:'state',room:publicRoom(r)}); return; }
    if (g.turn !== ws.seat) throw new Error('Wait for your turn.');
    if (m.type === 'roll') {
      rules.roll(g,die(),names(r));
    } else if (m.type === 'move') {
      rules.move(g,m.token,names(r));
    } else throw new Error('Unknown action.');
    deadline(r); broadcast(r);
    if (g.phase === 'waiting') r.waitAt = Date.now()+1300;
  }
  wss.on('connection',(ws,req) => {
    const origin = req.headers.origin;
    if (origin) {
      try {
        const parsed = new URL(origin);
        if (!['http:','https:'].includes(parsed.protocol) || parsed.origin !== origin ||
            (parsed.host !== req.headers.host && !origins.has(origin))) {
          ws.close(1008,'Origin not allowed'); return;
        }
      }
      catch { ws.close(1008,'Invalid origin'); return; }
    }
    let base = origin || 'http://'+req.headers.host;
    if (publicUrl) base = publicUrl.replace(/\/$/,'');
    else if (!origins.has(origin) && typeof server.address() === 'object' && /^https?:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/.test(base)) {
      const addresses = Object.values(networkInterfaces()).flat().filter(x => x.family==='IPv4' && !x.internal);
      const local = addresses.find(x => /^192\.168\.1\./.test(x.address)) || addresses.find(x => /^192\.168\./.test(x.address)) || addresses[0];
      if (local) base = 'http://'+local.address+':'+server.address().port;
    }
    ws.shareBase = base;
    ws.isAlive = true;
    ws.on('pong',() => { ws.isAlive = true; });
    ws.on('message',raw => {
      const now = Date.now();
      let m;
      try { m = JSON.parse(raw.toString()); } catch { send(ws,{type:'error',message:'Invalid action.'}); return; }
      const isVoice = typeof m?.type === 'string' && m.type.startsWith('voice-');
      if (isVoice) {
        // Always allow cleanup, even after signaling has exhausted its budget.
        if (m.type === 'voice-leave') {
          const p = ws.room?.seats[ws.seat];
          if (p?.ws === ws) voice.clear(ws.room,p);
          return;
        }
        // ICE bursts never spend the dice/move action budget or close the game socket.
        if (!ws.voiceWindowAt || now-ws.voiceWindowAt > 5000) { ws.voiceWindowAt = now; ws.voiceCount = 0; ws.voiceControlCount = 0; }
        if (++ws.voiceCount > 180 || m.type !== 'voice-signal' && ++ws.voiceControlCount > 15) {
          if (!ws.voiceLimitedAt || now-ws.voiceLimitedAt > 5000) { ws.voiceLimitedAt = now; send(ws,{type:'voice-error',message:'Too many voice changes. Try joining voice again in a few seconds.'}); }
          return;
        }
        try { voice.handle(ws,m,ws.room,ws.room?.seats[ws.seat]); }
        catch (e) { send(ws,{type:'voice-error',message:e.message}); }
        return;
      }
      if (raw.length > 4096) { send(ws,{type:'error',message:'Action is too large.'}); return; }
      ws.windowAt ??= now; ws.messageCount ??= 0;
      if (now-ws.windowAt > 5000) { ws.windowAt = now; ws.messageCount = 0; }
      if (++ws.messageCount > 40) { ws.close(1008,'Too many actions'); return; }
      try { handle(ws,m); }
      catch (e) { send(ws,{type:'error',message:e.message || 'That action was not accepted.'}); }
    });
    ws.on('close',() => {
      const r = ws.room, p = r?.seats[ws.seat];
      if (p?.ws === ws) { p.ws = null; voice.clear(r,p); r.revision++; broadcast(r); }
    });
  });
  const clock = setInterval(() => {
    for (const r of rooms.values()) {
      const g = r.game;
      const connected = r.seats.some(p => p?.ws);
      if (!connected) {
        if (Date.now()-r.touched > 30*60*1000) rooms.delete(r.code);
        continue;
      }
      if (!g || g.phase === 'done') continue;
      try {
        if (g.phase === 'celebration') {
          if (rules.finishCelebration(g)) { deadline(r); broadcast(r); }
        } else if (g.phase === 'waiting') {
          if (Date.now() >= (r.waitAt || 0)) { rules.finishNoMove(g); deadline(r); broadcast(r); }
        } else if (r.seats[g.turn]?.bot && Date.now() >= r.botAt) {
          if (g.phase === 'roll') rules.roll(g,die(),names(r));
          else if (g.phase === 'move') rules.move(g,rules.chooseBotMove(g),names(r));
          deadline(r); broadcast(r);
          if (g.phase === 'waiting') r.waitAt = Date.now()+1300;
        } else if (Date.now() > g.deadline) {
          rules.skip(g,names(r)[g.turn]); deadline(r); broadcast(r);
        }
      } catch (e) { console.error('Room update:',e.message); }
    }
  },150);
  const heartbeat = setInterval(() => {
    for (const ws of wss.clients) {
      if (!ws.isAlive) { ws.terminate(); continue; }
      ws.isAlive = false; ws.ping();
    }
  },20000);
  server.on('close',() => { clearInterval(clock); clearInterval(heartbeat); });
  return {server,wss,rooms,close:async () => {
    clearInterval(clock); clearInterval(heartbeat);
    for (const ws of wss.clients) ws.terminate();
    await new Promise(resolve => wss.close(resolve));
    if (server.listening) await new Promise(resolve => server.close(resolve));
  }};
}
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const app = createLudoServer();
  if (process.env.DOMAIN_SOCKET) {
    app.server.listen(process.env.DOMAIN_SOCKET,() => console.log('Ludo Loop ready on hosting socket'));
  } else {
    const port = Number(process.env.PORT || 4173);
    app.server.listen(port,'0.0.0.0',() => console.log('Ludo Loop ready at http://localhost:'+port));
  }
}
