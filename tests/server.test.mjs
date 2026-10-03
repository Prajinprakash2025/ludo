import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WebSocket } from 'ws';
import { createLudoServer } from '../server.mjs';
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function client(url) {
  const ws=new WebSocket(url), inbox=[];
  ws.on('message',data=>inbox.push(JSON.parse(data.toString())));
  await new Promise((resolve,reject)=>{ws.once('open',resolve);ws.once('error',reject);});
  return {ws,inbox,send:m=>ws.send(JSON.stringify(m)),wait:async(predicate)=>{
    const end=Date.now()+5000;
    while(Date.now()<end) {const i=inbox.findIndex(predicate);if(i>=0)return inbox.splice(i,1)[0];await delay(10);}
    throw new Error('Message timeout');
  }};
}

test('character choices are unique under concurrent joins and live availability releases only on leaving',async()=>{
  const app=createLudoServer();await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const url='ws://127.0.0.1:'+app.server.address().port,clients=[];
  try{
    const a=await client(url);clients.push(a);a.send({type:'create',name:'Rabbit host',character:'rabbit'});
    const joined=await a.wait(m=>m.type==='joined'),code=joined.code;
    const watcher=await client(url);clients.push(watcher);watcher.send({type:'room-options',code});
    const options=await watcher.wait(m=>m.type==='room-options');assert.equal(options.seats[0].character,'rabbit');
    assert.ok(!JSON.stringify(options).includes(joined.token),'Availability must not reveal resume tokens');
    const b=await client(url),c=await client(url);clients.push(b,c);
    b.send({type:'join',code,name:'Tiger B',character:'tiger'});c.send({type:'join',code,name:'Tiger C',character:'tiger'});
    const results=await Promise.all([b,c].map(p=>p.wait(m=>['joined','error'].includes(m.type))));
    assert.equal(results.filter(m=>m.type==='joined').length,1);assert.match(results.find(m=>m.type==='error').message,/taken/);
    const winner=results[0].type==='joined'?b:c,loser=winner===b?c:b;
    await watcher.wait(m=>m.type==='room-options'&&m.seats.some(p=>p?.character==='tiger'));
    loser.send({type:'join',code,name:'Monkey',character:'monkey'});await loser.wait(m=>m.type==='joined');
    const room=app.rooms.get(code);assert.deepEqual(room.seats.filter(Boolean).map(p=>p.character),['rabbit','tiger','monkey']);
    const saved=results.find(m=>m.type==='joined');winner.ws.close();await delay(30);
    assert.equal(room.seats[1].character,'tiger','Disconnect must reserve the character for resume');
    const resumed=await client(url);clients.push(resumed);resumed.send({type:'resume',code,token:saved.token});
    await resumed.wait(m=>m.type==='joined');assert.equal((await resumed.wait(m=>m.type==='state')).room.seats[1].character,'tiger');
    resumed.send({type:'leave'});await resumed.wait(m=>m.type==='left');
    await watcher.wait(m=>m.type==='room-options'&&!m.seats.some(p=>p?.character==='tiger'));
    watcher.send({type:'join',code,name:'Tiger again',character:'tiger'});await watcher.wait(m=>m.type==='joined');
    assert.equal(room.watchers.size,0,'Joining must clear the preview subscription');
    a.send({type:'start'});await a.wait(m=>m.type==='state'&&!!m.room.game);
    const extra=await client(url);clients.push(extra);extra.send({type:'room-options',code});
    assert.equal((await extra.wait(m=>m.type==='room-options')).started,true);
    extra.send({type:'join',code,name:'Late raccoon',character:'raccoon'});assert.match((await extra.wait(m=>m.type==='error')).message,/started/);
  }finally{clients.forEach(c=>c.ws.terminate());await app.close();}
});

test('invalid characters are rejected and bots and legacy clients receive distinct available characters',async()=>{
  const app=createLudoServer();await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const url='ws://127.0.0.1:'+app.server.address().port,clients=[];
  try{
    const a=await client(url);clients.push(a);
    for(const character of ['dragon',null,0,{},['bear']]){
      a.send({type:'create',character});assert.match((await a.wait(m=>m.type==='error')).message,/valid/);
    }
    assert.equal(app.rooms.size,0,'Invalid creation must not leave orphan rooms');
    a.send({type:'create',name:'Panda',character:'panda',mode:'solo'});await a.wait(m=>m.type==='joined');
    const solo=await a.wait(m=>m.type==='state'&&m.room.game);assert.equal(solo.room.seats[0].character,'panda');
    assert.equal(new Set(solo.room.seats.map(p=>p.character)).size,4);
    const b=await client(url),legacy=await client(url);clients.push(b,legacy);
    b.send({type:'create',character:'panda'});const joined=await b.wait(m=>m.type==='joined');
    legacy.send({type:'join',code:joined.code,name:'Old client'});await legacy.wait(m=>m.type==='joined');
    const state=await legacy.wait(m=>m.type==='state');assert.equal(state.room.seats[1].character,'bear');
    b.send({type:'bot',seat:2});const bots=await b.wait(m=>m.type==='state'&&m.room.seats[2]?.bot);
    assert.equal(new Set(bots.room.seats.filter(Boolean).map(p=>p.character)).size,3);
  }finally{clients.forEach(c=>c.ws.terminate());await app.close();}
});

