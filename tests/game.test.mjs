import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createGame,roll,move,finishNoMove,square,SAFE,FINISH,advance,forfeit,TRACK,LANES,chooseBotMove } from '../game.mjs';
const names=['A','B','C','D'];
const game=()=>createGame(names.map(name=>({name})));
test('board has 52 distinct track squares, four rotations and separate home lanes',()=>{
  assert.equal(TRACK.length,52);
  assert.equal(new Set(TRACK.map(p=>p.join(','))).size,52);
  for (let s=0;s<4;s++) { assert.equal(square(s,0),s*13); assert.equal(square(s,51),null); assert.equal(LANES[s].length,6); }
});
test('only six can leave the nest; entering consumes the six and grants another roll',()=>{
  const g=game(); roll(g,4,names); assert.deepEqual(g.legal,[]); finishNoMove(g); assert.equal(g.turn,1);
  roll(g,6,names); assert.deepEqual(g.legal,[0,1,2,3]); move(g,2,names);
  assert.equal(g.tokens[1][2],0); assert.equal(g.turn,1); assert.equal(g.phase,'roll');
});
test('legal moves enforce exact finish and do not move finished tokens',()=>{
  const g=game(); g.tokens[0]=[54,55,56,-1]; roll(g,2,names); assert.deepEqual(g.legal,[0]);
  move(g,0,names); assert.equal(g.tokens[0][0],56); assert.equal(g.phase,'roll'); assert.equal(g.turn,0);
});
test('moving onto opponents on an unsafe square captures them and awards an extra turn',()=>{
  const g=game(); g.tokens[0][0]=13; g.tokens[1][0]=2;
  roll(g,2,names); const result=move(g,0,names);
  assert.equal(g.tokens[1][0],-1); assert.equal(result.captured.length,1); assert.equal(g.captures[0],1); assert.equal(g.turn,0);
});
test('safe squares protect every opponent, even when tokens are stacked',()=>{
  const g=game(); g.tokens[0][0]=11; g.tokens[1][0]=0; g.tokens[1][1]=0;
  assert.ok(SAFE.has(13)); roll(g,2,names); move(g,0,names);
  assert.equal(g.tokens[1][0],0); assert.equal(g.tokens[1][1],0); assert.equal(g.turn,1);
});
test('three consecutive sixes discard the third roll and switch the turn',()=>{
  const g=game(); roll(g,6,names); move(g,0,names); roll(g,6,names); move(g,0,names);
  assert.equal(g.tokens[0][0],6); roll(g,6,names);
  assert.equal(g.turn,1); assert.equal(g.tokens[0][0],6); assert.equal(g.sixes,0); assert.equal(g.phase,'roll');
});
test('invalid token move leaves state unchanged; invalid dice are refused',()=>{
  const g=game(); roll(g,6,names); const before=JSON.stringify(g);
  assert.throws(()=>move(g,9,names)); assert.equal(JSON.stringify(g),before);
  const g2=game(); assert.throws(()=>roll(g2,7,names)); assert.throws(()=>roll(g2,1.5,names));
});
test('four finished tokens win immediately and further turns do not advance',()=>{
  const g=game(); g.tokens[0]=[FINISH,FINISH,FINISH,55]; roll(g,1,names); move(g,3,names);
  assert.equal(g.winner,0); assert.equal(g.phase,'done'); advance(g); assert.equal(g.turn,0);
});
test('inactive seats are skipped and leaving the last opponent awards a win',()=>{
  const g=createGame([{name:'A'},null,{name:'C'},null]); advance(g); assert.equal(g.turn,2);
  forfeit(g,2,names); assert.equal(g.winner,0); assert.equal(g.phase,'done');
});
test('no move on a six retains the turn, and non-six breaks the six streak',()=>{
  const g=game(); g.tokens[0]=[55,55,55,55]; roll(g,6,names); finishNoMove(g);
  assert.equal(g.turn,0); assert.equal(g.sixes,1); roll(g,1,names); move(g,0,names); assert.equal(g.sixes,0);
});
test('20 complete simulated games preserve token bounds and reach a valid winner',()=>{
  for(let seed=1;seed<=20;seed++) {
    let random=seed, actions=0;
    const g=game();
    while(g.phase!=='done' && actions++<10000) {
      if(g.phase==='roll') {random=(Math.imul(random,1664525)+1013904223)>>>0;roll(g,1+Math.floor(random/4294967296*6),names);}
      else if(g.phase==='move') move(g,chooseBotMove(g),names);
      else if(g.phase==='waiting') finishNoMove(g);
      g.tokens.flat().forEach(p=>assert.ok(Number.isInteger(p)&&p>=-1&&p<=56));
    }
    assert.ok(actions<10000,'Game must make progress');
    assert.ok(g.tokens[g.winner].every(p=>p===56));
  }
});
