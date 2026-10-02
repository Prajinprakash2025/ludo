import { createJungleScene } from './world3d.js';
import { COLORS, TRACK, LANES, YARDS, SAFE, FINISH } from '/game.mjs';
const $ = id => document.getElementById(id);
const PALETTE = ['#df5e49','#64b85d','#e9b13e','#409acb'];
const LABELS = ['Bear','Panda','Deer','Fox'];
const AVATARS = ['🐻','🐼','🦌','🦊'];
const NS = 'http://www.w3.org/2000/svg';
// Use the existing room emote messages so active rooms keep their connections.
const CHARACTER_EMOTES=[
  {kind:'jump',label:'Jump',icon:'🐾',wireText:'Nice move! ✨'},
  {kind:'dance',label:'Dance',icon:'💃',wireText:'Oops! 🙈'},
  {kind:'wave',label:'Wave',icon:'👋',wireText:'Let’s go! 🚀'}
];
const escape = value => String(value).replace(/[&<>"']/g,x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
let ws, room = null, seat = -1, myId = '', session = null, pending = null;
let joining = false, reconnectTimer, reconnectCount = 0, retry = true;
let soundOn = false, audio, toastTimer, lastRollId = null, lastMoveId = null, lastWinner = null;
let diceAnimatingUntil = 0, serverOffset = 0, menu = 'create';
const query = new URLSearchParams(location.search);
const initialCode = (query.get('room') || '').toUpperCase();
try {
  $('name').value = localStorage.getItem('ludo-name') || 'Player';
  soundOn = localStorage.getItem('ludo-sound') === 'on';
  if (initialCode) session = JSON.parse(localStorage.getItem('ludo-session-'+initialCode) || 'null');
} catch {}
function toast(text) {
  $('toast').textContent = text; $('toast').hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { $('toast').hidden = true; },3800);
}
function sound(kind) {
  if (!soundOn) return;
  try {
    audio ??= new (window.AudioContext || window.webkitAudioContext)();
    audio.resume();
    const tones = kind === 'win' ? [523,659,784,1047] : kind === 'capture' ? [659,880] : [240,310,370];
    tones.forEach((freq,i) => {
      const o = audio.createOscillator(), gain = audio.createGain();
      o.type = 'sine'; o.frequency.value = freq;
      const at = audio.currentTime+i*.09;
      gain.gain.setValueAtTime(.035,at); gain.gain.exponentialRampToValueAtTime(.001,at+.16);
      o.connect(gain); gain.connect(audio.destination); o.start(at); o.stop(at+.17);
    });
  } catch {}
}
function setSound() {
  $('sound').classList.toggle('active',soundOn);
  $('sound').setAttribute('aria-label',soundOn ? 'Disable sound' : 'Enable sound');
  $('sound').setAttribute('aria-pressed',String(soundOn));
}
setSound();
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('Fullscreen is unavailable in this browser.');}};
$('sound').onclick = () => { soundOn = !soundOn; try { localStorage.setItem('ludo-sound',soundOn?'on':'off'); } catch {} setSound(); sound('roll'); };
function send(action) {
  if (ws?.readyState !== WebSocket.OPEN) { toast('Reconnecting to the table. One moment…'); return false; }
  ws.send(JSON.stringify(action)); return true;
}
function connect() {
  clearTimeout(reconnectTimer);
  const socket = new WebSocket((location.protocol === 'https:' ? 'wss://' : 'ws://')+location.host);
  ws = socket;
  socket.onopen = () => {
    if (socket !== ws) return;
    reconnectCount = 0;
    $('connection-text').textContent = 'Ready to play';
    document.querySelector('.connection').classList.add('online');
    if (session?.token) send({type:'resume',code:session.code,token:session.token});
    else if (pending) { send(pending); pending = null; }
    updateButtons();
  };
  socket.onmessage = e => {
    if (socket !== ws) return;
    const m = JSON.parse(e.data);
    if (m.type === 'joined') {
      visualFresh=true;
      session = {code:m.code,token:m.token,seat:m.seat,id:m.id,shareBase:m.shareBase};
      seat = m.seat; myId = m.id; joining = false;
      try { localStorage.setItem('ludo-session-'+m.code,JSON.stringify(session)); } catch {}
      history.replaceState({},'',location.pathname+'?room='+m.code);
    } else if (m.type === 'state') {
      prepareVisuals(m.room); room = m.room; serverOffset = room.serverTime-Date.now(); render();
    } else if (m.type === 'error') {
      joining = false;
      if (!room && session) { try { localStorage.removeItem('ludo-session-'+session.code); } catch {} session = null; }
      toast(m.message); updateButtons();
    } else if (m.type === 'emote') {
      const emote=CHARACTER_EMOTES.find(x=>x.wireText===m.text);
      if(emote)jungleView?.celebrate(m.seat,emote.kind);
      toast((room?.seats[m.seat]?.name || 'Player')+': '+(emote?emote.icon+' '+emote.label+'!':m.text));
      sound('capture');
    } else if (m.type === 'left') {
      if (session) { try { localStorage.removeItem('ludo-session-'+session.code); } catch {} }
      room = null; session = null; seat = -1; myId = ''; lastRollId = null; lastMoveId = null; lastWinner = null;
      $('welcome').hidden = false; $('room-screen').hidden = true;
      $('mobile-dock').hidden=true; document.body.classList.remove('playing');
      history.replaceState({},'',location.pathname); setMenu('create'); updateButtons();
    }
  };
  socket.onclose = e => {
    if (socket !== ws) return;
    $('connection-text').textContent = 'Reconnecting…';
    document.querySelector('.connection').classList.remove('online');
    if (e.code === 4001) { retry = false; toast('This player session is open in another tab.'); }
    if (retry) reconnectTimer = setTimeout(connect,Math.min(5000,800*++reconnectCount));
    updateButtons();
  };
  socket.onerror = () => {};
}
function setMenu(next) {
  menu = next;
  $('create-tab').classList.toggle('selected',next==='create');
  $('join-tab').classList.toggle('selected',next==='join');
  $('join-field').hidden = next !== 'join';
  $('begin').innerHTML = next === 'join' ? 'Pull up a seat <span>→</span>' : 'Make some room <span>→</span>';
}
$('create-tab').onclick = () => setMenu('create');
$('join-tab').onclick = () => setMenu('join');
if (initialCode) { setMenu('join'); $('room-input').value = initialCode; }
function enter(solo = false) {
  if (joining) return;
  const name = $('name').value.trim() || 'Player';
  try { localStorage.setItem('ludo-name',name); } catch {}
  const action = solo || menu === 'create' ? {type:'create',name,mode:solo?'solo':'friends'} : {type:'join',name,code:$('room-input').value.trim().toUpperCase()};
  if (action.type === 'join' && !/^[A-Z2-9]{6}$/.test(action.code)) { toast('Enter the six-character room code.'); $('room-input').focus(); return; }
  joining = true; updateButtons();
  if (ws?.readyState === WebSocket.OPEN) send(action); else pending = action;
}
$('begin').onclick = () => enter();
$('solo').onclick = () => enter(true);
$('room-input').addEventListener('keydown',e => { if (e.key === 'Enter') enter(); });
$('name').addEventListener('keydown',e => { if (e.key === 'Enter') enter(); });
$('room-input').addEventListener('input',() => { $('room-input').value = $('room-input').value.toUpperCase().replace(/[^A-Z0-9]/g,''); });
function updateButtons() {
  $('begin').disabled = joining;
  $('solo').disabled = joining;
  if (!room?.game) return;
  const g = room.game, mine = g.turn === seat && g.phase === 'roll' && ws?.readyState === WebSocket.OPEN && Date.now() >= diceAnimatingUntil;
  $('roll').disabled = !mine; $('dice').disabled = !mine;
  document.querySelectorAll('[data-seat-dice]').forEach(b=>{b.disabled=!(mine&&Number(b.dataset.seatDice)===seat);});
  const canChoose = g.turn===seat && g.phase==='move' && Date.now()>=diceAnimatingUntil && ws?.readyState===WebSocket.OPEN;
  $('mobile-roll').disabled = !(mine || canChoose);
  $('mobile-dice').disabled = !mine;
}
async function copy(text,confirmation) {
  try { await navigator.clipboard.writeText(text); }
  catch {
    const input = document.createElement('textarea'); input.value = text; input.className = 'sr-only';
    document.body.append(input); input.select();
    const worked = document.execCommand('copy'); input.remove();
    if (!worked) { window.prompt('Copy this invite',text); return; }
  }
  toast(confirmation);
}
$('copy-code').onclick = () => room && copy(room.code,'Room code copied. Bring your crew!');
$('copy-link').onclick = () => {
  if (!room) return;
  const base = session?.shareBase || location.origin;
  copy(base+'/?room='+room.code,'Invite link copied. Send it to your friends!');
};
$('leave').onclick = () => {
  if (room?.game && room.game.phase !== 'done' && !window.confirm('Leave this race? Your tokens will leave the board.')) return;
  send({type:'leave'});
};
$('rules-button').onclick = () => $('rules-dialog').showModal();
$('close-rules').onclick = $('got-it').onclick = () => $('rules-dialog').close();
$('rules-dialog').onclick = e => { if (e.target === $('rules-dialog')) { const r=e.target.getBoundingClientRect(); if (e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom) e.target.close(); } };
document.querySelector('.emotes').innerHTML=CHARACTER_EMOTES.map((emote,index)=>
  '<button type="button" class="emote-action" data-emote="'+index+'" title="'+emote.label+' with your explorers" aria-label="'+emote.label+' with my characters"><span aria-hidden="true">'+emote.icon+'</span><span>'+emote.label+'</span></button>'
).join('');
document.querySelectorAll('[data-emote]').forEach(b=>{
  b.onclick=()=>{
    if(!room||!send({type:'emote',index:Number(b.dataset.emote)}))return;
    // The server permits one emote every two seconds, regardless of turn.
    document.querySelectorAll('[data-emote]').forEach(button=>button.disabled=true);
    setTimeout(()=>document.querySelectorAll('[data-emote]').forEach(button=>button.disabled=false),2050);
  };
});
function rollNow() {
  if (room?.game && ! $('roll').disabled) send({type:'roll',revision:room.game.revision});
}
$('roll').onclick = $('dice').onclick = rollNow;
$('mobile-dice').onclick=rollNow;
$('mobile-roll').onclick=()=> {
  if(room?.game?.phase==='move') $('board').scrollIntoView({behavior:'smooth',block:'center'});
  else rollNow();
};
// Reusable vector scenery, animated independently of the rules and socket.
function forestDefinitions(prefix='') {
  return '<defs><radialGradient id="'+prefix+'canopy"><stop stop-color="#92c63f"/><stop offset=".48" stop-color="#41953a"/><stop offset="1" stop-color="#155d39"/></radialGradient><linearGradient id="'+prefix+'bark" x2="1" y2=".1"><stop stop-color="#4d3624"/><stop offset=".5" stop-color="#977044"/><stop offset="1" stop-color="#503d28"/></linearGradient><radialGradient id="'+prefix+'forest-floor"><stop stop-color="#81a943"/><stop offset=".65" stop-color="#417637"/><stop offset="1" stop-color="#174b35"/></radialGradient><linearGradient id="'+prefix+'stream" x2="1" y2=".3"><stop stop-color="#145968"/><stop offset=".4" stop-color="#24b6ba"/><stop offset=".7" stop-color="#5cdad1"/><stop offset="1" stop-color="#19758c"/></linearGradient><symbol id="'+prefix+'tree" viewBox="-1 -1.8 2 2.3"><ellipse cy=".29" rx=".8" ry=".22" fill="#102e2370"/><path d="M-.14 .25L-.09-1.25H.11L.18 .25Z" fill="url(#'+prefix+'bark)"/><path d="M0-.5L-.44-.87M.05-.7L.4-1.02" stroke="#694a2a" stroke-width=".11" stroke-linecap="round"/><g class="tree-crown"><path d="M-.79-.62Q-1.02-.86-.65-1.14Q-.85-1.54-.34-1.58Q-.01-1.97.33-1.57Q.82-1.56.72-1.15Q1.07-.82.7-.62Q.42-.33.1-.56Q-.38-.35-.79-.62Z" fill="#145635" stroke="#164329" stroke-width=".035"/><ellipse cx="-.42" cy="-1.13" rx=".43" ry=".36" fill="url(#'+prefix+'canopy)"/><ellipse cx=".4" cy="-1.17" rx=".4" ry=".34" fill="url(#'+prefix+'canopy)"/><ellipse cy="-1.4" rx=".48" ry=".37" fill="url(#'+prefix+'canopy)"/><ellipse cy="-.9" rx=".51" ry=".32" fill="url(#'+prefix+'canopy)"/><path d="M-.59-1.28Q-.47-1.42-.31-1.38M-.1-1.56Q.08-1.71.25-1.55M.34-1.18Q.57-1.33.64-1.15M-.19-.92Q.05-1.12.22-.92" stroke="#aed45c" stroke-opacity=".55" stroke-width=".045" fill="none" stroke-linecap="round"/></g></symbol><symbol id="'+prefix+'rock" viewBox="-.6 -.6 1.2 1"><ellipse cy=".2" rx=".52" ry=".16" fill="#163d2570"/><path d="M-.53.1L-.35-.35.06-.5.44-.22.53.16.14.29Z" fill="#687d70" stroke="#324e40" stroke-width=".035"/><path d="M-.35-.35L.06-.5.17-.15-.14.09-.53.1Z" fill="#99aa86"/><path d="M.17-.15L.44-.22.53.16.14.29-.14.09Z" fill="#50695b"/><path d="M-.35-.35L.06-.5.17-.15" stroke="#c6cdb0" stroke-width=".03" fill="none"/><path d="M-.48.13Q-.18.0-.08.24" stroke="#7aab42" stroke-width=".09" fill="none"/></symbol><symbol id="'+prefix+'grass" viewBox="-.4 -.5 .8 .7"><g class="grass-blades"><path d="M0 .1Q-.43-.02-.35-.36Q-.18-.19-.08.05Q-.23-.37.02-.49Q.15-.25.06.05Q.16-.28.39-.28Q.37-.04.08.1Z" fill="#407e31"/><path d="M-.05.06Q-.19-.29-.16-.32M.04.05L.02-.34M.11.06Q.24-.17.31-.21" stroke="#a0c94d" stroke-width=".025" fill="none"/></g></symbol></defs>';
}
function sceneryUse(kind,x,y,size=1,prefix='',delay=0) {
  const h=kind==='tree'?size*1.15:size*.85;
  return '<g transform="translate('+x+' '+y+')"><g class="scenery-motion motion-'+kind+'" style="--scene-delay:'+delay+'s"><use class="scene-'+kind+'" href="#'+prefix+kind+'" x="'+(-size/2)+'" y="'+(-h*.8)+'" width="'+size+'" height="'+h+'"/></g></g>';
}
function forestWorld() {
  let html='<svg viewBox="-4 -1.2 23 17.4" xmlns="'+NS+'" aria-hidden="true">'+forestDefinitions('world-');
  html+='<rect x="-4" y="-1.2" width="23" height="17.4" rx="1.5" fill="url(#world-forest-floor)"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#274a32" stroke-width="1.6" fill="none"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="url(#world-stream)" stroke-width="1.12" fill="none"/><path class="world-current" d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#cffcf0" stroke-opacity=".55" stroke-width=".06" stroke-dasharray=".25 .65" fill="none"/>';
  // Smaller tributaries remain visible alongside the enlarged board.
  for(const x of [-.88,15.95]) {
    const path='M'+x+'-1.2Q'+(x+.28)+' 2.8 '+(x-.08)+' 5.8T'+(x-.08)+' 10.4Q'+(x+.35)+' 13 '+x+' 16.2';
    html+='<path d="'+path+'" stroke="#335439" stroke-width=".8" fill="none"/><path d="'+path+'" stroke="url(#world-stream)" stroke-width=".59" fill="none"/><path class="world-current" d="'+path+'" stroke="#b8fff1" stroke-width=".045" stroke-dasharray=".2 .4" fill="none" opacity=".6"/>';
  }
  // Stable placements avoid any changing game state or random rendering.
  for(let i=0;i<82;i++) {
    const side=i%2, row=Math.floor(i/2),x=side?16.9+(row%3)*.7:-1.85-(row%3)*.7,y=-.4+(row%14)*1.23;
    html+=sceneryUse('tree',x,y,1.5+(i%4)*.18,'world-',-(i%9)*.7);
  }
  for(let i=0;i<88;i++) {
    const side=i%2,row=Math.floor(i/2),x=side?15.1+(row%4)*.92:-.18-(row%4)*.92,y=.15+(row%15)*1.06;
    html+=sceneryUse(i%7===0?'rock':'grass',x,y,i%7===0?.65:.6,'world-',-i*.13);
  }
  // Bridges are scenery beyond the playable track.
  for(const [x,y] of [[-.9,4.1],[15.95,9.4],[-.88,12.8]]) {
    html+='<g transform="translate('+x+' '+y+') rotate(-12)"><ellipse cy=".18" rx=".98" ry=".34" fill="#123e2f70"/><rect x="-.95" y="-.29" width="1.9" height=".58" rx=".08" fill="#604529"/>';
    for(let k=0;k<9;k++) html+='<rect x="'+(-.91+k*.21)+'" y="-.31" width=".18" height=".55" rx=".03" fill="'+(k%2?'#ac834b':'#c3985a')+'" stroke="#59432b" stroke-width=".025"/>';
    html+='<path d="M-.95-.31Q0-.47.95-.31M-.95.2Q0 .1.95.2" stroke="#dfc78b" stroke-width=".055" fill="none"/><path d="M-.91-.4V.29M.9-.4V.29" stroke="#785329" stroke-width=".12"/></g>';
  }
  // Waterfall spray, flowers and floating fireflies.
  for(const x of [-.88,15.95]) {
    html+='<g transform="translate('+x+' 7.2) scale(.65 1)"><path d="M-.55-.8L-.5 .55Q0 .85.5 .55L.55-.8" fill="url(#world-stream)"/>';
    for(let k=0;k<7;k++) html+='<path class="waterfall-line" style="--scene-delay:'+(-k*.12)+'s" d="M'+(-.43+k*.14)+'-.78v.75" stroke="#c1fff7" stroke-opacity=".65" stroke-width=".05" stroke-dasharray=".2 .16"/>';
    html+='<ellipse class="water-spray" cy=".65" rx=".7" ry=".22" fill="#d2fff7" opacity=".45"/></g>';
  }
  for(let i=0;i<25;i++) {
    const x=i%2?15.7+(i%3)*.65:-.65-(i%3)*.65,y=.5+(i%13)*1.2;
    html+='<g transform="translate('+x+' '+y+')"><g class="forest-flower"><circle cx="-.06" r=".09" fill="#ef9b9d"/><circle cx=".06" r=".09" fill="#f1b095"/><circle cy="-.08" r=".09" fill="#ee817e"/><circle r=".055" fill="#ffe58e"/></g></g>';
    html+='<circle class="forest-firefly" style="--scene-delay:'+(-i*.37)+'s" cx="'+(x+.22)+'" cy="'+(y-.6)+'" r=".027" fill="#fff795"/>';
  }
  html+='</svg>';return html;
}
const world=document.createElement('div');
world.className='world-stage';world.setAttribute('aria-hidden','true');world.innerHTML=forestWorld();
document.querySelector('.board-shell').prepend(world);

