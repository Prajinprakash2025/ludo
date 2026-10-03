import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,roll,move,SAFE} from '../game.mjs';
import {createForestGifts,awardForestGift,OUTFITS,GIFT_DURATION} from '../forest-gifts.mjs';
const names=['A','B','C','D'];
const game=()=>createGame(names.map(name=>({name})));
test('all six outfits are server awarded on exact landings, without changing turn or dice rules',()=>{
  for(let outfit=0;outfit<6;outfit++){
    const g=game();g.tokens[0][0]=2;roll(g,2,names);move(g,0,names,1000,()=>outfit);
    assert.equal(g.lastMove.gift.outfit,outfit);assert.equal(g.forestGifts.outfits[0][0],outfit);
    assert.equal(g.giftUntil,1000+350+GIFT_DURATION+200);
    assert.equal(g.tokens[0][0],4);assert.equal(g.turn,1);assert.equal(g.phase,'roll');assert.deepEqual(g.captures,[0,0,0,0]);
  }
});
test('passing a spot, launching, entering the home lane and capturing do not start a gift',()=>{
  for(const [old,die,next,victim] of [[2,3,5,false],[-1,6,0,false],[50,2,52,false],[2,2,4,true]]){
    const g=game();g.tokens[0][0]=old;if(victim)g.tokens[1][0]=43;
    roll(g,die,names);move(g,0,names,1000,()=>0);assert.equal(g.tokens[0][0],next);
    assert.equal(g.lastMove.gift,undefined);assert.equal(g.forestGifts.counts[0],0);assert.equal(g.giftUntil,0);
    if(victim){assert.equal(g.tokens[1][0],-1);assert.equal(g.turn,0);}
  }
});
test('a seat gets at most two distinct outfits; the same token cannot repeatedly collect',()=>{
  const g=game(),land=token=>awardForestGift(g,{seat:0,token,old:2,next:4,captured:[],id:token+1},()=>0);
  assert.equal(land(0).outfit,0);assert.equal(land(0),null);assert.equal(land(1).outfit,1);assert.equal(land(2),null);
  assert.equal(g.forestGifts.counts[0],2);assert.equal(new Set(g.forestGifts.outfits[0].filter(Number.isInteger)).size,2);
  assert.equal(OUTFITS.length,6);
});
test('spots rotate after eight moves and never replace a safe star',()=>{
  const g=game(),first=[...g.forestGifts.tiles];
  for(let i=0;i<96;i++){
    awardForestGift(g,{seat:0,token:0,old:0,next:1,captured:[],id:i});
    assert.ok(g.forestGifts.tiles.every(t=>!SAFE.has(t)&&t>=0&&t<52));
    if(i===6)assert.deepEqual(g.forestGifts.tiles,first);
    if(i===7)assert.notDeepEqual(g.forestGifts.tiles,first);
  }
});
test('an outfit stays on a captured token; rematch starts with fresh rewards',()=>{
  const g=game();g.forestGifts.outfits[0][0]=3;g.tokens[0][0]=15;g.turn=1;g.tokens[1][0]=0;
  roll(g,2,names);move(g,0,names);assert.equal(g.tokens[0][0],-1);assert.equal(g.forestGifts.outfits[0][0],3);
  assert.deepEqual(game().forestGifts,createForestGifts());
});
