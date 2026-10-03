var Nu=0,ih=1,Fu=2;var Ss=1,Ou=2,mr=3,Ki=0,dn=1,Jt=2,ai=0,gr=1,sh=2,rh=3,ah=4,Bu=5;var bs=100,ku=101,zu=102,Vu=103,Gu=104,Hu=200,Wu=201,Xu=202,qu=203,oh=204,lh=205,Yu=206,Zu=207,Ju=208,$u=209,Ku=210,Qu=211,ju=212,ed=213,td=214,bo=0,wo=1,To=2,er=3,Eo=4,Ao=5,Co=6,Ro=7,ch=0,nd=1,id=2,Hn=0,hh=1,uh=2,dh=3,wa=4,fh=5,ph=6,mh=7;var gh=300,Qi=301,ws=302,sl=303,rl=304,Ta=306,tr=1e3,Qn=1001,Io=1002,Yt=1003,sd=1004;var Ea=1005;var Kt=1006,al=1007;var ji=1008;var _n=1009,xh=1010,_h=1011,xr=1012,ol=1013,Wn=1014,Rn=1015,Xn=1016,ll=1017,cl=1018,_r=1020,yh=35902,vh=35899,Mh=1021,Sh=1022,In=1023,ei=1026,es=1027,hl=1028,ul=1029,ts=1030,dl=1031;var fl=1033,Aa=33776,Ca=33777,Ra=33778,Ia=33779,pl=35840,ml=35841,gl=35842,xl=35843,_l=36196,yl=37492,vl=37496,Ml=37488,Sl=37489,Pa=37490,bl=37491,wl=37808,Tl=37809,El=37810,Al=37811,Cl=37812,Rl=37813,Il=37814,Pl=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Bl=36492,kl=36494,zl=36495,Vl=36283,Gl=36284,La=36285,Hl=36286;var qr=2300,Po=2301,Mo=2302,qc=2303,Yc=2400,Zc=2401,Jc=2402;var rd=3200;var Wl=0,ad=1,Pi="",qt="srgb",Yr="srgb-linear",Zr="linear",Et="srgb";var So=7680;var od=519,ld=512,cd=513,hd=514,Xl=515,ud=516,dd=517,ql=518,fd=519,Yl=35044,ns=35048;var bh="300 es",Vn=2e3,nr=2001;function Pf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=Jr("canvas");return i.style.display="block",i}var iu={},ir=null;function wh(...i){let e="THREE."+i.shift();ir?ir("log",e,...i):console.log(e,...i)}function md(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=md(i);let e="THREE."+i.shift();if(ir)ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=md(i);let e="THREE."+i.shift();if(ir)ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function xs(...i){let e=i.join(" ");e in iu||(iu[e]=!0,st(...i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xd={[bo]:wo,[To]:Co,[Eo]:Ro,[er]:Ao,[wo]:bo,[Co]:To,[Ro]:Eo,[Ao]:er},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=1234567,Gr=Math.PI/180,sr=180/Math.PI;function Ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Th(i,e){return(i%e+e)%e}function Df(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Uf(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function Nf(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function Ff(i,e=1){return e-Math.abs(Th(i,e*2)-e)}function Of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zf(i,e){return i+Math.random()*(e-i)}function Vf(i){return i*(.5-Math.random())}function Gf(i){i!==void 0&&(su=i);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hf(i){return i*Gr}function Wf(i){return i*sr}function Xf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*d,o*h,o*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Li={DEG2RAD:Gr,RAD2DEG:sr,generateUUID:Ts,clamp:_t,euclideanModulo:Th,mapLinear:Df,inverseLerp:Uf,lerp:Hr,damp:Nf,pingpong:Ff,smoothstep:Of,smootherstep:Bf,randInt:kf,randFloat:zf,randFloatSpread:Vf,seededRandom:Gf,degToRad:Hf,radToDeg:Wf,isPowerOfTwo:Xf,ceilPowerOfTwo:qf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:Zf,normalize:ln,denormalize:Qs},Ee=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ni=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==x){let g=l*u+c*d+h*x+f*v;g<0&&(u=-u,d=-d,x=-x,v=-v,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),M=Math.sin(b);p=Math.sin(p*b)/M,o=Math.sin(o*b)/M,l=l*p+u*o,c=c*p+d*o,h=h*p+x*o,f=f*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+x*o,f=f*p+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*d-c*u,e[t+1]=l*x+h*u+c*f-o*d,e[t+2]=c*x+h*d+o*u-l*f,e[t+3]=h*x-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new L,ru=new ni,ct=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],v=s[0],g=s[3],p=s[6],b=s[1],M=s[4],m=s[7],S=s[2],T=s[5],A=s[8];return r[0]=a*v+o*b+l*S,r[3]=a*g+o*M+l*T,r[6]=a*p+o*m+l*A,r[1]=c*v+h*b+f*S,r[4]=c*g+h*M+f*T,r[7]=c*p+h*m+f*A,r[2]=u*v+d*b+x*S,r[5]=u*g+d*M+x*T,r[8]=u*p+d*m+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=t*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new ct,au=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){let i={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yr]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var vt=Jf();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=Jr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$f=0,rr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bc(s[a].image)):r.push(bc(s[a]))}else r=bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var Kf=0,wc=new L,hn=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=Kt,a=ji,o=In,l=_n,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ts(),this.name="",this.source=new rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=gh;hn.DEFAULT_ANISOTROPY=1;var Pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,m=(d+1)/2,S=(p+1)/2,T=(h+u)/4,A=(f+v)/4,_=(x+g)/4;return M>m&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=A/n):m>S?m<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),n=T/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(f-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Do=class extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new hn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new rr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+x*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,x=c*h,v=c*f;t[0]=u+v*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,x=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=x*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=x*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+x,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,d=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,jf)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ki.crossVectors(n,vn),ki.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ki.crossVectors(n,vn)),ki.normalize(),$a.crossVectors(vn,ki),s[0]=ki.x,s[4]=$a.x,s[8]=vn.x,s[1]=ki.y,s[5]=$a.y,s[9]=vn.y,s[2]=ki.z,s[6]=$a.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],v=n[6],g=n[10],p=n[14],b=n[3],M=n[7],m=n[11],S=n[15],T=s[0],A=s[4],_=s[8],E=s[12],R=s[1],B=s[5],W=s[9],$=s[13],k=s[2],Z=s[6],te=s[10],ie=s[14],xe=s[3],se=s[7],le=s[11],de=s[15];return r[0]=a*T+o*R+l*k+c*xe,r[4]=a*A+o*B+l*Z+c*se,r[8]=a*_+o*W+l*te+c*le,r[12]=a*E+o*$+l*ie+c*de,r[1]=h*T+f*R+u*k+d*xe,r[5]=h*A+f*B+u*Z+d*se,r[9]=h*_+f*W+u*te+d*le,r[13]=h*E+f*$+u*ie+d*de,r[2]=x*T+v*R+g*k+p*xe,r[6]=x*A+v*B+g*Z+p*se,r[10]=x*_+v*W+g*te+p*le,r[14]=x*E+v*$+g*ie+p*de,r[3]=b*T+M*R+m*k+S*xe,r[7]=b*A+M*B+m*Z+S*se,r[11]=b*_+M*W+m*te+S*le,r[15]=b*E+M*$+m*ie+S*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],x=e[3],v=e[7],g=e[11],p=e[15],b=l*d-c*u,M=o*d-c*f,m=o*u-l*f,S=a*d-c*h,T=a*u-l*h,A=a*f-o*h;return t*(v*b-g*M+p*m)-n*(x*b-g*S+p*T)+s*(x*M-v*S+p*A)-r*(x*m-v*T+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],x=e[12],v=e[13],g=e[14],p=e[15],b=t*o-n*a,M=t*l-s*a,m=t*c-r*a,S=n*l-s*o,T=n*c-r*o,A=s*c-r*l,_=h*v-f*x,E=h*g-u*x,R=h*p-d*x,B=f*g-u*v,W=f*p-d*v,$=u*p-d*g,k=b*$-M*W+m*B+S*R-T*E+A*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/k;return e[0]=(o*$-l*W+c*B)*Z,e[1]=(s*W-n*$-r*B)*Z,e[2]=(v*A-g*T+p*S)*Z,e[3]=(u*T-f*A-d*S)*Z,e[4]=(l*R-a*$-c*E)*Z,e[5]=(t*$-s*R+r*E)*Z,e[6]=(g*m-x*A-p*M)*Z,e[7]=(h*A-u*m+d*M)*Z,e[8]=(a*W-o*R+c*_)*Z,e[9]=(n*R-t*W-r*_)*Z,e[10]=(x*T-v*m+p*b)*Z,e[11]=(f*m-h*T-d*b)*Z,e[12]=(o*E-a*B-l*_)*Z,e[13]=(t*B-n*E+s*_)*Z,e[14]=(v*M-x*S-g*b)*Z,e[15]=(h*S-f*M+u*b)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,v=a*h,g=a*f,p=o*f,b=l*c,M=l*h,m=l*f,S=n.x,T=n.y,A=n.z;return s[0]=(1-(v+p))*S,s[1]=(d+m)*S,s[2]=(x-M)*S,s[3]=0,s[4]=(d-m)*T,s[5]=(1-(u+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(x+M)*A,s[9]=(g-b)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,h=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),x,v;if(l)x=r/(a-r),v=a*r/(a-r);else if(o===Vn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===nr)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),x,v;if(l)x=1/(a-r),v=a/(a-r);else if(o===Vn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===nr)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new L,On=new wt,Qf=new L(0,0,0),jf=new L(1,1,1),ki=new L,$a=new L,vn=new L,lu=new wt,cu=new ni,Ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,hu=new L,zs=new ni,yi=new wt,Ka=new L,Ur=new L,tp=new L,np=new ni,uu=new L(1,0,0),du=new L(0,1,0),fu=new L(0,0,1),pu={type:"added"},ip={type:"removed"},Vs={type:"childadded",child:null},Tc={type:"childremoved",child:null},Ot=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ti,n=new ni,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new ct}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ur,Ka,this.up):yi.lookAt(Ka,Ur,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(yi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new L(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Th(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ec(a,r,e+1/3),this.g=Ec(a,r,e),this.b=Ec(a,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=_d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return vt.workingToColorSpace(tn.copy(this),e),Math.round(_t(tn.r*255,0,255))*65536+Math.round(_t(tn.g*255,0,255))*256+Math.round(_t(tn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=qt){vt.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Qa);let n=Hr(zi.h,Qa.h,t),s=Hr(zi.s,Qa.s,t),r=Hr(zi.l,Qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new dt;dt.NAMES=_d;var Qr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new L,vi=new L,Ac=new L,Mi=new L,Gs=new L,Hs=new L,mu=new L,Cc=new L,Rc=new L,Ic=new L,Pc=new Pt,Lc=new Pt,Dc=new Pt,Wi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),vi.subVectors(n,t),Ac.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(vi),l=Bn.dot(Ac),c=vi.dot(vi),h=vi.dot(Ac),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Pc.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Pc,r.x),a.addScaledVector(Lc,r.y),a.addScaledVector(Dc,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),vi.subVectors(e,t),Bn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Bn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Hs.subVectors(r,n),Cc.subVectors(e,n);let l=Gs.dot(Cc),c=Hs.dot(Cc);if(l<=0&&c<=0)return t.copy(n);Rc.subVectors(e,s);let h=Gs.dot(Rc),f=Hs.dot(Rc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Gs,a);Ic.subVectors(e,r);let d=Gs.dot(Ic),x=Hs.dot(Ic);if(x>=0&&d<=x)return t.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Hs,o);let g=h*x-d*f;if(g<=0&&f-h>=0&&d-x>=0)return mu.subVectors(r,s),o=(f-h)/(f-h+(d-x)),t.copy(s).addScaledVector(mu,o);let p=1/(g+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),eo.subVectors(this.max,Nr),Ws.subVectors(e.a,Nr),Xs.subVectors(e.b,Nr),qs.subVectors(e.c,Nr),Vi.subVectors(Xs,Ws),Gi.subVectors(qs,Xs),fs.subVectors(Ws,qs);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-fs.z,fs.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,fs.z,0,-fs.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-fs.y,fs.x,0];return!Uc(t,Ws,Xs,qs,eo)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Ws,Xs,qs,eo))?!1:(to.crossVectors(Vi,Gi),t=[to.x,to.y,to.z],Uc(t,Ws,Xs,qs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,ja=new ii,Ws=new L,Xs=new L,qs=new L,Vi=new L,Gi=new L,fs=new L,Nr=new L,eo=new L,to=new L,ps=new L;function Uc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ps.fromArray(i,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kt=new L,no=new Ee,rp=0,$t=class extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ea=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},ap=new ii,Fr=new L,Nc=new L,Ei=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Nc)),this.expandByPoint(Fr.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},op=0,En=new wt,Fc=new Ot,Ys=new L,Mn=new ii,Or=new ii,Xt=new L,Dt=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Mn.min,Or.min),Mn.expandByPoint(Xt),Xt.addVectors(Mn.max,Or.max),Mn.expandByPoint(Xt)):(Mn.expandByPoint(Or.min),Mn.expandByPoint(Or.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),Xt.add(Ys)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let c=new L,h=new L,f=new L,u=new Ee,d=new Ee,x=new Ee,v=new L,g=new L;function p(_,E,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),x.sub(u);let B=1/(d.x*x.y-x.x*d.y);isFinite(B)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(B),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(B),o[_].add(v),o[E].add(v),o[R].add(v),l[_].add(g),l[E].add(g),l[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,E=b.length;_<E;++_){let R=b[_],B=R.start,W=R.count;for(let $=B,k=B+W;$<k;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}let M=new L,m=new L,S=new L,T=new L;function A(_){S.fromBufferAttribute(s,_),T.copy(S);let E=o[_];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),m.crossVectors(T,E);let B=m.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,B)}for(let _=0,E=b.length;_<E;++_){let R=b[_],B=R.start,W=R.count;for(let $=B,k=B+W;$<k;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new $t(u,h,f)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Oc=new L,lp=new L,cp=new ct,zn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oc.subVectors(n,t).cross(lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cp.getNormalMatrix(e),s=this.coplanarPoint(Oc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hp=0,Ai=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=gr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bi=new L,Bc=new L,io=new L,so=new L,na=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bc.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),so.copy(this.origin).sub(Bc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bc).addScaledVector(io,u),d}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,x=t.x-a.x,v=t.y-a.y,g=t.z-a.z,p=n.x-a.x,b=n.y-a.y,M=n.z-a.z,m=Math.abs(l),S=Math.abs(c),T=Math.abs(h),A,_,E,R,B,W,$,k,Z,te,ie,xe;if(m>=S&&m>=T?(E=l,W=f,Z=x,xe=p,l>=0?(A=c,_=h,R=u,B=d,$=v,k=g,te=b,ie=M):(A=h,_=c,R=d,B=u,$=g,k=v,te=M,ie=b)):S>=T?(E=c,W=u,Z=v,xe=b,c>=0?(A=h,_=l,R=d,B=f,$=g,k=x,te=M,ie=p):(A=l,_=h,R=f,B=d,$=x,k=g,te=p,ie=M)):(E=h,W=d,Z=g,xe=M,h>=0?(A=l,_=c,R=f,B=u,$=x,k=v,te=p,ie=b):(A=c,_=l,R=u,B=f,$=v,k=x,te=b,ie=p)),E===0)return null;let se=A/E,le=_/E,de=1/E,qe=R-se*W,I=B-le*W,z=$-se*Z,J=k-le*Z,_e=te-se*xe,N=ie-le*xe,G=_e*J-N*z,ge=qe*N-I*_e,q=z*I-J*qe;if(s){if(G<0||ge<0||q<0)return null}else if((G<0||ge<0||q<0)&&(G>0||ge>0||q>0))return null;let ye=G+ge+q;if(ye===0)return null;let De=de*(G*W+ge*Z+q*xe);return(ye>0?De<0:De>0)?null:this.at(De/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gu=new wt,ms=new na,ro=new Ei,xu=new L,ao=new L,oo=new L,lo=new L,kc=new L,co=new L,_u=new L,ho=new L,Zt=class extends Ot{constructor(e=new Dt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(kc.fromBufferAttribute(f,e),a?co.addScaledVector(kc,h):co.addScaledVector(kc.sub(t),h))}t.add(co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(ro.containsPoint(ms.origin)===!1&&(ms.intersectSphere(ro,xu)===null||ms.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(gu.copy(r).invert(),ms.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let g=u[x],p=a[g.materialIndex],b=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let m=b,S=M;m<S;m+=3){let T=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);s=uo(this,p,e,n,c,h,f,T,A,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=x,p=v;g<p;g+=3){let b=o.getX(g),M=o.getX(g+1),m=o.getX(g+2);s=uo(this,a,e,n,c,h,f,b,M,m),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let g=u[x],p=a[g.materialIndex],b=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let m=b,S=M;m<S;m+=3){let T=m,A=m+1,_=m+2;s=uo(this,p,e,n,c,h,f,T,A,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=x,p=v;g<p;g+=3){let b=g,M=g+1,m=g+2;s=uo(this,a,e,n,c,h,f,b,M,m),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function up(i,e,t,n,s,r,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ki,o),l===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ao),i.getVertexPosition(l,oo),i.getVertexPosition(c,lo);let h=up(i,e,t,n,ao,oo,lo,_u);if(h){let f=new L;Wi.getBarycoord(_u,ao,oo,lo,f),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,f,new Ee)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,f,new Ee)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Wi.getNormal(ao,oo,lo,u.normal),h.face=u,h.barycoord=f}return h}var ia=class extends hn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,h=Yt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new wt,yu=new wt,fo=[],vu=new ii,dp=new wt,Br=new Zt,kr=new Ei,Gn=class extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),vu.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),kr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),yu.multiplyMatrices(n,Zs),Br.matrixWorld=yu,Br.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){let l=fo[a];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ia(new Float32Array(s*this.count),s,this.count,hl,Rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Ei,fp=new Ee(.5,.5),po=new L,lr=class{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],v=r[9],g=r[10],p=r[11],b=r[12],M=r[13],m=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,p-x,S-b).normalize(),s[1].setComponents(c+a,d+h,p+x,S+b).normalize(),s[2].setComponents(c+o,d+f,p+v,S+M).normalize(),s[3].setComponents(c-o,d-f,p-v,S-M).normalize(),n)s[4].setComponents(l,u,g,m).normalize(),s[5].setComponents(c-l,d-u,p-g,S-m).normalize();else if(s[4].setComponents(c-l,d-u,p-g,S-m).normalize(),t===Vn)s[5].setComponents(c+l,d+u,p+g,S+m).normalize();else if(t===nr)s[5].setComponents(l,u,g,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=fp.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},No=new L,Fo=new L,Mu=new wt,zr=new na,mo=new Ei,zc=new L,Su=new L,sa=class extends Ot{constructor(e=new Dt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)No.fromBufferAttribute(t,s-1),Fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new yt(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Mu.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Mu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=d,g=x-1;v<g;v+=c){let p=h.getX(v),b=h.getX(v+1),M=go(this,e,zr,l,p,b,v);M&&t.push(M)}if(this.isLineLoop){let v=h.getX(x-1),g=h.getX(d),p=go(this,e,zr,l,v,g,x-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=d,g=x-1;v<g;v+=c){let p=go(this,e,zr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=go(this,e,zr,l,x-1,d,x-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(No.fromBufferAttribute(o,s),Fo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Fo,zc,Su)>n)return;zc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zc);if(!(c<e.near||c>e.far))return{distance:c,point:Su.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ra=class extends hn{constructor(e=[],t=Qi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_s=class extends hn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends hn{constructor(e,t,n=Wn,s,r,a,o=Yt,l=Yt,c,h=ei,f=1){if(h!==ei&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends Xi{constructor(e,t=Wn,n=Qi,s,r,a=Yt,o=Yt,l,c=ei){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},aa=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qi=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function x(v,g,p,b,M,m,S,T,A,_,E){let R=m/A,B=S/_,W=m/2,$=S/2,k=T/2,Z=A+1,te=_+1,ie=0,xe=0,se=new L;for(let le=0;le<te;le++){let de=le*B-$;for(let qe=0;qe<Z;qe++){let I=qe*R-W;se[v]=I*b,se[g]=de*M,se[p]=k,c.push(se.x,se.y,se.z),se[v]=0,se[g]=0,se[p]=T>0?1:-1,h.push(se.x,se.y,se.z),f.push(qe/A),f.push(1-le/_),ie+=1}}for(let le=0;le<_;le++)for(let de=0;de<A;de++){let qe=u+de+Z*le,I=u+de+Z*(le+1),z=u+(de+1)+Z*(le+1),J=u+(de+1)+Z*le;l.push(qe,I,J),l.push(I,z,J),xe+=6}o.addGroup(d,xe,E),d+=xe,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var oa=class i extends Dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},An=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,v=[],g=n/2,p=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function b(){let m=new L,S=new L,T=0,A=(t-e)/n;for(let _=0;_<=r;_++){let E=[],R=_/r,B=R*(t-e)+e;for(let W=0;W<=s;W++){let $=W/s,k=$*l+o,Z=Math.sin(k),te=Math.cos(k);S.x=B*Z,S.y=-R*n+g,S.z=B*te,f.push(S.x,S.y,S.z),m.set(Z,A,te).normalize(),u.push(m.x,m.y,m.z),d.push($,1-R),E.push(x++)}v.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=v[E][_],B=v[E+1][_],W=v[E+1][_+1],$=v[E][_+1];(e>0||E!==0)&&(h.push(R,B,$),T+=3),(t>0||E!==r-1)&&(h.push(B,W,$),T+=3)}c.addGroup(p,T,0),p+=T}function M(m){let S=x,T=new Ee,A=new L,_=0,E=m===!0?e:t,R=m===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),x++;let B=x;for(let W=0;W<=s;W++){let k=W/s*l+o,Z=Math.cos(k),te=Math.sin(k);A.x=E*te,A.y=g*R,A.z=E*Z,f.push(A.x,A.y,A.z),u.push(0,R,0),T.x=Z*.5+.5,T.y=te*.5*R+.5,d.push(T.x,T.y),x++}for(let W=0;W<s;W++){let $=S+W,k=B+W;m===!0?h.push(k,k+1,$):h.push(k+1,k,$),_+=3}c.addGroup(p,_,m===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends An{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},la=class i extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new L,m=new L,S=new L;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],m),d(t[T+2],S),l(M,m,S,b)}function l(b,M,m,S){let T=S+1,A=[];for(let _=0;_<=T;_++){A[_]=[];let E=b.clone().lerp(m,_/T),R=M.clone().lerp(m,_/T),B=T-_;for(let W=0;W<=B;W++)W===0&&_===T?A[_][W]=E:A[_][W]=E.clone().lerp(R,W/B)}for(let _=0;_<T;_++)for(let E=0;E<2*(T-_)-1;E++){let R=Math.floor(E/2);E%2===0?(u(A[_][R+1]),u(A[_+1][R]),u(A[_][R])):(u(A[_][R+1]),u(A[_+1][R+1]),u(A[_+1][R]))}}function c(b){let M=new L;for(let m=0;m<r.length;m+=3)M.x=r[m+0],M.y=r[m+1],M.z=r[m+2],M.normalize().multiplyScalar(b),r[m+0]=M.x,r[m+1]=M.y,r[m+2]=M.z}function h(){let b=new L;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let m=g(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;a.push(m,1-S)}x(),f()}function f(){for(let b=0;b<a.length;b+=6){let M=a[b+0],m=a[b+2],S=a[b+4],T=Math.max(M,m,S),A=Math.min(M,m,S);T>.9&&A<.1&&(M<.2&&(a[b+0]+=1),m<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,M){let m=b*3;M.x=e[m+0],M.y=e[m+1],M.z=e[m+2]}function x(){let b=new L,M=new L,m=new L,S=new L,T=new Ee,A=new Ee,_=new Ee;for(let E=0,R=0;E<r.length;E+=9,R+=6){b.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),m.set(r[E+6],r[E+7],r[E+8]),T.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),S.copy(b).add(M).add(m).divideScalar(3);let B=g(S);v(T,R+0,b,B),v(A,R+2,M,B),v(_,R+4,m,B)}}function v(b,M,m,S){S<0&&b.x===1&&(a[M]=b.x-1),m.x===0&&m.z===0&&(a[M]=S/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new wt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(_t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(_t(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hr=class extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bo=class extends hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var bu=new L,wu=new L,Vc=new Eh,Gc=new Eh,Hc=new Eh,ur=class extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wu.subVectors(s[0],s[1]).add(s[0]),c=wu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),Vc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,v,g),Gc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,v,g),Hc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Gc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Hc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Vc.calc(l),Gc.calc(l),Hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function pp(i,e){let t=1-i;return t*t*e}function mp(i,e){return 2*(1-i)*i*e}function gp(i,e){return i*i*e}function Wr(i,e,t,n){return pp(i,e)+mp(i,t)+gp(i,n)}function xp(i,e){let t=1-i;return t*t*t*e}function _p(i,e){let t=1-i;return 3*t*t*i*e}function yp(i,e){return 3*(1-i)*i*i*e}function vp(i,e){return i*i*i*e}function Xr(i,e,t,n,s){return xp(i,e)+_p(i,t)+yp(i,n)+vp(i,s)}var ca=class extends Sn{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends Sn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,s.x,r.x,a.x,o.x),Xr(e,s.y,r.y,a.y,o.y),Xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends Sn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Sn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,s.x,r.x,a.x),Wr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ri=class extends Sn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,s.x,r.x,a.x),Wr(e,s.y,r.y,a.y),Wr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Tu(o,l.x,c.x,h.x,f.x),Tu(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},Vo=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:ur,CubicBezierCurve:ca,CubicBezierCurve3:ko,EllipseCurve:hr,LineCurve:ha,LineCurve3:zo,QuadraticBezierCurve:ua,QuadraticBezierCurve3:ri,SplineCurve:da}),Go=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Vo[s.type]().fromJSON(s))}return this}},fa=class extends Go{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ha(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ua(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ca(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new da(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new hr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xn=class extends fa{constructor(e){super(e),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new fa().fromJSON(s))}return this}};function Mp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ep(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],x=i[u+1];d<o&&(o=d),x<l&&(l=x),d>h&&(h=d),x>f&&(f=x)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return pa(r,a,t,o,l,c,0),a}function yd(i,e,t,n,s){let r;if(s===Op(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Eu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Eu(a/n|0,i[a],i[a+1],r);return r&&dr(r,r.next)&&(ga(r),r=r.next),r}function ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(dr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Pp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?bp(i,n,s,r):Sp(i)){e.push(l.i,i.i,c.i),ga(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=wp(ys(i),e),pa(i,e,t,n,s,r,2)):a===2&&Tp(i,e,t,n,s,r):pa(ys(i),e,t,n,s,r,1);break}}}function Sp(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&Vr(s,o,r,l,a,c,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function bp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),x=Math.min(h,f,u),v=Math.max(o,l,c),g=Math.max(h,f,u),p=$c(d,x,e,t,n),b=$c(v,g,e,t,n),M=i.prevZ,m=i.nextZ;for(;M&&M.z>=p&&m&&m.z<=b;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==a&&Vr(o,h,l,f,c,u,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,m.x>=d&&m.x<=v&&m.y>=x&&m.y<=g&&m!==s&&m!==a&&Vr(o,h,l,f,c,u,m.x,m.y)&&Lt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==a&&Vr(o,h,l,f,c,u,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;m&&m.z<=b;){if(m.x>=d&&m.x<=v&&m.y>=x&&m.y<=g&&m!==s&&m!==a&&Vr(o,h,l,f,c,u,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function wp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!dr(n,s)&&Md(n,t,t.next,s)&&ma(n,s)&&ma(s,n)&&(e.push(n.i,t.i,s.i),ga(t),ga(t.next),t=i=s),t=t.next}while(t!==i);return ys(t)}function Tp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Up(a,o)){let l=Sd(a,o);a=ys(a,a.next),l=ys(l,l.next),pa(a,e,t,n,s,r,0),pa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ep(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=yd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dp(c))}s.sort(Ap);for(let r=0;r<s.length;r++)t=Cp(s[r],t);return t}function Ap(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Cp(i,e){let t=Rp(i,e);if(!t)return e;let n=Sd(t,i);return ys(n,n.next),ys(t,t.next)}function Rp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(dr(i,t))return t;do{if(dr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ma(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Ip(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Ip(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function Pp(i,e,t,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lp(s)}function Lp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function $c(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Vr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&vd(i,e,t,n,s,r,a,o)}function Up(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Np(i,e)&&(ma(i,e)&&ma(e,i)&&Fp(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||dr(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function dr(i,e){return i.x===e.x&&i.y===e.y}function Md(i,e,t,n){let s=_o(Lt(i,e,t)),r=_o(Lt(i,e,n)),a=_o(Lt(t,n,i)),o=_o(Lt(t,n,e));return!!(s!==r&&a!==o||s===0&&xo(i,t,e)||r===0&&xo(i,n,e)||a===0&&xo(t,i,n)||o===0&&xo(t,e,n))}function xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _o(i){return i>0?1:i<0?-1:0}function Np(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Md(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ma(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function Fp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sd(i,e){let t=Kc(i.i,i.x,i.y),n=Kc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Eu(i,e,t,n){let s=Kc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Op(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Qc=class{static triangulate(e,t,n=2){return Mp(e,t,n)}},jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Au(e),Cu(n,e);let a=e.length;t.forEach(Au);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Cu(n,t[l]);let o=Qc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Au(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ci=class i extends Dt{constructor(e=new xn([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Bp,M,m=!1,S,T,A,_;if(p){M=p.getSpacedPoints(h),m=!0,u=!1;let he=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,he),T=new L,A=new L,_=new L}u||(g=0,d=0,x=0,v=0);let E=o.extractPoints(c),R=E.shape,B=E.holes;if(!jn.isClockWise(R)){R=R.reverse();for(let he=0,pe=B.length;he<pe;he++){let Me=B[he];jn.isClockWise(Me)&&(B[he]=Me.reverse())}}function $(he){let Me=10000000000000001e-36,Se=he[0];for(let we=1;we<=he.length;we++){let Je=we%he.length,Ye=he[Je],et=Ye.x-Se.x,it=Ye.y-Se.y,O=et*et+it*it,Mt=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(Se.x),Math.abs(Se.y)),pt=Me*Mt*Mt;if(O<=pt){he.splice(Je,1),we--;continue}Se=Ye}}$(R),B.forEach($);let k=B.length,Z=R;for(let he=0;he<k;he++){let pe=B[he];R=R.concat(pe)}function te(he,pe,Me){return pe||rt("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(pe,Me)}let ie=R.length;function xe(he,pe,Me){let Se,we,Je,Ye=he.x-pe.x,et=he.y-pe.y,it=Me.x-he.x,O=Me.y-he.y,Mt=Ye*Ye+et*et,pt=Ye*O-et*it;if(Math.abs(pt)>Number.EPSILON){let C=Math.sqrt(Mt),y=Math.sqrt(it*it+O*O),Y=pe.x-et/C,j=pe.y+Ye/C,oe=Me.x-O/y,be=Me.y+it/y,Ae=((oe-Y)*O-(be-j)*it)/(Ye*O-et*it);Se=Y+Ye*Ae-he.x,we=j+et*Ae-he.y;let ce=Se*Se+we*we;if(ce<=2)return new Ee(Se,we);Je=Math.sqrt(ce/2)}else{let C=!1;Ye>Number.EPSILON?it>Number.EPSILON&&(C=!0):Ye<-Number.EPSILON?it<-Number.EPSILON&&(C=!0):Math.sign(et)===Math.sign(O)&&(C=!0),C?(Se=-et,we=Ye,Je=Math.sqrt(Mt)):(Se=Ye,we=et,Je=Math.sqrt(Mt/2))}return new Ee(Se/Je,we/Je)}let se=[];for(let he=0,pe=Z.length,Me=pe-1,Se=he+1;he<pe;he++,Me++,Se++)Me===pe&&(Me=0),Se===pe&&(Se=0),se[he]=xe(Z[he],Z[Me],Z[Se]);let le=[],de,qe=se.concat();for(let he=0,pe=k;he<pe;he++){let Me=B[he];de=[];for(let Se=0,we=Me.length,Je=we-1,Ye=Se+1;Se<we;Se++,Je++,Ye++)Je===we&&(Je=0),Ye===we&&(Ye=0),de[Se]=xe(Me[Se],Me[Je],Me[Ye]);le.push(de),qe=qe.concat(de)}let I;if(g===0)I=jn.triangulateShape(Z,B);else{let he=[],pe=[];for(let Me=0;Me<g;Me++){let Se=Me/g,we=d*Math.cos(Se*Math.PI/2),Je=x*Math.sin(Se*Math.PI/2)+v;for(let Ye=0,et=Z.length;Ye<et;Ye++){let it=te(Z[Ye],se[Ye],Je);ge(it.x,it.y,-we),Se===0&&he.push(it)}for(let Ye=0,et=k;Ye<et;Ye++){let it=B[Ye];de=le[Ye];let O=[];for(let Mt=0,pt=it.length;Mt<pt;Mt++){let C=te(it[Mt],de[Mt],Je);ge(C.x,C.y,-we),Se===0&&O.push(C)}Se===0&&pe.push(O)}}I=jn.triangulateShape(he,pe)}let z=I.length,J=x+v;for(let he=0;he<ie;he++){let pe=u?te(R[he],qe[he],J):R[he];m?(A.copy(S.normals[0]).multiplyScalar(pe.x),T.copy(S.binormals[0]).multiplyScalar(pe.y),_.copy(M[0]).add(A).add(T),ge(_.x,_.y,_.z)):ge(pe.x,pe.y,0)}for(let he=1;he<=h;he++)for(let pe=0;pe<ie;pe++){let Me=u?te(R[pe],qe[pe],J):R[pe];m?(A.copy(S.normals[he]).multiplyScalar(Me.x),T.copy(S.binormals[he]).multiplyScalar(Me.y),_.copy(M[he]).add(A).add(T),ge(_.x,_.y,_.z)):ge(Me.x,Me.y,f/h*he)}for(let he=g-1;he>=0;he--){let pe=he/g,Me=d*Math.cos(pe*Math.PI/2),Se=x*Math.sin(pe*Math.PI/2)+v;for(let we=0,Je=Z.length;we<Je;we++){let Ye=te(Z[we],se[we],Se);ge(Ye.x,Ye.y,f+Me)}for(let we=0,Je=B.length;we<Je;we++){let Ye=B[we];de=le[we];for(let et=0,it=Ye.length;et<it;et++){let O=te(Ye[et],de[et],Se);m?ge(O.x,O.y+M[h-1].y,M[h-1].x+Me):ge(O.x,O.y,f+Me)}}}_e(),N();function _e(){let he=s.length/3;if(u){let pe=0,Me=ie*pe;for(let Se=0;Se<z;Se++){let we=I[Se];q(we[2]+Me,we[1]+Me,we[0]+Me)}pe=h+g*2,Me=ie*pe;for(let Se=0;Se<z;Se++){let we=I[Se];q(we[0]+Me,we[1]+Me,we[2]+Me)}}else{for(let pe=0;pe<z;pe++){let Me=I[pe];q(Me[2],Me[1],Me[0])}for(let pe=0;pe<z;pe++){let Me=I[pe];q(Me[0]+ie*h,Me[1]+ie*h,Me[2]+ie*h)}}n.addGroup(he,s.length/3-he,0)}function N(){let he=s.length/3,pe=0;G(Z,pe),pe+=Z.length;for(let Me=0,Se=B.length;Me<Se;Me++){let we=B[Me];G(we,pe),pe+=we.length}n.addGroup(he,s.length/3-he,1)}function G(he,pe){let Me=he.length;for(;--Me>=0;){let Se=Me,we=Me-1;we<0&&(we=he.length-1);for(let Je=0,Ye=h+g*2;Je<Ye;Je++){let et=ie*Je,it=ie*(Je+1),O=pe+Se+et,Mt=pe+we+et,pt=pe+we+it,C=pe+Se+it;ye(O,Mt,pt,C)}}}function ge(he,pe,Me){l.push(he),l.push(pe),l.push(Me)}function q(he,pe,Me){De(he),De(pe),De(Me);let Se=s.length/3,we=b.generateTopUV(n,s,Se-3,Se-2,Se-1);nt(we[0]),nt(we[1]),nt(we[2])}function ye(he,pe,Me,Se){De(he),De(pe),De(Se),De(pe),De(Me),De(Se);let we=s.length/3,Je=b.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);nt(Je[0]),nt(Je[1]),nt(Je[3]),nt(Je[1]),nt(Je[2]),nt(Je[3])}function De(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function nt(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return kp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vo[s.type]().fromJSON(s)),new i(n,e.options)}},Bp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ee(r,a),new Ee(o,l),new Ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ee(a,1-l),new Ee(c,1-f),new Ee(u,1-x),new Ee(v,1-p)]:[new Ee(o,1-l),new Ee(h,1-f),new Ee(d,1-x),new Ee(g,1-p)]}};function kp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xa=class i extends la{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var _a=class i extends la{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cn=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],x=[],v=[],g=[];for(let p=0;p<h;p++){let b=p*u-a;for(let M=0;M<c;M++){let m=M*f-r;x.push(m,-b,0),v.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let M=b+c*p,m=b+c*(p+1),S=b+1+c*(p+1),T=b+1+c*p;d.push(M,m,T),d.push(m,S,T)}this.setIndex(d),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var vs=class i extends Dt{constructor(e=new xn([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,x=u.holes;jn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=x.length;g<p;g++){let b=x[g];jn.isClockWise(b)===!0&&(x[g]=b.reverse())}let v=jn.triangulateShape(d,x);for(let g=0,p=x.length;g<p;g++){let b=x[g];d=d.concat(b)}for(let g=0,p=d.length;g<p;g++){let b=d[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,p=v.length;g<p;g++){let b=v[g],M=b[0]+f,m=b[1]+f,S=b[2]+f;n.push(M,m,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function zp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var bn=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new L,u=new L,d=[],x=[],v=[],g=[];for(let p=0;p<=n;p++){let b=[],M=p/n,m=a+M*o,S=e*Math.cos(m),T=Math.sqrt(e*e-S*S),A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let E=_/t,R=s+E*r;f.x=-T*Math.cos(R),f.y=S,f.z=T*Math.sin(R),x.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(E+A,1-M),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let M=h[p][b+1],m=h[p][b],S=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&d.push(M,m,T),(p!==n-1||l<Math.PI)&&d.push(m,S,T)}this.setIndex(d),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ri=class i extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new L,d=new L,x=new L;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=s;p++){let b=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(b),d.y=(e+t*Math.cos(g))*Math.sin(b),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,b=(s+1)*(v-1)+g-1,M=(s+1)*(v-1)+g,m=(s+1)*v+g;l.push(p,b,m),l.push(b,M,m)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ii=class i extends Dt{constructor(e=new ri(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new Ee,h=new L,f=[],u=[],d=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function v(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),b(),p()}function g(M){h=e.getPointAt(M/t,h);let m=a.normals[M],S=a.binormals[M];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);l.x=E*m.x+_*S.x,l.y=E*m.y+_*S.y,l.z=E*m.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let m=1;m<=s;m++){let S=(s+1)*(M-1)+(m-1),T=(s+1)*M+(m-1),A=(s+1)*M+m,_=(s+1)*(M-1)+m;x.push(S,T,_),x.push(T,A,_)}}function b(){for(let M=0;M<=t;M++)for(let m=0;m<=s;m++)c.x=M/t,c.y=m/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Vo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ru(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function Ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var bd={clone:Es,merge:sn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ho=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ms=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wo=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xo=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:r=e,o=2*t-n;break;case Jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:a=e,l=2*n-t;break;case Jc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,p=-u*g+2*u*v-u*x,b=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*x+1,M=(-1-d)*g+(1.5+d)*v+.5*x,m=d*g-d*v;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[c+S]+M*a[l+S]+m*a[f+S];return r}},Yo=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Zo=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jo=class extends Yi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),v=1-x;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*x;return r}let u=o*2,d=e-1;for(let x=0;x!==o;++x){let v=a[c+x],g=a[l+x],p=d*u+x*2,b=f[p],M=f[p+1],m=e*u+x*2,S=h[m],T=h[m+1],A=Xp(n,t,b,S,s);r[x]=wd(A,v,M,T,g)}return r}};function wd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Wp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Xp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=wd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Wp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wc(e.settings)&&(n.settings={inTangents:Js(e.settings.inTangents,Array),outTangents:Js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wc(this.settings)&&(Iu(this.settings.inTangents,e),Iu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Lf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[u+x]||v!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Iu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Po;var Zi=class extends wn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=qr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};$o.prototype.ValueTypeName="color";var Ko=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Ko.prototype.ValueTypeName="number";var Qo=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},ya=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends wn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=qr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};jo.prototype.ValueTypeName="vector";var el=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new el,tl=class{constructor(e){this.manager=e!==void 0?e:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},va=class extends fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xc=new wt,Pu=new L,Lu=new L,Ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yo=new L,vo=new ni,Kn=new L,Sa=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,vo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,vo,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,vo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,vo,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new L,Du=new Ee,Uu=new Ee,cn=class extends Sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Uu),t.subVectors(Uu,Du)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var jc=class extends Ma{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},ba=class extends fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$i=class extends Sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eh=class extends Ma{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new eh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $s=-90,Ks=1,nl=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn($s,Ks,e,t);s.layers=this.layers,this.add(s);let r=new cn($s,Ks,e,t);r.layers=this.layers,this.add(r);let a=new cn($s,Ks,e,t);a.layers=this.layers,this.add(a);let o=new cn($s,Ks,e,t);o.layers=this.layers,this.add(o);let l=new cn($s,Ks,e,t);l.layers=this.layers,this.add(l);let c=new cn($s,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},il=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ch="\\[\\]\\.:\\/",qp=new RegExp("["+Ch+"]","g"),Rh="[^"+Ch+"]",Yp="[^"+Ch.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",Rh),Jp=/(WCOD+)?/.source.replace("WCOD",Yp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),Qp=new RegExp("^"+Zp+Jp+$p+Kp+"$"),jp=["material","materials","bones","map"],th=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(e){let t=Qp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=th;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ly=new Float32Array(1);var nh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Ih(i,e,t,n){let s=em(n);switch(t){case Mh:return i*e;case hl:return i*e/s.components*s.byteLength;case ul:return i*e/s.components*s.byteLength;case ts:return i*e*2/s.components*s.byteLength;case dl:return i*e*2/s.components*s.byteLength;case Sh:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case fl:return i*e*4/s.components*s.byteLength;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:case xl:return Math.max(i,16)*Math.max(e,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(e,8)/2;case _l:case yl:case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vl:case Pa:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bl:case kl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vl:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case La:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(i){switch(i){case _n:case xh:return{byteLength:1,components:1};case xr:case _h:case Xn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Wn:case ol:case Rn:return{byteLength:4,components:1};case yh:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function om(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],v=f[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ag=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:xm,begin_vertex:_m,beginnormal_vertex:ym,bsdfs:vm,iridescence_fragment:Mm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Em,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Im,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Um,displacementmap_vertex:Nm,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:km,envmap_fragment:zm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:$m,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Qm,lights_pars_begin:jm,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:wg,morphtarget_vertex:Tg,normal_fragment_begin:Eg,normal_fragment_maps:Ag,normal_pars_fragment:Cg,normal_pars_vertex:Rg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Ng,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:zg,dithering_pars_fragment:Vg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Qg,specularmap_pars_fragment:jg,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:a0,worldpos_vertex:o0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:x0,equirect_vert:_0,equirect_frag:y0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:w0,meshlambert_frag:T0,meshmatcap_vert:E0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:R0,meshphong_vert:I0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:k0,sprite_vert:z0,sprite_frag:V0},Ne={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},li={basic:{uniforms:sn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:sn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:sn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:sn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:sn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new dt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:sn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:sn([Ne.points,Ne.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:sn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:sn([Ne.common,Ne.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:sn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:sn([Ne.sprite,Ne.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:sn([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:sn([Ne.lights,Ne.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};li.physical={uniforms:sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Zl={r:0,b:0,g:0},G0=new wt,Zd=new ct;Zd.set(-1,0,0,0,1,0,0,0,1);function H0(i,e,t,n,s,r){let a=new dt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let m=b.backgroundBlurriness>0;M=e.get(M,m)}return M}function x(b){let M=!1,m=d(b);m===null?g(a,o):m&&m.isColor&&(g(m,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,M){let m=d(M);m&&(m.isCubeTexture||m.mapping===Ta)?(c===void 0&&(c=new Zt(new qi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Es(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(M.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=vt.getTransfer(m.colorSpace)!==Et,(h!==m||f!==m.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=m,f=m.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Zt(new Cn(2,2),new nn({name:"BackgroundMaterial",uniforms:Es(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=vt.getTransfer(m.colorSpace)!==Et,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||f!==m.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=m,f=m.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,M){b.getRGB(Zl,Ah(i)),t.buffers.color.setClear(Zl.r,Zl.g,Zl.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:x,addToRenderList:v,dispose:p}}function W0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(B,W,$,k,Z){let te=!1,ie=f(B,k,$,W);r!==ie&&(r=ie,c(r.object)),te=d(B,k,$,Z),te&&x(B,k,$,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,m(B,W,$,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function f(B,W,$,k){let Z=k.wireframe===!0,te=n[W.id];te===void 0&&(te={},n[W.id]=te);let ie=B.isInstancedMesh===!0?B.id:0,xe=te[ie];xe===void 0&&(xe={},te[ie]=xe);let se=xe[$.id];se===void 0&&(se={},xe[$.id]=se);let le=se[Z];return le===void 0&&(le=u(l()),se[Z]=le),le}function u(B){let W=[],$=[],k=[];for(let Z=0;Z<t;Z++)W[Z]=0,$[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:k,object:B,attributes:{},index:null}}function d(B,W,$,k){let Z=r.attributes,te=W.attributes,ie=0,xe=$.getAttributes();for(let se in xe)if(xe[se].location>=0){let de=Z[se],qe=te[se];if(qe===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(qe=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(qe=B.instanceColor)),de===void 0||de.attribute!==qe||qe&&de.data!==qe.data)return!0;ie++}return r.attributesNum!==ie||r.index!==k}function x(B,W,$,k){let Z={},te=W.attributes,ie=0,xe=$.getAttributes();for(let se in xe)if(xe[se].location>=0){let de=te[se];de===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(de=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(de=B.instanceColor));let qe={};qe.attribute=de,de&&de.data&&(qe.data=de.data),Z[se]=qe,ie++}r.attributes=Z,r.attributesNum=ie,r.index=k}function v(){let B=r.newAttributes;for(let W=0,$=B.length;W<$;W++)B[W]=0}function g(B){p(B,0)}function p(B,W){let $=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;$[B]=1,k[B]===0&&(i.enableVertexAttribArray(B),k[B]=1),Z[B]!==W&&(i.vertexAttribDivisor(B,W),Z[B]=W)}function b(){let B=r.newAttributes,W=r.enabledAttributes;for(let $=0,k=W.length;$<k;$++)W[$]!==B[$]&&(i.disableVertexAttribArray($),W[$]=0)}function M(B,W,$,k,Z,te,ie){ie===!0?i.vertexAttribIPointer(B,W,$,Z,te):i.vertexAttribPointer(B,W,$,k,Z,te)}function m(B,W,$,k){v();let Z=k.attributes,te=$.getAttributes(),ie=W.defaultAttributeValues;for(let xe in te){let se=te[xe];if(se.location>=0){let le=Z[xe];if(le===void 0&&(xe==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),xe==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),le!==void 0){let de=le.normalized,qe=le.itemSize,I=e.get(le);if(I===void 0)continue;let z=I.buffer,J=I.type,_e=I.bytesPerElement,N=J===i.INT||J===i.UNSIGNED_INT||le.gpuType===ol;if(le.isInterleavedBufferAttribute){let G=le.data,ge=G.stride,q=le.offset;if(G.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)p(se.location+ye,G.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<se.locationSize;ye++)g(se.location+ye);i.bindBuffer(i.ARRAY_BUFFER,z);for(let ye=0;ye<se.locationSize;ye++)M(se.location+ye,qe/se.locationSize,J,de,ge*_e,(q+qe/se.locationSize*ye)*_e,N)}else{if(le.isInstancedBufferAttribute){for(let G=0;G<se.locationSize;G++)p(se.location+G,le.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let G=0;G<se.locationSize;G++)g(se.location+G);i.bindBuffer(i.ARRAY_BUFFER,z);for(let G=0;G<se.locationSize;G++)M(se.location+G,qe/se.locationSize,J,de,qe*_e,qe/se.locationSize*G*_e,N)}}else if(ie!==void 0){let de=ie[xe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(se.location,de);break;case 3:i.vertexAttrib3fv(se.location,de);break;case 4:i.vertexAttrib4fv(se.location,de);break;default:i.vertexAttrib1fv(se.location,de)}}}}b()}function S(){E();for(let B in n){let W=n[B];for(let $ in W){let k=W[$];for(let Z in k){let te=k[Z];for(let ie in te)h(te[ie].object),delete te[ie];delete k[Z]}}delete n[B]}}function T(B){if(n[B.id]===void 0)return;let W=n[B.id];for(let $ in W){let k=W[$];for(let Z in k){let te=k[Z];for(let ie in te)h(te[ie].object),delete te[ie];delete k[Z]}}delete n[B.id]}function A(B){for(let W in n){let $=n[W];for(let k in $){let Z=$[k];if(Z[B.id]===void 0)continue;let te=Z[B.id];for(let ie in te)h(te[ie].object),delete te[ie];delete Z[B.id]}}}function _(B){for(let W in n){let $=n[W],k=B.isInstancedMesh===!0?B.id:0,Z=$[k];if(Z!==void 0){for(let te in Z){let ie=Z[te];for(let xe in ie)h(ie[xe].object),delete ie[xe];delete Z[te]}delete $[k],Object.keys($).length===0&&delete n[W]}}}function E(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function X0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_n&&A!==Rn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(st("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:m,maxSamples:S,samples:T}}function Y0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new zn,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,M=b*4,m=p.clippingState||null;l.value=m,m=h(x,u,M,d);for(let S=0;S!==M;++S)m[S]=t[S];p.clippingState=m,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,x){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,x!==!0||g===null){let p=d+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,m=d;M!==v;++M,m+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(g,m),g[m+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var vr=4,Z0=6,J0=20,$0=256,Da=new $i,Ed=new dt,Ph=null,Lh=0,Dh=0,Uh=!1,K0=new L,As=new L,$l=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=K0}=r;Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Lh,Dh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Xn,format:In,colorSpace:Yr,depthBuffer:!1},s=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q0(r)),this._blurMaterial=ex(r,e,t),this._ggxMaterial=j0(r,e,t)}return s}_compileMaterial(e){let t=new Zt(new Dt,e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,s,r){let l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ed),f.toneMapping=Hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new qi,new un({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Ed),p=!0);for(let M=0;M<6;M++){let m=M%3;m===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):m===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;yr(s,m*S,M>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qi||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Da)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:x}=this,v=this._sizeLods[n],g=3*v*(n>x-vr?n-x+vr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,yr(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Da),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,yr(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Da)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-vr?s-this._lodMax+vr:0),u=4*(this._cubeSize-h);yr(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Da)}};function Q0(i){let e=[],t=[],n=i,s=i-vr+1+Z0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,x=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){let b=p%3*2/3-1,M=p>2?0:-1,m=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];x.set(m,d*u*p);for(let S=0;S<u;S++){let T=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?As.set(1,A,T):p===1?As.set(-T,1,-A):p===2?As.set(-T,A,1):p===3?As.set(-1,A,-T):p===4?As.set(-T,-1,A):As.set(T,A,-1),As.toArray(v,(p*u+S)*d)}}let g=new Dt;g.setAttribute("position",new $t(x,d)),g.setAttribute("outputDirection",new $t(v,d)),t.push(new Zt(g,null)),n>vr&&n--}return{lodMeshes:t,sizeLods:e}}function Ad(i,e,t){let n=new gn(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function j0(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ex(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:J0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Cd(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Rd(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ai});r.uniforms.tEquirect.value=t;let a=new Zt(s,r),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=Kt),new nl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function tx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===sl||d===rl)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let v=new Kl(x.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,x=d===sl||d===rl,v=d===Qi||d===ws;if(x||v){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new $l(i)),g=x?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return x&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new $l(i)),g=x?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===sl?u.mapping=Qi:d===rl&&(u.mapping=ws),u}function l(u){let d=0,x=6;for(let v=0;v<x;v++)u[v]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function nx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function ix(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,x=f.attributes.position,v=0;if(x===void 0)return;if(d!==null){let b=d.array;v=d.version;for(let M=0,m=b.length;M<m;M+=3){let S=b[M+0],T=b[M+1],A=b[M+2];u.push(S,T,T,A,A,S)}}else{let b=x.array;v=x.version;for(let M=0,m=b.length/3-1;M<m;M+=3){let S=M+0,T=M+1,A=M+2;u.push(S,T,T,A,A,S)}}let g=new(x.count>=65535?ta:ea)(u,1);g.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function sx(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ax(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),v===!0&&(M=3);let m=o.attributes.position.count*M,S=1;m>e.maxTextureSize&&(S=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let T=new Float32Array(m*S*4*f),A=new $r(T,m,S,f);A.type=Rn,A.needsUpdate=!0;let _=M*4;for(let R=0;R<f;R++){let B=g[R],W=p[R],$=b[R],k=m*S*4*R;for(let Z=0;Z<B.count;Z++){let te=Z*_;d===!0&&(s.fromBufferAttribute(B,Z),T[k+te+0]=s.x,T[k+te+1]=s.y,T[k+te+2]=s.z,T[k+te+3]=0),x===!0&&(s.fromBufferAttribute(W,Z),T[k+te+4]=s.x,T[k+te+5]=s.y,T[k+te+6]=s.z,T[k+te+7]=0),v===!0&&(s.fromBufferAttribute($,Z),T[k+te+8]=s.x,T[k+te+9]=s.y,T[k+te+10]=s.z,T[k+te+11]=$.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new Ee(m,S)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ox(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var lx={[hh]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function cx(i,e,t,n,s,r){let a=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Dt;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));let h=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Zt(c,h),u=new $i(-1,1,1,-1,0,1),d=null,x=null,v=!1,g,p=null,b=[],M=!1;this.setSize=function(m,S){a.setSize(m,S),o!==null&&o.setSize(m,S),l!==null&&l.setSize(m,S);for(let T=0;T<b.length;T++){let A=b[T];A.setSize&&A.setSize(m,S)}},this.setEffects=function(m){b=m,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new gn(S,T,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(S,T,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let _=b[A];_.setSize&&_.setSize(S,T)}},this.begin=function(m,S){if(v||m.toneMapping===Hn&&b.length===0)return!1;if(p=S,S!==null){let T=S.width,A=S.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return M===!1&&m.setRenderTarget(a),g=m.toneMapping,m.toneMapping=Hn,!0},this.hasRenderPass=function(){return M},this.end=function(m,S){m.toneMapping=g,v=!0;let T=a,A=o;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(m,A,T,S),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(d!==m.outputColorSpace||x!==m.toneMapping){d=m.outputColorSpace,x=m.toneMapping,h.defines={},vt.getTransfer(d)===Et&&(h.defines.SRGB_TRANSFER="");let _=lx[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,m.setRenderTarget(p),m.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Jd=new hn,Oh=new Xi(1,1),$d=new $r,Kd=new Uo,Qd=new ra,Id=[],Pd=[],Ld=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ec(i,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),Ht(t,n)}}function mx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Ht(t,n)}}function gx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),Ht(t,n)}}function xx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Mx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Tx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=t.isReversedDepthBuffer()?ql:Xl,r=Oh):r=Jd,t.setTexture2D(e||r,s)}function Ex(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kd,s)}function Ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qd,s)}function Cx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$d,s)}function Rx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return _x;case 35668:case 35672:return yx;case 35669:case 35673:return vx;case 5125:return Mx;case 36294:return Sx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Cx}}function Ix(i,e){i.uniform1fv(this.addr,e)}function Px(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Lx(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Dx(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ux(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nx(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fx(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ox(i,e){i.uniform1iv(this.addr,e)}function Bx(i,e){i.uniform2iv(this.addr,e)}function kx(i,e){i.uniform3iv(this.addr,e)}function zx(i,e){i.uniform4iv(this.addr,e)}function Vx(i,e){i.uniform1uiv(this.addr,e)}function Gx(i,e){i.uniform2uiv(this.addr,e)}function Hx(i,e){i.uniform3uiv(this.addr,e)}function Wx(i,e){i.uniform4uiv(this.addr,e)}function Xx(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Oh:a=Jd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function qx(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kd,r[a])}function Yx(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qd,r[a])}function Zx(i,e,t){let n=this.cache,s=e.length,r=ec(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$d,r[a])}function Jx(i){switch(i){case 5126:return Ix;case 35664:return Px;case 35665:return Lx;case 35666:return Dx;case 35674:return Ux;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return zx;case 5125:return Vx;case 36294:return Gx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Zx}}var Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rx(t.type)}},kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jx(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function Nd(i,e){i.seq.push(e),i.map[e.id]=e}function $x(i,e,t){let n=i.name,s=n.length;for(Nh.lastIndex=0;;){let r=Nh.exec(n),a=Nh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nd(t,c===void 0?new Bh(o,i,e):new kh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new zh(o),Nd(t,f)),t=f}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$x(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Kx=37297,Qx=0;function jx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Od=new ct;function e_(i){vt._getMatrix(Od,vt.workingColorSpace,i);let e=`mat3( ${Od.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jx(i.getShaderSource(e),o)}else return r}function t_(i,e){let t=e_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var n_={[hh]:"Linear",[uh]:"Reinhard",[dh]:"Cineon",[wa]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function i_(i,e){let t=n_[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jl=new L;function s_(){vt.getLuminanceCoefficients(Jl);let i=Jl.x.toFixed(4),e=Jl.y.toFixed(4),t=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function a_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Na(i){return i!==""}function kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(i){return i.replace(l_,h_)}var c_=new Map;function h_(i,e){let t=gt[e];if(t===void 0){let n=c_.get(e);if(n!==void 0)t=gt[n],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vh(t)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(i){return i.replace(u_,d_)}function d_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var f_={[Ss]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function p_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m_={[Qi]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function g_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var x_={[ws]:"ENVMAP_MODE_REFRACTION"};function __(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var y_={[ch]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function v_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y_[i.combine]||"ENVMAP_BLENDING_NONE"}function M_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=p_(t),c=g_(t),h=__(t),f=v_(t),u=M_(t),d=r_(t),x=a_(r),v=s.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Na).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(g=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?gt.tonemapping_pars_fragment:"",t.toneMapping!==Hn?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,t_("linearToOutputTexel",t.outputColorSpace),s_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),a=Vh(a),a=kd(a,t),a=zd(a,t),o=Vh(o),o=kd(o,t),o=zd(o,t),a=Vd(a),o=Vd(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+g+a,m=b+p+o,S=Fd(s,s.VERTEX_SHADER,M),T=Fd(s,s.FRAGMENT_SHADER,m);s.attachShader(v,S),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(B){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(v)||"",$=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",Z=W.trim(),te=$.trim(),ie=k.trim(),xe=!0,se=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(xe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{let le=Bd(s,S,"vertex"),de=Bd(s,T,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Z+`
`+le+`
`+de)}else Z!==""?st("WebGLProgram: Program Info Log:",Z):(te===""||ie==="")&&(se=!1);se&&(B.diagnostics={runnable:xe,programLog:Z,vertexShader:{log:te,prefix:g},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(S),s.deleteShader(T),_=new Mr(s,v),E=o_(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,Kx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var b_=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hh(e),t.set(e,n)),n}},Hh=class{constructor(e){this.id=b_++,this.code=e,this.usedTimes=0}};function w_(i){return i===ts||i===Pa||i===La}function T_(i,e,t,n,s,r){let a=new Kr,o=new Gh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,R,B,W,$){let k=B.fog,Z=W.geometry,te=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?B.environment:null,ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,xe=e.get(_.envMap||te,ie),se=xe&&xe.mapping===Ta?xe.image.height:null,le=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&st("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qe=de!==void 0?de.length:0,I=0;Z.morphAttributes.position!==void 0&&(I=1),Z.morphAttributes.normal!==void 0&&(I=2),Z.morphAttributes.color!==void 0&&(I=3);let z,J,_e,N;if(le){let At=li[le];z=At.vertexShader,J=At.fragmentShader}else{z=_.vertexShader,J=_.fragmentShader;let At=o.getVertexShaderStage(_),St=o.getFragmentShaderStage(_);o.update(_,At,St),_e=At.id,N=St.id}let G=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),q=W.isInstancedMesh===!0,ye=W.isBatchedMesh===!0,De=!!_.map,nt=!!_.matcap,he=!!xe,pe=!!_.aoMap,Me=!!_.lightMap,Se=!!_.bumpMap&&_.wireframe===!1,we=!!_.normalMap,Je=!!_.displacementMap,Ye=!!_.emissiveMap,et=!!_.metalnessMap,it=!!_.roughnessMap,O=_.anisotropy>0,Mt=_.clearcoat>0,pt=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,Y=_.sheen>0,j=_.transmission>0,oe=O&&!!_.anisotropyMap,be=Mt&&!!_.clearcoatMap,Ae=Mt&&!!_.clearcoatNormalMap,ce=Mt&&!!_.clearcoatRoughnessMap,fe=y&&!!_.iridescenceMap,Ie=y&&!!_.iridescenceThicknessMap,Ke=Y&&!!_.sheenColorMap,Pe=Y&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,Ge=!!_.specularColorMap,tt=!!_.specularIntensityMap,ot=j&&!!_.transmissionMap,H=j&&!!_.thicknessMap,Re=!!_.gradientMap,ue=!!_.alphaMap,Te=_.alphaTest>0,Fe=!!_.alphaHash,me=!!_.extensions,Qe=Hn;_.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Qe=i.toneMapping);let He={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:N,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ye,batchingColor:ye&&W._colorsTexture!==null,instancing:q,instancingColor:q&&W.instanceColor!==null,instancingMorph:q&&W.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:nt,envMap:he,envMapMode:he&&xe.mapping,envMapCubeUVHeight:se,aoMap:pe,lightMap:Me,bumpMap:Se,normalMap:we,displacementMap:Je,emissiveMap:Ye,normalMapObjectSpace:we&&_.normalMapType===ad,normalMapTangentSpace:we&&_.normalMapType===Wl,packedNormalMap:we&&_.normalMapType===Wl&&w_(_.normalMap.format),metalnessMap:et,roughnessMap:it,anisotropy:O,anisotropyMap:oe,clearcoat:Mt,clearcoatMap:be,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ce,dispersion:pt,retroreflection:C,iridescence:y,iridescenceMap:fe,iridescenceThicknessMap:Ie,sheen:Y,sheenColorMap:Ke,sheenRoughnessMap:Pe,specularMap:Ce,specularColorMap:Ge,specularIntensityMap:tt,transmission:j,transmissionMap:ot,thicknessMap:H,gradientMap:Re,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:Te,alphaHash:Fe,combine:_.combine,mapUv:De&&x(_.map.channel),aoMapUv:pe&&x(_.aoMap.channel),lightMapUv:Me&&x(_.lightMap.channel),bumpMapUv:Se&&x(_.bumpMap.channel),normalMapUv:we&&x(_.normalMap.channel),displacementMapUv:Je&&x(_.displacementMap.channel),emissiveMapUv:Ye&&x(_.emissiveMap.channel),metalnessMapUv:et&&x(_.metalnessMap.channel),roughnessMapUv:it&&x(_.roughnessMap.channel),anisotropyMapUv:oe&&x(_.anisotropyMap.channel),clearcoatMapUv:be&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(_.sheenRoughnessMap.channel),specularMapUv:Ce&&x(_.specularMap.channel),specularColorMapUv:Ge&&x(_.specularColorMap.channel),specularIntensityMapUv:tt&&x(_.specularIntensityMap.channel),transmissionMapUv:ot&&x(_.transmissionMap.channel),thicknessMapUv:H&&x(_.thicknessMap.channel),alphaMapUv:ue&&x(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(we||O),vertexNormals:!!Z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(De||ue),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Z.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:qe,morphTextureStride:I,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&vt.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:Ye&&_.emissiveMap.isVideoTexture===!0&&vt.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let E=d[_.type],R;if(E){let B=li[E];R=bd.clone(B.uniforms)}else R=_.uniforms;return R}function m(_,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new S_(i,E,_,s),c.push(R),h.set(E,R)),R}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:m,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:A}}function E_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function A_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,v,g,p){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:d,material:x,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[e]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=x,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=g,b.group=p),e++,b}function l(u,d,x,v,g,p,b){b.reversedDepth===!0&&(g=-g);let M=o(u,d,x,v,g,p);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function c(u,d,x,v,g,p){let b=o(u,d,x,v,g,p);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,d){t.length>1&&t.sort(u||A_),n.length>1&&n.sort(d||Hd),s.length>1&&s.sort(d||Hd)}function f(){for(let u=e,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function C_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wd,i.set(n,[a])):s>=r.length?(a=new Wd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function R_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new dt};break;case"SpotLight":t={position:new L,direction:new L,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function I_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var P_=0;function L_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function D_(i){let e=new R_,t=I_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new wt,a=new wt;function o(c){let h=0,f=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,x=0,v=0,g=0,p=0,b=0,M=0,m=0,S=0,T=0,A=0,_=0,E=0,R=0;c.sort(L_);for(let W=0,$=c.length;W<$;W++){let k=c[W],Z=k.color,te=k.intensity,ie=k.distance,xe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ts?xe=k.shadow.map.texture:xe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=Z.r*te,f+=Z.g*te,u+=Z.b*te;else if(k.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(k.sh.coefficients[se],te);R++}else if(k.isSunLight){let se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[x]=de,n.sunShadowMap[x]=xe;let qe=le.getViewportCount();for(let I=0;I<qe;I++)n.sunShadowMatrix[v+I]=le.getMatrix(I),n.sunShadowCascade[v+I]=le._cascadeData[I];v+=qe,x++}n.sun[d]=se,d++}else if(k.isDirectionalLight){let se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,n.directionalShadow[g]=de,n.directionalShadowMap[g]=xe,n.directionalShadowMatrix[g]=k.shadow.matrix,S++}n.directional[g]=se,g++}else if(k.isSpotLight){let se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(Z).multiplyScalar(te),se.distance=ie,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,n.spot[b]=se;let le=k.shadow;if(k.map&&(n.spotLightMap[_]=k.map,_++,le.updateMatrices(k),k.castShadow&&E++),n.spotLightMatrix[b]=le.matrix,k.castShadow){let de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,n.spotShadow[b]=de,n.spotShadowMap[b]=xe,A++}b++}else if(k.isRectAreaLight){let se=e.get(k);se.color.copy(Z).multiplyScalar(te),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),n.rectArea[M]=se,M++}else if(k.isPointLight){let se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){let le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,n.pointShadow[p]=de,n.pointShadowMap[p]=xe,n.pointShadowMatrix[p]=k.shadow.matrix,T++}n.point[p]=se,p++}else if(k.isHemisphereLight){let se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(te),se.groundColor.copy(k.groundColor).multiplyScalar(te),n.hemi[m]=se,m++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let B=n.hash;(B.sunLength!==d||B.directionalLength!==g||B.pointLength!==p||B.spotLength!==b||B.rectAreaLength!==M||B.hemiLength!==m||B.numSunShadows!==x||B.numDirectionalShadows!==S||B.numPointShadows!==T||B.numSpotShadows!==A||B.numSpotMaps!==_||B.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=b,n.rectArea.length=M,n.point.length=p,n.hemi.length=m,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,B.sunLength=d,B.directionalLength=g,B.pointLength=p,B.spotLength=b,B.rectAreaLength=M,B.hemiLength=m,B.numSunShadows=x,B.numDirectionalShadows=S,B.numPointShadows=T,B.numSpotShadows=A,B.numSpotMaps=_,B.numLightProbes=R,n.version=P_++)}function l(c,h){let f=0,u=0,d=0,x=0,v=0,g=0,p=h.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let m=c[b];if(m.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(p),f++}else if(m.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(m.isSpotLight){let S=n.spot[x];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),x++}else if(m.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(m.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(m.width*.5,0,0),S.halfHeight.set(0,m.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(m.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(m.matrixWorld),S.position.applyMatrix4(p),d++}else if(m.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(m.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Xd(i){let e=new D_(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function U_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Xd(i),e.set(s,[o])):r>=a.length?(o=new Xd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var N_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,O_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],B_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qd=new wt,Ua=new L,Fh=new L;function k_(i,e,t){let n=new lr,s=new Ee,r=new Ee,a=new Pt,o=new Wo,l=new Xo,c={},h=t.maxTextureSize,f={[Ki]:dn,[dn]:Ki,[Jt]:Jt},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:N_,fragmentShader:F_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Dt;x.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(T,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Ou&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ai),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let $=p!==this.type;$&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(Z=>Z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,Z=T.length;k<Z;k++){let te=T[k],ie=te.shadow;if(ie===void 0){st("WebGLShadowMap:",te,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let xe=ie.getFrameExtents();s.multiply(xe),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,ie.mapSize.y=r.y));let se=i.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=se,ie.map===null||$===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===mr){if(te.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new gn(s.x,s.y,{format:ts,type:Xn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),ie.map.texture.name=te.name+".shadowMap",ie.map.depthTexture=new Xi(s.x,s.y,Rn),ie.map.depthTexture.name=te.name+".shadowMapDepth",ie.map.depthTexture.format=ei,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt}else te.isPointLight?(ie.map=new Kl(s.x),ie.map.depthTexture=new Oo(s.x,Wn)):(ie.map=new gn(s.x,s.y),ie.map.depthTexture=new Xi(s.x,s.y,Wn)),ie.map.depthTexture.name=te.name+".shadowMap",ie.map.depthTexture.format=ei,this.type===Ss?(ie.map.depthTexture.compareFunction=se?ql:Xl,ie.map.depthTexture.minFilter=Kt,ie.map.depthTexture.magFilter=Kt):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==s.x||ie.map.height!==s.y)&&ie.map.setSize(s.x,s.y);let le=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();te.isPointLight!==!0&&ie.updateMatrices(te,_);for(let de=0;de<le;de++){let qe=ie.getCamera(de);if(te.isPointLight){let I=ie.camera,z=ie.matrix,J=te.distance||I.far;J!==I.far&&(I.far=J,I.updateProjectionMatrix()),Ua.setFromMatrixPosition(te.matrixWorld),I.position.copy(Ua),Fh.copy(I.position),Fh.add(O_[de]),I.up.copy(B_[de]),I.lookAt(Fh),I.updateMatrixWorld(),z.makeTranslation(-Ua.x,-Ua.y,-Ua.z),qd.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(qd,I.coordinateSystem,I.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)i.setRenderTarget(ie.map,de),i.clear();else{de===0&&(i.setRenderTarget(ie.map),i.clear());let I=ie.getViewport(de);a.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),W.viewport(a)}n=ie.getFrustum(de),m(A,_,qe,te,this.type)}ie.isPointLightShadow!==!0&&this.type===mr&&b(ie,_),ie.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,R,B)};function b(T,A){let _=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:ts,type:Xn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,_,d,v,null)}function M(T,A,_,E){let R=null,B=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)R=B;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let W=R.uuid,$=A.uuid,k=c[W];k===void 0&&(k={},c[W]=k);let Z=k[$];Z===void 0&&(Z=R.clone(),k[$]=Z,A.addEventListener("dispose",S)),R=Z}if(R.visible=A.visible,R.wireframe=A.wireframe,E===mr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let W=i.properties.get(R);W.light=_}return R}function m(T,A,_,E,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===mr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let $=e.update(T),k=T.material;if(Array.isArray(k)){let Z=$.groups;for(let te=0,ie=Z.length;te<ie;te++){let xe=Z[te],se=k[xe.materialIndex];if(se&&se.visible){let le=M(T,se,E,R);T.onBeforeShadow(i,T,A,_,$,le,xe),i.renderBufferDirect(_,null,$,le,T,xe),T.onAfterShadow(i,T,A,_,$,le,xe)}}}else if(k.visible){let Z=M(T,k,E,R);T.onBeforeShadow(i,T,A,_,$,Z,null),i.renderBufferDirect(_,null,$,Z,T,null),T.onAfterShadow(i,T,A,_,$,Z,null)}}let W=T.children;for(let $=0,k=W.length;$<k;$++)m(W[$],A,_,E,R)}function S(T){T.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function z_(i,e){function t(){let H=!1,Re=new Pt,ue=null,Te=new Pt(0,0,0,0);return{setMask:function(Fe){ue!==Fe&&!H&&(i.colorMask(Fe,Fe,Fe,Fe),ue=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,me,Qe,He,At){At===!0&&(Fe*=He,me*=He,Qe*=He),Re.set(Fe,me,Qe,He),Te.equals(Re)===!1&&(i.clearColor(Fe,me,Qe,He),Te.copy(Re))},reset:function(){H=!1,ue=null,Te.set(-1,0,0,0)}}}function n(){let H=!1,Re=!1,ue=null,Te=null,Fe=null;return{setReversed:function(me){if(Re!==me){let Qe=e.get("EXT_clip_control");me?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Re=me;let He=Fe;Fe=null,this.setClear(He)}},getReversed:function(){return Re},setTest:function(me){me?G(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(me){ue!==me&&!H&&(i.depthMask(me),ue=me)},setFunc:function(me){if(Re&&(me=xd[me]),Te!==me){switch(me){case bo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case Eo:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=me}},setLocked:function(me){H=me},setClear:function(me){Fe!==me&&(Fe=me,Re&&(me=1-me),i.clearDepth(me))},reset:function(){H=!1,ue=null,Te=null,Fe=null,Re=!1}}}function s(){let H=!1,Re=null,ue=null,Te=null,Fe=null,me=null,Qe=null,He=null,At=null;return{setTest:function(St){H||(St?G(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(St){Re!==St&&!H&&(i.stencilMask(St),Re=St)},setFunc:function(St,fn,pn){(ue!==St||Te!==fn||Fe!==pn)&&(i.stencilFunc(St,fn,pn),ue=St,Te=fn,Fe=pn)},setOp:function(St,fn,pn){(me!==St||Qe!==fn||He!==pn)&&(i.stencilOp(St,fn,pn),me=St,Qe=fn,He=pn)},setLocked:function(St){H=St},setClear:function(St){At!==St&&(i.clearStencil(St),At=St)},reset:function(){H=!1,Re=null,ue=null,Te=null,Fe=null,me=null,Qe=null,He=null,At=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,x=[],v=null,g=!1,p=null,b=null,M=null,m=null,S=null,T=null,A=null,_=new dt(0,0,0),E=0,R=!1,B=null,W=null,$=null,k=null,Z=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,xe=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ie=xe>=1):se.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ie=xe>=2);let le=null,de={},qe=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),z=new Pt().fromArray(qe),J=new Pt().fromArray(I);function _e(H,Re,ue,Te){let Fe=new Uint8Array(4),me=i.createTexture();i.bindTexture(H,me),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ue;Qe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Re+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return me}let N={};N[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(i.DEPTH_TEST),a.setFunc(er),Se(!1),we(ih),G(i.CULL_FACE),pe(ai);function G(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function ge(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function q(H,Re){return u[H]!==Re?(i.bindFramebuffer(H,Re),u[H]=Re,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Re),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ye(H,Re){let ue=x,Te=!1;if(H){ue=d.get(Re),ue===void 0&&(ue=[],d.set(Re,ue));let Fe=H.textures;if(ue.length!==Fe.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Qe=Fe.length;me<Qe;me++)ue[me]=i.COLOR_ATTACHMENT0+me;ue.length=Fe.length,Te=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ue)}function De(H){return v!==H?(i.useProgram(H),v=H,!0):!1}let nt={[bs]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};nt[Vu]=i.MIN,nt[Gu]=i.MAX;let he={[Hu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[oh]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[lh]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(H,Re,ue,Te,Fe,me,Qe,He,At,St){if(H===ai){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(G(i.BLEND),g=!0),H!==Bu){if(H!==p||St!==R){if((b!==bs||S!==bs)&&(i.blendEquation(i.FUNC_ADD),b=bs,S=bs),St)switch(H){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",H);break}else switch(H){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",H);break}M=null,m=null,T=null,A=null,_.set(0,0,0),E=0,p=H,R=St}return}Fe=Fe||Re,me=me||ue,Qe=Qe||Te,(Re!==b||Fe!==S)&&(i.blendEquationSeparate(nt[Re],nt[Fe]),b=Re,S=Fe),(ue!==M||Te!==m||me!==T||Qe!==A)&&(i.blendFuncSeparate(he[ue],he[Te],he[me],he[Qe]),M=ue,m=Te,T=me,A=Qe),(He.equals(_)===!1||At!==E)&&(i.blendColor(He.r,He.g,He.b,At),_.copy(He),E=At),p=H,R=!1}function Me(H,Re){H.side===Jt?ge(i.CULL_FACE):G(i.CULL_FACE);let ue=H.side===dn;Re&&(ue=!ue),Se(ue),H.blending===gr&&H.transparent===!1?pe(ai):pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Te=H.stencilWrite;o.setTest(Te),Te&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ye(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(H){B!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),B=H)}function we(H){H!==Nu?(G(i.CULL_FACE),H!==W&&(H===ih?i.cullFace(i.BACK):H===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),W=H}function Je(H){H!==$&&(ie&&i.lineWidth(H),$=H)}function Ye(H,Re,ue){H?(G(i.POLYGON_OFFSET_FILL),(k!==Re||Z!==ue)&&(k=Re,Z=ue,a.getReversed()&&(Re=-Re),i.polygonOffset(Re,ue))):ge(i.POLYGON_OFFSET_FILL)}function et(H){H?G(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function it(H){H===void 0&&(H=i.TEXTURE0+te-1),le!==H&&(i.activeTexture(H),le=H)}function O(H,Re,ue){ue===void 0&&(le===null?ue=i.TEXTURE0+te-1:ue=le);let Te=de[ue];Te===void 0&&(Te={type:void 0,texture:void 0},de[ue]=Te),(Te.type!==H||Te.texture!==Re)&&(le!==ue&&(i.activeTexture(ue),le=ue),i.bindTexture(H,Re||N[H]),Te.type=H,Te.texture=Re)}function Mt(){let H=de[le];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function y(){try{i.texSubImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function Y(){try{i.texSubImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function be(){try{i.texStorage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function Ae(){try{i.texStorage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function ce(){try{i.texImage2D(...arguments)}catch(H){rt("WebGLState:",H)}}function fe(){try{i.texImage3D(...arguments)}catch(H){rt("WebGLState:",H)}}function Ie(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function Ke(H,Re){f[H]!==Re&&(i.pixelStorei(H,Re),f[H]=Re)}function Pe(H){z.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),z.copy(H))}function Ce(H){J.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function Ge(H,Re){let ue=c.get(Re);ue===void 0&&(ue=new WeakMap,c.set(Re,ue));let Te=ue.get(H);Te===void 0&&(Te=i.getUniformBlockIndex(Re,H.name),ue.set(H,Te))}function tt(H,Re){let Te=c.get(Re).get(H);l.get(Re)!==Te&&(i.uniformBlockBinding(Re,Te,H.__bindingPointIndex),l.set(Re,Te))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},le=null,de={},u={},d=new WeakMap,x=[],v=null,g=!1,p=null,b=null,M=null,m=null,S=null,T=null,A=null,_=new dt(0,0,0),E=0,R=!1,B=null,W=null,$=null,k=null,Z=null,z.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:ge,bindFramebuffer:q,drawBuffers:ye,useProgram:De,setBlending:pe,setMaterial:Me,setFlipSided:Se,setCullFace:we,setLineWidth:Je,setPolygonOffset:Ye,setScissorTest:et,activeTexture:it,bindTexture:O,unbindTexture:Mt,compressedTexImage2D:pt,compressedTexImage3D:C,texImage2D:ce,texImage3D:fe,pixelStorei:Ke,getParameter:Ie,updateUBOMapping:Ge,uniformBlockBinding:tt,texStorage2D:be,texStorage3D:Ae,texSubImage2D:y,texSubImage3D:Y,compressedTexSubImage2D:j,compressedTexSubImage3D:oe,scissor:Pe,viewport:Ce,reset:ot}}function V_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,f=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return x?new OffscreenCanvas(C,y):Jr("canvas")}function g(C,y,Y){let j=1,oe=pt(C);if((oe.width>Y||oe.height>Y)&&(j=Y/Math.max(oe.width,oe.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let be=Math.floor(j*oe.width),Ae=Math.floor(j*oe.height);u===void 0&&(u=v(be,Ae));let ce=y?v(be,Ae):u;return ce.width=be,ce.height=Ae,ce.getContext("2d").drawImage(C,0,0,be,Ae),st("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+be+"x"+Ae+")."),ce}else return"data"in C&&st("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function m(C,y,Y,j,oe,be=!1){if(C!==null){if(i[C]!==void 0)return i[C];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ae;j&&(Ae=e.get("EXT_texture_norm16"),Ae||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=y;if(y===i.RED&&(Y===i.FLOAT&&(ce=i.R32F),Y===i.HALF_FLOAT&&(ce=i.R16F),Y===i.UNSIGNED_BYTE&&(ce=i.R8),Y===i.UNSIGNED_SHORT&&Ae&&(ce=Ae.R16_EXT),Y===i.SHORT&&Ae&&(ce=Ae.R16_SNORM_EXT)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.R8UI),Y===i.UNSIGNED_SHORT&&(ce=i.R16UI),Y===i.UNSIGNED_INT&&(ce=i.R32UI),Y===i.BYTE&&(ce=i.R8I),Y===i.SHORT&&(ce=i.R16I),Y===i.INT&&(ce=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(ce=i.RG32F),Y===i.HALF_FLOAT&&(ce=i.RG16F),Y===i.UNSIGNED_BYTE&&(ce=i.RG8),Y===i.UNSIGNED_SHORT&&Ae&&(ce=Ae.RG16_EXT),Y===i.SHORT&&Ae&&(ce=Ae.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RG16UI),Y===i.UNSIGNED_INT&&(ce=i.RG32UI),Y===i.BYTE&&(ce=i.RG8I),Y===i.SHORT&&(ce=i.RG16I),Y===i.INT&&(ce=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),Y===i.UNSIGNED_INT&&(ce=i.RGB32UI),Y===i.BYTE&&(ce=i.RGB8I),Y===i.SHORT&&(ce=i.RGB16I),Y===i.INT&&(ce=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ce=i.RGBA32UI),Y===i.BYTE&&(ce=i.RGBA8I),Y===i.SHORT&&(ce=i.RGBA16I),Y===i.INT&&(ce=i.RGBA32I)),y===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ae&&(ce=Ae.RGB16_EXT),Y===i.SHORT&&Ae&&(ce=Ae.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),y===i.RGBA){let fe=be?Zr:vt.getTransfer(oe);Y===i.FLOAT&&(ce=i.RGBA32F),Y===i.HALF_FLOAT&&(ce=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ce=fe===Et?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ae&&(ce=Ae.RGBA16_EXT),Y===i.SHORT&&Ae&&(ce=Ae.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(C,y){let Y;return C?y===null||y===Wn||y===_r?Y=i.DEPTH24_STENCIL8:y===Rn?Y=i.DEPTH32F_STENCIL8:y===xr&&(Y=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wn||y===_r?Y=i.DEPTH_COMPONENT24:y===Rn?Y=i.DEPTH_COMPONENT32F:y===xr&&(Y=i.DEPTH_COMPONENT16),Y}function T(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),B(y)}function E(C){let y=n.get(C);if(y.__webglInit===void 0)return;let Y=C.source,j=d.get(Y);if(j){let oe=j[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(C),Object.keys(j).length===0&&d.delete(Y)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let Y=C.source,j=d.get(Y);delete j[y.__cacheKey],a.memory.textures--}function B(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let oe=0;oe<y.__webglFramebuffer[j].length;oe++)i.deleteFramebuffer(y.__webglFramebuffer[j][oe]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=C.textures;for(let j=0,oe=Y.length;j<oe;j++){let be=n.get(Y[j]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(Y[j])}n.remove(C)}let W=0;function $(){W=0}function k(){return W}function Z(C){W=C}function te(){let C=W;return C>=s.maxTextures&&st("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,C}function ie(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function xe(C,y){let Y=n.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let j=C.image;if(j===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(Y,C,y);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function se(C,y){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ge(Y,C,y);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function le(C,y){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){ge(Y,C,y);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function de(C,y){let Y=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Y.__version!==C.version){q(Y,C,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}let qe={[tr]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},I={[Yt]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Ea]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[al]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},z={[ld]:i.NEVER,[fd]:i.ALWAYS,[cd]:i.LESS,[Xl]:i.LEQUAL,[hd]:i.EQUAL,[ql]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function J(C,y){if(y.type===Rn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Kt||y.magFilter===al||y.magFilter===Ea||y.magFilter===ji||y.minFilter===Kt||y.minFilter===al||y.minFilter===Ea||y.minFilter===ji)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,qe[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,qe[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,qe[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,z[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Yt||y.minFilter!==Ea&&y.minFilter!==ji||y.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function _e(C,y){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let j=y.source,oe=d.get(j);oe===void 0&&(oe={},d.set(j,oe));let be=ie(y);if(be!==C.__cacheKey){oe[be]===void 0&&(oe[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),oe[be].usedTimes++;let Ae=oe[C.__cacheKey];Ae!==void 0&&(oe[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(y)),C.__cacheKey=be,C.__webglTexture=oe[be].texture}return Y}function N(C,y,Y){return Math.floor(Math.floor(C/Y)/y)}function G(C,y,Y,j){let be=C.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Y,j,y.data);else{be.sort((Ke,Pe)=>Ke.start-Pe.start);let Ae=0;for(let Ke=1;Ke<be.length;Ke++){let Pe=be[Ae],Ce=be[Ke],Ge=Pe.start+Pe.count,tt=N(Ce.start,y.width,4),ot=N(Pe.start,y.width,4);Ce.start<=Ge+1&&tt===ot&&N(Ce.start+Ce.count-1,y.width,4)===tt?Pe.count=Math.max(Pe.count,Ce.start+Ce.count-Pe.start):(++Ae,be[Ae]=Ce)}be.length=Ae+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ke=0,Pe=be.length;Ke<Pe;Ke++){let Ce=be[Ke],Ge=Math.floor(Ce.start/4),tt=Math.ceil(Ce.count/4),ot=Ge%y.width,H=Math.floor(Ge/y.width),Re=tt,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,ot,H,Re,ue,Y,j,y.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function ge(C,y,Y){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);let oe=_e(C,y),be=y.source;t.bindTexture(j,C.__webglTexture,i.TEXTURE0+Y);let Ae=n.get(be);if(be.version!==Ae.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ue=vt.getPrimaries(vt.workingColorSpace),Te=y.colorSpace===Pi?null:vt.getPrimaries(y.colorSpace),Fe=y.colorSpace===Pi||ue===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let fe=g(y.image,!1,s.maxTextureSize);fe=Mt(y,fe);let Ie=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),Pe=m(y.internalFormat,Ie,Ke,y.normalized,y.colorSpace,y.isVideoTexture);J(j,y);let Ce,Ge=y.mipmaps,tt=y.isVideoTexture!==!0,ot=Ae.__version===void 0||oe===!0,H=be.dataReady,Re=T(y,fe);if(y.isDepthTexture)Pe=S(y.format===es,y.type),ot&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ie,Ke,null));else if(y.isDataTexture)if(Ge.length>0){tt&&ot&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,Ge[0].width,Ge[0].height);for(let ue=0,Te=Ge.length;ue<Te;ue++)Ce=Ge[ue],tt?H&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ce.width,Ce.height,Ie,Ke,Ce.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ce.width,Ce.height,0,Ie,Ke,Ce.data);y.generateMipmaps=!1}else tt?(ot&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,fe.width,fe.height),H&&G(y,fe,Ie,Ke)):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ie,Ke,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){tt&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Pe,Ge[0].width,Ge[0].height,fe.depth);for(let ue=0,Te=Ge.length;ue<Te;ue++)if(Ce=Ge[ue],y.format!==In)if(Ie!==null)if(tt){if(H)if(y.layerUpdates.size>0){let Fe=Ih(Ce.width,Ce.height,y.format,y.type);for(let me of y.layerUpdates){let Qe=Ce.data.subarray(me*Fe/Ce.data.BYTES_PER_ELEMENT,(me+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,me,Ce.width,Ce.height,1,Ie,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ce.width,Ce.height,fe.depth,Ie,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ce.width,Ce.height,fe.depth,Ie,Ke,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,Ce.width,Ce.height,fe.depth,0,Ie,Ke,Ce.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{tt&&ot&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,Ge[0].width,Ge[0].height);for(let ue=0,Te=Ge.length;ue<Te;ue++)Ce=Ge[ue],y.format!==In?Ie!==null?tt?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Pe,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?H&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ce.width,Ce.height,Ie,Ke,Ce.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ce.width,Ce.height,0,Ie,Ke,Ce.data)}else if(y.isDataArrayTexture)if(tt){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Pe,fe.width,fe.height,fe.depth),H)if(y.layerUpdates.size>0){let ue=Ih(fe.width,fe.height,y.format,y.type);for(let Te of y.layerUpdates){let Fe=fe.data.subarray(Te*ue/fe.data.BYTES_PER_ELEMENT,(Te+1)*ue/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,fe.width,fe.height,1,Ie,Ke,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ie,Ke,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,Ie,Ke,fe.data);else if(y.isData3DTexture)tt?(ot&&t.texStorage3D(i.TEXTURE_3D,Re,Pe,fe.width,fe.height,fe.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ie,Ke,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,Ie,Ke,fe.data);else if(y.isFramebufferTexture){if(ot)if(tt)t.texStorage2D(i.TEXTURE_2D,Re,Pe,fe.width,fe.height);else{let ue=fe.width,Te=fe.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Pe,ue,Te,0,Ie,Ke,null),ue>>=1,Te>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),fe.parentNode!==ue){ue.appendChild(fe),f.add(y),ue.onpaint=Te=>{let Fe=Te.changedElements;for(let me of f)Fe.includes(me.image)&&(me.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Fe=i.RGBA,me=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,me,Qe,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(tt&&ot){let ue=pt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Re,Pe,ue.width,ue.height)}for(let ue=0,Te=Ge.length;ue<Te;ue++)Ce=Ge[ue],tt?H&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ie,Ke,Ce):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ie,Ke,Ce);y.generateMipmaps=!1}else if(tt){if(ot){let ue=pt(fe);t.texStorage2D(i.TEXTURE_2D,Re,Pe,ue.width,ue.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Ke,fe)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ie,Ke,fe);p(y)&&b(j),Ae.__version=be.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function q(C,y,Y){if(y.image.length!==6)return;let j=_e(C,y),oe=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let be=n.get(oe);if(oe.version!==be.__version||j===!0){t.activeTexture(i.TEXTURE0+Y);let Ae=vt.getPrimaries(vt.workingColorSpace),ce=y.colorSpace===Pi?null:vt.getPrimaries(y.colorSpace),fe=y.colorSpace===Pi||Ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,Ke=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!Ie&&!Ke?Pe[me]=g(y.image[me],!0,s.maxCubemapSize):Pe[me]=Ke?y.image[me].image:y.image[me],Pe[me]=Mt(y,Pe[me]);let Ce=Pe[0],Ge=r.convert(y.format,y.colorSpace),tt=r.convert(y.type),ot=m(y.internalFormat,Ge,tt,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,Re=be.__version===void 0||j===!0,ue=oe.dataReady,Te=T(y,Ce);J(i.TEXTURE_CUBE_MAP,y);let Fe;if(Ie){H&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ot,Ce.width,Ce.height);for(let me=0;me<6;me++){Fe=Pe[me].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){let He=Fe[Qe];y.format!==In?Ge!==null?H?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,He.width,He.height,Ge,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,ot,He.width,He.height,0,He.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,0,0,He.width,He.height,Ge,tt,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe,ot,He.width,He.height,0,Ge,tt,He.data)}}}else{if(Fe=y.mipmaps,H&&Re){Fe.length>0&&Te++;let me=pt(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ot,me.width,me.height)}for(let me=0;me<6;me++)if(Ke){H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,Ge,tt,Pe[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ot,Pe[me].width,Pe[me].height,0,Ge,tt,Pe[me].data);for(let Qe=0;Qe<Fe.length;Qe++){let At=Fe[Qe].image[me].image;H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,At.width,At.height,Ge,tt,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,ot,At.width,At.height,0,Ge,tt,At.data)}}else{H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ge,tt,Pe[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ot,Ge,tt,Pe[me]);for(let Qe=0;Qe<Fe.length;Qe++){let He=Fe[Qe];H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,0,0,Ge,tt,He.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Qe+1,ot,Ge,tt,He.image[me])}}}p(y)&&b(i.TEXTURE_CUBE_MAP),be.__version=oe.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ye(C,y,Y,j,oe,be){let Ae=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),fe=m(Y.internalFormat,Ae,ce,Y.normalized,Y.colorSpace),Ie=n.get(y),Ke=n.get(Y);if(Ke.__renderTarget=y,!Ie.__hasExternalTextures){let Pe=Math.max(1,y.width>>be),Ce=Math.max(1,y.height>>be);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,be,fe,Pe,Ce,y.depth,0,Ae,ce,null):t.texImage2D(oe,be,fe,Pe,Ce,0,Ae,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,oe,Ke.__webglTexture,0,et(y)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,oe,Ke.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(C,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let j=y.depthTexture,oe=j&&j.isDepthTexture?j.type:null,be=S(y.stencilBuffer,oe),Ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(y),be,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(y),be,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,be,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{let j=y.textures;for(let oe=0;oe<j.length;oe++){let be=j[oe],Ae=r.convert(be.format,be.colorSpace),ce=r.convert(be.type),fe=m(be.internalFormat,Ae,ce,be.normalized,be.colorSpace);it(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(y),fe,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(y),fe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,fe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(C,y,Y){let j=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(y.depthTexture);if(oe.__renderTarget=y,(!oe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),J(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ie=r.convert(y.depthTexture.format),Ke=r.convert(y.depthTexture.type),Pe;y.depthTexture.format===ei?Pe=i.DEPTH_COMPONENT24:y.depthTexture.format===es&&(Pe=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pe,y.width,y.height,0,Ie,Ke,null)}}else xe(y.depthTexture,0);let be=oe.__webglTexture,Ae=et(y),ce=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,fe=y.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ei)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,be,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,be,0);else if(y.depthTexture.format===es)it(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ce,be,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ce,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(C){let y=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",oe)};j.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=j}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let j=0;j<6;j++)nt(y.__webglFramebuffer[j],C,j);else{let j=C.texture.mipmaps;j&&j.length>0?nt(y.__webglFramebuffer[0],C,0):nt(y.__webglFramebuffer,C,0)}else if(Y){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),De(y.__webglDepthbuffer[j],C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),De(y.__webglDepthbuffer,C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,y,Y){let j=n.get(C);y!==void 0&&ye(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&he(C)}function Me(C){let y=C.texture,Y=n.get(C),j=n.get(y);C.addEventListener("dispose",_);let oe=C.textures,be=C.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,a.memory.textures++),be){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let fe=0;fe<y.mipmaps.length;fe++)Y.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else Y.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ce=0,fe=oe.length;ce<fe;ce++){let Ie=n.get(oe[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&it(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){let fe=oe[ce];Y.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);let Ie=r.convert(fe.format,fe.colorSpace),Ke=r.convert(fe.type),Pe=m(fe.internalFormat,Ie,Ke,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),Ce=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),J(i.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)ye(Y.__webglFramebuffer[ce][fe],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else ye(Y.__webglFramebuffer[ce],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(y)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ce=0,fe=oe.length;ce<fe;ce++){let Ie=oe[ce],Ke=n.get(Ie),Pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ke.__webglTexture),J(Pe,Ie),ye(Y.__webglFramebuffer,C,Ie,i.COLOR_ATTACHMENT0+ce,Pe,0),p(Ie)&&b(Pe)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),J(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)ye(Y.__webglFramebuffer[fe],C,y,i.COLOR_ATTACHMENT0,ce,fe);else ye(Y.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,ce,0);p(y)&&b(ce),t.unbindTexture()}C.depthBuffer&&he(C)}function Se(C){let y=C.textures;for(let Y=0,j=y.length;Y<j;Y++){let oe=y[Y];if(p(oe)){let be=M(C),Ae=n.get(oe).__webglTexture;t.bindTexture(be,Ae),b(be),t.unbindTexture()}}}let we=[],Je=[];function Ye(C){if(C.samples>0){if(it(C)===!1){let y=C.textures,Y=C.width,j=C.height,oe=i.COLOR_BUFFER_BIT,be=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),ce=y.length>1;if(ce)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let fe=C.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ie]);let Ke=n.get(y[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,Y,j,0,0,Y,j,oe,i.NEAREST),l===!0&&(we.length=0,Je.length=0,we.push(i.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(we.push(be),Je.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ie]);let Ke=n.get(y[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function it(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Mt(C,y){let Y=C.colorSpace,j=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Yr&&Y!==Pi&&(vt.getTransfer(Y)===Et?(j!==In||oe!==_n)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",Y)),y}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=$,this.getTextureUnits=k,this.setTextureUnits=Z,this.setTexture2D=xe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=pe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function G_(i,e){function t(n,s=Pi){let r,a=vt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===Sh)return i.RGB;if(n===In)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===Aa||n===Ca||n===Ra||n===Ia)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===vl||n===Ml||n===Sl||n===Pa||n===bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===yl)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return r.COMPRESSED_RG11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===kl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Gl||n===La||n===Hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:H_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,v=typeof XRWebGLBinding<"u",g=new Wh,p={},b=t.getContextAttributes(),M=null,m=null,S=[],T=[],A=new Ee,_=null,E=null,R=new cn;R.viewport=new Pt;let B=new cn;B.viewport=new Pt;let W=[R,B],$=new il,k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=S[N];return G===void 0&&(G=new ar,S[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=S[N];return G===void 0&&(G=new ar,S[N]=G),G.getGripSpace()},this.getHand=function(N){let G=S[N];return G===void 0&&(G=new ar,S[N]=G),G.getHandSpace()};function te(N){let G=T.indexOf(N.inputSource);if(G===-1)return;let ge=S[G];ge!==void 0&&(ge.update(N.inputSource,N.frame,c||a),ge.dispatchEvent({type:N.type,data:N.inputSource}))}function ie(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",xe);for(let N=0;N<S.length;N++){let G=T[N];G!==null&&(T[N]=null,S[N].disconnect(G))}k=null,Z=null,g.reset();for(let N in p)delete p[N];if(e.setRenderTarget(M),d=null,u=null,f=null,s=null,m=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){let N=E.camera;N.fov=E.fov,N.zoom=E.zoom,N.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",xe),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,q=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?es:ei,q=b.stencil?_r:Wn);let De={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),m=new gn(u.textureWidth,u.textureHeight,{format:In,type:_n,depthTexture:new Xi(u.textureWidth,u.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new gn(d.framebufferWidth,d.framebufferHeight,{format:In,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function xe(N){for(let G=0;G<N.removed.length;G++){let ge=N.removed[G],q=T.indexOf(ge);q>=0&&(T[q]=null,S[q].disconnect(ge))}for(let G=0;G<N.added.length;G++){let ge=N.added[G],q=T.indexOf(ge);if(q===-1){for(let De=0;De<S.length;De++)if(De>=T.length){T.push(ge),q=De;break}else if(T[De]===null){T[De]=ge,q=De;break}if(q===-1)break}let ye=S[q];ye&&ye.connect(ge)}}let se=new L,le=new L;function de(N,G,ge){se.setFromMatrixPosition(G.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);let q=se.distanceTo(le),ye=G.projectionMatrix.elements,De=ge.projectionMatrix.elements,nt=ye[14]/(ye[10]-1),he=ye[14]/(ye[10]+1),pe=(ye[9]+1)/ye[5],Me=(ye[9]-1)/ye[5],Se=(ye[8]-1)/ye[0],we=(De[8]+1)/De[0],Je=nt*Se,Ye=nt*we,et=q/(-Se+we),it=et*-Se;if(G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(it),N.translateZ(et),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ye[10]===-1)N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let O=nt+et,Mt=he+et,pt=Je-it,C=Ye+(q-it),y=pe*he/Mt*O,Y=Me*he/Mt*O;N.projectionMatrix.makePerspective(pt,C,y,Y,O,Mt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function qe(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let G=N.near,ge=N.far;g.texture!==null&&(g.depthNear>0&&(G=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),$.near=B.near=R.near=G,$.far=B.far=R.far=ge,(k!==$.near||Z!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),k=$.near,Z=$.far),$.layers.mask=N.layers.mask|6,R.layers.mask=$.layers.mask&-5,B.layers.mask=$.layers.mask&-3;let q=N.parent,ye=$.cameras;qe($,q);for(let De=0;De<ye.length;De++)qe(ye[De],q);ye.length===2?de($,R,B):$.projectionMatrix.copy(R.projectionMatrix),E===null&&N.isPerspectiveCamera&&(E={camera:N,fov:N.fov,zoom:N.zoom}),I(N,$,q)};function I(N,G,ge){ge===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(ge.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=sr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(N){return p[N]};let z=null;function J(N,G){if(h=G.getViewerPose(c||a),x=G,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let q=!1;ge.length!==$.cameras.length&&($.cameras.length=0,q=!0);for(let he=0;he<ge.length;he++){let pe=ge[he],Me=null;if(d!==null)Me=d.getViewport(pe);else{let we=f.getViewSubImage(u,pe);Me=we.viewport,he===0&&(e.setRenderTargetTextures(m,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(m))}let Se=W[he];Se===void 0&&(Se=new cn,Se.layers.enable(he),Se.viewport=new Pt,W[he]=Se),Se.matrix.fromArray(pe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(pe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Me.x,Me.y,Me.width,Me.height),he===0&&($.matrix.copy(Se.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),q===!0&&$.cameras.push(Se)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let he=f.getDepthInformation(ge[0]);he&&he.isValid&&he.texture&&g.init(he,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let he=0;he<ge.length;he++){let pe=ge[he].camera;if(pe){let Me=p[pe];Me||(Me=new aa,p[pe]=Me);let Se=f.getCameraImage(pe);Me.sourceTexture=Se}}}}for(let ge=0;ge<S.length;ge++){let q=T[ge],ye=S[ge];q!==null&&ye!==void 0&&ye.update(q,G,c||a)}z&&z(N,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),x=null}let _e=new Yd;_e.setAnimationLoop(J),this.setAnimationLoop=function(N){z=N},this.dispose=function(){}}},X_=new wt,jd=new ct;jd.set(-1,0,0,0,1,0,0,0,1);function q_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ah(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,M,m){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,m)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,m=b.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(m)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(jd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,S){let T=S.program;n.uniformBlockBinding(m,T)}function c(m,S){let T=s[m.id];T===void 0&&(g(m),T=h(m),s[m.id]=T,m.addEventListener("dispose",b));let A=S.program;n.updateUBOMapping(m,A);let _=e.render.frame;r[m.id]!==_&&(u(m),r[m.id]=_)}function h(m){let S=f();m.__bindingPointIndex=S;let T=i.createBuffer(),A=m.__size,_=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){let S=s[m.id],T=m.uniforms,A=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=T.length;_<E;_++){let R=T[_];if(Array.isArray(R))for(let B=0,W=R.length;B<W;B++)d(R[B],_,B,A);else d(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(m,S,T,A){if(v(m,S,T,A)===!0){let _=m.__offset,E=m.value;if(Array.isArray(E)){let R=0;for(let B=0;B<E.length;B++){let W=E[B],$=p(W);x(W,m.__data,R),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,m.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,m.__data)}}function x(m,S,T){typeof m=="number"||typeof m=="boolean"?S[0]=m:m.isMatrix3?(S[0]=m.elements[0],S[1]=m.elements[1],S[2]=m.elements[2],S[3]=0,S[4]=m.elements[3],S[5]=m.elements[4],S[6]=m.elements[5],S[7]=0,S[8]=m.elements[6],S[9]=m.elements[7],S[10]=m.elements[8],S[11]=0):ArrayBuffer.isView(m)?S.set(new m.constructor(m.buffer,m.byteOffset,S.length)):m.toArray(S,T)}function v(m,S,T,A){let _=m.value,E=S+"_"+T;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(m){let S=m.uniforms,T=0,A=16;for(let E=0,R=S.length;E<R;E++){let B=Array.isArray(S[E])?S[E]:[S[E]];for(let W=0,$=B.length;W<$;W++){let k=B[W],Z=Array.isArray(k.value)?k.value:[k.value];for(let te=0,ie=Z.length;te<ie;te++){let xe=Z[te],se=p(xe),le=T%A,de=le%se.boundary,qe=le+de;T+=de,qe!==0&&A-qe<se.storage&&(T+=A-qe),k.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=se.storage}}}let _=T%A;return _>0&&(T+=A-_),m.__size=T,m.__cache={},this}function p(m){let S={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(S.boundary=4,S.storage=4):m.isVector2?(S.boundary=8,S.storage=8):m.isVector3||m.isColor?(S.boundary=16,S.storage=12):m.isVector4?(S.boundary=16,S.storage=16):m.isMatrix3?(S.boundary=48,S.storage=48):m.isMatrix4?(S.boundary=64,S.storage=64):m.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(S.boundary=16,S.storage=m.byteLength):st("WebGLRenderer: Unsupported uniform value type.",m),S}function b(m){let S=m.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let m in s)i.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var Z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function J_(){return oi===null&&(oi=new ia(Z_,16,16,ts,Xn),oi.name="DFG_LUT",oi.minFilter=Kt,oi.magFilter=Kt,oi.wrapS=Qn,oi.wrapT=Qn,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Ql=class{constructor(e={}){let{canvas:t=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let v=d,g=new Set([fl,dl,ul]),p=new Set([_n,Wn,xr,_r,ll,cl]),b=new Uint32Array(4),M=new Int32Array(4),m=new L,S=null,T=null,A=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,B=!1,W=null,$=null,k=null,Z=null;this._outputColorSpace=qt;let te=0,ie=0,xe=null,se=-1,le=null,de=new Pt,qe=new Pt,I=null,z=new dt(0),J=0,_e=t.width,N=t.height,G=1,ge=null,q=null,ye=new Pt(0,0,_e,N),De=new Pt(0,0,_e,N),nt=!1,he=new lr,pe=!1,Me=!1,Se=new wt,we=new L,Je=new Pt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function it(){return xe===null?G:1}let O=n;function Mt(w,V){return t.getContext(w,V)}let pt,C,y,Y,j,oe,be,Ae,ce,fe,Ie,Ke,Pe,Ce,Ge,tt,ot,H,Re,ue,Te,Fe,me;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",fn,!1),O===null){let V="webgl2";if(O=Mt(V,w),O===null)throw Mt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(w){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),rt("WebGLRenderer: "+w.message),w}function Qe(){pt=new nx(O),pt.init(),Te=new G_(O,pt),C=new q0(O,pt,e,Te),y=new z_(O,pt),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),$=O.createFramebuffer(),k=O.createFramebuffer(),Z=O.createFramebuffer(),Y=new rx(O),j=new E_,oe=new V_(O,pt,y,j,C,Te,Y),be=new tx(R),Ae=new om(O),Fe=new W0(O,Ae),ce=new ix(O,Ae,Y,Fe),fe=new ox(O,ce,Ae,Fe,Y),H=new ax(O,C,oe),Ge=new Y0(j),Ie=new T_(R,be,pt,C,Fe,Ge),Ke=new q_(R,j),Pe=new C_,Ce=new U_(pt),ot=new H0(R,be,y,fe,x,l),tt=new k_(R,fe,C),me=new Y_(O,Y,C,y),Re=new X0(O,pt,Y),ue=new sx(O,pt,Y),Y.programs=Ie.programs,R.capabilities=C,R.extensions=pt,R.properties=j,R.renderLists=Pe,R.shadowMap=tt,R.state=y,R.info=Y}v!==_n&&(E=new cx(v,t.width,t.height,o,s,r));let He=new Xh(R,O);this.xr=He,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(_e,N,!1))},this.getSize=function(w){return w.set(_e,N)},this.setSize=function(w,V,ne=!0){if(He.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=w,N=V,t.width=Math.floor(w*G),t.height=Math.floor(V*G),ne===!0&&(t.style.width=w+"px",t.style.height=V+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(_e*G,N*G).floor()},this.setDrawingBufferSize=function(w,V,ne){_e=w,N=V,G=ne,t.width=Math.floor(w*ne),t.height=Math.floor(V*ne),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(v===_n){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(de)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,V,ne,K){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,V,ne,K),y.viewport(de.copy(ye).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,V,ne,K){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,V,ne,K),y.scissor(qe.copy(De).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){y.setScissorTest(nt=w)},this.setOpaqueSort=function(w){ge=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,ne=!0){let K=0;if(w){let Q=!1;if(xe!==null){let Ue=xe.texture.format;Q=g.has(Ue)}if(Q){let Ue=xe.texture.type,ke=p.has(Ue),Le=ot.getClearColor(),ze=ot.getClearAlpha(),Ze=Le.r,ht=Le.g,mt=Le.b;ke?(b[0]=Ze,b[1]=ht,b[2]=mt,b[3]=ze,O.clearBufferuiv(O.COLOR,0,b)):(M[0]=Ze,M[1]=ht,M[2]=mt,M[3]=ze,O.clearBufferiv(O.COLOR,0,M))}else K|=O.COLOR_BUFFER_BIT}V&&(K|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),W=w},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),ot.dispose(),Pe.dispose(),Ce.dispose(),j.dispose(),be.dispose(),fe.dispose(),Fe.dispose(),me.dispose(),Ie.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ya),He.removeEventListener("sessionend",Us),Nn.stop()};function At(w){w.preventDefault(),wh("WebGLRenderer: Context Lost."),B=!0}function St(){wh("WebGLRenderer: Context Restored."),B=!1;let w=Y.autoReset,V=tt.enabled,ne=tt.autoUpdate,K=tt.needsUpdate,Q=tt.type;Qe(),Y.autoReset=w,tt.enabled=V,tt.autoUpdate=ne,tt.needsUpdate=K,tt.type=Q}function fn(w){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pn(w){let V=w.target;V.removeEventListener("dispose",pn),Zn(V)}function Zn(w){Xa(w),j.remove(w)}function Xa(w){let V=j.get(w).programs;V!==void 0&&(V.forEach(function(ne){Ie.releaseProgram(ne)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,ne,K,Q,Ue){V===null&&(V=Ye);let ke=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Le=Ut(w,V,ne,K,Q);y.setMaterial(K,ke);let ze=ne.index,Ze=1;if(K.wireframe===!0){if(ze=ce.getWireframeAttribute(ne),ze===void 0)return;Ze=2}let ht=ne.drawRange,mt=ne.attributes.position,We=ht.start*Ze,bt=(ht.start+ht.count)*Ze;Ue!==null&&(We=Math.max(We,Ue.start*Ze),bt=Math.min(bt,(Ue.start+Ue.count)*Ze)),ze!==null?(We=Math.max(We,0),bt=Math.min(bt,ze.count)):mt!=null&&(We=Math.max(We,0),bt=Math.min(bt,mt.count));let Nt=bt-We;if(Nt<0||Nt===1/0)return;Fe.setup(Q,K,Le,ne,ze);let Rt,Tt=Re;if(ze!==null&&(Rt=Ae.get(ze),Tt=ue,Tt.setIndex(Rt)),Q.isMesh)K.wireframe===!0?(y.setLineWidth(K.wireframeLinewidth*it()),Tt.setMode(O.LINES)):Tt.setMode(O.TRIANGLES);else if(Q.isLine){let P=K.linewidth;P===void 0&&(P=1),y.setLineWidth(P*it()),Q.isLineSegments?Tt.setMode(O.LINES):Q.isLineLoop?Tt.setMode(O.LINE_LOOP):Tt.setMode(O.LINE_STRIP)}else Q.isPoints?Tt.setMode(O.POINTS):Q.isSprite&&Tt.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let P=Q._multiDrawStarts,U=Q._multiDrawCounts,D=Q._multiDrawCount,F=ze?Ae.get(ze).bytesPerElement:1,re=j.get(K).currentProgram.getUniforms();for(let ee=0;ee<D;ee++)re.setValue(O,"_gl_DrawID",ee),Tt.render(P[ee]/F,U[ee])}else if(Q.isInstancedMesh)Tt.renderInstances(We,Nt,Q.count);else if(ne.isInstancedBufferGeometry){let P=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,U=Math.min(ne.instanceCount,P);Tt.renderInstances(We,Nt,U)}else Tt.render(We,Nt)};function Lr(w,V,ne,K){W!==null&&w.isNodeMaterial&&W.setObject(K,w),pe===!0&&Ge.setState(w,ne,!1),w.transparent===!0&&w.side===Jt&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,xi(w,V,K),w.side=Ki,w.needsUpdate=!0,xi(w,V,K),w.side=Jt):xi(w,V,K)}this.compile=function(w,V,ne=null){ne===null&&(ne=w),W!==null&&W.renderStart(w,V,ne),T=Ce.get(ne),T.init(V),_.push(T),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),w!==ne&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),Me=this.localClippingEnabled,pe=Ge.init(this.clippingPlanes,Me),pe===!0&&Ge.setGlobalState(this.clippingPlanes,V),W!==null&&tt.render(T.state.shadowsArray,ne,V);let K=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){let Le=Ue[ke];Lr(Le,ne,V,Q),K.add(Le)}else Lr(Ue,ne,V,Q),K.add(Ue)}),T=_.pop(),W!==null&&W.renderEnd(),K},this.compileAsync=function(w,V,ne=null){let K=this.compile(w,V,ne);return new Promise(Q=>{function Ue(){if(K.forEach(function(ke){let ze=j.get(ke).currentProgram;(ze===void 0||ze.isReady())&&K.delete(ke)}),K.size===0){Q(w);return}setTimeout(Ue,10)}pt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ni=null;function qa(w){Ni&&Ni(w)}function Ya(){Nn.stop()}function Us(){Nn.start()}let Nn=new Yd;Nn.setAnimationLoop(qa),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(w){Ni=w,He.setAnimationLoop(w),w===null?Nn.stop():Nn.start()},He.addEventListener("sessionstart",Ya),He.addEventListener("sessionend",Us),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(w,V);let ne=He.enabled===!0&&He.isPresenting===!0,K=E!==null&&(xe===null||ne)&&E.begin(R,xe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(V),V=He.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,V,xe),T=Ce.get(w,_.length),T.init(V),T.state.textureUnits=oe.getTextureUnits(),_.push(T),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),he.setFromProjectionMatrix(Se,Vn,V.reversedDepth),Me=this.localClippingEnabled,pe=Ge.init(this.clippingPlanes,Me),S=Pe.get(w,A.length),S.init(),A.push(S),He.enabled===!0&&He.isPresenting===!0){let ke=R.xr.getDepthSensingMesh();ke!==null&&Jn(ke,V,-1/0,R.sortObjects)}Jn(w,V,0,R.sortObjects),S.finish(),W!==null&&W.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(ge,q),et=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,et&&ot.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ge.beginShadows();let Q=T.state.shadowsArray;if(tt.render(Q,w,V),pe===!0&&Ge.endShadows(),(K&&E.hasRenderPass())===!1){let ke=S.opaque,Le=S.transmissive;if(T.setupLights(),V.isArrayCamera){let ze=V.cameras;if(Le.length>0)for(let Ze=0,ht=ze.length;Ze<ht;Ze++){let mt=ze[Ze];pi(ke,Le,w,mt)}et&&ot.render(w);for(let Ze=0,ht=ze.length;Ze<ht;Ze++){let mt=ze[Ze];$n(S,w,mt,mt.viewport)}}else Le.length>0&&pi(ke,Le,w,V),et&&ot.render(w),$n(S,w,V)}xe!==null&&ie===0&&(oe.updateMultisampleRenderTarget(xe),oe.updateRenderTargetMipmap(xe)),K&&E.end(R),w.isScene===!0&&w.onAfterRender(R,w,V),Fe.resetDefaultState(),se=-1,le=null,_.pop(),_.length>0?(T=_[_.length-1],oe.setTextureUnits(T.state.textureUnits),pe===!0&&Ge.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,W!==null&&W.renderEnd()};function Jn(w,V,ne,K){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(he)){K&&Je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);let ke=fe.update(w),Le=w.material;Le.visible&&S.push(w,ke,Le,ne,Je.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(he))){let ke=fe.update(w),Le=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Je.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Je.copy(ke.boundingSphere.center)),Je.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Le)){let ze=ke.groups;for(let Ze=0,ht=ze.length;Ze<ht;Ze++){let mt=ze[Ze],We=Le[mt.materialIndex];We&&We.visible&&S.push(w,ke,We,ne,Je.z,mt,V)}}else Le.visible&&S.push(w,ke,Le,ne,Je.z,null,V)}}let Ue=w.children;for(let ke=0,Le=Ue.length;ke<Le;ke++)Jn(Ue[ke],V,ne,K)}function $n(w,V,ne,K){let{opaque:Q,transmissive:Ue,transparent:ke}=w;T.setupLightsView(ne),pe===!0&&Ge.setGlobalState(R.clippingPlanes,ne),K&&y.viewport(de.copy(K)),Q.length>0&&mi(Q,V,ne),Ue.length>0&&mi(Ue,V,ne),ke.length>0&&mi(ke,V,ne),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function pi(w,V,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let We=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new gn(1,1,{generateMipmaps:!0,type:We?Xn:_n,minFilter:ji,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let Ue=T.state.transmissionRenderTarget[K.id],ke=K.viewport||de;Ue.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);let Le=R.getRenderTarget(),ze=R.getActiveCubeFace(),Ze=R.getActiveMipmapLevel();R.setRenderTarget(Ue),R.getClearColor(z),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),et&&ot.render(ne);let ht=R.toneMapping;R.toneMapping=Hn;let mt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),pe===!0&&Ge.setGlobalState(R.clippingPlanes,K),mi(w,ne,K),oe.updateMultisampleRenderTarget(Ue),oe.updateRenderTargetMipmap(Ue),pt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let bt=0,Nt=V.length;bt<Nt;bt++){let Rt=V[bt],{object:Tt,geometry:P,material:U,group:D}=Rt;if(U.side===Jt&&Tt.layers.test(K.layers)){let F=U.side;U.side=dn,U.needsUpdate=!0,gi(Tt,ne,K,P,U,D),U.side=F,U.needsUpdate=!0,We=!0}}We===!0&&(oe.updateMultisampleRenderTarget(Ue),oe.updateRenderTargetMipmap(Ue))}R.setRenderTarget(Le,ze,Ze),R.setClearColor(z,J),mt!==void 0&&(K.viewport=mt),R.toneMapping=ht}function mi(w,V,ne){let K=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,Ue=w.length;Q<Ue;Q++){let ke=w[Q],{object:Le,geometry:ze,group:Ze}=ke,ht=ke.material;ht.allowOverride===!0&&K!==null&&(ht=K),Le.layers.test(ne.layers)&&gi(Le,V,ne,ze,ht,Ze)}}function gi(w,V,ne,K,Q,Ue){W!==null&&Q.isNodeMaterial&&W.setObject(w,Q),w.onBeforeRender(R,V,ne,K,Q,Ue),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(R,V,ne,K,w,Ue),Q.transparent===!0&&Q.side===Jt&&Q.forceSinglePass===!1?(Q.side=dn,Q.needsUpdate=!0,R.renderBufferDirect(ne,V,K,Q,w,Ue),Q.side=Ki,Q.needsUpdate=!0,R.renderBufferDirect(ne,V,K,Q,w,Ue),Q.side=Jt):R.renderBufferDirect(ne,V,K,Q,w,Ue),w.onAfterRender(R,V,ne,K,Q,Ue)}function xi(w,V,ne){V.isScene!==!0&&(V=Ye);let K=j.get(w),Q=T.state.lights,Ue=T.state.shadowsArray,ke=Q.state.version,Le=Ie.getParameters(w,Q.state,Ue,V,ne,T.state.lightProbeGridArray),ze=Ie.getProgramCacheKey(Le),Ze=K.programs;K.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;K.envMap=be.get(w.envMap||K.environment,ht),K.envMapRotation=K.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",pn),Ze=new Map,K.programs=Ze);let mt=Ze.get(ze);if(mt!==void 0){if(K.currentProgram===mt&&K.lightsStateVersion===ke)return Ns(w,Le),mt}else Le.uniforms=Ie.getUniforms(w),W!==null&&w.isNodeMaterial&&W.build(w,ne,Le),w.onBeforeCompile(Le,R),mt=Ie.acquireProgram(Le,ze),Ze.set(ze,mt),K.uniforms=Le.uniforms;let We=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=Ge.uniform),Ns(w,Le),K.needsLights=Fi(w),K.lightsStateVersion=ke,K.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.sunLights.value=Q.state.sun,We.sunLightShadows.value=Q.state.sunShadow,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.sunShadowMatrix.value=Q.state.sunShadowMatrix,We.sunShadowCascade.value=Q.state.sunShadowCascade,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=mt,K.uniformsList=null,mt}function cs(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Mr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ns(w,V){let ne=j.get(w);ne.outputColorSpace=V.outputColorSpace,ne.batching=V.batching,ne.batchingColor=V.batchingColor,ne.instancing=V.instancing,ne.instancingColor=V.instancingColor,ne.instancingMorph=V.instancingMorph,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function Dr(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;m.setFromMatrixPosition(V.matrixWorld);for(let ne=0,K=w.length;ne<K;ne++){let Q=w[ne];if(Q.texture!==null&&Q.boundingBox.containsPoint(m))return Q}return null}function Ut(w,V,ne,K,Q){V.isScene!==!0&&(V=Ye),oe.resetTextureUnits();let Ue=V.fog,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,Le=xe===null?R.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:vt.workingColorSpace,ze=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ze=be.get(K.envMap||ke,ze),ht=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,mt=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,Nt=!!ne.morphAttributes.color,Rt=Hn;K.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Rt=R.toneMapping);let Tt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,P=Tt!==void 0?Tt.length:0,U=j.get(K),D=T.state.lights;if(pe===!0&&(Me===!0||w!==le)){let lt=w===le&&K.id===se;Ge.setState(K,w,lt)}let F=!1;K.version===U.__version?(U.needsLights&&U.lightsStateVersion!==D.state.version||U.outputColorSpace!==Le||Q.isBatchedMesh&&U.batching===!1||!Q.isBatchedMesh&&U.batching===!0||Q.isBatchedMesh&&U.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&U.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&U.instancing===!1||!Q.isInstancedMesh&&U.instancing===!0||Q.isSkinnedMesh&&U.skinning===!1||!Q.isSkinnedMesh&&U.skinning===!0||Q.isInstancedMesh&&U.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&U.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&U.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&U.instancingMorph===!1&&Q.morphTexture!==null||U.envMap!==Ze||K.fog===!0&&U.fog!==Ue||U.numClippingPlanes!==void 0&&(U.numClippingPlanes!==Ge.numPlanes||U.numIntersection!==Ge.numIntersection)||U.vertexAlphas!==ht||U.vertexTangents!==mt||U.morphTargets!==We||U.morphNormals!==bt||U.morphColors!==Nt||U.toneMapping!==Rt||U.morphTargetsCount!==P||!!U.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(F=!0):(F=!0,U.__version=K.version);let re=U.currentProgram;F===!0&&(re=xi(K,V,Q),W&&K.isNodeMaterial&&W.onUpdateProgram(K,re,U));let ee=!1,ve=!1,Be=!1,Oe=re.getUniforms(),je=U.uniforms;if(y.useProgram(re.program)&&(ee=!0,ve=!0,Be=!0),K.id!==se&&(se=K.id,ve=!0),U.needsLights){let lt=Dr(T.state.lightProbeGridArray,Q);U.lightProbeGrid!==lt&&(U.lightProbeGrid=lt,ve=!0)}if(ee||le!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Oe.setValue(O,"projectionMatrix",w.projectionMatrix),Oe.setValue(O,"viewMatrix",w.matrixWorldInverse);let Bt=Oe.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,we.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Oe.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Oe.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),le!==w&&(le=w,ve=!0,Be=!0)}if(U.needsLights&&(D.state.sunShadowMap.length>0&&Oe.setValue(O,"sunShadowMap",D.state.sunShadowMap,oe),D.state.directionalShadowMap.length>0&&Oe.setValue(O,"directionalShadowMap",D.state.directionalShadowMap,oe),D.state.spotShadowMap.length>0&&Oe.setValue(O,"spotShadowMap",D.state.spotShadowMap,oe),D.state.pointShadowMap.length>0&&Oe.setValue(O,"pointShadowMap",D.state.pointShadowMap,oe)),Q.isSkinnedMesh){Oe.setOptional(O,Q,"bindMatrix"),Oe.setOptional(O,Q,"bindMatrixInverse");let lt=Q.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Oe.setValue(O,"boneTexture",lt.boneTexture,oe))}Q.isBatchedMesh&&(Oe.setOptional(O,Q,"batchingTexture"),Oe.setValue(O,"batchingTexture",Q._matricesTexture,oe),Oe.setOptional(O,Q,"batchingIdTexture"),Oe.setValue(O,"batchingIdTexture",Q._indirectTexture,oe),Oe.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Oe.setValue(O,"batchingColorTexture",Q._colorsTexture,oe));let at=ne.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&H.update(Q,ne,re),(ve||U.receiveShadow!==Q.receiveShadow)&&(U.receiveShadow=Q.receiveShadow,Oe.setValue(O,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(je.envMapIntensity.value=V.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=J_()),ve){if(Oe.setValue(O,"toneMappingExposure",R.toneMappingExposure),U.needsLights&&hs(je,Be),Ue&&K.fog===!0&&Ke.refreshFogUniforms(je,Ue),Ke.refreshMaterialUniforms(je,K,G,N,T.state.transmissionRenderTarget[w.id]),U.needsLights&&U.lightProbeGrid){let lt=U.lightProbeGrid;je.probesSH.value=lt.texture,je.probesMin.value.copy(lt.boundingBox.min),je.probesMax.value.copy(lt.boundingBox.max),je.probesResolution.value.copy(lt.resolution)}Mr.upload(O,cs(U),je,oe)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Mr.upload(O,cs(U),je,oe),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Oe.setValue(O,"center",Q.center),Oe.setValue(O,"modelViewMatrix",Q.modelViewMatrix),Oe.setValue(O,"normalMatrix",Q.normalMatrix),Oe.setValue(O,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let lt=K.uniformsGroups;for(let Bt=0,mn=lt.length;Bt<mn;Bt++){let Oi=lt[Bt];me.update(Oi,re),me.bind(Oi,re)}}return re}function hs(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Fi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(w,V,ne){let K=j.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),j.get(w.texture).__webglTexture=V,j.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let ne=j.get(w);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,ne=0){xe=w,te=V,ie=ne;let K=null,Q=!1,Ue=!1;if(w){let Le=j.get(w);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,Le.__webglFramebuffer),de.copy(w.viewport),qe.copy(w.scissor),I=w.scissorTest,y.viewport(de),y.scissor(qe),y.setScissorTest(I),se=-1;return}else if(Le.__webglFramebuffer===void 0)oe.setupRenderTarget(w);else if(Le.__hasExternalTextures)oe.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ht=w.depthTexture;if(Le.__boundDepthTexture!==ht){if(ht!==null&&j.has(ht)&&(w.width!==ht.image.width||w.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(w)}}let ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ue=!0);let Ze=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[V])?K=Ze[V][ne]:K=Ze[V],Q=!0):w.samples>0&&oe.useMultisampledRTT(w)===!1?K=j.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?K=Ze[ne]:K=Ze,de.copy(w.viewport),qe.copy(w.scissor),I=w.scissorTest}else de.copy(ye).multiplyScalar(G).floor(),qe.copy(De).multiplyScalar(G).floor(),I=nt;if(ne!==0&&(K=$),y.bindFramebuffer(O.FRAMEBUFFER,K)&&y.drawBuffers(w,K),y.viewport(de),y.scissor(qe),y.setScissorTest(I),Q){let Le=j.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,ne)}else if(Ue){let Le=V;for(let ze=0;ze<w.textures.length;ze++){let Ze=j.get(w.textures[ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ze,Ze.__webglTexture,ne,Le)}}else if(w!==null&&ne!==0){let Le=j.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Le.__webglTexture,ne)}se=-1};function Fs(w){let V=j.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=C.textureFormatReadable(w.format),V.__typeReadable=C.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,ne,K,Q,Ue,ke,Le=0){if(!(w&&w.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){y.bindFramebuffer(O.FRAMEBUFFER,ze);try{let Ze=w.textures[Le],ht=Ze.format,mt=Ze.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le);let We=Fs(Ze);if(We.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-K&&ne>=0&&ne<=w.height-Q&&O.readPixels(V,ne,K,Q,Te.convert(ht),Te.convert(mt),Ue)}finally{let Ze=xe!==null?j.get(xe).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,V,ne,K,Q,Ue,ke,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze)if(V>=0&&V<=w.width-K&&ne>=0&&ne<=w.height-Q){y.bindFramebuffer(O.FRAMEBUFFER,ze);let Ze=w.textures[Le],ht=Ze.format,mt=Ze.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le);let We=Fs(Ze);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.bufferData(O.PIXEL_PACK_BUFFER,Ue.byteLength,O.STREAM_READ),O.readPixels(V,ne,K,Q,Te.convert(ht),Te.convert(mt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Nt=xe!==null?j.get(xe).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Nt);let Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gd(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ue),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(bt),O.deleteSync(Rt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,ne=0){let K=Math.pow(2,-ne),Q=Math.floor(w.image.width*K),Ue=Math.floor(w.image.height*K),ke=V!==null?V.x:0,Le=V!==null?V.y:0;oe.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,ne,0,0,ke,Le,Q,Ue),y.unbindTexture()},this.copyTextureToTexture=function(w,V,ne=null,K=null,Q=0,Ue=0){let ke,Le,ze,Ze,ht,mt,We,bt,Nt,Rt=w.isCompressedTexture?w.mipmaps[Ue]:w.image;if(ne!==null)ke=ne.max.x-ne.min.x,Le=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,Ze=ne.min.x,ht=ne.min.y,mt=ne.isBox3?ne.min.z:0;else{let je=Math.pow(2,-Q);ke=Math.floor(Rt.width*je),Le=Math.floor(Rt.height*je),w.isDataArrayTexture?ze=Rt.depth:w.isData3DTexture?ze=Math.floor(Rt.depth*je):ze=1,Ze=0,ht=0,mt=0}K!==null?(We=K.x,bt=K.y,Nt=K.z):(We=0,bt=0,Nt=0);let Tt=Te.convert(V.format),P=Te.convert(V.type),U;V.isData3DTexture?(oe.setTexture3D(V,0),U=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(oe.setTexture2DArray(V,0),U=O.TEXTURE_2D_ARRAY):(oe.setTexture2D(V,0),U=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);let D=y.getParameter(O.UNPACK_ROW_LENGTH),F=y.getParameter(O.UNPACK_IMAGE_HEIGHT),re=y.getParameter(O.UNPACK_SKIP_PIXELS),ee=y.getParameter(O.UNPACK_SKIP_ROWS),ve=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),y.pixelStorei(O.UNPACK_SKIP_ROWS,ht),y.pixelStorei(O.UNPACK_SKIP_IMAGES,mt);let Be=w.isDataArrayTexture||w.isData3DTexture,Oe=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let je=j.get(w),at=j.get(V),lt=j.get(je.__renderTarget),Bt=j.get(at.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,lt.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let mn=0;mn<ze;mn++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(w).__webglTexture,Q,mt+mn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(V).__webglTexture,Ue,Nt+mn)),O.blitFramebuffer(Ze,ht,ke,Le,We,bt,ke,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||j.has(w)){let je=j.get(w),at=j.get(V);y.bindFramebuffer(O.READ_FRAMEBUFFER,k),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let lt=0;lt<ze;lt++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,je.__webglTexture,Q,mt+lt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,je.__webglTexture,Q),Oe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,at.__webglTexture,Ue,Nt+lt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,at.__webglTexture,Ue),Q!==0?O.blitFramebuffer(Ze,ht,ke,Le,We,bt,ke,Le,O.COLOR_BUFFER_BIT,O.NEAREST):Oe?O.copyTexSubImage3D(U,Ue,We,bt,Nt+lt,Ze,ht,ke,Le):O.copyTexSubImage2D(U,Ue,We,bt,Ze,ht,ke,Le);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Oe?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(U,Ue,We,bt,Nt,ke,Le,ze,Tt,P,Rt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(U,Ue,We,bt,Nt,ke,Le,ze,Tt,Rt.data):O.texSubImage3D(U,Ue,We,bt,Nt,ke,Le,ze,Tt,P,Rt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ue,We,bt,ke,Le,Tt,P,Rt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ue,We,bt,Rt.width,Rt.height,Tt,Rt.data):O.texSubImage2D(O.TEXTURE_2D,Ue,We,bt,ke,Le,Tt,P,Rt);y.pixelStorei(O.UNPACK_ROW_LENGTH,D),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,F),y.pixelStorei(O.UNPACK_SKIP_PIXELS,re),y.pixelStorei(O.UNPACK_SKIP_ROWS,ee),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ve),Ue===0&&V.generateMipmaps&&O.generateMipmap(U),y.unbindTexture()},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?oe.setTextureCube(w,0):w.isData3DTexture?oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?oe.setTexture2DArray(w,0):oe.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){te=0,ie=0,xe=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Fa=new L;function Pn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Fa.copy(e),Fa[n]=0,Fa.normalize();let c=.5*a/(a+o),h=1-Fa.angleTo(i)/l;return Math.sign(Fa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Oa=class i extends qi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=f.length/6,v=new L,g=.5/a;for(let p=0,b=0;p<f.length;p+=3,b+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:v.set(1,0,0),d[b+0]=Pn(v,c,"z","y",r,n),d[b+1]=1-Pn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[b+0]=1-Pn(v,c,"z","y",r,n),d[b+1]=1-Pn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[b+0]=1-Pn(v,c,"x","z",r,e),d[b+1]=Pn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[b+0]=1-Pn(v,c,"x","z",r,e),d[b+1]=1-Pn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[b+0]=1-Pn(v,c,"x","y",r,e),d[b+1]=1-Pn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[b+0]=Pn(v,c,"x","y",r,e),d[b+1]=1-Pn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ef({scene:i,camera:e,reduced:t,getRoom:n,diagnostics:s}){let a=new Ct,o=new Ot,l=e.position.clone(),c=new xn;for(let M=0;M<10;M++){let m=M*Math.PI/5,S=M%2?.045:.1;M?c.lineTo(Math.cos(m)*S,Math.sin(m)*S):c.moveTo(Math.cos(m)*S,Math.sin(m)*S)}c.closePath();let h=[new vs(c),new bn(1,6,4),new bn(1,6,4)],f=["#ffe67c","#80cf5a","#efdfb8"].map(M=>new un({color:M,transparent:!0,depthWrite:!1,side:Jt})),u=[6,6,4],d=u.map((M,m)=>{let S=new Gn(h[m],f[m],M);return S.instanceMatrix.setUsage(ns),S.frustumCulled=!1,a.add(S),S});a.visible=!1,i.add(a);let x=null;function v(){x=null,a.visible=!1,e.position.copy(l),s.capture=null}function g(M,m){v(),!(!M.captured.length||!n())&&(x={started:performance.now(),room:n().code,revision:n().game.revision,seat:M.seat,token:M.token,victims:new Set(M.captured.map(S=>S.seat+"-"+S.token)),point:m},a.position.set(m.x,.65,m.z))}function p(M){if(!x)return;let m=n(),S=(M-x.started)/1e3;if(m?.code!==x.room||!m.game||m.game.revision<x.revision||S>=1350/1e3){v();return}let T=!t.matches;a.visible=T&&S<.85,e.position.x=l.x+(T&&S<.16?Math.sin(S*90)*.035*(1-S/.16):0);let A=Math.max(0,1-S/.85);a.visible&&d.forEach((_,E)=>{_.material.opacity=A*(E===2?.45:1);for(let R=0;R<u[E];R++){let B=R*Math.PI*2/u[E]+E*.35,W=.14+S*(E===2?.7:1.45);o.position.set(Math.cos(B)*W,E===2?.02:Math.sin(Math.min(1,S/.85)*Math.PI)*.65+.13,Math.sin(B)*W),E===0?(o.quaternion.copy(e.quaternion),o.rotateZ(S*6+R),o.scale.setScalar(1.4)):(o.rotation.set(S*5+R,B,S*3),o.scale.set(E===1?.12:.16,E===1?.025:.14,E===1?.22:.16)),o.updateMatrix(),_.setMatrixAt(R,o.matrix)}_.instanceMatrix.needsUpdate=!0}),s.capture={seat:x.seat,token:x.token,victims:[...x.victims],age:S,routine:["belly-laugh","clap","head-wiggle","wink"][x.seat],particles:a.visible?16:0,reducedMotion:!T,poses:[]}}function b(M,m){if(!x||t.matches)return;let S=(m-x.started)/1e3,T=Math.min(1,S/.1,(1.35-S)/.2);if(M.seat===x.seat&&M.token===x.token){M.ring.visible=!0,M.halo.visible=!0;let A=Math.max(0,Math.sin(S*14))*.11*T;M.body.position.y+=A+(S<.3?Math.sin(S/.3*Math.PI)*.25:0),M.seat===0?(M.body.rotation.x=Math.sin(S*17)*.12*T,M.body.scale.y=1-Math.abs(Math.sin(S*17))*.06*T,M.head.rotation.x-=Math.abs(Math.sin(S*17))*.1*T,M.arms.forEach((_,E)=>_.rotation.z=(E?1:-1)*(.8+Math.sin(S*17)*.35)*T)):M.seat===1?(M.arms.forEach((_,E)=>_.rotation.z=(E?1:-1)*(1.15+Math.sin(S*20)*.55)*T),M.body.rotation.z=Math.sin(S*12)*.08*T):M.seat===2?(M.head.rotation.z=Math.sin(S*22)*.2*T,M.head.rotation.y=Math.sin(S*15)*.23*T,M.arms.forEach((_,E)=>_.rotation.z=(E?1:-1)*1.25*T)):(M.head.rotation.z=-.16*T,M.arms[1].rotation.z=(1.8+Math.sin(S*18)*.25)*T,S>.5&&S<1.05&&(M.eyeParts[1].pupil.scale.y=.008,M.eyeParts[1].glint.scale.y=.003))}else if(x.victims.has(M.seat+"-"+M.token))if(M.arms.forEach((A,_)=>A.rotation.z=(_?1:-1)*2.2*T),S<.22)M.eyes.scale.y=1.45,M.head.rotation.z=Math.sin(S*45)*.14,M.body.scale.set(1.1,.88,1.05);else if(S<.92){let A=(S-.22)/.7;M.body.position.y+=Math.sin(A*Math.PI)*1.35,M.body.rotation.y=A*Math.PI*4,M.body.rotation.z=Math.sin(A*Math.PI)*.35,M.feet.forEach(_=>_.rotation.x=-.5)}else{let A=Math.max(0,Math.sin((S-.92)/.25*Math.PI))*.16*T;M.body.scale.set(1+A,1-A,1+A*.5),M.head.rotation.z=-.18*T}(M.seat===x.seat&&M.token===x.token||x.victims.has(M.seat+"-"+M.token))&&s.capture?.poses.push({seat:M.seat,token:M.token,height:M.body.position.y,spin:M.body.rotation.y,headTilt:M.head.rotation.z,rightEye:M.eyeParts[1].pupil.scale.y})}return{start:g,update:p,pose:b,reset:v,duration:1350,dispose(){v(),i.remove(a),d.forEach(M=>M.dispose()),h.forEach(M=>M.dispose()),f.forEach(M=>M.dispose())}}}function nf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Dt,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=tf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);let x=tf(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function tf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new $t(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let x=0;x<t;x++){let v=h.getComponent(u,x);o.setComponent(u+f,x,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var is=["Explorer","Forest pirate","Leaf royalty","Flower friend","Party pal","Sky explorer"];function sf({scene:i,camera:e,board:t,animals:n,track:s,reduced:r,getRoom:a,diagnostics:o}){let l=new Ms({vertexColors:!0,roughness:.75}),c=new un({vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1}),h=new bn(1,16,10),f=[],u=new Map,d=new Ot,x=new L,v=new L,g=new L,p=new wt().makeScale(0,0,0),b=new Map,M=null,m=null,S=null;function T(I,z,J,_e=[0,0,0],N=[1,1,1],G=[0,0,0]){let ge=z.clone(),q=ge.index?ge.toNonIndexed():ge;q!==ge&&ge.dispose(),d.position.fromArray(_e),d.scale.fromArray(N),d.rotation.fromArray(G),d.updateMatrix(),q.applyMatrix4(d.matrix);let ye=new dt(J),De=new Float32Array(q.attributes.position.count*3);for(let nt=0;nt<De.length;nt+=3)De[nt]=ye.r,De[nt+1]=ye.g,De[nt+2]=ye.b;q.setAttribute("color",new $t(De,3)),I.push(q)}let A=(I,z,J,_e,N,G,ge=G,q=G,ye=[0,0,0])=>T(I,h,z,[J,_e,N],[G,ge,q],ye);function _(I,z,J,_e,N,G,ge){let q=new An(G,G,ge,24);T(I,q,z,[J,_e,N]),q.dispose()}function E(I){let z=nf(I);return I.forEach(J=>J.dispose()),f.push(z),z}function R(I,z){let J=new Zt(E(I),l);return J.castShadow=!1,z.add(J),J}function B(I,z,J,_e=.3){for(let N=0;N<5;N++){let G=N*Math.PI*2/5,ge=Math.cos(G)*_e,q=J+Math.sin(G)*_e;for(let ye=0;ye<5;ye++){let De=ye*Math.PI*2/5;A(I,N%2?"#ffc56a":"#ff88ae",ge+Math.cos(De)*.045,z,q+Math.sin(De)*.045,.045,.022,.045)}A(I,"#ffe990",ge,z+.025,q,.027)}}function W(I,z=!1){for(let J of[-.14,.14])A(I,z?"#a96b30":"#3e4030",J,-.32,.29,.128,.1,.04),A(I,z?"#79cdd0":"#253a35",J,-.32,.327,.097,.072,.014),A(I,"#e0f6e8",J-.03,-.292,.342,.018,.023,.006);A(I,"#d0a560",0,-.315,.323,.035,.015,.014)}function $(I){let z=[],J=[];if(I===0)_(z,"#e8bf70",0,0,0,.44,.035),A(z,"#e8c886",0,.105,0,.3,.19,.29),_(z,"#4d7340",0,.055,0,.307,.075),A(z,"#8bc65b",.24,.23,-.07,.04,.2,.025,[0,0,-.45]),W(z),A(J,"#d7c277",0,.85,.22,.2,.045,.04);else if(I===1){let N=new xn;N.moveTo(-.46,-.02),N.quadraticCurveTo(-.4,.43,0,.15),N.quadraticCurveTo(.4,.43,.46,-.02),N.closePath();let G=new Ci(N,{depth:.08,bevelEnabled:!1});T(z,G,"#354039",[0,0,.015]),G.dispose(),A(z,"#ffdc81",0,.125,.11,.074,.052,.025);for(let ge of[-.09,.09])A(z,"#45302a",ge,-.5,.39,.11,.038,.025,[0,0,ge>0?.3:-.3]);A(J,"#ce6350",0,.84,.19,.2,.07,.06)}else if(I===2){_(z,"#c8a559",0,.015,0,.29,.04);for(let N=0;N<7;N++){let G=N*Math.PI*2/7;A(z,N%2?"#9bd75c":"#429c46",Math.cos(G)*.28,.1,Math.sin(G)*.28,.06,.17,.025,[0,-G,Math.cos(G)*.28])}A(z,"#ffe78f",0,.075,.3,.065,.065,.026),A(J,"#53916a",0,.49,-.3,.32,.4,.055),A(J,"#e4cb6d",0,.83,.22,.055)}else if(I===3){_(z,"#e4c285",0,0,0,.42,.035),A(z,"#e8ce9b",0,.07,0,.29,.13,.28),B(z,.07,0);for(let N of[-.17,0,.17]){A(J,"#72b65a",N,.82-Math.abs(N)*.25,.24,.08,.065,.025);for(let G=0;G<5;G++){let ge=G*Math.PI*2/5;A(J,"#ff9fb8",N+Math.cos(ge)*.035,.81-Math.abs(N)*.25+Math.sin(ge)*.035,.275,.035,.035,.012)}A(J,"#ffe68b",N,.81-Math.abs(N)*.25,.292,.023,.023,.009)}}else if(I===4){let N=new si(.25,.48,16);T(z,N,"#a47ad6",[0,.22,0],[1,1,1],[0,0,-.18]),N.dispose(),A(z,"#ffe294",.045,.45,0,.068);for(let G of[-.12,.12])A(J,G<0?"#e67a89":"#ffbc63",G,.81,.245,.13,.07,.035,[0,0,G<0?-.25:.25]);A(J,"#fff0a4",0,.81,.285,.04)}else A(z,"#a87642",0,.04,-.02,.3,.16,.29),W(z,!0),A(J,"#fa9d50",0,.82,.2,.21,.065,.07),A(J,"#ef7144",.19,.66,.245,.065,.18,.035,[0,0,-.3]);let _e={head:new Gn(E(z),l,17),body:new Gn(E(J),l,16)};for(let N of Object.values(_e)){N.frustumCulled=!1,N.instanceMatrix.setUsage(ns),N.visible=!1;for(let G=0;G<N.count;G++)N.setMatrixAt(G,p);i.add(N)}return u.set(I,_e),_e}function k(){let I=new Ct,z=new Ct,J=new Ct,_e=[];I.add(z),J.position.set(0,1.03,0),J.rotation.x=-.35,z.add(J);let N=[],G=[];A(N,"#985831",0,.56,0,.25,.34,.2),A(N,"#ead3a0",0,.55,.18,.17,.24,.035),A(N,"#426f35",.25,.46,-.19,.15,.22,.14);let ge=new ur([new L(.17,.4,-.13),new L(.52,.33,-.2),new L(.75,.58,-.17),new L(.7,.86,-.12),new L(.49,.82,-.1)]),q=new Ii(ge,16,.043,6,!1);T(N,q,"#985831"),q.dispose(),A(G,"#96512c",0,0,0,.34,.32,.29),A(G,"#ead3a0",0,-.04,.245,.26,.235,.05);for(let nt of[-1,1]){A(G,"#985831",nt*.34,.05,0,.15,.16,.09),A(G,"#e9bc89",nt*.35,.05,.07,.085,.1,.018),A(G,"#30271d",nt*.1,.005,.3,.045,.065,.025),A(G,"#fff6dc",nt*.1-.012,.03,.32,.012,.018,.008),A(N,"#754326",nt*.13,.16,.05,.115,.12,.17);let he=new Ct,pe=[];he.position.set(nt*.26,.72,.045),z.add(he),A(pe,"#985831",0,-.15,0,.085,.22,.09),A(pe,"#eacb93",0,-.32,.02,.09,.085,.09),R(pe,he),_e.push(he)}A(G,"#66412c",0,-.095,.31,.049,.035,.028);let ye=new ri(new L(-.09,-.13,.31),new L(0,-.23,.345),new L(.09,-.13,.31)),De=new Ii(ye,10,.012,5,!1);return T(G,De,"#764c34"),De.dispose(),R(N,z),R(G,J),I.visible=!1,i.add(I),{root:I,body:z,head:J,arms:_e}}function Z(){let I=[],z=new Ri(.36,.026,5,24);T(I,z,"#ffe08b",[0,0,0],[1,1,1],[Math.PI/2,0,0]),z.dispose();let J=new bn(1,8,5);T(I,J,"#a4e271",[0,0,0],[.12,.025,.22],[0,.7,0]),J.dispose();let _e=new Gn(E(I),c,2);return _e.frustumCulled=!1,_e.instanceMatrix.setUsage(ns),i.add(_e),_e}let te=document.createElement("div");te.className="forest-gift-callout",te.hidden=!0,te.setAttribute("aria-hidden","true"),t.append(te);function ie(){m=null,b.clear(),M&&(M.root.visible=!1),te.hidden=!0,o.forestGift=null}function xe(I){I&&b.set(I.seat+"-"+I.token,I.outfit)}function se(I){!I||!a()?.game||(M??=k(),m={...I,started:performance.now(),room:a().code,revision:a().game.revision,point:null},te.textContent="\u0D15\u0D41\u0D30\u0D19\u0D4D\u0D19\u0D28\u0D4D\u0D31\u0D46 \u0D38\u0D2E\u0D4D\u0D2E\u0D3E\u0D28\u0D02! \u{1F412} "+is[I.outfit],te.hidden=!1)}let le=I=>(I=Li.clamp(I,0,1),I*I*(3-2*I));function de(I,z){if(!m||I.seat!==m.seat||I.token!==m.token)return;m.point=I.g.position.clone();let J=(z-m.started)/1e3;r.matches||(J>1.15&&J<1.9&&(I.arms[1].rotation.z=2.25,I.head.rotation.z=-.15),J>1.9&&J<2.5&&(I.body.position.y+=Math.max(0,Math.sin(J*17))*.12,I.arms.forEach((_e,N)=>_e.rotation.z=(N?1:-1)*1.6),I.head.rotation.z=Math.sin(J*14)*.08))}function qe(I){let z=a(),J=z?.game,_e=J?.forestGifts;m&&(z?.code!==m.room||!J||J.revision<m.revision)&&ie(),m&&I-m.started>=3e3&&(b.delete(m.seat+"-"+m.token),m=null,M.root.visible=!1,te.hidden=!0);let N=m?(I-m.started)/1e3:0;m&&N>=1.15&&b.delete(m.seat+"-"+m.token);let G=[];if(_e)for(let q of n){let ye=_e.outfits[q.seat]?.[q.token],De=q.seat+"-"+q.token;Number.isInteger(ye)&&is[ye]&&q.g.visible&&!b.has(De)&&G.push({a:q,kind:ye})}let ge=new Set(G.map(q=>q.kind));m&&ge.add(m.outfit);for(let q of ge)u.has(q)||$(q);for(let q of u.values())q.head.count=0,q.body.count=0,q.head.visible=!1,q.body.visible=!1;for(let{a:q,kind:ye}of G){let De=u.get(ye);if(d.position.set(0,q.seat===2?.4:.34,0),d.rotation.set(0,0,0),d.scale.setScalar(1),m?.seat===q.seat&&m.token===q.token&&!r.matches){let nt=le((N-1.4)/.45);d.rotation.y=Math.PI*(1-nt),d.rotation.z=.18*(1-nt)}d.updateMatrix(),De.head.setMatrixAt(De.head.count++,d.matrix.premultiply(q.head.matrixWorld)),De.body.setMatrixAt(De.body.count++,q.body.matrixWorld),De.head.visible=!0,De.body.visible=!0}if(M&&(M.root.visible=!!m&&!r.matches&&N<2.9),m?.point){let q=m.point,ye=le(N/.6),De=le((N-2.4)/.5),nt=q.x<0?-1:1,he=q.x+nt*1.05,pe=q.z+.4,Me=nt*8.8,Se=q.z-1.1;if(M.root.position.set(Li.lerp(Me,he,ye)+De*(Me-he),.5+Math.sin(ye*Math.PI)*1.3+Math.sin(De*Math.PI)*1.15,Li.lerp(Se,pe,ye)+De*(Se-pe)),M.root.rotation.y=nt>0?-.45:.45,M.root.scale.setScalar(.94),M.body.position.y=Math.abs(Math.sin(N*12))*.06,M.body.rotation.z=Math.sin(N*11)*.06,M.head.rotation.z=Math.sin(N*8)*.1,M.arms[0].rotation.z=-1.55,M.arms[1].rotation.z=N<.8?2.3:.8,N>1.9&&N<2.4&&M.arms.forEach((we,Je)=>we.rotation.z=(Je?1:-1)*(1.2+Math.sin(N*24)*.5)),M.root.updateMatrixWorld(!0),N<1.15&&!r.matches){let we=n[m.seat*4+m.token],Je=u.get(m.outfit);v.set(0,-.35,.12).applyMatrix4(M.arms[0].matrixWorld),g.set(0,we.seat===2?.4:.34,0).applyMatrix4(we.head.matrixWorld);let Ye=le((N-.8)/.35);d.position.copy(v).lerp(g,Ye),d.position.y+=Math.sin(Ye*Math.PI)*.3,d.rotation.set(.25*(1-Ye),Ye*Math.PI,.18),d.scale.setScalar(we.g.scale.x),d.updateMatrix(),Je.head.setMatrixAt(Je.head.count++,d.matrix),Je.head.visible=!0}x.set(q.x,2.3,q.z).project(e),te.style.left=Li.clamp((x.x*.5+.5)*100,25,75)+"%",te.style.top=Li.clamp((-x.y*.5+.5)*100,28,65)+"%"}m&&r.matches&&b.delete(m.seat+"-"+m.token);for(let q of u.values())q.head.instanceMatrix.needsUpdate=!0,q.body.instanceMatrix.needsUpdate=!0;_e?(S??=Z(),S.visible=J.phase!=="done"&&J.phase!=="celebration"&&J.active.some(q=>_e.counts[q]<2),_e.tiles.forEach((q,ye)=>{let[De,nt]=s[q];d.position.set(nt-7,.515,De-7),d.rotation.set(0,r.matches?0:I/1700,0),d.scale.setScalar(r.matches?1:1+Math.sin(I/300+ye)*.06),d.updateMatrix(),S.setMatrixAt(ye,d.matrix)}),S.instanceMatrix.needsUpdate=!0):S&&(S.visible=!1),o.forestGift=m?{seat:m.seat,token:m.token,outfit:m.outfit,age:N,monkeyVisible:M.root.visible,reducedMotion:r.matches}:null,o.outfits=G.map(({a:q,kind:ye})=>({seat:q.seat,token:q.token,kind:ye,name:is[ye]})),o.giftTiles=_e?.tiles||[]}return{start:se,defer:xe,pose:de,frame:qe,reset:ie,duration:3e3,dispose(){ie(),te.remove(),M&&i.remove(M.root),S&&(i.remove(S),S.dispose());for(let I of u.values())for(let z of Object.values(I))i.remove(z),z.dispose();f.forEach(I=>I.dispose()),h.dispose(),l.dispose(),c.dispose()}}}var tc=[{id:"bear",name:"Bear",icon:"\u{1F43B}",fur:"#a76535",cream:"#efd8a7",dark:"#694326",dance:0},{id:"panda",name:"Panda",icon:"\u{1F43C}",fur:"#fff6df",cream:"#fff7e6",dark:"#18251f",dance:1},{id:"deer",name:"Deer",icon:"\u{1F98C}",fur:"#d3a252",cream:"#efd8a7",dark:"#694326",dance:2},{id:"fox",name:"Fox",icon:"\u{1F98A}",fur:"#e77d25",cream:"#fff3d9",dark:"#694326",dance:3},{id:"rabbit",name:"Rabbit",icon:"\u{1F430}",fur:"#e9ddd1",cream:"#fff8ed",dark:"#b78f85",dance:2},{id:"tiger",name:"Tiger",icon:"\u{1F42F}",fur:"#f4a32c",cream:"#fff1cc",dark:"#493021",dance:3},{id:"monkey",name:"Monkey",icon:"\u{1F435}",fur:"#98613c",cream:"#f5d6a0",dark:"#61412d",dance:0},{id:"raccoon",name:"Raccoon",icon:"\u{1F99D}",fur:"#939895",cream:"#e9e9d8",dark:"#323d3c",dance:1}],nc=["bear","panda","deer","fox"];function ka(i){return tc.find(e=>e.id===i)}function br(i,e){return ka(i?.character)||ka(nc[e]||"bear")}function rf({board:i,tokenNodes:e,comedy:t,getRoom:n,getSeat:s,getServerTime:r=()=>Date.now(),colors:a,track:o,lanes:l,yards:c,safe:h}){let f=()=>innerWidth<650||matchMedia("(pointer: coarse)").matches,u=f(),d=matchMedia("(prefers-reduced-motion: reduce)"),x;try{x=new Ql({antialias:!u,alpha:!1,powerPreference:"high-performance"})}catch{return document.body.classList.remove("scene-3d"),document.body.classList.add("webgl-fallback"),i.dataset.renderer="fallback",null}x.setPixelRatio(Math.min(devicePixelRatio,u?1.5:1.65)),x.outputColorSpace=qt,x.toneMapping=wa,x.toneMappingExposure=1.02,x.shadowMap.enabled=!u,x.shadowMap.type=Ss,x.domElement.className="jungle-canvas",x.domElement.setAttribute("aria-hidden","true"),i.prepend(x.domElement),document.body.classList.add("scene-3d");let v=new jr;v.background=new dt("#0f4539"),v.fog=new Qr("#0c4835",36,70);let g=new $i(-12,12,8.5,-8.5,.1,100);g.position.set(0,24,15),g.lookAt(0,.3,0),v.add(new va("#eaffd7","#143e34",1.05));let p=new pr("#fff0be",2.9);p.position.set(-9,20,10),p.castShadow=!0,p.shadow.mapSize.set(u?1024:2048,u?1024:2048),Object.assign(p.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:50}),p.shadow.bias=-8e-4,p.shadow.normalBias=.025,p.shadow.radius=3,v.add(p);let b=new pr("#8bf2f5",.8);b.position.set(12,10,-10),v.add(b);let M=new Map;function m(P,U={}){let D=P+JSON.stringify(Object.fromEntries(Object.entries(U).map(([F,re])=>[F,re?.isTexture?re.uuid:re])));return M.has(D)||M.set(D,new Ms({color:P,roughness:.72,...U})),M.get(D)}let S=new bn(1,u?12:20,u?8:14),T=new xa(1,1),A=new bn(1,20,14),_=new An(1,1,1,8),E=new bn(1,u?8:12,u?5:8),R=new Ri(.43,.045,8,32),B=new oa(.51,24),W=new si(.11,.2,3),$=Array.from({length:4},()=>new Map),k=a.map(P=>new un({color:P})),Z=a.map(P=>new un({color:P,transparent:!0,opacity:.3,depthWrite:!1})),te=new un({color:"#fff4a3"}),ie=new si(.14,.18,3),xe=new ri(new L(-.08,-.185,.351),new L(0,-.24,.38),new L(.08,-.185,.351)),se=new Ii(xe,10,.008,5,!1),le=new An(.56,.6,.08,28),de=new An(.51,.51,.085,28),qe=new An(.015,.018,1,5),I=new _a(.035);function z(P,U,D,F=0,re=0,ee=0,ve=1,Be=ve,Oe=ve,je=!0){let at=new Zt(U,D);return at.position.set(F,re,ee),at.scale.set(ve,Be,Oe),at.castShadow=je,at.receiveShadow=!0,P.add(at),at}let J=(P,U,D,F,re,ee,ve=ee,Be=ee,Oe={})=>z(P,S,m(U,Oe),D,F,re,ee,ve,Be),_e=new Map;function N(P,U,D,F,re,ee,ve,Be,Oe=.08){let je=[ee,ve,Be,Oe].join(",");return _e.has(je)||_e.set(je,new Oa(ee,ve,Be,2,Oe)),z(P,_e.get(je),m(U),D,F,re)}function G(P,U,D,F,re=.04){let ee=new L(...D),ve=new L(...F),Be=z(P,_,m(U),0,0,0,re,ee.distanceTo(ve),re);return Be.position.copy(ee).add(ve).multiplyScalar(.5),Be.quaternion.setFromUnitVectors(new L(0,1,0),ve.sub(ee).normalize()),Be}let ge=721,q=()=>(ge=Math.imul(ge,1664525)+1013904223>>>0,ge/4294967296);function ye(P){let U=document.createElement("canvas");U.width=256,U.height=256;let D=U.getContext("2d");D.fillStyle=P==="grass"?"#b3c884":P==="wood"?"#d5bd8b":"#c3c8b8",D.fillRect(0,0,256,256);for(let re=0;re<(P==="grass"?2400:700);re++){let ee=q()*256,ve=q()*256;D.strokeStyle=P==="grass"?q()>.5?"#39652b55":"#eef7a04d":P==="wood"?"#7155363b":"#495e5128",D.lineWidth=P==="grass"?.6:1,D.beginPath(),D.moveTo(ee,ve),D.lineTo(ee+(P==="wood"?q()*50:q()*5-2),ve+(P==="wood"?q()*3:q()*8-4)),D.stroke()}let F=new _s(U);return F.colorSpace=qt,F.wrapS=F.wrapT=tr,F.anisotropy=Math.min(4,x.capabilities.getMaxAnisotropy()),F}let De=ye("grass"),nt=ye("rock"),he=ye("wood"),pe=[],Me=[],Se=[],we=[],Je=[],Ye=[],et=[],it=[],O=new nn({uniforms:{time:{value:0}},transparent:!0,side:Jt,depthWrite:!1,vertexShader:"varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;p.x+=sin(time*8.+uv.y*12.)*uv.y*.055;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"varying vec2 vUv;uniform float time;void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float n=sin(p.y*17.-time*9.+sin(p.x*8.+time*3.))*.06;float w=(1.-p.y)*.75+sin(p.y*7.-time*4.)*.07;float a=(1.-smoothstep(w+n-.18,w+n,abs(p.x)))*(1.-smoothstep(.82,1.,p.y));vec3 c=mix(vec3(1.,.24,.01),vec3(1.,.92,.3),(1.-smoothstep(0.,.8,p.y))*(1.-smoothstep(0.,.6,abs(p.x))));gl_FragColor=vec4(c,a*.9);}"}),Mt=z(v,new Cn(80,80),m("#237144"),0,-1.4,0,1,1,1,!1);Mt.rotation.x=-Math.PI/2;let pt=new nn({uniforms:{time:{value:0}},vertexShader:"varying vec2 vWater; void main(){vec4 world=modelMatrix*vec4(position,1.);vWater=world.xz;gl_Position=projectionMatrix*viewMatrix*world;}",fragmentShader:"varying vec2 vWater;uniform float time;void main(){vec2 p=vWater*2.5;float w=(sin(p.x*1.7+p.y*.6-time)*sin(p.y*2.1-time*.7)+1.)*.5;float n=sin(p.x*3.1+sin(p.y*2.7-time*1.5))*sin(p.y*3.7+sin(p.x*2.5+time*.7));float f=smoothstep(.61,.86,n);float fine=sin(p.x*11.+sin(p.y*6.-time*2.))*sin(p.y*9.-time*2.);vec3 c=mix(vec3(.012,.25,.32),vec3(.025,.54,.61),w);c+=vec3(.45,.8,.84)*(f*.48+smoothstep(.83,.98,fine)*.14);gl_FragColor=vec4(c,1.);}"}),C=z(v,new Cn(80,80,1,1),pt,0,-.55,0,1,1,1,!1);C.rotation.x=-Math.PI/2;for(let P of[-11.2,11.2]){N(v,"#34572d",P,-.14,0,5.7,.74,80,1);let U=N(v,"#529035",P,.25,0,5.65,.14,79.8,.8),D=De.clone();D.repeat.set(2,25),U.material=m("#529035",{map:D})}function y(P,U,D,F=.4){let re=["#687b6c","#7c8a71","#586963","#8f977b"][Math.floor(q()*4)],ee=z(v,T,m(re,{map:nt}),P,U,D,F,F*(.65+q()*.6),F*(.7+q()*.5));return ee.rotation.set(q(),q()*6,q()*.3),q()>.4&&J(v,"#599437",P-.05,U+F*.43,D,F*.65,.07,F*.6),ee}function Y(P,U,D=.4,F=0){let re=new Ct;re.position.set(P,.35,U),v.add(re);for(let ee=0;ee<(F?9:6);ee++){let ve=ee*6.283/(F?9:6);z(re,E,m(["#65b92a","#279440","#8ac735","#197346"][ee%4]),Math.sin(ve)*D*.32,D*.4,Math.cos(ve)*D*.32,D*.15,D*.7,D*.26).rotation.set(Math.cos(ve)*.6,ve,Math.sin(ve)*.6),ee<3&&G(re,"#a6d34b",[0,0,0],[Math.sin(ve)*D*.55,D*.7,Math.cos(ve)*D*.55],.012)}return pe.push({g:re,phase:q()*6,size:D}),re}function j(P,U,D=1){let F=new Ct;F.position.set(P,.1,U),v.add(F),G(F,"#80532d",[0,0,0],[.1,1.6*D,0],.11*D);for(let re=0;re<6;re++){let ee=re*6.283/6,ve=z(F,E,m(re%2?"#419c30":"#7fc339"),Math.sin(ee)*D*.48,1.65*D,Math.cos(ee)*D*.48,.16*D,.12*D,.73*D);ve.rotation.y=ee,ve.rotation.x=.16,G(F,"#a7bd38",[.1,1.72*D,0],[Math.sin(ee)*D*.9,1.57*D,Math.cos(ee)*D*.9],.016*D)}return J(F,"#806932",0,1.6*D,.1,.14*D),pe.push({g:F,phase:q()*6,size:D}),F}function oe(P,U,D=1){let F=new Ct;F.position.set(P,.05,U),v.add(F),G(F,"#78512d",[0,0,0],[0,1.4*D,0],.14*D);for(let re=0;re<7;re++){let ee=re*2.4,ve=z(F,E,m(["#1c7139","#3b9434","#60a82d","#266c32"][re%4]),Math.sin(ee)*D*.42,1.15*D+re%3*D*.22,Math.cos(ee)*D*.37,D*.55,D*.4,D*.5);ve.rotation.y=ee}for(let re=0;re<14;re++){let ee=re*2.4,ve=D*(.38+q()*.25);z(F,E,m(re%2?"#79b43b":"#2e8738"),Math.sin(ee)*ve,1.37*D+re%3*D*.22,Math.cos(ee)*ve,D*.18,D*.09,D*.32).rotation.set(.2,ee,.15)}return pe.push({g:F,phase:q()*6,size:D}),F}function be(P,U,D=.16){let F=new Ct;F.position.set(P,.42,U),v.add(F);let re=["#ff6d95","#ffa467","#b26aff","#fff165"][Math.floor(q()*4)];for(let ee=0;ee<5;ee++){let ve=ee*6.283/5;J(F,re,Math.sin(ve)*D,.035,Math.cos(ve)*D,D*.75,.07,D*.75)}J(F,"#ffd93d",0,.09,0,D*.5,.075,D*.5),Me.push({g:F,phase:q()*6})}function Ae(P,U,D=.23){G(v,"#efe0af",[P,.3,U],[P,.3+D*1.1,U],D*.18);let F=new Ct;F.position.set(P,.3+D,U),v.add(F),J(F,"#f65b38",0,.04,0,D,.12,D);for(let re=0;re<5;re++){let ee=re*2.4;J(F,"#ffeed6",Math.sin(ee)*D*.63,.15,Math.cos(ee)*D*.63,.045,.017,.045)}Me.push({g:F,phase:q()*6})}function ce(P,U){let D=new Ct;D.position.set(P,.2,U),v.add(D),G(D,"#845331",[0,0,0],[0,1.05,0],.085),G(D,"#d2a340",[0,.72,0],[0,.91,0],.15);let F=J(D,"#ff8d0a",0,1.15,0,.17,.35,.17,{emissive:"#ff5000",emissiveIntensity:2}),re=J(D,"#fff38b",0,1.14,.02,.08,.23,.08,{emissive:"#ffce32",emissiveIntensity:3}),ee=z(D,new Cn(.52,.78,5,12),O,0,1.28,.08,1,1,1,!1);ee.rotation.x=-.16;let ve=new ba("#ffb531",2,3,2);ve.position.set(0,1.3,0),ve.visible=!u,D.add(ve),Se.push({flame:F,core:re,light:ve,phase:q()*6});for(let Be=0;Be<3;Be++)et.push({m:J(D,"#ffe999",0,1.6+Be*.2,0,.02,.02,.02,{emissive:"#ffb800",emissiveIntensity:2}),base:1.3,phase:q()*6,fire:!0})}function fe(P,U,D=0){let F=new Ct;F.position.set(P,.36,U),F.rotation.y=D,v.add(F),N(F,"#99602c",0,.18,0,.53,.35,.37,.05),N(F,"#c28a40",0,.37,0,.55,.17,.4,.08);for(let re of[-.17,.17])N(F,"#f1c454",re,.28,.21,.045,.39,.025,.01);N(F,"#f3d271",0,.24,.218,.1,.13,.03,.01)}function Ie(P,U,D){let F=[[-2.7,-2.5],[2.7,-2.5],[2.7,2.5],[-2.7,2.5]];for(let ve=0;ve<4;ve++){let Be=F[ve],Oe=F[(ve+1)%4];for(let je=0;je<5;je++){let at=je/4,lt=P+Be[0]+(Oe[0]-Be[0])*at,Bt=U+Be[1]+(Oe[1]-Be[1])*at;ve===1&&je===2||(G(v,"#b6813e",[lt,.25,Bt],[lt,.8,Bt],.06),J(v,"#e0ba70",lt,.8,Bt,.075))}G(v,"#9b733e",[P+Be[0],.61,U+Be[1]],[P+Oe[0],.61,U+Oe[1]],.038)}G(v,"#997044",[P-2.2,.3,U-1.6],[P-2.2,1.75,U-1.6],.055);let re=z(v,new Cn(.7,.78),m(D,{side:Jt}),P-1.83,1.3,U-1.6);re.rotation.y=-.16;let ee=J(v,"#ffdf82",P-1.84,1.26,U-1.56,.13,.14,.015);for(let[ve,Be]of[[-.17,.15],[0,.23],[.17,.15]])J(v,"#ffdf82",P-1.84+ve,1.26+Be,U-1.55,.055,.065,.016);fe(P+2.05,U-1.65,.3),ce(P-2.55,U-.9)}let Ke=[[-4.5,-4.5],[4.5,-4.5],[4.5,4.5],[-4.5,4.5]],Pe=["#bc593c","#80ac3c","#d7ad38","#479bba"];Ke.forEach(([P,U],D)=>{N(v,"#536a44",P,-.26,U,5.98,.95,5.88,.5);let F=N(v,Pe[D],P,.25,U,5.65,.23,5.6,.4);F.material=m(Pe[D],{map:De});for(let re=0;re<38;re++){let ee=re*6.283/38,ve=P+Math.cos(ee)*2.83,Be=U+Math.sin(ee)*2.8;y(ve,-.05,Be,.19+q()*.15),re%2===0&&Y(ve,Be,.25+q()*.22),re%4===0&&be(ve,Be,.12)}for(let re=0;re<22;re++){let ee=P+(q()-.5)*5.1,ve=U+(q()-.5)*5.1;J(v,["#d49452","#a9bb51","#f7d46a","#76b7be"][D],ee,.375,ve,.02+q()*.025,.008,.026,{}).castShadow=!1}Ie(P,U,a[D]),Ae(P+2.1,U+2.23),Y(P-2.05,U+2.15,.42);for(let re=0;re<4;re++){let[ee,ve]=c[D][re],Be=z(v,le,m("#e4bf77"),ve-7.5,.39,ee-7.5);z(v,de,m(Pe[D]),ve-7.5,.41,ee-7.5)}});let Ce=document.createElement("canvas");Ce.width=128,Ce.height=128;let Ge=Ce.getContext("2d");Ge.fillStyle="#f7f0df",Ge.fillRect(0,0,128,128);for(let P=0;P<500;P++)Ge.fillStyle=q()>.5?"#cdc1a922":"#ffffff35",Ge.fillRect(q()*128,q()*128,1+q()*3,1+q()*2);let tt=Ge.createRadialGradient(64,54,20,64,64,91);tt.addColorStop(0,"#ffffff00"),tt.addColorStop(1,"#8b795533"),Ge.fillStyle=tt,Ge.fillRect(0,0,128,128);let ot=new _s(Ce);ot.colorSpace=qt;let H=new Oa(.92,.31,.92,3,.105),Re=[];for(let P=0;P<15;P++)for(let U=0;U<15;U++){if(!(P>=6&&P<=8||U>=6&&U<=8)||P>=6&&P<=8&&U>=6&&U<=8)continue;let D=o.findIndex(ee=>ee[0]===P&&ee[1]===U),F="#ead7a0";for(let ee=0;ee<4;ee++)(l[ee].some(ve=>ve[0]===P&&ve[1]===U)||D===ee*13)&&(F=a[ee]);let re=z(v,H,m(F,{map:ot,roughness:.65}),U-7+.002,.34,P-7+.002);if(Re.push(re),h.has(D)){let ee=new xn;for(let Be=0;Be<10;Be++){let Oe=Be*Math.PI/5+Math.PI/2,je=Be%2?.125:.26;Be?ee.lineTo(Math.cos(Oe)*je,Math.sin(Oe)*je):ee.moveTo(Math.cos(Oe)*je,Math.sin(Oe)*je)}ee.closePath();let ve=z(v,new Ci(ee,{depth:.04,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:2,steps:1}),m("#ffce31",{metalness:.2,roughness:.4,emissive:"#c28800",emissiveIntensity:.15}),U-7,.525,P-7);ve.rotation.x=-Math.PI/2,Ye.push(ve)}else if((P+U)%5===0){let ee=[new L(U-7-.28,.504,P-7+.4),new L(U-7-.16,.504,P-7+.26),new L(U-7-.2,.504,P-7+.09)];v.add(new sa(new Dt().setFromPoints(ee),new cr({color:"#927f54",transparent:!0,opacity:.5})))}}let ue=[[[-1.5,-1.5],[0,0],[-1.5,1.5]],[[-1.5,-1.5],[0,0],[1.5,-1.5]],[[1.5,-1.5],[0,0],[1.5,1.5]],[[-1.5,1.5],[0,0],[1.5,1.5]]];N(v,"#665333",0,.27,0,3,.29,3,.06),ue.forEach((P,U)=>{let D=new xn;D.moveTo(P[0][0],-P[0][1]),P.slice(1).forEach(re=>D.lineTo(re[0],-re[1])),D.closePath();let F=z(v,new Ci(D,{depth:.1,bevelEnabled:!1}),m(a[U]),0,.51,0);F.rotation.x=-Math.PI/2}),z(v,new An(.64,.7,.17,32),m("#915e2c"),0,.66,0),z(v,new Ri(.64,.035,8,32),m("#e0b964"),0,.75,0).rotation.x=Math.PI/2;let Te=new xn;Te.moveTo(-.36,0),Te.lineTo(-.42,.35),Te.lineTo(-.17,.2),Te.lineTo(0,.52),Te.lineTo(.17,.2),Te.lineTo(.42,.35),Te.lineTo(.36,0),Te.closePath();let Fe=z(v,new Ci(Te,{depth:.13,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:2}),m("#ffd031",{metalness:.5,roughness:.3}),0,.79,.12);Fe.rotation.x=-.35;for(let P=0;P<2;P++)for(let U=0;U<25;U++){let D=(P?1:-1)*(8.2+q()*3.2),F=-9+q()*18;Math.abs(D)<9.4&&F>-5&&F<-1.8||(y(D,-.15,F,.55+q()*.75),U%3===0?j(D,F,.8+q()*.8):oe(D,F,.65+q()*.9),Y(D+(q()-.5),F+(q()-.5),.35+q()*.4),U%4===0&&be(D-.4,F+.45,.2))}for(let P=0;P<24;P++){let U=-11+q()*22,D=P%2?-8.6-q()*1.5:8.4+q()*1.5;y(U,-.15,D,.45+q()*.5),Y(U,D,.5+q()*.5),P%4===0&&j(U,D,1.1)}for(let P=0;P<2;P++)for(let U=0;U<(u?32:65);U++){let D=(P?1:-1)*(8.75+q()*3.7),F=-9.4+q()*18.8;Math.abs(D)<9.6&&F>-4.9&&F<-2.2||(Y(D,F,.27+q()*.36,U%3===0?1:0),U%4===0&&y(D,.34,F,.12+q()*.18),U%3===0&&be(D-.12,F+.1,.12+q()*.08))}for(let P=0;P<2;P++)for(let U=0;U<(u?36:85);U++){let D=(P?1:-1)*(8.65+q()*4.5),F=-19+q()*38;Math.abs(F)<8.5||(y(D,.05,F,.35+q()*.6),Y(D,F,.35+q()*.5),U%4===0&&oe(D,F,.8+q()*.6),U%7===0&&j(D,F,.85+q()*.7),U%5===0&&be(D+.2,F+.3,.16))}let me=new xn;me.moveTo(-.03,0),me.quadraticCurveTo(-.07,.2,.03,.35),me.quadraticCurveTo(.07,.14,.03,0),me.closePath();let Qe=new vs(me);for(let P=0;P<360;P++){let U=P%2?1:-1,D=U*(8.4+q()*4.1),F=-10.5+q()*21;if(Math.abs(D)<9.5&&F>-5&&F<-2)continue;let re=z(v,Qe,m(P%3?"#8eb93b":"#488c32",{side:Jt}),D,.31,F,1,1+q(),1,!1);re.rotation.y=q()*6.28}v.traverse(P=>{P.isMesh&&P.material?.isMeshStandardMaterial&&["99602c","c28a40","b6813e","9b733e","bb8b43","96672f","845331","997044","78512d","80532d"].includes(P.material.color.getHexString())&&(P.material=m("#"+P.material.color.getHexString(),{map:he}))});function He(P,U,D=1.3,F=0){let re=new Ct;re.position.set(P,.1,U),re.rotation.y=F,v.add(re);for(let ee=0;ee<8;ee++)N(re,ee%2?"#bb8b43":"#96672f",-.63+ee*.18,.13,0,.16,.12,D,.02);for(let ee of[-.73,.73])for(let ve of[-D*.5,D*.5])G(re,"#ae7a36",[ee,-.1,ve],[ee,.73,ve],.055);for(let ee of[-D*.5,D*.5])G(re,"#d2b47c",[-.73,.64,ee],[.73,.64,ee],.025),G(re,"#996b34",[-.73,.4,ee],[.73,.4,ee],.025)}He(-8.75,0,1.35,.2),He(8.75,0,1.35,-.2),He(-8.45,6.7,1.2,-.5),He(8.4,-5.7,1.2,.3);function At(P,U){let D=new Ct;D.position.set(P,0,U),v.add(D);for(let ee=0;ee<8;ee++)y(P+(ee-3.5)*.27,.85,U-.45,.45);let F=new un({color:"#6bdef5",transparent:!0,opacity:.75,side:Jt,depthWrite:!1}),re=z(D,new Cn(1.5,2),F,0,.28,0,1,1,1,!1);for(let ee=0;ee<22;ee++){let ve=.33+q()*.4,Be=z(D,qe,m("#bdfdff",{emissive:"#66d7ef",emissiveIntensity:.65,transparent:!0,opacity:.65}),-.68+q()*1.36,q()*2-.65,.025+q()*.03,1,ve,1,!1);we.push({m:Be,phase:q()*2,base:.99})}for(let ee=0;ee<28;ee++){let ve=J(D,"#e8ffff",(q()-.5)*1.5,-.43,(q()-.5)*.55,.025+q()*.04,.03,.03,{transparent:!0,opacity:.65,emissive:"#5dcdc9",emissiveIntensity:.4});et.push({m:ve,phase:q()*6,base:-.45,spray:!0,scale:ve.scale.clone()})}for(let ee=0;ee<5;ee++){let ve=z(D,new Ri(.2+ee*.12,.016,6,32),m("#d1ffff",{transparent:!0,opacity:.65,emissive:"#429eae",emissiveIntensity:.35}),0,-.48,.42,1,1,1,!1);ve.rotation.x=Math.PI/2,Je.push({m:ve,phase:ee*.5})}}At(-8.25,-3.55),At(8.25,-3.65);for(let[P,U]of[[-8.2,2.2],[8.2,2.5],[-7.3,7.5],[7.3,7.5]])ce(P,U);for(let P=0;P<32;P++){let U=(q()-.5)*23,D=(q()-.5)*19,F=J(v,"#fff3a1",U,.8+q()*1.1,D,.025,.025,.025,{emissive:"#ffe653",emissiveIntensity:2});et.push({m:F,phase:q()*6,base:F.position.y,fly:!0,x:U,z:D})}function St(P,U){let D=($e,ut,Ve,Tn,Wt,Vt,Qt=Vt,Ft=Vt,jt={})=>z($e,A,m(ut,jt),Ve,Tn,Wt,Vt,Qt,Ft),F=new Ct,re=new Ct,ee=new Ct,ve=new Ct;F.add(re),ee.position.set(0,.98,0),ee.rotation.x=-.4,re.add(ee),ee.add(ve);let Be=br(n()?.seats[P],P),{fur:Oe,cream:je,dark:at}=Be,lt=Be.id==="panda",Bt=Be.id==="fox",mn=Be.id==="deer",Oi=Be.id==="rabbit",Bi=Be.id==="tiger",Xe=Be.id==="monkey",X=Be.id==="raccoon";D(re,a[P],0,.51,0,.26,.33,.2),D(re,je,0,.6,.185,.16,.2,.025);let xt=[],rn=[];for(let $e of[-.16,.16]){let ut=D(re,at,$e,.15,.05,.125,.12,.19);xt.push(ut);let Ve=new Ct;Ve.position.set($e*1.7,.65,.045),re.add(Ve),D(Ve,Oe,0,-.13,0,.09,.2,.095),D(Ve,Oe,0,-.29,.025,.1,.09,.1),rn.push(Ve)}N(re,"#77643a",0,.59,-.22,.38,.44,.19,.07),G(re,"#bba566",[-.21,.82,-.24],[.21,.82,-.24],.065);for(let $e of[-.14,.14])N(re,"#d2af58",$e,.63,.2,.036,.39,.035,.009);D(re,"#eece68",.15,.54,.225,.045,.055,.021);let an=z(re,ie,m(a[P]),0,.83,.19);if(an.rotation.z=Math.PI,D(ee,Oe,0,0,0,.36,.33,.3),Bt||X){for(let ut of[-.26,.26]){let Ve=z(ee,new si(.14,.32,3),m(Oe),ut,.3,-.015);Ve.rotation.z=ut<0?.22:-.22,z(ee,new si(.079,.21,3),m("#ffc592"),ut,.3,.075)}D(ee,je,-.14,-.13,.255,.16,.12,.09),D(ee,je,.14,-.13,.255,.16,.12,.09);let $e=D(re,Oe,.32,.41,-.13,.13,.38,.14);$e.rotation.z=-.58,D(re,X?at:je,.45,.67,-.13,.09,.12,.095),X&&D(re,at,.36,.44,-.1,.135,.065,.145)}else if(Oi){for(let $e of[-.18,.18]){let ut=D(ee,Oe,$e,.43,-.01,.11,.34,.085);ut.rotation.z=$e<0?.15:-.15,D(ee,"#edaeae",$e,.45,.067,.055,.24,.019)}D(ee,je,0,-.14,.27,.21,.135,.085),N(ee,"#fffef5",0,-.225,.346,.105,.12,.025,.018),D(re,je,.27,.27,-.13,.13,.13,.13)}else{for(let $e of[-.28,.28])D(ee,lt?at:Oe,$e,.24,-.01,Xe?.19:.145,.155,.095),D(ee,lt?"#484337":Xe?je:"#d39478",$e,.24,.069,.083,.09,.016);D(ee,je,0,-.14,.27,.21,.135,.085)}if(Xe){for(let ut of[-.13,.13])D(ee,je,ut,.02,.254,.17,.19,.057);let $e=new ri(new L(.17,.3,-.18),new L(.63,.53,-.25),new L(.38,.62,-.12));z(re,new Ii($e,10,.042,6,!1),m(Oe))}if(Bi){for(let $e of[-.16,0,.16]){let ut=D(ee,at,$e,.23,.215,.027,.095,.02);ut.rotation.z=$e<0?-.32:$e>0?.32:0}for(let $e of[-1,1]){for(let ut of[-.005,-.09])D(ee,at,$e*.29,ut,.19,.053,.016,.03);G(ee,je,[$e*.18,-.15,.32],[$e*.4,-.12,.27],.009)}G(re,Oe,[.22,.28,-.12],[.4,.67,-.15],.055);for(let $e of[.4,.54,.66])D(re,at,.22+($e-.28)*.46,$e,-.145,.06,.027,.061)}let zt=[];for(let $e of[-.13,.13]){if(lt||X){let Tn=D(ee,at,$e,0,.258,X?.165:.111,X?.09:.145,.046);Tn.rotation.z=$e<0?-.3:.3}let ut=D(ve,"#19251b",$e,.015,.305,.045,.064,.026,{roughness:.24}),Ve=D(ve,"#ffffff",$e-.012,.037,.331,.014,.018,.006,{emissive:"#ffffff",emissiveIntensity:.1});zt.push({pupil:ut,glint:Ve}),G(ee,mn?"#7e552f":"#6c492a",[$e-.035,.122,.28],[$e+.03,.134,.282],.012)}D(ee,"#27251e",0,-.12,.365,.065,.045,.035,{roughness:.3}),z(ee,se,m("#66412d"));for(let $e of[-.25,.25])D(ee,"#e9a380",$e,-.09,.248,.036,.022,.008);if(mn){for(let $e of[-1,1])G(ee,"#926735",[$e*.22,.29,-.02],[$e*.33,.62,-.02],.035),G(ee,"#926735",[$e*.29,.5,-.02],[$e*.47,.58,-.02],.027),G(ee,"#926735",[$e*.32,.55,-.02],[$e*.24,.67,-.02],.025);for(let $e of[-.2,.2])D(ee,"#fae4b1",$e,.14,.227,.025,.029,.008)}let Za=z(F,R,k[P],0,.045,0,1,1,1,!1);Za.rotation.x=Math.PI/2;let _i=z(F,B,Z[P],0,.035,0,1,1,1,!1);_i.rotation.x=-Math.PI/2;let Ja=z(F,W,te,0,1.63,0,1,1,1,!1);Ja.rotation.z=Math.PI;let us=document.createElement("canvas");us.width=64,us.height=64;let on=us.getContext("2d");on.fillStyle="#ffe6a1",on.beginPath(),on.arc(32,32,28,0,Math.PI*2),on.fill(),on.fillStyle="#4d3921",on.font="bold 39px Trebuchet MS",on.textAlign="center",on.textBaseline="middle",on.fillText(String(U+1),32,34);let Os=new _s(us);Os.colorSpace=qt;let ds=z(F,new Cn(.16,.16),new un({map:Os,transparent:!0,side:Jt}),.27,.17,.22,1,1,1,!1);return ds.rotation.x=-.45,F.traverse($e=>{if(!$e.material?.isMeshStandardMaterial)return;let ut=$e.material,Ve=$[P];if(!Ve.has(ut.uuid)){let Tn=ut.clone();Ve.set(ut.uuid,{material:Tn,emissive:Tn.emissive.clone(),intensity:Tn.emissiveIntensity})}$e.material=Ve.get(ut.uuid).material}),v.add(F),{g:F,body:re,head:ee,eyes:ve,eyeParts:zt,feet:xt,arms:rn,ring:Za,halo:_i,marker:Ja,seat:P,token:U,character:Be.id,dance:Be.dance,phase:P*.9+U*1.6}}for(let P=0;P<4;P++)for(let U=0;U<4;U++)it.push(St(P,U));let fn=new Set,pn=new Set;function Zn(P){fn.add(P),P.traverse(U=>{U.isMesh&&pn.add(U)})}let Xa=u?pe.filter((P,U)=>U%4===0):pe,Lr=u?Me.filter((P,U)=>U%3===0):Me;Xa.forEach(P=>Zn(P.g)),Lr.forEach(P=>Zn(P.g)),Se.forEach(P=>{Zn(P.flame),Zn(P.core)}),we.forEach(P=>Zn(P.m)),Je.forEach(P=>Zn(P.m)),et.forEach(P=>Zn(P.m)),it.forEach(P=>[P.g,P.body,P.head,P.eyes,P.ring,P.halo,P.marker,...P.arms,...P.feet].forEach(Zn)),v.updateMatrixWorld(!0),v.traverse(P=>{fn.has(P)||(P.updateMatrix(),P.matrixAutoUpdate=!1)}),v.matrixWorldAutoUpdate=!1;let Ni=new Map;v.traverse(P=>{if(!P.isMesh||!P.geometry||Array.isArray(P.material))return;let U=P.geometry.uuid+"|"+P.material.uuid+"|"+pn.has(P);Ni.has(U)||Ni.set(U,[]),Ni.get(U).push(P)});let qa=[],Ya=new wt().makeScale(0,0,0);for(let P of Ni.values()){if(P.length<2)continue;let U=new Gn(P[0].geometry,P[0].material,P.length);U.castShadow=P.some(F=>F.castShadow),U.receiveShadow=!0,U.frustumCulled=!1;let D=pn.has(P[0]);U.instanceMatrix.setUsage(D?ns:Yl),P.forEach((F,re)=>{F.layers.set(31),U.setMatrixAt(re,F.matrixWorld)}),U.instanceMatrix.needsUpdate=!0,U.matrixAutoUpdate=!1,v.add(U),D&&qa.push({batch:U,sources:P})}let Us=i.querySelector("svg"),Nn=Us.createSVGPoint(),Jn=new L,$n=document.getElementById("preview-board");$n.innerHTML="";let pi=$n;$n.append(x.domElement);let mi=0,gi=0,xi=0,cs=0,Ns=0,Dr=!1,Ut={renderer:"WebGL 3D",frames:0,tiles:Re.length,animals:16,characters:[0,1,2,3].map(P=>br(n()?.seats[P],P).id),waterfalls:2,torchCount:Se.length,drawCalls:0,fps:0,performanceVersion:2,characterDetail:"full"},hs=ef({scene:v,camera:g,board:i,reduced:d,getRoom:n,diagnostics:Ut}),Fi=sf({scene:v,camera:g,board:i,animals:it,track:o,reduced:d,getRoom:n,diagnostics:Ut}),Fs=new L;function w(P){let U=e.get(P.seat+"-"+P.token),D=getComputedStyle(U).transform,F=D==="none"?new DOMMatrix:new DOMMatrix(D);hs.start(P,{x:F.e-7.5,z:F.f-7.5})}let V=null,ne=0,K=-1,Q=-1,Ue=new Map;function ke(P,U="jump"){let D=n();return!D?.seats[P]||!Number.isInteger(P)||!["jump","dance","wave"].includes(U)?!1:(Ue.set(P,{kind:U,started:performance.now(),room:D.code}),!0)}i.dataset.renderer="webgl",window.jungleScene=Ut;function Le(){let P=pi.getBoundingClientRect();if(!P.width||!P.height)return;let U=f();x.setPixelRatio(Math.min(devicePixelRatio,U?1.5:1.65)),x.shadowMap.enabled=!U,Se.forEach(ee=>ee.light.visible=!U),Ut.quality=U?"mobile-smooth":"full",mi=P.width,gi=P.height,x.setSize(mi,gi,!1);let D=mi/gi,F=innerWidth<650?18.2/D:Math.max(16.85,13.6*gi/Math.max(300,gi-180)),re=F*D;g.left=-re/2,g.right=re/2,g.top=F/2,g.bottom=-F/2,g.updateProjectionMatrix(),Ut.cameraAspect=(g.right-g.left)/(g.top-g.bottom),Ut.viewportAspect=D}let ze=new ResizeObserver(Le);ze.observe(i),ze.observe($n);let Ze=new Map([[i,!0],[$n,!0]]),ht=new IntersectionObserver(P=>{P.forEach(U=>Ze.set(U.target,U.isIntersecting))});ht.observe(i),ht.observe($n);let mt=-1/0,We=()=>{f()&&(mt=performance.now())};window.addEventListener("scroll",We,{passive:!0});function bt(P,U,D,F,re){Jn.set(0,.55,0).applyMatrix4(P.body.matrixWorld).project(g),Nn.x=F.left+(Jn.x*.5+.5)*F.width,Nn.y=F.top+(-Jn.y*.5+.5)*F.height;let ee=Nn.matrixTransform(re),ve=U.querySelector(".token-hit");ve.setAttribute("cx",ee.x-D.e),ve.setAttribute("cy",ee.y-D.f),ve.setAttribute("r",innerWidth<650?".52":".5")}function Nt(P,U){if(pi!==i||!n())return null;let D=x.domElement.getBoundingClientRect(),F=null,re=1/0;for(let ee of it){let ve=e.get(ee.seat+"-"+ee.token);if(!ee.g.visible||!ve.classList.contains("movable"))continue;let Be=1/0,Oe=-1/0,je=1/0,at=-1/0;for(let mn of[-.46,.46])for(let Oi of[0,ee.marker.visible?1.8:1.48])for(let Bi of[-.3,.4]){Jn.set(mn,Oi,Bi).applyMatrix4(ee.body.matrixWorld).project(g);let Xe=D.left+(Jn.x*.5+.5)*D.width,X=D.top+(-Jn.y*.5+.5)*D.height;Be=Math.min(Be,Xe),Oe=Math.max(Oe,Xe),je=Math.min(je,X),at=Math.max(at,X)}let lt=innerWidth<650?7:4;if(P<Be-lt||P>Oe+lt||U<je-lt||U>at+lt)continue;let Bt=((P-(Be+Oe)/2)/Math.max(1,Oe-Be))**2+((U-(je+at)/2)/Math.max(1,at-je))**2;Bt<re&&(re=Bt,F=ve)}return F}let Rt=new MutationObserver(P=>{for(let U of P)for(let D of U.addedNodes){if(!(D instanceof SVGElement))continue;let F=/translate\(([\d.-]+) ([\d.-]+)\)/.exec(D.getAttribute("transform")||"");if(F&&D.dataset.capture!=="true")for(let re=0;re<12;re++){let ee=m("#ffe266",{emissive:"#e8a923",emissiveIntensity:1,transparent:!0,opacity:1}).clone(),ve=z(v,I,ee,Number(F[1])-7.5,.65,Number(F[2])-7.5,1,1,1,!1);et.push({m:ve,burst:!0,born:performance.now()/1e3,angle:re*6.283/12,x:ve.position.x,z:ve.position.z})}}});Rt.observe(i.querySelector("#effects"),{childList:!0});function Tt(P){if(Dr)return;requestAnimationFrame(Tt);let U=n()?i:$n;if(U!==pi&&(pi=U,pi.prepend(x.domElement),Le()),document.hidden||!Ze.get(pi)||P-mt<120||!mi||!gi){xi=P;return}if(P-xi<(innerWidth<650?32:21))return;let D=P-xi;xi=P,Ns+=D,cs++;let F=d.matches?0:P/1e3;hs.update(P),t?.update(P),Ut.comedy=t?.snapshot()??null,pt.uniforms.time.value=F,O.uniforms.time.value=F,Ut.waterTime=F,Ut.fireTime=F;for(let Xe of Xa)Xe.g.rotation.z=Math.sin(F*1.05+Xe.phase)*.025,Xe.g.rotation.x=Math.sin(F*.8+Xe.phase)*.018;for(let Xe of Lr)Xe.g.rotation.y=Math.sin(F*1.3+Xe.phase)*.1;for(let Xe of Se){let X=Math.sin(F*12+Xe.phase)*.1+Math.sin(F*19+Xe.phase)*.05;Xe.flame.scale.y=.35*(1+X),Xe.flame.rotation.z=X*.7,Xe.core.scale.y=.23*(1-X*.6),Xe.light.intensity=1.9+X*3}for(let Xe of we)Xe.m.position.y=Xe.base-(F*1.7+Xe.phase)%1.9;for(let Xe of Je){let X=(F*.6+Xe.phase)%1;Xe.m.scale.setScalar(.6+X*1.7),Xe.m.material.opacity=(1-X)*.5}for(let Xe=et.length-1;Xe>=0;Xe--){let X=et[Xe];if(X.burst){let xt=P/1e3-X.born;if(xt>.65){v.remove(X.m),X.m.material.dispose(),et.splice(Xe,1);continue}X.m.position.set(X.x+Math.sin(X.angle)*xt*1.2,.65+Math.sin(xt*Math.PI/.65)*.5,X.z+Math.cos(X.angle)*xt*1.2),X.m.material.opacity=1-xt/.65}else X.spray?(X.m.position.y=X.base+Math.abs(Math.sin(F*2+X.phase))*.32,X.m.scale.copy(X.scale).multiplyScalar(.7+Math.sin(F*2+X.phase)*.25)):X.fire?(X.m.position.y=X.base+(F*.8+X.phase)%1.1,X.m.position.x=Math.sin(F*2+X.phase)*.13):X.fly&&(X.m.position.y=X.base+Math.sin(F+X.phase)*.19,X.m.position.x=X.x+Math.sin(F*.6+X.phase)*.25)}Ye.forEach((Xe,X)=>Xe.material.emissiveIntensity=.12+(Math.sin(F*2+X)+1)*.1);let re=Us.getBoundingClientRect(),ve=Us.getScreenCTM()?.inverse(),Be=n(),Oe=Be?.game,je=Oe?.lastRoll?Be.code+":"+Oe.lastRoll.id:null;je!==V&&(je!==null&&V?.startsWith(Be.code+":")?(K=Oe.lastRoll.seat,ne=P+1200):(ne=0,K=-1),V=je);let at=Oe?.phase==="celebration"&&r()<Oe.celebration.endsAt?Oe.celebration:null,lt=Oe&&["roll","move","waiting"].includes(Oe.phase)?P<ne?K:Oe.turn:-1;lt!==Q&&($.forEach((Xe,X)=>Xe.forEach(({material:xt,emissive:rn,intensity:an})=>{let zt=xt.color.r+xt.color.g+xt.color.b>.4;X===lt&&zt&&rn.getHex()===0?(xt.emissive.set(a[X]),xt.emissiveIntensity=.14):(xt.emissive.copy(rn),xt.emissiveIntensity=an)})),Q=lt);let Bt=[],mn=[],Oi=it.map(Xe=>getComputedStyle(e.get(Xe.seat+"-"+Xe.token)).transform),Bi=new Map;for(let[Xe,X]of Ue){let xt=(P-X.started)/1e3,rn=X.kind==="dance"?2.8:X.kind==="wave"?2.4:2.2;if(X.room!==Be?.code||xt>=rn){Ue.delete(Xe);continue}let an=d.matches?0:Math.max(0,Math.min(1,xt/.16,(rn-xt)/.25)),zt=X.kind==="jump"&&!d.matches&&xt>.16&&xt<1.9?Math.sin(Math.PI*((xt-.16)%.58/.58)):0;Bi.set(Xe,{seat:Xe,kind:X.kind,age:xt,strength:an,hop:zt,jumpHeight:zt*.7,participants:0})}if(at)for(let Xe of at.seats){let X=Math.max(0,(r()-at.startedAt)/1e3),xt=(at.endsAt-at.startedAt)/1e3;Bi.set(Xe,{seat:Xe,kind:"victory",age:X,strength:d.matches?0:Math.max(0,Math.min(1,X/.25,(xt-X)/.4)),hop:0,jumpHeight:0,participants:0})}for(let[Xe,X]of it.entries()){let xt=e.get(X.seat+"-"+X.token),rn=Oi[Xe],an=rn==="none"?new DOMMatrix:new DOMMatrix(rn),zt=xt.classList.contains("walking"),Za=xt.classList.contains("finished"),_i=!!at?.seats.includes(X.seat);if(X.g.visible=_i||!Be||!Za&&!!Be?.seats[X.seat]&&(!Oe||Oe.active.includes(X.seat)),!X.g.visible)continue;let Ja=Number(xt.dataset.visualStep),us=_i||Ja<0?1.25:.88;if(d.matches?X.g.scale.setScalar(us):X.g.scale.setScalar(Li.lerp(X.g.scale.x,us,.2)),X.g.position.set(an.e-7.5,.5,an.f-7.5),_i){let[ut,Ve]=c[X.seat][X.token];X.g.position.set(Ve-7.5,.5,ut-7.5)}let on=F*(zt?[14,12,15,18][X.dance]:2)+X.phase;X.body.position.x=0,X.body.position.y=zt?Math.abs(Math.sin(on))*(X.dance===2?.16:.095):Math.sin(on)*.017,X.body.rotation.z=zt?Math.sin(on)*.06:Math.sin(F*.8+X.phase)*.016,X.body.rotation.x=0,X.body.rotation.y=0,X.body.scale.set(1,1,1),X.arms.forEach((ut,Ve)=>ut.rotation.z=(Ve?1:-1)*.1),X.head.rotation.y=Math.sin(F*.7+X.phase)*.08,X.head.rotation.z=Math.sin(F*.9+X.phase)*.026,X.head.rotation.x=-.4,X.eyes.scale.y=(F+X.phase)%4.8<.13?.12:1,X.eyeParts.forEach(({pupil:ut,glint:Ve})=>{ut.scale.y=.064,Ve.scale.y=.018}),X.feet[0].rotation.x=zt?Math.sin(on)*.5:0,X.feet[1].rotation.x=zt?-Math.sin(on)*.5:0;let Os=X.seat===lt,ds=xt.classList.contains("movable");X.ring.visible=Os||ds,X.ring.scale.setScalar((ds?1.15:1)+Math.sin(F*3)*.06),X.halo.visible=Os,X.halo.scale.setScalar(1+Math.sin(F*3)*.04),X.marker.visible=ds,X.marker.position.y=1.63+Math.sin(F*4)*.06,Os&&Bt.push(X.seat+"-"+X.token),ds&&mn.push(X.seat+"-"+X.token),xt.classList.contains("reacting")&&(X.body.position.y+=Math.abs(Math.sin(F*7))*.12);let $e=Bi.get(X.seat);if($e&&($e.participants++,X.ring.visible=!0,$e.kind==="victory"&&d.matches&&(X.arms.forEach((ut,Ve)=>ut.rotation.z=(Ve?1:-1)*1.3),X.halo.visible=!0),!d.matches)){let{age:ut,strength:Ve,hop:Tn}=$e;if($e.kind==="jump"){let Wt=ut<.16?Math.sin(ut/.16*Math.PI)*.15:0,Vt=ut>=1.9?Math.sin((ut-1.9)/.3*Math.PI)*.08:0;X.body.position.y+=$e.jumpHeight-Wt*.25,X.body.scale.set(1+Wt+Vt-Tn*.035,1-Wt-Vt+Tn*.07,1+Wt*.5),X.body.rotation.z+=Math.sin(ut*11)*.07*Ve,X.head.rotation.z+=Math.sin(ut*7)*.12*Ve,X.eyes.scale.y=1-Tn*.35,X.arms.forEach((Qt,Ft)=>Qt.rotation.z=(Ft?1:-1)*(1.95+Math.sin(ut*15)*.22)*Ve),X.feet.forEach((Qt,Ft)=>Qt.rotation.x+=Tn*(Ft?.45:-.35))}else if($e.kind==="victory"){let Wt=ut*7+X.token*.3,Vt=Math.sin(Wt),Qt=Math.sin(Wt+Math.PI/2);X.halo.visible=!0,X.dance===0?(X.body.position.y+=Math.abs(Vt)*.16*Ve,X.body.rotation.z=Vt*.13*Ve,X.body.scale.set(1+Qt*.04*Ve,1-Qt*.04*Ve,1),X.arms.forEach((jt,Fn)=>jt.rotation.z=(Fn?1:-1)*(1.2+Vt*.65)*Ve)):X.dance===1?(X.body.position.x=Vt*.13*Ve,X.body.rotation.z=Vt*.24*Ve,X.head.rotation.z=-Vt*.2*Ve,X.arms.forEach((jt,Fn)=>jt.rotation.z=(Fn?1:-1)*(1+Math.sin(Wt+Fn*Math.PI)*.8)*Ve)):X.dance===2?(X.body.position.y+=Math.abs(Vt)*.3*Ve,X.body.rotation.y=Math.sin(ut*2)*.85*Ve,X.body.rotation.z=Qt*.1*Ve,X.arms.forEach((jt,Fn)=>jt.rotation.z=(Fn?1:-1)*1.7*Ve)):(X.body.position.x=Vt*.18*Ve,X.body.rotation.y=Qt*.5*Ve,X.head.rotation.x+=Vt*.15*Ve,X.arms[0].rotation.z=-(1.7+Qt*.7)*Ve,X.arms[1].rotation.z=(1.7-Qt*.7)*Ve),X.feet.forEach((jt,Fn)=>jt.rotation.x=Math.sin(Wt+Fn*Math.PI)*.55*Ve);let Ft=(ut+X.token*.18)%7;if(Ft>=2&&Ft<3.4){let jt=(Ft-2)/1.4,Fn=Math.sin(Math.PI*jt);X.body.position.y+=Fn*1.9*Ve,X.body.rotation.x=(X.seat%2?1:-1)*jt*Math.PI*2*Ve,X.body.rotation.z*=.2,X.arms.forEach((vc,If)=>vc.rotation.z=(If?1:-1)*2.2*Ve),X.feet.forEach(vc=>vc.rotation.x=-.6*Fn*Ve)}else if(Ft>=3.4&&Ft<3.8){let jt=Math.sin((Ft-3.4)/.4*Math.PI)*.16*Ve;X.body.scale.set(1+jt,1-jt,1+jt*.5)}else Ft>=4&&Ft<6&&(X.body.rotation.y=Math.sin(Ft*3)*.5*Ve,X.head.rotation.z=Math.sin(Ft*9)*.16*Ve,X.arms[1].rotation.z=2.05*Ve,X.arms[0].rotation.z=-.3*Ve,X.eyes.scale.y=Ft%1<.18?.15:1)}else if($e.kind==="dance"){let Wt=ut*10,Vt=Math.sin(Wt)*Ve;X.body.position.y+=Math.abs(Math.sin(Wt))*.11*Ve,X.body.rotation.z+=Vt*.14,X.body.rotation.y=Math.sin(Wt*.5)*.4*Ve,X.head.rotation.z-=Vt*.12,X.head.rotation.x+=Math.cos(Wt)*.07*Ve,X.arms.forEach((Qt,Ft)=>Qt.rotation.z=(Ft?1:-1)*(1.05+Math.sin(Wt+Ft*Math.PI)*.55)*Ve),X.feet.forEach((Qt,Ft)=>Qt.rotation.x+=Math.sin(Wt+Ft*Math.PI)*.5*Ve)}else X.body.rotation.z-=.07*Ve,X.head.rotation.y+=.12*Ve,X.head.rotation.z+=Math.sin(ut*5)*.07*Ve,X.arms[1].rotation.z=(2.35+Math.sin(ut*17)*.3)*Ve,X.arms[0].rotation.z=-.3*Ve}_i||hs.pose(X,P),!_i&&!zt&&!$e&&t?.pose(X,P),_i||Fi.pose(X,P),X.g.updateMatrixWorld(),t?.matches(X)&&(Fs.set(0,1.9,0).applyMatrix4(X.g.matrixWorld).project(g),t.anchor((Fs.x*.5+.5)*100,(-Fs.y*.5+.5)*100),Ut.comedy&&(Ut.comedy.pose={headYaw:X.head.rotation.y,headTilt:X.head.rotation.z,rightArm:X.arms[1].rotation.z})),ve&&Be&&ds&&bt(X,xt,an,re,ve)}Ut.emotes=Array.from(Bi.values()).map(({seat:Xe,kind:X,participants:xt,jumpHeight:rn,strength:an})=>({seat:Xe,kind:X,participants:xt,jumpHeight:rn,strength:an})),Ut.victory=at?{seats:at.seats,final:at.final,endsAt:at.endsAt,routines:at.seats.map(Xe=>["belly-clap","waddle-shimmy","prance-twirl","disco-step"][br(Be?.seats[Xe],Xe).dance]),flips:it.filter(Xe=>at.seats.includes(Xe.seat)).map(Xe=>({seat:Xe.seat,token:Xe.token,rotation:Xe.body.rotation.x,height:Xe.body.position.y}))}:null,Ut.highlight={seat:lt,tokens:Bt,legalTokens:mn},Fi.frame(P),v.updateMatrixWorld();for(let{batch:Xe,sources:X}of qa)X.forEach((xt,rn)=>{let an=xt.visible,zt=xt.parent;for(;zt&&an;)an=zt.visible,zt=zt.parent;Xe.setMatrixAt(rn,an?xt.matrixWorld:Ya)}),Xe.instanceMatrix.needsUpdate=!0;x.render(v,g),Ut.frames++,Ut.time=F,Ut.drawCalls=x.info.render.calls,Ut.triangles=x.info.render.triangles,cs>=30&&(Ut.fps=Math.round(1e3*cs/Ns),cs=0,Ns=0)}return Le(),requestAnimationFrame(Tt),x.domElement.addEventListener("webglcontextlost",()=>{Dr||(i.dataset.renderer="lost")},{passive:!0}),{resize:Le,pickToken:Nt,celebrate:ke,capture:w,gift:Fi.start,deferGift:Fi.defer,resetCaptures:()=>{hs.reset(),Fi.reset()},renderer:x,scene:v,camera:g,diagnostics:Ut,dispose(){Dr=!0,hs.dispose(),Fi.dispose(),ze.disconnect(),ht.disconnect(),Rt.disconnect(),window.removeEventListener("scroll",We);let P=new Set,U=new Set(M.values()),D=new Set;$.forEach(F=>F.forEach(({material:re})=>U.add(re))),v.traverse(F=>{if(F.geometry&&P.add(F.geometry),F.material)for(let re of[F.material].flat())U.add(re);F.shadow?.dispose()});for(let F of U){for(let re of Object.values(F))re?.isTexture&&D.add(re);F.dispose()}for(let F of P)F.dispose();for(let F of D)F.dispose();x.dispose(),x.forceContextLoss(),x.domElement.remove()}}}var Yh=["red","green","yellow","blue"],wr=new Set([0,8,13,21,26,34,39,47]),ss=56,za=[[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0]],ic=[[[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]],[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],[[7,13],[7,12],[7,11],[7,10],[7,9],[7,8]],[[13,7],[12,7],[11,7],[10,7],[9,7],[8,7]]],sc=[[[1.9,1.9],[1.9,4.1],[4.1,1.9],[4.1,4.1]],[[1.9,10.9],[1.9,13.1],[4.1,10.9],[4.1,13.1]],[[10.9,10.9],[10.9,13.1],[13.1,10.9],[13.1,13.1]],[[10.9,1.9],[10.9,4.1],[13.1,1.9],[13.1,4.1]]];function rc(i,e){return e>=0&&e<=50?(i*13+e)%52:null}function $_(i=""){if(!i.trim())return"";let e=new URL(i.trim());if(!["https:","http:","wss:","ws:"].includes(e.protocol)||e.username||e.password||e.pathname!=="/"||e.search||e.hash)throw new Error("BACKEND_URL must be a server origin such as https://ludoloop.pythonanywhere.com");return e.origin}function af(i,e){let t=new URL(e),n=new URL($_(i)||t.origin);if(n.protocol=["https:","wss:"].includes(n.protocol)?"wss:":"ws:",t.protocol==="https:"&&n.protocol!=="wss:")throw new Error("An HTTPS frontend needs an HTTPS/WSS backend.");return n.href}function of(i,e,t,n){let s=e?new URL("./",t):new URL((n||new URL(t).origin).replace(/\/$/,"")+"/");return s.search="",s.hash="",s.searchParams.set("room",i),s.href}function lf({send:i,identity:e,notify:t}){let n=I=>document.getElementById(I),s=!1,r=!1,a=!1,o=0,l,c,h="",f=[],u={},d=!1,x=!1,v,g,p="Join to talk with your crew.",b=new Map,M=new Map,m=!!(window.isSecureContext&&navigator.mediaDevices?.getUserMedia&&window.RTCPeerConnection);function S(I){p=I,T()}function T(){n("voice-join").hidden=r,n("voice-join").disabled=a||!s||!m,n("voice-join").textContent=a?"Connecting\u2026":"\u{1F399} Join voice";for(let I of["voice-mic","voice-speaker","voice-leave"])n(I).hidden=!r;n("voice-mic").textContent=d?"\u{1F399} Unmute":"\u{1F399} Mute",n("voice-mic").setAttribute("aria-pressed",String(d)),n("voice-speaker").textContent=x?"\u{1F507} Hear crew":"\u{1F50A} Sound on",n("voice-speaker").setAttribute("aria-pressed",String(x)),n("voice-status").textContent=p,n("voice-hear").hidden=![...b.values()].some(I=>I.blocked),A()}function A(){let I=e();document.querySelectorAll("[data-voice-seat]").forEach(z=>{let J=f.find(ye=>ye.seat===Number(z.dataset.voiceSeat)),_e=J&&b.get(J.id),G=J?.id===I.id?r:_e?.pc.connectionState==="connected",ge=G&&!J.muted&&!!M.get(J.id)?.talking;z.hidden=!J,z.textContent=J?.muted?"\u{1F507}":ge?"\u25CF":"\u{1F399}",z.title=J?.muted?"Microphone muted":ge?"Speaking":G?"In voice chat":"Joining voice";let q=z.closest(".player-card");q?.classList.toggle("voice-talking",!!ge),q?.classList.toggle("voice-connected",!!G)})}function _(){if(!r)return;let I=[...b.values()];I.some(z=>z.pc.connectionState==="failed"||z.retries>=3&&z.pc.connectionState!=="connected")?S("Voice could not connect. Leave and rejoin, or try Wi-Fi."):I.some(z=>z.blocked)?S("Tap Hear crew to enable sound."):I.some(z=>z.pc.connectionState!=="connected")?S("Connecting your crew\u2026"):S(I.length?`${I.length+1} in voice \xB7 ${d?"Mic muted":"Mic on"}`:`${d?"Mic muted":"Mic on"} \xB7 waiting for your crew`)}function E(I,z){if(R(I),!!c)try{let J=c.createMediaStreamSource(z),_e=c.createAnalyser();_e.fftSize=256,J.connect(_e),M.set(I,{source:J,analyser:_e,data:new Uint8Array(_e.fftSize),talking:!1,until:0})}catch{}}function R(I){let z=M.get(I);z&&(z.source.disconnect(),z.analyser.disconnect(),M.delete(I))}function B(){clearInterval(g),g=setInterval(()=>{if(document.hidden||!r)return;let I=e(),z=!1;for(let[J,_e]of M){_e.analyser.getByteTimeDomainData(_e.data);let N=0;for(let ge of _e.data)N+=((ge-128)/128)**2;Math.sqrt(N/_e.data.length)>.025&&(_e.until=performance.now()+250);let G=(J===I.id?!d:!f.find(ge=>ge.id===J)?.muted)&&performance.now()<_e.until;G!==_e.talking&&(_e.talking=G,z=!0)}z&&A()},125)}function W(I,z){r&&b.get(I.member.id)===I&&i({type:"voice-signal",to:I.member.id,fromSession:h,toSession:I.member.session,data:z})}function $(I,z){I.queue=I.queue.then(async()=>{b.get(I.member.id)===I&&r&&await z()}).catch(()=>{b.get(I.member.id)===I&&r&&S("Voice connection interrupted. Try leaving and rejoining voice.")})}async function k(I,z=!1){I.pc.signalingState==="stable"&&(await I.pc.setLocalDescription(await I.pc.createOffer({iceRestart:z})),W(I,{description:{type:I.pc.localDescription.type,sdp:I.pc.localDescription.sdp}}))}async function Z(I){if(I.audio){I.audio.muted=x;try{await I.audio.play(),I.blocked=!1}catch{I.blocked=!0}_()}}function te(I){if(clearTimeout(I.retryTimer),I.retries>=3){_();return}I.retryTimer=setTimeout(()=>{b.get(I.member.id)!==I||I.pc.connectionState==="connected"||(I.retries++,e().seat<I.member.seat?$(I,()=>k(I,!0)):W(I,{restart:!0}),_(),te(I))},4e3)}function ie(I){let z=new RTCPeerConnection({iceServers:u.iceServers||[],bundlePolicy:"max-bundle"}),J={member:I,pc:z,queue:Promise.resolve(),candidates:[],audio:null,blocked:!1,retries:0};b.set(I.id,J);for(let _e of l.getAudioTracks()){let N=z.addTrack(_e,l),G=N.getParameters();G.encodings?.length&&(G.encodings[0].maxBitrate=24e3,N.setParameters(G).catch(()=>{}))}return z.onicecandidate=_e=>{_e.candidate&&W(J,{candidate:_e.candidate.toJSON()})},z.ontrack=_e=>{if(b.get(I.id)!==J)return;let N=_e.streams[0]||new MediaStream([_e.track]);J.audio?.remove();let G=document.createElement("audio");G.autoplay=!0,G.setAttribute("playsinline",""),G.srcObject=N,n("voice-audio").append(G),J.audio=G,E(I.id,N),Z(J)},z.onconnectionstatechange=()=>{b.get(I.id)===J&&(z.connectionState==="connected"?(clearTimeout(J.retryTimer),J.retries=0):["failed","disconnected"].includes(z.connectionState)&&te(J),_())},te(J),e().seat<I.seat&&$(J,()=>k(J)),J}function xe(I){let z=b.get(I);z&&(b.delete(I),clearTimeout(z.retryTimer),z.pc.ontrack=z.pc.onicecandidate=z.pc.onconnectionstatechange=null,z.pc.close(),z.audio&&(z.audio.pause(),z.audio.srcObject=null,z.audio.remove()),R(I))}function se(){if(!r||!h||!l){A();return}let I=e();if(!f.find(J=>J.id===I.id&&J.session===h)){le(!1,"Voice ended. Join again to talk.");return}for(let[J,_e]of b)f.some(N=>N.id===J&&N.session===_e.member.session)||xe(J);for(let J of f)J.id!==I.id&&(b.has(J.id)?b.get(J.id).member=J:ie(J));_()}function le(I=!0,z="Join to talk with your crew."){o++,clearTimeout(v),clearInterval(g),I&&(r||a)&&i({type:"voice-leave"}),r=a=!1,h="",d=x=!1;for(let J of[...b.keys()])xe(J);for(let J of[...M.keys()])R(J);l?.getTracks().forEach(J=>J.stop()),l=null,c?.close().catch(()=>{}),c=null,S(z)}async function de(){if(a||r||!s||!m)return;a=!0;let I=++o;S("Allow your microphone to join voice.");try{if(c=new(window.AudioContext||window.webkitAudioContext),await c.resume(),I!==o)return;let z=await navigator.mediaDevices.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:1}});if(I!==o){z.getTracks().forEach(J=>J.stop());return}if(l=z,l.getAudioTracks()[0].onended=()=>le(!0,"Microphone disconnected. Join voice again."),E(e().id,l),!i({type:"voice-join"})){le(!1,"Reconnect to the room, then join voice.");return}S("Joining room voice\u2026"),v=setTimeout(()=>le(!0,"Voice is unavailable. Refresh after the server update."),8e3)}catch(z){if(I!==o)return;let J=["NotAllowedError","SecurityError"].includes(z.name)?"Microphone permission denied. Allow it in browser settings, then join again.":z.name==="NotFoundError"?"No microphone found. Connect one and try again.":"Microphone is busy or unavailable. Close other calls and try again.";le(!1,J),t(J)}}function qe(I){if(I.type==="voice-ready"){if(!a||!l)return;clearTimeout(v),h=I.session,u=I,r=!0,a=!1,B(),S("Mic on \xB7 waiting for your crew")}else if(I.type==="voice-state")f=I.members||[],se();else if(I.type==="voice-error")le(!0,I.message),t(I.message);else if(I.type==="voice-signal"){let z=b.get(I.from);if(!r||I.toSession!==h||!z||z.member.session!==I.fromSession)return;$(z,async()=>{let J=I.data;if(J.description){if(J.description.type==="offer"&&e().seat<z.member.seat)return;await z.pc.setRemoteDescription(J.description);for(let _e of z.candidates.splice(0))await z.pc.addIceCandidate(_e);J.description.type==="offer"&&(await z.pc.setLocalDescription(await z.pc.createAnswer()),W(z,{description:{type:z.pc.localDescription.type,sdp:z.pc.localDescription.sdp}}))}else J.candidate?z.pc.remoteDescription?await z.pc.addIceCandidate(J.candidate):z.candidates.length<64&&z.candidates.push(J.candidate):J.restart&&e().seat<z.member.seat&&await k(z,!0)})}}return n("voice-join").onclick=de,n("voice-leave").onclick=()=>le(),n("voice-mic").onclick=()=>{r&&(d=!d,l.getAudioTracks().forEach(I=>I.enabled=!d),i({type:"voice-mute",fromSession:h,muted:d}),_())},n("voice-speaker").onclick=()=>{x=!x;for(let I of b.values())Z(I);T()},n("voice-hear").onclick=()=>{c?.resume();for(let I of b.values())Z(I)},window.addEventListener("pagehide",()=>le()),document.addEventListener("visibilitychange",()=>{!document.hidden&&r&&(c?.resume().catch(()=>{}),_())}),T(),{receive:qe,paintPlayers:A,connected(I){s=I===1,S(m?s?"Join to talk with your crew.":"Voice server update pending.":"Voice needs HTTPS and a browser with microphone support.")},disconnect(){s=!1,f=[],le(!1,"Reconnect to the room, then join voice.")},leave(){f=[],le(!1)},diagnostics(){return{active:r,joining:a,muted:d,deafened:x,microphoneLive:!!l?.getAudioTracks().some(I=>I.readyState==="live"),relayConfigured:!!u.relayConfigured,peers:[...b.values()].map(I=>({seat:I.member.seat,state:I.pc.connectionState,blocked:I.blocked})),talking:[...M].filter(([,I])=>I.talking).map(([I])=>f.find(z=>z.id===I)?.seat)}},async stats(){let I=[];for(let z of b.values()){let J=await z.pc.getStats();for(let _e of J.values())_e.type==="inbound-rtp"&&_e.kind==="audio"&&I.push({seat:z.member.seat,bytes:_e.bytesReceived,packets:_e.packetsReceived,energy:_e.totalAudioEnergy,samples:_e.totalSamplesReceived})}return I}}}function cf(i){let e='<g fill="#274238" stroke="#d8ba79" stroke-width=".025"><ellipse cx="-.14" cy="-.49" rx=".12" ry=".09"/><ellipse cx=".14" cy="-.49" rx=".12" ry=".09"/><path d="M-.025-.49H.025"/></g>';return i===0?'<ellipse cy="-.77" rx=".43" ry=".06" fill="#dab77a"/><path d="M-.28-.77Q-.32-1.12 0-1.09Q.32-1.12.28-.77Z" fill="#ead09a"/><path d="M-.28-.81H.28" stroke="#4f7b40" stroke-width=".06"/>'+e:i===1?'<path d="M-.46-.75Q-.4-1.19 0-.96Q.4-1.19.46-.75Z" fill="#34433b" stroke="#dbb16b" stroke-width=".035"/><circle cy="-.91" r=".055" fill="#ffe5a3"/><path d="M0-.28Q-.15-.38-.2-.27Q-.1-.2 0-.28Q.15-.38.2-.27Q.1-.2 0-.28" fill="#45332a"/><path d="M-.17-.23H.17" stroke="#d26e5c" stroke-width=".075"/>':i===2?'<path d="M-.3-.75L-.33-1.04-.15-.87 0-1.12.15-.87.33-1.04.3-.75Z" fill="#7ac54a" stroke="#d1b56b" stroke-width=".03"/><circle cy="-.79" r=".045" fill="#ffe79b"/><path d="M-.22-.2L-.4.2H.4L.22-.2" fill="#50916a" opacity=".75"/>':i===3?'<ellipse cy="-.77" rx=".42" ry=".06" fill="#e5bd83"/><ellipse cy="-.85" rx=".28" ry=".14" fill="#ecd1a1"/><g fill="#ff92b3" stroke="#ffe49c" stroke-width=".025"><circle cx="-.2" cy="-.8" r=".075"/><circle cy="-.85" r=".075"/><circle cx=".2" cy="-.8" r=".075"/><circle cx="-.17" cy="-.21" r=".065"/><circle cy="-.16" r=".065"/><circle cx=".17" cy="-.21" r=".065"/></g>':i===4?'<path d="M-.24-.77L.05-1.27.25-.77Z" fill="#ad82de" stroke="#ffe29e" stroke-width=".025"/><circle cx=".05" cy="-1.27" r=".06" fill="#ffe59f"/><path d="M0-.18L-.22-.27V-.09L0-.18.22-.27V-.09Z" fill="#ef9d78"/>':i===5?'<ellipse cy="-.82" rx=".3" ry=".17" fill="#ad7e49"/>'+e+'<path d="M-.2-.23H.2L.27.06.16.09.12-.15" fill="#fb9956"/>':""}var Tr={chase:"\u0D0E\u0D28\u0D4D\u0D31\u0D46 \u0D36\u0D3F\u0D35\u0D28\u0D47!",nearMiss:"\u0D0E\u0D28\u0D4D\u0D24\u0D4B\u2026 \u0D0E\u0D19\u0D4D\u0D19\u0D28\u0D46!",capture:"\u0D30\u0D23\u0D4D\u0D1F\u0D4D \u0D13\u0D32\u0D15\u0D4D\u0D15\u0D40\u0D31\u0D4B \u0D35\u0D46\u0D33\u0D4D\u0D33\u0D24\u0D4D\u0D24\u0D41\u0D23\u0D3F\u0D2F\u0D4B \u0D0E\u0D1F\u0D41\u0D24\u0D4D\u0D24\u0D4B\u0D33\u0D42 \u0D0E\u0D28\u0D4D\u0D28\u0D46 \u0D2E\u0D42\u0D1F\u0D3E\u0D7B",boast:"\u0D07\u0D28\u0D3F \u0D28\u0D2E\u0D4D\u0D2E\u0D7E \u0D0E\u0D28\u0D4D\u0D24\u0D41\u0D02 \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D02 \u0D2E\u0D32\u0D4D\u0D32\u0D2F\u0D4D\u0D2F\u0D3E!",noMove:"\u0D0E\u0D28\u0D4D\u0D24\u0D3F\u0D28\u0D4B \u0D35\u0D47\u0D23\u0D4D\u0D1F\u0D3F \u0D24\u0D3F\u0D33\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28 \u0D38\u0D3E\u0D2E\u0D4D\u0D2A\u0D3E\u0D7C!",victory:"\u0D2E\u0D4A\u0D24\u0D32\u0D3E\u0D33\u0D3F \u0D1C\u0D19\u0D4D\u0D15 \u0D1C\u0D17 \u0D1C\u0D17\u0D3E!"},K_={chase:["\u0D06\u0D30\u0D41\u0D02 \u0D2A\u0D47\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D23\u0D4D\u0D1F\u2026 \u0D13\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D4B!","\u0D1F\u0D3E\u0D38\u0D4D\u0D15\u0D3F \u0D35\u0D3F\u0D33\u0D3F\u0D2F\u0D46\u0D1F\u0D3E!","\u0D36\u0D3F\u0D35\u0D28\u0D47 \u0D07\u0D24\u0D4D \u0D0F\u0D24\u0D4D \u0D1C\u0D3F\u0D32\u0D4D\u0D32\u0D3E!",Tr.chase],nearMiss:["\u0D2A\u0D4B \u0D2E\u0D4B\u0D28\u0D47 \u0D26\u0D3F\u0D28\u0D47\u0D36\u0D3E!","\u0D07\u0D24\u0D46\u0D28\u0D4D\u0D24\u0D4D \u0D2E\u0D31\u0D3F\u0D2E\u0D3E\u0D2F\u0D02?",Tr.nearMiss,"\u0D07\u0D24\u0D4A\u0D15\u0D4D\u0D15\u0D46 \u0D0E\u0D28\u0D4D\u0D24\u0D4D?"],capture:["\u0D32\u0D47\u0D32\u0D41 \u0D05\u0D32\u0D4D\u0D32\u0D41\u2026 \u0D32\u0D47\u0D32\u0D41 \u0D05\u0D32\u0D4D\u0D32\u0D41!","\u0D05\u0D19\u0D4D\u0D19\u0D28\u0D46 \u0D2A\u0D1F\u0D15\u0D4D\u0D15 \u0D15\u0D2E\u0D4D\u0D2A\u0D28\u0D3F \u0D16\u0D41\u0D26\u0D3E \u0D39\u0D35\u0D3E!",Tr.capture],boast:["\u0D38\u0D35\u0D3E\u0D30\u0D3F\u0D17\u0D3F\u0D30\u0D3F\u0D17\u0D3F\u0D30\u0D3F!","\u0D12\u0D1F\u0D41\u0D15\u0D4D\u0D15\u0D24\u0D4D\u0D24\u0D46 \u0D2C\u0D41\u0D26\u0D4D\u0D27\u0D3F\u0D2F\u0D3E!",Tr.boast,"\u0D07\u0D24\u0D4A\u0D15\u0D4D\u0D15\u0D46 \u0D0E\u0D28\u0D4D\u0D24\u0D4D?"],noMove:["\u0D07\u0D2A\u0D4D\u0D2A\u0D4B \u0D36\u0D30\u0D3F\u0D2F\u0D3E\u0D15\u0D4D\u0D15\u0D3F \u0D24\u0D30\u0D3E\u0D02\u2026","\u0D07\u0D24\u0D46\u0D28\u0D4D\u0D24\u0D4D \u0D2E\u0D31\u0D3F\u0D2E\u0D3E\u0D2F\u0D02?",Tr.noMove],victory:[Tr.victory,"\u0D38\u0D35\u0D3E\u0D30\u0D3F\u0D17\u0D3F\u0D30\u0D3F\u0D17\u0D3F\u0D30\u0D3F!","\u0D07\u0D24\u0D4A\u0D15\u0D4D\u0D15\u0D46 \u0D0E\u0D28\u0D4D\u0D24\u0D4D?"]};function Q_(i=""){let e=[...i].reduce((r,a)=>r*31+a.charCodeAt(0)>>>0,0),t=new Map,n=[],s=0;return{pick(r,a){let o=K_[r]||[],c=o.map((h,f)=>o[(f+e)%o.length]).filter(h=>!n.slice(-2).includes(h)&&a-(t.get(h)?.time??-1/0)>=9e4).sort((h,f)=>(t.get(h)?.order??-1)-(t.get(f)?.order??-1))[0];return c?(t.set(c,{time:a,order:s++}),n.push(c),n.length>2&&n.shift(),c):null}}}function hf(i,e){if(!i||!e||e.gift||["celebration","done"].includes(i.phase))return null;if(e.captured.length)return{kind:"capture",...e.captured[0],winner:{seat:e.seat,token:e.token}};if(e.old<0||e.next>50)return null;let t=rc(e.seat,e.next),n=[];for(let s of i.active)s!==e.seat&&i.tokens[s].forEach((r,a)=>{let o=rc(s,r);if(o===null||wr.has(o))return;let l=(o-t+52)%52,c=e.next-e.old>1&&rc(e.seat,e.next-1)===o;l===1&&e.next+1<=50||c?n.push({kind:"nearMiss",seat:s,token:a}):l===2&&e.next+2<=50&&n.push({kind:"chase",seat:s,token:a})});return n.find(s=>s.kind==="nearMiss")||n[0]||null}function uf(i){if(i?.phase!=="waiting"||!i.lastRoll||i.legal.length)return null;let e=i.lastRoll.seat,t=i.tokens[e].findIndex(n=>n<ss);return t<0?null:{kind:"noMove",seat:e,token:t}}function j_(){let i=-1/0,e=null,t=!1,n=new Map,s=[0,0,0,0];return{observeRoll(r){let a=r?.lastRoll;!a||a.id===e||(e=a.id,s[a.seat]=r.phase==="waiting"?s[a.seat]+1:0)},allow(r,a,o=!1){if(!r||r.kind==="noMove"&&(t||s[r.seat]<3))return!1;let l=r.kind==="capture"?12e3:r.kind==="noMove"?9e4:3e4;return a-(n.get(r.kind)??-1/0)<l||a-i<(r.kind==="capture"?8e3:2e4)||o&&r.kind!=="capture"?!1:(i=a,n.set(r.kind,a),r.kind==="noMove"&&(t=!0),!0)},reset(){i=-1/0,e=null,t=!1,n.clear(),s.fill(0)}}}function df({board:i,tokenNodes:e,reduced:t,getRoom:n}){let s=document.createElement("div");s.className="movie-callout",s.hidden=!0,s.lang="ml",s.setAttribute("aria-hidden","true"),i.append(s);let r=j_(),a=null,o=null,l=null,c=null,h=null;function f(m,S){return l??=Q_(n()?.code),l.pick(m,S)}function u(){o?.classList.remove("movie-react"),o=null,a=null,s.hidden=!0}function d(m=!1){u(),m||(r.reset(),l=null,c=null,h=null)}function x(m,S,T,A){o?.classList.remove("movie-react"),a.kind=m,a.seat=S,a.token=T,o=e.get(S+"-"+T),o?.classList.add("movie-react"),s.textContent=A,s.dataset.kind=m,s.hidden=!1}function v(m){let S=n(),T=performance.now();if(!m||!S?.game||["celebration","done"].includes(S.game.phase)||!r.allow(m,T,!!a))return!1;let A=f(m.kind,T);return A?(u(),a={...m,started:T,room:S.code,revision:S.game.revision,duration:m.kind==="capture"?4400:2300},x(m.kind,m.seat,m.token,A),g(50,40),!0):!1}function g(m,S){s.style.left=Math.max(27,Math.min(73,m))+"%",s.style.top=Math.max(27,Math.min(70,S))+"%"}function p(m){if(!a)return;let S=n(),T=m-a.started;if(!S?.game||S.code!==a.room||S.game.revision<a.revision||["celebration","done"].includes(S.game.phase)||T>=a.duration){u();return}if(a.kind==="capture"&&T>=2500){let A=f("boast",m);if(!A){u();return}x("boast",a.winner.seat,a.winner.token,A)}if(i.dataset.renderer!=="webgl"&&o){let A=i.getBoundingClientRect(),_=o.getBoundingClientRect();A.width&&A.height&&g((_.x+_.width/2-A.x)/A.width*100,(_.y-A.y)/A.height*100)}}function b(m){return a&&a.seat===m.seat&&a.token===m.token}function M(m,S){if(!b(m)||t.matches)return;let T=(S-a.started)/1e3;if(a.kind==="capture"&&T<1.35)return;let A=a.kind==="boast"?T-2.5:T,_=Math.max(0,Math.min(1,A/.18,(a.duration/1e3-T)/.3));a.kind==="chase"?(m.head.rotation.y+=Math.sin(Math.min(1,A/.5)*Math.PI/2)*.85*_,m.eyes.scale.y=1+.3*_,m.arms.forEach((E,R)=>E.rotation.z=(R?1:-1)*.9*_),m.body.position.y+=Math.max(0,Math.sin(A*9))*.07*_):a.kind==="nearMiss"?(m.head.rotation.z=Math.sin(A*5)*.16*_,m.arms.forEach((E,R)=>E.rotation.z=(R?1:-1)*1.2*_)):a.kind==="noMove"?(m.head.rotation.x+=.22*_,m.head.rotation.z=-.18*_,m.arms[1].rotation.z=2.65*_):a.kind==="boast"?(m.body.rotation.x=-.14*_,m.head.rotation.x-=.1*_,m.arms.forEach((E,R)=>E.rotation.z=(R?1:-1)*.8*_),m.body.scale.set(1+.06*_,1+.03*_,1)):(m.arms.forEach((E,R)=>E.rotation.z=(R?1:-1)*2.2*_),m.head.rotation.z=-.2*_)}return{start:v,reset:d,clear:u,update:p,pose:M,matches:b,anchor:g,observeRoll:r.observeRoll,victoryLine(m){return m!==c&&(c=m,h=f("victory",performance.now())||"\u0D15\u0D3E\u0D1F\u0D3F\u0D28\u0D4D\u0D31\u0D46 \u0D1A\u0D3E\u0D2E\u0D4D\u0D2A\u0D4D\u0D2F\u0D7B! \u{1F3C6}"),h},snapshot:()=>a?{kind:a.kind,seat:a.seat,token:a.token,text:s.textContent,reducedMotion:t.matches}:null,dispose(){d(),s.remove()}}}function Zh(i,e="#64b85d"){let t=ka(i)||ka("bear"),{fur:n,dark:s,cream:r}=t,a=(f,u,d,x,v)=>`<ellipse cx="${f}" cy="${u}" rx="${d}" ry="${x}" fill="${v}"/>`,o="",l="",c="";for(let f of[-1,1]){let u=f*.27;i==="rabbit"?o+=a(f*.18,-.85,.105,.32,n)+a(f*.18,-.87,.055,.23,"#eeadad"):i==="fox"||i==="raccoon"?o+=`<path d="M${u-f*.12} -.6L${u+f*.07} -.95L${u+f*.13} -.53" fill="${n}" stroke="${s}" stroke-width=".025"/>`:o+=a(u,-.68,i==="monkey"?.19:.15,.15,i==="panda"?s:n)+a(u,-.68,.085,.085,i==="monkey"?r:"#d39b7d")}i==="deer"&&(o+='<path d="M-.2 -.7L-.27 -1.05M-.27 -.91L-.43 -1M-.27 -.91L-.18 -1.03M.2 -.7L.27 -1.05M.27 -.91L.43 -1M.27 -.91L.18 -1.03" stroke="#845c34" stroke-width=".065" fill="none" stroke-linecap="round"/>'),(i==="fox"||i==="raccoon")&&(c=`<path d="M.2 .09Q.7 .12.52 -.32" stroke="${n}" stroke-width=".19" fill="none" stroke-linecap="round"/><path d="M.48 -.23L.52 -.32" stroke="${i==="fox"?r:s}" stroke-width=".18" stroke-linecap="round"/>`),i==="monkey"&&(c=`<path d="M.2 .08Q.68 .25.58 -.2Q.49 -.34.4 -.17" stroke="${n}" stroke-width=".075" fill="none" stroke-linecap="round"/>`),i==="rabbit"&&(c=a(.28,.12,.13,.13,r)),i==="panda"&&(l=a(-.14,-.48,.115,.14,s)+a(.14,-.48,.115,.14,s)),i==="raccoon"&&(l=`<path d="M-.31 -.57Q0 -.65.31 -.57L.3 -.4Q0 -.32-.3 -.4Z" fill="${s}"/>`),i==="monkey"&&(l=a(-.13,-.48,.17,.19,r)+a(.13,-.48,.17,.19,r)),i==="tiger"&&(l=`<path d="M-.16 -.73L-.1 -.58M0 -.76V-.59M.16 -.73L.1 -.58M-.32 -.5L-.23 -.46M.32 -.5L.23 -.46" stroke="${s}" stroke-width=".05" stroke-linecap="round"/>`);let h=i==="rabbit"?'<rect x="-.07" y="-.27" width=".14" height=".12" rx=".025" fill="white"/><path d="M0 -.27V-.16" stroke="#ba988d" stroke-width=".015"/>':"";return`<g class="animal-stride">${c}${o}<g class="animal-body"><rect x="-.29" y="-.24" width=".58" height=".47" rx=".15" fill="${e}" stroke="#493f24" stroke-width=".035"/><rect x=".19" y="-.27" width=".17" height=".37" rx=".07" fill="#927344"/><path d="M-.18 -.25L.15 .12" stroke="#eac980" stroke-width=".055"/>${a(-.27,-.03,.085,.13,n)}<ellipse class="animal-foot foot-left" cx="-.17" cy=".2" rx=".12" ry=".09" fill="${s}"/><ellipse class="animal-foot foot-right" cx=".17" cy=".2" rx=".12" ry=".09" fill="${s}"/></g><g class="animal-head">${a(0,-.46,.34,.3,n)}${l}${a(0,-.32,.19,.13,r)}<g class="animal-eyes">${a(-.13,-.48,.046,.063,"#222a20")}${a(.13,-.48,.046,.063,"#222a20")}${a(-.14,-.5,.015,.015,"white")}${a(.12,-.5,.015,.015,"white")}</g>${a(0,-.33,.058,.042,"#35291e")}<path d="M0 -.31V-.27Q-.07 -.22-.1 -.28M0 -.27Q.07 -.22.1 -.28" stroke="#614735" stroke-width=".025" fill="none" stroke-linecap="round"/>${h}${a(-.23,-.35,.046,.025,"#ef8d76")}${a(.23,-.35,.046,.025,"#ef8d76")}</g></g>`}var vf="https://ludoloop.pythonanywhere.com",ae=i=>document.getElementById(i),rs=["#df5e49","#64b85d","#e9b13e","#409acb"],hc=["Bear","Panda","Deer","Fox"],Rr=i=>br(ft?.seats[i],i),Ir="http://www.w3.org/2000/svg",Mf=[{kind:"jump",label:"Jump",icon:"\u{1F43E}",wireText:"Nice move! \u2728"},{kind:"dance",label:"Dance",icon:"\u{1F483}",wireText:"Oops! \u{1F648}"},{kind:"wave",label:"Wave",icon:"\u{1F44B}",wireText:"Let\u2019s go! \u{1F680}"}],Cs=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Yn,ft=null,Dn=-1,Ga="",yn=null,oc=null,ls=!1,ff,pf=0,Jh=!0,as=!1,ci,mf,Va=null,Er=null,uc=0,Ps=0,Wa="create",Cr="bear",Di=null,dc=0,Qh,ey=new URLSearchParams(location.search),fc=(ey.get("room")||"").toUpperCase();try{ae("name").value=localStorage.getItem("ludo-name")||"Player",as=localStorage.getItem("ludo-sound")==="on",fc&&(yn=JSON.parse(localStorage.getItem("ludo-session-"+fc)||"null"))}catch{}function hi(i){ae("toast").textContent=i,ae("toast").hidden=!1,clearTimeout(mf),mf=setTimeout(()=>{ae("toast").hidden=!0},3800)}function Ls(i){if(as)try{if(ci??=new(window.AudioContext||window.webkitAudioContext),ci.resume(),i==="capture"){[[0,190,720,.24],[.24,950,150,.09]].forEach(([t,n,s,r])=>{let a=ci.createOscillator(),o=ci.createGain(),l=ci.currentTime+t;a.type="sine",a.frequency.setValueAtTime(n,l),a.frequency.exponentialRampToValueAtTime(s,l+r),o.gain.setValueAtTime(.001,l),o.gain.linearRampToValueAtTime(.045,l+.015),o.gain.exponentialRampToValueAtTime(.001,l+r),a.connect(o),o.connect(ci.destination),a.onended=()=>{a.disconnect(),o.disconnect()},a.start(l),a.stop(l+r+.02)});return}(i==="win"?[523,659,784,1047]:[240,310,370]).forEach((t,n)=>{let s=ci.createOscillator(),r=ci.createGain();s.type="sine",s.frequency.value=t;let a=ci.currentTime+n*.09;r.gain.setValueAtTime(.035,a),r.gain.exponentialRampToValueAtTime(.001,a+.16),s.connect(r),r.connect(ci.destination),s.start(a),s.stop(a+.17)})}catch{}}function Sf(){ae("sound").classList.toggle("active",as),ae("sound").setAttribute("aria-label",as?"Disable sound":"Enable sound"),ae("sound").setAttribute("aria-pressed",String(as))}Sf();ae("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{hi("Fullscreen is unavailable in this browser.")}};ae("sound").onclick=()=>{as=!as;try{localStorage.setItem("ludo-sound",as?"on":"off")}catch{}Sf(),Ls("roll")};function Un(i){return Yn?.readyState!==WebSocket.OPEN?(hi("Reconnecting to the table. One moment\u2026"),!1):(Yn.send(JSON.stringify(i)),!0)}var Is=lf({send:Un,identity:()=>({id:Ga,seat:Dn}),notify:hi});window.ludoVoice={snapshot:()=>Is.diagnostics(),stats:()=>Is.stats()};function bf(){clearTimeout(ff);let i=new WebSocket(af(vf,location.href));Yn=i,i.onopen=()=>{i===Yn&&(pf=0,ae("connection-text").textContent="Ready to play",document.querySelector(".connection").classList.add("online"),yn?.token?Un({type:"resume",code:yn.code,token:yn.token}):oc&&(Un(oc),oc=null),qn())},i.onmessage=e=>{if(i!==Yn)return;let t=JSON.parse(e.data);if(t.type==="capabilities")dc=t.characterVersion||0,pc(),Ds();else if(t.type==="room-options")Wa==="join"&&t.code===ae("room-input").value.trim().toUpperCase()&&(Di=t,Ds(),qn());else if(t.type==="joined"){mc=!0,yn={code:t.code,token:t.token,seat:t.seat,id:t.id,shareBase:t.shareBase},Dn=t.seat,Ga=t.id,ls=!1,Is.connected(t.voiceVersion);try{localStorage.setItem("ludo-session-"+t.code,JSON.stringify(yn))}catch{}history.replaceState({},"",location.pathname+"?room="+t.code)}else if(t.type.startsWith("voice-"))Is.receive(t);else if(t.type==="state")ny(t.room),ft=t.room,Ps=ft.serverTime-Date.now(),oy(),ay();else if(t.type==="error"){if(ls=!1,!ft&&yn){try{localStorage.removeItem("ludo-session-"+yn.code)}catch{}yn=null}hi(t.message),pc(),qn()}else if(t.type==="emote"){let n=Mf.find(s=>s.wireText===t.text);n&&di?.celebrate(t.seat,n.kind),hi((ft?.seats[t.seat]?.name||"Player")+": "+(n?n.icon+" "+n.label+"!":t.text)),Ls("emote")}else if(t.type==="left"){if(Is.leave(),yn)try{localStorage.removeItem("ludo-session-"+yn.code)}catch{}ft=null,yn=null,Dn=-1,Ga="",Va=null,Er=null,Af({game:null}),mc=!0,ae("welcome").hidden=!1,ae("room-screen").hidden=!0,ae("mobile-dock").hidden=!0,document.body.classList.remove("playing"),history.replaceState({},"",location.pathname),gc("create"),qn()}},i.onclose=e=>{i===Yn&&(Is.disconnect(),ae("connection-text").textContent="Reconnecting\u2026",document.querySelector(".connection").classList.remove("online"),e.code===4001&&(Jh=!1,hi("This player session is open in another tab.")),e.code===1008&&(Jh=!1,ae("connection-text").textContent="Connection blocked",hi("The server blocked this connection. Check the allowed website address or reload to try again.")),Jh&&(ff=setTimeout(bf,Math.min(5e3,800*++pf))),qn())},i.onerror=()=>{}}function gc(i){Wa=i,ae("create-tab").classList.toggle("selected",i==="create"),ae("join-tab").classList.toggle("selected",i==="join"),ae("join-field").hidden=i!=="join",ae("begin").innerHTML=i==="join"?"Pull up a seat <span>\u2192</span>":"Make some room <span>\u2192</span>",Di=null,Ds(),pc()}function pc(){if(clearTimeout(Qh),ft||ls||yn||!dc||Yn?.readyState!==WebSocket.OPEN)return;let i=Wa==="join"?ae("room-input").value.trim().toUpperCase():"";Un({type:"room-options",code:i})}function Ds(){let i=new Map((Di?.seats||[]).filter(Boolean).map(e=>[e.character,e.name]));i.has(Cr)&&(Cr=tc.find(e=>!i.has(e.id))?.id||""),ae("character-options").innerHTML=tc.map(e=>{let t=i.get(e.id),n=e.id===Cr;return'<button type="button" class="character-choice'+(n?" selected":"")+'" data-character="'+e.id+'" aria-pressed="'+n+'" '+(t||ls||!dc?"disabled":"")+'><svg viewBox="-.65 -1.22 1.3 1.6" aria-hidden="true">'+Zh(e.id)+"</svg><span>"+e.name+"</span><small>"+(t?"Taken":n?"Selected":"Choose")+"</small></button>"}).join(""),ae("character-hint").textContent=dc?Di?.missing?"Room not found. Check your code.":Di?.started?"This race has started. Join a fresh room.":i.size===4?"This room is full. Create a new room.":i.size?"Taken characters belong to this room\u2019s players.":"One character per player. Find your forest favourite.":"Character choices are getting ready. You can still play with the current crew."}ae("character-options").onclick=i=>{let e=i.target.closest("[data-character]");!e||e.disabled||(Cr=e.dataset.character,Ds())};Ds();ae("create-tab").onclick=()=>gc("create");ae("join-tab").onclick=()=>gc("join");fc&&(gc("join"),ae("room-input").value=fc);function xc(i=!1){if(ls)return;let e=ae("name").value.trim()||"Player";try{localStorage.setItem("ludo-name",e)}catch{}let t=i||Wa==="create"?{type:"create",name:e,mode:i?"solo":"friends",character:Cr}:{type:"join",name:e,code:ae("room-input").value.trim().toUpperCase(),character:Cr};if(t.type==="join"&&!/^[A-Z2-9]{6}$/.test(t.code)){hi("Enter the six-character room code."),ae("room-input").focus();return}ls=!0,qn(),Yn?.readyState===WebSocket.OPEN?Un(t):oc=t}ae("begin").onclick=()=>xc();ae("solo").onclick=()=>xc(!0);ae("room-input").addEventListener("keydown",i=>{i.key==="Enter"&&xc()});ae("name").addEventListener("keydown",i=>{i.key==="Enter"&&xc()});ae("room-input").addEventListener("input",()=>{ae("room-input").value=ae("room-input").value.toUpperCase().replace(/[^A-Z0-9]/g,""),Di=null,Ds(),clearTimeout(Qh),Qh=setTimeout(pc,350)});function qn(){if(ae("begin").disabled=ls||!!(Wa==="join"&&(Di?.started||Di?.missing||Di?.seats?.filter(Boolean).length===4)),ae("solo").disabled=ls,Ds(),!ft?.game)return;let i=ft.game,e=Date.now()+Ps>=(i.giftUntil||0),t=e&&!ui&&i.turn===Dn&&i.phase==="roll"&&Yn?.readyState===WebSocket.OPEN&&Date.now()>=uc;ae("roll").disabled=!t,ae("dice").disabled=!t,document.querySelectorAll("[data-seat-dice]").forEach(s=>{s.disabled=!(t&&Number(s.dataset.seatDice)===Dn)});let n=e&&!ui&&i.turn===Dn&&i.phase==="move"&&Date.now()>=uc&&Yn?.readyState===WebSocket.OPEN;ae("mobile-roll").disabled=!(t||n),ae("mobile-dice").disabled=!t}async function wf(i,e){try{await navigator.clipboard.writeText(i)}catch{let t=document.createElement("textarea");t.value=i,t.className="sr-only",document.body.append(t),t.select();let n=document.execCommand("copy");if(t.remove(),!n){window.prompt("Copy this invite",i);return}}hi(e)}ae("copy-code").onclick=()=>ft&&wf(ft.code,"Room code copied. Bring your crew!");ae("copy-link").onclick=()=>{ft&&wf(of(ft.code,vf,location.href,yn?.shareBase),"Invite link copied. Send it to your friends!")};ae("leave").onclick=()=>{ft?.game&&ft.game.phase!=="done"&&!window.confirm("Leave this race? Your tokens will leave the board.")||Un({type:"leave"})};ae("rules-button").onclick=()=>ae("rules-dialog").showModal();ae("close-rules").onclick=ae("got-it").onclick=()=>ae("rules-dialog").close();ae("rules-dialog").onclick=i=>{if(i.target===ae("rules-dialog")){let e=i.target.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&i.target.close()}};document.querySelector(".emotes").innerHTML=Mf.map((i,e)=>'<button type="button" class="emote-action" data-emote="'+e+'" title="'+i.label+' with your explorers" aria-label="'+i.label+' with my characters"><span aria-hidden="true">'+i.icon+"</span><span>"+i.label+"</span></button>").join("");document.querySelectorAll("[data-emote]").forEach(i=>{i.onclick=()=>{!ft||!Un({type:"emote",index:Number(i.dataset.emote)})||(document.querySelectorAll("[data-emote]").forEach(e=>e.disabled=!0),setTimeout(()=>document.querySelectorAll("[data-emote]").forEach(e=>e.disabled=!1),2050))}});function _c(){ft?.game&&!ae("roll").disabled&&Un({type:"roll",revision:ft.game.revision})}ae("roll").onclick=ae("dice").onclick=_c;ae("mobile-dice").onclick=_c;ae("mobile-roll").onclick=()=>{ft?.game?.phase==="move"?ae("board").scrollIntoView({behavior:"smooth",block:"center"}):_c()};function Tf(i=""){return'<defs><radialGradient id="'+i+'canopy"><stop stop-color="#92c63f"/><stop offset=".48" stop-color="#41953a"/><stop offset="1" stop-color="#155d39"/></radialGradient><linearGradient id="'+i+'bark" x2="1" y2=".1"><stop stop-color="#4d3624"/><stop offset=".5" stop-color="#977044"/><stop offset="1" stop-color="#503d28"/></linearGradient><radialGradient id="'+i+'forest-floor"><stop stop-color="#81a943"/><stop offset=".65" stop-color="#417637"/><stop offset="1" stop-color="#174b35"/></radialGradient><linearGradient id="'+i+'stream" x2="1" y2=".3"><stop stop-color="#145968"/><stop offset=".4" stop-color="#24b6ba"/><stop offset=".7" stop-color="#5cdad1"/><stop offset="1" stop-color="#19758c"/></linearGradient><symbol id="'+i+'tree" viewBox="-1 -1.8 2 2.3"><ellipse cy=".29" rx=".8" ry=".22" fill="#102e2370"/><path d="M-.14 .25L-.09-1.25H.11L.18 .25Z" fill="url(#'+i+'bark)"/><path d="M0-.5L-.44-.87M.05-.7L.4-1.02" stroke="#694a2a" stroke-width=".11" stroke-linecap="round"/><g class="tree-crown"><path d="M-.79-.62Q-1.02-.86-.65-1.14Q-.85-1.54-.34-1.58Q-.01-1.97.33-1.57Q.82-1.56.72-1.15Q1.07-.82.7-.62Q.42-.33.1-.56Q-.38-.35-.79-.62Z" fill="#145635" stroke="#164329" stroke-width=".035"/><ellipse cx="-.42" cy="-1.13" rx=".43" ry=".36" fill="url(#'+i+'canopy)"/><ellipse cx=".4" cy="-1.17" rx=".4" ry=".34" fill="url(#'+i+'canopy)"/><ellipse cy="-1.4" rx=".48" ry=".37" fill="url(#'+i+'canopy)"/><ellipse cy="-.9" rx=".51" ry=".32" fill="url(#'+i+'canopy)"/><path d="M-.59-1.28Q-.47-1.42-.31-1.38M-.1-1.56Q.08-1.71.25-1.55M.34-1.18Q.57-1.33.64-1.15M-.19-.92Q.05-1.12.22-.92" stroke="#aed45c" stroke-opacity=".55" stroke-width=".045" fill="none" stroke-linecap="round"/></g></symbol><symbol id="'+i+'rock" viewBox="-.6 -.6 1.2 1"><ellipse cy=".2" rx=".52" ry=".16" fill="#163d2570"/><path d="M-.53.1L-.35-.35.06-.5.44-.22.53.16.14.29Z" fill="#687d70" stroke="#324e40" stroke-width=".035"/><path d="M-.35-.35L.06-.5.17-.15-.14.09-.53.1Z" fill="#99aa86"/><path d="M.17-.15L.44-.22.53.16.14.29-.14.09Z" fill="#50695b"/><path d="M-.35-.35L.06-.5.17-.15" stroke="#c6cdb0" stroke-width=".03" fill="none"/><path d="M-.48.13Q-.18.0-.08.24" stroke="#7aab42" stroke-width=".09" fill="none"/></symbol><symbol id="'+i+'grass" viewBox="-.4 -.5 .8 .7"><g class="grass-blades"><path d="M0 .1Q-.43-.02-.35-.36Q-.18-.19-.08.05Q-.23-.37.02-.49Q.15-.25.06.05Q.16-.28.39-.28Q.37-.04.08.1Z" fill="#407e31"/><path d="M-.05.06Q-.19-.29-.16-.32M.04.05L.02-.34M.11.06Q.24-.17.31-.21" stroke="#a0c94d" stroke-width=".025" fill="none"/></g></symbol></defs>'}function Ar(i,e,t,n=1,s="",r=0){let a=i==="tree"?n*1.15:n*.85;return'<g transform="translate('+e+" "+t+')"><g class="scenery-motion motion-'+i+'" style="--scene-delay:'+r+'s"><use class="scene-'+i+'" href="#'+s+i+'" x="'+-n/2+'" y="'+-a*.8+'" width="'+n+'" height="'+a+'"/></g></g>'}function ty(){let i='<svg viewBox="-4 -1.2 23 17.4" xmlns="'+Ir+'" aria-hidden="true">'+Tf("world-");i+='<rect x="-4" y="-1.2" width="23" height="17.4" rx="1.5" fill="url(#world-forest-floor)"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#274a32" stroke-width="1.6" fill="none"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="url(#world-stream)" stroke-width="1.12" fill="none"/><path class="world-current" d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#cffcf0" stroke-opacity=".55" stroke-width=".06" stroke-dasharray=".25 .65" fill="none"/>';for(let e of[-.88,15.95]){let t="M"+e+"-1.2Q"+(e+.28)+" 2.8 "+(e-.08)+" 5.8T"+(e-.08)+" 10.4Q"+(e+.35)+" 13 "+e+" 16.2";i+='<path d="'+t+'" stroke="#335439" stroke-width=".8" fill="none"/><path d="'+t+'" stroke="url(#world-stream)" stroke-width=".59" fill="none"/><path class="world-current" d="'+t+'" stroke="#b8fff1" stroke-width=".045" stroke-dasharray=".2 .4" fill="none" opacity=".6"/>'}for(let e=0;e<82;e++){let t=e%2,n=Math.floor(e/2),s=t?16.9+n%3*.7:-1.85-n%3*.7,r=-.4+n%14*1.23;i+=Ar("tree",s,r,1.5+e%4*.18,"world-",-(e%9)*.7)}for(let e=0;e<88;e++){let t=e%2,n=Math.floor(e/2),s=t?15.1+n%4*.92:-.18-n%4*.92,r=.15+n%15*1.06;i+=Ar(e%7===0?"rock":"grass",s,r,e%7===0?.65:.6,"world-",-e*.13)}for(let[e,t]of[[-.9,4.1],[15.95,9.4],[-.88,12.8]]){i+='<g transform="translate('+e+" "+t+') rotate(-12)"><ellipse cy=".18" rx=".98" ry=".34" fill="#123e2f70"/><rect x="-.95" y="-.29" width="1.9" height=".58" rx=".08" fill="#604529"/>';for(let n=0;n<9;n++)i+='<rect x="'+(-.91+n*.21)+'" y="-.31" width=".18" height=".55" rx=".03" fill="'+(n%2?"#ac834b":"#c3985a")+'" stroke="#59432b" stroke-width=".025"/>';i+='<path d="M-.95-.31Q0-.47.95-.31M-.95.2Q0 .1.95.2" stroke="#dfc78b" stroke-width=".055" fill="none"/><path d="M-.91-.4V.29M.9-.4V.29" stroke="#785329" stroke-width=".12"/></g>'}for(let e of[-.88,15.95]){i+='<g transform="translate('+e+' 7.2) scale(.65 1)"><path d="M-.55-.8L-.5 .55Q0 .85.5 .55L.55-.8" fill="url(#world-stream)"/>';for(let t=0;t<7;t++)i+='<path class="waterfall-line" style="--scene-delay:'+-t*.12+'s" d="M'+(-.43+t*.14)+'-.78v.75" stroke="#c1fff7" stroke-opacity=".65" stroke-width=".05" stroke-dasharray=".2 .16"/>';i+='<ellipse class="water-spray" cy=".65" rx=".7" ry=".22" fill="#d2fff7" opacity=".45"/></g>'}for(let e=0;e<25;e++){let t=e%2?15.7+e%3*.65:-.65-e%3*.65,n=.5+e%13*1.2;i+='<g transform="translate('+t+" "+n+')"><g class="forest-flower"><circle cx="-.06" r=".09" fill="#ef9b9d"/><circle cx=".06" r=".09" fill="#f1b095"/><circle cy="-.08" r=".09" fill="#ee817e"/><circle r=".055" fill="#ffe58e"/></g></g>',i+='<circle class="forest-firefly" style="--scene-delay:'+-e*.37+'s" cx="'+(t+.22)+'" cy="'+(n-.6)+'" r=".027" fill="#fff795"/>'}return i+="</svg>",i}var yc=document.createElement("div");yc.className="world-stage";yc.setAttribute("aria-hidden","true");yc.innerHTML=ty();document.querySelector(".board-shell").prepend(yc);var Ef=()=>{let i='<svg viewBox="-.2 -.2 15.4 15.4" xmlns="'+Ir+'" aria-label="Jungle adventure Ludo board" role="group"><defs>';i+='<linearGradient id="stone" x2=".3" y2="1"><stop stop-color="#fff0cb"/><stop offset=".55" stop-color="#e3cca4"/><stop offset="1" stop-color="#bca27b"/></linearGradient><linearGradient id="wood" x2=".2" y2="1"><stop stop-color="#ac783e"/><stop offset="1" stop-color="#583a22"/></linearGradient><radialGradient id="water"><stop stop-color="#67e8e8"/><stop offset="1" stop-color="#087d96"/></radialGradient>',rs.forEach((n,s)=>{i+='<linearGradient id="land-'+s+'" x2=".6" y2="1"><stop stop-color="'+n+'" stop-opacity=".85"/><stop offset="1" stop-color="'+n+'" stop-opacity=".45"/></linearGradient>',i+='<radialGradient id="fur-'+s+'" cx=".3" cy=".2" r=".9"><stop stop-color="'+["#d49350","#fffdf0","#e9b965","#ffb74e"][s]+'"/><stop offset="1" stop-color="'+["#854c28","#d9d9c8","#ac702d","#cb5420"][s]+'"/></radialGradient>'}),i+='<pattern id="ground-grain" width=".62" height=".62" patternUnits="userSpaceOnUse"><path d="M.1 .22l.06-.09.04 .08M.45 .49l.035-.09.03 .07" stroke="#e7ec9570" stroke-width=".025" fill="none"/><ellipse cx=".42" cy=".16" rx=".055" ry=".025" fill="#182f1935"/><circle cx=".15" cy=".52" r=".018" fill="#ffe8aa55"/><path d="M.32 .35h.07" stroke="#eacf8035" stroke-width=".02"/></pattern><filter id="token-shadow" x="-60%" y="-60%" width="220%" height="230%"><feDropShadow dx=".02" dy=".045" stdDeviation=".025" flood-color="#182d18" flood-opacity=".4"/></filter></defs>',i+=Tf(),i+='<path d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#0b6880" stroke-width=".52" fill="none"/><path class="river-flow" d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#7ef0e9" stroke-width=".12" stroke-dasharray=".14 .5" fill="none" opacity=".8"/>',[[0,0],[0,9],[9,9],[9,0]].forEach(([n,s],r)=>{i+='<g class="habitat"><rect x="'+(s+.18)+'" y="'+(n+.26)+'" width="5.64" height="5.64" rx="1.2" fill="#273f22"/><rect x="'+(s+.2)+'" y="'+(n+.1)+'" width="5.6" height="5.65" rx="1.2" fill="url(#land-'+r+')" stroke="#769741" stroke-width=".11"/>',i+='<rect x="'+(s+.25)+'" y="'+(n+.15)+'" width="5.5" height="5.55" rx="1.15" fill="url(#ground-grain)"/><path d="M'+(s+1.8)+" "+(n+1.9)+"Q"+(s+3)+" "+(n+2.5)+" "+(s+4.2)+" "+(n+1.9)+"M"+(s+1.9)+" "+(n+1.9)+"Q"+(s+2.4)+" "+(n+3)+" "+(s+1.9)+" "+(n+4.1)+"M"+(s+4.1)+" "+(n+1.9)+"Q"+(s+3.5)+" "+(n+3)+" "+(s+4.1)+" "+(n+4.1)+"M"+(s+1.9)+" "+(n+4.1)+"Q"+(s+3)+" "+(n+3.7)+" "+(s+4.1)+" "+(n+4.1)+'" fill="none" stroke="#efdc9640" stroke-width=".26" stroke-linecap="round"/>',i+='<path d="M'+(s+.8)+" "+(n+4.9)+" Q"+(s+3)+" "+(n+5.8)+" "+(s+5.1)+" "+(n+4.9)+'" fill="none" stroke="#ffe8a5" stroke-opacity=".16" stroke-width=".12"/>',sc[r].forEach(([a,o])=>{i+='<ellipse cx="'+o+'" cy="'+(a+.12)+'" rx=".7" ry=".43" fill="#132816" fill-opacity=".25" stroke="#f9d486" stroke-opacity=".35" stroke-width=".05"/>'});for(let[a,o,l]of[[.55,1.32,1.25],[5.35,1.38,1.1],[.48,4.3,.95],[5.5,4.8,1.3],[1.12,5.3,.8],[4.64,5.5,.82]])i+=Ar("tree",s+a,n+o,l,"",-(r+a)*.6);for(let a=0;a<15;a++){let o=s+.45+a%5*1.15,l=n+(a<5?5.6:a<10?.4:3.04);a>=10&&a%5>0&&a%5<4||(i+=Ar("grass",o,l,.43,"",-a*.3))}i+=Ar("rock",s+.84,n+3.54,.52)+Ar("rock",s+5.05,n+2.25,.49),i+='<text x="'+(s+3)+'" y="'+(n+.78)+'" text-anchor="middle" fill="#fff4c9" font-size=".26" class="yard-name">'+hc[r].toUpperCase()+" CAMP</text>";for(let a=0;a<9;a++){let o=s+.4+a%5*1.22,l=n+(a<5?5.4:.35);i+='<g transform="translate('+o+" "+l+") rotate("+a*39+')"><ellipse cx="-.08" cy="0" rx=".24" ry=".1" fill="#1e6634"/><ellipse cx=".1" cy="-.13" rx=".26" ry=".11" fill="#72a72d"/><path d="M-.3 .03L.26 -.08" stroke="#b3c84b" stroke-width=".025"/>'+(a%3===0?'<circle cx=".1" cy=".04" r=".1" fill="#f09286"/><circle cx=".1" cy=".04" r=".035" fill="#ffe27d"/>':"")+"</g>"}i+='<g transform="translate('+(s+.66)+" "+(n+3)+')"><path d="M0 .3V-.15" stroke="#704623" stroke-width=".12"/><path class="torch-flame" d="M0 -.7Q.3 -.36 0 -.1Q-.25 -.25 0 -.7" fill="#ffce58"/><circle class="torch-glow" cy="-.35" r=".4" fill="#ffb12b" opacity=".12"/></g>',i+='<g transform="translate('+(s+5.12)+" "+(n+3)+') rotate(-12)"><rect x="-.22" y="-.15" width=".44" height=".32" rx=".05" fill="url(#wood)" stroke="#e7b65e" stroke-width=".035"/><path d="M-.22 -.02H.22M0 -.15V.17" stroke="#e9bc5e" stroke-width=".045"/><circle class="treasure-glint" cy=".01" r=".055" fill="#ffef9c"/></g></g>',i+='<g transform="translate('+(s+.87)+" "+(n+4.7)+')"><ellipse cy=".13" rx=".35" ry=".14" fill="#294627"/><path d="M-.3 .12L-.23 -.15-.05 -.24.15 -.12.2 .14Z" fill="#667868" stroke="#354b35" stroke-width=".035"/><path d="M-.22 -.13L-.05 -.18.12 -.09" stroke="#9aa484" stroke-width=".045" fill="none"/><rect x=".18" y="-.07" width=".065" height=".22" rx=".02" fill="#e6d4a2"/><path class="mushroom-cap" d="M.07 -.06Q.2 -.33.35 -.06Z" fill="#e67552"/><circle cx=".19" cy="-.15" r=".025" fill="#ffefd0"/><circle cx=".27" cy="-.11" r=".02" fill="#ffefd0"/></g>'});for(let n=0;n<15;n++)for(let s=0;s<15;s++){if(!(n>=6&&n<=8||s>=6&&s<=8)||n>=6&&n<=8&&s>=6&&s<=8)continue;let r=za.findIndex(([l,c])=>l===n&&c===s),a="url(#stone)",o=!1;for(let l=0;l<4;l++)(ic[l].some(([c,h])=>c===n&&h===s)||r===l*13)&&(a=rs[l],o=!0);i+='<g class="path-tile" data-cell="'+n+","+s+'"><rect x="'+(s+.03)+'" y="'+(n+.14)+'" width=".94" height=".9" rx=".13" fill="#574b32"/><rect x="'+(s+.035)+'" y="'+(n+.03)+'" width=".93" height=".91" rx=".13" fill="'+a+'" stroke="'+(o?"#fff2ae":"#f3dfb7")+'" stroke-opacity=".5" stroke-width=".035"/><path d="M'+(s+.17)+" "+(n+.13)+"H"+(s+.65)+"M"+(s+.08)+" "+(n+.36)+"V"+(n+.64)+'" stroke="#fff6d3" stroke-opacity=".32" stroke-width=".04" stroke-linecap="round"/>',!o&&(n+s)%4===0&&(i+='<path d="M'+(s+.77)+" "+(n+.78)+'l.14 -.05-.04 .14" fill="none" stroke="#71894e" stroke-width=".045"/>'),wr.has(r)&&(i+='<text class="safe-star" x="'+(s+.5)+'" y="'+(n+.7)+'" fill="#ffdf65" stroke="#a97824" stroke-width=".017" text-anchor="middle" font-size=".59">\u2605</text>'),i+="</g>"}return["6,6 7.5,7.5 6,9","6,6 7.5,7.5 9,6","9,6 7.5,7.5 9,9","6,9 7.5,7.5 9,9"].forEach((n,s)=>{i+='<polygon points="'+n+'" fill="'+rs[s]+'" stroke="#bc9b4e" stroke-width=".065"/>'}),i+='<circle cx="7.5" cy="7.56" r=".65" fill="#453421"/><circle cx="7.5" cy="7.5" r=".6" fill="url(#wood)" stroke="#e3bf74" stroke-width=".08"/><path d="M7.13 7.26L7.28 7.39 7.5 7.08 7.72 7.39 7.87 7.26 7.79 7.68H7.21Z" fill="#ffdb56" stroke="#aa6d16" stroke-width=".035"/><path d="M7.23 7.75H7.77" stroke="#ffea9c" stroke-width=".07" stroke-linecap="round"/><g id="effects" aria-hidden="true"></g><g id="tokens"></g></svg>',i};ae("board").innerHTML=Ef();ae("preview-board").innerHTML=Ef().replaceAll('id="','id="preview-').replaceAll("url(#","url(#preview-").replaceAll('href="#','href="#preview-');var fi=new Map;function Pr(i,e,t){return t<0?sc[i][e]:t<=50?za[(i*13+t)%52].map(n=>n+.5):ic[i][t-51].map(n=>n+.5)}function tu(i,e=!1){return Zh(e?nc[i]:Rr(i).id,rs[i])}function gf(i,e,t=!1){let n=document.createElementNS(Ir,"g");n.classList.add("token","explorer-"+i),n.dataset.seat=i,n.dataset.token=e,n.style.setProperty("--idle-delay",-e*1.3-i*.7+"s"),n.innerHTML='<ellipse class="token-shadow" cy=".24" rx=".4" ry=".16" fill="#162a1d" opacity=".3"/><ellipse class="token-ring" cy=".23" rx=".43" ry=".22" fill="'+rs[i]+'" fill-opacity=".25" stroke="'+rs[i]+'" stroke-width=".035"/><g class="animal-idle" filter="url(#'+(t?"preview-":"")+'token-shadow)">'+tu(i,t)+'</g><circle cx=".28" cy=".24" r=".11" fill="#fff0c6" stroke="#665031" stroke-width=".025"/><text class="token-number" x=".28" y=".28" text-anchor="middle" fill="#493821" font-size=".12" font-weight="900">'+(e+1)+'</text><circle class="token-hit" cy="-.23" r=".53" fill="transparent"/>';let s=document.createElementNS(Ir,"g");return s.classList.add("forest-outfit"),n.append(s),n}for(let i=0;i<4;i++)for(let e=0;e<4;e++){let t=gf(i,e);fi.set(i+"-"+e,t),ae("board").querySelector("#tokens").append(t);let n=gf(i,e,!0),s=i===0&&e===0?9:i===1&&e===1?16:-1,[r,a]=Pr(i,e,s);n.setAttribute("transform","translate("+a+","+r+")"),ae("preview-board").querySelector("#preview-tokens").append(n)}var nu=new Map,Rs=matchMedia("(prefers-reduced-motion: reduce)"),mc=!0,jh="",lc=-1,$h=null,Ln=0,Ha=[],ui=!1,ac=null,cc;function Af(i){Ln++,Ha=[],ui=!1,clearTimeout(cc),Ui.reset(i.code===jh&&!!i.game&&i.game.revision>=lc),di?.resetCaptures();for(let e of fi.values())e.getAnimations().forEach(t=>t.cancel()),e.classList.remove("walking","returning","reacting","capture-prank");for(let e=0;e<4;e++)for(let t=0;t<4;t++)nu.set(e+"-"+t,i.game?.tokens[e][t]??-1);ae("winner-layer").classList.remove("waiting-flight")}function ny(i){let e=i.game;if(mc||jh!==i.code||!e||e.revision<lc){Af(i),mc=!1,jh=i.code,$h=e?.lastMove?.id??null,ac=e?.lastRoll?.id??null,lc=e?.revision??-1;return}if(lc=e.revision,e.lastRoll&&e.lastRoll.id!==ac){ac=e.lastRoll.id,clearTimeout(cc),Ui.observeRoll(e);let t=uf(e),n=Ln,s=ac;t&&(cc=setTimeout(()=>{n===Ln&&ft?.game?.lastRoll?.id===s&&!ui&&Ui.start(t)},680))}e.lastMove&&e.lastMove.id!==$h&&(clearTimeout(cc),$h=e.lastMove.id,di?.deferGift(e.lastMove.gift),Ha.push({...e.lastMove,comedy:hf(e,e.lastMove),captured:e.lastMove.captured.map(t=>({...t}))}),queueMicrotask(sy))}function Kh(i,e,t){nu.set(i+"-"+e,t);let n=fi.get(i+"-"+e),[s,r]=Pr(i,e,t);n.style.transform="translate("+r+"px,"+s+"px)",n.dataset.visualStep=t}function iy(i,e,t,n="leaf"){if(Rs.matches)return;let[s,r]=Pr(i,e,t),a=document.createElementNS(Ir,"g");a.setAttribute("transform","translate("+r+" "+s+")"),a.classList.add("landing-effect"),a.dataset.capture=String(n==="capture"),a.innerHTML='<circle r=".42" fill="none" stroke="'+(n==="capture"?"#fcb46a":"#ffdf78")+'" stroke-width=".055"/>'+Array.from({length:5},(o,l)=>'<text x="'+Math.cos(l*1.256)*.5+'" y="'+Math.sin(l*1.256)*.5+'" fill="#ffed9d" font-size=".18">'+(n==="capture"?"\u2727":"\u2726")+"</text>").join(""),ae("board").querySelector("#effects").append(a),setTimeout(()=>a.remove(),650)}async function sy(){if(ui)return;ui=!0;let i=Ln;for(qn(),os();Ha.length&&i===Ln;){let e=Ha.shift(),t=fi.get(e.seat+"-"+e.token);Ui.clear(),t.classList.add("walking"),t.classList.remove("finished"),Kh(e.seat,e.token,e.old);let n=e.old<0?[0]:Array.from({length:e.next-e.old},(r,a)=>e.old+a+1);for(let r of n){if(i!==Ln)return;let[a,o]=Pr(e.seat,e.token,r),l=Rs.matches?0:[155,175,160,130][e.seat],c=t.style.transform,h="translate("+o+"px,"+a+"px)";if(l){let f=t.animate([{transform:c},{transform:h}],{duration:l,easing:"ease-in-out"});try{await f.finished}catch{return}if(i!==Ln)return;f.cancel()}Kh(e.seat,e.token,r)}if(t.classList.remove("walking"),Ui.start(e.comedy),(e.next<=50&&wr.has((e.seat*13+e.next)%52)||e.next===ss||e.captured.length)&&iy(e.seat,e.token,e.next,e.captured.length?"capture":"leaf"),e.captured.length){di?.capture(e),Ls("capture"),t.classList.add("capture-prank"),ae("live-announcement").textContent=(ft.seats[e.seat]?.name||hc[e.seat])+" captured "+e.captured.length+" explorer"+(e.captured.length>1?"s":"")+"!";let r=performance.now(),a=e.captured.map(l=>({c:l,node:fi.get(l.seat+"-"+l.token)}));if(a.forEach(({node:l})=>l.classList.add("returning")),Rs.matches||await new Promise(l=>setTimeout(l,220)),i!==Ln)return;let o=a.map(({c:l,node:c})=>{let[h,f]=Pr(l.seat,l.token,-1);return Rs.matches?null:c.animate([{transform:c.style.transform},{transform:"translate("+f+"px,"+h+"px)"}],{duration:700,easing:"cubic-bezier(.2,.6,.35,1)",fill:"forwards"})});try{await Promise.all(o.filter(Boolean).map(l=>l.finished))}catch{return}if(i!==Ln||(a.forEach(({c:l,node:c},h)=>{Kh(l.seat,l.token,-1),o[h]?.cancel(),c.classList.remove("returning")}),Rs.matches||await new Promise(l=>setTimeout(l,Math.max(0,1350-(performance.now()-r)))),i!==Ln))return;t.classList.remove("capture-prank")}if(e.gift){Ui.clear(),di?.gift(e.gift),Ls("emote");let r=(ft.seats[e.seat]?.name||hc[e.seat])+" got the "+is[e.gift.outfit]+" outfit from the monkey!";if(ae("live-announcement").textContent=r,di||hi(r),await new Promise(a=>setTimeout(a,Rs.matches?700:3e3)),i!==Ln)return}os()}i===Ln&&(ui=!1,ae("winner-layer").classList.remove("waiting-flight"),os(),qn())}function os(){let i=ft?.game,e=new Map,t=ae("forest-gift-spots");t||(t=document.createElementNS(Ir,"g"),t.id="forest-gift-spots",t.setAttribute("aria-hidden","true"),ae("board").querySelector("#tokens").before(t));let n=i?.forestGifts&&["roll","move","waiting"].includes(i.phase)&&i.active.some(r=>i.forestGifts.counts[r]<2)?i.forestGifts.tiles:[],s=n.join(",");t.dataset.tiles!==s&&(t.dataset.tiles=s,t.innerHTML=n.map(r=>{let[a,o]=za[r];return'<g transform="translate('+(o+.5)+" "+(a+.5)+')"><circle r=".35" fill="none" stroke="#ffe38b" stroke-width=".045"/><path d="M-.13 .1Q-.2-.16.13-.2Q.22 .03-.13 .1" fill="#9fdd70"/></g>'}).join(""));for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=r+"-"+a,l=fi.get(o),c=nu.get(o)??i?.tokens[r][a]??-1,h=i?.phase==="celebration"&&i.celebration.seats.includes(r),[f,u]=Pr(r,a,h?-1:c),d=f+","+u;e.has(d)||e.set(d,[]),(c!==ss||h)&&e.get(d).push({el:l,r:f,c:u,p:c}),l.classList.toggle("finished",!h&&c===ss&&!l.classList.contains("walking")),l.classList.toggle("victory-dance",!!h);let x=h||!!ft?.seats[r]&&(!i||i.active.includes(r));l.style.opacity=x?"1":".2",l.classList.toggle("active-explorer",x&&i?.turn===r&&["roll","move","waiting"].includes(i.phase));let v=!!i&&Date.now()+Ps>=(i.giftUntil||0)&&i.turn===Dn&&r===Dn&&i.phase==="move"&&i.legal.includes(a)&&Date.now()>=uc&&Yn?.readyState===WebSocket.OPEN&&!ui;l.classList.toggle("movable",v),l.setAttribute("role","button"),l.setAttribute("tabindex",v?"0":"-1"),l.setAttribute("aria-disabled",String(!v)),l.setAttribute("aria-label",Rr(r).name+" token "+(a+1)+(c<0?" in camp":c===ss?" finished":" at step "+c)+(v?", can move":"")),l.dataset.visualStep=c;let g=i?.forestGifts?.outfits[r]?.[a],p=Number.isInteger(g)?is[g]:"";l.dataset.outfit!==p&&(l.dataset.outfit=p,l.querySelector(".forest-outfit").innerHTML=cf(g)),Number.isInteger(g)&&l.setAttribute("aria-label",l.getAttribute("aria-label")+", wearing "+is[g])}for(let r of e.values())r.forEach(({el:a,r:o,c:l},c)=>{if(a.classList.contains("walking")||a.classList.contains("returning"))return;let h=r.length>1?.17:0,f=r.length>1?c%2?h:-h:0,u=r.length>2?c<2?-h:h:0;a.style.transform="translate("+(l+f)+"px,"+(o+u)+"px)",a.classList.toggle("stacked",r.length>1)})}ae("board").addEventListener("click",i=>{let e=i.detail&&di?di.pickToken(i.clientX,i.clientY):i.target.closest(".token.movable");!ui&&e&&ft?.game&&Un({type:"move",token:Number(e.dataset.token),revision:ft.game.revision})});ae("board").addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&i.target.classList.contains("movable")&&(i.preventDefault(),i.target.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});function ry(){let i=ft.game,e=ft.owner===Ga;ae("mobile-dock").hidden=!i||i.phase==="done",document.body.classList.toggle("playing",!!i&&i.phase!=="done"),ae("players").innerHTML=ft.seats.map((t,n)=>{let s=i?.tokens[n].filter(o=>o===ss).length||0,r=i?.placements?.find(o=>o.seat===n);if(!t)return'<div class="player-card empty-seat '+Yh[n]+'"><div class="avatar">+</div><div class="player-info"><h3>Seat for a friend</h3><p>'+hc[n]+" is waiting</p>"+(e&&!i?'<button class="add-bot" data-bot="'+n+'">Add a bot</button>':"")+"</div></div>";let a=i?'<div class="player-score">'+Array.from({length:4},(o,l)=>'<i class="'+(l<s?"done":"")+'"></i>').join("")+"</div>":"";return'<div class="player-card '+Yh[n]+(i&&i.turn===n&&["roll","move","waiting"].includes(i.phase)?" active":"")+(r?" placed":"")+'"><span class="voice-indicator" data-voice-seat="'+n+'" hidden></span><div class="avatar">'+('<svg viewBox="-.6 -1.12 1.2 1.5" aria-hidden="true">'+tu(n)+"</svg>")+'</div><div class="player-info"><h3>'+Cs(t.name)+"<small>"+(n===Dn?"YOU":t.bot?"BOT":t.id===ft.owner?"HOST":"")+"</small></h3><p>"+(i?r?r.place===1?"\u{1F947} First place":"\u{1F948} Second place":i.active.includes(n)?s+" / 4 home \xB7 "+i.captures[n]+" captures":"Left the race":t.connected?"Ready for the race":"Reconnecting\u2026")+"</p>"+a+(e&&t.bot&&!i?'<button class="add-bot" data-bot="'+n+'">Remove bot</button>':"")+'</div><button class="seat-dice" data-seat-dice="'+n+'" aria-label="Roll for '+Cs(t.name)+'" disabled>'+["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"][(i?.lastRoll?.seat===n?i.lastRoll.value:1)-1]+"</button></div>"}).join(""),document.querySelectorAll("[data-seat-dice]").forEach(t=>{t.onclick=_c}),document.querySelectorAll("[data-bot]").forEach(t=>{t.onclick=()=>Un({type:"bot",seat:Number(t.dataset.bot)})}),ae("crew-count").textContent=ft.seats.filter(Boolean).length+" / 4",Is.paintPlayers()}function eu(i){let e={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},t=e[i]||e[6];ae("dice").querySelector(".pip-grid").innerHTML=Array.from({length:9},(n,s)=>'<i class="'+(t.includes(s)?"":"off")+'"></i>').join(""),ae("dice").setAttribute("aria-label","Dice showing "+(i||6))}function ay(){ae("welcome").hidden=!0,ae("room-screen").hidden=!1,ae("copy-code").innerHTML=Cs(ft.code)+" <small>\u25A3</small>",ae("you-label").textContent="YOU ARE "+Rr(Dn).name.toUpperCase(),ae("game-mode").textContent=ft.mode==="solo"?"BOT EXPEDITION":"JUNGLE EXPEDITION";let i=ft.game,e=ft.owner===Ga;if(ae("room-title").textContent=i?"Your jungle adventure.":"Gather your explorers.",ry(),ae("turn-controls").hidden=!i,ae("lobby-controls").hidden=!!i,!i){ae("lobby-controls").innerHTML='<div class="eyebrow">PULL UP A SEAT</div><h2 class="lobby-title">Gather your<br>expedition.</h2><p class="lobby-help">Share your room code or invite link. Everyone joins from their own device.</p><div class="lobby-illustration">\u{1F3B2}</div><div class="lobby-steps"><span>1</span>Invite up to three friends.</div><div class="lobby-steps"><span>2</span>Fill any empty seats with bots.</div>'+(e?'<button id="start-game" class="primary" '+(ft.seats.filter(Boolean).length<2?"disabled":"")+">Start the race <span>\u2192</span></button>":'<p class="lobby-wait">Waiting for the host to start the race.</p>'),ae("start-game")&&(ae("start-game").onclick=()=>Un({type:"start"})),ae("activity-log").innerHTML="<p>Your table is ready. Invite the crew!</p><p>At least two players are needed to start.</p>",ae("winner-layer").hidden=!0,os();return}ae("activity-log").innerHTML=i.messages.slice(0,5).map(r=>"<p>"+Cs(r)+"</p>").join("");let t=ft.seats[i.turn],n=i.turn===Dn;if(ae("mobile-turn").textContent=n?"Your turn":(t?.name||"Player")+" is up",ae("mobile-help").textContent=i.phase==="move"?n?"Choose a glowing token":"Waiting for a move":i.phase==="waiting"?"No legal move":n?"Ready for your next roll":"Waiting for the roll",ae("mobile-roll").textContent=n?i.phase==="move"?"Pick token \u2191":"Roll \u2197":"Waiting\u2026",ae("mobile-dice").textContent=i.lastRoll?.value||6,ae("turn-tag").textContent=i.phase==="done"?"A CHAMPION IS HERE":n?"YOUR TURN":Rr(i.turn).name.toUpperCase()+"\u2019S TURN",ae("turn-name").textContent=i.phase==="done"?"What a race!":n?"Let\u2019s roll, "+(t?.name||"friend")+".":(t?.name||"Player")+" is up.",ae("turn-help").textContent=i.phase==="done"?"A rematch is always a good idea.":i.phase==="move"?n?"Choose a glowing token on the board.":"Waiting for a token move.":i.phase==="waiting"?"No legal move. Passing the dice\u2026":n?"Roll the dice. Make your next move.":"The dice belong to "+(t?.name||"Player")+".",ae("roll").innerHTML=i.phase==="done"?"Race complete <span>\u2661</span>":i.phase==="move"?n?"Pick a glowing token <span>\u2197</span>":"Waiting for a move\u2026":n?"Roll the dice <span>\u2197</span>":"Waiting for the roll\u2026",i.lastRoll?(eu(i.lastRoll.value),ae("last-roll").textContent=(ft.seats[i.lastRoll.seat]?.name||"Player")+" rolled a "+i.lastRoll.value+".",Va!==null&&Va!==i.lastRoll.id&&(uc=Date.now()+650,ae("dice").classList.remove("rolling"),ae("dice").offsetWidth,ae("dice").classList.add("rolling"),document.querySelectorAll(".player-card.active .seat-dice").forEach(r=>r.classList.add("rolling")),fi.forEach(r=>{Number(r.dataset.seat)===i.lastRoll.seat&&(r.classList.add("reacting"),setTimeout(()=>r.classList.remove("reacting"),670))}),Ls("roll"),setTimeout(()=>{ae("dice").classList.remove("rolling"),qn(),os()},670)),Va=i.lastRoll.id):(Va=null,eu(6),ae("last-roll").textContent="Your lucky streak starts here."),ae("live-announcement").textContent=i.messages[0],i.phase==="celebration")ae("turn-tag").textContent=i.celebration.final?"TWO WINNERS!":"FIRST PLACE!",ae("turn-name").textContent=i.celebration.final?"The winners take the stage.":i.placements[0].name+" takes a bow!",ae("turn-help").textContent=i.celebration.final?"20 seconds of victory dancing. The race is complete.":"A 15-second dance, then the race for second place continues.",ae("mobile-turn").textContent=ae("turn-tag").textContent,ae("mobile-help").textContent="Enjoy the victory dance",ae("mobile-roll").textContent="Dancing\u2026",ae("roll").textContent="Victory dance\u2026",ae("winner-layer").hidden=!1,ae("winner-layer").classList.add("dance-banner"),ae("winner-layer").classList.remove("waiting-flight"),ae("winner-layer").innerHTML='<div class="winner-tag">'+(i.celebration.final?"\u{1F947} + \u{1F948} VICTORY PARTY":"\u{1F947} FIRST PLACE")+"</div><h2>"+(i.celebration.final?"Our jungle winners!":Cs(i.placements[0].name)+" wins!")+'</h2><p id="victory-quip"></p><p><span id="dance-countdown"></span> \xB7 '+(i.celebration.final?"Final celebration":"Second place up next")+"</p>",Er!==i.celebration.startedAt&&(Er=i.celebration.startedAt,_f(),Ls("win"));else if(i.phase==="done"){let r=i.placements?.[0]?.name||ft.seats[i.winner]?.name||"Player";ae("winner-layer").hidden=!1,ae("winner-layer").classList.remove("dance-banner"),ae("winner-layer").classList.toggle("waiting-flight",ui||Ha.length>0);let a=(i.placements||[]).map(o=>"<li>"+(o.place===1?"\u{1F947} First":"\u{1F948} Second")+" \u2014 "+Cs(o.name)+"</li>").join("");ae("winner-layer").innerHTML='<div class="winner-tag">JUNGLE CHAMPION</div><div class="trophy">\u{1F3C6}</div><h2>'+Cs(r)+' wins!</h2><ol class="standings">'+a+"</ol><p>Same crew, another race?</p>"+(e?'<button id="rematch" class="primary">One more game <span>\u2192</span></button>':"<p>Waiting for the host to start a rematch.</p>"),ae("rematch")&&(ae("rematch").onclick=()=>Un({type:"rematch"})),Er!==i.winner&&(Er=i.winner,_f(),Ls("win"))}else ae("winner-layer").hidden=!0,Er=null;qn(),os(),Cf()}var xf=0;function Cf(){if(Ui.update(performance.now()),!ft?.game)return;let i=ft.game;i.giftUntil&&xf!==i.giftUntil&&Date.now()+Ps>=i.giftUntil&&(xf=i.giftUntil,qn(),os());let e=Math.max(0,Math.ceil((i.deadline-Date.now()-Ps)/1e3));if(ae("dance-countdown")&&(ae("dance-countdown").textContent=e+"s"),i.phase==="celebration"&&ae("victory-quip")){let n=Math.max(0,Date.now()+Ps-i.celebration.startedAt),s=[Ui.victoryLine(i.celebration.startedAt),"Oops\u2026 stuck the landing! \u{1F938}","Keep up, jungle crew! \u{1F609}","Victory looks good on us! \u2728"];ae("victory-quip").textContent=s[Math.min(s.length-1,Math.floor(n/3500))]}ae("timer").textContent=i.phase==="done"?"":e+"s";let t=i.phase==="celebration"?(i.celebration.endsAt-i.celebration.startedAt)/1e3:45;ae("timer-fill").style.width=(i.phase==="done"?0:Math.min(100,e/t*100))+"%"}setInterval(Cf,250);function _f(){ae("confetti").innerHTML="";for(let i=0;i<70;i++){let e=document.createElement("i");e.style.left=Math.random()*100+"%",e.style.background=rs[i%4],e.style.animationDelay=Math.random()*.65+"s",e.style.animationDuration=2+Math.random()*1.5+"s",ae("confetti").append(e)}setTimeout(()=>{ae("confetti").innerHTML=""},4500)}os();eu(6);var Ui=df({board:ae("board"),tokenNodes:fi,reduced:Rs,getRoom:()=>ft});function Rf(){return rf({board:ae("board"),tokenNodes:fi,comedy:Ui,getRoom:()=>ft,getSeat:()=>Dn,getServerTime:()=>Date.now()+Ps,colors:rs,track:za,lanes:ic,yards:sc,safe:wr})}var di=Rf(),yf=nc.join(",");function oy(){let i=[0,1,2,3].map(e=>Rr(e).id).join(",");if(i!==yf){yf=i;for(let e=0;e<4;e++)for(let t=0;t<4;t++)fi.get(e+"-"+t).querySelector(".animal-idle").innerHTML=tu(e);ae("board").querySelectorAll(".yard-name").forEach((e,t)=>e.textContent=Rr(t).name.toUpperCase()+" CAMP"),di?.dispose(),di=Rf()}}bf();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
