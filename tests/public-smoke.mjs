import assert from 'node:assert/strict';
import { WebSocket } from 'ws';
const base=process.argv[2];
if(!base?.startsWith('https://')) throw new Error('Provide the public HTTPS game URL.');
const frontend=process.argv[3] || base;
if(!frontend.startsWith('https://')) throw new Error('Provide the public HTTPS frontend origin.');
const health=await fetch(base+'/health');
assert.equal(health.status,200);
assert.equal((await health.json()).ok,true);
const peers=[];
async function peer() {
  const ws=new WebSocket(base.replace('https:','wss:'),{origin:frontend});
  const messages=[];
  ws.on('message',data=>messages.push(JSON.parse(data.toString())));
  await new Promise((resolve,reject)=>{ws.once('open',resolve);ws.once('error',reject);});
  const wait=async predicate=>{
    const end=Date.now()+10000;
    while(Date.now()<end) {const i=messages.findIndex(predicate);if(i>=0)return messages.splice(i,1)[0];await new Promise(r=>setTimeout(r,20));}
    throw new Error('Public WebSocket message timed out');
  };
  const p={ws,wait,send:m=>ws.send(JSON.stringify(m))};peers.push(p);return p;
}
try {
  const host=await peer();host.send({type:'create',name:'Online check'});
  const joined=await host.wait(m=>m.type==='joined');
  assert.equal(joined.shareBase,frontend);
  for(const name of ['Guest 2','Guest 3','Guest 4']) {
    const p=await peer();p.send({type:'join',code:joined.code,name});await p.wait(m=>m.type==='joined');
  }
  host.send({type:'start'});
  const started=await host.wait(m=>m.type==='state'&&m.room.game);
  assert.equal(started.room.seats.filter(Boolean).length,4);
  host.send({type:'roll',revision:started.room.game.revision});
  const rolled=await host.wait(m=>m.type==='state'&&m.room.game?.lastRoll);
  assert.ok(rolled.room.game.lastRoll.value>=1&&rolled.room.game.lastRoll.value<=6);
  for(const p of peers.slice(1)) {
    const synced=await p.wait(m=>m.type==='state'&&m.room.game?.lastRoll);
    assert.equal(synced.room.game.lastRoll.value,rolled.room.game.lastRoll.value);
  }
  console.log(JSON.stringify({publicUrl:base,frontendUrl:frontend,https:true,webSocket:true,players:4,syncedDice:true}));
} finally {peers.forEach(p=>p.ws.terminate());}
