import {createForestGifts,awardForestGift,GIFT_DURATION} from './forest-gifts.mjs';
export const COLORS = ['red', 'green', 'yellow', 'blue'];
export const SAFE = new Set([0, 8, 13, 21, 26, 34, 39, 47]);
export const FINISH = 56;
export const TRACK = [
  [6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],
  [1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],
  [8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],
  [13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0]
];
export const LANES = [
  [[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]],
  [[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],
  [[7,13],[7,12],[7,11],[7,10],[7,9],[7,8]],
  [[13,7],[12,7],[11,7],[10,7],[9,7],[8,7]]
];
export const YARDS = [
  [[1.9,1.9],[1.9,4.1],[4.1,1.9],[4.1,4.1]],
  [[1.9,10.9],[1.9,13.1],[4.1,10.9],[4.1,13.1]],
  [[10.9,10.9],[10.9,13.1],[13.1,10.9],[13.1,13.1]],
  [[10.9,1.9],[10.9,4.1],[13.1,1.9],[13.1,4.1]]
];
export function createGame(seats) {
  const active = seats.map((p,i) => p ? i : -1).filter(i => i >= 0);
  if (active.length < 2) throw new Error('At least two players are needed.');
  return {
    tokens: COLORS.map(() => [-1,-1,-1,-1]), active, turn: active[0],
    phase: 'roll', dice: null, sixes: 0, winner: null, revision: 0,
    placements: [], celebration: null, forestGifts:createForestGifts(), giftUntil:0,
    legal: [], lastRoll: null, lastMove: null, deadline: 0,
    captures: [0,0,0,0], messages: ['The race is on. Roll a six to leave your nest!']
  };
}
export function square(seat, progress) {
  return progress >= 0 && progress <= 50 ? (seat*13 + progress)%52 : null;
}
export function legalMoves(g, seat = g.turn) {
  if (g.phase !== 'move' || seat !== g.turn || !g.active.includes(seat)) return [];
  return g.tokens[seat].map((p,i) => ((p === -1 && g.dice === 6) || (p >= 0 && p < FINISH && p+g.dice <= FINISH)) ? i : -1).filter(i => i >= 0);
}
function say(g, text) {
  g.messages.unshift(text);
  g.messages = g.messages.slice(0,8);
}
export function advance(g) {
  if (g.phase === 'done' || g.phase === 'celebration') return;
  const at = g.active.indexOf(g.turn);
  g.turn = g.active[(at+1)%g.active.length];
  g.phase = 'roll'; g.dice = null; g.legal = []; g.sixes = 0;
  g.revision++;
}
export function roll(g, die, names) {
  if (g.phase !== 'roll') throw new Error('Move a highlighted token first.');
  if (!Number.isInteger(die) || die < 1 || die > 6) throw new Error('Invalid dice.');
  const seat = g.turn;
  g.dice = die;
  g.lastRoll = {seat, value: die, id: g.revision+1};
  g.sixes = die === 6 ? g.sixes+1 : 0;
  g.revision++;
  if (g.sixes === 3) {
    say(g, names[seat]+' rolled three sixes. The third roll loses the turn.');
    advance(g); return {skipped:true};
  }
  g.phase = 'move'; g.legal = legalMoves(g);
  if (!g.legal.length) {
    say(g, names[seat]+' rolled '+die+'. No legal move.');
    g.phase = 'waiting';
    return {noMove:true};
  }
  say(g, names[seat]+' rolled '+die+'. Pick a glowing token.');
  return {};
}
export function finishNoMove(g) {
  if (g.phase !== 'waiting') return;
  if (g.dice === 6) { g.phase = 'roll'; g.dice = null; g.legal = []; g.revision++; }
  else advance(g);
}
export function move(g, token, names, now = Date.now(), giftPick) {
  if (!Number.isInteger(token) || !legalMoves(g).includes(token)) throw new Error('That token cannot move. Choose a glowing token.');
  const seat = g.turn, old = g.tokens[seat][token];
  const next = old === -1 ? 0 : old+g.dice;
  const target = square(seat,next);
  const captured = [];
  if (target !== null && !SAFE.has(target)) {
    for (const other of g.active) {
      if (other === seat) continue;
      g.tokens[other].forEach((p,i) => {
        if (square(other,p) === target) { g.tokens[other][i] = -1; captured.push({seat:other,token:i}); }
      });
    }
  }
  g.tokens[seat][token] = next;
  g.captures[seat] += captured.length;
  g.lastMove = {seat,token,old,next,captured,id:g.revision+1};
  const gift = awardForestGift(g,g.lastMove,giftPick);
  if (gift) {
    g.lastMove.gift = gift;
    g.giftUntil = now+(next-old)*175+GIFT_DURATION+200;
  }
  g.revision++;
  if (next === FINISH && g.tokens[seat].every(p => p === FINISH)) {
    const nextSeat = g.active[(g.active.indexOf(seat)+1)%g.active.length];
    g.placements.push({seat,name:names[seat],place:g.placements.length+1});
    g.winner ??= seat;
    g.active = g.active.filter(s => s !== seat);
    const final = g.placements.length === 2 || !g.active.length;
    const duration = final ? 20000 : 15000;
    g.celebration = {id:g.revision,seats:final?g.placements.map(p=>p.seat):[seat],startedAt:now,endsAt:now+duration,final};
    g.turn = nextSeat; g.phase = 'celebration'; g.legal = []; g.dice = null; g.sixes = 0;
    say(g,names[seat]+' finished '+(g.placements.length===1?'first! A 15-second victory dance.':'second! Both winners dance for 20 seconds.'));
    return {win:true,captured};
  }
  let text = names[seat]+(old === -1 ? ' launched a token!' : ' moved '+g.dice+' spaces.');
  if (captured.length) text = names[seat]+' captured '+captured.length+' token'+(captured.length > 1 ? 's' : '')+'! Bonus turn.';
  else if (next === FINISH) text = names[seat]+' brought a token home! Bonus turn.';
  else if (g.dice === 6) text += ' Roll again!';
  if (gift) text += ' A forest monkey brought a new outfit!';
  say(g,text);
  if (g.dice === 6 || captured.length || next === FINISH) {
    g.phase = 'roll'; g.dice = null; g.legal = [];
  } else advance(g);
  return {captured};
}
export function skip(g, name) {
  if (g.phase === 'done' || g.phase === 'celebration') return;
  say(g,name+' missed the turn. Passing the dice.');
  advance(g);
}
export function finishCelebration(g, now = Date.now()) {
  if (g.phase !== 'celebration' || now < g.celebration.endsAt) return false;
  g.phase = g.celebration.final || !g.active.length ? 'done' : 'roll';
  g.celebration = null; g.dice = null; g.legal = []; g.sixes = 0; g.revision++;
  if (g.phase === 'roll') say(g,'The race continues! Second place is still waiting.');
  return true;
}
export function forfeit(g, seat, names) {
  if (!g.active.includes(seat) || g.phase === 'done') return;
  const next = g.active[(g.active.indexOf(seat)+1)%g.active.length];
  g.active = g.active.filter(x => x !== seat);
  g.tokens[seat] = [-1,-1,-1,-1];
  say(g,names[seat]+' left the race.');
  if (g.phase === 'celebration') {
    if (g.turn === seat) g.turn = next;
    if (!g.active.length) g.celebration.final = true;
  } else if (!g.active.length) {
    g.phase = 'done'; g.legal = [];
  } else if (g.active.length === 1 && !g.placements.length) {
    g.winner = g.active[0]; g.turn = g.winner; g.phase = 'done'; g.legal = [];
  } else if (g.turn === seat) {
    g.turn = next; g.phase = 'roll'; g.dice = null; g.legal = []; g.sixes = 0;
  }
  g.revision++;
}
export function chooseBotMove(g) {
  let best = g.legal[0], bestScore = -Infinity;
  for (const token of g.legal) {
    const old = g.tokens[g.turn][token], next = old === -1 ? 0 : old+g.dice;
    const target = square(g.turn,next);
    let score = next === FINISH ? 1000 : (old === -1 ? 60 : next);
    if (target !== null && !SAFE.has(target)) {
      for (const seat of g.active) {
        if (seat !== g.turn) score += g.tokens[seat].filter(p => square(seat,p) === target).length*150;
      }
    }
    if (target !== null && SAFE.has(target)) score += 25;
    if (score > bestScore) { best = token; bestScore = score; }
  }
  return best;
}
