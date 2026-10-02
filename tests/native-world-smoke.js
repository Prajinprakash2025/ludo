async (page) => {
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setViewportSize({width:1366,height:900});
  await page.goto('https://significant-birmingham-businesses-program.trycloudflare.com');
  await page.locator('#solo').click();await page.locator('#turn-controls').waitFor({state:'visible'});
  await page.waitForFunction(()=>window.jungleScene?.frames>5&&document.querySelector('#board canvas'));
  const before=await page.evaluate(()=>({...window.jungleScene}));
  if(before.renderer!=='WebGL 3D'||before.tiles!==72||before.animals!==16||before.waterfalls!==2) throw new Error('3D scene incomplete');
  if(await page.locator('img, svg image').count()) throw new Error('Raster backdrop remains');
  await page.waitForTimeout(600);
  const after=await page.evaluate(()=>({...window.jungleScene}));
  if(after.waterTime<=before.waterTime||after.fireTime<=before.fireTime) throw new Error('Water/fire stopped animating');
  await page.screenshot({path:'output/playwright/3d-forest-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.waitForTimeout(600);
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Mobile overflow');
  const aspect=await page.evaluate(()=>({camera:window.jungleScene.cameraAspect,viewport:window.jungleScene.viewportAspect}));
  if(Math.abs(aspect.camera-aspect.viewport)>.001) throw new Error('Mobile camera distorts the board');
  await page.screenshot({path:'output/playwright/3d-forest-mobile.png',fullPage:true});
  await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(300);
  if(await page.evaluate(()=>window.jungleScene.waterTime!==0||window.jungleScene.fireTime!==0)) throw new Error('Reduced motion ignored');
  await page.emulateMedia({reducedMotion:'no-preference'});
  if(errors.length) throw new Error(errors.join('\n'));
  return {publicPreview:true,renderer:after.renderer,tiles:after.tiles,animals:after.animals,waterfalls:after.waterfalls,torches:after.torchCount,waterAnimated:true,fireAnimated:true,reducedMotion:true,mobile:true,cameraAspectCorrect:true,pageErrors:errors};
}
