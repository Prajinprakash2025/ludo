// Run through playwright-cli against the isolated visual fixture (port 4174).
async (page) => {
  const context=await page.context().browser().newContext({viewport:{width:390,height:600},deviceScaleFactor:3,isMobile:true,hasTouch:true});
  const phone=await context.newPage(),errors=[];
  await context.route('**/app.js',r=>r.fulfill({path:'output/playwright/movie-comedy-app.js',contentType:'text/javascript'}));
  phone.on('pageerror',e=>errors.push(e.message));
  try {
    await phone.goto('http://127.0.0.1:4174');
    await phone.locator('#preview-board').scrollIntoViewIfNeeded();
    await phone.waitForFunction(()=>window.jungleScene?.frames>5);
    await phone.evaluate(()=>window.scrollTo(0,0));
    await phone.waitForTimeout(400);
    const offscreen=await phone.locator('#preview-board').boundingBox();
    if(offscreen.y<600)throw new Error('Preview was not outside the viewport');
    const stopped=await phone.evaluate(()=>window.jungleScene.frames);
    await phone.waitForTimeout(300);
    if(await phone.evaluate(previous=>window.jungleScene.frames!==previous,stopped))throw new Error('Offscreen preview kept rendering');
    await phone.locator('#preview-board').scrollIntoViewIfNeeded();
    await phone.waitForFunction(previous=>window.jungleScene.frames>previous,stopped);
    await phone.locator('#solo').click();
    await phone.locator('#turn-controls').waitFor({state:'visible'});
    await phone.waitForFunction(()=>document.querySelector('#board canvas'));
    const quality=await phone.evaluate(()=>({
      ...window.jungleScene,
      canvasWidth:document.querySelector('#board canvas').width,
      cssWidth:document.querySelector('#board canvas').getBoundingClientRect().width
    }));
    const pixelRatio=quality.canvasWidth/quality.cssWidth;
    if(quality.quality!=='mobile-smooth'||Math.abs(pixelRatio-1.65)>.01||quality.characterDetail!=='full')throw new Error('Balanced mobile character quality missing');
    const before=quality.waterTime;
    await phone.waitForFunction(previous=>window.jungleScene.waterTime>previous&&window.jungleScene.fireTime>previous,before);
    await phone.getByRole('button',{name:'Wave with my characters'}).click();
    await phone.waitForFunction(()=>window.jungleScene.emotes?.some(e=>e.kind==='wave'&&e.seat===0&&e.participants===4));
    await phone.locator('#board').screenshot({path:'output/playwright/mobile-clarity-balanced.png'});
    if(errors.length)throw new Error(errors.join('\n'));
    return {highDpiMobile:true,pixelRatio,fullCharacterDetail:true,offscreenStops:true,visibleResumes:true,waterAndFireAnimate:true,wave:true,quality:quality.quality,budget:{drawCalls:quality.drawCalls,triangles:quality.triangles,animals:quality.animals},pageErrors:errors};
  } finally {await context.close();}
}
