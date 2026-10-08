// Keep the first three wire messages compatible with existing clients.
export const CHARACTER_EMOTES = [
  {kind:'jump',label:'Jump',icon:'🐾',wireText:'Nice move! ✨'},
  {kind:'dance',label:'Dance',icon:'💃',wireText:'Oops! 🙈'},
  {kind:'wave',label:'Wave',icon:'👋',wireText:'Let’s go! 🚀'},
  {kind:'celebrate',label:'Celebrate',icon:'🎉',wireText:'Good game! 🤝'},
  {kind:'laugh',label:'Laugh',icon:'😂',wireText:'Ha ha! 😂'},
  {kind:'scared',label:'പേടിച്ചു!',icon:'😱',wireText:'Scared! 😱'},
  {kind:'flee',label:'ഓടിക്കോ!',icon:'🏃',wireText:'Run away! 🏃'},
  {kind:'taunt',label:'പിടിക്കാമോ?',icon:'😜',wireText:'Catch me! 😜'},
  {kind:'cry',label:'കരച്ചിൽ',icon:'😭',wireText:'Boo hoo! 😭'},
  {kind:'angry',label:'ദേഷ്യം',icon:'😤',wireText:'Angry stomp! 😤'},
  {kind:'sneak',label:'പതുങ്ങി നടപ്പ്',icon:'🥷',wireText:'Sneaky steps! 🥷'},
  {kind:'faint',label:'മയങ്ങി വീണു',icon:'😵',wireText:'Dramatic faint! 😵',duration:3.2},
  {kind:'bow',label:'നമസ്കാരം',icon:'🙇',wireText:'Take a bow! 🙇'},
  {kind:'flex',label:'മസിൽ ഷോ',icon:'💪',wireText:'Muscle show! 💪'},
  {kind:'spin',label:'വട്ടം കറക്കം',icon:'🌀',wireText:'Silly spin! 🌀'}
];

export const EMOTE_VERSION = 3;
export const emoteDuration = kind => CHARACTER_EMOTES.find(e=>e.kind===kind)?.duration || (kind==='dance'?2.8:kind==='wave'?2.4:['jump','celebrate','laugh'].includes(kind)?2.2:2.6);
export const emoteMinVersion = index => index<3?0:index<5?2:EMOTE_VERSION;