test('monkey gifts synchronize across players, hold bot turns, allow voice and survive resume',async()=>{
  const app=createLudoServer({die:()=>2,giftPick:()=>5,botDelay:20,turnMs:60000});
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const url='ws://127.0.0.1:'+app.server.address().port,clients=[];
  try{
    const a=await client(url);clients.push(a);a.send({type:'create',name:'Gift QA',mode:'solo'});
    const joined=await a.wait(m=>m.type==='joined');await a.wait(m=>m.type==='state'&&m.room.game);
    const room=app.rooms.get(joined.code),g=room.game;g.tokens[0][0]=2;
    a.send({type:'roll',revision:g.revision});await a.wait(m=>m.type==='state'&&m.room.game?.phase==='move');
    a.send({type:'move',token:0,revision:g.revision,outfit:0});
    const award=await a.wait(m=>m.type==='state'&&m.room.game?.lastMove?.gift);
    assert.equal(award.room.game.lastMove.gift.outfit,5);assert.equal(g.forestGifts.outfits[0][0],5);
    const revision=g.revision,deadline=g.deadline;assert.ok(deadline>=g.giftUntil+59900);
    a.send({type:'roll',revision});await a.wait(m=>m.type==='state'&&m.room.game?.revision===revision);
    a.send({type:'voice-join'});await a.wait(m=>m.type==='voice-ready');
    await delay(350);assert.equal(g.revision,revision,'Bot ran during gift');
    a.ws.close();await delay(30);const again=await client(url);clients.push(again);again.send({type:'resume',code:joined.code,token:joined.token});
    await again.wait(m=>m.type==='joined');const resumed=await again.wait(m=>m.type==='state');
    assert.equal(resumed.room.game.forestGifts.outfits[0][0],5);assert.equal(resumed.room.game.giftUntil,g.giftUntil);
    g.giftUntil=Date.now()-1;room.botAt=Date.now()-1;
    await again.wait(m=>m.type==='state'&&m.room.game?.revision>revision);assert.equal(g.turn,1);
  }finally{clients.forEach(c=>c.ws.terminate());await app.close();}
});
test('four-player rooms protect turns, dice and legal moves, and reconnect seats',async()=>{
  const app=createLudoServer({die:()=>6,botDelay:20});
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const url='ws://127.0.0.1:'+app.server.address().port;
  const clients=[];
  try {
    const a=await client(url); clients.push(a); a.send({type:'create',name:'Alice'});
    const joined=await a.wait(m=>m.type==='joined'), code=joined.code;
    for(const name of ['Bob','Cara','Dan']) {const c=await client(url);clients.push(c);c.send({type:'join',name,code});await c.wait(m=>m.type==='joined');}
    const fifth=await client(url);clients.push(fifth);fifth.send({type:'join',code,name:'Extra'});
    assert.match((await fifth.wait(m=>m.type==='error')).message,/full/);
    const b=clients[1];b.send({type:'start'});assert.match((await b.wait(m=>m.type==='error')).message,/host/);
    a.send({type:'start'});
    const started=await a.wait(m=>m.type==='state'&&m.room.game), g=started.room.game;
    b.send({type:'roll',revision:g.revision});
    assert.match((await b.wait(m=>m.type==='error')).message,/turn/);
    a.send({type:'roll',revision:g.revision,dice:1});
    const rolled=await a.wait(m=>m.type==='state'&&m.room.game?.phase==='move');
    assert.equal(rolled.room.game.dice,6);
    a.send({type:'move',token:99,revision:rolled.room.game.revision});
    assert.match((await a.wait(m=>m.type==='error')).message,/token/);
    a.send({type:'move',token:0,revision:rolled.room.game.revision});
    const moved=await a.wait(m=>m.type==='state'&&m.room.game?.tokens[0][0]===0);
    assert.equal(moved.room.game.turn,0);
    const revision=moved.room.game.revision;
    a.send({type:'move',token:0,revision:rolled.room.game.revision});
    const resynced=await a.wait(m=>m.type==='state'&&m.room.game?.revision===revision);
    assert.equal(resynced.room.game.tokens[0][0],0);
    a.ws.close();await delay(30);
    const rejoined=await client(url);clients.push(rejoined);
    rejoined.send({type:'resume',code,token:joined.token});
    assert.equal((await rejoined.wait(m=>m.type==='joined')).seat,0);
    assert.equal((await rejoined.wait(m=>m.type==='state')).room.game.tokens[0][0],0);
    const page=await fetch('http://127.0.0.1:'+app.server.address().port);
    assert.equal(page.status,200);assert.match(await page.text(),/Pakidakali/);
    assert.equal((await fetch('http://127.0.0.1:'+app.server.address().port+'/missing')).status,404);
  } finally {clients.forEach(c=>c.ws.terminate());await app.close();}
});
test('no-move bot turns advance and disconnected games do not keep running',async()=>{
  const app=createLudoServer({die:()=>2,botDelay:20});
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const a=await client('ws://127.0.0.1:'+app.server.address().port);
  try {
    a.send({type:'create',name:'You',mode:'solo'});
    const joined=await a.wait(m=>m.type==='joined');
    const started=await a.wait(m=>m.type==='state'&&m.room.game);
    a.send({type:'roll',revision:started.room.game.revision});
    await a.wait(m=>m.type==='state'&&m.room.game?.turn===2);
    a.ws.close();await delay(100);
    const g=app.rooms.get(joined.code).game, rev=g.revision;await delay(1600);assert.equal(g.revision,rev);
  } finally {a.ws.terminate();await app.close();}
});

