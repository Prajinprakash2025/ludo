import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createGame,roll,move} from '../game.mjs';
import {moveComedy,noMoveComedy,createComedyPacing,createDialogueDeck,MOVIE_POOLS} from '../src/movie-comedy.js';
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

test('no-move dialogue needs three fresh misses per player, with a seventy-five second cooldown',()=>{
  const p=createComedyPacing(),event={kind:'noMove',seat:0};
  const observe=(id,seat,phase='waiting')=>p.observeRoll({lastRoll:{id,seat},phase});
  observe(1,0);assert.equal(p.allow(event,0),false);
  observe(1,0);observe(2,1);assert.equal(p.allow(event,30000),false);
  observe(3,0);assert.equal(p.allow(event,60000),false);
  observe(4,0,'move');observe(5,0);assert.equal(p.allow(event,90000),false);
  observe(6,0);observe(7,0);assert.equal(p.allow(event,120000),true);
  observe(8,1);observe(9,1);observe(10,1);
  assert.equal(p.allow({kind:'noMove',seat:1},130000),true,'A different player can react to their own failed rolls');
  assert.equal(p.allow(event,600000),false,'A caption clears its player\'s miss streak');
  observe(11,1);observe(12,1);observe(13,1);assert.equal(p.allow({kind:'noMove',seat:1},200000),false);
  assert.equal(p.allow({kind:'noMove',seat:1},205000),true);
  p.reset();observe(1,0);observe(2,0);observe(3,0);assert.equal(p.allow(event,600000),true);
});

test('ambient events are spaced across the table while captures can interrupt after six seconds',()=>{
  const p=createComedyPacing();
  assert.equal(p.allow({kind:'chase'},0),true);
  assert.equal(p.allow({kind:'nearMiss'},7000),false);
  assert.equal(p.allow({kind:'nearMiss'},8000),true);
  assert.equal(p.allow({kind:'chase'},15000),false);
  assert.equal(p.allow({kind:'chase'},16000),true);
  assert.equal(p.allow({kind:'capture'},21000),false);
  assert.equal(p.allow({kind:'capture'},22000),true);
  assert.equal(p.allow({kind:'capture'},31000),false);
  assert.equal(p.allow({kind:'capture'},32000,true),true);
  assert.equal(p.allow({kind:'nearMiss'},90000,true),false);
});

test('each situation cycles every alternative before reuse and shared lines keep a global cooldown',()=>{
  for(const kind of Object.keys(MOVIE_POOLS)){
    const deck=createDialogueDeck('ROOM42'),seen=[];
    for(let i=0;i<MOVIE_POOLS[kind].length;i++)seen.push(deck.pick(kind,i*30000));
    assert.equal(new Set(seen).size,MOVIE_POOLS[kind].length);
    assert.ok(seen.every(line=>MOVIE_POOLS[kind].includes(line)));
    assert.ok(MOVIE_POOLS[kind].includes(deck.pick(kind,300000)));
  }
  const deck=createDialogueDeck(''),history=[];
  for(let i=0;i<24;i++){
    const now=i*10000,kind=['nearMiss','boast','noMove','victory'][i%4],line=deck.pick(kind,now);
    if(!line)continue;
    assert.ok(!history.slice(-4).some(e=>e.line===line),'Adjacent situations repeated a line');
    assert.ok(!history.some(e=>e.line===line&&now-e.now<60000),'A shared line bypassed its cooldown');
    history.push({line,now});
  }
});

test('three/four-square approaches, genuine escapes and overtakes select the right speaker in every seat',()=>{
  for(let seat=0;seat<4;seat++){
    const other=(seat+1)%4;
    for(const p of [5,6]){const {g,m}=play(seat,13,2,other,p);assert.deepEqual(moveComedy(g,m),{kind:'chase',seat:other,token:1});}
    const escape=play(seat,16,4,other,1);
    assert.deepEqual(moveComedy(escape.g,escape.m),{kind:'escape',seat,token:0});
    const pass=play(seat,13,5,other,1);
    assert.deepEqual(moveComedy(pass.g,pass.m),{kind:'overtake',seat,token:0});
  }
});

test('being nearby on another route, pulling away without danger and landing on safety stay quiet',()=>{
  for(const args of [[0,20,2,1,5],[0,16,1,1,1],[0,16,5,1,1],[0,49,1,1,38]]){
    const {g,m}=play(...args);assert.equal(moveComedy(g,m),null);
  }
});

test('checking an unavailable caption does not consume its pacing slot',()=>{
  const pacing=createComedyPacing(),event={kind:'chase'};
  assert.equal(pacing.allow(event,0,false,false),true);
  assert.equal(pacing.allow(event,1),true);
  assert.equal(pacing.allow(event,1000),false);
});

test('room seeds produce consistent choices for two clients and different opening dialogue across rooms',()=>{
  const a=createDialogueDeck('ROOM42'),b=createDialogueDeck('ROOM42');
  for(const [i,kind] of ['capture','boast','nearMiss','chase'].entries())assert.equal(a.pick(kind,i*30000),b.pick(kind,i*30000));
  const starts=new Set(['A','B','C','D'].map(seed=>createDialogueDeck(seed).pick('chase',0)));
  assert.equal(starts.size,4);
});
