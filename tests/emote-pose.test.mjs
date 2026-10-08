import test from 'node:test';
import assert from 'node:assert/strict';
import {funnyEmotePose} from '../src/emote-pose.js';
import {CHARACTER_EMOTES,emoteDuration,emoteMinVersion} from '../emotes.mjs';
const joint=()=>({rotation:{x:0,y:0,z:0},position:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}});
const actor=()=>({body:joint(),head:joint(),eyes:joint(),arms:[joint(),joint()],feet:[joint(),joint()]});

test('ten new emotes have distinct bounded joint poses and restore at zero strength',()=>{
  assert.equal(CHARACTER_EMOTES.length,15);
  const signatures=[];
  for(const {kind} of CHARACTER_EMOTES.slice(5)){
    const samples=[];
    for(const age of [.1,.45,.9,1.4,2.2]){
      const a=actor();assert.equal(funnyEmotePose(a,kind,age,1),true);
      samples.push(a);
      for(const j of [a.body,a.head,a.eyes,...a.arms,...a.feet]){
        for(const group of ['rotation','position','scale'])for(const n of Object.values(j[group]))assert.ok(Number.isFinite(n));
      }
      assert.ok(Math.abs(a.body.position.x)<=.11&&Math.abs(a.body.position.y)<=.23,'Pose drifts away from the board cell');
    }
    signatures.push(JSON.stringify(samples));
    const neutral=actor();funnyEmotePose(neutral,kind,1,0);assert.equal(JSON.stringify(neutral),JSON.stringify(actor()),'Pose remains after fading');
    assert.ok(emoteDuration(kind)<3.5);
  }
  assert.equal(new Set(signatures).size,10,'New actions share the same motion');
  assert.deepEqual(CHARACTER_EMOTES.map((_,i)=>emoteMinVersion(i)),[0,0,0,2,2,3,3,3,3,3,3,3,3,3,3]);
});