test('server holds celebration timers across resume, allows voice, then ends at second place',async()=>{
  const app=createLudoServer({die:()=>1,botDelay:20});
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const url='ws://127.0.0.1:'+app.server.address().port,clients=[];
  try {
    const a=await client(url);clients.push(a);a.send({type:'create',name:'A'});
    const aj=await a.wait(m=>m.type==='joined');
    const b=await client(url);clients.push(b);b.send({type:'join',name:'B',code:aj.code});await b.wait(m=>m.type==='joined');
    a.send({type:'start'});await a.wait(m=>m.type==='state'&&m.room.game);
    const r=app.rooms.get(aj.code),g=r.game;g.tokens[0]=[56,56,56,55];g.tokens[1]=[56,56,56,55];
    a.send({type:'roll',revision:g.revision});await a.wait(m=>m.type==='state'&&m.room.game?.phase==='move');
    a.send({type:'move',token:3,revision:g.revision});
    const party=await a.wait(m=>m.type==='state'&&m.room.game?.phase==='celebration');
    assert.equal(party.room.game.celebration.endsAt-party.room.game.celebration.startedAt,15000);
    const ends=g.celebration.endsAt,revision=g.revision;
    b.send({type:'roll',revision});assert.match((await b.wait(m=>m.type==='error')).message,/dance/);
    b.send({type:'voice-join'});await b.wait(m=>m.type==='voice-ready');assert.equal(g.revision,revision);
    a.ws.close();await delay(30);const again=await client(url);clients.push(again);again.send({type:'resume',code:aj.code,token:aj.token});
    await again.wait(m=>m.type==='joined');assert.equal((await again.wait(m=>m.type==='state')).room.game.celebration.endsAt,ends);
    await delay(200);assert.equal(g.phase,'celebration');assert.equal(g.revision,revision);
    g.celebration.endsAt=Date.now()-1;
    await b.wait(m=>m.type==='state'&&m.room.game?.phase==='roll'&&m.room.game.revision>revision);assert.equal(g.turn,1);
    b.send({type:'roll',revision:g.revision});await b.wait(m=>m.type==='state'&&m.room.game?.phase==='move'&&m.room.game.turn===1);
    b.send({type:'move',token:3,revision:g.revision});
    const final=await b.wait(m=>m.type==='state'&&m.room.game?.celebration?.final);
    assert.equal(final.room.game.celebration.endsAt-final.room.game.celebration.startedAt,20000);
    assert.deepEqual(final.room.game.celebration.seats,[0,1]);
    again.send({type:'rematch'});assert.match((await again.wait(m=>m.type==='error')).message,/Finish/);
    g.celebration.endsAt=Date.now()-1;await b.wait(m=>m.type==='state'&&m.room.game?.phase==='done');
    assert.equal(g.placements.length,2);
    again.send({type:'rematch'});const fresh=await again.wait(m=>m.type==='state'&&m.room.game?.phase==='roll'&&m.room.game.placements.length===0);
    assert.deepEqual(fresh.room.game.placements,[]);assert.equal(fresh.room.game.celebration,null);
  } finally {clients.forEach(c=>c.ws.terminate());await app.close();}
});
