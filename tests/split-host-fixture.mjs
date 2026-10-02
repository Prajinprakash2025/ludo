// Test-only split deployment: static frontend 4184, authoritative backend 4185.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { createLudoServer } from '../server.mjs';
import { buildFrontend } from '../scripts/build.mjs';

await buildFrontend({backendUrl:'http://127.0.0.1:4185',outfile:'output/split-public/app.js'});
const app = createLudoServer({die:() => 6,turnMs:120000,allowedOrigins:'http://127.0.0.1:4184',publicUrl:'http://127.0.0.1:4184'});
const files = {
  '/':['../public/index.html','text/html'],
  '/styles.css':['../public/styles.css','text/css'],
  '/app.js':['../output/split-public/app.js','text/javascript']
};
const frontend = http.createServer(async (req,res) => {
  const file = files[new URL(req.url,'http://localhost').pathname];
  if (!file) { res.writeHead(404); res.end(); return; }
  try {
    const data = await readFile(new URL(file[0],import.meta.url));
    res.writeHead(200,{'Content-Type':file[1],'Cache-Control':'no-store'}); res.end(data);
  } catch { res.writeHead(500); res.end(); }
});
app.server.listen(4185,'127.0.0.1');
frontend.listen(4184,'127.0.0.1',() => console.log('Split hosting QA at http://127.0.0.1:4184'));
process.on('SIGINT',async () => { frontend.close(); await app.close(); process.exit(); });
