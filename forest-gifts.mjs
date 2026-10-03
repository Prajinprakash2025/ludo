// Cosmetic rewards only: these never influence dice, captures or placement.
export const GIFT_DURATION = 3000;
export const OUTFITS = ['Explorer', 'Forest pirate', 'Leaf royalty', 'Flower friend', 'Party pal', 'Sky explorer'];
const SPOTS = [4,6,10,16,18,23,29,31,36,42,44,49];
export function createForestGifts() {
  return {moves:0,tiles:[4,30],counts:[0,0,0,0],outfits:Array.from({length:4},()=>Array(4).fill(null))};
}
export function awardForestGift(g, move, pick = limit => Math.floor(Math.random()*limit)) {
  const f = g.forestGifts;
  if (!f) return null; // Existing rooms from an older server have no rewards.
  const target = move.next <= 50 ? (move.seat*13+move.next)%52 : -1;
  let gift = null;
  if (move.old >= 0 && !move.captured.length && f.tiles.includes(target) &&
      f.counts[move.seat] < 2 && f.outfits[move.seat][move.token] === null) {
    const used = new Set(f.outfits[move.seat].filter(Number.isInteger));
    const choices = OUTFITS.map((_,i)=>i).filter(i=>!used.has(i));
    const outfit = choices[pick(choices.length)];
    f.outfits[move.seat][move.token] = outfit;
    f.counts[move.seat]++;
    gift = {id:move.id,seat:move.seat,token:move.token,outfit};
  }
  f.moves++;
  if (f.moves%8 === 0) {
    const first = SPOTS[(f.moves/8)%SPOTS.length];
    f.tiles = [first,(first+26)%52];
  }
  return gift;
}
