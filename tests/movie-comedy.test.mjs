import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,roll,move} from '../game.mjs';
import {moveComedy,noMoveComedy} from '../src/movie-comedy.js';
const names=['A','B','C','D'];
function play(seat,old,die,other,p){
  const g=createGame(names);g.turn=seat;g.tokens[seat][0]=old;g.tokens[other][1]=p;
  g.forestGifts.tiles=[];roll(g,die,names);move(g,0,names);
  return {g,m:g.lastMove};
}
test('chases and one-square misses use shared track coordinates across all four seats',()=>{
  for(let seat=0;seat<4;seat++)for(const [p,kind] of [[4,'chase'],[3,'nearMiss'],[1,'nearMiss']]){
    const other=(seat+1)%4,{g,m}=play(seat,13,2,other,p),before=JSON.stringify(g);
    assert.deepEqual(moveComedy(g,m),{kind,seat:other,token:1});
    assert.equal(JSON.stringify(g),before,'A reaction must not change the game');
  }
});
test('safe stars, yard launches, home lanes, distant tokens and same-seat tokens do not taunt',()=>{
  for(const args of [[0,5,2,1,47],[0,-1,6,1,40],[0,49,2,1,39],[0,13,2,1,10]]){
    const {g,m}=play(...args);assert.equal(moveComedy(g,m),null);
  }
  const {g,m}=play(0,13,2,1,-1);g.tokens[0][1]=16;assert.equal(moveComedy(g,m),null);
});
test('captures select the actual victim, and gift/win scenes take priority',()=>{
  const {g,m}=play(0,13,2,1,2);
  assert.deepEqual(moveComedy(g,m),{kind:'capture',seat:1,token:1,winner:{seat:0,token:0}});
  m.gift={};assert.equal(moveComedy(g,m),null);delete m.gift;
  g.phase='celebration';assert.equal(moveComedy(g,m),null);
});
test('no-move reaction belongs to the player who rolled and ignores a forfeited triple-six',()=>{
  const g=createGame(names);g.turn=2;roll(g,3,names);
  assert.deepEqual(noMoveComedy(g),{kind:'noMove',seat:2,token:0});
  const h=createGame(names);h.sixes=2;roll(h,6,names);assert.equal(noMoveComedy(h),null);
});
