import { test } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocket } from 'ws';
import { createLudoServer } from '../server.mjs';
import { normalizeBackendUrl, socketAddress, inviteAddress } from '../src/hosting.js';

test('split hosting uses secure direct sockets and invites retain the frontend path',() => {
  const frontend = 'https://crew.netlify.app/?room=OLD123';
  assert.equal(socketAddress('https://ludoloop.pythonanywhere.com',frontend),'wss://ludoloop.pythonanywhere.com/');
  assert.equal(inviteAddress('ABC234','https://backend.example','https://example.github.io/ludo/?room=OLD123','https://backend.example'),'https://example.github.io/ludo/?room=ABC234');
  assert.equal(inviteAddress('ABC234','',frontend,'http://192.168.1.2:4173'),'http://192.168.1.2:4173/?room=ABC234');
  assert.equal(socketAddress('','http://localhost:4173/'),'ws://localhost:4173/');
  assert.throws(() => socketAddress('http://backend.example',frontend),/HTTPS/);
  for (const value of ['https://user:password@example.com','https://example.com/private','https://example.com/?key=secret','file:///test']) {
    assert.throws(() => normalizeBackendUrl(value));
  }
});

async function joinedFrom(url,origin,options = {}) {
  const ws = new WebSocket(url,{origin,...options});
  const result = await new Promise((resolve,reject) => {
    const timer = setTimeout(() => reject(new Error('Socket test timeout')),3000);
    ws.once('error',error => { clearTimeout(timer); reject(error); });
    ws.once('open',() => ws.send(JSON.stringify({type:'create',name:'Hosting test'})));
    ws.on('message',raw => {
      const message = JSON.parse(raw);
      if (message.type === 'joined') { clearTimeout(timer); resolve(message); }
    });
    ws.once('close',(code,reason) => { clearTimeout(timer); resolve({closeCode:code,reason:String(reason)}); });
  });
  ws.terminate();
  return result;
}

test('real sockets allow only configured foreign frontend origins and preserve same-host play',async () => {
  const app = createLudoServer({allowedOrigins:'https://crew.netlify.app',publicUrl:'https://crew.netlify.app'});
  await new Promise(resolve => app.server.listen(0,'127.0.0.1',resolve));
  const url = 'ws://127.0.0.1:'+app.server.address().port;
  try {
    const permitted = await joinedFrom(url,'https://crew.netlify.app');
    assert.equal(permitted.type,'joined');
    assert.equal(permitted.shareBase,'https://crew.netlify.app');
    for (const origin of ['https://unapproved.netlify.app','https://crew.netlify.app.evil.example','null']) {
      assert.equal((await joinedFrom(url,origin)).closeCode,1008);
    }
    assert.equal((await joinedFrom(url,url.replace('ws:','http:'))).type,'joined');
  } finally { await app.close(); }
});

test('normal server startup serves health and WebSocket rooms over a hosting IPC socket',async () => {
  const socketPath = process.platform === 'win32'
    ? '\\\\.\\pipe\\ludo-hosting-'+randomUUID()
    : join(tmpdir(),'ludo-'+randomUUID()+'.sock');
  const child = spawn(process.execPath,[fileURLToPath(new URL('../server.mjs',import.meta.url))],{
    env:{...process.env,DOMAIN_SOCKET:socketPath,ALLOWED_ORIGINS:'https://crew.netlify.app',PUBLIC_URL:'https://crew.netlify.app'},
    stdio:['ignore','pipe','pipe']
  });
  try {
    await new Promise((resolve,reject) => {
      let output = '';
      const timer = setTimeout(() => reject(new Error('Hosting startup timed out')),5000);
      child.stdout.on('data',data => {
        output += data;
        if (output.includes('ready on hosting socket')) { clearTimeout(timer); resolve(); }
      });
      child.once('error',error => { clearTimeout(timer); reject(error); });
      child.once('exit',code => { clearTimeout(timer); reject(new Error('Server exited: '+code)); });
    });
    const body = await new Promise((resolve,reject) => {
      http.get({socketPath,path:'/health'},res => {
        let body = ''; res.on('data',data => body += data); res.on('end',() => resolve({status:res.statusCode,body}));
      }).on('error',reject);
    });
    assert.equal(body.status,200);
    assert.deepEqual(JSON.parse(body.body),{ok:true});
    const room = await joinedFrom('ws://localhost/','https://crew.netlify.app',{
      createConnection:() => net.connect({path:socketPath})
    });
    assert.equal(room.type,'joined');
    assert.equal(room.shareBase,'https://crew.netlify.app');
  } finally {
    if (child.exitCode === null) {
      const closed = new Promise(resolve => child.once('exit',resolve));
      child.kill(); await closed;
    }
  }
});
