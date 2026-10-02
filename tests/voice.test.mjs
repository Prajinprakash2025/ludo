import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WebSocket } from 'ws';
import { createLudoServer } from '../server.mjs';
const delay = ms => new Promise(r => setTimeout(r,ms));
async function client(url) {
  const ws = new WebSocket(url), inbox = [];
  ws.on('message',raw => inbox.push(JSON.parse(raw)));
  await new Promise((r,j) => { ws.once('open',r); ws.once('error',j); });
  return {ws,inbox,send:m => ws.send(JSON.stringify(m)),wait:async predicate => {
    const end = Date.now()+4000;
    while (Date.now()<end) { const i = inbox.findIndex(predicate); if (i>=0) return inbox.splice(i,1)[0]; await delay(10); }
    throw new Error('Voice message timeout');
  }};
}
test('room voice authenticates signals, isolates rooms and never spends the game action budget',async () => {
  const app = createLudoServer({die:()=>6,turnMs:120000,voiceConfig:{iceServers:[],relayConfigured:false}});
  await new Promise(r => app.server.listen(0,'127.0.0.1',r));
  const url = 'ws://127.0.0.1:'+app.server.address().port, clients = [];
  try {
    for (let i=0;i<4;i++) clients.push(await client(url));
    const [a,b,c,outsider] = clients;
    a.send({type:'create',name:'A'}); const aj = await a.wait(m => m.type==='joined');
    for (const p of [b,c]) { p.send({type:'join',code:aj.code}); p.joined = await p.wait(m => m.type==='joined'); }
    outsider.send({type:'create'}); const out = await outsider.wait(m => m.type==='joined');
    a.send({type:'start'}); await a.wait(m => m.type==='state' && m.room.game);
    const r = app.rooms.get(aj.code), before = JSON.stringify(r.game), revision = r.revision;
    a.send({type:'voice-join'}); const av = await a.wait(m => m.type==='voice-ready');
    b.send({type:'voice-join'}); const bv = await b.wait(m => m.type==='voice-ready');
    outsider.send({type:'voice-join'}); const ov = await outsider.wait(m => m.type==='voice-ready');
    const joined = await a.wait(m => m.type==='voice-state' && m.members.length===2);
    assert.deepEqual(joined.members.map(p=>p.seat),[0,1]);
    c.send({type:'voice-mute',muted:true}); assert.match((await c.wait(m=>m.type==='voice-error')).message,/expired/);
    const signal = {type:'voice-signal',to:b.joined.id,fromSession:av.session,toSession:bv.session,data:{description:{type:'offer',sdp:'v=0\r\n'+'a=test\r\n'.repeat(600)}}};
    for (let i=0;i<60;i++) a.send(signal);
    await b.wait(m=>m.type==='voice-signal'); await delay(100);
    assert.equal(b.inbox.filter(m=>m.type==='voice-signal').length,59);
    assert.equal(a.ws.readyState,WebSocket.OPEN);
    assert.equal(JSON.stringify(r.game),before); assert.equal(r.revision,revision);
    a.send({...signal,fromSession:'forged'}); assert.match((await a.wait(m=>m.type==='voice-error')).message,/expired/);
    a.send({...signal,to:out.id,toSession:ov.session}); await delay(80);
    assert.equal(outsider.inbox.some(m=>m.type==='voice-signal'),false);
    a.send({...signal,data:{description:{type:'offer',sdp:'x'.repeat(16001)}}});
    assert.match((await a.wait(m=>m.type==='voice-error')).message,/Invalid voice signal/);
    a.send({type:'voice-mute',fromSession:av.session,muted:true});
    assert.equal((await b.wait(m=>m.type==='voice-state' && m.members[0]?.muted)).members[0].muted,true);
    a.send({type:'roll',revision:r.game.revision});
    const rolled = await a.wait(m=>m.type==='state' && m.room.game?.phase==='move');
    assert.equal(rolled.room.game.dice,6);
    b.send({type:'voice-leave'}); await a.wait(m=>m.type==='voice-state' && m.members.length===1);
    b.send({type:'voice-join'}); const newVoice = await b.wait(m=>m.type==='voice-ready');
    assert.notEqual(newVoice.session,bv.session);
    b.inbox.length = 0;
    a.send(signal); await delay(80); assert.equal(b.inbox.some(m=>m.type==='voice-signal'),false);
    a.ws.close(); await b.wait(m=>m.type==='voice-state' && m.members.length===1);
    const resumed = await client(url); clients.push(resumed);
    resumed.send({type:'resume',code:aj.code,token:aj.token}); await resumed.wait(m=>m.type==='joined');
    assert.equal(app.rooms.get(aj.code).seats[0].voice,null);
    assert.equal(resumed.inbox.some(m=>m.type==='voice-ready'),false);
  } finally { clients.forEach(p=>p.ws.terminate()); await app.close(); }
});

test('voice flood is bounded independently while dice still works',async () => {
  const app = createLudoServer({die:()=>6,turnMs:120000,voiceConfig:{iceServers:[],relayConfigured:false}});
  await new Promise(r=>app.server.listen(0,'127.0.0.1',r));
  const a = await client('ws://127.0.0.1:'+app.server.address().port);
  try {
    a.send({type:'create',mode:'solo'}); await a.wait(m=>m.type==='joined');
    const started = await a.wait(m=>m.type==='state' && m.room.game);
    a.send({type:'voice-join'}); const av = await a.wait(m=>m.type==='voice-ready');
    for (let i=0;i<200;i++) a.send({type:'voice-signal',fromSession:av.session,to:'missing',toSession:'missing',data:{restart:true}});
    assert.match((await a.wait(m=>m.type==='voice-error')).message,/Too many/);
    a.send({type:'roll',revision:started.room.game.revision});
    assert.equal((await a.wait(m=>m.type==='state' && m.room.game?.phase==='move')).room.game.dice,6);
    assert.equal(a.ws.readyState,WebSocket.OPEN);
    a.send({type:'voice-leave'});
    await a.wait(m=>m.type==='voice-state' && m.members.length===0);
  } finally { a.ws.terminate(); await app.close(); }
});
