async (page) => {
  const errors = [], requests = [], sockets = [];
  page.on('pageerror',e => errors.push(e.message));
  page.on('request',r => requests.push(r.url()));
  page.on('websocket',ws => sockets.push(ws.url()));
  await page.goto('http://127.0.0.1:4184/');
  await page.locator('#connection-text').getByText('Ready to play').waitFor();
  await page.locator('#name').fill('Host QA');
  await page.locator('#begin').click();
  await page.locator('#room-screen').waitFor({state:'visible'});
  const code = new URL(page.url()).searchParams.get('room');
  const contexts = [], peers = [page];
  try {
    for (let i = 1; i < 4; i++) {
      const context = await page.context().browser().newContext({viewport:{width:i===1?390:1280,height:900}});
      contexts.push(context);
      const peer = await context.newPage();
      peer.on('pageerror',e => errors.push(e.message));
      peer.on('websocket',ws => sockets.push(ws.url()));
      await peer.goto('http://127.0.0.1:4184/?room='+code);
      await peer.locator('#name').fill('Guest '+i);
      await peer.locator('#begin').click();
      await peer.locator('#room-screen').waitFor({state:'visible'});
      peers.push(peer);
    }
    await page.waitForFunction(() => document.getElementById('crew-count').textContent === '4 / 4');
    await page.getByRole('button',{name:'Start the race'}).click();
    await page.locator('#roll').click();
    await page.locator('#board .token.movable').first().waitFor();
    await page.locator('#board .token.movable').first().press('Enter');
    for (const peer of peers) {
      await peer.waitForFunction(() => document.querySelector('#board [data-seat="0"][data-token="0"]')?.getAttribute('data-visual-step') === '0');
    }
    await page.getByRole('button',{name:'Dance with my characters'}).click();
    await Promise.all(peers.map(peer => peer.waitForFunction(() => window.jungleScene?.emotes?.some(e => e.seat===0 && e.kind==='dance' && e.participants===4))));
    await page.context().grantPermissions(['clipboard-read','clipboard-write']);
    await page.locator('#copy-link').click();
    const invite = await page.evaluate(() => navigator.clipboard.readText());
    if (invite !== 'http://127.0.0.1:4184/?room='+code) throw new Error('Invite opened the backend');
    await peers[1].reload();
    await peers[1].locator('#room-screen').waitFor({state:'visible'});
    if (await peers[1].locator('#you-label').textContent() !== 'YOU ARE PANDA') throw new Error('Reconnect changed the seat');
    if (await peers[1].evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error('Mobile overflow');
    if (requests.some(url => url.endsWith('/game.mjs'))) throw new Error('Frontend still depends on backend game.mjs');
    if (sockets.length < 4 || sockets.some(url => url !== 'ws://127.0.0.1:4185/')) throw new Error('Frontend connected to wrong backend');
    if (errors.length) throw new Error(errors.join('\n'));
    await page.screenshot({path:'output/playwright/split-host-desktop.png',fullPage:true});
    await peers[1].screenshot({path:'output/playwright/split-host-mobile.png',fullPage:true});
    return {players:4,backendSockets:sockets.length,separateOrigins:true,moveSynced:true,emoteSynced:true,reconnect:true,pageErrors:errors};
  } finally { for (const context of contexts) await context.close(); }
}