// Board and characters are presentation only. Coordinates come from game.mjs.
const boardBase = () => {
  let html = '<svg viewBox="-.2 -.2 15.4 15.4" xmlns="'+NS+'" aria-label="Jungle adventure Ludo board" role="group"><defs>';
  html += '<linearGradient id="stone" x2=".3" y2="1"><stop stop-color="#fff0cb"/><stop offset=".55" stop-color="#e3cca4"/><stop offset="1" stop-color="#bca27b"/></linearGradient><linearGradient id="wood" x2=".2" y2="1"><stop stop-color="#ac783e"/><stop offset="1" stop-color="#583a22"/></linearGradient><radialGradient id="water"><stop stop-color="#67e8e8"/><stop offset="1" stop-color="#087d96"/></radialGradient>';
  PALETTE.forEach((color,i)=>{
    html += '<linearGradient id="land-'+i+'" x2=".6" y2="1"><stop stop-color="'+color+'" stop-opacity=".85"/><stop offset="1" stop-color="'+color+'" stop-opacity=".45"/></linearGradient>';
    html += '<radialGradient id="fur-'+i+'" cx=".3" cy=".2" r=".9"><stop stop-color="'+['#d49350','#fffdf0','#e9b965','#ffb74e'][i]+'"/><stop offset="1" stop-color="'+['#854c28','#d9d9c8','#ac702d','#cb5420'][i]+'"/></radialGradient>';
  });
  html += '<pattern id="ground-grain" width=".62" height=".62" patternUnits="userSpaceOnUse"><path d="M.1 .22l.06-.09.04 .08M.45 .49l.035-.09.03 .07" stroke="#e7ec9570" stroke-width=".025" fill="none"/><ellipse cx=".42" cy=".16" rx=".055" ry=".025" fill="#182f1935"/><circle cx=".15" cy=".52" r=".018" fill="#ffe8aa55"/><path d="M.32 .35h.07" stroke="#eacf8035" stroke-width=".02"/></pattern><filter id="token-shadow" x="-60%" y="-60%" width="220%" height="230%"><feDropShadow dx=".02" dy=".045" stdDeviation=".025" flood-color="#182d18" flood-opacity=".4"/></filter></defs>';
  html += forestDefinitions();
  // Flowing water decorates the map underneath the unchanged playable grid.
  html += '<path d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#0b6880" stroke-width=".52" fill="none"/><path class="river-flow" d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#7ef0e9" stroke-width=".12" stroke-dasharray=".14 .5" fill="none" opacity=".8"/>';
  const homes = [[0,0],[0,9],[9,9],[9,0]];
  homes.forEach(([r,c],i) => {
    html += '<g class="habitat"><rect x="'+(c+.18)+'" y="'+(r+.26)+'" width="5.64" height="5.64" rx="1.2" fill="#273f22"/><rect x="'+(c+.2)+'" y="'+(r+.1)+'" width="5.6" height="5.65" rx="1.2" fill="url(#land-'+i+')" stroke="#769741" stroke-width=".11"/>';
    html += '<rect x="'+(c+.25)+'" y="'+(r+.15)+'" width="5.5" height="5.55" rx="1.15" fill="url(#ground-grain)"/><path d="M'+(c+1.8)+' '+(r+1.9)+'Q'+(c+3)+' '+(r+2.5)+' '+(c+4.2)+' '+(r+1.9)+'M'+(c+1.9)+' '+(r+1.9)+'Q'+(c+2.4)+' '+(r+3)+' '+(c+1.9)+' '+(r+4.1)+'M'+(c+4.1)+' '+(r+1.9)+'Q'+(c+3.5)+' '+(r+3)+' '+(c+4.1)+' '+(r+4.1)+'M'+(c+1.9)+' '+(r+4.1)+'Q'+(c+3)+' '+(r+3.7)+' '+(c+4.1)+' '+(r+4.1)+'" fill="none" stroke="#efdc9640" stroke-width=".26" stroke-linecap="round"/>';
    html += '<path d="M'+(c+.8)+' '+(r+4.9)+' Q'+(c+3)+' '+(r+5.8)+' '+(c+5.1)+' '+(r+4.9)+'" fill="none" stroke="#ffe8a5" stroke-opacity=".16" stroke-width=".12"/>';
    YARDS[i].forEach(([y,x]) => { html += '<ellipse cx="'+x+'" cy="'+(y+.12)+'" rx=".7" ry=".43" fill="#132816" fill-opacity=".25" stroke="#f9d486" stroke-opacity=".35" stroke-width=".05"/>'; });
    for(const [x,y,size] of [[.55,1.32,1.25],[5.35,1.38,1.1],[.48,4.3,.95],[5.5,4.8,1.3],[1.12,5.3,.8],[4.64,5.5,.82]]) {
      html+=sceneryUse('tree',c+x,r+y,size,'',-(i+x)*.6);
    }
    for(let k=0;k<15;k++) {
      const x=c+.45+(k%5)*1.15,y=r+(k<5?5.6:k<10?.4:3.04);
      if(k>=10 && k%5>0 && k%5<4) continue;
      html+=sceneryUse('grass',x,y,.43,'',-k*.3);
    }
    html+=sceneryUse('rock',c+.84,r+3.54,.52)+sceneryUse('rock',c+5.05,r+2.25,.49);
    html += '<text x="'+(c+3)+'" y="'+(r+.78)+'" text-anchor="middle" fill="#fff4c9" font-size=".26" class="yard-name">'+LABELS[i].toUpperCase()+' CAMP</text>';
    // Leaves, flowers, torch and supplies stay at the habitat edges.
    for(let k=0;k<9;k++) {
      const x=c+.4+(k%5)*1.22,y=r+(k<5?5.4:.35);
      html += '<g transform="translate('+x+' '+y+') rotate('+(k*39)+')"><ellipse cx="-.08" cy="0" rx=".24" ry=".1" fill="#1e6634"/><ellipse cx=".1" cy="-.13" rx=".26" ry=".11" fill="#72a72d"/><path d="M-.3 .03L.26 -.08" stroke="#b3c84b" stroke-width=".025"/>'+(k%3===0?'<circle cx=".1" cy=".04" r=".1" fill="#f09286"/><circle cx=".1" cy=".04" r=".035" fill="#ffe27d"/>':'')+'</g>';
    }
    html += '<g transform="translate('+(c+.66)+' '+(r+3)+')"><path d="M0 .3V-.15" stroke="#704623" stroke-width=".12"/><path class="torch-flame" d="M0 -.7Q.3 -.36 0 -.1Q-.25 -.25 0 -.7" fill="#ffce58"/><circle class="torch-glow" cy="-.35" r=".4" fill="#ffb12b" opacity=".12"/></g>';
    html += '<g transform="translate('+(c+5.12)+' '+(r+3)+') rotate(-12)"><rect x="-.22" y="-.15" width=".44" height=".32" rx=".05" fill="url(#wood)" stroke="#e7b65e" stroke-width=".035"/><path d="M-.22 -.02H.22M0 -.15V.17" stroke="#e9bc5e" stroke-width=".045"/><circle class="treasure-glint" cy=".01" r=".055" fill="#ffef9c"/></g></g>';
    html += '<g transform="translate('+(c+.87)+' '+(r+4.7)+')"><ellipse cy=".13" rx=".35" ry=".14" fill="#294627"/><path d="M-.3 .12L-.23 -.15-.05 -.24.15 -.12.2 .14Z" fill="#667868" stroke="#354b35" stroke-width=".035"/><path d="M-.22 -.13L-.05 -.18.12 -.09" stroke="#9aa484" stroke-width=".045" fill="none"/><rect x=".18" y="-.07" width=".065" height=".22" rx=".02" fill="#e6d4a2"/><path class="mushroom-cap" d="M.07 -.06Q.2 -.33.35 -.06Z" fill="#e67552"/><circle cx=".19" cy="-.15" r=".025" fill="#ffefd0"/><circle cx=".27" cy="-.11" r=".02" fill="#ffefd0"/></g>';
  });
  for (let r=0;r<15;r++) for (let c=0;c<15;c++) {
    if (!(r>=6 && r<=8 || c>=6 && c<=8) || r>=6 && r<=8 && c>=6 && c<=8) continue;
    const trackIndex = TRACK.findIndex(([y,x]) => y===r && x===c);
    let color = 'url(#stone)', lane = false;
    for (let i=0;i<4;i++) {
      if (LANES[i].some(([y,x]) => y===r && x===c) || trackIndex===i*13) {color=PALETTE[i];lane=true;}
    }
    html += '<g class="path-tile" data-cell="'+r+','+c+'"><rect x="'+(c+.03)+'" y="'+(r+.14)+'" width=".94" height=".9" rx=".13" fill="#574b32"/><rect x="'+(c+.035)+'" y="'+(r+.03)+'" width=".93" height=".91" rx=".13" fill="'+color+'" stroke="'+(lane?'#fff2ae':'#f3dfb7')+'" stroke-opacity=".5" stroke-width=".035"/><path d="M'+(c+.17)+' '+(r+.13)+'H'+(c+.65)+'M'+(c+.08)+' '+(r+.36)+'V'+(r+.64)+'" stroke="#fff6d3" stroke-opacity=".32" stroke-width=".04" stroke-linecap="round"/>';
    if(!lane && (r+c)%4===0) html += '<path d="M'+(c+.77)+' '+(r+.78)+'l.14 -.05-.04 .14" fill="none" stroke="#71894e" stroke-width=".045"/>';
    if (SAFE.has(trackIndex)) html += '<text class="safe-star" x="'+(c+.5)+'" y="'+(r+.7)+'" fill="#ffdf65" stroke="#a97824" stroke-width=".017" text-anchor="middle" font-size=".59">★</text>';
    html += '</g>';
  }
  const triangles = ['6,6 7.5,7.5 6,9','6,6 7.5,7.5 9,6','9,6 7.5,7.5 9,9','6,9 7.5,7.5 9,9'];
  triangles.forEach((points,i) => { html += '<polygon points="'+points+'" fill="'+PALETTE[i]+'" stroke="#bc9b4e" stroke-width=".065"/>'; });
  html += '<circle cx="7.5" cy="7.56" r=".65" fill="#453421"/><circle cx="7.5" cy="7.5" r=".6" fill="url(#wood)" stroke="#e3bf74" stroke-width=".08"/><path d="M7.13 7.26L7.28 7.39 7.5 7.08 7.72 7.39 7.87 7.26 7.79 7.68H7.21Z" fill="#ffdb56" stroke="#aa6d16" stroke-width=".035"/><path d="M7.23 7.75H7.77" stroke="#ffea9c" stroke-width=".07" stroke-linecap="round"/><g id="effects" aria-hidden="true"></g><g id="tokens"></g></svg>';
  return html;
};
$('board').innerHTML = boardBase();
$('preview-board').innerHTML = boardBase().replaceAll('id="','id="preview-').replaceAll('url(#','url(#preview-').replaceAll('href="#','href="#preview-');
const tokenNodes = new Map();
function position(s,t,progress) {
  if (progress < 0) return YARDS[s][t];
  if (progress <= 50) return TRACK[(s*13+progress)%52].map(x=>x+.5);
  return LANES[s][progress-51].map(x=>x+.5);
}
function animal(seatIndex,preview=false) {
  const s=seatIndex===2?3:seatIndex===3?2:seatIndex;
  const fur='url(#'+(preview?'preview-':'')+'fur-'+seatIndex+')', dark=s===1?'#292e2a':'#663819';
  let ears=s===2?'<path d="M-.34 -.43L-.37 -.91-.08 -.68M.34 -.43L.37 -.91.08 -.68" fill="'+fur+'" stroke="#9d481f" stroke-width=".035"/><path d="M-.3 -.57L-.31 -.8-.19 -.64M.3 -.57L.31 -.8.19 -.64" fill="#f1d6ad"/>':'<circle cx="-.27" cy="-.68" r=".16" fill="'+(s===1?dark:fur)+'"/><circle cx=".27" cy="-.68" r=".16" fill="'+(s===1?dark:fur)+'"/><circle cx="-.27" cy="-.68" r=".09" fill="#d39b7d"/><circle cx=".27" cy="-.68" r=".09" fill="#d39b7d"/>';
  if(s===2) ears+='<path d="M.18 .06Q.65 .18.57 -.3Q.43 -.22.36 -.26" fill="'+fur+'" stroke="#954216" stroke-width=".035"/><path d="M.49 -.04Q.59 -.14.57 -.3Q.43 -.22.36 -.26" fill="#fff5dc"/>';
  if(s===3) ears+='<path d="M-.2 -.7L-.27 -1.05M-.27 -.91L-.43 -1M-.27 -.91L-.18 -1.03M.2 -.7L.27 -1.05M.27 -.91L.43 -1M.27 -.91L.18 -1.03" stroke="#845c34" stroke-width=".065" fill="none" stroke-linecap="round"/>';
  return '<g class="animal-stride">'+ears+'<g class="animal-body"><rect x="-.29" y="-.24" width=".58" height=".47" rx=".15" fill="'+PALETTE[seatIndex]+'" stroke="#493f24" stroke-width=".035"/><rect x=".19" y="-.27" width=".17" height=".37" rx=".07" fill="#927344" stroke="#544329" stroke-width=".025"/><path d="M.23 -.25V.11M.26 -.11H.33" stroke="#f4d589" stroke-width=".035"/><ellipse class="animal-foot foot-left" cx="-.17" cy=".2" rx=".12" ry=".09" fill="'+dark+'"/><ellipse class="animal-foot foot-right" cx=".17" cy=".2" rx=".12" ry=".09" fill="'+dark+'"/><ellipse cx="-.27" cy="-.03" rx=".085" ry=".13" fill="'+fur+'"/><path d="M-.18 -.25L.15 .12" stroke="#eac980" stroke-width=".055"/><circle cx="-.07" cy="-.1" r=".04" fill="#f9df93"/></g><g class="animal-head"><ellipse cy="-.46" rx=".34" ry=".3" fill="'+fur+'" stroke="'+(s===1?'#8b9180':'#794726')+'" stroke-width=".025"/>'+(s===1?'<ellipse cx="-.16" cy="-.48" rx=".115" ry=".14" fill="'+dark+'" transform="rotate(20 -.16 -.48)"/><ellipse cx=".16" cy="-.48" rx=".115" ry=".14" fill="'+dark+'" transform="rotate(-20 .16 -.48)"/>':'')+(s===2?'<path d="M-.32 -.39Q-.18 -.43 0 -.25Q.18 -.43.32 -.39Q.24 -.14 0 -.18Q-.24 -.14-.32 -.39" fill="#fff5df"/>':'<ellipse cy="-.32" rx=".19" ry=".13" fill="'+(s===1?'#fffbed':'#efd1a0')+'"/>')+'<g class="animal-eyes"><ellipse cx="-.13" cy="-.48" rx=".046" ry=".063" fill="#222a20"/><ellipse cx=".13" cy="-.48" rx=".046" ry=".063" fill="#222a20"/><circle cx="-.14" cy="-.5" r=".015" fill="white"/><circle cx=".12" cy="-.5" r=".015" fill="white"/></g><ellipse cy="-.33" rx=".058" ry=".042" fill="#35291e"/><path d="M0 -.31V-.27Q-.07 -.22-.1 -.28M0 -.27Q.07 -.22.1 -.28" stroke="#614735" stroke-width=".025" fill="none" stroke-linecap="round"/><ellipse cx="-.23" cy="-.35" rx=".046" ry=".025" fill="#ef8d76" opacity=".55"/><ellipse cx=".23" cy="-.35" rx=".046" ry=".025" fill="#ef8d76" opacity=".55"/><path d="M-.18 -.63Q-.12 -.67-.07 -.64M.07 -.64Q.12 -.67.18 -.63" fill="none" stroke="#744c2d" stroke-width=".026" stroke-linecap="round"/></g></g>';
}
function makeToken(s,t,preview=false) {
  const el=document.createElementNS(NS,'g');
  el.classList.add('token','explorer-'+s); el.dataset.seat=s; el.dataset.token=t;
  el.style.setProperty('--idle-delay',(-t*1.3-s*.7)+'s');
  el.innerHTML='<ellipse class="token-shadow" cy=".24" rx=".4" ry=".16" fill="#162a1d" opacity=".3"/><ellipse class="token-ring" cy=".23" rx=".43" ry=".22" fill="'+PALETTE[s]+'" fill-opacity=".25" stroke="'+PALETTE[s]+'" stroke-width=".035"/><g class="animal-idle" filter="url(#'+(preview?'preview-':'')+'token-shadow)">'+animal(s,preview)+'</g><circle cx=".28" cy=".24" r=".11" fill="#fff0c6" stroke="#665031" stroke-width=".025"/><text class="token-number" x=".28" y=".28" text-anchor="middle" fill="#493821" font-size=".12" font-weight="900">'+(t+1)+'</text><circle class="token-hit" cy="-.23" r=".53" fill="transparent"/>';
  return el;
}
for(let s=0;s<4;s++) for(let t=0;t<4;t++) {
  const el=makeToken(s,t); tokenNodes.set(s+'-'+t,el); $('board').querySelector('#tokens').append(el);
  const preview=makeToken(s,t,true),p=(s===0&&t===0)?9:(s===1&&t===1)?16:-1;
  const [r,c]=position(s,t,p); preview.setAttribute('transform','translate('+c+','+r+')');
  $('preview-board').querySelector('#preview-tokens').append(preview);
}
const visualPositions=new Map(), reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let visualFresh=true,visualRoom='',visualRevision=-1,visualMoveId=null,visualEpoch=0,visualQueue=[],visualBusy=false;
function resetVisuals(next) {
  visualEpoch++; visualQueue=[]; visualBusy=false;
  for(const el of tokenNodes.values()) {el.getAnimations().forEach(a=>a.cancel());el.classList.remove('walking','returning','reacting');}
  for(let s=0;s<4;s++) for(let t=0;t<4;t++) visualPositions.set(s+'-'+t,next.game?.tokens[s][t]??-1);
  $('winner-layer').classList.remove('waiting-flight');
}
function prepareVisuals(next) {
  const g=next.game;
  if(visualFresh || visualRoom!==next.code || !g || g.revision<visualRevision) {
    resetVisuals(next); visualFresh=false; visualRoom=next.code;
    visualMoveId=g?.lastMove?.id??null; visualRevision=g?.revision??-1; return;
  }
  visualRevision=g.revision;
  if(g.lastMove && g.lastMove.id!==visualMoveId) {
    visualMoveId=g.lastMove.id;
    visualQueue.push({...g.lastMove,captured:g.lastMove.captured.map(x=>({...x}))});
    queueMicrotask(runVisualQueue);
  }
}
function placeVisual(s,t,p) {
  visualPositions.set(s+'-'+t,p);
  const el=tokenNodes.get(s+'-'+t),[r,c]=position(s,t,p);
  el.style.transform='translate('+c+'px,'+r+'px)'; el.dataset.visualStep=p;
}
function landingEffect(s,t,p,kind='leaf') {
  if(reducedMotion.matches) return;
  const [r,c]=position(s,t,p),el=document.createElementNS(NS,'g');
  el.setAttribute('transform','translate('+c+' '+r+')'); el.classList.add('landing-effect');
  el.innerHTML='<circle r=".42" fill="none" stroke="'+(kind==='capture'?'#fcb46a':'#ffdf78')+'" stroke-width=".055"/>'+Array.from({length:5},(_,i)=>'<text x="'+(Math.cos(i*1.256)*.5)+'" y="'+(Math.sin(i*1.256)*.5)+'" fill="#ffed9d" font-size=".18">'+(kind==='capture'?'✧':'✦')+'</text>').join('');
  $('board').querySelector('#effects').append(el);setTimeout(()=>el.remove(),650);
}
async function runVisualQueue() {
  if(visualBusy) return;
  visualBusy=true; const epoch=visualEpoch;
  while(visualQueue.length && epoch===visualEpoch) {
    const m=visualQueue.shift(),el=tokenNodes.get(m.seat+'-'+m.token);
    el.classList.add('walking');el.classList.remove('finished');
    placeVisual(m.seat,m.token,m.old);
    const steps=m.old<0?[0]:Array.from({length:m.next-m.old},(_,i)=>m.old+i+1);
    for(const p of steps) {
      if(epoch!==visualEpoch) return;
      const [r,c]=position(m.seat,m.token,p),duration=reducedMotion.matches?0:[155,175,160,130][m.seat];
      const from=el.style.transform,to='translate('+c+'px,'+r+'px)';
      if(duration) {
        const a=el.animate([{transform:from},{transform:to}],{duration,easing:'ease-in-out'});
        try {await a.finished;} catch {return;}
        if(epoch!==visualEpoch) return; a.cancel();
      }
      placeVisual(m.seat,m.token,p);
    }
    el.classList.remove('walking');
    const safe=m.next<=50 && SAFE.has((m.seat*13+m.next)%52);
    if(safe || m.next===FINISH || m.captured.length) landingEffect(m.seat,m.token,m.next,m.captured.length?'capture':'leaf');
    for(const captured of m.captured) {
      const node=tokenNodes.get(captured.seat+'-'+captured.token);
      node.classList.add('returning');
      if(!reducedMotion.matches) await new Promise(resolve=>setTimeout(resolve,180));
      if(epoch!==visualEpoch) return;
      placeVisual(captured.seat,captured.token,-1);node.classList.remove('returning');
    }
    paintTokens();
  }
  if(epoch!==visualEpoch) return;
  visualBusy=false;$('winner-layer').classList.remove('waiting-flight');paintTokens();
}
function paintTokens() {
  const g=room?.game,locations=new Map();
  for(let s=0;s<4;s++) for(let t=0;t<4;t++) {
    const key=s+'-'+t,el=tokenNodes.get(key),p=visualPositions.get(key)??g?.tokens[s][t]??-1;
    const [r,c]=position(s,t,p),location=r+','+c;
    if(!locations.has(location)) locations.set(location,[]);
    if(p!==FINISH) locations.get(location).push({el,r,c,p});
    el.classList.toggle('finished',p===FINISH&&!el.classList.contains('walking'));
    const active=!!room?.seats[s] && (!g || g.active.includes(s));
    el.style.opacity=active?'1':'.2';
    el.classList.toggle('active-explorer',active&&g?.turn===s&&g.phase!=='done');
    const movable=!!g&&g.turn===seat&&s===seat&&g.phase==='move'&&g.legal.includes(t)&&Date.now()>=diceAnimatingUntil&&ws?.readyState===WebSocket.OPEN&&!visualBusy;
    el.classList.toggle('movable',movable);el.setAttribute('role','button');el.setAttribute('tabindex',movable?'0':'-1');el.setAttribute('aria-disabled',String(!movable));
    el.setAttribute('aria-label',LABELS[s]+' token '+(t+1)+(p<0?' in camp':p===FINISH?' finished':' at step '+p)+(movable?', can move':''));
    el.dataset.visualStep=p;
  }
  for(const group of locations.values()) group.forEach(({el,r,c},i)=>{
    if(el.classList.contains('walking')) return;
    const spread=group.length>1?.17:0,ox=group.length>1?(i%2?spread:-spread):0,oy=group.length>2?(i<2?-spread:spread):0;
    el.style.transform='translate('+(c+ox)+'px,'+(r+oy)+'px)';
    el.classList.toggle('stacked',group.length>1);
  });
}

