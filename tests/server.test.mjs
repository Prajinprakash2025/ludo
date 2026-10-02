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
    assert.equal(page.status,200);assert.match(await page.text(),/LUDO/);
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
