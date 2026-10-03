// Isolated browser-test fixture. Never used by START-GAME or the public server.
import http from 'node:http';
import {createLudoServer} from '../server.mjs';
import {createGame} from '../game.mjs';
let die=2;
const app=createLudoServer({die:()=>die,turnMs:60000});
app.server.listen(4174,'127.0.0.1',()=>console.log('Visual QA game at localhost:4174'));
const control=http.createServer((req,res)=>{
  const q=new URL(req.url,'http://127.0.0.1').searchParams;
  const r=app.rooms.get(q.get('code'));
  if(!r) {res.writeHead(404);res.end();return;}
  const g=createGame(r.seats),kind=q.get('kind');
  // A lower fixture revision tells clients this is a fresh seeded game, so
  // they snap to its positions rather than replaying fabricated token moves.
  g.revision=(r.game?.revision||0)-100;g.deadline=Date.now()+60000;
  if(kind==='five') {die=5;g.tokens[0][0]=4;}
  else if(kind==='capture'||kind==='capture-stack') {
    const actor=Number(q.get('seat')||0),victim=(actor+1)%4;
    if(!Number.isInteger(actor)||actor<0||actor>3){res.writeHead(400);res.end();return;}
    die=2;g.turn=actor;g.tokens[actor][0]=13;
    if(kind==='capture-stack')g.tokens[victim].fill(2);else g.tokens[victim][0]=2;
  }
  else if(kind==='safe') {die=2;g.tokens[0][0]=11;g.tokens[1][0]=0;}
  else if(kind==='lane') {die=3;g.tokens[0][0]=50;}
  else if(kind==='remote') {die=2;g.turn=1;g.tokens[1][0]=0;}
  else if(kind==='win') {die=1;g.tokens[0]=[56,56,56,55];}
  else if(kind==='podium') {die=1;g.tokens[0]=[56,56,56,55];g.tokens[1]=[56,56,56,55];}
  else if(kind==='party') {
    g.tokens[2]=[56,56,56,56];g.tokens[3]=[56,56,56,56];g.active=[0,1];g.winner=2;
    g.placements=[{seat:2,name:r.seats[2].name,place:1},{seat:3,name:r.seats[3].name,place:2}];
    g.phase='celebration';g.celebration={id:g.revision,seats:[2,3],startedAt:Date.now(),endsAt:Date.now()+20000,final:true};g.deadline=g.celebration.endsAt;
  }
  else if(kind==='entry') {die=6;}
  else if(kind==='stack') {die=2;g.tokens[0]=[13,13,-1,-1];g.tokens[1]=[0,0,0,0];}
  r.game=kind==='lobby'?null:g;
  const packet=JSON.stringify({type:'state',room:{code:r.code,owner:r.owner,mode:r.mode,revision:r.revision,
    seats:r.seats.map(p=>p?{name:p.name,bot:p.bot,connected:p.bot||!!p.ws,id:p.id}:null),game:r.game,serverTime:Date.now()}});
  for(const p of r.seats) if(p?.ws?.readyState===1) p.ws.send(packet);
  res.end('ok');
});
control.listen(4175,'127.0.0.1');
process.on('SIGINT',async()=>{control.close();await app.close();process.exit();});
