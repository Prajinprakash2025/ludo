async (page) => {
  const base=new URL(page.url()).origin;
  for(const context of page.context().browser().contexts()) if(context!==page.context()) await context.close();
  await page.goto(base);
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewportSize({width:1440,height:1000});
  await page.getByRole('textbox',{name:'What should we call you?'}).fill('Achu QA');
  await page.getByRole('button',{name:'Make some room'}).click();
  await page.locator('#room-screen').waitFor({state:'visible'});
  const code=new URL(page.url()).searchParams.get('room');
  const browser=page.context().browser(), contexts=[], players=[page];
  for(let i=1;i<=3;i++) {
    const context=await browser.newContext({viewport:{width:i===1?390:1280,height:i===1?844:900}});
    contexts.push(context);
    const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
    await p.goto(base+'/?room='+code);
    await p.getByRole('textbox',{name:'What should we call you?'}).fill(['','Maya QA','Ravi QA','Nila QA'][i]);
    await p.getByRole('button',{name:'Pull up a seat'}).click();
    await p.locator('#room-screen').waitFor({state:'visible'});
    players.push(p);
  }
  await page.waitForFunction(()=>document.getElementById('crew-count').textContent==='4 / 4');
  await page.screenshot({path:'output/playwright/lobby-desktop.png',fullPage:true});
  await page.getByRole('button',{name:'Start the race'}).click();
  for(const p of players) await p.locator('#turn-controls').waitFor({state:'visible'});
  let rolls=0,moves=0;
  const end=Date.now()+45000;
  while(Date.now()<end && (rolls<12 || moves<1)) {
    const active=await page.locator('#players .player-card').evaluateAll(cards=>cards.findIndex(c=>c.classList.contains('active')));
    const p=players[active];
    if(!p) throw new Error('Active player missing');
    const token=p.locator('#board .token.movable').first();
    if(await token.count()) { await token.locator('.token-hit').click(); moves++; await p.waitForTimeout(180); }
    else if(await p.locator('#roll').isEnabled()) { await p.locator('#roll').click(); rolls++; await p.waitForTimeout(180); }
    else await p.waitForTimeout(150);
  }
  if(!rolls) throw new Error('Dice control did not work');
  if(!moves) throw new Error('No playable token moved during UI smoke');
  await page.screenshot({path:'output/playwright/game-desktop.png',fullPage:true});
  const mobile=players[1];
  const overflow=await mobile.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  if(overflow) throw new Error('Mobile page overflows horizontally');
  if(!await mobile.locator('#roll').isVisible()) throw new Error('Mobile roll control is missing');
  await mobile.screenshot({path:'output/playwright/game-mobile.png',fullPage:true});
  const before=await mobile.locator('#players h3').allTextContents();
  await mobile.reload();
  await mobile.locator('#room-screen').waitFor({state:'visible'});
  const after=await mobile.locator('#players h3').allTextContents();
  if(before.join()!==after.join()) throw new Error('Player did not reconnect to the same seat');
  if(errors.length) throw new Error(errors.join('\n'));
  // Close only the dedicated guest test contexts.
  for(const context of contexts) await context.close();
  return {code,players:4,rolls,moves,mobileOverflow:overflow,reconnect:true,pageErrors:errors};
}
