import {characterById} from '../characters.mjs';

// The picker, portraits and WebGL fallback share the same recognizable features.
export function characterSvg(id,color='#64b85d'){
  const c=characterById(id)||characterById('bear'),{fur,dark,cream}=c;
  const ellipse=(x,y,rx,ry,fill)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}"/>`;
  let ears='',details='',tail='';
  for(const sign of [-1,1]){
    const x=sign*.27;
    if(id==='rabbit')ears+=ellipse(sign*.18,-.85,.105,.32,fur)+ellipse(sign*.18,-.87,.055,.23,'#eeadad');
    else if(id==='fox'||id==='raccoon')ears+=`<path d="M${x-sign*.12} -.6L${x+sign*.07} -.95L${x+sign*.13} -.53" fill="${fur}" stroke="${dark}" stroke-width=".025"/>`;
    else ears+=ellipse(x,-.68,id==='monkey'?.19:.15,.15,id==='panda'?dark:fur)+ellipse(x,-.68,.085,.085,id==='monkey'?cream:'#d39b7d');
  }
  if(id==='deer')ears+='<path d="M-.2 -.7L-.27 -1.05M-.27 -.91L-.43 -1M-.27 -.91L-.18 -1.03M.2 -.7L.27 -1.05M.27 -.91L.43 -1M.27 -.91L.18 -1.03" stroke="#845c34" stroke-width=".065" fill="none" stroke-linecap="round"/>';
  if(id==='fox'||id==='raccoon')tail=`<path d="M.2 .09Q.7 .12.52 -.32" stroke="${fur}" stroke-width=".19" fill="none" stroke-linecap="round"/><path d="M.48 -.23L.52 -.32" stroke="${id==='fox'?cream:dark}" stroke-width=".18" stroke-linecap="round"/>`;
  if(id==='monkey')tail=`<path d="M.2 .08Q.68 .25.58 -.2Q.49 -.34.4 -.17" stroke="${fur}" stroke-width=".075" fill="none" stroke-linecap="round"/>`;
  if(id==='rabbit')tail=ellipse(.28,.12,.13,.13,cream);
  if(id==='panda')details=ellipse(-.14,-.48,.115,.14,dark)+ellipse(.14,-.48,.115,.14,dark);
  if(id==='raccoon')details=`<path d="M-.31 -.57Q0 -.65.31 -.57L.3 -.4Q0 -.32-.3 -.4Z" fill="${dark}"/>`;
  if(id==='monkey')details=ellipse(-.13,-.48,.17,.19,cream)+ellipse(.13,-.48,.17,.19,cream);
  if(id==='tiger')details=`<path d="M-.16 -.73L-.1 -.58M0 -.76V-.59M.16 -.73L.1 -.58M-.32 -.5L-.23 -.46M.32 -.5L.23 -.46" stroke="${dark}" stroke-width=".05" stroke-linecap="round"/>`;
  const teeth=id==='rabbit'?'<rect x="-.07" y="-.27" width=".14" height=".12" rx=".025" fill="white"/><path d="M0 -.27V-.16" stroke="#ba988d" stroke-width=".015"/>':'';
  return `<g class="animal-stride">${tail}${ears}<g class="animal-body"><rect x="-.29" y="-.24" width=".58" height=".47" rx=".15" fill="${color}" stroke="#493f24" stroke-width=".035"/><rect x=".19" y="-.27" width=".17" height=".37" rx=".07" fill="#927344"/><path d="M-.18 -.25L.15 .12" stroke="#eac980" stroke-width=".055"/>${ellipse(-.27,-.03,.085,.13,fur)}<ellipse class="animal-foot foot-left" cx="-.17" cy=".2" rx=".12" ry=".09" fill="${dark}"/><ellipse class="animal-foot foot-right" cx=".17" cy=".2" rx=".12" ry=".09" fill="${dark}"/></g><g class="animal-head">${ellipse(0,-.46,.34,.3,fur)}${details}${ellipse(0,-.32,.19,.13,cream)}<g class="animal-eyes">${ellipse(-.13,-.48,.046,.063,'#222a20')}${ellipse(.13,-.48,.046,.063,'#222a20')}${ellipse(-.14,-.5,.015,.015,'white')}${ellipse(.12,-.5,.015,.015,'white')}</g>${ellipse(0,-.33,.058,.042,'#35291e')}<path d="M0 -.31V-.27Q-.07 -.22-.1 -.28M0 -.27Q.07 -.22.1 -.28" stroke="#614735" stroke-width=".025" fill="none" stroke-linecap="round"/>${teeth}${ellipse(-.23,-.35,.046,.025,'#ef8d76')}${ellipse(.23,-.35,.046,.025,'#ef8d76')}</g></g>`;
}
