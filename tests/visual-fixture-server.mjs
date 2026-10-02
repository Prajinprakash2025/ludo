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
  g.revision=(r.game?.revision||0)+10;g.deadline=Date.now()+60000;
  if(kind==='five') {die=5;g.tokens[0][0]=4;}
  else if(kind==='capture') {die=2;g.tokens[0][0]=13;g.tokens[1][0]=2;}
  else if(kind==='safe') {die=2;g.tokens[0][0]=11;g.tokens[1][0]=0;}
  else if(kind==='lane') {die=3;g.tokens[0][0]=50;}
  else if(kind==='remote') {die=2;g.turn=1;g.tokens[1][0]=0;}
  else if(kind==='win') {die=1;g.tokens[0]=[56,56,56,55];}
  else if(kind==='entry') {die=6;}
  else if(kind==='stack') {die=2;g.tokens[0]=[13,13,-1,-1];g.tokens[1]=[0,0,0,0];}
  else if(kind==='lobby') {r.game=null;res.end('ok');return;}
  r.game=g;res.end('ok');
});
control.listen(4175,'127.0.0.1');
process.on('SIGINT',async()=>{control.close();await app.close();process.exit();});
