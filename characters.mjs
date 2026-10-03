export const CHARACTERS=[
  {id:'bear',name:'Bear',icon:'🐻',fur:'#a76535',cream:'#efd8a7',dark:'#694326',dance:0},
  {id:'panda',name:'Panda',icon:'🐼',fur:'#fff6df',cream:'#fff7e6',dark:'#18251f',dance:1},
  {id:'deer',name:'Deer',icon:'🦌',fur:'#d3a252',cream:'#efd8a7',dark:'#694326',dance:2},
  {id:'fox',name:'Fox',icon:'🦊',fur:'#e77d25',cream:'#fff3d9',dark:'#694326',dance:3},
  {id:'rabbit',name:'Rabbit',icon:'🐰',fur:'#e9ddd1',cream:'#fff8ed',dark:'#b78f85',dance:2},
  {id:'tiger',name:'Tiger',icon:'🐯',fur:'#f4a32c',cream:'#fff1cc',dark:'#493021',dance:3},
  {id:'monkey',name:'Monkey',icon:'🐵',fur:'#98613c',cream:'#f5d6a0',dark:'#61412d',dance:0},
  {id:'raccoon',name:'Raccoon',icon:'🦝',fur:'#939895',cream:'#e9e9d8',dark:'#323d3c',dance:1}
];
export const DEFAULT_CHARACTERS=['bear','panda','deer','fox'];
export function characterById(id){return CHARACTERS.find(c=>c.id===id);}
export function seatCharacter(player,seat){return characterById(player?.character)||characterById(DEFAULT_CHARACTERS[seat]||'bear');}
export function availableCharacter(seats,requested,seat){
  const used=new Set(seats.filter(Boolean).map(p=>p.character));
  if(requested!==undefined){
    if(!characterById(requested))throw new Error('Choose a valid forest character.');
    if(used.has(requested))throw new Error('That character is taken. Choose another explorer.');
    return requested;
  }
  return [DEFAULT_CHARACTERS[seat],...CHARACTERS.map(c=>c.id)].find(id=>!used.has(id));
}
