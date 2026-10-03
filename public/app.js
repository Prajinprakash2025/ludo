var vu=0,Wc=1,Mu=2;var vs=1,Su=2,pr=3,$i=0,un=1,Jt=2,ri=0,mr=1,Xc=2,qc=3,Yc=4,bu=5;var Ms=100,wu=101,Tu=102,Au=103,Eu=104,Cu=200,Ru=201,Iu=202,Pu=203,Zc=204,Jc=205,Lu=206,Du=207,Nu=208,Uu=209,Fu=210,Ou=211,Bu=212,ku=213,zu=214,go=0,xo=1,_o=2,js=3,yo=4,vo=5,Mo=6,So=7,$c=0,Vu=1,Gu=2,Wn=0,Kc=1,Qc=2,jc=3,ya=4,eh=5,th=6,nh=7;var ih=300,Ki=301,Ss=302,Ko=303,Qo=304,va=306,er=1e3,Qn=1001,bo=1002,Yt=1003,Hu=1004;var Ma=1005;var Qt=1006,jo=1007;var Qi=1008;var yn=1009,sh=1010,rh=1011,gr=1012,el=1013,Xn=1014,In=1015,qn=1016,tl=1017,nl=1018,xr=1020,ah=35902,oh=35899,lh=1021,ch=1022,Pn=1023,ei=1026,ji=1027,il=1028,sl=1029,es=1030,rl=1031;var al=1033,Sa=33776,ba=33777,wa=33778,Ta=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,Aa=37490,gl=37491,xl=37808,_l=37809,yl=37810,vl=37811,Ml=37812,Sl=37813,bl=37814,wl=37815,Tl=37816,Al=37817,El=37818,Cl=37819,Rl=37820,Il=37821,Pl=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,Ea=36285,Fl=36286;var Vr=2300,wo=2301,po=2302,Dc=2303,Nc=2400,Uc=2401,Fc=2402;var Wu=3200;var Ol=0,Xu=1,Ii="",qt="srgb",Gr="srgb-linear",Hr="linear",Tt="srgb";var mo=7680;var qu=519,Yu=512,Zu=513,Ju=514,Bl=515,$u=516,Ku=517,kl=518,Qu=519,zl=35044,ts=35048;var hh="300 es",Gn=2e3,tr=2001;function xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){let i=Wr("canvas");return i.style.display="block",i}var Gh={},nr=null;function uh(...i){let e="THREE."+i.shift();nr?nr("log",e,...i):console.log(e,...i)}function ed(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=ed(i);let e="THREE."+i.shift();if(nr)nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=ed(i);let e="THREE."+i.shift();if(nr)nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ms(...i){let e=i.join(" ");e in Gh||(Gh[e]=!0,nt(...i))}function td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nd={[go]:xo,[_o]:Mo,[yo]:So,[js]:vo,[xo]:go,[Mo]:_o,[So]:yo,[vo]:js},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=1234567,Or=Math.PI/180,ir=180/Math.PI;function bs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function yf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vf(i,e,t){return i!==e?(t-i)/(e-i):0}function Br(i,e,t){return(1-t)*i+t*e}function Mf(i,e,t,n){return Br(i,e,1-Math.exp(-t*n))}function Sf(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Af(i,e){return i+Math.random()*(e-i)}function Ef(i){return i*(.5-Math.random())}function Cf(i){i!==void 0&&(Hh=i);let e=Hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(i){return i*Or}function If(i){return i*ir}function Pf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pi={DEG2RAD:Or,RAD2DEG:ir,generateUUID:bs,clamp:gt,euclideanModulo:dh,mapLinear:yf,inverseLerp:vf,lerp:Br,damp:Mf,pingpong:Sf,smoothstep:bf,smootherstep:wf,randInt:Tf,randFloat:Af,randFloatSpread:Ef,seededRandom:Cf,degToRad:Rf,radToDeg:If,isPowerOfTwo:Pf,ceilPowerOfTwo:Lf,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Nf,normalize:on,denormalize:Ks},Ae=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ni=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*v;p<0&&(u=-u,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),M=Math.sin(b);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+v*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new L,Wh=new ni,ot=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],b=s[1],M=s[4],x=s[7],S=s[2],T=s[5],E=s[8];return r[0]=a*v+o*b+l*S,r[3]=a*p+o*M+l*T,r[6]=a*m+o*x+l*E,r[1]=c*v+h*b+f*S,r[4]=c*p+h*M+f*T,r[7]=c*m+h*x+f*E,r[2]=u*v+d*b+g*S,r[5]=u*p+d*M+g*T,r[8]=u*m+d*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cc.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cc=new ot,Xh=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uf(){let i={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gr]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var _t=Uf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,To=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Os===void 0&&(Os=Wr("canvas")),Os.width=e.width,Os.height=e.height;let s=Os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ff=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hc(s[a].image)):r.push(hc(s[a]))}else r=hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?To.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var Of=0,uc=new L,cn=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qn,s=Qn,r=Qt,a=Qi,o=Pn,l=yn,c=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=bs(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=ih;cn.DEFAULT_ANISOTROPY=1;var Pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(d+1)/2,S=(m+1)/2,T=(h+u)/4,E=(f+v)/4,y=(g+p)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new cn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xr=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,v=c*f;t[0]=u+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,kf)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Oi.crossVectors(n,Mn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Oi.crossVectors(n,Mn)),Oi.normalize(),Ha.crossVectors(Mn,Oi),s[0]=Oi.x,s[4]=Ha.x,s[8]=Mn.x,s[1]=Oi.y,s[5]=Ha.y,s[9]=Mn.y,s[2]=Oi.z,s[6]=Ha.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],b=n[3],M=n[7],x=n[11],S=n[15],T=s[0],E=s[4],y=s[8],A=s[12],I=s[1],O=s[5],W=s[9],K=s[13],B=s[2],Z=s[6],ee=s[10],ie=s[14],xe=s[3],se=s[7],ae=s[11],de=s[15];return r[0]=a*T+o*I+l*B+c*xe,r[4]=a*E+o*O+l*Z+c*se,r[8]=a*y+o*W+l*ee+c*ae,r[12]=a*A+o*K+l*ie+c*de,r[1]=h*T+f*I+u*B+d*xe,r[5]=h*E+f*O+u*Z+d*se,r[9]=h*y+f*W+u*ee+d*ae,r[13]=h*A+f*K+u*ie+d*de,r[2]=g*T+v*I+p*B+m*xe,r[6]=g*E+v*O+p*Z+m*se,r[10]=g*y+v*W+p*ee+m*ae,r[14]=g*A+v*K+p*ie+m*de,r[3]=b*T+M*I+x*B+S*xe,r[7]=b*E+M*O+x*Z+S*se,r[11]=b*y+M*W+x*ee+S*ae,r[15]=b*A+M*K+x*ie+S*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],b=l*d-c*u,M=o*d-c*f,x=o*u-l*f,S=a*d-c*h,T=a*u-l*h,E=a*f-o*h;return t*(v*b-p*M+m*x)-n*(g*b-p*S+m*T)+s*(g*M-v*S+m*E)-r*(g*x-v*T+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],b=t*o-n*a,M=t*l-s*a,x=t*c-r*a,S=n*l-s*o,T=n*c-r*o,E=s*c-r*l,y=h*v-f*g,A=h*p-u*g,I=h*m-d*g,O=f*p-u*v,W=f*m-d*v,K=u*m-d*p,B=b*K-M*W+x*O+S*I-T*A+E*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/B;return e[0]=(o*K-l*W+c*O)*Z,e[1]=(s*W-n*K-r*O)*Z,e[2]=(v*E-p*T+m*S)*Z,e[3]=(u*T-f*E-d*S)*Z,e[4]=(l*I-a*K-c*A)*Z,e[5]=(t*K-s*I+r*A)*Z,e[6]=(p*x-g*E-m*M)*Z,e[7]=(h*E-u*x+d*M)*Z,e[8]=(a*W-o*I+c*y)*Z,e[9]=(n*I-t*W-r*y)*Z,e[10]=(g*T-v*x+m*b)*Z,e[11]=(f*x-h*T-d*b)*Z,e[12]=(o*A-a*O-l*y)*Z,e[13]=(t*O-n*A+s*y)*Z,e[14]=(v*M-g*S-p*b)*Z,e[15]=(h*S-f*M+u*b)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,v=a*h,p=a*f,m=o*f,b=l*c,M=l*h,x=l*f,S=n.x,T=n.y,E=n.z;return s[0]=(1-(v+m))*S,s[1]=(d+x)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(u+m))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(p-b)*E,s[10]=(1-(u+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let c=1/a,h=1/o,f=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,t.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Gn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===tr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Gn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===tr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new L,Bn=new bt,Bf=new L(0,0,0),kf=new L(1,1,1),Oi=new L,Ha=new L,Mn=new L,Yh=new bt,Zh=new ni,wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zf=0,Jh=new L,ks=new ni,_i=new bt,Wa=new L,Rr=new L,Vf=new L,Gf=new ni,$h=new L(1,0,0),Kh=new L(0,1,0),Qh=new L(0,0,1),jh={type:"added"},Hf={type:"removed"},zs={type:"childadded",child:null},dc={type:"childremoved",child:null},kt=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new wi,n=new ni,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new ot}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Rr,Wa,this.up):_i.lookAt(Wa,Rr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),zs.child=e,this.dispatchEvent(zs),zs.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wf={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=dh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fc(a,r,e+1/3),this.g=fc(a,r,e),this.b=fc(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return _t.workingToColorSpace(tn.copy(this),e),Math.round(gt(tn.r*255,0,255))*65536+Math.round(gt(tn.g*255,0,255))*256+Math.round(gt(tn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=qt){_t.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Xa);let n=Br(Bi.h,Xa.h,t),s=Br(Bi.s,Xa.s,t),r=Br(Bi.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ht;ht.NAMES=id;var Yr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zr=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new L,yi=new L,pc=new L,vi=new L,Vs=new L,Gs=new L,eu=new L,mc=new L,gc=new L,xc=new L,_c=new Pt,yc=new Pt,vc=new Pt,Gi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),yi.subVectors(n,t),pc.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(yi),l=kn.dot(pc),c=yi.dot(yi),h=yi.dot(pc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return _c.setScalar(0),yc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_c,r.x),a.addScaledVector(yc,r.y),a.addScaledVector(vc,r.z),a}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),yi.subVectors(e,t),kn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,n),Gs.subVectors(r,n),mc.subVectors(e,n);let l=Vs.dot(mc),c=Gs.dot(mc);if(l<=0&&c<=0)return t.copy(n);gc.subVectors(e,s);let h=Vs.dot(gc),f=Gs.dot(gc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vs,a);xc.subVectors(e,r);let d=Vs.dot(xc),g=Gs.dot(xc);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gs,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return eu.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(eu,o);let m=1/(p+v+u);return a=v*m,o=u*m,t.copy(n).addScaledVector(Vs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ya.subVectors(this.max,Ir),Hs.subVectors(e.a,Ir),Ws.subVectors(e.b,Ir),Xs.subVectors(e.c,Ir),ki.subVectors(Ws,Hs),zi.subVectors(Xs,Ws),us.subVectors(Hs,Xs);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-us.z,us.y,ki.z,0,-ki.x,zi.z,0,-zi.x,us.z,0,-us.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-us.y,us.x,0];return!Mc(t,Hs,Ws,Xs,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,Hs,Ws,Xs,Ya))?!1:(Za.crossVectors(ki,zi),t=[Za.x,Za.y,Za.z],Mc(t,Hs,Ws,Xs,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new L,new L,new L,new L,new L,new L,new L,new L],zn=new L,qa=new ii,Hs=new L,Ws=new L,Xs=new L,ki=new L,zi=new L,us=new L,Ir=new L,Ya=new L,Za=new L,ds=new L;function Mc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ds.fromArray(i,r);let o=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vt=new L,Ja=new Ae,Xf=0,Kt=class extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qf=new ii,Pr=new L,Sc=new L,Ti=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Sc)),this.expandByPoint(Pr.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yf=0,En=new bt,bc=new kt,qs=new L,Sn=new ii,Lr=new ii,Xt=new L,Nt=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Sn.min,Lr.min),Sn.expandByPoint(Xt),Xt.addVectors(Sn.max,Lr.max),Sn.expandByPoint(Xt)):(Sn.expandByPoint(Lr.min),Sn.expandByPoint(Lr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),Xt.add(qs)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new L,l[y]=new L;let c=new L,h=new L,f=new L,u=new Ae,d=new Ae,g=new Ae,v=new L,p=new L;function m(y,A,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(O),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(O),o[y].add(v),o[A].add(v),o[I].add(v),l[y].add(p),l[A].add(p),l[I].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,A=b.length;y<A;++y){let I=b[y],O=I.start,W=I.count;for(let K=O,B=O+W;K<B;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let M=new L,x=new L,S=new L,T=new L;function E(y){S.fromBufferAttribute(s,y),T.copy(S);let A=o[y];M.copy(A),M.sub(S.multiplyScalar(S.dot(A))).normalize(),x.crossVectors(T,A);let O=x.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,O)}for(let y=0,A=b.length;y<A;++y){let I=b[y],O=I.start,W=I.count;for(let K=O,B=O+W;K<B;K+=3)E(e.getX(K+0)),E(e.getX(K+1)),E(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new Kt(u,h,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wc=new L,Zf=new L,Jf=new ot,Vn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wc.subVectors(n,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jf.getNormalMatrix(e),s=this.coplanarPoint(wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$f=0,Ai=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=mr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new L,Tc=new L,$a=new L,Ka=new L,Kr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tc.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub(Tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot($a),o=Ka.dot(this.direction),l=-Ka.dot($a),c=Ka.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tc).addScaledVector($a,u),d}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,b=n.y-a.y,M=n.z-a.z,x=Math.abs(l),S=Math.abs(c),T=Math.abs(h),E,y,A,I,O,W,K,B,Z,ee,ie,xe;if(x>=S&&x>=T?(A=l,W=f,Z=g,xe=m,l>=0?(E=c,y=h,I=u,O=d,K=v,B=p,ee=b,ie=M):(E=h,y=c,I=d,O=u,K=p,B=v,ee=M,ie=b)):S>=T?(A=c,W=u,Z=v,xe=b,c>=0?(E=h,y=l,I=d,O=f,K=p,B=g,ee=M,ie=m):(E=l,y=h,I=f,O=d,K=g,B=p,ee=m,ie=M)):(A=h,W=d,Z=p,xe=M,h>=0?(E=l,y=c,I=f,O=u,K=g,B=v,ee=m,ie=b):(E=c,y=l,I=u,O=f,K=v,B=g,ee=b,ie=m)),A===0)return null;let se=E/A,ae=y/A,de=1/A,We=I-se*W,R=O-ae*W,V=K-se*Z,J=B-ae*Z,_e=ee-se*xe,U=ie-ae*xe,G=_e*J-U*V,ge=We*U-R*_e,X=V*R-J*We;if(s){if(G<0||ge<0||X<0)return null}else if((G<0||ge<0||X<0)&&(G>0||ge>0||X>0))return null;let ye=G+ge+X;if(ye===0)return null;let De=de*(G*W+ge*Z+X*xe);return(ye>0?De<0:De>0)?null:this.at(De/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tu=new bt,fs=new Kr,Qa=new Ti,nu=new L,ja=new L,eo=new L,to=new L,Ac=new L,no=new L,iu=new L,io=new L,Zt=class extends kt{constructor(e=new Nt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Ac.fromBufferAttribute(f,e),a?no.addScaledVector(Ac,h):no.addScaledVector(Ac.sub(t),h))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Qa.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Qa,nu)===null||fs.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),fs.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=b,S=M;x<S;x+=3){let T=o.getX(x),E=o.getX(x+1),y=o.getX(x+2);s=so(this,m,e,n,c,h,f,T,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let b=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);s=so(this,a,e,n,c,h,f,b,M,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=b,S=M;x<S;x+=3){let T=x,E=x+1,y=x+2;s=so(this,m,e,n,c,h,f,T,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){let b=p,M=p+1,x=p+2;s=so(this,a,e,n,c,h,f,b,M,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Kf(i,e,t,n,s,r,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===$i,o),l===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ja),i.getVertexPosition(l,eo),i.getVertexPosition(c,to);let h=Kf(i,e,t,n,ja,eo,to,iu);if(h){let f=new L;Gi.getBarycoord(iu,ja,eo,to,f),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,l,c,f,new Ae)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,l,c,f,new Ae)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Gi.getNormal(ja,eo,to,u.normal),h.face=u,h.barycoord=f}return h}var Qr=class extends cn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,h=Yt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new bt,su=new bt,ro=[],ru=new ii,Qf=new bt,Dr=new Zt,Nr=new Ti,Hn=class extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),ru.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),Nr.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),su.multiplyMatrices(n,Ys),Dr.matrixWorld=su,Dr.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){let l=ro[a];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(s*this.count),s,this.count,il,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new Ti,jf=new Ae(.5,.5),ao=new L,or=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],b=r[12],M=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,m-g,S-b).normalize(),s[1].setComponents(c+a,d+h,m+g,S+b).normalize(),s[2].setComponents(c+o,d+f,m+v,S+M).normalize(),s[3].setComponents(c-o,d-f,m-v,S-M).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,d-u,m-p,S-x).normalize();else if(s[4].setComponents(c-l,d-u,m-p,S-x).normalize(),t===Gn)s[5].setComponents(c+l,d+u,m+p,S+x).normalize();else if(t===tr)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=jf.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lr=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Co=new L,Ro=new L,au=new bt,Ur=new Kr,oo=new Ti,Ec=new L,ou=new L,jr=class extends kt{constructor(e=new Nt,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Ro.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Co.distanceTo(Ro);e.setAttribute("lineDistance",new xt(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;au.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){let m=h.getX(v),b=h.getX(v+1),M=lo(this,e,Ur,l,m,b,v);M&&t.push(M)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(d),m=lo(this,e,Ur,l,v,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,p=g-1;v<p;v+=c){let m=lo(this,e,Ur,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=lo(this,e,Ur,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Co.fromBufferAttribute(o,s),Ro.fromBufferAttribute(o,r),t.distanceSqToSegment(Co,Ro,Ec,ou)>n)return;Ec.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ec);if(!(c<e.near||c>e.far))return{distance:c,point:ou.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ea=class extends cn{constructor(e=[],t=Ki,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gs=class extends cn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends cn{constructor(e,t,n=Xn,s,r,a,o=Yt,l=Yt,c,h=ei,f=1){if(h!==ei&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Io=class extends Hi{constructor(e,t=Xn,n=Ki,s,r,a=Yt,o=Yt,l,c=ei){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wi=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2));function g(v,p,m,b,M,x,S,T,E,y,A){let I=x/E,O=S/y,W=x/2,K=S/2,B=T/2,Z=E+1,ee=y+1,ie=0,xe=0,se=new L;for(let ae=0;ae<ee;ae++){let de=ae*O-K;for(let We=0;We<Z;We++){let R=We*I-W;se[v]=R*b,se[p]=de*M,se[m]=B,c.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[m]=T>0?1:-1,h.push(se.x,se.y,se.z),f.push(We/E),f.push(1-ae/y),ie+=1}}for(let ae=0;ae<y;ae++)for(let de=0;de<E;de++){let We=u+de+Z*ae,R=u+de+Z*(ae+1),V=u+(de+1)+Z*(ae+1),J=u+(de+1)+Z*ae;l.push(We,R,J),l.push(R,V,J),xe+=6}o.addGroup(d,xe,A),d+=xe,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var na=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Cn=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,v=[],p=n/2,m=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function b(){let x=new L,S=new L,T=0,E=(t-e)/n;for(let y=0;y<=r;y++){let A=[],I=y/r,O=I*(t-e)+e;for(let W=0;W<=s;W++){let K=W/s,B=K*l+o,Z=Math.sin(B),ee=Math.cos(B);S.x=O*Z,S.y=-I*n+p,S.z=O*ee,f.push(S.x,S.y,S.z),x.set(Z,E,ee).normalize(),u.push(x.x,x.y,x.z),d.push(K,1-I),A.push(g++)}v.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let I=v[A][y],O=v[A+1][y],W=v[A+1][y+1],K=v[A][y+1];(e>0||A!==0)&&(h.push(I,O,K),T+=3),(t>0||A!==r-1)&&(h.push(O,W,K),T+=3)}c.addGroup(m,T,0),m+=T}function M(x){let S=g,T=new Ae,E=new L,y=0,A=x===!0?e:t,I=x===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,p*I,0),u.push(0,I,0),d.push(.5,.5),g++;let O=g;for(let W=0;W<=s;W++){let B=W/s*l+o,Z=Math.cos(B),ee=Math.sin(B);E.x=A*ee,E.y=p*I,E.z=A*Z,f.push(E.x,E.y,E.z),u.push(0,I,0),T.x=Z*.5+.5,T.y=ee*.5*I+.5,d.push(T.x,T.y),g++}for(let W=0;W<s;W++){let K=S+W,B=O+W;x===!0?h.push(B,B+1,K):h.push(B+1,B,K),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends Cn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ia=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new L,x=new L,S=new L;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],x),d(t[T+2],S),l(M,x,S,b)}function l(b,M,x,S){let T=S+1,E=[];for(let y=0;y<=T;y++){E[y]=[];let A=b.clone().lerp(x,y/T),I=M.clone().lerp(x,y/T),O=T-y;for(let W=0;W<=O;W++)W===0&&y===T?E[y][W]=A:E[y][W]=A.clone().lerp(I,W/O)}for(let y=0;y<T;y++)for(let A=0;A<2*(T-y)-1;A++){let I=Math.floor(A/2);A%2===0?(u(E[y][I+1]),u(E[y+1][I]),u(E[y][I])):(u(E[y][I+1]),u(E[y+1][I+1]),u(E[y+1][I]))}}function c(b){let M=new L;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(b),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let b=new L;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let x=p(b)/2/Math.PI+.5,S=m(b)/Math.PI+.5;a.push(x,1-S)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){let M=a[b+0],x=a[b+2],S=a[b+4],T=Math.max(M,x,S),E=Math.min(M,x,S);T>.9&&E<.1&&(M<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,M){let x=b*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){let b=new L,M=new L,x=new L,S=new L,T=new Ae,E=new Ae,y=new Ae;for(let A=0,I=0;A<r.length;A+=9,I+=6){b.set(r[A+0],r[A+1],r[A+2]),M.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),T.set(a[I+0],a[I+1]),E.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),S.copy(b).add(M).add(x).divideScalar(3);let O=p(S);v(T,I+0,b,O),v(E,I+2,M,O),v(y,I+4,x,O)}}function v(b,M,x,S){S<0&&b.x===1&&(a[M]=b.x-1),x.x===0&&x.z===0&&(a[M]=S/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new bt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(gt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(gt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cr=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var lu=new L,cu=new L,Cc=new fh,Rc=new fh,Ic=new fh,hr=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(cu.subVectors(s[0],s[1]).add(s[0]),c=cu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Cc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,v,p),Rc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,v,p),Ic.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Rc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ic.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Cc.calc(l),Rc.calc(l),Ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ep(i,e){let t=1-i;return t*t*e}function tp(i,e){return 2*(1-i)*i*e}function np(i,e){return i*i*e}function kr(i,e,t,n){return ep(i,e)+tp(i,t)+np(i,n)}function ip(i,e){let t=1-i;return t*t*t*e}function sp(i,e){let t=1-i;return 3*t*t*i*e}function rp(i,e){return 3*(1-i)*i*i*e}function ap(i,e){return i*i*i*e}function zr(i,e,t,n,s){return ip(i,e)+sp(i,t)+rp(i,n)+ap(i,s)}var sa=class extends bn{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends bn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends bn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends bn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends bn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ei=class extends bn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y),kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(hu(o,l.x,c.x,h.x,f.x),hu(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},No=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:hr,CubicBezierCurve:sa,CubicBezierCurve3:Lo,EllipseCurve:cr,LineCurve:ra,LineCurve3:Do,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Ei,SplineCurve:oa}),Uo=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new No[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new No[s.type]().fromJSON(s))}return this}},la=class extends Uo{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new aa(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new sa(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_n=class extends la{constructor(e){super(e),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new la().fromJSON(s))}return this}};function op(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=dp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return ca(r,a,t,o,l,c,0),a}function sd(i,e,t,n,s){let r;if(s===bp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=uu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=uu(a/n|0,i[a],i[a+1],r);return r&&ur(r,r.next)&&(ua(r),r=r.next),r}function xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ur(t,t.next)||Dt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ca(i,e,t,n,s,r,a){if(!i)return;!a&&r&&xp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?cp(i,n,s,r):lp(i)){e.push(l.i,i.i,c.i),ua(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=hp(xs(i),e),ca(i,e,t,n,s,r,2)):a===2&&up(i,e,t,n,s,r):ca(xs(i),e,t,n,s,r,1);break}}}function lp(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Fr(s,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),v=Math.max(o,l,c),p=Math.max(h,f,u),m=Oc(d,g,e,t,n),b=Oc(v,p,e,t,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=m&&x&&x.z<=b;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Fr(o,h,l,f,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Fr(o,h,l,f,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&Fr(o,h,l,f,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==s&&x!==a&&Fr(o,h,l,f,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ur(n,s)&&ad(n,t,t.next,s)&&ha(n,s)&&ha(s,n)&&(e.push(n.i,t.i,s.i),ua(t),ua(t.next),t=i=s),t=t.next}while(t!==i);return xs(t)}function up(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vp(a,o)){let l=od(a,o);a=xs(a,a.next),l=xs(l,l.next),ca(a,e,t,n,s,r,0),ca(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function dp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(yp(c))}s.sort(fp);for(let r=0;r<s.length;r++)t=pp(s[r],t);return t}function fp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function pp(i,e){let t=mp(i,e);if(!t)return e;let n=od(t,i);return xs(n,n.next),xs(t,t.next)}function mp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ur(i,t))return t;do{if(ur(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&rd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ha(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&gp(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function gp(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function xp(i,e,t,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_p(s)}function _p(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Oc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Fr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rd(i,e,t,n,s,r,a,o)}function vp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Mp(i,e)&&(ha(i,e)&&ha(e,i)&&Sp(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ur(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ur(i,e){return i.x===e.x&&i.y===e.y}function ad(i,e,t,n){let s=ho(Dt(i,e,t)),r=ho(Dt(i,e,n)),a=ho(Dt(t,n,i)),o=ho(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&co(i,t,e)||r===0&&co(i,n,e)||a===0&&co(t,i,n)||o===0&&co(t,e,n))}function co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ho(i){return i>0?1:i<0?-1:0}function Mp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ha(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Sp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function od(i,e){let t=Bc(i.i,i.x,i.y),n=Bc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uu(i,e,t,n){let s=Bc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ua(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kc=class{static triangulate(e,t,n=2){return op(e,t,n)}},jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];du(e),fu(n,e);let a=e.length;t.forEach(du);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,fu(n,t[l]);let o=kc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ci=class i extends Nt{constructor(e=new _n([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:wp,M,x=!1,S,T,E,y;if(m){M=m.getSpacedPoints(h),x=!0,u=!1;let he=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,he),T=new L,E=new L,y=new L}u||(p=0,d=0,g=0,v=0);let A=o.extractPoints(c),I=A.shape,O=A.holes;if(!jn.isClockWise(I)){I=I.reverse();for(let he=0,pe=O.length;he<pe;he++){let Me=O[he];jn.isClockWise(Me)&&(O[he]=Me.reverse())}}function K(he){let Me=10000000000000001e-36,Se=he[0];for(let we=1;we<=he.length;we++){let Ze=we%he.length,qe=he[Ze],Ke=qe.x-Se.x,et=qe.y-Se.y,F=Ke*Ke+et*et,vt=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(Se.x),Math.abs(Se.y)),dt=Me*vt*vt;if(F<=dt){he.splice(Ze,1),we--;continue}Se=qe}}K(I),O.forEach(K);let B=O.length,Z=I;for(let he=0;he<B;he++){let pe=O[he];I=I.concat(pe)}function ee(he,pe,Me){return pe||st("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(pe,Me)}let ie=I.length;function xe(he,pe,Me){let Se,we,Ze,qe=he.x-pe.x,Ke=he.y-pe.y,et=Me.x-he.x,F=Me.y-he.y,vt=qe*qe+Ke*Ke,dt=qe*F-Ke*et;if(Math.abs(dt)>Number.EPSILON){let C=Math.sqrt(vt),_=Math.sqrt(et*et+F*F),q=pe.x-Ke/C,j=pe.y+qe/C,re=Me.x-F/_,be=Me.y+et/_,Ee=((re-q)*F-(be-j)*et)/(qe*F-Ke*et);Se=q+qe*Ee-he.x,we=j+Ke*Ee-he.y;let oe=Se*Se+we*we;if(oe<=2)return new Ae(Se,we);Ze=Math.sqrt(oe/2)}else{let C=!1;qe>Number.EPSILON?et>Number.EPSILON&&(C=!0):qe<-Number.EPSILON?et<-Number.EPSILON&&(C=!0):Math.sign(Ke)===Math.sign(F)&&(C=!0),C?(Se=-Ke,we=qe,Ze=Math.sqrt(vt)):(Se=qe,we=Ke,Ze=Math.sqrt(vt/2))}return new Ae(Se/Ze,we/Ze)}let se=[];for(let he=0,pe=Z.length,Me=pe-1,Se=he+1;he<pe;he++,Me++,Se++)Me===pe&&(Me=0),Se===pe&&(Se=0),se[he]=xe(Z[he],Z[Me],Z[Se]);let ae=[],de,We=se.concat();for(let he=0,pe=B;he<pe;he++){let Me=O[he];de=[];for(let Se=0,we=Me.length,Ze=we-1,qe=Se+1;Se<we;Se++,Ze++,qe++)Ze===we&&(Ze=0),qe===we&&(qe=0),de[Se]=xe(Me[Se],Me[Ze],Me[qe]);ae.push(de),We=We.concat(de)}let R;if(p===0)R=jn.triangulateShape(Z,O);else{let he=[],pe=[];for(let Me=0;Me<p;Me++){let Se=Me/p,we=d*Math.cos(Se*Math.PI/2),Ze=g*Math.sin(Se*Math.PI/2)+v;for(let qe=0,Ke=Z.length;qe<Ke;qe++){let et=ee(Z[qe],se[qe],Ze);ge(et.x,et.y,-we),Se===0&&he.push(et)}for(let qe=0,Ke=B;qe<Ke;qe++){let et=O[qe];de=ae[qe];let F=[];for(let vt=0,dt=et.length;vt<dt;vt++){let C=ee(et[vt],de[vt],Ze);ge(C.x,C.y,-we),Se===0&&F.push(C)}Se===0&&pe.push(F)}}R=jn.triangulateShape(he,pe)}let V=R.length,J=g+v;for(let he=0;he<ie;he++){let pe=u?ee(I[he],We[he],J):I[he];x?(E.copy(S.normals[0]).multiplyScalar(pe.x),T.copy(S.binormals[0]).multiplyScalar(pe.y),y.copy(M[0]).add(E).add(T),ge(y.x,y.y,y.z)):ge(pe.x,pe.y,0)}for(let he=1;he<=h;he++)for(let pe=0;pe<ie;pe++){let Me=u?ee(I[pe],We[pe],J):I[pe];x?(E.copy(S.normals[he]).multiplyScalar(Me.x),T.copy(S.binormals[he]).multiplyScalar(Me.y),y.copy(M[he]).add(E).add(T),ge(y.x,y.y,y.z)):ge(Me.x,Me.y,f/h*he)}for(let he=p-1;he>=0;he--){let pe=he/p,Me=d*Math.cos(pe*Math.PI/2),Se=g*Math.sin(pe*Math.PI/2)+v;for(let we=0,Ze=Z.length;we<Ze;we++){let qe=ee(Z[we],se[we],Se);ge(qe.x,qe.y,f+Me)}for(let we=0,Ze=O.length;we<Ze;we++){let qe=O[we];de=ae[we];for(let Ke=0,et=qe.length;Ke<et;Ke++){let F=ee(qe[Ke],de[Ke],Se);x?ge(F.x,F.y+M[h-1].y,M[h-1].x+Me):ge(F.x,F.y,f+Me)}}}_e(),U();function _e(){let he=s.length/3;if(u){let pe=0,Me=ie*pe;for(let Se=0;Se<V;Se++){let we=R[Se];X(we[2]+Me,we[1]+Me,we[0]+Me)}pe=h+p*2,Me=ie*pe;for(let Se=0;Se<V;Se++){let we=R[Se];X(we[0]+Me,we[1]+Me,we[2]+Me)}}else{for(let pe=0;pe<V;pe++){let Me=R[pe];X(Me[2],Me[1],Me[0])}for(let pe=0;pe<V;pe++){let Me=R[pe];X(Me[0]+ie*h,Me[1]+ie*h,Me[2]+ie*h)}}n.addGroup(he,s.length/3-he,0)}function U(){let he=s.length/3,pe=0;G(Z,pe),pe+=Z.length;for(let Me=0,Se=O.length;Me<Se;Me++){let we=O[Me];G(we,pe),pe+=we.length}n.addGroup(he,s.length/3-he,1)}function G(he,pe){let Me=he.length;for(;--Me>=0;){let Se=Me,we=Me-1;we<0&&(we=he.length-1);for(let Ze=0,qe=h+p*2;Ze<qe;Ze++){let Ke=ie*Ze,et=ie*(Ze+1),F=pe+Se+Ke,vt=pe+we+Ke,dt=pe+we+et,C=pe+Se+et;ye(F,vt,dt,C)}}}function ge(he,pe,Me){l.push(he),l.push(pe),l.push(Me)}function X(he,pe,Me){De(he),De(pe),De(Me);let Se=s.length/3,we=b.generateTopUV(n,s,Se-3,Se-2,Se-1);je(we[0]),je(we[1]),je(we[2])}function ye(he,pe,Me,Se){De(he),De(pe),De(Se),De(pe),De(Me),De(Se);let we=s.length/3,Ze=b.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);je(Ze[0]),je(Ze[1]),je(Ze[3]),je(Ze[1]),je(Ze[2]),je(Ze[3])}function De(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function je(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new No[s.type]().fromJSON(s)),new i(n,e.options)}},wp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ae(r,a),new Ae(o,l),new Ae(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ae(a,1-l),new Ae(c,1-f),new Ae(u,1-g),new Ae(v,1-m)]:[new Ae(o,1-l),new Ae(h,1-f),new Ae(d,1-g),new Ae(p,1-m)]}};function Tp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var da=class i extends ia{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fa=class i extends ia{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Rn=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let b=m*u-a;for(let M=0;M<c;M++){let x=M*f-r;g.push(x,-b,0),v.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let M=b+c*m,x=b+c*(m+1),S=b+1+c*(m+1),T=b+1+c*m;d.push(M,x,T),d.push(x,S,T)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var _s=class i extends Nt{constructor(e=new _n([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,g=u.holes;jn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let b=g[p];jn.isClockWise(b)===!0&&(g[p]=b.reverse())}let v=jn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let p=0,m=v.length;p<m;p++){let b=v[p],M=b[0]+f,x=b[1]+f,S=b[2]+f;n.push(M,x,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ap(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Ap(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var wn=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new L,u=new L,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let b=[],M=m/n,x=a+M*o,S=e*Math.cos(x),T=Math.sqrt(e*e-S*S),E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let A=y/t,I=s+A*r;f.x=-T*Math.cos(I),f.y=S,f.z=T*Math.sin(I),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(A+E,1-M),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let M=h[m][b+1],x=h[m][b],S=h[m+1][b],T=h[m+1][b+1];(m!==0||a>0)&&d.push(M,x,T),(m!==n-1||l<Math.PI)&&d.push(x,S,T)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ri=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new L,d=new L,g=new L;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let m=0;m<=s;m++){let b=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(b),d.y=(e+t*Math.cos(p))*Math.sin(b),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,b=(s+1)*(v-1)+p-1,M=(s+1)*(v-1)+p,x=(s+1)*v+p;l.push(m,b,x),l.push(b,M,x)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Xi=class i extends Nt{constructor(e=new Ei(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new Ae,h=new L,f=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function v(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),b(),m()}function p(M){h=e.getPointAt(M/t,h);let x=a.normals[M],S=a.binormals[M];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,y=Math.sin(E),A=-Math.cos(E);l.x=A*x.x+y*S.x,l.y=A*x.y+y*S.y,l.z=A*x.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=t;M++)for(let x=1;x<=s;x++){let S=(s+1)*(M-1)+(x-1),T=(s+1)*M+(x-1),E=(s+1)*M+x,y=(s+1)*(M-1)+x;g.push(S,T,y),g.push(T,E,y)}}function b(){for(let M=0;M<=t;M++)for(let x=0;x<=s;x++)c.x=M/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new No[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(pu(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(pu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=ws(i[t]);for(let s in n)e[s]=n[s]}return e}function pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ep(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var ld={clone:ws,merge:sn},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fo=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ys=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Oo=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Pc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=e,o=2*t-n;break;case Fc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:a=e,l=2*n-t;break;case Fc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-u*p+2*u*v-u*g,b=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*g+1,M=(-1-d)*p+(1.5+d)*v+.5*g,x=d*p-d*v;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+b*a[c+S]+M*a[l+S]+x*a[f+S];return r}},zo=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Vo=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Go=class extends qi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=d*u+g*2,b=f[m],M=f[m+1],x=e*u+g*2,S=h[x],T=h[x+1],E=Pp(n,t,b,S,s);r[g]=cd(E,v,M,T,p)}return r}};function cd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ip(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Pp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=cd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ip(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Pc(e.settings)&&(n.settings={inTangents:Zs(e.settings.inTangents,Array),outTangents:Zs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break;case Dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return po;case this.InterpolantFactoryMethodBezier:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Pc(this.settings)&&(mu(this.settings.inTangents,e),mu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){st("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&_f(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=wo;var Yi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Vr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Ho.prototype.ValueTypeName="color";var Wo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},pa=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Vr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new Yo,Zo=class{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ma=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lc=new bt,gu=new L,xu=new L,ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uo=new L,fo=new ni,Kn=new L,xa=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uo,fo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,fo,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uo,fo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,fo,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new L,_u=new Ae,yu=new Ae,ln=class extends xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,_u,yu),t.subVectors(yu,_u)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var zc=class extends ga{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},_a=class extends dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ji=class extends xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vc=class extends ga{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Vc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Js=-90,$s=1,Jo=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Js,$s,e,t);s.layers=this.layers,this.add(s);let r=new ln(Js,$s,e,t);r.layers=this.layers,this.add(r);let a=new ln(Js,$s,e,t);a.layers=this.layers,this.add(a);let o=new ln(Js,$s,e,t);o.layers=this.layers,this.add(o);let l=new ln(Js,$s,e,t);l.layers=this.layers,this.add(l);let c=new ln(Js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mh="\\[\\]\\.:\\/",Lp=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Dp="[^"+mh.replace("\\.","")+"]",Np=/((?:WC+[\/:])*)/.source.replace("WC",gh),Up=/(WCOD+)?/.source.replace("WCOD",Dp),Fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),Bp=new RegExp("^"+Np+Up+Fp+Op+"$"),kp=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(e){let t=Bp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Gc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var Hc=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function xh(i,e,t,n){let s=zp(n);switch(t){case lh:return i*e;case il:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case es:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case ch:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:case Aa:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ea:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zp(i){switch(i){case yn:case sh:return{byteLength:1,components:1};case gr:case rh:case qn:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Xn:case el:case In:return{byteLength:4,components:1};case ah:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ld(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,qm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
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
}`,g0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,v0=`#define TOON
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
}`,M0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:$p,alphamap_pars_fragment:Kp,alphatest_fragment:Qp,alphatest_pars_fragment:jp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:xm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:ym,displacementmap_pars_vertex:vm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:wm,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Em,envmap_pars_fragment:Cm,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Im,fog_vertex:Pm,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:km,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:Jm,lightprobes_pars_fragment:$m,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphinstance_vertex:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Ag,dithering_pars_fragment:Eg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ng,skinning_pars_vertex:Ug,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:kg,tonemapping_fragment:zg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:$g,backgroundCube_frag:Kg,cube_vert:Qg,cube_frag:jg,depth_vert:e0,depth_frag:t0,distance_vert:n0,distance_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:a0,linedashed_frag:o0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:x0,meshphysical_vert:_0,meshphysical_frag:y0,meshtoon_vert:v0,meshtoon_frag:M0,points_vert:S0,points_frag:b0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:E0},Ue={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},oi={basic:{uniforms:sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:sn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:sn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:sn([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:sn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:sn([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:sn([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:sn([Ue.common,Ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:sn([Ue.lights,Ue.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};oi.physical={uniforms:sn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Vl={r:0,b:0,g:0},C0=new bt,Dd=new ot;Dd.set(-1,0,0,0,1,0,0,0,1);function R0(i,e,t,n,s,r){let a=new ht(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let x=b.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(b){let M=!1,x=d(b);x===null?p(a,o):x&&x.isColor&&(p(x,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===va)?(c===void 0&&(c=new Zt(new Wi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ws(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dd),c.material.toneMapped=_t.getTransfer(x.colorSpace)!==Tt,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Zt(new Rn(2,2),new nn({name:"BackgroundMaterial",uniforms:ws(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_t.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(Vl,ph(i)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:v,dispose:m}}function I0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(O,W,K,B,Z){let ee=!1,ie=f(O,B,K,W);r!==ie&&(r=ie,c(r.object)),ee=d(O,B,K,Z),ee&&g(O,B,K,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,x(O,W,K,B),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function f(O,W,K,B){let Z=B.wireframe===!0,ee=n[W.id];ee===void 0&&(ee={},n[W.id]=ee);let ie=O.isInstancedMesh===!0?O.id:0,xe=ee[ie];xe===void 0&&(xe={},ee[ie]=xe);let se=xe[K.id];se===void 0&&(se={},xe[K.id]=se);let ae=se[Z];return ae===void 0&&(ae=u(l()),se[Z]=ae),ae}function u(O){let W=[],K=[],B=[];for(let Z=0;Z<t;Z++)W[Z]=0,K[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:B,object:O,attributes:{},index:null}}function d(O,W,K,B){let Z=r.attributes,ee=W.attributes,ie=0,xe=K.getAttributes();for(let se in xe)if(xe[se].location>=0){let de=Z[se],We=ee[se];if(We===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(We=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(We=O.instanceColor)),de===void 0||de.attribute!==We||We&&de.data!==We.data)return!0;ie++}return r.attributesNum!==ie||r.index!==B}function g(O,W,K,B){let Z={},ee=W.attributes,ie=0,xe=K.getAttributes();for(let se in xe)if(xe[se].location>=0){let de=ee[se];de===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));let We={};We.attribute=de,de&&de.data&&(We.data=de.data),Z[se]=We,ie++}r.attributes=Z,r.attributesNum=ie,r.index=B}function v(){let O=r.newAttributes;for(let W=0,K=O.length;W<K;W++)O[W]=0}function p(O){m(O,0)}function m(O,W){let K=r.newAttributes,B=r.enabledAttributes,Z=r.attributeDivisors;K[O]=1,B[O]===0&&(i.enableVertexAttribArray(O),B[O]=1),Z[O]!==W&&(i.vertexAttribDivisor(O,W),Z[O]=W)}function b(){let O=r.newAttributes,W=r.enabledAttributes;for(let K=0,B=W.length;K<B;K++)W[K]!==O[K]&&(i.disableVertexAttribArray(K),W[K]=0)}function M(O,W,K,B,Z,ee,ie){ie===!0?i.vertexAttribIPointer(O,W,K,Z,ee):i.vertexAttribPointer(O,W,K,B,Z,ee)}function x(O,W,K,B){v();let Z=B.attributes,ee=K.getAttributes(),ie=W.defaultAttributeValues;for(let xe in ee){let se=ee[xe];if(se.location>=0){let ae=Z[xe];if(ae===void 0&&(xe==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),xe==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){let de=ae.normalized,We=ae.itemSize,R=e.get(ae);if(R===void 0)continue;let V=R.buffer,J=R.type,_e=R.bytesPerElement,U=J===i.INT||J===i.UNSIGNED_INT||ae.gpuType===el;if(ae.isInterleavedBufferAttribute){let G=ae.data,ge=G.stride,X=ae.offset;if(G.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)m(se.location+ye,G.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<se.locationSize;ye++)p(se.location+ye);i.bindBuffer(i.ARRAY_BUFFER,V);for(let ye=0;ye<se.locationSize;ye++)M(se.location+ye,We/se.locationSize,J,de,ge*_e,(X+We/se.locationSize*ye)*_e,U)}else{if(ae.isInstancedBufferAttribute){for(let G=0;G<se.locationSize;G++)m(se.location+G,ae.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let G=0;G<se.locationSize;G++)p(se.location+G);i.bindBuffer(i.ARRAY_BUFFER,V);for(let G=0;G<se.locationSize;G++)M(se.location+G,We/se.locationSize,J,de,We*_e,We/se.locationSize*G*_e,U)}}else if(ie!==void 0){let de=ie[xe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(se.location,de);break;case 3:i.vertexAttrib3fv(se.location,de);break;case 4:i.vertexAttrib4fv(se.location,de);break;default:i.vertexAttrib1fv(se.location,de)}}}}b()}function S(){A();for(let O in n){let W=n[O];for(let K in W){let B=W[K];for(let Z in B){let ee=B[Z];for(let ie in ee)h(ee[ie].object),delete ee[ie];delete B[Z]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let W=n[O.id];for(let K in W){let B=W[K];for(let Z in B){let ee=B[Z];for(let ie in ee)h(ee[ie].object),delete ee[ie];delete B[Z]}}delete n[O.id]}function E(O){for(let W in n){let K=n[W];for(let B in K){let Z=K[B];if(Z[O.id]===void 0)continue;let ee=Z[O.id];for(let ie in ee)h(ee[ie].object),delete ee[ie];delete Z[O.id]}}}function y(O){for(let W in n){let K=n[W],B=O.isInstancedMesh===!0?O.id:0,Z=K[B];if(Z!==void 0){for(let ee in Z){let ie=Z[ee];for(let xe in ie)h(ie[xe].object),delete ie[xe];delete Z[ee]}delete K[B],Object.keys(K).length===0&&delete n[W]}}}function A(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function P0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function L0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==yn&&E!==In&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:T}}function D0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,M=b*4,x=m.clippingState||null;l.value=x,x=h(g,u,M,d);for(let S=0;S!==M;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=d+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=d;M!==v;++M,x+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var yr=4,N0=6,U0=20,F0=256,Ca=new Ji,ud=new ht,_h=null,yh=0,vh=0,Mh=!1,O0=new L,Ts=new L,Hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=O0}=r;_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,yh,vh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:qn,format:Pn,colorSpace:Gr,depthBuffer:!1},s=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B0(r)),this._blurMaterial=z0(r,e,t),this._ggxMaterial=k0(r,e,t)}return s}_compileMaterial(e){let t=new Zt(new Nt,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,s,r){let l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ud),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Wi,new hn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,m=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(ud),m=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;_r(s,x*S,M>2?S:0,S,S),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ki||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;_r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ca)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-yr?n-g+yr:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,_r(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(o,Ca),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,_r(e,p,m,3*v,2*v),s.setRenderTarget(e),s.render(o,Ca)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-yr?s-this._lodMax+yr:0),u=4*(this._cubeSize-h);_r(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ca)}};function B0(i){let e=[],t=[],n=i,s=i-yr+1+N0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let m=0;m<f;m++){let b=m%3*2/3-1,M=m>2?0:-1,x=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];g.set(x,d*u*m);for(let S=0;S<u;S++){let T=h[S*2]*2-1,E=h[S*2+1]*2-1;m===0?Ts.set(1,E,T):m===1?Ts.set(-T,1,-E):m===2?Ts.set(-T,E,1):m===3?Ts.set(-1,E,-T):m===4?Ts.set(-T,-1,E):Ts.set(T,E,-1),Ts.toArray(v,(m*u+S)*d)}}let p=new Nt;p.setAttribute("position",new Kt(g,d)),p.setAttribute("outputDirection",new Kt(v,d)),t.push(new Zt(p,null)),n>yr&&n--}return{lodMeshes:t,sizeLods:e}}function dd(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function k0(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function z0(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:U0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function fd(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function pd(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ql(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wl=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ea(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ri});r.uniforms.tEquirect.value=t;let a=new Zt(s,r),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Qt),new Jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function V0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ko||d===Qo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Wl(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===Ko||d===Qo,v=d===Ki||d===Ss;if(g||v){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Hl(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return g&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Hl(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Ko?u.mapping=Ki:d===Qo&&(u.mapping=Ss),u}function l(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function G0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function H0(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let b=d.array;v=d.version;for(let M=0,x=b.length;M<x;M+=3){let S=b[M+0],T=b[M+1],E=b[M+2];u.push(S,T,T,E,E,S)}}else{let b=g.array;v=g.version;for(let M=0,x=b.length/3-1;M<x;M+=3){let S=M+0,T=M+1,E=M+2;u.push(S,T,T,E,E,S)}}let p=new(g.count>=65535?$r:Jr)(u,1);p.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function W0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let p=0;p<d;p++)v+=u[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function X0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function q0(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let A=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*S*4*f),E=new Xr(T,x,S,f);E.type=In,E.needsUpdate=!0;let y=M*4;for(let I=0;I<f;I++){let O=p[I],W=m[I],K=b[I],B=x*S*4*I;for(let Z=0;Z<O.count;Z++){let ee=Z*y;d===!0&&(s.fromBufferAttribute(O,Z),T[B+ee+0]=s.x,T[B+ee+1]=s.y,T[B+ee+2]=s.z,T[B+ee+3]=0),g===!0&&(s.fromBufferAttribute(W,Z),T[B+ee+4]=s.x,T[B+ee+5]=s.y,T[B+ee+6]=s.z,T[B+ee+7]=0),v===!0&&(s.fromBufferAttribute(K,Z),T[B+ee+8]=s.x,T[B+ee+9]=s.y,T[B+ee+10]=s.z,T[B+ee+11]=K.itemSize===4?s.w:1)}}u={count:f,texture:E,size:new Ae(x,S)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Y0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Z0={[Kc]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[nh]:"NEUTRAL_TONE_MAPPING",[eh]:"CUSTOM_TONE_MAPPING"};function J0(i,e,t,n,s,r){let a=new xn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Nt;c.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xt([0,2,0,0,2,0],2));let h=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Zt(c,h),u=new Ji(-1,1,1,-1,0,1),d=null,g=null,v=!1,p,m=null,b=[],M=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let T=0;T<b.length;T++){let E=b[T];E.setSize&&E.setSize(x,S)}},this.setEffects=function(x){b=x,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,T=a.height;b.length>0&&o===null&&(o=new xn(S,T,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(S,T,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<b.length;E++){let y=b[E];y.setSize&&y.setSize(S,T)}},this.begin=function(x,S){if(v||x.toneMapping===Wn&&b.length===0)return!1;if(m=S,S!==null){let T=S.width,E=S.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return M===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=Wn,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=p,v=!0;let T=a,E=o;for(let y=0;y<b.length;y++){let A=b[y];A.enabled!==!1&&(A.render(x,E,T,S),A.needsSwap!==!1&&(T=E,E=E===o?l:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},_t.getTransfer(d)===Tt&&(h.defines.SRGB_TRANSFER="");let y=Z0[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(f,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Nd=new cn,wh=new Hi(1,1),Ud=new Xr,Fd=new Eo,Od=new ea,md=[],gd=[],xd=new Float32Array(16),_d=new Float32Array(9),yd=new Float32Array(4);function Mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yl(i,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Ht(t,n)}}function tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),Ht(t,n)}}function nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),Ht(t,n)}}function ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function ux(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?kl:Bl,r=wh):r=Nd,t.setTexture2D(e||r,s)}function dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fd,s)}function fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Od,s)}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ud,s)}function mx(i){switch(i){case 5126:return $0;case 35664:return K0;case 35665:return Q0;case 35666:return j0;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,e){i.uniform1fv(this.addr,e)}function xx(i,e){let t=Mr(e,this.size,2);i.uniform2fv(this.addr,t)}function _x(i,e){let t=Mr(e,this.size,3);i.uniform3fv(this.addr,t)}function yx(i,e){let t=Mr(e,this.size,4);i.uniform4fv(this.addr,t)}function vx(i,e){let t=Mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){let t=Mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sx(i,e){let t=Mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bx(i,e){i.uniform1iv(this.addr,e)}function wx(i,e){i.uniform2iv(this.addr,e)}function Tx(i,e){i.uniform3iv(this.addr,e)}function Ax(i,e){i.uniform4iv(this.addr,e)}function Ex(i,e){i.uniform1uiv(this.addr,e)}function Cx(i,e){i.uniform2uiv(this.addr,e)}function Rx(i,e){i.uniform3uiv(this.addr,e)}function Ix(i,e){i.uniform4uiv(this.addr,e)}function Px(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wh:a=Nd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Lx(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fd,r[a])}function Dx(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Od,r[a])}function Nx(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ud,r[a])}function Ux(i){switch(i){case 5126:return gx;case 35664:return xx;case 35665:return _x;case 35666:return yx;case 35674:return vx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Ex;case 36294:return Cx;case 36295:return Rx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}var Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function vd(i,e){i.seq.push(e),i.map[e.id]=e}function Fx(i,e,t){let n=i.name,s=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),a=Sh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vd(t,c===void 0?new Th(o,i,e):new Ah(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Eh(o),vd(t,f)),t=f}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Fx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Md(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ox=37297,Bx=0;function kx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Sd=new ot;function zx(i){_t._getMatrix(Sd,_t.workingColorSpace,i);let e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+kx(i.getShaderSource(e),o)}else return r}function Vx(i,e){let t=zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Gx={[Kc]:"Linear",[Qc]:"Reinhard",[jc]:"Cineon",[ya]:"ACESFilmic",[th]:"AgX",[nh]:"Neutral",[eh]:"Custom"};function Hx(i,e){let t=Gx[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gl=new L;function Wx(){_t.getLuminanceCoefficients(Gl);let i=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function qx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ia(i){return i!==""}function wd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(Zx,$x)}var Jx=new Map;function $x(i,e){let t=pt[e];if(t===void 0){let n=Jx.get(e);if(n!==void 0)t=pt[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ch(t)}var Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(Kx,Qx)}function Qx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jx={[vs]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function e_(i){return jx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t_={[Ki]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function n_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[Ss]:"ENVMAP_MODE_REFRACTION"};function s_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[$c]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Gu]:"ENVMAP_BLENDING_ADD"};function a_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":r_[i.combine]||"ENVMAP_BLENDING_NONE"}function o_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=e_(t),c=n_(t),h=s_(t),f=a_(t),u=o_(t),d=Xx(t),g=qx(r),v=s.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`)):(p=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?pt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=Ch(a),a=wd(a,t),a=Td(a,t),o=Ch(o),o=wd(o,t),o=Td(o,t),a=Ad(a),o=Ad(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=b+p+a,x=b+m+o,S=Md(s,s.VERTEX_SHADER,M),T=Md(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(O){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(v)||"",K=s.getShaderInfoLog(S)||"",B=s.getShaderInfoLog(T)||"",Z=W.trim(),ee=K.trim(),ie=B.trim(),xe=!0,se=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(xe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{let ae=bd(s,S,"vertex"),de=bd(s,T,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Z+`
`+ae+`
`+de)}else Z!==""?nt("WebGLProgram: Program Info Log:",Z):(ee===""||ie==="")&&(se=!1);se&&(O.diagnostics={runnable:xe,programLog:Z,vertexShader:{log:ee,prefix:p},fragmentShader:{log:ie,prefix:m}})}s.deleteShader(S),s.deleteShader(T),y=new vr(s,v),A=Yx(s,v)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,Ox)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var c_=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}};function h_(i){return i===es||i===Aa||i===Ea}function u_(i,e,t,n,s,r){let a=new qr,o=new Rh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,A,I,O,W,K){let B=O.fog,Z=W.geometry,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,ie=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,xe=e.get(y.envMap||ee,ie),se=xe&&xe.mapping===va?xe.image.height:null,ae=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&nt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,We=de!==void 0?de.length:0,R=0;Z.morphAttributes.position!==void 0&&(R=1),Z.morphAttributes.normal!==void 0&&(R=2),Z.morphAttributes.color!==void 0&&(R=3);let V,J,_e,U;if(ae){let At=oi[ae];V=At.vertexShader,J=At.fragmentShader}else{V=y.vertexShader,J=y.fragmentShader;let At=o.getVertexShaderStage(y),Mt=o.getFragmentShaderStage(y);o.update(y,At,Mt),_e=At.id,U=Mt.id}let G=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),X=W.isInstancedMesh===!0,ye=W.isBatchedMesh===!0,De=!!y.map,je=!!y.matcap,he=!!xe,pe=!!y.aoMap,Me=!!y.lightMap,Se=!!y.bumpMap&&y.wireframe===!1,we=!!y.normalMap,Ze=!!y.displacementMap,qe=!!y.emissiveMap,Ke=!!y.metalnessMap,et=!!y.roughnessMap,F=y.anisotropy>0,vt=y.clearcoat>0,dt=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,q=y.sheen>0,j=y.transmission>0,re=F&&!!y.anisotropyMap,be=vt&&!!y.clearcoatMap,Ee=vt&&!!y.clearcoatNormalMap,oe=vt&&!!y.clearcoatRoughnessMap,fe=_&&!!y.iridescenceMap,Ie=_&&!!y.iridescenceThicknessMap,Je=q&&!!y.sheenColorMap,Pe=q&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,Ve=!!y.specularColorMap,Qe=!!y.specularIntensityMap,at=j&&!!y.transmissionMap,H=j&&!!y.thicknessMap,Re=!!y.gradientMap,ue=!!y.alphaMap,Te=y.alphaTest>0,Fe=!!y.alphaHash,me=!!y.extensions,$e=Wn;y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($e=i.toneMapping);let Ge={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:J,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:U,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ye,batchingColor:ye&&W._colorsTexture!==null,instancing:X,instancingColor:X&&W.instanceColor!==null,instancingMorph:X&&W.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:je,envMap:he,envMapMode:he&&xe.mapping,envMapCubeUVHeight:se,aoMap:pe,lightMap:Me,bumpMap:Se,normalMap:we,displacementMap:Ze,emissiveMap:qe,normalMapObjectSpace:we&&y.normalMapType===Xu,normalMapTangentSpace:we&&y.normalMapType===Ol,packedNormalMap:we&&y.normalMapType===Ol&&h_(y.normalMap.format),metalnessMap:Ke,roughnessMap:et,anisotropy:F,anisotropyMap:re,clearcoat:vt,clearcoatMap:be,clearcoatNormalMap:Ee,clearcoatRoughnessMap:oe,dispersion:dt,retroreflection:C,iridescence:_,iridescenceMap:fe,iridescenceThicknessMap:Ie,sheen:q,sheenColorMap:Je,sheenRoughnessMap:Pe,specularMap:Ce,specularColorMap:Ve,specularIntensityMap:Qe,transmission:j,transmissionMap:at,thicknessMap:H,gradientMap:Re,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Te,alphaHash:Fe,combine:y.combine,mapUv:De&&g(y.map.channel),aoMapUv:pe&&g(y.aoMap.channel),lightMapUv:Me&&g(y.lightMap.channel),bumpMapUv:Se&&g(y.bumpMap.channel),normalMapUv:we&&g(y.normalMap.channel),displacementMapUv:Ze&&g(y.displacementMap.channel),emissiveMapUv:qe&&g(y.emissiveMap.channel),metalnessMapUv:Ke&&g(y.metalnessMap.channel),roughnessMapUv:et&&g(y.roughnessMap.channel),anisotropyMapUv:re&&g(y.anisotropyMap.channel),clearcoatMapUv:be&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(y.sheenRoughnessMap.channel),specularMapUv:Ce&&g(y.specularMap.channel),specularColorMapUv:Ve&&g(y.specularColorMap.channel),specularIntensityMapUv:Qe&&g(y.specularIntensityMap.channel),transmissionMapUv:at&&g(y.transmissionMap.channel),thicknessMapUv:H&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(we||F),vertexNormals:!!Z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(De||ue),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||Z.attributes.normal===void 0&&we===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:R,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&_t.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:qe&&y.emissiveMap.isVideoTexture===!0&&_t.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jt,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(A,y),b(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function b(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){let A=d[y.type],I;if(A){let O=oi[A];I=ld.clone(O.uniforms)}else I=y.uniforms;return I}function x(y,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new l_(i,A,y,s),c.push(I),h.set(A,I)),I}function S(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function d_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,p,m){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[e]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=g,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=p,b.group=m),e++,b}function l(u,d,g,v,p,m,b){b.reversedDepth===!0&&(p=-p);let M=o(u,d,g,v,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(u,d,g,v,p,m){let b=o(u,d,g,v,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,d){t.length>1&&t.sort(u||f_),n.length>1&&n.sort(d||Cd),s.length>1&&s.sort(d||Cd)}function f(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function p_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Rd,i.set(n,[a])):s>=r.length?(a=new Rd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function m_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ht};break;case"SpotLight":t={position:new L,direction:new L,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function g_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var x_=0;function __(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y_(i){let e=new m_,t=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new bt,a=new bt;function o(c){let h=0,f=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,b=0,M=0,x=0,S=0,T=0,E=0,y=0,A=0,I=0;c.sort(__);for(let W=0,K=c.length;W<K;W++){let B=c[W],Z=B.color,ee=B.intensity,ie=B.distance,xe=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===es?xe=B.shadow.map.texture:xe=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=Z.r*ee,f+=Z.g*ee,u+=Z.b*ee;else if(B.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(B.sh.coefficients[se],ee);I++}else if(B.isSunLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[g]=de,n.sunShadowMap[g]=xe;let We=ae.getViewportCount();for(let R=0;R<We;R++)n.sunShadowMatrix[v+R]=ae.getMatrix(R),n.sunShadowCascade[v+R]=ae._cascadeData[R];v+=We,g++}n.sun[d]=se,d++}else if(B.isDirectionalLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,n.directionalShadow[p]=de,n.directionalShadowMap[p]=xe,n.directionalShadowMatrix[p]=B.shadow.matrix,S++}n.directional[p]=se,p++}else if(B.isSpotLight){let se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(Z).multiplyScalar(ee),se.distance=ie,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,n.spot[b]=se;let ae=B.shadow;if(B.map&&(n.spotLightMap[y]=B.map,y++,ae.updateMatrices(B),B.castShadow&&A++),n.spotLightMatrix[b]=ae.matrix,B.castShadow){let de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,n.spotShadow[b]=de,n.spotShadowMap[b]=xe,E++}b++}else if(B.isRectAreaLight){let se=e.get(B);se.color.copy(Z).multiplyScalar(ee),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),n.rectArea[M]=se,M++}else if(B.isPointLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){let ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,de.shadowCameraNear=ae.camera.near,de.shadowCameraFar=ae.camera.far,n.pointShadow[m]=de,n.pointShadowMap[m]=xe,n.pointShadowMatrix[m]=B.shadow.matrix,T++}n.point[m]=se,m++}else if(B.isHemisphereLight){let se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(ee),se.groundColor.copy(B.groundColor).multiplyScalar(ee),n.hemi[x]=se,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let O=n.hash;(O.sunLength!==d||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==b||O.rectAreaLength!==M||O.hemiLength!==x||O.numSunShadows!==g||O.numDirectionalShadows!==S||O.numPointShadows!==T||O.numSpotShadows!==E||O.numSpotMaps!==y||O.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=M,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,O.sunLength=d,O.directionalLength=p,O.pointLength=m,O.spotLength=b,O.rectAreaLength=M,O.hemiLength=x,O.numSunShadows=g,O.numDirectionalShadows=S,O.numPointShadows=T,O.numSpotShadows=E,O.numSpotMaps=y,O.numLightProbes=I,n.version=x_++)}function l(c,h){let f=0,u=0,d=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let x=c[b];if(x.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),f++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Id(i){let e=new y_(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Id(i),e.set(s,[o])):r>=a.length?(o=new Id(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`,b_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],w_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Pd=new bt,Ra=new L,bh=new L;function T_(i,e,t){let n=new or,s=new Ae,r=new Ae,a=new Pt,o=new Oo,l=new Bo,c={},h=t.maxTextureSize,f={[$i]:un,[un]:$i,[Jt]:Jt},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let m=this.type;this.render=function(T,E,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Su&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ri),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let K=m!==this.type;K&&E.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Z=>Z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Z=T.length;B<Z;B++){let ee=T[B],ie=ee.shadow;if(ie===void 0){nt("WebGLShadowMap:",ee,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let xe=ie.getFrameExtents();s.multiply(xe),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,ie.mapSize.y=r.y));let se=i.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=se,ie.map===null||K===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===pr){if(ee.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new xn(s.x,s.y,{format:es,type:qn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),ie.map.texture.name=ee.name+".shadowMap",ie.map.depthTexture=new Hi(s.x,s.y,In),ie.map.depthTexture.name=ee.name+".shadowMapDepth",ie.map.depthTexture.format=ei,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt}else ee.isPointLight?(ie.map=new Wl(s.x),ie.map.depthTexture=new Io(s.x,Xn)):(ie.map=new xn(s.x,s.y),ie.map.depthTexture=new Hi(s.x,s.y,Xn)),ie.map.depthTexture.name=ee.name+".shadowMap",ie.map.depthTexture.format=ei,this.type===vs?(ie.map.depthTexture.compareFunction=se?kl:Bl,ie.map.depthTexture.minFilter=Qt,ie.map.depthTexture.magFilter=Qt):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==s.x||ie.map.height!==s.y)&&ie.map.setSize(s.x,s.y);let ae=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();ee.isPointLight!==!0&&ie.updateMatrices(ee,y);for(let de=0;de<ae;de++){let We=ie.getCamera(de);if(ee.isPointLight){let R=ie.camera,V=ie.matrix,J=ee.distance||R.far;J!==R.far&&(R.far=J,R.updateProjectionMatrix()),Ra.setFromMatrixPosition(ee.matrixWorld),R.position.copy(Ra),bh.copy(R.position),bh.add(b_[de]),R.up.copy(w_[de]),R.lookAt(bh),R.updateMatrixWorld(),V.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Pd.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(Pd,R.coordinateSystem,R.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)i.setRenderTarget(ie.map,de),i.clear();else{de===0&&(i.setRenderTarget(ie.map),i.clear());let R=ie.getViewport(de);a.set(r.x*R.x,r.y*R.y,r.x*R.z,r.y*R.w),W.viewport(a)}n=ie.getFrustum(de),x(E,y,We,ee,this.type)}ie.isPointLightShadow!==!0&&this.type===pr&&b(ie,y),ie.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(A,I,O)};function b(T,E){let y=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new xn(s.x,s.y,{format:es,type:qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,y,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,y,d,v,null)}function M(T,E,y,A){let I=null,O=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)I=O;else if(I=y.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let W=I.uuid,K=E.uuid,B=c[W];B===void 0&&(B={},c[W]=B);let Z=B[K];Z===void 0&&(Z=I.clone(),B[K]=Z,E.addEventListener("dispose",S)),I=Z}if(I.visible=E.visible,I.wireframe=E.wireframe,A===pr?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:f[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let W=i.properties.get(I);W.light=y}return I}function x(T,E,y,A,I){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===pr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let K=e.update(T),B=T.material;if(Array.isArray(B)){let Z=K.groups;for(let ee=0,ie=Z.length;ee<ie;ee++){let xe=Z[ee],se=B[xe.materialIndex];if(se&&se.visible){let ae=M(T,se,A,I);T.onBeforeShadow(i,T,E,y,K,ae,xe),i.renderBufferDirect(y,null,K,ae,T,xe),T.onAfterShadow(i,T,E,y,K,ae,xe)}}}else if(B.visible){let Z=M(T,B,A,I);T.onBeforeShadow(i,T,E,y,K,Z,null),i.renderBufferDirect(y,null,K,Z,T,null),T.onAfterShadow(i,T,E,y,K,Z,null)}}let W=T.children;for(let K=0,B=W.length;K<B;K++)x(W[K],E,y,A,I)}function S(T){T.target.removeEventListener("dispose",S);for(let y in c){let A=c[y],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function A_(i,e){function t(){let H=!1,Re=new Pt,ue=null,Te=new Pt(0,0,0,0);return{setMask:function(Fe){ue!==Fe&&!H&&(i.colorMask(Fe,Fe,Fe,Fe),ue=Fe)},setLocked:function(Fe){H=Fe},setClear:function(Fe,me,$e,Ge,At){At===!0&&(Fe*=Ge,me*=Ge,$e*=Ge),Re.set(Fe,me,$e,Ge),Te.equals(Re)===!1&&(i.clearColor(Fe,me,$e,Ge),Te.copy(Re))},reset:function(){H=!1,ue=null,Te.set(-1,0,0,0)}}}function n(){let H=!1,Re=!1,ue=null,Te=null,Fe=null;return{setReversed:function(me){if(Re!==me){let $e=e.get("EXT_clip_control");me?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Re=me;let Ge=Fe;Fe=null,this.setClear(Ge)}},getReversed:function(){return Re},setTest:function(me){me?G(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(me){ue!==me&&!H&&(i.depthMask(me),ue=me)},setFunc:function(me){if(Re&&(me=nd[me]),Te!==me){switch(me){case go:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=me}},setLocked:function(me){H=me},setClear:function(me){Fe!==me&&(Fe=me,Re&&(me=1-me),i.clearDepth(me))},reset:function(){H=!1,ue=null,Te=null,Fe=null,Re=!1}}}function s(){let H=!1,Re=null,ue=null,Te=null,Fe=null,me=null,$e=null,Ge=null,At=null;return{setTest:function(Mt){H||(Mt?G(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!H&&(i.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,dn,fn){(ue!==Mt||Te!==dn||Fe!==fn)&&(i.stencilFunc(Mt,dn,fn),ue=Mt,Te=dn,Fe=fn)},setOp:function(Mt,dn,fn){(me!==Mt||$e!==dn||Ge!==fn)&&(i.stencilOp(Mt,dn,fn),me=Mt,$e=dn,Ge=fn)},setLocked:function(Mt){H=Mt},setClear:function(Mt){At!==Mt&&(i.clearStencil(Mt),At=Mt)},reset:function(){H=!1,Re=null,ue=null,Te=null,Fe=null,me=null,$e=null,Ge=null,At=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],v=null,p=!1,m=null,b=null,M=null,x=null,S=null,T=null,E=null,y=new ht(0,0,0),A=0,I=!1,O=null,W=null,K=null,B=null,Z=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,xe=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ie=xe>=1):se.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ie=xe>=2);let ae=null,de={},We=i.getParameter(i.SCISSOR_BOX),R=i.getParameter(i.VIEWPORT),V=new Pt().fromArray(We),J=new Pt().fromArray(R);function _e(H,Re,ue,Te){let Fe=new Uint8Array(4),me=i.createTexture();i.bindTexture(H,me),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ue;$e++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Re+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return me}let U={};U[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(i.DEPTH_TEST),a.setFunc(js),Se(!1),we(Wc),G(i.CULL_FACE),pe(ri);function G(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function ge(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function X(H,Re){return u[H]!==Re?(i.bindFramebuffer(H,Re),u[H]=Re,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Re),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ye(H,Re){let ue=g,Te=!1;if(H){ue=d.get(Re),ue===void 0&&(ue=[],d.set(Re,ue));let Fe=H.textures;if(ue.length!==Fe.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let me=0,$e=Fe.length;me<$e;me++)ue[me]=i.COLOR_ATTACHMENT0+me;ue.length=Fe.length,Te=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ue)}function De(H){return v!==H?(i.useProgram(H),v=H,!0):!1}let je={[Ms]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};je[Au]=i.MIN,je[Eu]=i.MAX;let he={[Cu]:i.ZERO,[Ru]:i.ONE,[Iu]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(H,Re,ue,Te,Fe,me,$e,Ge,At,Mt){if(H===ri){p===!0&&(ge(i.BLEND),p=!1);return}if(p===!1&&(G(i.BLEND),p=!0),H!==bu){if(H!==m||Mt!==I){if((b!==Ms||S!==Ms)&&(i.blendEquation(i.FUNC_ADD),b=Ms,S=Ms),Mt)switch(H){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xc:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",H);break}else switch(H){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qc:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",H);break}M=null,x=null,T=null,E=null,y.set(0,0,0),A=0,m=H,I=Mt}return}Fe=Fe||Re,me=me||ue,$e=$e||Te,(Re!==b||Fe!==S)&&(i.blendEquationSeparate(je[Re],je[Fe]),b=Re,S=Fe),(ue!==M||Te!==x||me!==T||$e!==E)&&(i.blendFuncSeparate(he[ue],he[Te],he[me],he[$e]),M=ue,x=Te,T=me,E=$e),(Ge.equals(y)===!1||At!==A)&&(i.blendColor(Ge.r,Ge.g,Ge.b,At),y.copy(Ge),A=At),m=H,I=!1}function Me(H,Re){H.side===Jt?ge(i.CULL_FACE):G(i.CULL_FACE);let ue=H.side===un;Re&&(ue=!ue),Se(ue),H.blending===mr&&H.transparent===!1?pe(ri):pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Te=H.stencilWrite;o.setTest(Te),Te&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),qe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(H){O!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),O=H)}function we(H){H!==vu?(G(i.CULL_FACE),H!==W&&(H===Wc?i.cullFace(i.BACK):H===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),W=H}function Ze(H){H!==K&&(ie&&i.lineWidth(H),K=H)}function qe(H,Re,ue){H?(G(i.POLYGON_OFFSET_FILL),(B!==Re||Z!==ue)&&(B=Re,Z=ue,a.getReversed()&&(Re=-Re),i.polygonOffset(Re,ue))):ge(i.POLYGON_OFFSET_FILL)}function Ke(H){H?G(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function et(H){H===void 0&&(H=i.TEXTURE0+ee-1),ae!==H&&(i.activeTexture(H),ae=H)}function F(H,Re,ue){ue===void 0&&(ae===null?ue=i.TEXTURE0+ee-1:ue=ae);let Te=de[ue];Te===void 0&&(Te={type:void 0,texture:void 0},de[ue]=Te),(Te.type!==H||Te.texture!==Re)&&(ae!==ue&&(i.activeTexture(ue),ae=ue),i.bindTexture(H,Re||U[H]),Te.type=H,Te.texture=Re)}function vt(){let H=de[ae];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function _(){try{i.texSubImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function q(){try{i.texSubImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function be(){try{i.texStorage2D(...arguments)}catch(H){st("WebGLState:",H)}}function Ee(){try{i.texStorage3D(...arguments)}catch(H){st("WebGLState:",H)}}function oe(){try{i.texImage2D(...arguments)}catch(H){st("WebGLState:",H)}}function fe(){try{i.texImage3D(...arguments)}catch(H){st("WebGLState:",H)}}function Ie(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function Je(H,Re){f[H]!==Re&&(i.pixelStorei(H,Re),f[H]=Re)}function Pe(H){V.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),V.copy(H))}function Ce(H){J.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function Ve(H,Re){let ue=c.get(Re);ue===void 0&&(ue=new WeakMap,c.set(Re,ue));let Te=ue.get(H);Te===void 0&&(Te=i.getUniformBlockIndex(Re,H.name),ue.set(H,Te))}function Qe(H,Re){let Te=c.get(Re).get(H);l.get(Re)!==Te&&(i.uniformBlockBinding(Re,Te,H.__bindingPointIndex),l.set(Re,Te))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ae=null,de={},u={},d=new WeakMap,g=[],v=null,p=!1,m=null,b=null,M=null,x=null,S=null,T=null,E=null,y=new ht(0,0,0),A=0,I=!1,O=null,W=null,K=null,B=null,Z=null,V.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:ge,bindFramebuffer:X,drawBuffers:ye,useProgram:De,setBlending:pe,setMaterial:Me,setFlipSided:Se,setCullFace:we,setLineWidth:Ze,setPolygonOffset:qe,setScissorTest:Ke,activeTexture:et,bindTexture:F,unbindTexture:vt,compressedTexImage2D:dt,compressedTexImage3D:C,texImage2D:oe,texImage3D:fe,pixelStorei:Je,getParameter:Ie,updateUBOMapping:Ve,uniformBlockBinding:Qe,texStorage2D:be,texStorage3D:Ee,texSubImage2D:_,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:re,scissor:Pe,viewport:Ce,reset:at}}function E_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return g?new OffscreenCanvas(C,_):Wr("canvas")}function p(C,_,q){let j=1,re=dt(C);if((re.width>q||re.height>q)&&(j=q/Math.max(re.width,re.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let be=Math.floor(j*re.width),Ee=Math.floor(j*re.height);u===void 0&&(u=v(be,Ee));let oe=_?v(be,Ee):u;return oe.width=be,oe.height=Ee,oe.getContext("2d").drawImage(C,0,0,be,Ee),nt("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+be+"x"+Ee+")."),oe}else return"data"in C&&nt("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,_,q,j,re,be=!1){if(C!==null){if(i[C]!==void 0)return i[C];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee;j&&(Ee=e.get("EXT_texture_norm16"),Ee||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=_;if(_===i.RED&&(q===i.FLOAT&&(oe=i.R32F),q===i.HALF_FLOAT&&(oe=i.R16F),q===i.UNSIGNED_BYTE&&(oe=i.R8),q===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.R16_EXT),q===i.SHORT&&Ee&&(oe=Ee.R16_SNORM_EXT)),_===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.R8UI),q===i.UNSIGNED_SHORT&&(oe=i.R16UI),q===i.UNSIGNED_INT&&(oe=i.R32UI),q===i.BYTE&&(oe=i.R8I),q===i.SHORT&&(oe=i.R16I),q===i.INT&&(oe=i.R32I)),_===i.RG&&(q===i.FLOAT&&(oe=i.RG32F),q===i.HALF_FLOAT&&(oe=i.RG16F),q===i.UNSIGNED_BYTE&&(oe=i.RG8),q===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.RG16_EXT),q===i.SHORT&&Ee&&(oe=Ee.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RG8UI),q===i.UNSIGNED_SHORT&&(oe=i.RG16UI),q===i.UNSIGNED_INT&&(oe=i.RG32UI),q===i.BYTE&&(oe=i.RG8I),q===i.SHORT&&(oe=i.RG16I),q===i.INT&&(oe=i.RG32I)),_===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),q===i.UNSIGNED_INT&&(oe=i.RGB32UI),q===i.BYTE&&(oe=i.RGB8I),q===i.SHORT&&(oe=i.RGB16I),q===i.INT&&(oe=i.RGB32I)),_===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),q===i.UNSIGNED_INT&&(oe=i.RGBA32UI),q===i.BYTE&&(oe=i.RGBA8I),q===i.SHORT&&(oe=i.RGBA16I),q===i.INT&&(oe=i.RGBA32I)),_===i.RGB&&(q===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.RGB16_EXT),q===i.SHORT&&Ee&&(oe=Ee.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),_===i.RGBA){let fe=be?Hr:_t.getTransfer(re);q===i.FLOAT&&(oe=i.RGBA32F),q===i.HALF_FLOAT&&(oe=i.RGBA16F),q===i.UNSIGNED_BYTE&&(oe=fe===Tt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.RGBA16_EXT),q===i.SHORT&&Ee&&(oe=Ee.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(C,_){let q;return C?_===null||_===Xn||_===xr?q=i.DEPTH24_STENCIL8:_===In?q=i.DEPTH32F_STENCIL8:_===gr&&(q=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xn||_===xr?q=i.DEPTH_COMPONENT24:_===In?q=i.DEPTH_COMPONENT32F:_===gr&&(q=i.DEPTH_COMPONENT16),q}function T(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function E(C){let _=C.target;_.removeEventListener("dispose",E),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),O(_)}function A(C){let _=n.get(C);if(_.__webglInit===void 0)return;let q=C.source,j=d.get(q);if(j){let re=j[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(C),Object.keys(j).length===0&&d.delete(q)}n.remove(C)}function I(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let q=C.source,j=d.get(q);delete j[_.__cacheKey],a.memory.textures--}function O(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let re=0;re<_.__webglFramebuffer[j].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[j][re]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let q=C.textures;for(let j=0,re=q.length;j<re;j++){let be=n.get(q[j]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(q[j])}n.remove(C)}let W=0;function K(){W=0}function B(){return W}function Z(C){W=C}function ee(){let C=W;return C>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,C}function ie(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function xe(C,_){let q=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let j=C.image;if(j===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(q,C,_);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+_)}function se(C,_){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){ge(q,C,_);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+_)}function ae(C,_){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){ge(q,C,_);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+_)}function de(C,_){let q=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){X(q,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+_)}let We={[er]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},R={[Yt]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[Ma]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},V={[Yu]:i.NEVER,[Qu]:i.ALWAYS,[Zu]:i.LESS,[Bl]:i.LEQUAL,[Ju]:i.EQUAL,[kl]:i.GEQUAL,[$u]:i.GREATER,[Ku]:i.NOTEQUAL};function J(C,_){if(_.type===In&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===jo||_.magFilter===Ma||_.magFilter===Qi||_.minFilter===Qt||_.minFilter===jo||_.minFilter===Ma||_.minFilter===Qi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,We[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,We[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,We[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,R[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,R[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,V[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Ma&&_.minFilter!==Qi||_.type===In&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function _e(C,_){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",E));let j=_.source,re=d.get(j);re===void 0&&(re={},d.set(j,re));let be=ie(_);if(be!==C.__cacheKey){re[be]===void 0&&(re[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[be].usedTimes++;let Ee=re[C.__cacheKey];Ee!==void 0&&(re[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(_)),C.__cacheKey=be,C.__webglTexture=re[be].texture}return q}function U(C,_,q){return Math.floor(Math.floor(C/q)/_)}function G(C,_,q,j){let be=C.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,q,j,_.data);else{be.sort((Je,Pe)=>Je.start-Pe.start);let Ee=0;for(let Je=1;Je<be.length;Je++){let Pe=be[Ee],Ce=be[Je],Ve=Pe.start+Pe.count,Qe=U(Ce.start,_.width,4),at=U(Pe.start,_.width,4);Ce.start<=Ve+1&&Qe===at&&U(Ce.start+Ce.count-1,_.width,4)===Qe?Pe.count=Math.max(Pe.count,Ce.start+Ce.count-Pe.start):(++Ee,be[Ee]=Ce)}be.length=Ee+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Je=0,Pe=be.length;Je<Pe;Je++){let Ce=be[Je],Ve=Math.floor(Ce.start/4),Qe=Math.ceil(Ce.count/4),at=Ve%_.width,H=Math.floor(Ve/_.width),Re=Qe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,at,H,Re,ue,q,j,_.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function ge(C,_,q){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let re=_e(C,_),be=_.source;t.bindTexture(j,C.__webglTexture,i.TEXTURE0+q);let Ee=n.get(be);if(be.version!==Ee.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ue=_t.getPrimaries(_t.workingColorSpace),Te=_.colorSpace===Ii?null:_t.getPrimaries(_.colorSpace),Fe=_.colorSpace===Ii||ue===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let fe=p(_.image,!1,s.maxTextureSize);fe=vt(_,fe);let Ie=r.convert(_.format,_.colorSpace),Je=r.convert(_.type),Pe=x(_.internalFormat,Ie,Je,_.normalized,_.colorSpace,_.isVideoTexture);J(j,_);let Ce,Ve=_.mipmaps,Qe=_.isVideoTexture!==!0,at=Ee.__version===void 0||re===!0,H=be.dataReady,Re=T(_,fe);if(_.isDepthTexture)Pe=S(_.format===ji,_.type),at&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ie,Je,null));else if(_.isDataTexture)if(Ve.length>0){Qe&&at&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,Ve[0].width,Ve[0].height);for(let ue=0,Te=Ve.length;ue<Te;ue++)Ce=Ve[ue],Qe?H&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ce.width,Ce.height,Ie,Je,Ce.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ce.width,Ce.height,0,Ie,Je,Ce.data);_.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,fe.width,fe.height),H&&G(_,fe,Ie,Je)):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ie,Je,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Pe,Ve[0].width,Ve[0].height,fe.depth);for(let ue=0,Te=Ve.length;ue<Te;ue++)if(Ce=Ve[ue],_.format!==Pn)if(Ie!==null)if(Qe){if(H)if(_.layerUpdates.size>0){let Fe=xh(Ce.width,Ce.height,_.format,_.type);for(let me of _.layerUpdates){let $e=Ce.data.subarray(me*Fe/Ce.data.BYTES_PER_ELEMENT,(me+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,me,Ce.width,Ce.height,1,Ie,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ce.width,Ce.height,fe.depth,Ie,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ce.width,Ce.height,fe.depth,Ie,Je,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,Ce.width,Ce.height,fe.depth,0,Ie,Je,Ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Qe&&at&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,Ve[0].width,Ve[0].height);for(let ue=0,Te=Ve.length;ue<Te;ue++)Ce=Ve[ue],_.format!==Pn?Ie!==null?Qe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Pe,Ce.width,Ce.height,0,Ce.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?H&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ce.width,Ce.height,Ie,Je,Ce.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ce.width,Ce.height,0,Ie,Je,Ce.data)}else if(_.isDataArrayTexture)if(Qe){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Pe,fe.width,fe.height,fe.depth),H)if(_.layerUpdates.size>0){let ue=xh(fe.width,fe.height,_.format,_.type);for(let Te of _.layerUpdates){let Fe=fe.data.subarray(Te*ue/fe.data.BYTES_PER_ELEMENT,(Te+1)*ue/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,fe.width,fe.height,1,Ie,Je,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ie,Je,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,Ie,Je,fe.data);else if(_.isData3DTexture)Qe?(at&&t.texStorage3D(i.TEXTURE_3D,Re,Pe,fe.width,fe.height,fe.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ie,Je,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,Ie,Je,fe.data);else if(_.isFramebufferTexture){if(at)if(Qe)t.texStorage2D(i.TEXTURE_2D,Re,Pe,fe.width,fe.height);else{let ue=fe.width,Te=fe.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Pe,ue,Te,0,Ie,Je,null),ue>>=1,Te>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),fe.parentNode!==ue){ue.appendChild(fe),f.add(_),ue.onpaint=Te=>{let Fe=Te.changedElements;for(let me of f)Fe.includes(me.image)&&(me.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Fe=i.RGBA,me=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,me,$e,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Qe&&at){let ue=dt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Re,Pe,ue.width,ue.height)}for(let ue=0,Te=Ve.length;ue<Te;ue++)Ce=Ve[ue],Qe?H&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ie,Je,Ce):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ie,Je,Ce);_.generateMipmaps=!1}else if(Qe){if(at){let ue=dt(fe);t.texStorage2D(i.TEXTURE_2D,Re,Pe,ue.width,ue.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Je,fe)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Ie,Je,fe);m(_)&&b(j),Ee.__version=be.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function X(C,_,q){if(_.image.length!==6)return;let j=_e(C,_),re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let be=n.get(re);if(re.version!==be.__version||j===!0){t.activeTexture(i.TEXTURE0+q);let Ee=_t.getPrimaries(_t.workingColorSpace),oe=_.colorSpace===Ii?null:_t.getPrimaries(_.colorSpace),fe=_.colorSpace===Ii||Ee===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,Je=_.image[0]&&_.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!Ie&&!Je?Pe[me]=p(_.image[me],!0,s.maxCubemapSize):Pe[me]=Je?_.image[me].image:_.image[me],Pe[me]=vt(_,Pe[me]);let Ce=Pe[0],Ve=r.convert(_.format,_.colorSpace),Qe=r.convert(_.type),at=x(_.internalFormat,Ve,Qe,_.normalized,_.colorSpace),H=_.isVideoTexture!==!0,Re=be.__version===void 0||j===!0,ue=re.dataReady,Te=T(_,Ce);J(i.TEXTURE_CUBE_MAP,_);let Fe;if(Ie){H&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,at,Ce.width,Ce.height);for(let me=0;me<6;me++){Fe=Pe[me].mipmaps;for(let $e=0;$e<Fe.length;$e++){let Ge=Fe[$e];_.format!==Pn?Ve!==null?H?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,0,0,Ge.width,Ge.height,Ve,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,at,Ge.width,Ge.height,0,Ge.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,0,0,Ge.width,Ge.height,Ve,Qe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,at,Ge.width,Ge.height,0,Ve,Qe,Ge.data)}}}else{if(Fe=_.mipmaps,H&&Re){Fe.length>0&&Te++;let me=dt(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,at,me.width,me.height)}for(let me=0;me<6;me++)if(Je){H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,Ve,Qe,Pe[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Pe[me].width,Pe[me].height,0,Ve,Qe,Pe[me].data);for(let $e=0;$e<Fe.length;$e++){let At=Fe[$e].image[me].image;H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,0,0,At.width,At.height,Ve,Qe,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,at,At.width,At.height,0,Ve,Qe,At.data)}}else{H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ve,Qe,Pe[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,at,Ve,Qe,Pe[me]);for(let $e=0;$e<Fe.length;$e++){let Ge=Fe[$e];H?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,0,0,Ve,Qe,Ge.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,at,Ve,Qe,Ge.image[me])}}}m(_)&&b(i.TEXTURE_CUBE_MAP),be.__version=re.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ye(C,_,q,j,re,be){let Ee=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),fe=x(q.internalFormat,Ee,oe,q.normalized,q.colorSpace),Ie=n.get(_),Je=n.get(q);if(Je.__renderTarget=_,!Ie.__hasExternalTextures){let Pe=Math.max(1,_.width>>be),Ce=Math.max(1,_.height>>be);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,be,fe,Pe,Ce,_.depth,0,Ee,oe,null):t.texImage2D(re,be,fe,Pe,Ce,0,Ee,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,re,Je.__webglTexture,0,Ke(_)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,re,Je.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(C,_,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let j=_.depthTexture,re=j&&j.isDepthTexture?j.type:null,be=S(_.stencilBuffer,re),Ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(_),be,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(_),be,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,be,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,C)}else{let j=_.textures;for(let re=0;re<j.length;re++){let be=j[re],Ee=r.convert(be.format,be.colorSpace),oe=r.convert(be.type),fe=x(be.internalFormat,Ee,oe,be.normalized,be.colorSpace);et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(_),fe,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(_),fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(C,_,q){let j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(_.depthTexture);if(re.__renderTarget=_,(!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(re.__webglInit===void 0&&(re.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),J(i.TEXTURE_CUBE_MAP,_.depthTexture);let Ie=r.convert(_.depthTexture.format),Je=r.convert(_.depthTexture.type),Pe;_.depthTexture.format===ei?Pe=i.DEPTH_COMPONENT24:_.depthTexture.format===ji&&(Pe=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Pe,_.width,_.height,0,Ie,Je,null)}}else xe(_.depthTexture,0);let be=re.__webglTexture,Ee=Ke(_),oe=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,fe=_.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ei)et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,oe,be,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,oe,be,0);else if(_.depthTexture.format===ji)et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,oe,be,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,oe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(C){let _=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",re)};j.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=j}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let j=0;j<6;j++)je(_.__webglFramebuffer[j],C,j);else{let j=C.texture.mipmaps;j&&j.length>0?je(_.__webglFramebuffer[0],C,0):je(_.__webglFramebuffer,C,0)}else if(q){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),De(_.__webglDepthbuffer[j],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,be)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,_,q){let j=n.get(C);_!==void 0&&ye(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&he(C)}function Me(C){let _=C.texture,q=n.get(C),j=n.get(_);C.addEventListener("dispose",y);let re=C.textures,be=C.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),be){q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer[oe]=[];for(let fe=0;fe<_.mipmaps.length;fe++)q.__webglFramebuffer[oe][fe]=i.createFramebuffer()}else q.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)q.__webglFramebuffer[oe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let oe=0,fe=re.length;oe<fe;oe++){let Ie=n.get(re[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&et(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let fe=re[oe];q.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[oe]);let Ie=r.convert(fe.format,fe.colorSpace),Je=r.convert(fe.type),Pe=x(fe.internalFormat,Ie,Je,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),Ce=Ke(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,q.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),De(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),J(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(q.__webglFramebuffer[oe][fe],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ye(q.__webglFramebuffer[oe],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,fe=re.length;oe<fe;oe++){let Ie=re[oe],Je=n.get(Ie),Pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Je.__webglTexture),J(Pe,Ie),ye(q.__webglFramebuffer,C,Ie,i.COLOR_ATTACHMENT0+oe,Pe,0),m(Ie)&&b(Pe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),J(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ye(q.__webglFramebuffer[fe],C,_,i.COLOR_ATTACHMENT0,oe,fe);else ye(q.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,oe,0);m(_)&&b(oe),t.unbindTexture()}C.depthBuffer&&he(C)}function Se(C){let _=C.textures;for(let q=0,j=_.length;q<j;q++){let re=_[q];if(m(re)){let be=M(C),Ee=n.get(re).__webglTexture;t.bindTexture(be,Ee),b(be),t.unbindTexture()}}}let we=[],Ze=[];function qe(C){if(C.samples>0){if(et(C)===!1){let _=C.textures,q=C.width,j=C.height,re=i.COLOR_BUFFER_BIT,be=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(C),oe=_.length>1;if(oe)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let fe=C.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);let Je=n.get(_[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,q,j,0,0,q,j,re,i.NEAREST),l===!0&&(we.length=0,Ze.length=0,we.push(i.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(we.push(be),Ze.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);let Je=n.get(_[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ke(C){return Math.min(s.maxSamples,C.samples)}function et(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function vt(C,_){let q=C.colorSpace,j=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Gr&&q!==Ii&&(_t.getTransfer(q)===Tt?(j!==Pn||re!==yn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",q)),_}function dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=K,this.getTextureUnits=B,this.setTextureUnits=Z,this.setTexture2D=xe,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=de,this.rebindTextures=pe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function C_(i,e){function t(n,s=Ii){let r,a=_t.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===ch)return i.RGB;if(n===Pn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===es)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===Sa||n===ba||n===wa||n===Ta)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===Aa||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pl)return r.COMPRESSED_R11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return r.COMPRESSED_RG11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===wl||n===Tl||n===Al||n===El||n===Cl||n===Rl||n===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Ul||n===Ea||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:R_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",p=new Ph,m={},b=t.getContextAttributes(),M=null,x=null,S=[],T=[],E=new Ae,y=null,A=null,I=new ln;I.viewport=new Pt;let O=new ln;O.viewport=new Pt;let W=[I,O],K=new $o,B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let G=S[U];return G===void 0&&(G=new rr,S[U]=G),G.getTargetRaySpace()},this.getControllerGrip=function(U){let G=S[U];return G===void 0&&(G=new rr,S[U]=G),G.getGripSpace()},this.getHand=function(U){let G=S[U];return G===void 0&&(G=new rr,S[U]=G),G.getHandSpace()};function ee(U){let G=T.indexOf(U.inputSource);if(G===-1)return;let ge=S[G];ge!==void 0&&(ge.update(U.inputSource,U.frame,c||a),ge.dispatchEvent({type:U.type,data:U.inputSource}))}function ie(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",xe);for(let U=0;U<S.length;U++){let G=T[U];G!==null&&(T[U]=null,S[U].disconnect(G))}B=null,Z=null,p.reset();for(let U in m)delete m[U];if(e.setRenderTarget(M),d=null,u=null,f=null,s=null,x=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),A!==null){let U=A.camera;U.fov=A.fov,U.zoom=A.zoom,U.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",xe),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,X=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?ji:ei,X=b.stencil?xr:Xn);let De={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new xn(u.textureWidth,u.textureHeight,{format:Pn,type:yn,depthTexture:new Hi(u.textureWidth,u.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new xn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function xe(U){for(let G=0;G<U.removed.length;G++){let ge=U.removed[G],X=T.indexOf(ge);X>=0&&(T[X]=null,S[X].disconnect(ge))}for(let G=0;G<U.added.length;G++){let ge=U.added[G],X=T.indexOf(ge);if(X===-1){for(let De=0;De<S.length;De++)if(De>=T.length){T.push(ge),X=De;break}else if(T[De]===null){T[De]=ge,X=De;break}if(X===-1)break}let ye=S[X];ye&&ye.connect(ge)}}let se=new L,ae=new L;function de(U,G,ge){se.setFromMatrixPosition(G.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);let X=se.distanceTo(ae),ye=G.projectionMatrix.elements,De=ge.projectionMatrix.elements,je=ye[14]/(ye[10]-1),he=ye[14]/(ye[10]+1),pe=(ye[9]+1)/ye[5],Me=(ye[9]-1)/ye[5],Se=(ye[8]-1)/ye[0],we=(De[8]+1)/De[0],Ze=je*Se,qe=je*we,Ke=X/(-Se+we),et=Ke*-Se;if(G.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(et),U.translateZ(Ke),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ye[10]===-1)U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let F=je+Ke,vt=he+Ke,dt=Ze-et,C=qe+(X-et),_=pe*he/vt*F,q=Me*he/vt*F;U.projectionMatrix.makePerspective(dt,C,_,q,F,vt),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function We(U,G){G===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(G.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let G=U.near,ge=U.far;p.texture!==null&&(p.depthNear>0&&(G=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),K.near=O.near=I.near=G,K.far=O.far=I.far=ge,(B!==K.near||Z!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),B=K.near,Z=K.far),K.layers.mask=U.layers.mask|6,I.layers.mask=K.layers.mask&-5,O.layers.mask=K.layers.mask&-3;let X=U.parent,ye=K.cameras;We(K,X);for(let De=0;De<ye.length;De++)We(ye[De],X);ye.length===2?de(K,I,O):K.projectionMatrix.copy(I.projectionMatrix),A===null&&U.isPerspectiveCamera&&(A={camera:U,fov:U.fov,zoom:U.zoom}),R(U,K,X)};function R(U,G,ge){ge===null?U.matrix.copy(G.matrixWorld):(U.matrix.copy(ge.matrixWorld),U.matrix.invert(),U.matrix.multiply(G.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ir*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(K)},this.getCameraTexture=function(U){return m[U]};let V=null;function J(U,G){if(h=G.getViewerPose(c||a),g=G,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let X=!1;ge.length!==K.cameras.length&&(K.cameras.length=0,X=!0);for(let he=0;he<ge.length;he++){let pe=ge[he],Me=null;if(d!==null)Me=d.getViewport(pe);else{let we=f.getViewSubImage(u,pe);Me=we.viewport,he===0&&(e.setRenderTargetTextures(x,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(x))}let Se=W[he];Se===void 0&&(Se=new ln,Se.layers.enable(he),Se.viewport=new Pt,W[he]=Se),Se.matrix.fromArray(pe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(pe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Me.x,Me.y,Me.width,Me.height),he===0&&(K.matrix.copy(Se.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),X===!0&&K.cameras.push(Se)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let he=f.getDepthInformation(ge[0]);he&&he.isValid&&he.texture&&p.init(he,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let he=0;he<ge.length;he++){let pe=ge[he].camera;if(pe){let Me=m[pe];Me||(Me=new ta,m[pe]=Me);let Se=f.getCameraImage(pe);Me.sourceTexture=Se}}}}for(let ge=0;ge<S.length;ge++){let X=T[ge],ye=S[ge];X!==null&&ye!==void 0&&ye.update(X,G,c||a)}V&&V(U,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let _e=new Ld;_e.setAnimationLoop(J),this.setAnimationLoop=function(U){V=U},this.dispose=function(){}}},P_=new bt,Bd=new ot;Bd.set(-1,0,0,0,1,0,0,0,1);function L_(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ph(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,M,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),M=b.envMap,x=b.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let T=S.program;n.uniformBlockBinding(x,T)}function c(x,S){let T=s[x.id];T===void 0&&(p(x),T=h(x),s[x.id]=T,x.addEventListener("dispose",b));let E=S.program;n.updateUBOMapping(x,E);let y=e.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function h(x){let S=f();x.__bindingPointIndex=S;let T=i.createBuffer(),E=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],T=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,A=T.length;y<A;y++){let I=T[y];if(Array.isArray(I))for(let O=0,W=I.length;O<W;O++)d(I[O],y,O,E);else d(I,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,T,E){if(v(x,S,T,E)===!0){let y=x.__offset,A=x.value;if(Array.isArray(A)){let I=0;for(let O=0;O<A.length;O++){let W=A[O],K=m(W);g(W,x.__data,I),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,S,T){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,T)}function v(x,S,T,E){let y=x.value,A=S+"_"+T;if(E[A]===void 0)return typeof y=="number"||typeof y=="boolean"?E[A]=y:ArrayBuffer.isView(y)?E[A]=y.slice():E[A]=y.clone(),!0;{let I=E[A];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return E[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function p(x){let S=x.uniforms,T=0,E=16;for(let A=0,I=S.length;A<I;A++){let O=Array.isArray(S[A])?S[A]:[S[A]];for(let W=0,K=O.length;W<K;W++){let B=O[W],Z=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,ie=Z.length;ee<ie;ee++){let xe=Z[ee],se=m(xe),ae=T%E,de=ae%se.boundary,We=ae+de;T+=de,We!==0&&E-We<se.storage&&(T+=E-We),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=se.storage}}}let y=T%E;return y>0&&(T+=E-y),x.__size=T,x.__cache={},this}function m(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){let S=x.target;S.removeEventListener("dispose",b);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function U_(){return ai===null&&(ai=new Qr(N_,16,16,es,qn),ai.name="DFG_LUT",ai.minFilter=Qt,ai.magFilter=Qt,ai.wrapS=Qn,ai.wrapT=Qn,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var Xl=class{constructor(e={}){let{canvas:t=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=d,p=new Set([al,rl,sl]),m=new Set([yn,Xn,gr,xr,tl,nl]),b=new Uint32Array(4),M=new Int32Array(4),x=new L,S=null,T=null,E=[],y=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,W=null,K=null,B=null,Z=null;this._outputColorSpace=qt;let ee=0,ie=0,xe=null,se=-1,ae=null,de=new Pt,We=new Pt,R=null,V=new ht(0),J=0,_e=t.width,U=t.height,G=1,ge=null,X=null,ye=new Pt(0,0,_e,U),De=new Pt(0,0,_e,U),je=!1,he=new or,pe=!1,Me=!1,Se=new bt,we=new L,Ze=new Pt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function et(){return xe===null?G:1}let F=n;function vt(w,k){return t.getContext(w,k)}let dt,C,_,q,j,re,be,Ee,oe,fe,Ie,Je,Pe,Ce,Ve,Qe,at,H,Re,ue,Te,Fe,me;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",dn,!1),F===null){let k="webgl2";if(F=vt(k,w),F===null)throw vt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(w){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),st("WebGLRenderer: "+w.message),w}function $e(){dt=new G0(F),dt.init(),Te=new C_(F,dt),C=new L0(F,dt,e,Te),_=new A_(F,dt),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),K=F.createFramebuffer(),B=F.createFramebuffer(),Z=F.createFramebuffer(),q=new X0(F),j=new d_,re=new E_(F,dt,_,j,C,Te,q),be=new V0(I),Ee=new Yp(F),Fe=new I0(F,Ee),oe=new H0(F,Ee,q,Fe),fe=new Y0(F,oe,Ee,Fe,q),H=new q0(F,C,re),Ve=new D0(j),Ie=new u_(I,be,dt,C,Fe,Ve),Je=new L_(I,j),Pe=new p_,Ce=new v_(dt),at=new R0(I,be,_,fe,g,l),Qe=new T_(I,fe,C),me=new D_(F,q,C,_),Re=new P0(F,dt,q),ue=new W0(F,dt,q),q.programs=Ie.programs,I.capabilities=C,I.extensions=dt,I.properties=j,I.renderLists=Pe,I.shadowMap=Qe,I.state=_,I.info=q}v!==yn&&(A=new J0(v,t.width,t.height,o,s,r));let Ge=new Lh(I,F);this.xr=Ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(_e,U,!1))},this.getSize=function(w){return w.set(_e,U)},this.setSize=function(w,k,te=!0){if(Ge.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=w,U=k,t.width=Math.floor(w*G),t.height=Math.floor(k*G),te===!0&&(t.style.width=w+"px",t.style.height=k+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(_e*G,U*G).floor()},this.setDrawingBufferSize=function(w,k,te){_e=w,U=k,G=te,t.width=Math.floor(w*te),t.height=Math.floor(k*te),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(v===yn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(de)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,k,te,$){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,k,te,$),_.viewport(de.copy(ye).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,k,te,$){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,k,te,$),_.scissor(We.copy(De).multiplyScalar(G).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){_.setScissorTest(je=w)},this.setOpaqueSort=function(w){ge=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,te=!0){let $=0;if(w){let Q=!1;if(xe!==null){let Ne=xe.texture.format;Q=p.has(Ne)}if(Q){let Ne=xe.texture.type,Oe=m.has(Ne),Le=at.getClearColor(),Be=at.getClearAlpha(),Ye=Le.r,lt=Le.g,ft=Le.b;Oe?(b[0]=Ye,b[1]=lt,b[2]=ft,b[3]=Be,F.clearBufferuiv(F.COLOR,0,b)):(M[0]=Ye,M[1]=lt,M[2]=ft,M[3]=Be,F.clearBufferiv(F.COLOR,0,M))}else $|=F.COLOR_BUFFER_BIT}k&&($|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),W=w},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),at.dispose(),Pe.dispose(),Ce.dispose(),j.dispose(),be.dispose(),fe.dispose(),Fe.dispose(),me.dispose(),Ie.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",za),Ge.removeEventListener("sessionend",Ds),Un.stop()};function At(w){w.preventDefault(),uh("WebGLRenderer: Context Lost."),O=!0}function Mt(){uh("WebGLRenderer: Context Restored."),O=!1;let w=q.autoReset,k=Qe.enabled,te=Qe.autoUpdate,$=Qe.needsUpdate,Q=Qe.type;$e(),q.autoReset=w,Qe.enabled=k,Qe.autoUpdate=te,Qe.needsUpdate=$,Qe.type=Q}function dn(w){st("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fn(w){let k=w.target;k.removeEventListener("dispose",fn),Zn(k)}function Zn(w){Ba(w),j.remove(w)}function Ba(w){let k=j.get(w).programs;k!==void 0&&(k.forEach(function(te){Ie.releaseProgram(te)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,te,$,Q,Ne){k===null&&(k=qe);let Oe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Le=Ut(w,k,te,$,Q);_.setMaterial($,Oe);let Be=te.index,Ye=1;if($.wireframe===!0){if(Be=oe.getWireframeAttribute(te),Be===void 0)return;Ye=2}let lt=te.drawRange,ft=te.attributes.position,He=lt.start*Ye,St=(lt.start+lt.count)*Ye;Ne!==null&&(He=Math.max(He,Ne.start*Ye),St=Math.min(St,(Ne.start+Ne.count)*Ye)),Be!==null?(He=Math.max(He,0),St=Math.min(St,Be.count)):ft!=null&&(He=Math.max(He,0),St=Math.min(St,ft.count));let Ft=St-He;if(Ft<0||Ft===1/0)return;Fe.setup(Q,$,Le,te,Be);let Ct,wt=Re;if(Be!==null&&(Ct=Ee.get(Be),wt=ue,wt.setIndex(Ct)),Q.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*et()),wt.setMode(F.LINES)):wt.setMode(F.TRIANGLES);else if(Q.isLine){let P=$.linewidth;P===void 0&&(P=1),_.setLineWidth(P*et()),Q.isLineSegments?wt.setMode(F.LINES):Q.isLineLoop?wt.setMode(F.LINE_LOOP):wt.setMode(F.LINE_STRIP)}else Q.isPoints?wt.setMode(F.POINTS):Q.isSprite&&wt.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let P=Q._multiDrawStarts,D=Q._multiDrawCounts,N=Q._multiDrawCount,z=Be?Ee.get(Be).bytesPerElement:1,ce=j.get($).currentProgram.getUniforms();for(let ne=0;ne<N;ne++)ce.setValue(F,"_gl_DrawID",ne),wt.render(P[ne]/z,D[ne])}else if(Q.isInstancedMesh)wt.renderInstances(He,Ft,Q.count);else if(te.isInstancedBufferGeometry){let P=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,D=Math.min(te.instanceCount,P);wt.renderInstances(He,Ft,D)}else wt.render(He,Ft)};function Cr(w,k,te,$){W!==null&&w.isNodeMaterial&&W.setObject($,w),pe===!0&&Ve.setState(w,te,!1),w.transparent===!0&&w.side===Jt&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,gi(w,k,$),w.side=$i,w.needsUpdate=!0,gi(w,k,$),w.side=Jt):gi(w,k,$)}this.compile=function(w,k,te=null){te===null&&(te=w),W!==null&&W.renderStart(w,k,te),T=Ce.get(te),T.init(k),y.push(T),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),w!==te&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),Me=this.localClippingEnabled,pe=Ve.init(this.clippingPlanes,Me),pe===!0&&Ve.setGlobalState(this.clippingPlanes,k),W!==null&&Qe.render(T.state.shadowsArray,te,k);let $=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){let Le=Ne[Oe];Cr(Le,te,k,Q),$.add(Le)}else Cr(Ne,te,k,Q),$.add(Ne)}),T=y.pop(),W!==null&&W.renderEnd(),$},this.compileAsync=function(w,k,te=null){let $=this.compile(w,k,te);return new Promise(Q=>{function Ne(){if($.forEach(function(Oe){let Be=j.get(Oe).currentProgram;(Be===void 0||Be.isReady())&&$.delete(Oe)}),$.size===0){Q(w);return}setTimeout(Ne,10)}dt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Di=null;function ka(w){Di&&Di(w)}function za(){Un.stop()}function Ds(){Un.start()}let Un=new Ld;Un.setAnimationLoop(ka),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){Di=w,Ge.setAnimationLoop(w),w===null?Un.stop():Un.start()},Ge.addEventListener("sessionstart",za),Ge.addEventListener("sessionend",Ds),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;W!==null&&W.renderStart(w,k);let te=Ge.enabled===!0&&Ge.isPresenting===!0,$=A!==null&&(xe===null||te)&&A.begin(I,xe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(k),k=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,k,xe),T=Ce.get(w,y.length),T.init(k),T.state.textureUnits=re.getTextureUnits(),y.push(T),Se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),he.setFromProjectionMatrix(Se,Gn,k.reversedDepth),Me=this.localClippingEnabled,pe=Ve.init(this.clippingPlanes,Me),S=Pe.get(w,E.length),S.init(),E.push(S),Ge.enabled===!0&&Ge.isPresenting===!0){let Oe=I.xr.getDepthSensingMesh();Oe!==null&&Jn(Oe,k,-1/0,I.sortObjects)}Jn(w,k,0,I.sortObjects),S.finish(),W!==null&&W.updateLights(T.state.lightsArray),I.sortObjects===!0&&S.sort(ge,X),Ke=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Ke&&at.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ve.beginShadows();let Q=T.state.shadowsArray;if(Qe.render(Q,w,k),pe===!0&&Ve.endShadows(),($&&A.hasRenderPass())===!1){let Oe=S.opaque,Le=S.transmissive;if(T.setupLights(),k.isArrayCamera){let Be=k.cameras;if(Le.length>0)for(let Ye=0,lt=Be.length;Ye<lt;Ye++){let ft=Be[Ye];fi(Oe,Le,w,ft)}Ke&&at.render(w);for(let Ye=0,lt=Be.length;Ye<lt;Ye++){let ft=Be[Ye];$n(S,w,ft,ft.viewport)}}else Le.length>0&&fi(Oe,Le,w,k),Ke&&at.render(w),$n(S,w,k)}xe!==null&&ie===0&&(re.updateMultisampleRenderTarget(xe),re.updateRenderTargetMipmap(xe)),$&&A.end(I),w.isScene===!0&&w.onAfterRender(I,w,k),Fe.resetDefaultState(),se=-1,ae=null,y.pop(),y.length>0?(T=y[y.length-1],re.setTextureUnits(T.state.textureUnits),pe===!0&&Ve.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,W!==null&&W.renderEnd()};function Jn(w,k,te,$){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(he)){$&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);let Oe=fe.update(w),Le=w.material;Le.visible&&S.push(w,Oe,Le,te,Ze.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(he))){let Oe=fe.update(w),Le=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ze.copy(Oe.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Le)){let Be=Oe.groups;for(let Ye=0,lt=Be.length;Ye<lt;Ye++){let ft=Be[Ye],He=Le[ft.materialIndex];He&&He.visible&&S.push(w,Oe,He,te,Ze.z,ft,k)}}else Le.visible&&S.push(w,Oe,Le,te,Ze.z,null,k)}}let Ne=w.children;for(let Oe=0,Le=Ne.length;Oe<Le;Oe++)Jn(Ne[Oe],k,te,$)}function $n(w,k,te,$){let{opaque:Q,transmissive:Ne,transparent:Oe}=w;T.setupLightsView(te),pe===!0&&Ve.setGlobalState(I.clippingPlanes,te),$&&_.viewport(de.copy($)),Q.length>0&&pi(Q,k,te),Ne.length>0&&pi(Ne,k,te),Oe.length>0&&pi(Oe,k,te),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function fi(w,k,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let He=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new xn(1,1,{generateMipmaps:!0,type:He?qn:yn,minFilter:Qi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Ne=T.state.transmissionRenderTarget[$.id],Oe=$.viewport||de;Ne.setSize(Oe.z*I.transmissionResolutionScale,Oe.w*I.transmissionResolutionScale);let Le=I.getRenderTarget(),Be=I.getActiveCubeFace(),Ye=I.getActiveMipmapLevel();I.setRenderTarget(Ne),I.getClearColor(V),J=I.getClearAlpha(),J<1&&I.setClearColor(16777215,.5),I.clear(),Ke&&at.render(te);let lt=I.toneMapping;I.toneMapping=Wn;let ft=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),pe===!0&&Ve.setGlobalState(I.clippingPlanes,$),pi(w,te,$),re.updateMultisampleRenderTarget(Ne),re.updateRenderTargetMipmap(Ne),dt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let St=0,Ft=k.length;St<Ft;St++){let Ct=k[St],{object:wt,geometry:P,material:D,group:N}=Ct;if(D.side===Jt&&wt.layers.test($.layers)){let z=D.side;D.side=un,D.needsUpdate=!0,mi(wt,te,$,P,D,N),D.side=z,D.needsUpdate=!0,He=!0}}He===!0&&(re.updateMultisampleRenderTarget(Ne),re.updateRenderTargetMipmap(Ne))}I.setRenderTarget(Le,Be,Ye),I.setClearColor(V,J),ft!==void 0&&($.viewport=ft),I.toneMapping=lt}function pi(w,k,te){let $=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Ne=w.length;Q<Ne;Q++){let Oe=w[Q],{object:Le,geometry:Be,group:Ye}=Oe,lt=Oe.material;lt.allowOverride===!0&&$!==null&&(lt=$),Le.layers.test(te.layers)&&mi(Le,k,te,Be,lt,Ye)}}function mi(w,k,te,$,Q,Ne){W!==null&&Q.isNodeMaterial&&W.setObject(w,Q),w.onBeforeRender(I,k,te,$,Q,Ne),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(I,k,te,$,w,Ne),Q.transparent===!0&&Q.side===Jt&&Q.forceSinglePass===!1?(Q.side=un,Q.needsUpdate=!0,I.renderBufferDirect(te,k,$,Q,w,Ne),Q.side=$i,Q.needsUpdate=!0,I.renderBufferDirect(te,k,$,Q,w,Ne),Q.side=Jt):I.renderBufferDirect(te,k,$,Q,w,Ne),w.onAfterRender(I,k,te,$,Q,Ne)}function gi(w,k,te){k.isScene!==!0&&(k=qe);let $=j.get(w),Q=T.state.lights,Ne=T.state.shadowsArray,Oe=Q.state.version,Le=Ie.getParameters(w,Q.state,Ne,k,te,T.state.lightProbeGridArray),Be=Ie.getProgramCacheKey(Le),Ye=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;let lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=be.get(w.envMap||$.environment,lt),$.envMapRotation=$.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",fn),Ye=new Map,$.programs=Ye);let ft=Ye.get(Be);if(ft!==void 0){if($.currentProgram===ft&&$.lightsStateVersion===Oe)return Ns(w,Le),ft}else Le.uniforms=Ie.getUniforms(w),W!==null&&w.isNodeMaterial&&W.build(w,te,Le),w.onBeforeCompile(Le,I),ft=Ie.acquireProgram(Le,Be),Ye.set(Be,ft),$.uniforms=Le.uniforms;let He=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Ve.uniform),Ns(w,Le),$.needsLights=Ni(w),$.lightsStateVersion=Oe,$.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.sunLights.value=Q.state.sun,He.sunLightShadows.value=Q.state.sunShadow,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.sunShadowMatrix.value=Q.state.sunShadowMatrix,He.sunShadowCascade.value=Q.state.sunShadowCascade,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.lightProbeGrid=T.state.lightProbeGridArray.length>0,$.currentProgram=ft,$.uniformsList=null,ft}function ls(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=vr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ns(w,k){let te=j.get(w);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function Va(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let te=0,$=w.length;te<$;te++){let Q=w[te];if(Q.texture!==null&&Q.boundingBox.containsPoint(x))return Q}return null}function Ut(w,k,te,$,Q){k.isScene!==!0&&(k=qe),re.resetTextureUnits();let Ne=k.fog,Oe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,Le=xe===null?I.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:_t.workingColorSpace,Be=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ye=be.get($.envMap||Oe,Be),lt=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ft=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!te.morphAttributes.position,St=!!te.morphAttributes.normal,Ft=!!te.morphAttributes.color,Ct=Wn;$.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ct=I.toneMapping);let wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,P=wt!==void 0?wt.length:0,D=j.get($),N=T.state.lights;if(pe===!0&&(Me===!0||w!==ae)){let rt=w===ae&&$.id===se;Ve.setState($,w,rt)}let z=!1;$.version===D.__version?(D.needsLights&&D.lightsStateVersion!==N.state.version||D.outputColorSpace!==Le||Q.isBatchedMesh&&D.batching===!1||!Q.isBatchedMesh&&D.batching===!0||Q.isBatchedMesh&&D.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&D.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&D.instancing===!1||!Q.isInstancedMesh&&D.instancing===!0||Q.isSkinnedMesh&&D.skinning===!1||!Q.isSkinnedMesh&&D.skinning===!0||Q.isInstancedMesh&&D.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&D.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&D.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&D.instancingMorph===!1&&Q.morphTexture!==null||D.envMap!==Ye||$.fog===!0&&D.fog!==Ne||D.numClippingPlanes!==void 0&&(D.numClippingPlanes!==Ve.numPlanes||D.numIntersection!==Ve.numIntersection)||D.vertexAlphas!==lt||D.vertexTangents!==ft||D.morphTargets!==He||D.morphNormals!==St||D.morphColors!==Ft||D.toneMapping!==Ct||D.morphTargetsCount!==P||!!D.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(z=!0):(z=!0,D.__version=$.version);let ce=D.currentProgram;z===!0&&(ce=gi($,k,Q),W&&$.isNodeMaterial&&W.onUpdateProgram($,ce,D));let ne=!1,ve=!1,ke=!1,ze=ce.getUniforms(),it=D.uniforms;if(_.useProgram(ce.program)&&(ne=!0,ve=!0,ke=!0),$.id!==se&&(se=$.id,ve=!0),D.needsLights){let rt=Va(T.state.lightProbeGridArray,Q);D.lightProbeGrid!==rt&&(D.lightProbeGrid=rt,ve=!0)}if(ne||ae!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ze.setValue(F,"projectionMatrix",w.projectionMatrix),ze.setValue(F,"viewMatrix",w.matrixWorldInverse);let Ot=ze.map.cameraPosition;Ot!==void 0&&Ot.setValue(F,we.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&ze.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ze.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),ae!==w&&(ae=w,ve=!0,ke=!0)}if(D.needsLights&&(N.state.sunShadowMap.length>0&&ze.setValue(F,"sunShadowMap",N.state.sunShadowMap,re),N.state.directionalShadowMap.length>0&&ze.setValue(F,"directionalShadowMap",N.state.directionalShadowMap,re),N.state.spotShadowMap.length>0&&ze.setValue(F,"spotShadowMap",N.state.spotShadowMap,re),N.state.pointShadowMap.length>0&&ze.setValue(F,"pointShadowMap",N.state.pointShadowMap,re)),Q.isSkinnedMesh){ze.setOptional(F,Q,"bindMatrix"),ze.setOptional(F,Q,"bindMatrixInverse");let rt=Q.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),ze.setValue(F,"boneTexture",rt.boneTexture,re))}Q.isBatchedMesh&&(ze.setOptional(F,Q,"batchingTexture"),ze.setValue(F,"batchingTexture",Q._matricesTexture,re),ze.setOptional(F,Q,"batchingIdTexture"),ze.setValue(F,"batchingIdTexture",Q._indirectTexture,re),ze.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ze.setValue(F,"batchingColorTexture",Q._colorsTexture,re));let ct=te.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&H.update(Q,te,ce),(ve||D.receiveShadow!==Q.receiveShadow)&&(D.receiveShadow=Q.receiveShadow,ze.setValue(F,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(it.envMapIntensity.value=k.environmentIntensity),it.dfgLUT!==void 0&&(it.dfgLUT.value=U_()),ve){if(ze.setValue(F,"toneMappingExposure",I.toneMappingExposure),D.needsLights&&cs(it,ke),Ne&&$.fog===!0&&Je.refreshFogUniforms(it,Ne),Je.refreshMaterialUniforms(it,$,G,U,T.state.transmissionRenderTarget[w.id]),D.needsLights&&D.lightProbeGrid){let rt=D.lightProbeGrid;it.probesSH.value=rt.texture,it.probesMin.value.copy(rt.boundingBox.min),it.probesMax.value.copy(rt.boundingBox.max),it.probesResolution.value.copy(rt.resolution)}vr.upload(F,ls(D),it,re)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(vr.upload(F,ls(D),it,re),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ze.setValue(F,"center",Q.center),ze.setValue(F,"modelViewMatrix",Q.modelViewMatrix),ze.setValue(F,"normalMatrix",Q.normalMatrix),ze.setValue(F,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let rt=$.uniformsGroups;for(let Ot=0,pn=rt.length;Ot<pn;Ot++){let xi=rt[Ot];me.update(xi,ce),me.bind(xi,ce)}}return ce}function cs(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Ni(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(w,k,te){let $=j.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),j.get(w.texture).__webglTexture=k,j.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let te=j.get(w);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,te=0){xe=w,ee=k,ie=te;let $=null,Q=!1,Ne=!1;if(w){let Le=j.get(w);if(Le.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,Le.__webglFramebuffer),de.copy(w.viewport),We.copy(w.scissor),R=w.scissorTest,_.viewport(de),_.scissor(We),_.setScissorTest(R),se=-1;return}else if(Le.__webglFramebuffer===void 0)re.setupRenderTarget(w);else if(Le.__hasExternalTextures)re.rebindTextures(w,j.get(w.texture).__webglTexture,j.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let lt=w.depthTexture;if(Le.__boundDepthTexture!==lt){if(lt!==null&&j.has(lt)&&(w.width!==lt.image.width||w.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ne=!0);let Ye=j.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?$=Ye[k][te]:$=Ye[k],Q=!0):w.samples>0&&re.useMultisampledRTT(w)===!1?$=j.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?$=Ye[te]:$=Ye,de.copy(w.viewport),We.copy(w.scissor),R=w.scissorTest}else de.copy(ye).multiplyScalar(G).floor(),We.copy(De).multiplyScalar(G).floor(),R=je;if(te!==0&&($=K),_.bindFramebuffer(F.FRAMEBUFFER,$)&&_.drawBuffers(w,$),_.viewport(de),_.scissor(We),_.setScissorTest(R),Q){let Le=j.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,te)}else if(Ne){let Le=k;for(let Be=0;Be<w.textures.length;Be++){let Ye=j.get(w.textures[Be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Be,Ye.__webglTexture,te,Le)}}else if(w!==null&&te!==0){let Le=j.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Le.__webglTexture,te)}se=-1};function Us(w){let k=j.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=C.textureFormatReadable(w.format),k.__typeReadable=C.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,te,$,Q,Ne,Oe,Le=0){if(!(w&&w.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){_.bindFramebuffer(F.FRAMEBUFFER,Be);try{let Ye=w.textures[Le],lt=Ye.format,ft=Ye.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Le);let He=Us(Ye);if(He.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-$&&te>=0&&te<=w.height-Q&&F.readPixels(k,te,$,Q,Te.convert(lt),Te.convert(ft),Ne)}finally{let Ye=xe!==null?j.get(xe).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,k,te,$,Q,Ne,Oe,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=j.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be)if(k>=0&&k<=w.width-$&&te>=0&&te<=w.height-Q){_.bindFramebuffer(F.FRAMEBUFFER,Be);let Ye=w.textures[Le],lt=Ye.format,ft=Ye.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Le);let He=Us(Ye);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,Ne.byteLength,F.STREAM_READ),F.readPixels(k,te,$,Q,Te.convert(lt),Te.convert(ft),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ft=xe!==null?j.get(xe).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Ft);let Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await td(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ne),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(St),F.deleteSync(Ct),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,te=0){let $=Math.pow(2,-te),Q=Math.floor(w.image.width*$),Ne=Math.floor(w.image.height*$),Oe=k!==null?k.x:0,Le=k!==null?k.y:0;re.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,Oe,Le,Q,Ne),_.unbindTexture()},this.copyTextureToTexture=function(w,k,te=null,$=null,Q=0,Ne=0){let Oe,Le,Be,Ye,lt,ft,He,St,Ft,Ct=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(te!==null)Oe=te.max.x-te.min.x,Le=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,lt=te.min.y,ft=te.isBox3?te.min.z:0;else{let it=Math.pow(2,-Q);Oe=Math.floor(Ct.width*it),Le=Math.floor(Ct.height*it),w.isDataArrayTexture?Be=Ct.depth:w.isData3DTexture?Be=Math.floor(Ct.depth*it):Be=1,Ye=0,lt=0,ft=0}$!==null?(He=$.x,St=$.y,Ft=$.z):(He=0,St=0,Ft=0);let wt=Te.convert(k.format),P=Te.convert(k.type),D;k.isData3DTexture?(re.setTexture3D(k,0),D=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(re.setTexture2DArray(k,0),D=F.TEXTURE_2D_ARRAY):(re.setTexture2D(k,0),D=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let N=_.getParameter(F.UNPACK_ROW_LENGTH),z=_.getParameter(F.UNPACK_IMAGE_HEIGHT),ce=_.getParameter(F.UNPACK_SKIP_PIXELS),ne=_.getParameter(F.UNPACK_SKIP_ROWS),ve=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),_.pixelStorei(F.UNPACK_SKIP_ROWS,lt),_.pixelStorei(F.UNPACK_SKIP_IMAGES,ft);let ke=w.isDataArrayTexture||w.isData3DTexture,ze=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let it=j.get(w),ct=j.get(k),rt=j.get(it.__renderTarget),Ot=j.get(ct.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,rt.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let pn=0;pn<Be;pn++)ke&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,j.get(w).__webglTexture,Q,ft+pn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,j.get(k).__webglTexture,Ne,Ft+pn)),F.blitFramebuffer(Ye,lt,Oe,Le,He,St,Oe,Le,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||j.has(w)){let it=j.get(w),ct=j.get(k);_.bindFramebuffer(F.READ_FRAMEBUFFER,B),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,Z);for(let rt=0;rt<Be;rt++)ke?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.__webglTexture,Q,ft+rt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,it.__webglTexture,Q),ze?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ct.__webglTexture,Ne,Ft+rt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ct.__webglTexture,Ne),Q!==0?F.blitFramebuffer(Ye,lt,Oe,Le,He,St,Oe,Le,F.COLOR_BUFFER_BIT,F.NEAREST):ze?F.copyTexSubImage3D(D,Ne,He,St,Ft+rt,Ye,lt,Oe,Le):F.copyTexSubImage2D(D,Ne,He,St,Ye,lt,Oe,Le);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ze?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(D,Ne,He,St,Ft,Oe,Le,Be,wt,P,Ct.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(D,Ne,He,St,Ft,Oe,Le,Be,wt,Ct.data):F.texSubImage3D(D,Ne,He,St,Ft,Oe,Le,Be,wt,P,Ct):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ne,He,St,Oe,Le,wt,P,Ct.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ne,He,St,Ct.width,Ct.height,wt,Ct.data):F.texSubImage2D(F.TEXTURE_2D,Ne,He,St,Oe,Le,wt,P,Ct);_.pixelStorei(F.UNPACK_ROW_LENGTH,N),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,z),_.pixelStorei(F.UNPACK_SKIP_PIXELS,ce),_.pixelStorei(F.UNPACK_SKIP_ROWS,ne),_.pixelStorei(F.UNPACK_SKIP_IMAGES,ve),Ne===0&&k.generateMipmaps&&F.generateMipmap(D),_.unbindTexture()},this.initRenderTarget=function(w){j.get(w).__webglFramebuffer===void 0&&re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?re.setTextureCube(w,0):w.isData3DTexture?re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?re.setTexture2DArray(w,0):re.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){ee=0,ie=0,xe=null,_.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Pa=new L;function Ln(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Pa.copy(e),Pa[n]=0,Pa.normalize();let c=.5*a/(a+o),h=1-Pa.angleTo(i)/l;return Math.sign(Pa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var La=class i extends Wi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,v=new L,p=.5/a;for(let m=0,b=0;m<f.length;m+=3,b+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:v.set(1,0,0),d[b+0]=Ln(v,c,"z","y",r,n),d[b+1]=1-Ln(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[b+0]=1-Ln(v,c,"z","y",r,n),d[b+1]=1-Ln(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[b+0]=1-Ln(v,c,"x","z",r,e),d[b+1]=Ln(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[b+0]=1-Ln(v,c,"x","z",r,e),d[b+1]=1-Ln(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[b+0]=1-Ln(v,c,"x","y",r,e),d[b+1]=1-Ln(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[b+0]=Ln(v,c,"x","y",r,e),d[b+1]=1-Ln(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function kd({scene:i,camera:e,reduced:t,getRoom:n,diagnostics:s}){let a=new Et,o=new kt,l=e.position.clone(),c=new _n;for(let M=0;M<10;M++){let x=M*Math.PI/5,S=M%2?.045:.1;M?c.lineTo(Math.cos(x)*S,Math.sin(x)*S):c.moveTo(Math.cos(x)*S,Math.sin(x)*S)}c.closePath();let h=[new _s(c),new wn(1,6,4),new wn(1,6,4)],f=["#ffe67c","#80cf5a","#efdfb8"].map(M=>new hn({color:M,transparent:!0,depthWrite:!1,side:Jt})),u=[6,6,4],d=u.map((M,x)=>{let S=new Hn(h[x],f[x],M);return S.instanceMatrix.setUsage(ts),S.frustumCulled=!1,a.add(S),S});a.visible=!1,i.add(a);let g=null;function v(){g=null,a.visible=!1,e.position.copy(l),s.capture=null}function p(M,x){v(),!(!M.captured.length||!n())&&(g={started:performance.now(),room:n().code,revision:n().game.revision,seat:M.seat,token:M.token,victims:new Set(M.captured.map(S=>S.seat+"-"+S.token)),point:x},a.position.set(x.x,.65,x.z))}function m(M){if(!g)return;let x=n(),S=(M-g.started)/1e3;if(x?.code!==g.room||!x.game||x.game.revision<g.revision||S>=1350/1e3){v();return}let T=!t.matches;a.visible=T&&S<.85,e.position.x=l.x+(T&&S<.16?Math.sin(S*90)*.035*(1-S/.16):0);let E=Math.max(0,1-S/.85);a.visible&&d.forEach((y,A)=>{y.material.opacity=E*(A===2?.45:1);for(let I=0;I<u[A];I++){let O=I*Math.PI*2/u[A]+A*.35,W=.14+S*(A===2?.7:1.45);o.position.set(Math.cos(O)*W,A===2?.02:Math.sin(Math.min(1,S/.85)*Math.PI)*.65+.13,Math.sin(O)*W),A===0?(o.quaternion.copy(e.quaternion),o.rotateZ(S*6+I),o.scale.setScalar(1.4)):(o.rotation.set(S*5+I,O,S*3),o.scale.set(A===1?.12:.16,A===1?.025:.14,A===1?.22:.16)),o.updateMatrix(),y.setMatrixAt(I,o.matrix)}y.instanceMatrix.needsUpdate=!0}),s.capture={seat:g.seat,token:g.token,victims:[...g.victims],age:S,routine:["belly-laugh","clap","head-wiggle","wink"][g.seat],particles:a.visible?16:0,reducedMotion:!T,poses:[]}}function b(M,x){if(!g||t.matches)return;let S=(x-g.started)/1e3,T=Math.min(1,S/.1,(1.35-S)/.2);if(M.seat===g.seat&&M.token===g.token){M.ring.visible=!0,M.halo.visible=!0;let E=Math.max(0,Math.sin(S*14))*.11*T;M.body.position.y+=E+(S<.3?Math.sin(S/.3*Math.PI)*.25:0),M.seat===0?(M.body.rotation.x=Math.sin(S*17)*.12*T,M.body.scale.y=1-Math.abs(Math.sin(S*17))*.06*T,M.head.rotation.x-=Math.abs(Math.sin(S*17))*.1*T,M.arms.forEach((y,A)=>y.rotation.z=(A?1:-1)*(.8+Math.sin(S*17)*.35)*T)):M.seat===1?(M.arms.forEach((y,A)=>y.rotation.z=(A?1:-1)*(1.15+Math.sin(S*20)*.55)*T),M.body.rotation.z=Math.sin(S*12)*.08*T):M.seat===2?(M.head.rotation.z=Math.sin(S*22)*.2*T,M.head.rotation.y=Math.sin(S*15)*.23*T,M.arms.forEach((y,A)=>y.rotation.z=(A?1:-1)*1.25*T)):(M.head.rotation.z=-.16*T,M.arms[1].rotation.z=(1.8+Math.sin(S*18)*.25)*T,S>.5&&S<1.05&&(M.eyeParts[1].pupil.scale.y=.008,M.eyeParts[1].glint.scale.y=.003))}else if(g.victims.has(M.seat+"-"+M.token))if(M.arms.forEach((E,y)=>E.rotation.z=(y?1:-1)*2.2*T),S<.22)M.eyes.scale.y=1.45,M.head.rotation.z=Math.sin(S*45)*.14,M.body.scale.set(1.1,.88,1.05);else if(S<.92){let E=(S-.22)/.7;M.body.position.y+=Math.sin(E*Math.PI)*1.35,M.body.rotation.y=E*Math.PI*4,M.body.rotation.z=Math.sin(E*Math.PI)*.35,M.feet.forEach(y=>y.rotation.x=-.5)}else{let E=Math.max(0,Math.sin((S-.92)/.25*Math.PI))*.16*T;M.body.scale.set(1+E,1-E,1+E*.5),M.head.rotation.z=-.18*T}(M.seat===g.seat&&M.token===g.token||g.victims.has(M.seat+"-"+M.token))&&s.capture?.poses.push({seat:M.seat,token:M.token,height:M.body.position.y,spin:M.body.rotation.y,headTilt:M.head.rotation.z,rightEye:M.eyeParts[1].pupil.scale.y})}return{start:p,update:m,pose:b,reset:v,duration:1350,dispose(){v(),i.remove(a),d.forEach(M=>M.dispose()),h.forEach(M=>M.dispose()),f.forEach(M=>M.dispose())}}}function Vd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Nt,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=zd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);let g=zd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function zd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Kt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){let v=h.getComponent(u,g);o.setComponent(u+f,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var ns=["Explorer","Forest pirate","Leaf royalty","Flower friend","Party pal","Sky explorer"];function Gd({scene:i,camera:e,board:t,animals:n,track:s,reduced:r,getRoom:a,diagnostics:o}){let l=new ys({vertexColors:!0,roughness:.75}),c=new hn({vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1}),h=new wn(1,16,10),f=[],u=new Map,d=new kt,g=new L,v=new L,p=new L,m=new bt().makeScale(0,0,0),b=new Map,M=null,x=null,S=null;function T(R,V,J,_e=[0,0,0],U=[1,1,1],G=[0,0,0]){let ge=V.clone(),X=ge.index?ge.toNonIndexed():ge;X!==ge&&ge.dispose(),d.position.fromArray(_e),d.scale.fromArray(U),d.rotation.fromArray(G),d.updateMatrix(),X.applyMatrix4(d.matrix);let ye=new ht(J),De=new Float32Array(X.attributes.position.count*3);for(let je=0;je<De.length;je+=3)De[je]=ye.r,De[je+1]=ye.g,De[je+2]=ye.b;X.setAttribute("color",new Kt(De,3)),R.push(X)}let E=(R,V,J,_e,U,G,ge=G,X=G,ye=[0,0,0])=>T(R,h,V,[J,_e,U],[G,ge,X],ye);function y(R,V,J,_e,U,G,ge){let X=new Cn(G,G,ge,24);T(R,X,V,[J,_e,U]),X.dispose()}function A(R){let V=Vd(R);return R.forEach(J=>J.dispose()),f.push(V),V}function I(R,V){let J=new Zt(A(R),l);return J.castShadow=!1,V.add(J),J}function O(R,V,J,_e=.3){for(let U=0;U<5;U++){let G=U*Math.PI*2/5,ge=Math.cos(G)*_e,X=J+Math.sin(G)*_e;for(let ye=0;ye<5;ye++){let De=ye*Math.PI*2/5;E(R,U%2?"#ffc56a":"#ff88ae",ge+Math.cos(De)*.045,V,X+Math.sin(De)*.045,.045,.022,.045)}E(R,"#ffe990",ge,V+.025,X,.027)}}function W(R,V=!1){for(let J of[-.14,.14])E(R,V?"#a96b30":"#3e4030",J,-.32,.29,.128,.1,.04),E(R,V?"#79cdd0":"#253a35",J,-.32,.327,.097,.072,.014),E(R,"#e0f6e8",J-.03,-.292,.342,.018,.023,.006);E(R,"#d0a560",0,-.315,.323,.035,.015,.014)}function K(R){let V=[],J=[];if(R===0)y(V,"#e8bf70",0,0,0,.44,.035),E(V,"#e8c886",0,.105,0,.3,.19,.29),y(V,"#4d7340",0,.055,0,.307,.075),E(V,"#8bc65b",.24,.23,-.07,.04,.2,.025,[0,0,-.45]),W(V),E(J,"#d7c277",0,.85,.22,.2,.045,.04);else if(R===1){let U=new _n;U.moveTo(-.46,-.02),U.quadraticCurveTo(-.4,.43,0,.15),U.quadraticCurveTo(.4,.43,.46,-.02),U.closePath();let G=new Ci(U,{depth:.08,bevelEnabled:!1});T(V,G,"#354039",[0,0,.015]),G.dispose(),E(V,"#ffdc81",0,.125,.11,.074,.052,.025);for(let ge of[-.09,.09])E(V,"#45302a",ge,-.5,.39,.11,.038,.025,[0,0,ge>0?.3:-.3]);E(J,"#ce6350",0,.84,.19,.2,.07,.06)}else if(R===2){y(V,"#c8a559",0,.015,0,.29,.04);for(let U=0;U<7;U++){let G=U*Math.PI*2/7;E(V,U%2?"#9bd75c":"#429c46",Math.cos(G)*.28,.1,Math.sin(G)*.28,.06,.17,.025,[0,-G,Math.cos(G)*.28])}E(V,"#ffe78f",0,.075,.3,.065,.065,.026),E(J,"#53916a",0,.49,-.3,.32,.4,.055),E(J,"#e4cb6d",0,.83,.22,.055)}else if(R===3){y(V,"#e4c285",0,0,0,.42,.035),E(V,"#e8ce9b",0,.07,0,.29,.13,.28),O(V,.07,0);for(let U of[-.17,0,.17]){E(J,"#72b65a",U,.82-Math.abs(U)*.25,.24,.08,.065,.025);for(let G=0;G<5;G++){let ge=G*Math.PI*2/5;E(J,"#ff9fb8",U+Math.cos(ge)*.035,.81-Math.abs(U)*.25+Math.sin(ge)*.035,.275,.035,.035,.012)}E(J,"#ffe68b",U,.81-Math.abs(U)*.25,.292,.023,.023,.009)}}else if(R===4){let U=new si(.25,.48,16);T(V,U,"#a47ad6",[0,.22,0],[1,1,1],[0,0,-.18]),U.dispose(),E(V,"#ffe294",.045,.45,0,.068);for(let G of[-.12,.12])E(J,G<0?"#e67a89":"#ffbc63",G,.81,.245,.13,.07,.035,[0,0,G<0?-.25:.25]);E(J,"#fff0a4",0,.81,.285,.04)}else E(V,"#a87642",0,.04,-.02,.3,.16,.29),W(V,!0),E(J,"#fa9d50",0,.82,.2,.21,.065,.07),E(J,"#ef7144",.19,.66,.245,.065,.18,.035,[0,0,-.3]);let _e={head:new Hn(A(V),l,17),body:new Hn(A(J),l,16)};for(let U of Object.values(_e)){U.frustumCulled=!1,U.instanceMatrix.setUsage(ts),U.visible=!1;for(let G=0;G<U.count;G++)U.setMatrixAt(G,m);i.add(U)}return u.set(R,_e),_e}function B(){let R=new Et,V=new Et,J=new Et,_e=[];R.add(V),J.position.set(0,1.03,0),J.rotation.x=-.35,V.add(J);let U=[],G=[];E(U,"#985831",0,.56,0,.25,.34,.2),E(U,"#ead3a0",0,.55,.18,.17,.24,.035),E(U,"#426f35",.25,.46,-.19,.15,.22,.14);let ge=new hr([new L(.17,.4,-.13),new L(.52,.33,-.2),new L(.75,.58,-.17),new L(.7,.86,-.12),new L(.49,.82,-.1)]),X=new Xi(ge,16,.043,6,!1);T(U,X,"#985831"),X.dispose(),E(G,"#96512c",0,0,0,.34,.32,.29),E(G,"#ead3a0",0,-.04,.245,.26,.235,.05);for(let je of[-1,1]){E(G,"#985831",je*.34,.05,0,.15,.16,.09),E(G,"#e9bc89",je*.35,.05,.07,.085,.1,.018),E(G,"#30271d",je*.1,.005,.3,.045,.065,.025),E(G,"#fff6dc",je*.1-.012,.03,.32,.012,.018,.008),E(U,"#754326",je*.13,.16,.05,.115,.12,.17);let he=new Et,pe=[];he.position.set(je*.26,.72,.045),V.add(he),E(pe,"#985831",0,-.15,0,.085,.22,.09),E(pe,"#eacb93",0,-.32,.02,.09,.085,.09),I(pe,he),_e.push(he)}E(G,"#66412c",0,-.095,.31,.049,.035,.028);let ye=new Ei(new L(-.09,-.13,.31),new L(0,-.23,.345),new L(.09,-.13,.31)),De=new Xi(ye,10,.012,5,!1);return T(G,De,"#764c34"),De.dispose(),I(U,V),I(G,J),R.visible=!1,i.add(R),{root:R,body:V,head:J,arms:_e}}function Z(){let R=[],V=new Ri(.36,.026,5,24);T(R,V,"#ffe08b",[0,0,0],[1,1,1],[Math.PI/2,0,0]),V.dispose();let J=new wn(1,8,5);T(R,J,"#a4e271",[0,0,0],[.12,.025,.22],[0,.7,0]),J.dispose();let _e=new Hn(A(R),c,2);return _e.frustumCulled=!1,_e.instanceMatrix.setUsage(ts),i.add(_e),_e}let ee=document.createElement("div");ee.className="forest-gift-callout",ee.hidden=!0,ee.setAttribute("aria-hidden","true"),t.append(ee);function ie(){x=null,b.clear(),M&&(M.root.visible=!1),ee.hidden=!0,o.forestGift=null}function xe(R){R&&b.set(R.seat+"-"+R.token,R.outfit)}function se(R){!R||!a()?.game||(M??=B(),x={...R,started:performance.now(),room:a().code,revision:a().game.revision,point:null},ee.textContent="\u0D15\u0D41\u0D30\u0D19\u0D4D\u0D19\u0D28\u0D4D\u0D31\u0D46 \u0D38\u0D2E\u0D4D\u0D2E\u0D3E\u0D28\u0D02! \u{1F412} "+ns[R.outfit],ee.hidden=!1)}let ae=R=>(R=Pi.clamp(R,0,1),R*R*(3-2*R));function de(R,V){if(!x||R.seat!==x.seat||R.token!==x.token)return;x.point=R.g.position.clone();let J=(V-x.started)/1e3;r.matches||(J>1.15&&J<1.9&&(R.arms[1].rotation.z=2.25,R.head.rotation.z=-.15),J>1.9&&J<2.5&&(R.body.position.y+=Math.max(0,Math.sin(J*17))*.12,R.arms.forEach((_e,U)=>_e.rotation.z=(U?1:-1)*1.6),R.head.rotation.z=Math.sin(J*14)*.08))}function We(R){let V=a(),J=V?.game,_e=J?.forestGifts;x&&(V?.code!==x.room||!J||J.revision<x.revision)&&ie(),x&&R-x.started>=3e3&&(b.delete(x.seat+"-"+x.token),x=null,M.root.visible=!1,ee.hidden=!0);let U=x?(R-x.started)/1e3:0;x&&U>=1.15&&b.delete(x.seat+"-"+x.token);let G=[];if(_e)for(let X of n){let ye=_e.outfits[X.seat]?.[X.token],De=X.seat+"-"+X.token;Number.isInteger(ye)&&ns[ye]&&X.g.visible&&!b.has(De)&&G.push({a:X,kind:ye})}let ge=new Set(G.map(X=>X.kind));x&&ge.add(x.outfit);for(let X of ge)u.has(X)||K(X);for(let X of u.values())X.head.count=0,X.body.count=0,X.head.visible=!1,X.body.visible=!1;for(let{a:X,kind:ye}of G){let De=u.get(ye);if(d.position.set(0,X.seat===2?.4:.34,0),d.rotation.set(0,0,0),d.scale.setScalar(1),x?.seat===X.seat&&x.token===X.token&&!r.matches){let je=ae((U-1.4)/.45);d.rotation.y=Math.PI*(1-je),d.rotation.z=.18*(1-je)}d.updateMatrix(),De.head.setMatrixAt(De.head.count++,d.matrix.premultiply(X.head.matrixWorld)),De.body.setMatrixAt(De.body.count++,X.body.matrixWorld),De.head.visible=!0,De.body.visible=!0}if(M&&(M.root.visible=!!x&&!r.matches&&U<2.9),x?.point){let X=x.point,ye=ae(U/.6),De=ae((U-2.4)/.5),je=X.x<0?-1:1,he=X.x+je*1.05,pe=X.z+.4,Me=je*8.8,Se=X.z-1.1;if(M.root.position.set(Pi.lerp(Me,he,ye)+De*(Me-he),.5+Math.sin(ye*Math.PI)*1.3+Math.sin(De*Math.PI)*1.15,Pi.lerp(Se,pe,ye)+De*(Se-pe)),M.root.rotation.y=je>0?-.45:.45,M.root.scale.setScalar(.94),M.body.position.y=Math.abs(Math.sin(U*12))*.06,M.body.rotation.z=Math.sin(U*11)*.06,M.head.rotation.z=Math.sin(U*8)*.1,M.arms[0].rotation.z=-1.55,M.arms[1].rotation.z=U<.8?2.3:.8,U>1.9&&U<2.4&&M.arms.forEach((we,Ze)=>we.rotation.z=(Ze?1:-1)*(1.2+Math.sin(U*24)*.5)),M.root.updateMatrixWorld(!0),U<1.15&&!r.matches){let we=n[x.seat*4+x.token],Ze=u.get(x.outfit);v.set(0,-.35,.12).applyMatrix4(M.arms[0].matrixWorld),p.set(0,we.seat===2?.4:.34,0).applyMatrix4(we.head.matrixWorld);let qe=ae((U-.8)/.35);d.position.copy(v).lerp(p,qe),d.position.y+=Math.sin(qe*Math.PI)*.3,d.rotation.set(.25*(1-qe),qe*Math.PI,.18),d.scale.setScalar(we.g.scale.x),d.updateMatrix(),Ze.head.setMatrixAt(Ze.head.count++,d.matrix),Ze.head.visible=!0}g.set(X.x,2.3,X.z).project(e),ee.style.left=Pi.clamp((g.x*.5+.5)*100,25,75)+"%",ee.style.top=Pi.clamp((-g.y*.5+.5)*100,28,65)+"%"}x&&r.matches&&b.delete(x.seat+"-"+x.token);for(let X of u.values())X.head.instanceMatrix.needsUpdate=!0,X.body.instanceMatrix.needsUpdate=!0;_e?(S??=Z(),S.visible=J.phase!=="done"&&J.phase!=="celebration"&&J.active.some(X=>_e.counts[X]<2),_e.tiles.forEach((X,ye)=>{let[De,je]=s[X];d.position.set(je-7,.515,De-7),d.rotation.set(0,r.matches?0:R/1700,0),d.scale.setScalar(r.matches?1:1+Math.sin(R/300+ye)*.06),d.updateMatrix(),S.setMatrixAt(ye,d.matrix)}),S.instanceMatrix.needsUpdate=!0):S&&(S.visible=!1),o.forestGift=x?{seat:x.seat,token:x.token,outfit:x.outfit,age:U,monkeyVisible:M.root.visible,reducedMotion:r.matches}:null,o.outfits=G.map(({a:X,kind:ye})=>({seat:X.seat,token:X.token,kind:ye,name:ns[ye]})),o.giftTiles=_e?.tiles||[]}return{start:se,defer:xe,pose:de,frame:We,reset:ie,duration:3e3,dispose(){ie(),ee.remove(),M&&i.remove(M.root),S&&(i.remove(S),S.dispose());for(let R of u.values())for(let V of Object.values(R))i.remove(V),V.dispose();f.forEach(R=>R.dispose()),h.dispose(),l.dispose(),c.dispose()}}}function Hd({board:i,tokenNodes:e,comedy:t,getRoom:n,getSeat:s,getServerTime:r=()=>Date.now(),colors:a,track:o,lanes:l,yards:c,safe:h}){let f=()=>innerWidth<650||matchMedia("(pointer: coarse)").matches,u=f(),d=matchMedia("(prefers-reduced-motion: reduce)"),g;try{g=new Xl({antialias:!u,alpha:!1,powerPreference:"high-performance"})}catch{return document.body.classList.add("webgl-fallback"),null}g.setPixelRatio(Math.min(devicePixelRatio,u?1.5:1.65)),g.outputColorSpace=qt,g.toneMapping=ya,g.toneMappingExposure=1.02,g.shadowMap.enabled=!u,g.shadowMap.type=vs,g.domElement.className="jungle-canvas",g.domElement.setAttribute("aria-hidden","true"),i.prepend(g.domElement),document.body.classList.add("scene-3d");let v=new Zr;v.background=new ht("#0f4539"),v.fog=new Yr("#0c4835",36,70);let p=new Ji(-12,12,8.5,-8.5,.1,100);p.position.set(0,24,15),p.lookAt(0,.3,0),v.add(new ma("#eaffd7","#143e34",1.05));let m=new fr("#fff0be",2.9);m.position.set(-9,20,10),m.castShadow=!0,m.shadow.mapSize.set(u?1024:2048,u?1024:2048),Object.assign(m.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:50}),m.shadow.bias=-8e-4,m.shadow.normalBias=.025,m.shadow.radius=3,v.add(m);let b=new fr("#8bf2f5",.8);b.position.set(12,10,-10),v.add(b);let M=new Map;function x(P,D={}){let N=P+JSON.stringify(Object.fromEntries(Object.entries(D).map(([z,ce])=>[z,ce?.isTexture?ce.uuid:ce])));return M.has(N)||M.set(N,new ys({color:P,roughness:.72,...D})),M.get(N)}let S=new wn(1,u?12:20,u?8:14),T=new da(1,1),E=new wn(1,20,14),y=new Cn(1,1,1,8),A=new wn(1,u?8:12,u?5:8),I=new Ri(.43,.045,8,32),O=new na(.51,24),W=new si(.11,.2,3),K=Array.from({length:4},()=>new Map),B=a.map(P=>new hn({color:P})),Z=a.map(P=>new hn({color:P,transparent:!0,opacity:.3,depthWrite:!1})),ee=new hn({color:"#fff4a3"}),ie=new si(.14,.18,3),xe=new Ei(new L(-.08,-.185,.351),new L(0,-.24,.38),new L(.08,-.185,.351)),se=new Xi(xe,10,.008,5,!1),ae=new Cn(.56,.6,.08,28),de=new Cn(.51,.51,.085,28),We=new Cn(.015,.018,1,5),R=new fa(.035);function V(P,D,N,z=0,ce=0,ne=0,ve=1,ke=ve,ze=ve,it=!0){let ct=new Zt(D,N);return ct.position.set(z,ce,ne),ct.scale.set(ve,ke,ze),ct.castShadow=it,ct.receiveShadow=!0,P.add(ct),ct}let J=(P,D,N,z,ce,ne,ve=ne,ke=ne,ze={})=>V(P,S,x(D,ze),N,z,ce,ne,ve,ke),_e=new Map;function U(P,D,N,z,ce,ne,ve,ke,ze=.08){let it=[ne,ve,ke,ze].join(",");return _e.has(it)||_e.set(it,new La(ne,ve,ke,2,ze)),V(P,_e.get(it),x(D),N,z,ce)}function G(P,D,N,z,ce=.04){let ne=new L(...N),ve=new L(...z),ke=V(P,y,x(D),0,0,0,ce,ne.distanceTo(ve),ce);return ke.position.copy(ne).add(ve).multiplyScalar(.5),ke.quaternion.setFromUnitVectors(new L(0,1,0),ve.sub(ne).normalize()),ke}let ge=721,X=()=>(ge=Math.imul(ge,1664525)+1013904223>>>0,ge/4294967296);function ye(P){let D=document.createElement("canvas");D.width=256,D.height=256;let N=D.getContext("2d");N.fillStyle=P==="grass"?"#b3c884":P==="wood"?"#d5bd8b":"#c3c8b8",N.fillRect(0,0,256,256);for(let ce=0;ce<(P==="grass"?2400:700);ce++){let ne=X()*256,ve=X()*256;N.strokeStyle=P==="grass"?X()>.5?"#39652b55":"#eef7a04d":P==="wood"?"#7155363b":"#495e5128",N.lineWidth=P==="grass"?.6:1,N.beginPath(),N.moveTo(ne,ve),N.lineTo(ne+(P==="wood"?X()*50:X()*5-2),ve+(P==="wood"?X()*3:X()*8-4)),N.stroke()}let z=new gs(D);return z.colorSpace=qt,z.wrapS=z.wrapT=er,z.anisotropy=Math.min(4,g.capabilities.getMaxAnisotropy()),z}let De=ye("grass"),je=ye("rock"),he=ye("wood"),pe=[],Me=[],Se=[],we=[],Ze=[],qe=[],Ke=[],et=[],F=new nn({uniforms:{time:{value:0}},transparent:!0,side:Jt,depthWrite:!1,vertexShader:"varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;p.x+=sin(time*8.+uv.y*12.)*uv.y*.055;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"varying vec2 vUv;uniform float time;void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float n=sin(p.y*17.-time*9.+sin(p.x*8.+time*3.))*.06;float w=(1.-p.y)*.75+sin(p.y*7.-time*4.)*.07;float a=(1.-smoothstep(w+n-.18,w+n,abs(p.x)))*(1.-smoothstep(.82,1.,p.y));vec3 c=mix(vec3(1.,.24,.01),vec3(1.,.92,.3),(1.-smoothstep(0.,.8,p.y))*(1.-smoothstep(0.,.6,abs(p.x))));gl_FragColor=vec4(c,a*.9);}"}),vt=V(v,new Rn(80,80),x("#237144"),0,-1.4,0,1,1,1,!1);vt.rotation.x=-Math.PI/2;let dt=new nn({uniforms:{time:{value:0}},vertexShader:"varying vec2 vWater; void main(){vec4 world=modelMatrix*vec4(position,1.);vWater=world.xz;gl_Position=projectionMatrix*viewMatrix*world;}",fragmentShader:"varying vec2 vWater;uniform float time;void main(){vec2 p=vWater*2.5;float w=(sin(p.x*1.7+p.y*.6-time)*sin(p.y*2.1-time*.7)+1.)*.5;float n=sin(p.x*3.1+sin(p.y*2.7-time*1.5))*sin(p.y*3.7+sin(p.x*2.5+time*.7));float f=smoothstep(.61,.86,n);float fine=sin(p.x*11.+sin(p.y*6.-time*2.))*sin(p.y*9.-time*2.);vec3 c=mix(vec3(.012,.25,.32),vec3(.025,.54,.61),w);c+=vec3(.45,.8,.84)*(f*.48+smoothstep(.83,.98,fine)*.14);gl_FragColor=vec4(c,1.);}"}),C=V(v,new Rn(80,80,1,1),dt,0,-.55,0,1,1,1,!1);C.rotation.x=-Math.PI/2;for(let P of[-11.2,11.2]){U(v,"#34572d",P,-.14,0,5.7,.74,80,1);let D=U(v,"#529035",P,.25,0,5.65,.14,79.8,.8),N=De.clone();N.repeat.set(2,25),D.material=x("#529035",{map:N})}function _(P,D,N,z=.4){let ce=["#687b6c","#7c8a71","#586963","#8f977b"][Math.floor(X()*4)],ne=V(v,T,x(ce,{map:je}),P,D,N,z,z*(.65+X()*.6),z*(.7+X()*.5));return ne.rotation.set(X(),X()*6,X()*.3),X()>.4&&J(v,"#599437",P-.05,D+z*.43,N,z*.65,.07,z*.6),ne}function q(P,D,N=.4,z=0){let ce=new Et;ce.position.set(P,.35,D),v.add(ce);for(let ne=0;ne<(z?9:6);ne++){let ve=ne*6.283/(z?9:6);V(ce,A,x(["#65b92a","#279440","#8ac735","#197346"][ne%4]),Math.sin(ve)*N*.32,N*.4,Math.cos(ve)*N*.32,N*.15,N*.7,N*.26).rotation.set(Math.cos(ve)*.6,ve,Math.sin(ve)*.6),ne<3&&G(ce,"#a6d34b",[0,0,0],[Math.sin(ve)*N*.55,N*.7,Math.cos(ve)*N*.55],.012)}return pe.push({g:ce,phase:X()*6,size:N}),ce}function j(P,D,N=1){let z=new Et;z.position.set(P,.1,D),v.add(z),G(z,"#80532d",[0,0,0],[.1,1.6*N,0],.11*N);for(let ce=0;ce<6;ce++){let ne=ce*6.283/6,ve=V(z,A,x(ce%2?"#419c30":"#7fc339"),Math.sin(ne)*N*.48,1.65*N,Math.cos(ne)*N*.48,.16*N,.12*N,.73*N);ve.rotation.y=ne,ve.rotation.x=.16,G(z,"#a7bd38",[.1,1.72*N,0],[Math.sin(ne)*N*.9,1.57*N,Math.cos(ne)*N*.9],.016*N)}return J(z,"#806932",0,1.6*N,.1,.14*N),pe.push({g:z,phase:X()*6,size:N}),z}function re(P,D,N=1){let z=new Et;z.position.set(P,.05,D),v.add(z),G(z,"#78512d",[0,0,0],[0,1.4*N,0],.14*N);for(let ce=0;ce<7;ce++){let ne=ce*2.4,ve=V(z,A,x(["#1c7139","#3b9434","#60a82d","#266c32"][ce%4]),Math.sin(ne)*N*.42,1.15*N+ce%3*N*.22,Math.cos(ne)*N*.37,N*.55,N*.4,N*.5);ve.rotation.y=ne}for(let ce=0;ce<14;ce++){let ne=ce*2.4,ve=N*(.38+X()*.25);V(z,A,x(ce%2?"#79b43b":"#2e8738"),Math.sin(ne)*ve,1.37*N+ce%3*N*.22,Math.cos(ne)*ve,N*.18,N*.09,N*.32).rotation.set(.2,ne,.15)}return pe.push({g:z,phase:X()*6,size:N}),z}function be(P,D,N=.16){let z=new Et;z.position.set(P,.42,D),v.add(z);let ce=["#ff6d95","#ffa467","#b26aff","#fff165"][Math.floor(X()*4)];for(let ne=0;ne<5;ne++){let ve=ne*6.283/5;J(z,ce,Math.sin(ve)*N,.035,Math.cos(ve)*N,N*.75,.07,N*.75)}J(z,"#ffd93d",0,.09,0,N*.5,.075,N*.5),Me.push({g:z,phase:X()*6})}function Ee(P,D,N=.23){G(v,"#efe0af",[P,.3,D],[P,.3+N*1.1,D],N*.18);let z=new Et;z.position.set(P,.3+N,D),v.add(z),J(z,"#f65b38",0,.04,0,N,.12,N);for(let ce=0;ce<5;ce++){let ne=ce*2.4;J(z,"#ffeed6",Math.sin(ne)*N*.63,.15,Math.cos(ne)*N*.63,.045,.017,.045)}Me.push({g:z,phase:X()*6})}function oe(P,D){let N=new Et;N.position.set(P,.2,D),v.add(N),G(N,"#845331",[0,0,0],[0,1.05,0],.085),G(N,"#d2a340",[0,.72,0],[0,.91,0],.15);let z=J(N,"#ff8d0a",0,1.15,0,.17,.35,.17,{emissive:"#ff5000",emissiveIntensity:2}),ce=J(N,"#fff38b",0,1.14,.02,.08,.23,.08,{emissive:"#ffce32",emissiveIntensity:3}),ne=V(N,new Rn(.52,.78,5,12),F,0,1.28,.08,1,1,1,!1);ne.rotation.x=-.16;let ve=new _a("#ffb531",2,3,2);ve.position.set(0,1.3,0),ve.visible=!u,N.add(ve),Se.push({flame:z,core:ce,light:ve,phase:X()*6});for(let ke=0;ke<3;ke++)Ke.push({m:J(N,"#ffe999",0,1.6+ke*.2,0,.02,.02,.02,{emissive:"#ffb800",emissiveIntensity:2}),base:1.3,phase:X()*6,fire:!0})}function fe(P,D,N=0){let z=new Et;z.position.set(P,.36,D),z.rotation.y=N,v.add(z),U(z,"#99602c",0,.18,0,.53,.35,.37,.05),U(z,"#c28a40",0,.37,0,.55,.17,.4,.08);for(let ce of[-.17,.17])U(z,"#f1c454",ce,.28,.21,.045,.39,.025,.01);U(z,"#f3d271",0,.24,.218,.1,.13,.03,.01)}function Ie(P,D,N){let z=[[-2.7,-2.5],[2.7,-2.5],[2.7,2.5],[-2.7,2.5]];for(let ve=0;ve<4;ve++){let ke=z[ve],ze=z[(ve+1)%4];for(let it=0;it<5;it++){let ct=it/4,rt=P+ke[0]+(ze[0]-ke[0])*ct,Ot=D+ke[1]+(ze[1]-ke[1])*ct;ve===1&&it===2||(G(v,"#b6813e",[rt,.25,Ot],[rt,.8,Ot],.06),J(v,"#e0ba70",rt,.8,Ot,.075))}G(v,"#9b733e",[P+ke[0],.61,D+ke[1]],[P+ze[0],.61,D+ze[1]],.038)}G(v,"#997044",[P-2.2,.3,D-1.6],[P-2.2,1.75,D-1.6],.055);let ce=V(v,new Rn(.7,.78),x(N,{side:Jt}),P-1.83,1.3,D-1.6);ce.rotation.y=-.16;let ne=J(v,"#ffdf82",P-1.84,1.26,D-1.56,.13,.14,.015);for(let[ve,ke]of[[-.17,.15],[0,.23],[.17,.15]])J(v,"#ffdf82",P-1.84+ve,1.26+ke,D-1.55,.055,.065,.016);fe(P+2.05,D-1.65,.3),oe(P-2.55,D-.9)}let Je=[[-4.5,-4.5],[4.5,-4.5],[4.5,4.5],[-4.5,4.5]],Pe=["#bc593c","#80ac3c","#d7ad38","#479bba"];Je.forEach(([P,D],N)=>{U(v,"#536a44",P,-.26,D,5.98,.95,5.88,.5);let z=U(v,Pe[N],P,.25,D,5.65,.23,5.6,.4);z.material=x(Pe[N],{map:De});for(let ce=0;ce<38;ce++){let ne=ce*6.283/38,ve=P+Math.cos(ne)*2.83,ke=D+Math.sin(ne)*2.8;_(ve,-.05,ke,.19+X()*.15),ce%2===0&&q(ve,ke,.25+X()*.22),ce%4===0&&be(ve,ke,.12)}for(let ce=0;ce<22;ce++){let ne=P+(X()-.5)*5.1,ve=D+(X()-.5)*5.1;J(v,["#d49452","#a9bb51","#f7d46a","#76b7be"][N],ne,.375,ve,.02+X()*.025,.008,.026,{}).castShadow=!1}Ie(P,D,a[N]),Ee(P+2.1,D+2.23),q(P-2.05,D+2.15,.42);for(let ce=0;ce<4;ce++){let[ne,ve]=c[N][ce],ke=V(v,ae,x("#e4bf77"),ve-7.5,.39,ne-7.5);V(v,de,x(Pe[N]),ve-7.5,.41,ne-7.5)}});let Ce=document.createElement("canvas");Ce.width=128,Ce.height=128;let Ve=Ce.getContext("2d");Ve.fillStyle="#f7f0df",Ve.fillRect(0,0,128,128);for(let P=0;P<500;P++)Ve.fillStyle=X()>.5?"#cdc1a922":"#ffffff35",Ve.fillRect(X()*128,X()*128,1+X()*3,1+X()*2);let Qe=Ve.createRadialGradient(64,54,20,64,64,91);Qe.addColorStop(0,"#ffffff00"),Qe.addColorStop(1,"#8b795533"),Ve.fillStyle=Qe,Ve.fillRect(0,0,128,128);let at=new gs(Ce);at.colorSpace=qt;let H=new La(.92,.31,.92,3,.105),Re=[];for(let P=0;P<15;P++)for(let D=0;D<15;D++){if(!(P>=6&&P<=8||D>=6&&D<=8)||P>=6&&P<=8&&D>=6&&D<=8)continue;let N=o.findIndex(ne=>ne[0]===P&&ne[1]===D),z="#ead7a0";for(let ne=0;ne<4;ne++)(l[ne].some(ve=>ve[0]===P&&ve[1]===D)||N===ne*13)&&(z=a[ne]);let ce=V(v,H,x(z,{map:at,roughness:.65}),D-7+.002,.34,P-7+.002);if(Re.push(ce),h.has(N)){let ne=new _n;for(let ke=0;ke<10;ke++){let ze=ke*Math.PI/5+Math.PI/2,it=ke%2?.125:.26;ke?ne.lineTo(Math.cos(ze)*it,Math.sin(ze)*it):ne.moveTo(Math.cos(ze)*it,Math.sin(ze)*it)}ne.closePath();let ve=V(v,new Ci(ne,{depth:.04,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:2,steps:1}),x("#ffce31",{metalness:.2,roughness:.4,emissive:"#c28800",emissiveIntensity:.15}),D-7,.525,P-7);ve.rotation.x=-Math.PI/2,qe.push(ve)}else if((P+D)%5===0){let ne=[new L(D-7-.28,.504,P-7+.4),new L(D-7-.16,.504,P-7+.26),new L(D-7-.2,.504,P-7+.09)];v.add(new jr(new Nt().setFromPoints(ne),new lr({color:"#927f54",transparent:!0,opacity:.5})))}}let ue=[[[-1.5,-1.5],[0,0],[-1.5,1.5]],[[-1.5,-1.5],[0,0],[1.5,-1.5]],[[1.5,-1.5],[0,0],[1.5,1.5]],[[-1.5,1.5],[0,0],[1.5,1.5]]];U(v,"#665333",0,.27,0,3,.29,3,.06),ue.forEach((P,D)=>{let N=new _n;N.moveTo(P[0][0],-P[0][1]),P.slice(1).forEach(ce=>N.lineTo(ce[0],-ce[1])),N.closePath();let z=V(v,new Ci(N,{depth:.1,bevelEnabled:!1}),x(a[D]),0,.51,0);z.rotation.x=-Math.PI/2}),V(v,new Cn(.64,.7,.17,32),x("#915e2c"),0,.66,0),V(v,new Ri(.64,.035,8,32),x("#e0b964"),0,.75,0).rotation.x=Math.PI/2;let Te=new _n;Te.moveTo(-.36,0),Te.lineTo(-.42,.35),Te.lineTo(-.17,.2),Te.lineTo(0,.52),Te.lineTo(.17,.2),Te.lineTo(.42,.35),Te.lineTo(.36,0),Te.closePath();let Fe=V(v,new Ci(Te,{depth:.13,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:2}),x("#ffd031",{metalness:.5,roughness:.3}),0,.79,.12);Fe.rotation.x=-.35;for(let P=0;P<2;P++)for(let D=0;D<25;D++){let N=(P?1:-1)*(8.2+X()*3.2),z=-9+X()*18;Math.abs(N)<9.4&&z>-5&&z<-1.8||(_(N,-.15,z,.55+X()*.75),D%3===0?j(N,z,.8+X()*.8):re(N,z,.65+X()*.9),q(N+(X()-.5),z+(X()-.5),.35+X()*.4),D%4===0&&be(N-.4,z+.45,.2))}for(let P=0;P<24;P++){let D=-11+X()*22,N=P%2?-8.6-X()*1.5:8.4+X()*1.5;_(D,-.15,N,.45+X()*.5),q(D,N,.5+X()*.5),P%4===0&&j(D,N,1.1)}for(let P=0;P<2;P++)for(let D=0;D<(u?32:65);D++){let N=(P?1:-1)*(8.75+X()*3.7),z=-9.4+X()*18.8;Math.abs(N)<9.6&&z>-4.9&&z<-2.2||(q(N,z,.27+X()*.36,D%3===0?1:0),D%4===0&&_(N,.34,z,.12+X()*.18),D%3===0&&be(N-.12,z+.1,.12+X()*.08))}for(let P=0;P<2;P++)for(let D=0;D<(u?36:85);D++){let N=(P?1:-1)*(8.65+X()*4.5),z=-19+X()*38;Math.abs(z)<8.5||(_(N,.05,z,.35+X()*.6),q(N,z,.35+X()*.5),D%4===0&&re(N,z,.8+X()*.6),D%7===0&&j(N,z,.85+X()*.7),D%5===0&&be(N+.2,z+.3,.16))}let me=new _n;me.moveTo(-.03,0),me.quadraticCurveTo(-.07,.2,.03,.35),me.quadraticCurveTo(.07,.14,.03,0),me.closePath();let $e=new _s(me);for(let P=0;P<360;P++){let D=P%2?1:-1,N=D*(8.4+X()*4.1),z=-10.5+X()*21;if(Math.abs(N)<9.5&&z>-5&&z<-2)continue;let ce=V(v,$e,x(P%3?"#8eb93b":"#488c32",{side:Jt}),N,.31,z,1,1+X(),1,!1);ce.rotation.y=X()*6.28}v.traverse(P=>{P.isMesh&&P.material?.isMeshStandardMaterial&&["99602c","c28a40","b6813e","9b733e","bb8b43","96672f","845331","997044","78512d","80532d"].includes(P.material.color.getHexString())&&(P.material=x("#"+P.material.color.getHexString(),{map:he}))});function Ge(P,D,N=1.3,z=0){let ce=new Et;ce.position.set(P,.1,D),ce.rotation.y=z,v.add(ce);for(let ne=0;ne<8;ne++)U(ce,ne%2?"#bb8b43":"#96672f",-.63+ne*.18,.13,0,.16,.12,N,.02);for(let ne of[-.73,.73])for(let ve of[-N*.5,N*.5])G(ce,"#ae7a36",[ne,-.1,ve],[ne,.73,ve],.055);for(let ne of[-N*.5,N*.5])G(ce,"#d2b47c",[-.73,.64,ne],[.73,.64,ne],.025),G(ce,"#996b34",[-.73,.4,ne],[.73,.4,ne],.025)}Ge(-8.75,0,1.35,.2),Ge(8.75,0,1.35,-.2),Ge(-8.45,6.7,1.2,-.5),Ge(8.4,-5.7,1.2,.3);function At(P,D){let N=new Et;N.position.set(P,0,D),v.add(N);for(let ne=0;ne<8;ne++)_(P+(ne-3.5)*.27,.85,D-.45,.45);let z=new hn({color:"#6bdef5",transparent:!0,opacity:.75,side:Jt,depthWrite:!1}),ce=V(N,new Rn(1.5,2),z,0,.28,0,1,1,1,!1);for(let ne=0;ne<22;ne++){let ve=.33+X()*.4,ke=V(N,We,x("#bdfdff",{emissive:"#66d7ef",emissiveIntensity:.65,transparent:!0,opacity:.65}),-.68+X()*1.36,X()*2-.65,.025+X()*.03,1,ve,1,!1);we.push({m:ke,phase:X()*2,base:.99})}for(let ne=0;ne<28;ne++){let ve=J(N,"#e8ffff",(X()-.5)*1.5,-.43,(X()-.5)*.55,.025+X()*.04,.03,.03,{transparent:!0,opacity:.65,emissive:"#5dcdc9",emissiveIntensity:.4});Ke.push({m:ve,phase:X()*6,base:-.45,spray:!0,scale:ve.scale.clone()})}for(let ne=0;ne<5;ne++){let ve=V(N,new Ri(.2+ne*.12,.016,6,32),x("#d1ffff",{transparent:!0,opacity:.65,emissive:"#429eae",emissiveIntensity:.35}),0,-.48,.42,1,1,1,!1);ve.rotation.x=Math.PI/2,Ze.push({m:ve,phase:ne*.5})}}At(-8.25,-3.55),At(8.25,-3.65);for(let[P,D]of[[-8.2,2.2],[8.2,2.5],[-7.3,7.5],[7.3,7.5]])oe(P,D);for(let P=0;P<32;P++){let D=(X()-.5)*23,N=(X()-.5)*19,z=J(v,"#fff3a1",D,.8+X()*1.1,N,.025,.025,.025,{emissive:"#ffe653",emissiveIntensity:2});Ke.push({m:z,phase:X()*6,base:z.position.y,fly:!0,x:D,z:N})}function Mt(P,D){let N=(yt,$t,Bt,Fn,hs,vn,Lt=vn,tt=vn,Fs={})=>V(yt,E,x($t,Fs),Bt,Fn,hs,vn,Lt,tt),z=new Et,ce=new Et,ne=new Et,ve=new Et;z.add(ce),ne.position.set(0,.98,0),ne.rotation.x=-.4,ce.add(ne),ne.add(ve);let ke=P===1,ze=P===3,it=P===2,ct=ke?"#fff6df":ze?"#e77d25":it?"#d3a252":"#a76535",rt=ke?"#fff7e6":"#efd8a7",Ot=ke?"#18251f":"#694326";N(ce,a[P],0,.51,0,.26,.33,.2),N(ce,rt,0,.6,.185,.16,.2,.025);let pn=[],xi=[];for(let yt of[-.16,.16]){let $t=N(ce,Ot,yt,.15,.05,.125,.12,.19);pn.push($t);let Bt=new Et;Bt.position.set(yt*1.7,.65,.045),ce.add(Bt),N(Bt,ct,0,-.13,0,.09,.2,.095),N(Bt,ct,0,-.29,.025,.1,.09,.1),xi.push(Bt)}U(ce,"#77643a",0,.59,-.22,.38,.44,.19,.07),G(ce,"#bba566",[-.21,.82,-.24],[.21,.82,-.24],.065);for(let yt of[-.14,.14])U(ce,"#d2af58",yt,.63,.2,.036,.39,.035,.009);N(ce,"#eece68",.15,.54,.225,.045,.055,.021);let Ui=V(ce,ie,x(a[P]),0,.83,.19);if(Ui.rotation.z=Math.PI,N(ne,ct,0,0,0,.36,.33,.3),ze){for(let $t of[-.26,.26]){let Bt=V(ne,new si(.14,.32,3),x(ct),$t,.3,-.015);Bt.rotation.z=$t<0?.22:-.22,V(ne,new si(.079,.21,3),x("#ffc592"),$t,.3,.075)}N(ne,rt,-.14,-.13,.255,.16,.12,.09),N(ne,rt,.14,-.13,.255,.16,.12,.09);let yt=N(ce,ct,.32,.41,-.13,.13,.38,.14);yt.rotation.z=-.58,N(ce,rt,.45,.67,-.13,.09,.12,.095)}else{for(let yt of[-.28,.28])N(ne,ke?Ot:ct,yt,.24,-.01,.145,.155,.095),N(ne,ke?"#484337":"#d39478",yt,.24,.069,.083,.09,.016);N(ne,rt,0,-.14,.27,.21,.135,.085)}let Xe=[];for(let yt of[-.13,.13]){if(ke){let Fn=N(ne,Ot,yt,0,.258,.111,.145,.046);Fn.rotation.z=yt<0?-.3:.3}let $t=N(ve,"#19251b",yt,.015,.305,.045,.064,.026,{roughness:.24}),Bt=N(ve,"#ffffff",yt-.012,.037,.331,.014,.018,.006,{emissive:"#ffffff",emissiveIntensity:.1});Xe.push({pupil:$t,glint:Bt}),G(ne,it?"#7e552f":"#6c492a",[yt-.035,.122,.28],[yt+.03,.134,.282],.012)}N(ne,"#27251e",0,-.12,.365,.065,.045,.035,{roughness:.3}),V(ne,se,x("#66412d"));for(let yt of[-.25,.25])N(ne,"#e9a380",yt,-.09,.248,.036,.022,.008);if(it){for(let yt of[-1,1])G(ne,"#926735",[yt*.22,.29,-.02],[yt*.33,.62,-.02],.035),G(ne,"#926735",[yt*.29,.5,-.02],[yt*.47,.58,-.02],.027),G(ne,"#926735",[yt*.32,.55,-.02],[yt*.24,.67,-.02],.025);for(let yt of[-.2,.2])N(ne,"#fae4b1",yt,.14,.227,.025,.029,.008)}let Y=V(z,I,B[P],0,.045,0,1,1,1,!1);Y.rotation.x=Math.PI/2;let mt=V(z,O,Z[P],0,.035,0,1,1,1,!1);mt.rotation.x=-Math.PI/2;let rn=V(z,W,ee,0,1.63,0,1,1,1,!1);rn.rotation.z=Math.PI;let Wt=document.createElement("canvas");Wt.width=64,Wt.height=64;let Rt=Wt.getContext("2d");Rt.fillStyle="#ffe6a1",Rt.beginPath(),Rt.arc(32,32,28,0,Math.PI*2),Rt.fill(),Rt.fillStyle="#4d3921",Rt.font="bold 39px Trebuchet MS",Rt.textAlign="center",Rt.textBaseline="middle",Rt.fillText(String(D+1),32,34);let Ga=new gs(Wt);Ga.colorSpace=qt;let Fi=V(z,new Rn(.16,.16),new hn({map:Ga,transparent:!0,side:Jt}),.27,.17,.22,1,1,1,!1);return Fi.rotation.x=-.45,z.traverse(yt=>{if(!yt.material?.isMeshStandardMaterial)return;let $t=yt.material,Bt=K[P];if(!Bt.has($t.uuid)){let Fn=$t.clone();Bt.set($t.uuid,{material:Fn,emissive:Fn.emissive.clone(),intensity:Fn.emissiveIntensity})}yt.material=Bt.get($t.uuid).material}),v.add(z),{g:z,body:ce,head:ne,eyes:ve,eyeParts:Xe,feet:pn,arms:xi,ring:Y,halo:mt,marker:rn,seat:P,token:D,phase:P*.9+D*1.6}}for(let P=0;P<4;P++)for(let D=0;D<4;D++)et.push(Mt(P,D));let dn=new Set,fn=new Set;function Zn(P){dn.add(P),P.traverse(D=>{D.isMesh&&fn.add(D)})}let Ba=u?pe.filter((P,D)=>D%4===0):pe,Cr=u?Me.filter((P,D)=>D%3===0):Me;Ba.forEach(P=>Zn(P.g)),Cr.forEach(P=>Zn(P.g)),Se.forEach(P=>{Zn(P.flame),Zn(P.core)}),we.forEach(P=>Zn(P.m)),Ze.forEach(P=>Zn(P.m)),Ke.forEach(P=>Zn(P.m)),et.forEach(P=>[P.g,P.body,P.head,P.eyes,P.ring,P.halo,P.marker,...P.arms,...P.feet].forEach(Zn)),v.updateMatrixWorld(!0),v.traverse(P=>{dn.has(P)||(P.updateMatrix(),P.matrixAutoUpdate=!1)}),v.matrixWorldAutoUpdate=!1;let Di=new Map;v.traverse(P=>{if(!P.isMesh||!P.geometry||Array.isArray(P.material))return;let D=P.geometry.uuid+"|"+P.material.uuid+"|"+fn.has(P);Di.has(D)||Di.set(D,[]),Di.get(D).push(P)});let ka=[],za=new bt().makeScale(0,0,0);for(let P of Di.values()){if(P.length<2)continue;let D=new Hn(P[0].geometry,P[0].material,P.length);D.castShadow=P.some(z=>z.castShadow),D.receiveShadow=!0,D.frustumCulled=!1;let N=fn.has(P[0]);D.instanceMatrix.setUsage(N?ts:zl),P.forEach((z,ce)=>{z.layers.set(31),D.setMatrixAt(ce,z.matrixWorld)}),D.instanceMatrix.needsUpdate=!0,D.matrixAutoUpdate=!1,v.add(D),N&&ka.push({batch:D,sources:P})}let Ds=i.querySelector("svg"),Un=Ds.createSVGPoint(),Jn=new L,$n=document.getElementById("preview-board");$n.innerHTML="";let fi=$n;$n.append(g.domElement);let pi=0,mi=0,gi=0,ls=0,Ns=0,Va=!1,Ut={renderer:"WebGL 3D",frames:0,tiles:Re.length,animals:16,waterfalls:2,torchCount:Se.length,drawCalls:0,fps:0,performanceVersion:2,characterDetail:"full"},cs=kd({scene:v,camera:p,board:i,reduced:d,getRoom:n,diagnostics:Ut}),Ni=Gd({scene:v,camera:p,board:i,animals:et,track:o,reduced:d,getRoom:n,diagnostics:Ut}),Us=new L;function w(P){let D=e.get(P.seat+"-"+P.token),N=getComputedStyle(D).transform,z=N==="none"?new DOMMatrix:new DOMMatrix(N);cs.start(P,{x:z.e-7.5,z:z.f-7.5})}let k=null,te=0,$=-1,Q=-1,Ne=new Map;function Oe(P,D="jump"){let N=n();return!N?.seats[P]||!Number.isInteger(P)||!["jump","dance","wave"].includes(D)?!1:(Ne.set(P,{kind:D,started:performance.now(),room:N.code}),!0)}i.dataset.renderer="webgl",window.jungleScene=Ut;function Le(){let P=fi.getBoundingClientRect();if(!P.width||!P.height)return;let D=f();g.setPixelRatio(Math.min(devicePixelRatio,D?1.5:1.65)),g.shadowMap.enabled=!D,Se.forEach(ne=>ne.light.visible=!D),Ut.quality=D?"mobile-smooth":"full",pi=P.width,mi=P.height,g.setSize(pi,mi,!1);let N=pi/mi,z=innerWidth<650?18.2/N:Math.max(16.85,13.6*mi/Math.max(300,mi-180)),ce=z*N;p.left=-ce/2,p.right=ce/2,p.top=z/2,p.bottom=-z/2,p.updateProjectionMatrix(),Ut.cameraAspect=(p.right-p.left)/(p.top-p.bottom),Ut.viewportAspect=N}let Be=new ResizeObserver(Le);Be.observe(i),Be.observe($n);let Ye=new Map([[i,!0],[$n,!0]]),lt=new IntersectionObserver(P=>{P.forEach(D=>Ye.set(D.target,D.isIntersecting))});lt.observe(i),lt.observe($n);let ft=-1/0,He=()=>{f()&&(ft=performance.now())};window.addEventListener("scroll",He,{passive:!0});function St(P,D,N,z,ce){Jn.set(0,.55,0).applyMatrix4(P.body.matrixWorld).project(p),Un.x=z.left+(Jn.x*.5+.5)*z.width,Un.y=z.top+(-Jn.y*.5+.5)*z.height;let ne=Un.matrixTransform(ce),ve=D.querySelector(".token-hit");ve.setAttribute("cx",ne.x-N.e),ve.setAttribute("cy",ne.y-N.f),ve.setAttribute("r",innerWidth<650?".52":".5")}function Ft(P,D){if(fi!==i||!n())return null;let N=g.domElement.getBoundingClientRect(),z=null,ce=1/0;for(let ne of et){let ve=e.get(ne.seat+"-"+ne.token);if(!ne.g.visible||!ve.classList.contains("movable"))continue;let ke=1/0,ze=-1/0,it=1/0,ct=-1/0;for(let pn of[-.46,.46])for(let xi of[0,ne.marker.visible?1.8:1.48])for(let Ui of[-.3,.4]){Jn.set(pn,xi,Ui).applyMatrix4(ne.body.matrixWorld).project(p);let Xe=N.left+(Jn.x*.5+.5)*N.width,Y=N.top+(-Jn.y*.5+.5)*N.height;ke=Math.min(ke,Xe),ze=Math.max(ze,Xe),it=Math.min(it,Y),ct=Math.max(ct,Y)}let rt=innerWidth<650?7:4;if(P<ke-rt||P>ze+rt||D<it-rt||D>ct+rt)continue;let Ot=((P-(ke+ze)/2)/Math.max(1,ze-ke))**2+((D-(it+ct)/2)/Math.max(1,ct-it))**2;Ot<ce&&(ce=Ot,z=ve)}return z}let Ct=new MutationObserver(P=>{for(let D of P)for(let N of D.addedNodes){if(!(N instanceof SVGElement))continue;let z=/translate\(([\d.-]+) ([\d.-]+)\)/.exec(N.getAttribute("transform")||"");if(z&&N.dataset.capture!=="true")for(let ce=0;ce<12;ce++){let ne=x("#ffe266",{emissive:"#e8a923",emissiveIntensity:1,transparent:!0,opacity:1}).clone(),ve=V(v,R,ne,Number(z[1])-7.5,.65,Number(z[2])-7.5,1,1,1,!1);Ke.push({m:ve,burst:!0,born:performance.now()/1e3,angle:ce*6.283/12,x:ve.position.x,z:ve.position.z})}}});Ct.observe(i.querySelector("#effects"),{childList:!0});function wt(P){if(Va)return;requestAnimationFrame(wt);let D=n()?i:$n;if(D!==fi&&(fi=D,fi.prepend(g.domElement),Le()),document.hidden||!Ye.get(fi)||P-ft<120||!pi||!mi){gi=P;return}if(P-gi<(innerWidth<650?32:21))return;let N=P-gi;gi=P,Ns+=N,ls++;let z=d.matches?0:P/1e3;cs.update(P),t?.update(P),Ut.comedy=t?.snapshot()??null,dt.uniforms.time.value=z,F.uniforms.time.value=z,Ut.waterTime=z,Ut.fireTime=z;for(let Xe of Ba)Xe.g.rotation.z=Math.sin(z*1.05+Xe.phase)*.025,Xe.g.rotation.x=Math.sin(z*.8+Xe.phase)*.018;for(let Xe of Cr)Xe.g.rotation.y=Math.sin(z*1.3+Xe.phase)*.1;for(let Xe of Se){let Y=Math.sin(z*12+Xe.phase)*.1+Math.sin(z*19+Xe.phase)*.05;Xe.flame.scale.y=.35*(1+Y),Xe.flame.rotation.z=Y*.7,Xe.core.scale.y=.23*(1-Y*.6),Xe.light.intensity=1.9+Y*3}for(let Xe of we)Xe.m.position.y=Xe.base-(z*1.7+Xe.phase)%1.9;for(let Xe of Ze){let Y=(z*.6+Xe.phase)%1;Xe.m.scale.setScalar(.6+Y*1.7),Xe.m.material.opacity=(1-Y)*.5}for(let Xe=Ke.length-1;Xe>=0;Xe--){let Y=Ke[Xe];if(Y.burst){let mt=P/1e3-Y.born;if(mt>.65){v.remove(Y.m),Y.m.material.dispose(),Ke.splice(Xe,1);continue}Y.m.position.set(Y.x+Math.sin(Y.angle)*mt*1.2,.65+Math.sin(mt*Math.PI/.65)*.5,Y.z+Math.cos(Y.angle)*mt*1.2),Y.m.material.opacity=1-mt/.65}else Y.spray?(Y.m.position.y=Y.base+Math.abs(Math.sin(z*2+Y.phase))*.32,Y.m.scale.copy(Y.scale).multiplyScalar(.7+Math.sin(z*2+Y.phase)*.25)):Y.fire?(Y.m.position.y=Y.base+(z*.8+Y.phase)%1.1,Y.m.position.x=Math.sin(z*2+Y.phase)*.13):Y.fly&&(Y.m.position.y=Y.base+Math.sin(z+Y.phase)*.19,Y.m.position.x=Y.x+Math.sin(z*.6+Y.phase)*.25)}qe.forEach((Xe,Y)=>Xe.material.emissiveIntensity=.12+(Math.sin(z*2+Y)+1)*.1);let ce=Ds.getBoundingClientRect(),ve=Ds.getScreenCTM()?.inverse(),ke=n(),ze=ke?.game,it=ze?.lastRoll?ke.code+":"+ze.lastRoll.id:null;it!==k&&(it!==null&&k?.startsWith(ke.code+":")?($=ze.lastRoll.seat,te=P+1200):(te=0,$=-1),k=it);let ct=ze?.phase==="celebration"&&r()<ze.celebration.endsAt?ze.celebration:null,rt=ze&&["roll","move","waiting"].includes(ze.phase)?P<te?$:ze.turn:-1;rt!==Q&&(K.forEach((Xe,Y)=>Xe.forEach(({material:mt,emissive:rn,intensity:Wt})=>{let Rt=mt.color.r+mt.color.g+mt.color.b>.4;Y===rt&&Rt&&rn.getHex()===0?(mt.emissive.set(a[Y]),mt.emissiveIntensity=.14):(mt.emissive.copy(rn),mt.emissiveIntensity=Wt)})),Q=rt);let Ot=[],pn=[],xi=et.map(Xe=>getComputedStyle(e.get(Xe.seat+"-"+Xe.token)).transform),Ui=new Map;for(let[Xe,Y]of Ne){let mt=(P-Y.started)/1e3,rn=Y.kind==="dance"?2.8:Y.kind==="wave"?2.4:2.2;if(Y.room!==ke?.code||mt>=rn){Ne.delete(Xe);continue}let Wt=d.matches?0:Math.max(0,Math.min(1,mt/.16,(rn-mt)/.25)),Rt=Y.kind==="jump"&&!d.matches&&mt>.16&&mt<1.9?Math.sin(Math.PI*((mt-.16)%.58/.58)):0;Ui.set(Xe,{seat:Xe,kind:Y.kind,age:mt,strength:Wt,hop:Rt,jumpHeight:Rt*.7,participants:0})}if(ct)for(let Xe of ct.seats){let Y=Math.max(0,(r()-ct.startedAt)/1e3),mt=(ct.endsAt-ct.startedAt)/1e3;Ui.set(Xe,{seat:Xe,kind:"victory",age:Y,strength:d.matches?0:Math.max(0,Math.min(1,Y/.25,(mt-Y)/.4)),hop:0,jumpHeight:0,participants:0})}for(let[Xe,Y]of et.entries()){let mt=e.get(Y.seat+"-"+Y.token),rn=xi[Xe],Wt=rn==="none"?new DOMMatrix:new DOMMatrix(rn),Rt=mt.classList.contains("walking"),Ga=mt.classList.contains("finished"),Fi=!!ct?.seats.includes(Y.seat);if(Y.g.visible=Fi||!ke||!Ga&&!!ke?.seats[Y.seat]&&(!ze||ze.active.includes(Y.seat)),!Y.g.visible)continue;let yt=Number(mt.dataset.visualStep),$t=Fi||yt<0?1.25:.88;if(d.matches?Y.g.scale.setScalar($t):Y.g.scale.setScalar(Pi.lerp(Y.g.scale.x,$t,.2)),Y.g.position.set(Wt.e-7.5,.5,Wt.f-7.5),Fi){let[Lt,tt]=c[Y.seat][Y.token];Y.g.position.set(tt-7.5,.5,Lt-7.5)}let Bt=z*(Rt?[14,12,15,18][Y.seat]:2)+Y.phase;Y.body.position.x=0,Y.body.position.y=Rt?Math.abs(Math.sin(Bt))*(Y.seat===2?.16:.095):Math.sin(Bt)*.017,Y.body.rotation.z=Rt?Math.sin(Bt)*.06:Math.sin(z*.8+Y.phase)*.016,Y.body.rotation.x=0,Y.body.rotation.y=0,Y.body.scale.set(1,1,1),Y.arms.forEach((Lt,tt)=>Lt.rotation.z=(tt?1:-1)*.1),Y.head.rotation.y=Math.sin(z*.7+Y.phase)*.08,Y.head.rotation.z=Math.sin(z*.9+Y.phase)*.026,Y.head.rotation.x=-.4,Y.eyes.scale.y=(z+Y.phase)%4.8<.13?.12:1,Y.eyeParts.forEach(({pupil:Lt,glint:tt})=>{Lt.scale.y=.064,tt.scale.y=.018}),Y.feet[0].rotation.x=Rt?Math.sin(Bt)*.5:0,Y.feet[1].rotation.x=Rt?-Math.sin(Bt)*.5:0;let Fn=Y.seat===rt,hs=mt.classList.contains("movable");Y.ring.visible=Fn||hs,Y.ring.scale.setScalar((hs?1.15:1)+Math.sin(z*3)*.06),Y.halo.visible=Fn,Y.halo.scale.setScalar(1+Math.sin(z*3)*.04),Y.marker.visible=hs,Y.marker.position.y=1.63+Math.sin(z*4)*.06,Fn&&Ot.push(Y.seat+"-"+Y.token),hs&&pn.push(Y.seat+"-"+Y.token),mt.classList.contains("reacting")&&(Y.body.position.y+=Math.abs(Math.sin(z*7))*.12);let vn=Ui.get(Y.seat);if(vn&&(vn.participants++,Y.ring.visible=!0,vn.kind==="victory"&&d.matches&&(Y.arms.forEach((Lt,tt)=>Lt.rotation.z=(tt?1:-1)*1.3),Y.halo.visible=!0),!d.matches)){let{age:Lt,strength:tt,hop:Fs}=vn;if(vn.kind==="jump"){let jt=Lt<.16?Math.sin(Lt/.16*Math.PI)*.15:0,an=Lt>=1.9?Math.sin((Lt-1.9)/.3*Math.PI)*.08:0;Y.body.position.y+=vn.jumpHeight-jt*.25,Y.body.scale.set(1+jt+an-Fs*.035,1-jt-an+Fs*.07,1+jt*.5),Y.body.rotation.z+=Math.sin(Lt*11)*.07*tt,Y.head.rotation.z+=Math.sin(Lt*7)*.12*tt,Y.eyes.scale.y=1-Fs*.35,Y.arms.forEach((mn,zt)=>mn.rotation.z=(zt?1:-1)*(1.95+Math.sin(Lt*15)*.22)*tt),Y.feet.forEach((mn,zt)=>mn.rotation.x+=Fs*(zt?.45:-.35))}else if(vn.kind==="victory"){let jt=Lt*7+Y.token*.3,an=Math.sin(jt),mn=Math.sin(jt+Math.PI/2);Y.halo.visible=!0,Y.seat===0?(Y.body.position.y+=Math.abs(an)*.16*tt,Y.body.rotation.z=an*.13*tt,Y.body.scale.set(1+mn*.04*tt,1-mn*.04*tt,1),Y.arms.forEach((gn,On)=>gn.rotation.z=(On?1:-1)*(1.2+an*.65)*tt)):Y.seat===1?(Y.body.position.x=an*.13*tt,Y.body.rotation.z=an*.24*tt,Y.head.rotation.z=-an*.2*tt,Y.arms.forEach((gn,On)=>gn.rotation.z=(On?1:-1)*(1+Math.sin(jt+On*Math.PI)*.8)*tt)):Y.seat===2?(Y.body.position.y+=Math.abs(an)*.3*tt,Y.body.rotation.y=Math.sin(Lt*2)*.85*tt,Y.body.rotation.z=mn*.1*tt,Y.arms.forEach((gn,On)=>gn.rotation.z=(On?1:-1)*1.7*tt)):(Y.body.position.x=an*.18*tt,Y.body.rotation.y=mn*.5*tt,Y.head.rotation.x+=an*.15*tt,Y.arms[0].rotation.z=-(1.7+mn*.7)*tt,Y.arms[1].rotation.z=(1.7-mn*.7)*tt),Y.feet.forEach((gn,On)=>gn.rotation.x=Math.sin(jt+On*Math.PI)*.55*tt);let zt=(Lt+Y.token*.18)%7;if(zt>=2&&zt<3.4){let gn=(zt-2)/1.4,On=Math.sin(Math.PI*gn);Y.body.position.y+=On*1.9*tt,Y.body.rotation.x=(Y.seat%2?1:-1)*gn*Math.PI*2*tt,Y.body.rotation.z*=.2,Y.arms.forEach((oc,gf)=>oc.rotation.z=(gf?1:-1)*2.2*tt),Y.feet.forEach(oc=>oc.rotation.x=-.6*On*tt)}else if(zt>=3.4&&zt<3.8){let gn=Math.sin((zt-3.4)/.4*Math.PI)*.16*tt;Y.body.scale.set(1+gn,1-gn,1+gn*.5)}else zt>=4&&zt<6&&(Y.body.rotation.y=Math.sin(zt*3)*.5*tt,Y.head.rotation.z=Math.sin(zt*9)*.16*tt,Y.arms[1].rotation.z=2.05*tt,Y.arms[0].rotation.z=-.3*tt,Y.eyes.scale.y=zt%1<.18?.15:1)}else if(vn.kind==="dance"){let jt=Lt*10,an=Math.sin(jt)*tt;Y.body.position.y+=Math.abs(Math.sin(jt))*.11*tt,Y.body.rotation.z+=an*.14,Y.body.rotation.y=Math.sin(jt*.5)*.4*tt,Y.head.rotation.z-=an*.12,Y.head.rotation.x+=Math.cos(jt)*.07*tt,Y.arms.forEach((mn,zt)=>mn.rotation.z=(zt?1:-1)*(1.05+Math.sin(jt+zt*Math.PI)*.55)*tt),Y.feet.forEach((mn,zt)=>mn.rotation.x+=Math.sin(jt+zt*Math.PI)*.5*tt)}else Y.body.rotation.z-=.07*tt,Y.head.rotation.y+=.12*tt,Y.head.rotation.z+=Math.sin(Lt*5)*.07*tt,Y.arms[1].rotation.z=(2.35+Math.sin(Lt*17)*.3)*tt,Y.arms[0].rotation.z=-.3*tt}Fi||cs.pose(Y,P),!Fi&&!Rt&&!vn&&t?.pose(Y,P),Fi||Ni.pose(Y,P),Y.g.updateMatrixWorld(),t?.matches(Y)&&(Us.set(0,1.9,0).applyMatrix4(Y.g.matrixWorld).project(p),t.anchor((Us.x*.5+.5)*100,(-Us.y*.5+.5)*100),Ut.comedy&&(Ut.comedy.pose={headYaw:Y.head.rotation.y,headTilt:Y.head.rotation.z,rightArm:Y.arms[1].rotation.z})),ve&&ke&&hs&&St(Y,mt,Wt,ce,ve)}Ut.emotes=Array.from(Ui.values()).map(({seat:Xe,kind:Y,participants:mt,jumpHeight:rn,strength:Wt})=>({seat:Xe,kind:Y,participants:mt,jumpHeight:rn,strength:Wt})),Ut.victory=ct?{seats:ct.seats,final:ct.final,endsAt:ct.endsAt,routines:ct.seats.map(Xe=>["belly-clap","waddle-shimmy","prance-twirl","disco-step"][Xe]),flips:et.filter(Xe=>ct.seats.includes(Xe.seat)).map(Xe=>({seat:Xe.seat,token:Xe.token,rotation:Xe.body.rotation.x,height:Xe.body.position.y}))}:null,Ut.highlight={seat:rt,tokens:Ot,legalTokens:pn},Ni.frame(P),v.updateMatrixWorld();for(let{batch:Xe,sources:Y}of ka)Y.forEach((mt,rn)=>{let Wt=mt.visible,Rt=mt.parent;for(;Rt&&Wt;)Wt=Rt.visible,Rt=Rt.parent;Xe.setMatrixAt(rn,Wt?mt.matrixWorld:za)}),Xe.instanceMatrix.needsUpdate=!0;g.render(v,p),Ut.frames++,Ut.time=z,Ut.drawCalls=g.info.render.calls,Ut.triangles=g.info.render.triangles,ls>=30&&(Ut.fps=Math.round(1e3*ls/Ns),ls=0,Ns=0)}return Le(),requestAnimationFrame(wt),g.domElement.addEventListener("webglcontextlost",()=>{i.dataset.renderer="lost"},{passive:!0}),{resize:Le,pickToken:Ft,celebrate:Oe,capture:w,gift:Ni.start,deferGift:Ni.defer,resetCaptures:()=>{cs.reset(),Ni.reset()},renderer:g,scene:v,camera:p,diagnostics:Ut,dispose(){Va=!0,cs.dispose(),Ni.dispose(),Be.disconnect(),lt.disconnect(),Ct.disconnect(),window.removeEventListener("scroll",He),g.dispose()}}}var Nh=["red","green","yellow","blue"],Sr=new Set([0,8,13,21,26,34,39,47]),is=56,Na=[[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0]],Zl=[[[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]],[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],[[7,13],[7,12],[7,11],[7,10],[7,9],[7,8]],[[13,7],[12,7],[11,7],[10,7],[9,7],[8,7]]],Jl=[[[1.9,1.9],[1.9,4.1],[4.1,1.9],[4.1,4.1]],[[1.9,10.9],[1.9,13.1],[4.1,10.9],[4.1,13.1]],[[10.9,10.9],[10.9,13.1],[13.1,10.9],[13.1,13.1]],[[10.9,1.9],[10.9,4.1],[13.1,1.9],[13.1,4.1]]];function $l(i,e){return e>=0&&e<=50?(i*13+e)%52:null}function F_(i=""){if(!i.trim())return"";let e=new URL(i.trim());if(!["https:","http:","wss:","ws:"].includes(e.protocol)||e.username||e.password||e.pathname!=="/"||e.search||e.hash)throw new Error("BACKEND_URL must be a server origin such as https://ludoloop.pythonanywhere.com");return e.origin}function Wd(i,e){let t=new URL(e),n=new URL(F_(i)||t.origin);if(n.protocol=["https:","wss:"].includes(n.protocol)?"wss:":"ws:",t.protocol==="https:"&&n.protocol!=="wss:")throw new Error("An HTTPS frontend needs an HTTPS/WSS backend.");return n.href}function Xd(i,e,t,n){let s=e?new URL("./",t):new URL((n||new URL(t).origin).replace(/\/$/,"")+"/");return s.search="",s.hash="",s.searchParams.set("room",i),s.href}function qd({send:i,identity:e,notify:t}){let n=R=>document.getElementById(R),s=!1,r=!1,a=!1,o=0,l,c,h="",f=[],u={},d=!1,g=!1,v,p,m="Join to talk with your crew.",b=new Map,M=new Map,x=!!(window.isSecureContext&&navigator.mediaDevices?.getUserMedia&&window.RTCPeerConnection);function S(R){m=R,T()}function T(){n("voice-join").hidden=r,n("voice-join").disabled=a||!s||!x,n("voice-join").textContent=a?"Connecting\u2026":"\u{1F399} Join voice";for(let R of["voice-mic","voice-speaker","voice-leave"])n(R).hidden=!r;n("voice-mic").textContent=d?"\u{1F399} Unmute":"\u{1F399} Mute",n("voice-mic").setAttribute("aria-pressed",String(d)),n("voice-speaker").textContent=g?"\u{1F507} Hear crew":"\u{1F50A} Sound on",n("voice-speaker").setAttribute("aria-pressed",String(g)),n("voice-status").textContent=m,n("voice-hear").hidden=![...b.values()].some(R=>R.blocked),E()}function E(){let R=e();document.querySelectorAll("[data-voice-seat]").forEach(V=>{let J=f.find(ye=>ye.seat===Number(V.dataset.voiceSeat)),_e=J&&b.get(J.id),G=J?.id===R.id?r:_e?.pc.connectionState==="connected",ge=G&&!J.muted&&!!M.get(J.id)?.talking;V.hidden=!J,V.textContent=J?.muted?"\u{1F507}":ge?"\u25CF":"\u{1F399}",V.title=J?.muted?"Microphone muted":ge?"Speaking":G?"In voice chat":"Joining voice";let X=V.closest(".player-card");X?.classList.toggle("voice-talking",!!ge),X?.classList.toggle("voice-connected",!!G)})}function y(){if(!r)return;let R=[...b.values()];R.some(V=>V.pc.connectionState==="failed"||V.retries>=3&&V.pc.connectionState!=="connected")?S("Voice could not connect. Leave and rejoin, or try Wi-Fi."):R.some(V=>V.blocked)?S("Tap Hear crew to enable sound."):R.some(V=>V.pc.connectionState!=="connected")?S("Connecting your crew\u2026"):S(R.length?`${R.length+1} in voice \xB7 ${d?"Mic muted":"Mic on"}`:`${d?"Mic muted":"Mic on"} \xB7 waiting for your crew`)}function A(R,V){if(I(R),!!c)try{let J=c.createMediaStreamSource(V),_e=c.createAnalyser();_e.fftSize=256,J.connect(_e),M.set(R,{source:J,analyser:_e,data:new Uint8Array(_e.fftSize),talking:!1,until:0})}catch{}}function I(R){let V=M.get(R);V&&(V.source.disconnect(),V.analyser.disconnect(),M.delete(R))}function O(){clearInterval(p),p=setInterval(()=>{if(document.hidden||!r)return;let R=e(),V=!1;for(let[J,_e]of M){_e.analyser.getByteTimeDomainData(_e.data);let U=0;for(let ge of _e.data)U+=((ge-128)/128)**2;Math.sqrt(U/_e.data.length)>.025&&(_e.until=performance.now()+250);let G=(J===R.id?!d:!f.find(ge=>ge.id===J)?.muted)&&performance.now()<_e.until;G!==_e.talking&&(_e.talking=G,V=!0)}V&&E()},125)}function W(R,V){r&&b.get(R.member.id)===R&&i({type:"voice-signal",to:R.member.id,fromSession:h,toSession:R.member.session,data:V})}function K(R,V){R.queue=R.queue.then(async()=>{b.get(R.member.id)===R&&r&&await V()}).catch(()=>{b.get(R.member.id)===R&&r&&S("Voice connection interrupted. Try leaving and rejoining voice.")})}async function B(R,V=!1){R.pc.signalingState==="stable"&&(await R.pc.setLocalDescription(await R.pc.createOffer({iceRestart:V})),W(R,{description:{type:R.pc.localDescription.type,sdp:R.pc.localDescription.sdp}}))}async function Z(R){if(R.audio){R.audio.muted=g;try{await R.audio.play(),R.blocked=!1}catch{R.blocked=!0}y()}}function ee(R){if(clearTimeout(R.retryTimer),R.retries>=3){y();return}R.retryTimer=setTimeout(()=>{b.get(R.member.id)!==R||R.pc.connectionState==="connected"||(R.retries++,e().seat<R.member.seat?K(R,()=>B(R,!0)):W(R,{restart:!0}),y(),ee(R))},4e3)}function ie(R){let V=new RTCPeerConnection({iceServers:u.iceServers||[],bundlePolicy:"max-bundle"}),J={member:R,pc:V,queue:Promise.resolve(),candidates:[],audio:null,blocked:!1,retries:0};b.set(R.id,J);for(let _e of l.getAudioTracks()){let U=V.addTrack(_e,l),G=U.getParameters();G.encodings?.length&&(G.encodings[0].maxBitrate=24e3,U.setParameters(G).catch(()=>{}))}return V.onicecandidate=_e=>{_e.candidate&&W(J,{candidate:_e.candidate.toJSON()})},V.ontrack=_e=>{if(b.get(R.id)!==J)return;let U=_e.streams[0]||new MediaStream([_e.track]);J.audio?.remove();let G=document.createElement("audio");G.autoplay=!0,G.setAttribute("playsinline",""),G.srcObject=U,n("voice-audio").append(G),J.audio=G,A(R.id,U),Z(J)},V.onconnectionstatechange=()=>{b.get(R.id)===J&&(V.connectionState==="connected"?(clearTimeout(J.retryTimer),J.retries=0):["failed","disconnected"].includes(V.connectionState)&&ee(J),y())},ee(J),e().seat<R.seat&&K(J,()=>B(J)),J}function xe(R){let V=b.get(R);V&&(b.delete(R),clearTimeout(V.retryTimer),V.pc.ontrack=V.pc.onicecandidate=V.pc.onconnectionstatechange=null,V.pc.close(),V.audio&&(V.audio.pause(),V.audio.srcObject=null,V.audio.remove()),I(R))}function se(){if(!r||!h||!l){E();return}let R=e();if(!f.find(J=>J.id===R.id&&J.session===h)){ae(!1,"Voice ended. Join again to talk.");return}for(let[J,_e]of b)f.some(U=>U.id===J&&U.session===_e.member.session)||xe(J);for(let J of f)J.id!==R.id&&(b.has(J.id)?b.get(J.id).member=J:ie(J));y()}function ae(R=!0,V="Join to talk with your crew."){o++,clearTimeout(v),clearInterval(p),R&&(r||a)&&i({type:"voice-leave"}),r=a=!1,h="",d=g=!1;for(let J of[...b.keys()])xe(J);for(let J of[...M.keys()])I(J);l?.getTracks().forEach(J=>J.stop()),l=null,c?.close().catch(()=>{}),c=null,S(V)}async function de(){if(a||r||!s||!x)return;a=!0;let R=++o;S("Allow your microphone to join voice.");try{if(c=new(window.AudioContext||window.webkitAudioContext),await c.resume(),R!==o)return;let V=await navigator.mediaDevices.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:1}});if(R!==o){V.getTracks().forEach(J=>J.stop());return}if(l=V,l.getAudioTracks()[0].onended=()=>ae(!0,"Microphone disconnected. Join voice again."),A(e().id,l),!i({type:"voice-join"})){ae(!1,"Reconnect to the room, then join voice.");return}S("Joining room voice\u2026"),v=setTimeout(()=>ae(!0,"Voice is unavailable. Refresh after the server update."),8e3)}catch(V){if(R!==o)return;let J=["NotAllowedError","SecurityError"].includes(V.name)?"Microphone permission denied. Allow it in browser settings, then join again.":V.name==="NotFoundError"?"No microphone found. Connect one and try again.":"Microphone is busy or unavailable. Close other calls and try again.";ae(!1,J),t(J)}}function We(R){if(R.type==="voice-ready"){if(!a||!l)return;clearTimeout(v),h=R.session,u=R,r=!0,a=!1,O(),S("Mic on \xB7 waiting for your crew")}else if(R.type==="voice-state")f=R.members||[],se();else if(R.type==="voice-error")ae(!0,R.message),t(R.message);else if(R.type==="voice-signal"){let V=b.get(R.from);if(!r||R.toSession!==h||!V||V.member.session!==R.fromSession)return;K(V,async()=>{let J=R.data;if(J.description){if(J.description.type==="offer"&&e().seat<V.member.seat)return;await V.pc.setRemoteDescription(J.description);for(let _e of V.candidates.splice(0))await V.pc.addIceCandidate(_e);J.description.type==="offer"&&(await V.pc.setLocalDescription(await V.pc.createAnswer()),W(V,{description:{type:V.pc.localDescription.type,sdp:V.pc.localDescription.sdp}}))}else J.candidate?V.pc.remoteDescription?await V.pc.addIceCandidate(J.candidate):V.candidates.length<64&&V.candidates.push(J.candidate):J.restart&&e().seat<V.member.seat&&await B(V,!0)})}}return n("voice-join").onclick=de,n("voice-leave").onclick=()=>ae(),n("voice-mic").onclick=()=>{r&&(d=!d,l.getAudioTracks().forEach(R=>R.enabled=!d),i({type:"voice-mute",fromSession:h,muted:d}),y())},n("voice-speaker").onclick=()=>{g=!g;for(let R of b.values())Z(R);T()},n("voice-hear").onclick=()=>{c?.resume();for(let R of b.values())Z(R)},window.addEventListener("pagehide",()=>ae()),document.addEventListener("visibilitychange",()=>{!document.hidden&&r&&(c?.resume().catch(()=>{}),y())}),T(),{receive:We,paintPlayers:E,connected(R){s=R===1,S(x?s?"Join to talk with your crew.":"Voice server update pending.":"Voice needs HTTPS and a browser with microphone support.")},disconnect(){s=!1,f=[],ae(!1,"Reconnect to the room, then join voice.")},leave(){f=[],ae(!1)},diagnostics(){return{active:r,joining:a,muted:d,deafened:g,microphoneLive:!!l?.getAudioTracks().some(R=>R.readyState==="live"),relayConfigured:!!u.relayConfigured,peers:[...b.values()].map(R=>({seat:R.member.seat,state:R.pc.connectionState,blocked:R.blocked})),talking:[...M].filter(([,R])=>R.talking).map(([R])=>f.find(V=>V.id===R)?.seat)}},async stats(){let R=[];for(let V of b.values()){let J=await V.pc.getStats();for(let _e of J.values())_e.type==="inbound-rtp"&&_e.kind==="audio"&&R.push({seat:V.member.seat,bytes:_e.bytesReceived,packets:_e.packetsReceived,energy:_e.totalAudioEnergy,samples:_e.totalSamplesReceived})}return R}}}function Yd(i){let e='<g fill="#274238" stroke="#d8ba79" stroke-width=".025"><ellipse cx="-.14" cy="-.49" rx=".12" ry=".09"/><ellipse cx=".14" cy="-.49" rx=".12" ry=".09"/><path d="M-.025-.49H.025"/></g>';return i===0?'<ellipse cy="-.77" rx=".43" ry=".06" fill="#dab77a"/><path d="M-.28-.77Q-.32-1.12 0-1.09Q.32-1.12.28-.77Z" fill="#ead09a"/><path d="M-.28-.81H.28" stroke="#4f7b40" stroke-width=".06"/>'+e:i===1?'<path d="M-.46-.75Q-.4-1.19 0-.96Q.4-1.19.46-.75Z" fill="#34433b" stroke="#dbb16b" stroke-width=".035"/><circle cy="-.91" r=".055" fill="#ffe5a3"/><path d="M0-.28Q-.15-.38-.2-.27Q-.1-.2 0-.28Q.15-.38.2-.27Q.1-.2 0-.28" fill="#45332a"/><path d="M-.17-.23H.17" stroke="#d26e5c" stroke-width=".075"/>':i===2?'<path d="M-.3-.75L-.33-1.04-.15-.87 0-1.12.15-.87.33-1.04.3-.75Z" fill="#7ac54a" stroke="#d1b56b" stroke-width=".03"/><circle cy="-.79" r=".045" fill="#ffe79b"/><path d="M-.22-.2L-.4.2H.4L.22-.2" fill="#50916a" opacity=".75"/>':i===3?'<ellipse cy="-.77" rx=".42" ry=".06" fill="#e5bd83"/><ellipse cy="-.85" rx=".28" ry=".14" fill="#ecd1a1"/><g fill="#ff92b3" stroke="#ffe49c" stroke-width=".025"><circle cx="-.2" cy="-.8" r=".075"/><circle cy="-.85" r=".075"/><circle cx=".2" cy="-.8" r=".075"/><circle cx="-.17" cy="-.21" r=".065"/><circle cy="-.16" r=".065"/><circle cx=".17" cy="-.21" r=".065"/></g>':i===4?'<path d="M-.24-.77L.05-1.27.25-.77Z" fill="#ad82de" stroke="#ffe29e" stroke-width=".025"/><circle cx=".05" cy="-1.27" r=".06" fill="#ffe59f"/><path d="M0-.18L-.22-.27V-.09L0-.18.22-.27V-.09Z" fill="#ef9d78"/>':i===5?'<ellipse cy="-.82" rx=".3" ry=".17" fill="#ad7e49"/>'+e+'<path d="M-.2-.23H.2L.27.06.16.09.12-.15" fill="#fb9956"/>':""}var Uh={chase:"\u0D0E\u0D28\u0D4D\u0D31\u0D46 \u0D36\u0D3F\u0D35\u0D28\u0D47!",nearMiss:"\u0D0E\u0D28\u0D4D\u0D24\u0D4B\u2026 \u0D0E\u0D19\u0D4D\u0D19\u0D28\u0D46!",capture:"\u0D30\u0D23\u0D4D\u0D1F\u0D4D \u0D13\u0D32\u0D15\u0D4D\u0D15\u0D40\u0D31\u0D4B \u0D35\u0D46\u0D33\u0D4D\u0D33\u0D24\u0D4D\u0D24\u0D41\u0D23\u0D3F\u0D2F\u0D4B \u0D0E\u0D1F\u0D41\u0D24\u0D4D\u0D24\u0D4B\u0D33\u0D42 \u0D0E\u0D28\u0D4D\u0D28\u0D46 \u0D2E\u0D42\u0D1F\u0D3E\u0D7B",boast:"\u0D07\u0D28\u0D3F \u0D28\u0D2E\u0D4D\u0D2E\u0D7E \u0D0E\u0D28\u0D4D\u0D24\u0D41\u0D02 \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D02 \u0D2E\u0D32\u0D4D\u0D32\u0D2F\u0D4D\u0D2F\u0D3E!",noMove:"\u0D0E\u0D28\u0D4D\u0D24\u0D3F\u0D28\u0D4B \u0D35\u0D47\u0D23\u0D4D\u0D1F\u0D3F \u0D24\u0D3F\u0D33\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28 \u0D38\u0D3E\u0D2E\u0D4D\u0D2A\u0D3E\u0D7C!",victory:"\u0D2E\u0D4A\u0D24\u0D32\u0D3E\u0D33\u0D3F \u0D1C\u0D19\u0D4D\u0D15 \u0D1C\u0D17 \u0D1C\u0D17\u0D3E!"};function Zd(i,e){if(!i||!e||e.gift||["celebration","done"].includes(i.phase))return null;if(e.captured.length)return{kind:"capture",...e.captured[0],winner:{seat:e.seat,token:e.token}};if(e.old<0||e.next>50)return null;let t=$l(e.seat,e.next),n=[];for(let s of i.active)s!==e.seat&&i.tokens[s].forEach((r,a)=>{let o=$l(s,r);if(o===null||Sr.has(o))return;let l=(o-t+52)%52,c=e.next-e.old>1&&$l(e.seat,e.next-1)===o;l===1&&e.next+1<=50||c?n.push({kind:"nearMiss",seat:s,token:a}):l===2&&e.next+2<=50&&n.push({kind:"chase",seat:s,token:a})});return n.find(s=>s.kind==="nearMiss")||n[0]||null}function Jd(i){if(i?.phase!=="waiting"||!i.lastRoll||i.legal.length)return null;let e=i.lastRoll.seat,t=i.tokens[e].findIndex(n=>n<is);return t<0?null:{kind:"noMove",seat:e,token:t}}function $d({board:i,tokenNodes:e,reduced:t,getRoom:n}){let s=document.createElement("div");s.className="movie-callout",s.hidden=!0,s.lang="ml",s.setAttribute("aria-hidden","true"),i.append(s);let r=null,a=-1/0,o=null;function l(){o?.classList.remove("movie-react"),o=null,r=null,s.hidden=!0}function c(){l(),a=-1/0}function h(p,m,b){o?.classList.remove("movie-react"),r.kind=p,r.seat=m,r.token=b,o=e.get(m+"-"+b),o?.classList.add("movie-react"),s.textContent=Uh[p],s.dataset.kind=p,s.hidden=!1}function f(p){let m=n(),b=performance.now();return!p||!m?.game||["celebration","done"].includes(m.game.phase)||p.kind!=="capture"&&(r||b-a<6e3)?!1:(l(),a=b,r={...p,started:b,room:m.code,revision:m.game.revision,duration:p.kind==="capture"?4400:2300},h(p.kind,p.seat,p.token),u(50,40),!0)}function u(p,m){s.style.left=Math.max(27,Math.min(73,p))+"%",s.style.top=Math.max(27,Math.min(70,m))+"%"}function d(p){if(!r)return;let m=n(),b=p-r.started;if(!m?.game||m.code!==r.room||m.game.revision<r.revision||["celebration","done"].includes(m.game.phase)||b>=r.duration){l();return}if(r.kind==="capture"&&b>=2500&&h("boast",r.winner.seat,r.winner.token),i.dataset.renderer!=="webgl"&&o){let M=i.getBoundingClientRect(),x=o.getBoundingClientRect();M.width&&M.height&&u((x.x+x.width/2-M.x)/M.width*100,(x.y-M.y)/M.height*100)}}function g(p){return r&&r.seat===p.seat&&r.token===p.token}function v(p,m){if(!g(p)||t.matches)return;let b=(m-r.started)/1e3;if(r.kind==="capture"&&b<1.35)return;let M=r.kind==="boast"?b-2.5:b,x=Math.max(0,Math.min(1,M/.18,(r.duration/1e3-b)/.3));r.kind==="chase"?(p.head.rotation.y+=Math.sin(Math.min(1,M/.5)*Math.PI/2)*.85*x,p.eyes.scale.y=1+.3*x,p.arms.forEach((S,T)=>S.rotation.z=(T?1:-1)*.9*x),p.body.position.y+=Math.max(0,Math.sin(M*9))*.07*x):r.kind==="nearMiss"?(p.head.rotation.z=Math.sin(M*5)*.16*x,p.arms.forEach((S,T)=>S.rotation.z=(T?1:-1)*1.2*x)):r.kind==="noMove"?(p.head.rotation.x+=.22*x,p.head.rotation.z=-.18*x,p.arms[1].rotation.z=2.65*x):r.kind==="boast"?(p.body.rotation.x=-.14*x,p.head.rotation.x-=.1*x,p.arms.forEach((S,T)=>S.rotation.z=(T?1:-1)*.8*x),p.body.scale.set(1+.06*x,1+.03*x,1)):(p.arms.forEach((S,T)=>S.rotation.z=(T?1:-1)*2.2*x),p.head.rotation.z=-.2*x)}return{start:f,reset:c,clear:l,update:d,pose:v,matches:g,anchor:u,snapshot:()=>r?{kind:r.kind,seat:r.seat,token:r.token,text:s.textContent,reducedMotion:t.matches}:null,dispose(){c(),s.remove()}}}var rf="https://ludoloop.pythonanywhere.com",le=i=>document.getElementById(i),ss=["#df5e49","#64b85d","#e9b13e","#409acb"],Ls=["Bear","Panda","Deer","Fox"];var Tr="http://www.w3.org/2000/svg",af=[{kind:"jump",label:"Jump",icon:"\u{1F43E}",wireText:"Nice move! \u2728"},{kind:"dance",label:"Dance",icon:"\u{1F483}",wireText:"Oops! \u{1F648}"},{kind:"wave",label:"Wave",icon:"\u{1F44B}",wireText:"Let\u2019s go! \u{1F680}"}],As=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ci,ut=null,Nn=-1,Fa="",An=null,Ql=null,Ar=!1,Kd,Qd=0,Fh=!0,rs=!1,li,jd,Ua=null,br=null,ec=0,Rs=0,of="create",O_=new URLSearchParams(location.search),tc=(O_.get("room")||"").toUpperCase();try{le("name").value=localStorage.getItem("ludo-name")||"Player",rs=localStorage.getItem("ludo-sound")==="on",tc&&(An=JSON.parse(localStorage.getItem("ludo-session-"+tc)||"null"))}catch{}function hi(i){le("toast").textContent=i,le("toast").hidden=!1,clearTimeout(jd),jd=setTimeout(()=>{le("toast").hidden=!0},3800)}function Is(i){if(rs)try{if(li??=new(window.AudioContext||window.webkitAudioContext),li.resume(),i==="capture"){[[0,190,720,.24],[.24,950,150,.09]].forEach(([t,n,s,r])=>{let a=li.createOscillator(),o=li.createGain(),l=li.currentTime+t;a.type="sine",a.frequency.setValueAtTime(n,l),a.frequency.exponentialRampToValueAtTime(s,l+r),o.gain.setValueAtTime(.001,l),o.gain.linearRampToValueAtTime(.045,l+.015),o.gain.exponentialRampToValueAtTime(.001,l+r),a.connect(o),o.connect(li.destination),a.onended=()=>{a.disconnect(),o.disconnect()},a.start(l),a.stop(l+r+.02)});return}(i==="win"?[523,659,784,1047]:[240,310,370]).forEach((t,n)=>{let s=li.createOscillator(),r=li.createGain();s.type="sine",s.frequency.value=t;let a=li.currentTime+n*.09;r.gain.setValueAtTime(.035,a),r.gain.exponentialRampToValueAtTime(.001,a+.16),s.connect(r),r.connect(li.destination),s.start(a),s.stop(a+.17)})}catch{}}function lf(){le("sound").classList.toggle("active",rs),le("sound").setAttribute("aria-label",rs?"Disable sound":"Enable sound"),le("sound").setAttribute("aria-pressed",String(rs))}lf();le("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{hi("Fullscreen is unavailable in this browser.")}};le("sound").onclick=()=>{rs=!rs;try{localStorage.setItem("ludo-sound",rs?"on":"off")}catch{}lf(),Is("roll")};function Yn(i){return ci?.readyState!==WebSocket.OPEN?(hi("Reconnecting to the table. One moment\u2026"),!1):(ci.send(JSON.stringify(i)),!0)}var Cs=qd({send:Yn,identity:()=>({id:Fa,seat:Nn}),notify:hi});window.ludoVoice={snapshot:()=>Cs.diagnostics(),stats:()=>Cs.stats()};function cf(){clearTimeout(Kd);let i=new WebSocket(Wd(rf,location.href));ci=i,i.onopen=()=>{i===ci&&(Qd=0,le("connection-text").textContent="Ready to play",document.querySelector(".connection").classList.add("online"),An?.token?Yn({type:"resume",code:An.code,token:An.token}):Ql&&(Yn(Ql),Ql=null),ui())},i.onmessage=e=>{if(i!==ci)return;let t=JSON.parse(e.data);if(t.type==="joined"){nc=!0,An={code:t.code,token:t.token,seat:t.seat,id:t.id,shareBase:t.shareBase},Nn=t.seat,Fa=t.id,Ar=!1,Cs.connected(t.voiceVersion);try{localStorage.setItem("ludo-session-"+t.code,JSON.stringify(An))}catch{}history.replaceState({},"",location.pathname+"?room="+t.code)}else if(t.type.startsWith("voice-"))Cs.receive(t);else if(t.type==="state")k_(t.room),ut=t.room,Rs=ut.serverTime-Date.now(),H_();else if(t.type==="error"){if(Ar=!1,!ut&&An){try{localStorage.removeItem("ludo-session-"+An.code)}catch{}An=null}hi(t.message),ui()}else if(t.type==="emote"){let n=af.find(s=>s.wireText===t.text);n&&os?.celebrate(t.seat,n.kind),hi((ut?.seats[t.seat]?.name||"Player")+": "+(n?n.icon+" "+n.label+"!":t.text)),Is("emote")}else if(t.type==="left"){if(Cs.leave(),An)try{localStorage.removeItem("ludo-session-"+An.code)}catch{}ut=null,An=null,Nn=-1,Fa="",Ua=null,br=null,pf({game:null}),nc=!0,le("welcome").hidden=!1,le("room-screen").hidden=!0,le("mobile-dock").hidden=!0,document.body.classList.remove("playing"),history.replaceState({},"",location.pathname),ic("create"),ui()}},i.onclose=e=>{i===ci&&(Cs.disconnect(),le("connection-text").textContent="Reconnecting\u2026",document.querySelector(".connection").classList.remove("online"),e.code===4001&&(Fh=!1,hi("This player session is open in another tab.")),e.code===1008&&(Fh=!1,le("connection-text").textContent="Connection blocked",hi("The server blocked this connection. Check the allowed website address or reload to try again.")),Fh&&(Kd=setTimeout(cf,Math.min(5e3,800*++Qd))),ui())},i.onerror=()=>{}}function ic(i){of=i,le("create-tab").classList.toggle("selected",i==="create"),le("join-tab").classList.toggle("selected",i==="join"),le("join-field").hidden=i!=="join",le("begin").innerHTML=i==="join"?"Pull up a seat <span>\u2192</span>":"Make some room <span>\u2192</span>"}le("create-tab").onclick=()=>ic("create");le("join-tab").onclick=()=>ic("join");tc&&(ic("join"),le("room-input").value=tc);function sc(i=!1){if(Ar)return;let e=le("name").value.trim()||"Player";try{localStorage.setItem("ludo-name",e)}catch{}let t=i||of==="create"?{type:"create",name:e,mode:i?"solo":"friends"}:{type:"join",name:e,code:le("room-input").value.trim().toUpperCase()};if(t.type==="join"&&!/^[A-Z2-9]{6}$/.test(t.code)){hi("Enter the six-character room code."),le("room-input").focus();return}Ar=!0,ui(),ci?.readyState===WebSocket.OPEN?Yn(t):Ql=t}le("begin").onclick=()=>sc();le("solo").onclick=()=>sc(!0);le("room-input").addEventListener("keydown",i=>{i.key==="Enter"&&sc()});le("name").addEventListener("keydown",i=>{i.key==="Enter"&&sc()});le("room-input").addEventListener("input",()=>{le("room-input").value=le("room-input").value.toUpperCase().replace(/[^A-Z0-9]/g,"")});function ui(){if(le("begin").disabled=Ar,le("solo").disabled=Ar,!ut?.game)return;let i=ut.game,e=Date.now()+Rs>=(i.giftUntil||0),t=e&&!di&&i.turn===Nn&&i.phase==="roll"&&ci?.readyState===WebSocket.OPEN&&Date.now()>=ec;le("roll").disabled=!t,le("dice").disabled=!t,document.querySelectorAll("[data-seat-dice]").forEach(s=>{s.disabled=!(t&&Number(s.dataset.seatDice)===Nn)});let n=e&&!di&&i.turn===Nn&&i.phase==="move"&&Date.now()>=ec&&ci?.readyState===WebSocket.OPEN;le("mobile-roll").disabled=!(t||n),le("mobile-dice").disabled=!t}async function hf(i,e){try{await navigator.clipboard.writeText(i)}catch{let t=document.createElement("textarea");t.value=i,t.className="sr-only",document.body.append(t),t.select();let n=document.execCommand("copy");if(t.remove(),!n){window.prompt("Copy this invite",i);return}}hi(e)}le("copy-code").onclick=()=>ut&&hf(ut.code,"Room code copied. Bring your crew!");le("copy-link").onclick=()=>{ut&&hf(Xd(ut.code,rf,location.href,An?.shareBase),"Invite link copied. Send it to your friends!")};le("leave").onclick=()=>{ut?.game&&ut.game.phase!=="done"&&!window.confirm("Leave this race? Your tokens will leave the board.")||Yn({type:"leave"})};le("rules-button").onclick=()=>le("rules-dialog").showModal();le("close-rules").onclick=le("got-it").onclick=()=>le("rules-dialog").close();le("rules-dialog").onclick=i=>{if(i.target===le("rules-dialog")){let e=i.target.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&i.target.close()}};document.querySelector(".emotes").innerHTML=af.map((i,e)=>'<button type="button" class="emote-action" data-emote="'+e+'" title="'+i.label+' with your explorers" aria-label="'+i.label+' with my characters"><span aria-hidden="true">'+i.icon+"</span><span>"+i.label+"</span></button>").join("");document.querySelectorAll("[data-emote]").forEach(i=>{i.onclick=()=>{!ut||!Yn({type:"emote",index:Number(i.dataset.emote)})||(document.querySelectorAll("[data-emote]").forEach(e=>e.disabled=!0),setTimeout(()=>document.querySelectorAll("[data-emote]").forEach(e=>e.disabled=!1),2050))}});function rc(){ut?.game&&!le("roll").disabled&&Yn({type:"roll",revision:ut.game.revision})}le("roll").onclick=le("dice").onclick=rc;le("mobile-dice").onclick=rc;le("mobile-roll").onclick=()=>{ut?.game?.phase==="move"?le("board").scrollIntoView({behavior:"smooth",block:"center"}):rc()};function uf(i=""){return'<defs><radialGradient id="'+i+'canopy"><stop stop-color="#92c63f"/><stop offset=".48" stop-color="#41953a"/><stop offset="1" stop-color="#155d39"/></radialGradient><linearGradient id="'+i+'bark" x2="1" y2=".1"><stop stop-color="#4d3624"/><stop offset=".5" stop-color="#977044"/><stop offset="1" stop-color="#503d28"/></linearGradient><radialGradient id="'+i+'forest-floor"><stop stop-color="#81a943"/><stop offset=".65" stop-color="#417637"/><stop offset="1" stop-color="#174b35"/></radialGradient><linearGradient id="'+i+'stream" x2="1" y2=".3"><stop stop-color="#145968"/><stop offset=".4" stop-color="#24b6ba"/><stop offset=".7" stop-color="#5cdad1"/><stop offset="1" stop-color="#19758c"/></linearGradient><symbol id="'+i+'tree" viewBox="-1 -1.8 2 2.3"><ellipse cy=".29" rx=".8" ry=".22" fill="#102e2370"/><path d="M-.14 .25L-.09-1.25H.11L.18 .25Z" fill="url(#'+i+'bark)"/><path d="M0-.5L-.44-.87M.05-.7L.4-1.02" stroke="#694a2a" stroke-width=".11" stroke-linecap="round"/><g class="tree-crown"><path d="M-.79-.62Q-1.02-.86-.65-1.14Q-.85-1.54-.34-1.58Q-.01-1.97.33-1.57Q.82-1.56.72-1.15Q1.07-.82.7-.62Q.42-.33.1-.56Q-.38-.35-.79-.62Z" fill="#145635" stroke="#164329" stroke-width=".035"/><ellipse cx="-.42" cy="-1.13" rx=".43" ry=".36" fill="url(#'+i+'canopy)"/><ellipse cx=".4" cy="-1.17" rx=".4" ry=".34" fill="url(#'+i+'canopy)"/><ellipse cy="-1.4" rx=".48" ry=".37" fill="url(#'+i+'canopy)"/><ellipse cy="-.9" rx=".51" ry=".32" fill="url(#'+i+'canopy)"/><path d="M-.59-1.28Q-.47-1.42-.31-1.38M-.1-1.56Q.08-1.71.25-1.55M.34-1.18Q.57-1.33.64-1.15M-.19-.92Q.05-1.12.22-.92" stroke="#aed45c" stroke-opacity=".55" stroke-width=".045" fill="none" stroke-linecap="round"/></g></symbol><symbol id="'+i+'rock" viewBox="-.6 -.6 1.2 1"><ellipse cy=".2" rx=".52" ry=".16" fill="#163d2570"/><path d="M-.53.1L-.35-.35.06-.5.44-.22.53.16.14.29Z" fill="#687d70" stroke="#324e40" stroke-width=".035"/><path d="M-.35-.35L.06-.5.17-.15-.14.09-.53.1Z" fill="#99aa86"/><path d="M.17-.15L.44-.22.53.16.14.29-.14.09Z" fill="#50695b"/><path d="M-.35-.35L.06-.5.17-.15" stroke="#c6cdb0" stroke-width=".03" fill="none"/><path d="M-.48.13Q-.18.0-.08.24" stroke="#7aab42" stroke-width=".09" fill="none"/></symbol><symbol id="'+i+'grass" viewBox="-.4 -.5 .8 .7"><g class="grass-blades"><path d="M0 .1Q-.43-.02-.35-.36Q-.18-.19-.08.05Q-.23-.37.02-.49Q.15-.25.06.05Q.16-.28.39-.28Q.37-.04.08.1Z" fill="#407e31"/><path d="M-.05.06Q-.19-.29-.16-.32M.04.05L.02-.34M.11.06Q.24-.17.31-.21" stroke="#a0c94d" stroke-width=".025" fill="none"/></g></symbol></defs>'}function wr(i,e,t,n=1,s="",r=0){let a=i==="tree"?n*1.15:n*.85;return'<g transform="translate('+e+" "+t+')"><g class="scenery-motion motion-'+i+'" style="--scene-delay:'+r+'s"><use class="scene-'+i+'" href="#'+s+i+'" x="'+-n/2+'" y="'+-a*.8+'" width="'+n+'" height="'+a+'"/></g></g>'}function B_(){let i='<svg viewBox="-4 -1.2 23 17.4" xmlns="'+Tr+'" aria-hidden="true">'+uf("world-");i+='<rect x="-4" y="-1.2" width="23" height="17.4" rx="1.5" fill="url(#world-forest-floor)"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#274a32" stroke-width="1.6" fill="none"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="url(#world-stream)" stroke-width="1.12" fill="none"/><path class="world-current" d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#cffcf0" stroke-opacity=".55" stroke-width=".06" stroke-dasharray=".25 .65" fill="none"/>';for(let e of[-.88,15.95]){let t="M"+e+"-1.2Q"+(e+.28)+" 2.8 "+(e-.08)+" 5.8T"+(e-.08)+" 10.4Q"+(e+.35)+" 13 "+e+" 16.2";i+='<path d="'+t+'" stroke="#335439" stroke-width=".8" fill="none"/><path d="'+t+'" stroke="url(#world-stream)" stroke-width=".59" fill="none"/><path class="world-current" d="'+t+'" stroke="#b8fff1" stroke-width=".045" stroke-dasharray=".2 .4" fill="none" opacity=".6"/>'}for(let e=0;e<82;e++){let t=e%2,n=Math.floor(e/2),s=t?16.9+n%3*.7:-1.85-n%3*.7,r=-.4+n%14*1.23;i+=wr("tree",s,r,1.5+e%4*.18,"world-",-(e%9)*.7)}for(let e=0;e<88;e++){let t=e%2,n=Math.floor(e/2),s=t?15.1+n%4*.92:-.18-n%4*.92,r=.15+n%15*1.06;i+=wr(e%7===0?"rock":"grass",s,r,e%7===0?.65:.6,"world-",-e*.13)}for(let[e,t]of[[-.9,4.1],[15.95,9.4],[-.88,12.8]]){i+='<g transform="translate('+e+" "+t+') rotate(-12)"><ellipse cy=".18" rx=".98" ry=".34" fill="#123e2f70"/><rect x="-.95" y="-.29" width="1.9" height=".58" rx=".08" fill="#604529"/>';for(let n=0;n<9;n++)i+='<rect x="'+(-.91+n*.21)+'" y="-.31" width=".18" height=".55" rx=".03" fill="'+(n%2?"#ac834b":"#c3985a")+'" stroke="#59432b" stroke-width=".025"/>';i+='<path d="M-.95-.31Q0-.47.95-.31M-.95.2Q0 .1.95.2" stroke="#dfc78b" stroke-width=".055" fill="none"/><path d="M-.91-.4V.29M.9-.4V.29" stroke="#785329" stroke-width=".12"/></g>'}for(let e of[-.88,15.95]){i+='<g transform="translate('+e+' 7.2) scale(.65 1)"><path d="M-.55-.8L-.5 .55Q0 .85.5 .55L.55-.8" fill="url(#world-stream)"/>';for(let t=0;t<7;t++)i+='<path class="waterfall-line" style="--scene-delay:'+-t*.12+'s" d="M'+(-.43+t*.14)+'-.78v.75" stroke="#c1fff7" stroke-opacity=".65" stroke-width=".05" stroke-dasharray=".2 .16"/>';i+='<ellipse class="water-spray" cy=".65" rx=".7" ry=".22" fill="#d2fff7" opacity=".45"/></g>'}for(let e=0;e<25;e++){let t=e%2?15.7+e%3*.65:-.65-e%3*.65,n=.5+e%13*1.2;i+='<g transform="translate('+t+" "+n+')"><g class="forest-flower"><circle cx="-.06" r=".09" fill="#ef9b9d"/><circle cx=".06" r=".09" fill="#f1b095"/><circle cy="-.08" r=".09" fill="#ee817e"/><circle r=".055" fill="#ffe58e"/></g></g>',i+='<circle class="forest-firefly" style="--scene-delay:'+-e*.37+'s" cx="'+(t+.22)+'" cy="'+(n-.6)+'" r=".027" fill="#fff795"/>'}return i+="</svg>",i}var ac=document.createElement("div");ac.className="world-stage";ac.setAttribute("aria-hidden","true");ac.innerHTML=B_();document.querySelector(".board-shell").prepend(ac);var df=()=>{let i='<svg viewBox="-.2 -.2 15.4 15.4" xmlns="'+Tr+'" aria-label="Jungle adventure Ludo board" role="group"><defs>';i+='<linearGradient id="stone" x2=".3" y2="1"><stop stop-color="#fff0cb"/><stop offset=".55" stop-color="#e3cca4"/><stop offset="1" stop-color="#bca27b"/></linearGradient><linearGradient id="wood" x2=".2" y2="1"><stop stop-color="#ac783e"/><stop offset="1" stop-color="#583a22"/></linearGradient><radialGradient id="water"><stop stop-color="#67e8e8"/><stop offset="1" stop-color="#087d96"/></radialGradient>',ss.forEach((n,s)=>{i+='<linearGradient id="land-'+s+'" x2=".6" y2="1"><stop stop-color="'+n+'" stop-opacity=".85"/><stop offset="1" stop-color="'+n+'" stop-opacity=".45"/></linearGradient>',i+='<radialGradient id="fur-'+s+'" cx=".3" cy=".2" r=".9"><stop stop-color="'+["#d49350","#fffdf0","#e9b965","#ffb74e"][s]+'"/><stop offset="1" stop-color="'+["#854c28","#d9d9c8","#ac702d","#cb5420"][s]+'"/></radialGradient>'}),i+='<pattern id="ground-grain" width=".62" height=".62" patternUnits="userSpaceOnUse"><path d="M.1 .22l.06-.09.04 .08M.45 .49l.035-.09.03 .07" stroke="#e7ec9570" stroke-width=".025" fill="none"/><ellipse cx=".42" cy=".16" rx=".055" ry=".025" fill="#182f1935"/><circle cx=".15" cy=".52" r=".018" fill="#ffe8aa55"/><path d="M.32 .35h.07" stroke="#eacf8035" stroke-width=".02"/></pattern><filter id="token-shadow" x="-60%" y="-60%" width="220%" height="230%"><feDropShadow dx=".02" dy=".045" stdDeviation=".025" flood-color="#182d18" flood-opacity=".4"/></filter></defs>',i+=uf(),i+='<path d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#0b6880" stroke-width=".52" fill="none"/><path class="river-flow" d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#7ef0e9" stroke-width=".12" stroke-dasharray=".14 .5" fill="none" opacity=".8"/>',[[0,0],[0,9],[9,9],[9,0]].forEach(([n,s],r)=>{i+='<g class="habitat"><rect x="'+(s+.18)+'" y="'+(n+.26)+'" width="5.64" height="5.64" rx="1.2" fill="#273f22"/><rect x="'+(s+.2)+'" y="'+(n+.1)+'" width="5.6" height="5.65" rx="1.2" fill="url(#land-'+r+')" stroke="#769741" stroke-width=".11"/>',i+='<rect x="'+(s+.25)+'" y="'+(n+.15)+'" width="5.5" height="5.55" rx="1.15" fill="url(#ground-grain)"/><path d="M'+(s+1.8)+" "+(n+1.9)+"Q"+(s+3)+" "+(n+2.5)+" "+(s+4.2)+" "+(n+1.9)+"M"+(s+1.9)+" "+(n+1.9)+"Q"+(s+2.4)+" "+(n+3)+" "+(s+1.9)+" "+(n+4.1)+"M"+(s+4.1)+" "+(n+1.9)+"Q"+(s+3.5)+" "+(n+3)+" "+(s+4.1)+" "+(n+4.1)+"M"+(s+1.9)+" "+(n+4.1)+"Q"+(s+3)+" "+(n+3.7)+" "+(s+4.1)+" "+(n+4.1)+'" fill="none" stroke="#efdc9640" stroke-width=".26" stroke-linecap="round"/>',i+='<path d="M'+(s+.8)+" "+(n+4.9)+" Q"+(s+3)+" "+(n+5.8)+" "+(s+5.1)+" "+(n+4.9)+'" fill="none" stroke="#ffe8a5" stroke-opacity=".16" stroke-width=".12"/>',Jl[r].forEach(([a,o])=>{i+='<ellipse cx="'+o+'" cy="'+(a+.12)+'" rx=".7" ry=".43" fill="#132816" fill-opacity=".25" stroke="#f9d486" stroke-opacity=".35" stroke-width=".05"/>'});for(let[a,o,l]of[[.55,1.32,1.25],[5.35,1.38,1.1],[.48,4.3,.95],[5.5,4.8,1.3],[1.12,5.3,.8],[4.64,5.5,.82]])i+=wr("tree",s+a,n+o,l,"",-(r+a)*.6);for(let a=0;a<15;a++){let o=s+.45+a%5*1.15,l=n+(a<5?5.6:a<10?.4:3.04);a>=10&&a%5>0&&a%5<4||(i+=wr("grass",o,l,.43,"",-a*.3))}i+=wr("rock",s+.84,n+3.54,.52)+wr("rock",s+5.05,n+2.25,.49),i+='<text x="'+(s+3)+'" y="'+(n+.78)+'" text-anchor="middle" fill="#fff4c9" font-size=".26" class="yard-name">'+Ls[r].toUpperCase()+" CAMP</text>";for(let a=0;a<9;a++){let o=s+.4+a%5*1.22,l=n+(a<5?5.4:.35);i+='<g transform="translate('+o+" "+l+") rotate("+a*39+')"><ellipse cx="-.08" cy="0" rx=".24" ry=".1" fill="#1e6634"/><ellipse cx=".1" cy="-.13" rx=".26" ry=".11" fill="#72a72d"/><path d="M-.3 .03L.26 -.08" stroke="#b3c84b" stroke-width=".025"/>'+(a%3===0?'<circle cx=".1" cy=".04" r=".1" fill="#f09286"/><circle cx=".1" cy=".04" r=".035" fill="#ffe27d"/>':"")+"</g>"}i+='<g transform="translate('+(s+.66)+" "+(n+3)+')"><path d="M0 .3V-.15" stroke="#704623" stroke-width=".12"/><path class="torch-flame" d="M0 -.7Q.3 -.36 0 -.1Q-.25 -.25 0 -.7" fill="#ffce58"/><circle class="torch-glow" cy="-.35" r=".4" fill="#ffb12b" opacity=".12"/></g>',i+='<g transform="translate('+(s+5.12)+" "+(n+3)+') rotate(-12)"><rect x="-.22" y="-.15" width=".44" height=".32" rx=".05" fill="url(#wood)" stroke="#e7b65e" stroke-width=".035"/><path d="M-.22 -.02H.22M0 -.15V.17" stroke="#e9bc5e" stroke-width=".045"/><circle class="treasure-glint" cy=".01" r=".055" fill="#ffef9c"/></g></g>',i+='<g transform="translate('+(s+.87)+" "+(n+4.7)+')"><ellipse cy=".13" rx=".35" ry=".14" fill="#294627"/><path d="M-.3 .12L-.23 -.15-.05 -.24.15 -.12.2 .14Z" fill="#667868" stroke="#354b35" stroke-width=".035"/><path d="M-.22 -.13L-.05 -.18.12 -.09" stroke="#9aa484" stroke-width=".045" fill="none"/><rect x=".18" y="-.07" width=".065" height=".22" rx=".02" fill="#e6d4a2"/><path class="mushroom-cap" d="M.07 -.06Q.2 -.33.35 -.06Z" fill="#e67552"/><circle cx=".19" cy="-.15" r=".025" fill="#ffefd0"/><circle cx=".27" cy="-.11" r=".02" fill="#ffefd0"/></g>'});for(let n=0;n<15;n++)for(let s=0;s<15;s++){if(!(n>=6&&n<=8||s>=6&&s<=8)||n>=6&&n<=8&&s>=6&&s<=8)continue;let r=Na.findIndex(([l,c])=>l===n&&c===s),a="url(#stone)",o=!1;for(let l=0;l<4;l++)(Zl[l].some(([c,h])=>c===n&&h===s)||r===l*13)&&(a=ss[l],o=!0);i+='<g class="path-tile" data-cell="'+n+","+s+'"><rect x="'+(s+.03)+'" y="'+(n+.14)+'" width=".94" height=".9" rx=".13" fill="#574b32"/><rect x="'+(s+.035)+'" y="'+(n+.03)+'" width=".93" height=".91" rx=".13" fill="'+a+'" stroke="'+(o?"#fff2ae":"#f3dfb7")+'" stroke-opacity=".5" stroke-width=".035"/><path d="M'+(s+.17)+" "+(n+.13)+"H"+(s+.65)+"M"+(s+.08)+" "+(n+.36)+"V"+(n+.64)+'" stroke="#fff6d3" stroke-opacity=".32" stroke-width=".04" stroke-linecap="round"/>',!o&&(n+s)%4===0&&(i+='<path d="M'+(s+.77)+" "+(n+.78)+'l.14 -.05-.04 .14" fill="none" stroke="#71894e" stroke-width=".045"/>'),Sr.has(r)&&(i+='<text class="safe-star" x="'+(s+.5)+'" y="'+(n+.7)+'" fill="#ffdf65" stroke="#a97824" stroke-width=".017" text-anchor="middle" font-size=".59">\u2605</text>'),i+="</g>"}return["6,6 7.5,7.5 6,9","6,6 7.5,7.5 9,6","9,6 7.5,7.5 9,9","6,9 7.5,7.5 9,9"].forEach((n,s)=>{i+='<polygon points="'+n+'" fill="'+ss[s]+'" stroke="#bc9b4e" stroke-width=".065"/>'}),i+='<circle cx="7.5" cy="7.56" r=".65" fill="#453421"/><circle cx="7.5" cy="7.5" r=".6" fill="url(#wood)" stroke="#e3bf74" stroke-width=".08"/><path d="M7.13 7.26L7.28 7.39 7.5 7.08 7.72 7.39 7.87 7.26 7.79 7.68H7.21Z" fill="#ffdb56" stroke="#aa6d16" stroke-width=".035"/><path d="M7.23 7.75H7.77" stroke="#ffea9c" stroke-width=".07" stroke-linecap="round"/><g id="effects" aria-hidden="true"></g><g id="tokens"></g></svg>',i};le("board").innerHTML=df();le("preview-board").innerHTML=df().replaceAll('id="','id="preview-').replaceAll("url(#","url(#preview-").replaceAll('href="#','href="#preview-');var Li=new Map;function Er(i,e,t){return t<0?Jl[i][e]:t<=50?Na[(i*13+t)%52].map(n=>n+.5):Zl[i][t-51].map(n=>n+.5)}function ff(i,e=!1){let t=i===2?3:i===3?2:i,n="url(#"+(e?"preview-":"")+"fur-"+i+")",s=t===1?"#292e2a":"#663819",r=t===2?'<path d="M-.34 -.43L-.37 -.91-.08 -.68M.34 -.43L.37 -.91.08 -.68" fill="'+n+'" stroke="#9d481f" stroke-width=".035"/><path d="M-.3 -.57L-.31 -.8-.19 -.64M.3 -.57L.31 -.8.19 -.64" fill="#f1d6ad"/>':'<circle cx="-.27" cy="-.68" r=".16" fill="'+(t===1?s:n)+'"/><circle cx=".27" cy="-.68" r=".16" fill="'+(t===1?s:n)+'"/><circle cx="-.27" cy="-.68" r=".09" fill="#d39b7d"/><circle cx=".27" cy="-.68" r=".09" fill="#d39b7d"/>';return t===2&&(r+='<path d="M.18 .06Q.65 .18.57 -.3Q.43 -.22.36 -.26" fill="'+n+'" stroke="#954216" stroke-width=".035"/><path d="M.49 -.04Q.59 -.14.57 -.3Q.43 -.22.36 -.26" fill="#fff5dc"/>'),t===3&&(r+='<path d="M-.2 -.7L-.27 -1.05M-.27 -.91L-.43 -1M-.27 -.91L-.18 -1.03M.2 -.7L.27 -1.05M.27 -.91L.43 -1M.27 -.91L.18 -1.03" stroke="#845c34" stroke-width=".065" fill="none" stroke-linecap="round"/>'),'<g class="animal-stride">'+r+'<g class="animal-body"><rect x="-.29" y="-.24" width=".58" height=".47" rx=".15" fill="'+ss[i]+'" stroke="#493f24" stroke-width=".035"/><rect x=".19" y="-.27" width=".17" height=".37" rx=".07" fill="#927344" stroke="#544329" stroke-width=".025"/><path d="M.23 -.25V.11M.26 -.11H.33" stroke="#f4d589" stroke-width=".035"/><ellipse class="animal-foot foot-left" cx="-.17" cy=".2" rx=".12" ry=".09" fill="'+s+'"/><ellipse class="animal-foot foot-right" cx=".17" cy=".2" rx=".12" ry=".09" fill="'+s+'"/><ellipse cx="-.27" cy="-.03" rx=".085" ry=".13" fill="'+n+'"/><path d="M-.18 -.25L.15 .12" stroke="#eac980" stroke-width=".055"/><circle cx="-.07" cy="-.1" r=".04" fill="#f9df93"/></g><g class="animal-head"><ellipse cy="-.46" rx=".34" ry=".3" fill="'+n+'" stroke="'+(t===1?"#8b9180":"#794726")+'" stroke-width=".025"/>'+(t===1?'<ellipse cx="-.16" cy="-.48" rx=".115" ry=".14" fill="'+s+'" transform="rotate(20 -.16 -.48)"/><ellipse cx=".16" cy="-.48" rx=".115" ry=".14" fill="'+s+'" transform="rotate(-20 .16 -.48)"/>':"")+(t===2?'<path d="M-.32 -.39Q-.18 -.43 0 -.25Q.18 -.43.32 -.39Q.24 -.14 0 -.18Q-.24 -.14-.32 -.39" fill="#fff5df"/>':'<ellipse cy="-.32" rx=".19" ry=".13" fill="'+(t===1?"#fffbed":"#efd1a0")+'"/>')+'<g class="animal-eyes"><ellipse cx="-.13" cy="-.48" rx=".046" ry=".063" fill="#222a20"/><ellipse cx=".13" cy="-.48" rx=".046" ry=".063" fill="#222a20"/><circle cx="-.14" cy="-.5" r=".015" fill="white"/><circle cx=".12" cy="-.5" r=".015" fill="white"/></g><ellipse cy="-.33" rx=".058" ry=".042" fill="#35291e"/><path d="M0 -.31V-.27Q-.07 -.22-.1 -.28M0 -.27Q.07 -.22.1 -.28" stroke="#614735" stroke-width=".025" fill="none" stroke-linecap="round"/><ellipse cx="-.23" cy="-.35" rx=".046" ry=".025" fill="#ef8d76" opacity=".55"/><ellipse cx=".23" cy="-.35" rx=".046" ry=".025" fill="#ef8d76" opacity=".55"/><path d="M-.18 -.63Q-.12 -.67-.07 -.64M.07 -.64Q.12 -.67.18 -.63" fill="none" stroke="#744c2d" stroke-width=".026" stroke-linecap="round"/></g></g>'}function ef(i,e,t=!1){let n=document.createElementNS(Tr,"g");n.classList.add("token","explorer-"+i),n.dataset.seat=i,n.dataset.token=e,n.style.setProperty("--idle-delay",-e*1.3-i*.7+"s"),n.innerHTML='<ellipse class="token-shadow" cy=".24" rx=".4" ry=".16" fill="#162a1d" opacity=".3"/><ellipse class="token-ring" cy=".23" rx=".43" ry=".22" fill="'+ss[i]+'" fill-opacity=".25" stroke="'+ss[i]+'" stroke-width=".035"/><g class="animal-idle" filter="url(#'+(t?"preview-":"")+'token-shadow)">'+ff(i,t)+'</g><circle cx=".28" cy=".24" r=".11" fill="#fff0c6" stroke="#665031" stroke-width=".025"/><text class="token-number" x=".28" y=".28" text-anchor="middle" fill="#493821" font-size=".12" font-weight="900">'+(e+1)+'</text><circle class="token-hit" cy="-.23" r=".53" fill="transparent"/>';let s=document.createElementNS(Tr,"g");return s.classList.add("forest-outfit"),n.append(s),n}for(let i=0;i<4;i++)for(let e=0;e<4;e++){let t=ef(i,e);Li.set(i+"-"+e,t),le("board").querySelector("#tokens").append(t);let n=ef(i,e,!0),s=i===0&&e===0?9:i===1&&e===1?16:-1,[r,a]=Er(i,e,s);n.setAttribute("transform","translate("+a+","+r+")"),le("preview-board").querySelector("#preview-tokens").append(n)}var Vh=new Map,Es=matchMedia("(prefers-reduced-motion: reduce)"),nc=!0,tf="",Oh=-1,Bh=null,Dn=0,Oa=[],di=!1,Kl=null,jl;function pf(i){Dn++,Oa=[],di=!1,clearTimeout(jl),Ps.reset(),os?.resetCaptures();for(let e of Li.values())e.getAnimations().forEach(t=>t.cancel()),e.classList.remove("walking","returning","reacting","capture-prank");for(let e=0;e<4;e++)for(let t=0;t<4;t++)Vh.set(e+"-"+t,i.game?.tokens[e][t]??-1);le("winner-layer").classList.remove("waiting-flight")}function k_(i){let e=i.game;if(nc||tf!==i.code||!e||e.revision<Oh){pf(i),nc=!1,tf=i.code,Bh=e?.lastMove?.id??null,Kl=e?.lastRoll?.id??null,Oh=e?.revision??-1;return}if(Oh=e.revision,e.lastRoll&&e.lastRoll.id!==Kl){Kl=e.lastRoll.id,clearTimeout(jl);let t=Jd(e),n=Dn,s=Kl;t&&(jl=setTimeout(()=>{n===Dn&&ut?.game?.lastRoll?.id===s&&!di&&Ps.start(t)},680))}e.lastMove&&e.lastMove.id!==Bh&&(clearTimeout(jl),Bh=e.lastMove.id,os?.deferGift(e.lastMove.gift),Oa.push({...e.lastMove,comedy:Zd(e,e.lastMove),captured:e.lastMove.captured.map(t=>({...t}))}),queueMicrotask(V_))}function kh(i,e,t){Vh.set(i+"-"+e,t);let n=Li.get(i+"-"+e),[s,r]=Er(i,e,t);n.style.transform="translate("+r+"px,"+s+"px)",n.dataset.visualStep=t}function z_(i,e,t,n="leaf"){if(Es.matches)return;let[s,r]=Er(i,e,t),a=document.createElementNS(Tr,"g");a.setAttribute("transform","translate("+r+" "+s+")"),a.classList.add("landing-effect"),a.dataset.capture=String(n==="capture"),a.innerHTML='<circle r=".42" fill="none" stroke="'+(n==="capture"?"#fcb46a":"#ffdf78")+'" stroke-width=".055"/>'+Array.from({length:5},(o,l)=>'<text x="'+Math.cos(l*1.256)*.5+'" y="'+Math.sin(l*1.256)*.5+'" fill="#ffed9d" font-size=".18">'+(n==="capture"?"\u2727":"\u2726")+"</text>").join(""),le("board").querySelector("#effects").append(a),setTimeout(()=>a.remove(),650)}async function V_(){if(di)return;di=!0;let i=Dn;for(ui(),as();Oa.length&&i===Dn;){let e=Oa.shift(),t=Li.get(e.seat+"-"+e.token);Ps.clear(),t.classList.add("walking"),t.classList.remove("finished"),kh(e.seat,e.token,e.old);let n=e.old<0?[0]:Array.from({length:e.next-e.old},(r,a)=>e.old+a+1);for(let r of n){if(i!==Dn)return;let[a,o]=Er(e.seat,e.token,r),l=Es.matches?0:[155,175,160,130][e.seat],c=t.style.transform,h="translate("+o+"px,"+a+"px)";if(l){let f=t.animate([{transform:c},{transform:h}],{duration:l,easing:"ease-in-out"});try{await f.finished}catch{return}if(i!==Dn)return;f.cancel()}kh(e.seat,e.token,r)}if(t.classList.remove("walking"),Ps.start(e.comedy),(e.next<=50&&Sr.has((e.seat*13+e.next)%52)||e.next===is||e.captured.length)&&z_(e.seat,e.token,e.next,e.captured.length?"capture":"leaf"),e.captured.length){os?.capture(e),Is("capture"),t.classList.add("capture-prank"),le("live-announcement").textContent=(ut.seats[e.seat]?.name||Ls[e.seat])+" captured "+e.captured.length+" explorer"+(e.captured.length>1?"s":"")+"!";let r=performance.now(),a=e.captured.map(l=>({c:l,node:Li.get(l.seat+"-"+l.token)}));if(a.forEach(({node:l})=>l.classList.add("returning")),Es.matches||await new Promise(l=>setTimeout(l,220)),i!==Dn)return;let o=a.map(({c:l,node:c})=>{let[h,f]=Er(l.seat,l.token,-1);return Es.matches?null:c.animate([{transform:c.style.transform},{transform:"translate("+f+"px,"+h+"px)"}],{duration:700,easing:"cubic-bezier(.2,.6,.35,1)",fill:"forwards"})});try{await Promise.all(o.filter(Boolean).map(l=>l.finished))}catch{return}if(i!==Dn||(a.forEach(({c:l,node:c},h)=>{kh(l.seat,l.token,-1),o[h]?.cancel(),c.classList.remove("returning")}),Es.matches||await new Promise(l=>setTimeout(l,Math.max(0,1350-(performance.now()-r)))),i!==Dn))return;t.classList.remove("capture-prank")}if(e.gift){Ps.clear(),os?.gift(e.gift),Is("emote");let r=(ut.seats[e.seat]?.name||Ls[e.seat])+" got the "+ns[e.gift.outfit]+" outfit from the monkey!";if(le("live-announcement").textContent=r,os||hi(r),await new Promise(a=>setTimeout(a,Es.matches?700:3e3)),i!==Dn)return}as()}i===Dn&&(di=!1,le("winner-layer").classList.remove("waiting-flight"),as(),ui())}function as(){let i=ut?.game,e=new Map,t=le("forest-gift-spots");t||(t=document.createElementNS(Tr,"g"),t.id="forest-gift-spots",t.setAttribute("aria-hidden","true"),le("board").querySelector("#tokens").before(t));let n=i?.forestGifts&&["roll","move","waiting"].includes(i.phase)&&i.active.some(r=>i.forestGifts.counts[r]<2)?i.forestGifts.tiles:[],s=n.join(",");t.dataset.tiles!==s&&(t.dataset.tiles=s,t.innerHTML=n.map(r=>{let[a,o]=Na[r];return'<g transform="translate('+(o+.5)+" "+(a+.5)+')"><circle r=".35" fill="none" stroke="#ffe38b" stroke-width=".045"/><path d="M-.13 .1Q-.2-.16.13-.2Q.22 .03-.13 .1" fill="#9fdd70"/></g>'}).join(""));for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=r+"-"+a,l=Li.get(o),c=Vh.get(o)??i?.tokens[r][a]??-1,h=i?.phase==="celebration"&&i.celebration.seats.includes(r),[f,u]=Er(r,a,h?-1:c),d=f+","+u;e.has(d)||e.set(d,[]),(c!==is||h)&&e.get(d).push({el:l,r:f,c:u,p:c}),l.classList.toggle("finished",!h&&c===is&&!l.classList.contains("walking")),l.classList.toggle("victory-dance",!!h);let g=h||!!ut?.seats[r]&&(!i||i.active.includes(r));l.style.opacity=g?"1":".2",l.classList.toggle("active-explorer",g&&i?.turn===r&&["roll","move","waiting"].includes(i.phase));let v=!!i&&Date.now()+Rs>=(i.giftUntil||0)&&i.turn===Nn&&r===Nn&&i.phase==="move"&&i.legal.includes(a)&&Date.now()>=ec&&ci?.readyState===WebSocket.OPEN&&!di;l.classList.toggle("movable",v),l.setAttribute("role","button"),l.setAttribute("tabindex",v?"0":"-1"),l.setAttribute("aria-disabled",String(!v)),l.setAttribute("aria-label",Ls[r]+" token "+(a+1)+(c<0?" in camp":c===is?" finished":" at step "+c)+(v?", can move":"")),l.dataset.visualStep=c;let p=i?.forestGifts?.outfits[r]?.[a],m=Number.isInteger(p)?ns[p]:"";l.dataset.outfit!==m&&(l.dataset.outfit=m,l.querySelector(".forest-outfit").innerHTML=Yd(p)),Number.isInteger(p)&&l.setAttribute("aria-label",l.getAttribute("aria-label")+", wearing "+ns[p])}for(let r of e.values())r.forEach(({el:a,r:o,c:l},c)=>{if(a.classList.contains("walking")||a.classList.contains("returning"))return;let h=r.length>1?.17:0,f=r.length>1?c%2?h:-h:0,u=r.length>2?c<2?-h:h:0;a.style.transform="translate("+(l+f)+"px,"+(o+u)+"px)",a.classList.toggle("stacked",r.length>1)})}le("board").addEventListener("click",i=>{let e=i.detail&&os?os.pickToken(i.clientX,i.clientY):i.target.closest(".token.movable");!di&&e&&ut?.game&&Yn({type:"move",token:Number(e.dataset.token),revision:ut.game.revision})});le("board").addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&i.target.classList.contains("movable")&&(i.preventDefault(),i.target.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});function G_(){let i=ut.game,e=ut.owner===Fa;le("mobile-dock").hidden=!i||i.phase==="done",document.body.classList.toggle("playing",!!i&&i.phase!=="done"),le("players").innerHTML=ut.seats.map((t,n)=>{let s=i?.tokens[n].filter(o=>o===is).length||0,r=i?.placements?.find(o=>o.seat===n);if(!t)return'<div class="player-card empty-seat '+Nh[n]+'"><div class="avatar">+</div><div class="player-info"><h3>Seat for a friend</h3><p>'+Ls[n]+" is waiting</p>"+(e&&!i?'<button class="add-bot" data-bot="'+n+'">Add a bot</button>':"")+"</div></div>";let a=i?'<div class="player-score">'+Array.from({length:4},(o,l)=>'<i class="'+(l<s?"done":"")+'"></i>').join("")+"</div>":"";return'<div class="player-card '+Nh[n]+(i&&i.turn===n&&["roll","move","waiting"].includes(i.phase)?" active":"")+(r?" placed":"")+'"><span class="voice-indicator" data-voice-seat="'+n+'" hidden></span><div class="avatar">'+('<svg viewBox="-.6 -1.12 1.2 1.5" aria-hidden="true">'+ff(n)+"</svg>")+'</div><div class="player-info"><h3>'+As(t.name)+"<small>"+(n===Nn?"YOU":t.bot?"BOT":t.id===ut.owner?"HOST":"")+"</small></h3><p>"+(i?r?r.place===1?"\u{1F947} First place":"\u{1F948} Second place":i.active.includes(n)?s+" / 4 home \xB7 "+i.captures[n]+" captures":"Left the race":t.connected?"Ready for the race":"Reconnecting\u2026")+"</p>"+a+(e&&t.bot&&!i?'<button class="add-bot" data-bot="'+n+'">Remove bot</button>':"")+'</div><button class="seat-dice" data-seat-dice="'+n+'" aria-label="Roll for '+As(t.name)+'" disabled>'+["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"][(i?.lastRoll?.seat===n?i.lastRoll.value:1)-1]+"</button></div>"}).join(""),document.querySelectorAll("[data-seat-dice]").forEach(t=>{t.onclick=rc}),document.querySelectorAll("[data-bot]").forEach(t=>{t.onclick=()=>Yn({type:"bot",seat:Number(t.dataset.bot)})}),le("crew-count").textContent=ut.seats.filter(Boolean).length+" / 4",Cs.paintPlayers()}function zh(i){let e={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},t=e[i]||e[6];le("dice").querySelector(".pip-grid").innerHTML=Array.from({length:9},(n,s)=>'<i class="'+(t.includes(s)?"":"off")+'"></i>').join(""),le("dice").setAttribute("aria-label","Dice showing "+(i||6))}function H_(){le("welcome").hidden=!0,le("room-screen").hidden=!1,le("copy-code").innerHTML=As(ut.code)+" <small>\u25A3</small>",le("you-label").textContent="YOU ARE "+Ls[Nn]?.toUpperCase(),le("game-mode").textContent=ut.mode==="solo"?"BOT EXPEDITION":"JUNGLE EXPEDITION";let i=ut.game,e=ut.owner===Fa;if(le("room-title").textContent=i?"Your jungle adventure.":"Gather your explorers.",G_(),le("turn-controls").hidden=!i,le("lobby-controls").hidden=!!i,!i){le("lobby-controls").innerHTML='<div class="eyebrow">PULL UP A SEAT</div><h2 class="lobby-title">Gather your<br>expedition.</h2><p class="lobby-help">Share your room code or invite link. Everyone joins from their own device.</p><div class="lobby-illustration">\u{1F3B2}</div><div class="lobby-steps"><span>1</span>Invite up to three friends.</div><div class="lobby-steps"><span>2</span>Fill any empty seats with bots.</div>'+(e?'<button id="start-game" class="primary" '+(ut.seats.filter(Boolean).length<2?"disabled":"")+">Start the race <span>\u2192</span></button>":'<p class="lobby-wait">Waiting for the host to start the race.</p>'),le("start-game")&&(le("start-game").onclick=()=>Yn({type:"start"})),le("activity-log").innerHTML="<p>Your table is ready. Invite the crew!</p><p>At least two players are needed to start.</p>",le("winner-layer").hidden=!0,as();return}le("activity-log").innerHTML=i.messages.slice(0,5).map(r=>"<p>"+As(r)+"</p>").join("");let t=ut.seats[i.turn],n=i.turn===Nn;if(le("mobile-turn").textContent=n?"Your turn":(t?.name||"Player")+" is up",le("mobile-help").textContent=i.phase==="move"?n?"Choose a glowing token":"Waiting for a move":i.phase==="waiting"?"No legal move":n?"Ready for your next roll":"Waiting for the roll",le("mobile-roll").textContent=n?i.phase==="move"?"Pick token \u2191":"Roll \u2197":"Waiting\u2026",le("mobile-dice").textContent=i.lastRoll?.value||6,le("turn-tag").textContent=i.phase==="done"?"A CHAMPION IS HERE":n?"YOUR TURN":Ls[i.turn].toUpperCase()+"\u2019S TURN",le("turn-name").textContent=i.phase==="done"?"What a race!":n?"Let\u2019s roll, "+(t?.name||"friend")+".":(t?.name||"Player")+" is up.",le("turn-help").textContent=i.phase==="done"?"A rematch is always a good idea.":i.phase==="move"?n?"Choose a glowing token on the board.":"Waiting for a token move.":i.phase==="waiting"?"No legal move. Passing the dice\u2026":n?"Roll the dice. Make your next move.":"The dice belong to "+(t?.name||"Player")+".",le("roll").innerHTML=i.phase==="done"?"Race complete <span>\u2661</span>":i.phase==="move"?n?"Pick a glowing token <span>\u2197</span>":"Waiting for a move\u2026":n?"Roll the dice <span>\u2197</span>":"Waiting for the roll\u2026",i.lastRoll?(zh(i.lastRoll.value),le("last-roll").textContent=(ut.seats[i.lastRoll.seat]?.name||"Player")+" rolled a "+i.lastRoll.value+".",Ua!==null&&Ua!==i.lastRoll.id&&(ec=Date.now()+650,le("dice").classList.remove("rolling"),le("dice").offsetWidth,le("dice").classList.add("rolling"),document.querySelectorAll(".player-card.active .seat-dice").forEach(r=>r.classList.add("rolling")),Li.forEach(r=>{Number(r.dataset.seat)===i.lastRoll.seat&&(r.classList.add("reacting"),setTimeout(()=>r.classList.remove("reacting"),670))}),Is("roll"),setTimeout(()=>{le("dice").classList.remove("rolling"),ui(),as()},670)),Ua=i.lastRoll.id):(Ua=null,zh(6),le("last-roll").textContent="Your lucky streak starts here."),le("live-announcement").textContent=i.messages[0],i.phase==="celebration")le("turn-tag").textContent=i.celebration.final?"TWO WINNERS!":"FIRST PLACE!",le("turn-name").textContent=i.celebration.final?"The winners take the stage.":i.placements[0].name+" takes a bow!",le("turn-help").textContent=i.celebration.final?"20 seconds of victory dancing. The race is complete.":"A 15-second dance, then the race for second place continues.",le("mobile-turn").textContent=le("turn-tag").textContent,le("mobile-help").textContent="Enjoy the victory dance",le("mobile-roll").textContent="Dancing\u2026",le("roll").textContent="Victory dance\u2026",le("winner-layer").hidden=!1,le("winner-layer").classList.add("dance-banner"),le("winner-layer").classList.remove("waiting-flight"),le("winner-layer").innerHTML='<div class="winner-tag">'+(i.celebration.final?"\u{1F947} + \u{1F948} VICTORY PARTY":"\u{1F947} FIRST PLACE")+"</div><h2>"+(i.celebration.final?"Our jungle winners!":As(i.placements[0].name)+" wins!")+'</h2><p id="victory-quip"></p><p><span id="dance-countdown"></span> \xB7 '+(i.celebration.final?"Final celebration":"Second place up next")+"</p>",br!==i.celebration.startedAt&&(br=i.celebration.startedAt,sf(),Is("win"));else if(i.phase==="done"){let r=i.placements?.[0]?.name||ut.seats[i.winner]?.name||"Player";le("winner-layer").hidden=!1,le("winner-layer").classList.remove("dance-banner"),le("winner-layer").classList.toggle("waiting-flight",di||Oa.length>0);let a=(i.placements||[]).map(o=>"<li>"+(o.place===1?"\u{1F947} First":"\u{1F948} Second")+" \u2014 "+As(o.name)+"</li>").join("");le("winner-layer").innerHTML='<div class="winner-tag">JUNGLE CHAMPION</div><div class="trophy">\u{1F3C6}</div><h2>'+As(r)+' wins!</h2><ol class="standings">'+a+"</ol><p>Same crew, another race?</p>"+(e?'<button id="rematch" class="primary">One more game <span>\u2192</span></button>':"<p>Waiting for the host to start a rematch.</p>"),le("rematch")&&(le("rematch").onclick=()=>Yn({type:"rematch"})),br!==i.winner&&(br=i.winner,sf(),Is("win"))}else le("winner-layer").hidden=!0,br=null;ui(),as(),mf()}var nf=0;function mf(){if(Ps.update(performance.now()),!ut?.game)return;let i=ut.game;i.giftUntil&&nf!==i.giftUntil&&Date.now()+Rs>=i.giftUntil&&(nf=i.giftUntil,ui(),as());let e=Math.max(0,Math.ceil((i.deadline-Date.now()-Rs)/1e3));if(le("dance-countdown")&&(le("dance-countdown").textContent=e+"s"),i.phase==="celebration"&&le("victory-quip")){let n=Math.max(0,Date.now()+Rs-i.celebration.startedAt),s=[Uh.victory,"Oops\u2026 stuck the landing! \u{1F938}","Keep up, jungle crew! \u{1F609}","Victory looks good on us! \u2728"];le("victory-quip").textContent=s[Math.floor(n/3500)%s.length]}le("timer").textContent=i.phase==="done"?"":e+"s";let t=i.phase==="celebration"?(i.celebration.endsAt-i.celebration.startedAt)/1e3:45;le("timer-fill").style.width=(i.phase==="done"?0:Math.min(100,e/t*100))+"%"}setInterval(mf,250);function sf(){le("confetti").innerHTML="";for(let i=0;i<70;i++){let e=document.createElement("i");e.style.left=Math.random()*100+"%",e.style.background=ss[i%4],e.style.animationDelay=Math.random()*.65+"s",e.style.animationDuration=2+Math.random()*1.5+"s",le("confetti").append(e)}setTimeout(()=>{le("confetti").innerHTML=""},4500)}as();zh(6);var Ps=$d({board:le("board"),tokenNodes:Li,reduced:Es,getRoom:()=>ut}),os=Hd({board:le("board"),tokenNodes:Li,comedy:Ps,getRoom:()=>ut,getSeat:()=>Nn,getServerTime:()=>Date.now()+Rs,colors:ss,track:Na,lanes:Zl,yards:Jl,safe:Sr});cf();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
