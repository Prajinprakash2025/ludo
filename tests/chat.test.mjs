import {test} from 'node:test';
import assert from 'node:assert/strict';
import {WebSocket} from 'ws';
import {createLudoServer} from '../server.mjs';
import {createRoomChat,CHAT_LIMIT} from '../chat-server.mjs';
import {CHARACTER_EMOTES} from '../emotes.mjs';
import {MOVIE_QUOTES} from '../src/movie-quotes.js';

const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function client(url){
  const ws=new WebSocket(url),inbox=[];ws.on('message',raw=>inbox.push(JSON.parse(raw.toString())));
  await new Promise((resolve,reject)=>{ws.once('open',resolve);ws.once('error',reject);});
  return {ws,inbox,send:message=>ws.send(JSON.stringify(message)),wait:async predicate=>{
    const end=Date.now()+5000;
    while(Date.now()<end){const i=inbox.findIndex(predicate);if(i>=0)return inbox.splice(i,1)[0];await delay(10);}
    throw new Error('Message timeout');
  }};
}
async function fixture(run){
  const app=createLudoServer({die:()=>6,turnMs:60000});
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));const clients=[];
  const connect=async()=>{const c=await client('ws://127.0.0.1:'+app.server.address().port);clients.push(c);return c;};
  try{await run(app,connect);}finally{clients.forEach(c=>c.ws.terminate());await app.close();}
}

test('room text and film lines authenticate the speaker, stay private, and restore history without a new speech event',()=>fixture(async(app,connect)=>{
  const host=await connect();assert.equal((await host.wait(m=>m.type==='capabilities')).chatVersion,1);
  host.send({type:'create',name:'Bear'});const joined=await host.wait(m=>m.type==='joined'),code=joined.code;
  const guest=await connect();guest.send({type:'join',code,name:'Panda'});await guest.wait(m=>m.type==='joined');
  const outside=await connect();outside.send({type:'create',name:'Elsewhere'});await outside.wait(m=>m.type==='joined');
  const watcher=await connect();watcher.send({type:'room-options',code});await watcher.wait(m=>m.type==='room-options');
  const unauth=await connect();unauth.send({type:'chat-send',text:'No room'});assert.match((await unauth.wait(m=>m.type==='chat-error')).message,/Join/);
  host.send({type:'chat-send',text:'  ഹലോ <img src=x>\u0000  ',seat:3,name:'Spoof',playerId:'fake'});
  const message=(await guest.wait(m=>m.type==='chat-message')).message;await host.wait(m=>m.type==='chat-message');
  assert.equal(message.text,'ഹലോ <img src=x>');assert.equal(message.seat,0);assert.equal(message.name,'Bear');assert.equal(message.playerId,joined.id);
  assert.ok(!JSON.stringify(message).includes(joined.token));
  guest.send({type:'chat-dialogue',quoteId:'olakka',text:'Made-up line',seat:0});
  const line=(await host.wait(m=>m.type==='chat-message')).message;await guest.wait(m=>m.type==='chat-message');
  assert.equal(line.text,MOVIE_QUOTES.olakka.text);assert.equal(line.seat,1);assert.equal(line.kind,'dialogue');
  const resumed=await connect();resumed.send({type:'resume',code,token:joined.token});await resumed.wait(m=>m.type==='joined');
  assert.deepEqual((await resumed.wait(m=>m.type==='chat-history')).messages,[message,line]);
  await delay(40);assert.ok(!resumed.inbox.some(m=>m.type==='chat-message'));
  for(const c of [outside,watcher])assert.ok(!c.inbox.some(m=>m.type.startsWith('chat-')&&m.code===code));
  assert.equal(app.rooms.get(code).chat.length,2);
}));

test('invalid or rapid chat never changes a turn or closes the gameplay socket; all fifteen emotes use their sender',()=>fixture(async(app,connect)=>{
  const a=await connect(),b=await connect();a.send({type:'create',name:'A'});const {code}=await a.wait(m=>m.type==='joined');
  b.send({type:'join',code,name:'B'});await b.wait(m=>m.type==='joined');a.send({type:'start'});
  await a.wait(m=>m.type==='state'&&m.room.game);const r=app.rooms.get(code),before=JSON.stringify(r.game);
  for(const action of [{type:'chat-send',text:' '},{type:'chat-send',text:{}},{type:'chat-send',text:'x'.repeat(241)},
    {type:'chat-dialogue',quoteId:'__proto__'},{type:'chat-dialogue',quoteId:'constructor'},{type:'chat-dialogue',quoteId:'invented'}]){
    a.send(action);await a.wait(m=>m.type==='chat-error');
  }
  a.send({type:'chat-send',text:'Ready!'});await a.wait(m=>m.type==='chat-message');
  a.send({type:'chat-dialogue',quoteId:'olakka'});assert.ok((await a.wait(m=>m.type==='chat-error')).retryAfterMs>0);
  assert.equal(JSON.stringify(r.game),before);
  for(let i=0;i<100;i++)a.send({type:'chat-send',text:'flood'});
  a.send({type:'roll',revision:r.game.revision});await a.wait(m=>m.type==='state'&&m.room.game?.lastRoll?.value===6);
  assert.equal(a.ws.readyState,WebSocket.OPEN);assert.equal(r.chat.length,1);
  // The other player's independent social budget remains available during A's turn.
  for(let index=0;index<CHARACTER_EMOTES.length;index++){
    r.seats[1].lastEmote=0;r.seats[1].ws.socialWindowAt=0;b.send({type:'emote',index,seat:0});
    const event=await a.wait(m=>m.type==='emote');assert.equal(event.seat,1);assert.equal(event.text,CHARACTER_EMOTES[index].wireText);
  }
  assert.deepEqual(CHARACTER_EMOTES.slice(0,3).map(e=>e.wireText),['Nice move! ✨','Oops! 🙈','Let’s go! 🚀']);
}));

test('chat history is bounded, rejects non-member access, and remains available after finishing',()=>{
  const packets=[],ws={},other={},player={ws,id:'member',name:'A'},room={code:'ROOM',seats:[player],game:{phase:'done'}};
  ws.seat=0;const chat=createRoomChat((target,packet)=>packets.push({target,packet}));
  for(let i=0;i<CHAT_LIMIT+4;i++){player.lastChat=0;chat.handle(ws,{type:'chat-send',text:String(i)},room,player);}
  assert.equal(room.chat.length,CHAT_LIMIT);assert.equal(room.chat[0].text,'4');assert.equal(room.chat.at(-1).text,String(CHAT_LIMIT+3));
  assert.equal(new Set(room.chat.map(m=>m.id)).size,CHAT_LIMIT);
  assert.throws(()=>chat.handle(other,{type:'chat-send',text:'Spoof'},room,player),/Join/);
  assert.deepEqual(room.game,{phase:'done'});
  chat.history(ws,room);assert.equal(packets.at(-1).packet.type,'chat-history');
});