$('board').addEventListener('click',e => {
  // Pointer clicks use the visible 3D explorer, including its head and stacked
  // pieces. Keyboard activation still uses the accessible token element.
  const token=e.detail && jungleView
    ? jungleView.pickToken(e.clientX,e.clientY)
    : e.target.closest('.token.movable');
  if (token && room?.game) send({type:'move',token:Number(token.dataset.token),revision:room.game.revision});
});
$('board').addEventListener('keydown',e => { if ((e.key==='Enter' || e.key===' ') && e.target.classList.contains('movable')) { e.preventDefault(); e.target.dispatchEvent(new MouseEvent('click',{bubbles:true})); } });
function renderPlayers() {
  const g=room.game, host=room.owner===myId;
  $('mobile-dock').hidden=!g || g.phase==='done';
  document.body.classList.toggle('playing',!!g && g.phase!=='done');
  $('players').innerHTML = room.seats.map((p,i) => {
    const score=g?.tokens[i].filter(t=>t===FINISH).length || 0;
    if (!p) return '<div class="player-card empty-seat '+COLORS[i]+'"><div class="avatar">+</div><div class="player-info"><h3>Seat for a friend</h3><p>'+LABELS[i]+' is waiting</p>'+(host&&!g?'<button class="add-bot" data-bot="'+i+'">Add a bot</button>':'')+'</div></div>';
    const scoreHtml = g ? '<div class="player-score">'+Array.from({length:4},(_,k)=>'<i class="'+(k<score?'done':'')+'"></i>').join('')+'</div>' : '';
    return '<div class="player-card '+COLORS[i]+(g&&g.turn===i&&g.phase!=='done'?' active':'')+'"><div class="avatar">'+('<svg viewBox="-.6 -1.12 1.2 1.5" aria-hidden="true">'+animal(i)+'</svg>')+'</div><div class="player-info"><h3>'+escape(p.name)+'<small>'+(i===seat?'YOU':p.bot?'BOT':p.id===room.owner?'HOST':'')+'</small></h3><p>'+(g ? (g.active.includes(i)?score+' / 4 home · '+g.captures[i]+' captures':'Left the race') : p.connected?'Ready for the race':'Reconnecting…')+'</p>'+scoreHtml+(host&&p.bot&&!g?'<button class="add-bot" data-bot="'+i+'">Remove bot</button>':'')+'</div>'+'<button class="seat-dice" data-seat-dice="'+i+'" aria-label="Roll for '+escape(p.name)+'" disabled>'+(['⚀','⚁','⚂','⚃','⚄','⚅'][(g?.lastRoll?.seat===i?g.lastRoll.value:1)-1])+'</button>'+'</div>';
  }).join('');
  document.querySelectorAll('[data-seat-dice]').forEach(b=>{b.onclick=rollNow;});
  document.querySelectorAll('[data-bot]').forEach(b => { b.onclick=()=>send({type:'bot',seat:Number(b.dataset.bot)}); });
  $('crew-count').textContent = room.seats.filter(Boolean).length+' / 4';
}
function showDice(value) {
  const positions={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
  const visible=positions[value] || positions[6];
  $('dice').querySelector('.pip-grid').innerHTML=Array.from({length:9},(_,i)=>'<i class="'+(visible.includes(i)?'':'off')+'"></i>').join('');
  $('dice').setAttribute('aria-label','Dice showing '+(value||6));
}
function render() {
  $('welcome').hidden=true; $('room-screen').hidden=false;
  $('copy-code').innerHTML=escape(room.code)+' <small>▣</small>';
  $('you-label').textContent='YOU ARE '+LABELS[seat]?.toUpperCase();
  $('game-mode').textContent=room.mode==='solo'?'BOT EXPEDITION':'JUNGLE EXPEDITION';
  const g=room.game, host=room.owner===myId;
  $('room-title').textContent=g?'Your jungle adventure.':'Gather your explorers.';
  renderPlayers();
  $('turn-controls').hidden=!g; $('lobby-controls').hidden=!!g;
  if (!g) {
    $('lobby-controls').innerHTML='<div class="eyebrow">PULL UP A SEAT</div><h2 class="lobby-title">Gather your<br>expedition.</h2><p class="lobby-help">Share your room code or invite link. Everyone joins from their own device.</p><div class="lobby-illustration">🎲</div><div class="lobby-steps"><span>1</span>Invite up to three friends.</div><div class="lobby-steps"><span>2</span>Fill any empty seats with bots.</div>'+(host?'<button id="start-game" class="primary" '+(room.seats.filter(Boolean).length<2?'disabled':'')+'>Start the race <span>→</span></button>':'<p class="lobby-wait">Waiting for the host to start the race.</p>');
    if ($('start-game')) $('start-game').onclick=()=>send({type:'start'});
    $('activity-log').innerHTML='<p>Your table is ready. Invite the crew!</p><p>At least two players are needed to start.</p>';
    $('winner-layer').hidden=true; paintTokens(); return;
  }
  $('activity-log').innerHTML=g.messages.slice(0,5).map(text=>'<p>'+escape(text)+'</p>').join('');
  const current=room.seats[g.turn], mine=g.turn===seat;
  $('mobile-turn').textContent=mine?'Your turn':(current?.name||'Player')+' is up';
  $('mobile-help').textContent=g.phase==='move'?(mine?'Choose a glowing token':'Waiting for a move'):g.phase==='waiting'?'No legal move':mine?'Ready for your next roll':'Waiting for the roll';
  $('mobile-roll').textContent=mine?(g.phase==='move'?'Pick token ↑':'Roll ↗'):'Waiting…';
  $('mobile-dice').textContent=g.lastRoll?.value || 6;
  $('turn-tag').textContent=g.phase==='done'?'A CHAMPION IS HERE':mine?'YOUR TURN':LABELS[g.turn].toUpperCase()+'’S TURN';
  $('turn-name').textContent=g.phase==='done'?'What a race!':mine?'Let’s roll, '+(current?.name||'friend')+'.':(current?.name||'Player')+' is up.';
  $('turn-help').textContent=g.phase==='done'?'A rematch is always a good idea.':g.phase==='move'?(mine?'Choose a glowing token on the board.':'Waiting for a token move.'):g.phase==='waiting'?'No legal move. Passing the dice…':mine?'Roll the dice. Make your next move.':'The dice belong to '+(current?.name||'Player')+'.';
  $('roll').innerHTML=g.phase==='done'?'Race complete <span>♡</span>':g.phase==='move'?(mine?'Pick a glowing token <span>↗</span>':'Waiting for a move…'):mine?'Roll the dice <span>↗</span>':'Waiting for the roll…';
  if (g.lastRoll) {
    showDice(g.lastRoll.value);
    $('last-roll').textContent=(room.seats[g.lastRoll.seat]?.name||'Player')+' rolled a '+g.lastRoll.value+'.';
    if (lastRollId!==null && lastRollId!==g.lastRoll.id) {
      diceAnimatingUntil=Date.now()+650;
      $('dice').classList.remove('rolling'); void $('dice').offsetWidth; $('dice').classList.add('rolling'); document.querySelectorAll('.player-card.active .seat-dice').forEach(b=>b.classList.add('rolling')); tokenNodes.forEach((el)=>{if(Number(el.dataset.seat)===g.lastRoll.seat) {el.classList.add('reacting');setTimeout(()=>el.classList.remove('reacting'),670);}}); sound('roll');
      setTimeout(()=> { $('dice').classList.remove('rolling'); updateButtons(); paintTokens(); },670);
    }
    lastRollId=g.lastRoll.id;
  } else { lastRollId=null; lastMoveId=null; showDice(6); $('last-roll').textContent='Your lucky streak starts here.'; }
  if (g.lastMove && lastMoveId!==g.lastMove.id) {
    if (g.lastMove.captured.length && lastMoveId!==null) sound('capture');
    lastMoveId=g.lastMove.id;
  }
  $('live-announcement').textContent=g.messages[0];
  if (g.phase==='done') {
    const winner=room.seats[g.winner]?.name||'Player';
    $('winner-layer').hidden=false;
    $('winner-layer').classList.toggle('waiting-flight',visualBusy||visualQueue.length>0);
    $('winner-layer').innerHTML='<div class="winner-tag">JUNGLE CHAMPION</div><div class="trophy">🏆</div><h2>'+escape(winner)+' wins!</h2><p>Four tokens home. A whole lot of glory.<br>Same crew, another race?</p>'+(host?'<button id="rematch" class="primary">One more game <span>→</span></button>':'<p>Waiting for the host to start a rematch.</p>');
    if ($('rematch')) $('rematch').onclick=()=>send({type:'rematch'});
    if (lastWinner!==g.winner) { lastWinner=g.winner; celebrate(); sound('win'); }
  } else { $('winner-layer').hidden=true; lastWinner=null; }
  updateButtons(); paintTokens(); updateTimer();
}
function updateTimer() {
  if (!room?.game) return;
  const g=room.game;
  const seconds=Math.max(0,Math.ceil((g.deadline-Date.now()-serverOffset)/1000));
  $('timer').textContent=g.phase==='done'?'':seconds+'s';
  $('timer-fill').style.width=(g.phase==='done'?0:Math.min(100,seconds/45*100))+'%';
}
setInterval(updateTimer,250);
function celebrate() {
  $('confetti').innerHTML='';
  for (let i=0;i<70;i++) {
    const piece=document.createElement('i');
    piece.style.left=(Math.random()*100)+'%'; piece.style.background=PALETTE[i%4];
    piece.style.animationDelay=(Math.random()*.65)+'s'; piece.style.animationDuration=(2+Math.random()*1.5)+'s';
    $('confetti').append(piece);
  }
  setTimeout(()=>{ $('confetti').innerHTML=''; },4500);
}
paintTokens(); showDice(6);
const jungleView=createJungleScene({board:$('board'),tokenNodes,getRoom:()=>room,getSeat:()=>seat,colors:PALETTE,track:TRACK,lanes:LANES,yards:YARDS,safe:SAFE});
connect();
