var fu=0,Bc=1,pu=2;var ms=1,mu=2,cr=3,Hi=0,pn=1,Jt=2,si=0,hr=1,kc=2,zc=3,Vc=4,gu=5;var gs=100,xu=101,_u=102,yu=103,vu=104,Mu=200,Su=201,bu=202,wu=203,Gc=204,Hc=205,Tu=206,Au=207,Eu=208,Cu=209,Ru=210,Iu=211,Pu=212,Lu=213,Du=214,co=0,ho=1,uo=2,Zs=3,fo=4,po=5,mo=6,go=7,Wc=0,Uu=1,Nu=2,Xn=0,Xc=1,qc=2,Yc=3,ma=4,Zc=5,Jc=6,$c=7;var Kc=300,Wi=301,xs=302,Xo=303,qo=304,ga=306,Js=1e3,Kn=1001,xo=1002,Yt=1003,Fu=1004;var xa=1005;var Qt=1006,Yo=1007;var Xi=1008;var vn=1009,Qc=1010,jc=1011,ur=1012,Zo=1013,qn=1014,Pn=1015,Yn=1016,Jo=1017,$o=1018,dr=1020,eh=35902,th=35899,nh=1021,ih=1022,Ln=1023,jn=1026,qi=1027,Ko=1028,Qo=1029,Yi=1030,jo=1031;var el=1033,_a=33776,ya=33777,va=33778,Ma=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,Sa=37490,hl=37491,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,Ml=37818,Sl=37819,bl=37820,wl=37821,Tl=36492,Al=36494,El=36495,Cl=36283,Rl=36284,ba=36285,Il=36286;var Or=2300,_o=2301,oo=2302,Ec=2303,Cc=2400,Rc=2401,Ic=2402;var Ou=3200;var Pl=0,Bu=1,Ti="",qt="srgb",Br="srgb-linear",kr="linear",Tt="srgb";var lo=7680;var ku=519,zu=512,Vu=513,Gu=514,Ll=515,Hu=516,Wu=517,Dl=518,Xu=519,Ul=35044,Zi=35048;var sh="300 es",Hn=2e3,$s=2001;function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qu(){let i=zr("canvas");return i.style.display="block",i}var Nh={},Ks=null;function rh(...i){let e="THREE."+i.shift();Ks?Ks("log",e,...i):console.log(e,...i)}function Yu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function tt(...i){i=Yu(i);let e="THREE."+i.shift();if(Ks)Ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=Yu(i);let e="THREE."+i.shift();if(Ks)Ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hs(...i){let e=i.join(" ");e in Nh||(Nh[e]=!0,tt(...i))}function Zu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ju={[co]:ho,[uo]:mo,[fo]:go,[Zs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:Zs},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,Dr=Math.PI/180,Qs=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function ah(i,e){return(i%e+e)%e}function cf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function uf(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function df(i,e=1){return e-Math.abs(ah(i,e*2)-e)}function ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gf(i,e){return i+Math.random()*(e-i)}function xf(i){return i*(.5-Math.random())}function _f(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yf(i){return i*Dr}function vf(i){return i*Qs}function Mf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*h,o*c);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ai={DEG2RAD:Dr,RAD2DEG:Qs,generateUUID:_s,clamp:mt,euclideanModulo:ah,mapLinear:cf,inverseLerp:hf,lerp:Ur,damp:uf,pingpong:df,smoothstep:ff,smootherstep:pf,randInt:mf,randFloat:gf,randFloatSpread:xf,seededRandom:_f,degToRad:yf,radToDeg:vf,isPowerOfTwo:Mf,ceilPowerOfTwo:Sf,floorPowerOfTwo:bf,setQuaternionFromProperEuler:wf,normalize:hn,denormalize:qs},Ae=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ti=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*v;g<0&&(u=-u,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new D,Oh=new ti,rt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],b=s[4],y=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*v+o*M+l*A,r[3]=a*g+o*b+l*E,r[6]=a*p+o*y+l*w,r[1]=c*v+h*M+f*A,r[4]=c*g+h*b+f*E,r[7]=c*p+h*y+f*w,r[2]=u*v+d*M+m*A,r[5]=u*g+d*b+m*E,r[8]=u*p+d*y+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ic=new rt,Bh=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tf(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var _t=Tf();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ls,yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=zr("canvas")),Ls.width=e.width,Ls.height=e.height;let s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Af=0,js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sc(s[a].image)):r.push(sc(s[a]))}else r=sc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var Ef=0,rc=new D,dn=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=Qt,a=Xi,o=Ln,l=vn,c=i.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=_s(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Kc;dn.DEFAULT_ANISOTROPY=1;var It=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(d+1)/2,A=(p+1)/2,E=(h+u)/4,w=(f+v)/4,x=(m+g)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=w/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u+v*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Rf)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ii.crossVectors(n,Mn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ii.crossVectors(n,Mn)),Ii.normalize(),Oa.crossVectors(Mn,Ii),s[0]=Ii.x,s[4]=Oa.x,s[8]=Mn.x,s[1]=Ii.y,s[5]=Oa.y,s[9]=Mn.y,s[2]=Ii.z,s[6]=Oa.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],b=n[7],y=n[11],A=n[15],E=s[0],w=s[4],x=s[8],T=s[12],I=s[1],F=s[5],z=s[9],q=s[13],B=s[2],Z=s[6],te=s[10],ie=s[14],xe=s[3],se=s[7],ae=s[11],de=s[15];return r[0]=a*E+o*I+l*B+c*xe,r[4]=a*w+o*F+l*Z+c*se,r[8]=a*x+o*z+l*te+c*ae,r[12]=a*T+o*q+l*ie+c*de,r[1]=h*E+f*I+u*B+d*xe,r[5]=h*w+f*F+u*Z+d*se,r[9]=h*x+f*z+u*te+d*ae,r[13]=h*T+f*q+u*ie+d*de,r[2]=m*E+v*I+g*B+p*xe,r[6]=m*w+v*F+g*Z+p*se,r[10]=m*x+v*z+g*te+p*ae,r[14]=m*T+v*q+g*ie+p*de,r[3]=M*E+b*I+y*B+A*xe,r[7]=M*w+b*F+y*Z+A*se,r[11]=M*x+b*z+y*te+A*ae,r[15]=M*T+b*q+y*ie+A*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15],M=l*d-c*u,b=o*d-c*f,y=o*u-l*f,A=a*d-c*h,E=a*u-l*h,w=a*f-o*h;return t*(v*M-g*b+p*y)-n*(m*M-g*A+p*E)+s*(m*b-v*A+p*w)-r*(m*y-v*E+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=t*o-n*a,b=t*l-s*a,y=t*c-r*a,A=n*l-s*o,E=n*c-r*o,w=s*c-r*l,x=h*v-f*m,T=h*g-u*m,I=h*p-d*m,F=f*g-u*v,z=f*p-d*v,q=u*p-d*g,B=M*q-b*z+y*F+A*I-E*T+w*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/B;return e[0]=(o*q-l*z+c*F)*Z,e[1]=(s*z-n*q-r*F)*Z,e[2]=(v*w-g*E+p*A)*Z,e[3]=(u*E-f*w-d*A)*Z,e[4]=(l*I-a*q-c*T)*Z,e[5]=(t*q-s*I+r*T)*Z,e[6]=(g*y-m*w-p*b)*Z,e[7]=(h*w-u*y+d*b)*Z,e[8]=(a*z-o*I+c*x)*Z,e[9]=(n*I-t*z-r*x)*Z,e[10]=(m*E-v*y+p*M)*Z,e[11]=(f*y-h*E-d*M)*Z,e[12]=(o*T-a*F-l*x)*Z,e[13]=(t*F-n*T+s*x)*Z,e[14]=(v*b-m*A-g*M)*Z,e[15]=(h*A-f*b+u*M)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,v=a*h,g=a*f,p=o*f,M=l*c,b=l*h,y=l*f,A=n.x,E=n.y,w=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+y)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+b)*w,s[9]=(g-M)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(s[0],s[1],s[2]).length(),o=Ds.set(s[4],s[5],s[6]).length(),l=Ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,h=1/o,f=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,t.setFromRotationMatrix(kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===Hn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===$s)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===Hn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===$s)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new D,kn=new wt,Cf=new D(0,0,0),Rf=new D(1,1,1),Ii=new D,Oa=new D,Mn=new D,zh=new wt,Vh=new ti,yi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},If=0,Gh=new D,Us=new ti,fi=new wt,Ba=new D,Tr=new D,Pf=new D,Lf=new ti,Hh=new D(1,0,0),Wh=new D(0,1,0),Xh=new D(0,0,1),qh={type:"added"},Df={type:"removed"},Ns={type:"childadded",child:null},ac={type:"childremoved",child:null},Ot=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new yi,n=new ti,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new rt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Tr,Ba,this.up):fi.lookAt(Ba,Tr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(fi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Df),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var At=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uf={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=ah(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oc(a,r,e+1/3),this.g=oc(a,r,e),this.b=oc(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return _t.workingToColorSpace(tn.copy(this),e),Math.round(mt(tn.r*255,0,255))*65536+Math.round(mt(tn.g*255,0,255))*256+Math.round(mt(tn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=qt){_t.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(ka);let n=Ur(Pi.h,ka.h,t),s=Ur(Pi.s,ka.s,t),r=Ur(Pi.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new lt;lt.NAMES=$u;var Hr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new lt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new D,pi=new D,lc=new D,mi=new D,Fs=new D,Os=new D,Yh=new D,cc=new D,hc=new D,uc=new D,dc=new It,fc=new It,pc=new It,Ni=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),pi.subVectors(n,t),lc.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(pi),l=zn.dot(lc),c=pi.dot(pi),h=pi.dot(lc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dc,r.x),a.addScaledVector(fc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),pi.subVectors(e,t),zn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Fs.subVectors(s,n),Os.subVectors(r,n),cc.subVectors(e,n);let l=Fs.dot(cc),c=Os.dot(cc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,s);let h=Fs.dot(hc),f=Os.dot(hc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Fs,a);uc.subVectors(e,r);let d=Fs.dot(uc),m=Os.dot(uc);if(m>=0&&d<=m)return t.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Os,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Yh.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(Yh,o);let p=1/(g+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Fs,a).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ni=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Va.subVectors(this.max,Ar),Bs.subVectors(e.a,Ar),ks.subVectors(e.b,Ar),zs.subVectors(e.c,Ar),Li.subVectors(ks,Bs),Di.subVectors(zs,ks),as.subVectors(Bs,zs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-as.z,as.y,Li.z,0,-Li.x,Di.z,0,-Di.x,as.z,0,-as.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-as.y,as.x,0];return!mc(t,Bs,ks,zs,Va)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Bs,ks,zs,Va))?!1:(Ga.crossVectors(Li,Di),t=[Ga.x,Ga.y,Ga.z],mc(t,Bs,ks,zs,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Vn=new D,za=new ni,Bs=new D,ks=new D,zs=new D,Li=new D,Di=new D,as=new D,Ar=new D,Va=new D,Ga=new D,os=new D;function mc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kt=new D,Ha=new Ae,Nf=0,Kt=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Xr=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ff=new ni,Er=new D,gc=new D,vi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(gc)),this.expandByPoint(Er.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Of=0,Cn=new wt,xc=new Ot,Vs=new D,Sn=new ni,Cr=new ni,Xt=new D,Ut=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?qr:Xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Sn.min,Cr.min),Sn.expandByPoint(Xt),Xt.addVectors(Sn.max,Cr.max),Sn.expandByPoint(Xt)):(Sn.expandByPoint(Cr.min),Sn.expandByPoint(Cr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Xt.add(Vs)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,h=new D,f=new D,u=new Ae,d=new Ae,m=new Ae,v=new D,g=new D;function p(x,T,I){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,I),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let F=1/(d.x*m.y-m.x*d.y);isFinite(F)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(F),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(F),o[x].add(v),o[T].add(v),o[I].add(v),l[x].add(g),l[T].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let I=M[x],F=I.start,z=I.count;for(let q=F,B=F+z;q<B;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let b=new D,y=new D,A=new D,E=new D;function w(x){A.fromBufferAttribute(s,x),E.copy(A);let T=o[x];b.copy(T),b.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(E,T);let F=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,F)}for(let x=0,T=M.length;x<T;++x){let I=M[x],F=I.start,z=I.count;for(let q=F,B=F+z;q<B;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Kt(u,h,f)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _c=new D,Bf=new D,kf=new rt,Gn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_c.subVectors(n,t).cross(Bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(_c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kf.getNormalMatrix(e),s=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zf=0,Mi=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=hr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xi=new D,yc=new D,Wa=new D,Xa=new D,Yr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yc.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xa.copy(this.origin).sub(yc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wa),o=Xa.dot(this.direction),l=-Xa.dot(Wa),c=Xa.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yc).addScaledVector(Wa,u),d}intersectSphere(e,t){if(e.radius<0)return null;xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,b=n.z-a.z,y=Math.abs(l),A=Math.abs(c),E=Math.abs(h),w,x,T,I,F,z,q,B,Z,te,ie,xe;if(y>=A&&y>=E?(T=l,z=f,Z=m,xe=p,l>=0?(w=c,x=h,I=u,F=d,q=v,B=g,te=M,ie=b):(w=h,x=c,I=d,F=u,q=g,B=v,te=b,ie=M)):A>=E?(T=c,z=u,Z=v,xe=M,c>=0?(w=h,x=l,I=d,F=f,q=g,B=m,te=b,ie=p):(w=l,x=h,I=f,F=d,q=m,B=g,te=p,ie=b)):(T=h,z=d,Z=g,xe=b,h>=0?(w=l,x=c,I=f,F=u,q=m,B=v,te=p,ie=M):(w=c,x=l,I=u,F=f,q=v,B=m,te=M,ie=p)),T===0)return null;let se=w/T,ae=x/T,de=1/T,Ge=I-se*z,R=F-ae*z,W=q-se*Z,j=B-ae*Z,me=te-se*xe,U=ie-ae*xe,H=me*j-U*W,X=Ge*U-R*me,pe=W*R-j*Ge;if(s){if(H<0||X<0||pe<0)return null}else if((H<0||X<0||pe<0)&&(H>0||X>0||pe>0))return null;let ve=H+X+pe;if(ve===0)return null;let De=de*(H*z+X*Z+pe*xe);return(ve>0?De<0:De>0)?null:this.at(De/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zh=new wt,ls=new Yr,qa=new vi,Jh=new D,Ya=new D,Za=new D,Ja=new D,vc=new D,$a=new D,$h=new D,Ka=new D,Zt=class extends Ot{constructor(e=new Ut,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(vc.fromBufferAttribute(f,e),a?$a.addScaledVector(vc,h):$a.addScaledVector(vc.sub(t),h))}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(qa.containsPoint(ls.origin)===!1&&(ls.intersectSphere(qa,Jh)===null||ls.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,A=b;y<A;y+=3){let E=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=Qa(this,p,e,n,c,h,f,E,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let M=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Qa(this,a,e,n,c,h,f,M,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,A=b;y<A;y+=3){let E=y,w=y+1,x=y+2;s=Qa(this,p,e,n,c,h,f,E,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let M=g,b=g+1,y=g+2;s=Qa(this,a,e,n,c,h,f,M,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Vf(i,e,t,n,s,r,a,o){let l;if(e.side===pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Hi,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:i}}function Qa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ya),i.getVertexPosition(l,Za),i.getVertexPosition(c,Ja);let h=Vf(i,e,t,n,Ya,Za,Ja,$h);if(h){let f=new D;Ni.getBarycoord($h,Ya,Za,Ja,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,o,l,c,f,new Ae)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,o,l,c,f,new Ae)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Ni.getNormal(Ya,Za,Ja,u.normal),h.face=u,h.barycoord=f}return h}var Zr=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,h=Yt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new wt,Kh=new wt,ja=[],Qh=new ni,Gf=new wt,Rr=new Zt,Ir=new vi,Wn=class extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Qh.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ir.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Kh.multiplyMatrices(n,Gs),Rr.matrixWorld=Kh,Rr.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=r,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(s*this.count),s,this.count,Ko,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new vi,Hf=new Ae(.5,.5),eo=new D,nr=class{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,p-m,A-M).normalize(),s[1].setComponents(c+a,d+h,p+m,A+M).normalize(),s[2].setComponents(c+o,d+f,p+v,A+b).normalize(),s[3].setComponents(c-o,d-f,p-v,A-b).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,p-g,A-y).normalize();else if(s[4].setComponents(c-l,d-u,p-g,A-y).normalize(),t===Hn)s[5].setComponents(c+l,d+u,p+g,A+y).normalize();else if(t===$s)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=Hf.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ir=class extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new D,bo=new D,jh=new wt,Pr=new Yr,to=new vi,Mc=new D,eu=new D,Jr=class extends Ot{constructor(e=new Ut,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)So.fromBufferAttribute(t,s-1),bo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=So.distanceTo(bo);e.setAttribute("lineDistance",new gt(n,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;jh.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){let p=h.getX(v),M=h.getX(v+1),b=no(this,e,Pr,l,p,M,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(d),p=no(this,e,Pr,l,v,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){let p=no(this,e,Pr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=no(this,e,Pr,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function no(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(So.fromBufferAttribute(o,s),bo.fromBufferAttribute(o,r),t.distanceSqToSegment(So,bo,Mc,eu)>n)return;Mc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mc);if(!(c<e.near||c>e.far))return{distance:c,point:eu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $r=class extends dn{constructor(e=[],t=Wi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},us=class extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends dn{constructor(e,t,n=qn,s,r,a,o=Yt,l=Yt,c,h=jn,f=1){if(h!==jn&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends Fi{constructor(e,t=qn,n=Wi,s,r,a=Yt,o=Yt,l,c=jn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kr=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function m(v,g,p,M,b,y,A,E,w,x,T){let I=y/w,F=A/x,z=y/2,q=A/2,B=E/2,Z=w+1,te=x+1,ie=0,xe=0,se=new D;for(let ae=0;ae<te;ae++){let de=ae*F-q;for(let Ge=0;Ge<Z;Ge++){let R=Ge*I-z;se[v]=R*M,se[g]=de*b,se[p]=B,c.push(se.x,se.y,se.z),se[v]=0,se[g]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),f.push(Ge/w),f.push(1-ae/x),ie+=1}}for(let ae=0;ae<x;ae++)for(let de=0;de<w;de++){let Ge=u+de+Z*ae,R=u+de+Z*(ae+1),W=u+(de+1)+Z*(ae+1),j=u+(de+1)+Z*ae;l.push(Ge,R,j),l.push(R,W,j),xe+=6}o.addGroup(d,xe,T),d+=xe,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Qr=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rn=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,v=[],g=n/2,p=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function M(){let y=new D,A=new D,E=0,w=(t-e)/n;for(let x=0;x<=r;x++){let T=[],I=x/r,F=I*(t-e)+e;for(let z=0;z<=s;z++){let q=z/s,B=q*l+o,Z=Math.sin(B),te=Math.cos(B);A.x=F*Z,A.y=-I*n+g,A.z=F*te,f.push(A.x,A.y,A.z),y.set(Z,w,te).normalize(),u.push(y.x,y.y,y.z),d.push(q,1-I),T.push(m++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let I=v[T][x],F=v[T+1][x],z=v[T+1][x+1],q=v[T][x+1];(e>0||T!==0)&&(h.push(I,F,q),E+=3),(t>0||T!==r-1)&&(h.push(F,z,q),E+=3)}c.addGroup(p,E,0),p+=E}function b(y){let A=m,E=new Ae,w=new D,x=0,T=y===!0?e:t,I=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*I,0),u.push(0,I,0),d.push(.5,.5),m++;let F=m;for(let z=0;z<=s;z++){let B=z/s*l+o,Z=Math.cos(B),te=Math.sin(B);w.x=T*te,w.y=g*I,w.z=T*Z,f.push(w.x,w.y,w.z),u.push(0,I,0),E.x=Z*.5+.5,E.y=te*.5*I+.5,d.push(E.x,E.y),m++}for(let z=0;z<s;z++){let q=A+z,B=F+z;y===!0?h.push(B,B+1,q):h.push(B+1,B,q),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ii=class i extends Rn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new D,y=new D,A=new D;for(let E=0;E<t.length;E+=3)d(t[E+0],b),d(t[E+1],y),d(t[E+2],A),l(b,y,A,M)}function l(M,b,y,A){let E=A+1,w=[];for(let x=0;x<=E;x++){w[x]=[];let T=M.clone().lerp(y,x/E),I=b.clone().lerp(y,x/E),F=E-x;for(let z=0;z<=F;z++)z===0&&x===E?w[x][z]=T:w[x][z]=T.clone().lerp(I,z/F)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){let I=Math.floor(T/2);T%2===0?(u(w[x][I+1]),u(w[x+1][I]),u(w[x][I])):(u(w[x][I+1]),u(w[x+1][I+1]),u(w[x+1][I]))}}function c(M){let b=new D;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(M),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let M=new D;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let y=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(y,1-A)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){let b=a[M+0],y=a[M+2],A=a[M+4],E=Math.max(b,y,A),w=Math.min(b,y,A);E>.9&&w<.1&&(b<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,b){let y=M*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function m(){let M=new D,b=new D,y=new D,A=new D,E=new Ae,w=new Ae,x=new Ae;for(let T=0,I=0;T<r.length;T+=9,I+=6){M.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),E.set(a[I+0],a[I+1]),w.set(a[I+2],a[I+3]),x.set(a[I+4],a[I+5]),A.copy(M).add(b).add(y).divideScalar(3);let F=g(A);v(E,I+0,M,F),v(w,I+2,b,F),v(x,I+4,y,F)}}function v(M,b,y,A){A<0&&M.x===1&&(a[b]=M.x-1),y.x===0&&y.z===0&&(a[b]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ae:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new wt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(mt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(mt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},To=class extends sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var tu=new D,nu=new D,Sc=new oh,bc=new oh,wc=new oh,rr=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(nu.subVectors(s[0],s[1]).add(s[0]),c=nu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(tu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Sc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,g),bc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,g),wc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),bc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),wc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Sc.calc(l),bc.calc(l),wc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function iu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Wf(i,e){let t=1-i;return t*t*e}function Xf(i,e){return 2*(1-i)*i*e}function qf(i,e){return i*i*e}function Nr(i,e,t,n){return Wf(i,e)+Xf(i,t)+qf(i,n)}function Yf(i,e){let t=1-i;return t*t*t*e}function Zf(i,e){let t=1-i;return 3*t*t*i*e}function Jf(i,e){return 3*(1-i)*i*i*e}function $f(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return Yf(i,e)+Zf(i,t)+Jf(i,n)+$f(i,s)}var ea=class extends bn{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ao=class extends bn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y),Fr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends bn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends bn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends bn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(e,s.x,r.x,a.x),Nr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Si=class extends bn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(e,s.x,r.x,a.x),Nr(e,s.y,r.y,a.y),Nr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(iu(o,l.x,c.x,h.x,f.x),iu(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},Co=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:rr,CubicBezierCurve:ea,CubicBezierCurve3:Ao,EllipseCurve:sr,LineCurve:ta,LineCurve3:Eo,QuadraticBezierCurve:na,QuadraticBezierCurve3:Si,SplineCurve:ia}),Ro=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Co[s.type]().fromJSON(s))}return this}},sa=class extends Ro{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ta(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new na(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ea(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new sr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yn=class extends sa{constructor(e){super(e),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new sa().fromJSON(s))}return this}};function Kf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ku(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=np(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return ra(r,a,t,o,l,c,0),a}function Ku(i,e,t,n,s){let r;if(s===fp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=su(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=su(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(oa(r),r=r.next),r}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||Dt(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ra(i,e,t,n,s,r,a){if(!i)return;!a&&r&&op(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?jf(i,n,s,r):Qf(i)){e.push(l.i,i.i,c.i),oa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ep(ds(i),e),ra(i,e,t,n,s,r,2)):a===2&&tp(i,e,t,n,s,r):ra(ds(i),e,t,n,s,r,1);break}}}function Qf(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Lr(s,o,r,l,a,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),v=Math.max(o,l,c),g=Math.max(h,f,u),p=Pc(d,m,e,t,n),M=Pc(v,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=M;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Lr(o,h,l,f,c,u,b.x,b.y)&&Dt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Lr(o,h,l,f,c,u,y.x,y.y)&&Dt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Lr(o,h,l,f,c,u,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Lr(o,h,l,f,c,u,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ep(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&ju(n,t,t.next,s)&&aa(n,s)&&aa(s,n)&&(e.push(n.i,t.i,s.i),oa(t),oa(t.next),t=i=s),t=t.next}while(t!==i);return ds(t)}function tp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hp(a,o)){let l=ed(a,o);a=ds(a,a.next),l=ds(l,l.next),ra(a,e,t,n,s,r,0),ra(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function np(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ku(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(cp(c))}s.sort(ip);for(let r=0;r<s.length;r++)t=sp(s[r],t);return t}function ip(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function sp(i,e){let t=rp(i,e);if(!t)return e;let n=ed(t,i);return ds(n,n.next),ds(t,t.next)}function rp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);aa(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&ap(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function ap(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function op(i,e,t,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lp(s)}function lp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Pc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Lr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Qu(i,e,t,n,s,r,a,o)}function hp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!up(i,e)&&(aa(i,e)&&aa(e,i)&&dp(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ar(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function ju(i,e,t,n){let s=so(Dt(i,e,t)),r=so(Dt(i,e,n)),a=so(Dt(t,n,i)),o=so(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&io(i,t,e)||r===0&&io(i,n,e)||a===0&&io(t,i,n)||o===0&&io(t,e,n))}function io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function up(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ju(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function aa(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function dp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ed(i,e){let t=Lc(i.i,i.x,i.y),n=Lc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function su(i,e,t,n){let s=Lc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Dc=class{static triangulate(e,t,n=2){return Kf(e,t,n)}},Qn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ru(e),au(n,e);let a=e.length;t.forEach(ru);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,au(n,t[l]);let o=Dc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ru(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function au(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var bi=class i extends Ut{constructor(e=new yn([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:pp,b,y=!1,A,E,w,x;if(p){b=p.getSpacedPoints(h),y=!0,u=!1;let he=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,he),E=new D,w=new D,x=new D}u||(g=0,d=0,m=0,v=0);let T=o.extractPoints(c),I=T.shape,F=T.holes;if(!Qn.isClockWise(I)){I=I.reverse();for(let he=0,ge=F.length;he<ge;he++){let Me=F[he];Qn.isClockWise(Me)&&(F[he]=Me.reverse())}}function q(he){let Me=10000000000000001e-36,Se=he[0];for(let be=1;be<=he.length;be++){let $e=be%he.length,ke=he[$e],Ke=ke.x-Se.x,it=ke.y-Se.y,O=Ke*Ke+it*it,Mt=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(Se.x),Math.abs(Se.y)),ut=Me*Mt*Mt;if(O<=ut){he.splice($e,1),be--;continue}Se=ke}}q(I),F.forEach(q);let B=F.length,Z=I;for(let he=0;he<B;he++){let ge=F[he];I=I.concat(ge)}function te(he,ge,Me){return ge||nt("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(ge,Me)}let ie=I.length;function xe(he,ge,Me){let Se,be,$e,ke=he.x-ge.x,Ke=he.y-ge.y,it=Me.x-he.x,O=Me.y-he.y,Mt=ke*ke+Ke*Ke,ut=ke*O-Ke*it;if(Math.abs(ut)>Number.EPSILON){let C=Math.sqrt(Mt),_=Math.sqrt(it*it+O*O),Y=ge.x-Ke/C,ee=ge.y+ke/C,re=Me.x-O/_,we=Me.y+it/_,Ee=((re-Y)*O-(we-ee)*it)/(ke*O-Ke*it);Se=Y+ke*Ee-he.x,be=ee+Ke*Ee-he.y;let oe=Se*Se+be*be;if(oe<=2)return new Ae(Se,be);$e=Math.sqrt(oe/2)}else{let C=!1;ke>Number.EPSILON?it>Number.EPSILON&&(C=!0):ke<-Number.EPSILON?it<-Number.EPSILON&&(C=!0):Math.sign(Ke)===Math.sign(O)&&(C=!0),C?(Se=-Ke,be=ke,$e=Math.sqrt(Mt)):(Se=ke,be=Ke,$e=Math.sqrt(Mt/2))}return new Ae(Se/$e,be/$e)}let se=[];for(let he=0,ge=Z.length,Me=ge-1,Se=he+1;he<ge;he++,Me++,Se++)Me===ge&&(Me=0),Se===ge&&(Se=0),se[he]=xe(Z[he],Z[Me],Z[Se]);let ae=[],de,Ge=se.concat();for(let he=0,ge=B;he<ge;he++){let Me=F[he];de=[];for(let Se=0,be=Me.length,$e=be-1,ke=Se+1;Se<be;Se++,$e++,ke++)$e===be&&($e=0),ke===be&&(ke=0),de[Se]=xe(Me[Se],Me[$e],Me[ke]);ae.push(de),Ge=Ge.concat(de)}let R;if(g===0)R=Qn.triangulateShape(Z,F);else{let he=[],ge=[];for(let Me=0;Me<g;Me++){let Se=Me/g,be=d*Math.cos(Se*Math.PI/2),$e=m*Math.sin(Se*Math.PI/2)+v;for(let ke=0,Ke=Z.length;ke<Ke;ke++){let it=te(Z[ke],se[ke],$e);X(it.x,it.y,-be),Se===0&&he.push(it)}for(let ke=0,Ke=B;ke<Ke;ke++){let it=F[ke];de=ae[ke];let O=[];for(let Mt=0,ut=it.length;Mt<ut;Mt++){let C=te(it[Mt],de[Mt],$e);X(C.x,C.y,-be),Se===0&&O.push(C)}Se===0&&ge.push(O)}}R=Qn.triangulateShape(he,ge)}let W=R.length,j=m+v;for(let he=0;he<ie;he++){let ge=u?te(I[he],Ge[he],j):I[he];y?(w.copy(A.normals[0]).multiplyScalar(ge.x),E.copy(A.binormals[0]).multiplyScalar(ge.y),x.copy(b[0]).add(w).add(E),X(x.x,x.y,x.z)):X(ge.x,ge.y,0)}for(let he=1;he<=h;he++)for(let ge=0;ge<ie;ge++){let Me=u?te(I[ge],Ge[ge],j):I[ge];y?(w.copy(A.normals[he]).multiplyScalar(Me.x),E.copy(A.binormals[he]).multiplyScalar(Me.y),x.copy(b[he]).add(w).add(E),X(x.x,x.y,x.z)):X(Me.x,Me.y,f/h*he)}for(let he=g-1;he>=0;he--){let ge=he/g,Me=d*Math.cos(ge*Math.PI/2),Se=m*Math.sin(ge*Math.PI/2)+v;for(let be=0,$e=Z.length;be<$e;be++){let ke=te(Z[be],se[be],Se);X(ke.x,ke.y,f+Me)}for(let be=0,$e=F.length;be<$e;be++){let ke=F[be];de=ae[be];for(let Ke=0,it=ke.length;Ke<it;Ke++){let O=te(ke[Ke],de[Ke],Se);y?X(O.x,O.y+b[h-1].y,b[h-1].x+Me):X(O.x,O.y,f+Me)}}}me(),U();function me(){let he=s.length/3;if(u){let ge=0,Me=ie*ge;for(let Se=0;Se<W;Se++){let be=R[Se];pe(be[2]+Me,be[1]+Me,be[0]+Me)}ge=h+g*2,Me=ie*ge;for(let Se=0;Se<W;Se++){let be=R[Se];pe(be[0]+Me,be[1]+Me,be[2]+Me)}}else{for(let ge=0;ge<W;ge++){let Me=R[ge];pe(Me[2],Me[1],Me[0])}for(let ge=0;ge<W;ge++){let Me=R[ge];pe(Me[0]+ie*h,Me[1]+ie*h,Me[2]+ie*h)}}n.addGroup(he,s.length/3-he,0)}function U(){let he=s.length/3,ge=0;H(Z,ge),ge+=Z.length;for(let Me=0,Se=F.length;Me<Se;Me++){let be=F[Me];H(be,ge),ge+=be.length}n.addGroup(he,s.length/3-he,1)}function H(he,ge){let Me=he.length;for(;--Me>=0;){let Se=Me,be=Me-1;be<0&&(be=he.length-1);for(let $e=0,ke=h+g*2;$e<ke;$e++){let Ke=ie*$e,it=ie*($e+1),O=ge+Se+Ke,Mt=ge+be+Ke,ut=ge+be+it,C=ge+Se+it;ve(O,Mt,ut,C)}}}function X(he,ge,Me){l.push(he),l.push(ge),l.push(Me)}function pe(he,ge,Me){De(he),De(ge),De(Me);let Se=s.length/3,be=M.generateTopUV(n,s,Se-3,Se-2,Se-1);je(be[0]),je(be[1]),je(be[2])}function ve(he,ge,Me,Se){De(he),De(ge),De(Se),De(ge),De(Me),De(Se);let be=s.length/3,$e=M.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);je($e[0]),je($e[1]),je($e[3]),je($e[1]),je($e[2]),je($e[3])}function De(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function je(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Co[s.type]().fromJSON(s)),new i(n,e.options)}},pp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ae(r,a),new Ae(o,l),new Ae(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ae(a,1-l),new Ae(c,1-f),new Ae(u,1-m),new Ae(v,1-p)]:[new Ae(o,1-l),new Ae(h,1-f),new Ae(d,1-m),new Ae(g,1-p)]}};function mp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var la=class i extends jr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ca=class i extends jr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},In=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let b=0;b<c;b++){let y=b*f-r;m.push(y,-M,0),v.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let b=M+c*p,y=M+c*(p+1),A=M+1+c*(p+1),E=M+1+c*p;d.push(b,y,E),d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fs=class i extends Ut{constructor(e=new yn([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,m=u.holes;Qn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];Qn.isClockWise(M)===!0&&(m[g]=M.reverse())}let v=Qn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],b=M[0]+f,y=M[1]+f,A=M[2]+f;n.push(b,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return gp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function gp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var wn=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],b=p/n,y=a+b*o,A=e*Math.cos(y),E=Math.sqrt(e*e-A*A),w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let T=x/t,I=s+T*r;f.x=-E*Math.cos(I),f.y=A,f.z=E*Math.sin(I),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(T+w,1-b),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let b=h[p][M+1],y=h[p][M],A=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&d.push(b,y,E),(p!==n-1||l<Math.PI)&&d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wi=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,d=new D,m=new D;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(M),d.y=(e+t*Math.cos(g))*Math.sin(M),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,M=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(p,M,y),l.push(M,b,y)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Bi=class i extends Ut{constructor(e=new Si(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new Ae,h=new D,f=[],u=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function v(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),M(),p()}function g(b){h=e.getPointAt(b/t,h);let y=a.normals[b],A=a.binormals[b];for(let E=0;E<=s;E++){let w=E/s*Math.PI*2,x=Math.sin(w),T=-Math.cos(w);l.x=T*y.x+x*A.x,l.y=T*y.y+x*A.y,l.z=T*y.z+x*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let A=(s+1)*(b-1)+(y-1),E=(s+1)*b+(y-1),w=(s+1)*b+y,x=(s+1)*(b-1)+y;m.push(A,E,x),m.push(E,w,x)}}function M(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Co[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ou(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ou(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=ys(i[t]);for(let s in n)e[s]=n[s]}return e}function ou(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var td={clone:ys,merge:sn},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Io=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ps=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Po=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lo=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Do=class extends ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rc:r=e,o=2*t-n;break;case Ic:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:a=e,l=2*n-t;break;case Ic:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,M=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,b=(-1-d)*g+(1.5+d)*v+.5*m,y=d*g-d*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+M*a[c+A]+b*a[l+A]+y*a[f+A];return r}},Uo=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},No=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fo=class extends ki{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-t)/(s-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let v=a[c+m],g=a[l+m],p=d*u+m*2,M=f[p],b=f[p+1],y=e*u+m*2,A=h[y],E=h[y+1],w=Mp(n,t,M,A,s);r[m]=nd(w,v,b,E,g)}return r}};function nd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function vp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Mp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=nd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=vp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Tc(e.settings)&&(n.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case oo:t=this.InterpolantFactoryMethodSmooth;break;case Ec:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Tc(this.settings)&&(lu(this.settings.inTangents,e),lu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){nt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let v=t[f+m];if(v!==t[u+m]||v!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=_o;var zi=class extends Tn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Or;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Oo.prototype.ValueTypeName="color";var Bo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Bo.prototype.ValueTypeName="number";var ko=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},ha=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Or;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};zo.prototype.ValueTypeName="vector";var Vo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new Vo,Go=class{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ua=class extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ac=new wt,cu=new D,hu=new D,da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ac,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===$s||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ro=new D,ao=new ti,$n=new D,fa=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ro,ao,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ro,ao,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new D,uu=new Ae,du=new Ae,un=class extends fa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,uu,du),t.subVectors(du,uu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Uc=class extends da{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},pa=class extends or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gi=class extends fa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nc=class extends da{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ws=-90,Xs=1,Ho=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Ws,Xs,e,t);s.layers=this.layers,this.add(s);let r=new un(Ws,Xs,e,t);r.layers=this.layers,this.add(r);let a=new un(Ws,Xs,e,t);a.layers=this.layers,this.add(a);let o=new un(Ws,Xs,e,t);o.layers=this.layers,this.add(o);let l=new un(Ws,Xs,e,t);l.layers=this.layers,this.add(l);let c=new un(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Wo=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ch="\\[\\]\\.:\\/",Sp=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",bp="[^"+ch.replace("\\.","")+"]",wp=/((?:WC+[\/:])*)/.source.replace("WC",hh),Tp=/(WCOD+)?/.source.replace("WCOD",bp),Ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Cp=new RegExp("^"+wp+Tp+Ap+Ep+"$"),Rp=["material","materials","bones","map"],Fc=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sp,"")}static parseTrackName(e){let t=Cp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Fc;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U_=new Float32Array(1);var Oc=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function uh(i,e,t,n){let s=Ip(n);switch(t){case nh:return i*e;case Ko:return i*e/s.components*s.byteLength;case Qo:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case ih:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case el:return i*e*4/s.components*s.byteLength;case _a:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(e,8)/4;case tl:case il:return Math.max(i,8)*Math.max(e,8)/2;case rl:case al:case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ol:case Sa:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ba:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ip(i){switch(i){case vn:case Qc:return{byteLength:1,components:1};case ur:case jc:case Yn:return{byteLength:2,components:1};case Jo:case $o:return{byteLength:2,components:4};case qn:case Zo:case Pn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Td(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Op(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Im=`#ifdef USE_ENVMAP
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
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Fm=`uniform sampler2D dfgLUT;
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
}`,Om=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
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
}`,Xg=`#if DEPTH_PACKING == 3200
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
}`,qg=`#define DISTANCE
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
}`,Yg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,t0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Bp,alphahash_pars_fragment:kp,alphamap_fragment:zp,alphamap_pars_fragment:Vp,alphatest_fragment:Gp,alphatest_pars_fragment:Hp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:$p,iridescence_fragment:Kp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:tm,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:am,common:om,cube_uv_reflection_fragment:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:hm,displacementmap_vertex:um,emissivemap_fragment:dm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:xm,envmap_pars_fragment:_m,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Im,envmap_vertex:vm,fog_vertex:Mm,fog_pars_vertex:Sm,fog_fragment:bm,fog_pars_fragment:wm,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:Am,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Cm,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Um,lights_physical_fragment:Nm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:km,lightprobes_pars_fragment:zm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:$m,morphinstance_vertex:Km,morphcolor_vertex:Qm,morphnormal_vertex:jm,morphtarget_pars_vertex:eg,morphtarget_vertex:tg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:ag,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:dg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:xg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Sg,shadowmask_pars_fragment:bg,skinbase_vertex:wg,skinning_pars_vertex:Tg,skinning_vertex:Ag,skinnormal_vertex:Eg,specularmap_fragment:Cg,specularmap_pars_fragment:Rg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ug,uv_pars_vertex:Ng,uv_vertex:Fg,worldpos_vertex:Og,background_vert:Bg,background_frag:kg,backgroundCube_vert:zg,backgroundCube_frag:Vg,cube_vert:Gg,cube_frag:Hg,depth_vert:Wg,depth_frag:Xg,distance_vert:qg,distance_frag:Yg,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:$g,linedashed_frag:Kg,meshbasic_vert:Qg,meshbasic_frag:jg,meshlambert_vert:e0,meshlambert_frag:t0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:x0},Fe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ai={basic:{uniforms:sn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:sn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:sn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:sn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:sn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:sn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:sn([Fe.points,Fe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:sn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:sn([Fe.common,Fe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:sn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:sn([Fe.sprite,Fe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:sn([Fe.common,Fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:sn([Fe.lights,Fe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ai.physical={uniforms:sn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Nl={r:0,b:0,g:0},_0=new wt,Ad=new rt;Ad.set(-1,0,0,0,1,0,0,0,1);function y0(i,e,t,n,s,r){let a=new lt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let y=M.backgroundBlurriness>0;b=e.get(b,y)}return b}function m(M){let b=!1,y=d(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,b){let y=d(b);y&&(y.isCubeTexture||y.mapping===ga)?(c===void 0&&(c=new Zt(new Oi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ys(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Zt(new In(2,2),new nn({name:"BackgroundMaterial",uniforms:ys(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,b){M.getRGB(Nl,lh(i)),t.buffers.color.setClear(Nl.r,Nl.g,Nl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:v,dispose:p}}function v0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,z,q,B,Z){let te=!1,ie=f(F,B,q,z);r!==ie&&(r=ie,c(r.object)),te=d(F,B,q,Z),te&&m(F,B,q,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(F,z,q,B),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,z,q,B){let Z=B.wireframe===!0,te=n[z.id];te===void 0&&(te={},n[z.id]=te);let ie=F.isInstancedMesh===!0?F.id:0,xe=te[ie];xe===void 0&&(xe={},te[ie]=xe);let se=xe[q.id];se===void 0&&(se={},xe[q.id]=se);let ae=se[Z];return ae===void 0&&(ae=u(l()),se[Z]=ae),ae}function u(F){let z=[],q=[],B=[];for(let Z=0;Z<t;Z++)z[Z]=0,q[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:B,object:F,attributes:{},index:null}}function d(F,z,q,B){let Z=r.attributes,te=z.attributes,ie=0,xe=q.getAttributes();for(let se in xe)if(xe[se].location>=0){let de=Z[se],Ge=te[se];if(Ge===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(Ge=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(Ge=F.instanceColor)),de===void 0||de.attribute!==Ge||Ge&&de.data!==Ge.data)return!0;ie++}return r.attributesNum!==ie||r.index!==B}function m(F,z,q,B){let Z={},te=z.attributes,ie=0,xe=q.getAttributes();for(let se in xe)if(xe[se].location>=0){let de=te[se];de===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));let Ge={};Ge.attribute=de,de&&de.data&&(Ge.data=de.data),Z[se]=Ge,ie++}r.attributes=Z,r.attributesNum=ie,r.index=B}function v(){let F=r.newAttributes;for(let z=0,q=F.length;z<q;z++)F[z]=0}function g(F){p(F,0)}function p(F,z){let q=r.newAttributes,B=r.enabledAttributes,Z=r.attributeDivisors;q[F]=1,B[F]===0&&(i.enableVertexAttribArray(F),B[F]=1),Z[F]!==z&&(i.vertexAttribDivisor(F,z),Z[F]=z)}function M(){let F=r.newAttributes,z=r.enabledAttributes;for(let q=0,B=z.length;q<B;q++)z[q]!==F[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function b(F,z,q,B,Z,te,ie){ie===!0?i.vertexAttribIPointer(F,z,q,Z,te):i.vertexAttribPointer(F,z,q,B,Z,te)}function y(F,z,q,B){v();let Z=B.attributes,te=q.getAttributes(),ie=z.defaultAttributeValues;for(let xe in te){let se=te[xe];if(se.location>=0){let ae=Z[xe];if(ae===void 0&&(xe==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),xe==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){let de=ae.normalized,Ge=ae.itemSize,R=e.get(ae);if(R===void 0)continue;let W=R.buffer,j=R.type,me=R.bytesPerElement,U=j===i.INT||j===i.UNSIGNED_INT||ae.gpuType===Zo;if(ae.isInterleavedBufferAttribute){let H=ae.data,X=H.stride,pe=ae.offset;if(H.isInstancedInterleavedBuffer){for(let ve=0;ve<se.locationSize;ve++)p(se.location+ve,H.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ve=0;ve<se.locationSize;ve++)g(se.location+ve);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ve=0;ve<se.locationSize;ve++)b(se.location+ve,Ge/se.locationSize,j,de,X*me,(pe+Ge/se.locationSize*ve)*me,U)}else{if(ae.isInstancedBufferAttribute){for(let H=0;H<se.locationSize;H++)p(se.location+H,ae.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let H=0;H<se.locationSize;H++)g(se.location+H);i.bindBuffer(i.ARRAY_BUFFER,W);for(let H=0;H<se.locationSize;H++)b(se.location+H,Ge/se.locationSize,j,de,Ge*me,Ge/se.locationSize*H*me,U)}}else if(ie!==void 0){let de=ie[xe];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(se.location,de);break;case 3:i.vertexAttrib3fv(se.location,de);break;case 4:i.vertexAttrib4fv(se.location,de);break;default:i.vertexAttrib1fv(se.location,de)}}}}M()}function A(){T();for(let F in n){let z=n[F];for(let q in z){let B=z[q];for(let Z in B){let te=B[Z];for(let ie in te)h(te[ie].object),delete te[ie];delete B[Z]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let q in z){let B=z[q];for(let Z in B){let te=B[Z];for(let ie in te)h(te[ie].object),delete te[ie];delete B[Z]}}delete n[F.id]}function w(F){for(let z in n){let q=n[z];for(let B in q){let Z=q[B];if(Z[F.id]===void 0)continue;let te=Z[F.id];for(let ie in te)h(te[ie].object),delete te[ie];delete Z[F.id]}}}function x(F){for(let z in n){let q=n[z],B=F.isInstancedMesh===!0?F.id:0,Z=q[B];if(Z!==void 0){for(let te in Z){let ie=Z[te];for(let xe in ie)h(ie[xe].object),delete ie[xe];delete Z[te]}delete q[B],Object.keys(q).length===0&&delete n[z]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function M0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function S0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&w!==Pn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:E}}function b0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gn,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,b=M*4,y=p.clippingState||null;l.value=y,y=h(m,u,b,d);for(let A=0;A!==b;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=d;b!==v;++b,y+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var pr=4,w0=6,T0=20,A0=256,wa=new Gi,sd=new lt,dh=null,fh=0,ph=0,mh=!1,E0=new D,vs=new D,Ol=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=E0}=r;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Yn,format:Ln,colorSpace:Br,depthBuffer:!1},s=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=C0(r)),this._blurMaterial=I0(r,e,t),this._ggxMaterial=R0(r,e,t)}return s}_compileMaterial(e){let t=new Zt(new Ut,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s,r){let l=new un(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(sd),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Oi,new fn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(sd),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;fr(s,y*A,b>2?A:0,A,A),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wi||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-pr?n-m+pr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,fr(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,fr(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,wa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-pr?s-this._lodMax+pr:0),u=4*(this._cubeSize-h);fr(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,wa)}};function C0(i){let e=[],t=[],n=i,s=i-pr+1+w0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,b=p>2?0:-1,y=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];m.set(y,d*u*p);for(let A=0;A<u;A++){let E=h[A*2]*2-1,w=h[A*2+1]*2-1;p===0?vs.set(1,w,E):p===1?vs.set(-E,1,-w):p===2?vs.set(-E,w,1):p===3?vs.set(-1,w,-E):p===4?vs.set(-E,-1,w):vs.set(E,w,-1),vs.toArray(v,(p*u+A)*d)}}let g=new Ut;g.setAttribute("position",new Kt(m,d)),g.setAttribute("outputDirection",new Kt(v,d)),t.push(new Zt(g,null)),n>pr&&n--}return{lodMeshes:t,sizeLods:e}}function rd(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function R0(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function I0(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:T0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function ad(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function od(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bl=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $r(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:si});r.uniforms.tEquirect.value=t;let a=new Zt(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Qt),new Ho(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function P0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Xo||d===qo)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Bl(m.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,m=d===Xo||d===qo,v=d===Wi||d===xs;if(m||v){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ol(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Ol(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Xo?u.mapping=Wi:d===qo&&(u.mapping=xs),u}function l(u){let d=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function L0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(d!==null){let M=d.array;v=d.version;for(let b=0,y=M.length;b<y;b+=3){let A=M[b+0],E=M[b+1],w=M[b+2];u.push(A,E,E,w,w,A)}}else{let M=m.array;v=m.version;for(let b=0,y=M.length/3-1;b<y;b+=3){let A=b+0,E=b+1,w=b+2;u.push(A,E,E,w,w,A)}}let g=new(m.count>=65535?qr:Xr)(u,1);g.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function U0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,e,t){let n=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*f),w=new Vr(E,y,A,f);w.type=Pn,w.needsUpdate=!0;let x=b*4;for(let I=0;I<f;I++){let F=g[I],z=p[I],q=M[I],B=y*A*4*I;for(let Z=0;Z<F.count;Z++){let te=Z*x;d===!0&&(s.fromBufferAttribute(F,Z),E[B+te+0]=s.x,E[B+te+1]=s.y,E[B+te+2]=s.z,E[B+te+3]=0),m===!0&&(s.fromBufferAttribute(z,Z),E[B+te+4]=s.x,E[B+te+5]=s.y,E[B+te+6]=s.z,E[B+te+7]=0),v===!0&&(s.fromBufferAttribute(q,Z),E[B+te+8]=s.x,E[B+te+9]=s.y,E[B+te+10]=s.z,E[B+te+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new Ae(y,A)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function O0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var B0={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function k0(i,e,t,n,s,r){let a=new _n(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ut;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));let h=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Zt(c,h),u=new Gi(-1,1,1,-1,0,1),d=null,m=null,v=!1,g,p=null,M=[],b=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),l!==null&&l.setSize(y,A);for(let E=0;E<M.length;E++){let w=M[E];w.setSize&&w.setSize(y,A)}},this.setEffects=function(y){M=y,b=M.length>0&&M[0].isRenderPass===!0;let A=a.width,E=a.height;M.length>0&&o===null&&(o=new _n(A,E,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(A,E,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let x=M[w];x.setSize&&x.setSize(A,E)}},this.begin=function(y,A){if(v||y.toneMapping===Xn&&M.length===0)return!1;if(p=A,A!==null){let E=A.width,w=A.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Xn,!0},this.hasRenderPass=function(){return b},this.end=function(y,A){y.toneMapping=g,v=!0;let E=a,w=o;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(y,w,E,A),T.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,h.defines={},_t.getTransfer(d)===Tt&&(h.defines.SRGB_TRANSFER="");let x=B0[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ed=new dn,_h=new Fi(1,1),Cd=new Vr,Rd=new Mo,Id=new $r,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vl(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function W0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),Ht(t,n)}}function X0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;ud.set(n),i.uniformMatrix3fv(this.addr,!1,ud),Ht(t,n)}}function q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),Ht(t,n)}}function Y0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function tx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=t.isReversedDepthBuffer()?Dl:Ll,r=_h):r=Ed,t.setTexture2D(e||r,s)}function nx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rd,s)}function ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Id,s)}function sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function rx(i){switch(i){case 5126:return z0;case 35664:return V0;case 35665:return G0;case 35666:return H0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return Q0;case 36295:return j0;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(i,e){i.uniform1fv(this.addr,e)}function ox(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function lx(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function cx(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function hx(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ux(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dx(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fx(i,e){i.uniform1iv(this.addr,e)}function px(i,e){i.uniform2iv(this.addr,e)}function mx(i,e){i.uniform3iv(this.addr,e)}function gx(i,e){i.uniform4iv(this.addr,e)}function xx(i,e){i.uniform1uiv(this.addr,e)}function _x(i,e){i.uniform2uiv(this.addr,e)}function yx(i,e){i.uniform3uiv(this.addr,e)}function vx(i,e){i.uniform4uiv(this.addr,e)}function Mx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_h:a=Ed;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Sx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rd,r[a])}function bx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Id,r[a])}function wx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function Tx(i){switch(i){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return yx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return wx}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rx(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tx(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function fd(i,e){i.seq.push(e),i.map[e.id]=e}function Ax(i,e,t){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),a=gh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fd(t,c===void 0?new yh(o,i,e):new vh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Mh(o),fd(t,f)),t=f}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ax(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ex=37297,Cx=0;function Rx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var md=new rt;function Ix(i){_t._getMatrix(md,_t.workingColorSpace,i);let e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case kr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(e),o)}else return r}function Px(i,e){let t=Ix(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Lx={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[ma]:"ACESFilmic",[Jc]:"AgX",[$c]:"Neutral",[Zc]:"Custom"};function Dx(i,e){let t=Lx[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fl=new D;function Ux(){_t.getLuminanceCoefficients(Fl);let i=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function Fx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ox(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Aa(i){return i!==""}function xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(Bx,zx)}var kx=new Map;function zx(i,e){let t=ht[e];if(t===void 0){let n=kx.get(e);if(n!==void 0)t=ht[n],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sh(t)}var Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(i){return i.replace(Vx,Gx)}function Gx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Hx={[ms]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function Wx(i){return Hx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xx={[Wi]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function qx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yx={[xs]:"ENVMAP_MODE_REFRACTION"};function Zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jx={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function $x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jx[i.combine]||"ENVMAP_BLENDING_NONE"}function Kx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Wx(t),c=qx(t),h=Zx(t),f=$x(t),u=Kx(t),d=Nx(t),m=Fx(r),v=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Aa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(g=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?ht.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Sh(a),a=xd(a,t),a=_d(a,t),o=Sh(o),o=xd(o,t),o=_d(o,t),a=yd(a),o=yd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+g+a,y=M+p+o,A=pd(s,s.VERTEX_SHADER,b),E=pd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(v)||"",q=s.getShaderInfoLog(A)||"",B=s.getShaderInfoLog(E)||"",Z=z.trim(),te=q.trim(),ie=B.trim(),xe=!0,se=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(xe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{let ae=gd(s,A,"vertex"),de=gd(s,E,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+ae+`
`+de)}else Z!==""?tt("WebGLProgram: Program Info Log:",Z):(te===""||ie==="")&&(se=!1);se&&(F.diagnostics={runnable:xe,programLog:Z,vertexShader:{log:te,prefix:g},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(A),s.deleteShader(E),x=new mr(s,v),T=Ox(s,v)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,Ex)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var jx=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}};function e_(i){return i===Yi||i===Sa||i===ba}function t_(i,e,t,n,s,r){let a=new Gr,o=new bh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,I,F,z,q){let B=F.fog,Z=z.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,xe=e.get(x.envMap||te,ie),se=xe&&xe.mapping===ga?xe.image.height:null,ae=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&tt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ge=de!==void 0?de.length:0,R=0;Z.morphAttributes.position!==void 0&&(R=1),Z.morphAttributes.normal!==void 0&&(R=2),Z.morphAttributes.color!==void 0&&(R=3);let W,j,me,U;if(ae){let Et=ai[ae];W=Et.vertexShader,j=Et.fragmentShader}else{W=x.vertexShader,j=x.fragmentShader;let Et=o.getVertexShaderStage(x),St=o.getFragmentShaderStage(x);o.update(x,Et,St),me=Et.id,U=St.id}let H=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),pe=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,De=!!x.map,je=!!x.matcap,he=!!xe,ge=!!x.aoMap,Me=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,be=!!x.normalMap,$e=!!x.displacementMap,ke=!!x.emissiveMap,Ke=!!x.metalnessMap,it=!!x.roughnessMap,O=x.anisotropy>0,Mt=x.clearcoat>0,ut=x.dispersion>0,C=x.retroreflectivity>0,_=x.iridescence>0,Y=x.sheen>0,ee=x.transmission>0,re=O&&!!x.anisotropyMap,we=Mt&&!!x.clearcoatMap,Ee=Mt&&!!x.clearcoatNormalMap,oe=Mt&&!!x.clearcoatRoughnessMap,fe=_&&!!x.iridescenceMap,Re=_&&!!x.iridescenceThicknessMap,Ye=Y&&!!x.sheenColorMap,Ce=Y&&!!x.sheenRoughnessMap,Te=!!x.specularMap,Ze=!!x.specularColorMap,Qe=!!x.specularIntensityMap,at=ee&&!!x.transmissionMap,V=ee&&!!x.thicknessMap,Ie=!!x.gradientMap,le=!!x.alphaMap,Pe=x.alphaTest>0,Ue=!!x.alphaHash,_e=!!x.extensions,Je=Xn;x.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Je=i.toneMapping);let Xe={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:j,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:pe,instancingColor:pe&&z.instanceColor!==null,instancingMorph:pe&&z.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:je,envMap:he,envMapMode:he&&xe.mapping,envMapCubeUVHeight:se,aoMap:ge,lightMap:Me,bumpMap:Se,normalMap:be,displacementMap:$e,emissiveMap:ke,normalMapObjectSpace:be&&x.normalMapType===Bu,normalMapTangentSpace:be&&x.normalMapType===Pl,packedNormalMap:be&&x.normalMapType===Pl&&e_(x.normalMap.format),metalnessMap:Ke,roughnessMap:it,anisotropy:O,anisotropyMap:re,clearcoat:Mt,clearcoatMap:we,clearcoatNormalMap:Ee,clearcoatRoughnessMap:oe,dispersion:ut,retroreflection:C,iridescence:_,iridescenceMap:fe,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:Ye,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:Ze,specularIntensityMap:Qe,transmission:ee,transmissionMap:at,thicknessMap:V,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Pe,alphaHash:Ue,combine:x.combine,mapUv:De&&m(x.map.channel),aoMapUv:ge&&m(x.aoMap.channel),lightMapUv:Me&&m(x.lightMap.channel),bumpMapUv:Se&&m(x.bumpMap.channel),normalMapUv:be&&m(x.normalMap.channel),displacementMapUv:$e&&m(x.displacementMap.channel),emissiveMapUv:ke&&m(x.emissiveMap.channel),metalnessMapUv:Ke&&m(x.metalnessMap.channel),roughnessMapUv:it&&m(x.roughnessMap.channel),anisotropyMapUv:re&&m(x.anisotropyMap.channel),clearcoatMapUv:we&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(x.sheenRoughnessMap.channel),specularMapUv:Te&&m(x.specularMap.channel),specularColorMapUv:Ze&&m(x.specularColorMap.channel),specularIntensityMapUv:Qe&&m(x.specularIntensityMap.channel),transmissionMapUv:at&&m(x.transmissionMap.channel),thicknessMapUv:V&&m(x.thicknessMap.channel),alphaMapUv:le&&m(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(be||O),vertexNormals:!!Z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(De||le),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Z.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:X,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:R,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===Tt,decodeVideoTextureEmissive:ke&&x.emissiveMap.isVideoTexture===!0&&_t.getTransfer(x.emissiveMap.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jt,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let T=d[x.type],I;if(T){let F=ai[T];I=td.clone(F.uniforms)}else I=x.uniforms;return I}function y(x,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Qx(i,T,x,s),c.push(I),h.set(T,I)),I}function A(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:w}}function n_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function i_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,v,g,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=p),e++,M}function l(u,d,m,v,g,p,M){M.reversedDepth===!0&&(g=-g);let b=o(u,d,m,v,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function c(u,d,m,v,g,p){let M=o(u,d,m,v,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||i_),n.length>1&&n.sort(d||Md),s.length>1&&s.sort(d||Md)}function f(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function s_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Sd,i.set(n,[a])):s>=r.length?(a=new Sd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function r_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new lt};break;case"SpotLight":t={position:new D,direction:new D,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function a_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var o_=0;function l_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c_(i){let e=new r_,t=a_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new wt,a=new wt;function o(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,b=0,y=0,A=0,E=0,w=0,x=0,T=0,I=0;c.sort(l_);for(let z=0,q=c.length;z<q;z++){let B=c[z],Z=B.color,te=B.intensity,ie=B.distance,xe=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Yi?xe=B.shadow.map.texture:xe=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=Z.r*te,f+=Z.g*te,u+=Z.b*te;else if(B.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(B.sh.coefficients[se],te);I++}else if(B.isSunLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[m]=de,n.sunShadowMap[m]=xe;let Ge=ae.getViewportCount();for(let R=0;R<Ge;R++)n.sunShadowMatrix[v+R]=ae.getMatrix(R),n.sunShadowCascade[v+R]=ae._cascadeData[R];v+=Ge,m++}n.sun[d]=se,d++}else if(B.isDirectionalLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,n.directionalShadow[g]=de,n.directionalShadowMap[g]=xe,n.directionalShadowMatrix[g]=B.shadow.matrix,A++}n.directional[g]=se,g++}else if(B.isSpotLight){let se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(Z).multiplyScalar(te),se.distance=ie,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,n.spot[M]=se;let ae=B.shadow;if(B.map&&(n.spotLightMap[x]=B.map,x++,ae.updateMatrices(B),B.castShadow&&T++),n.spotLightMatrix[M]=ae.matrix,B.castShadow){let de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,n.spotShadow[M]=de,n.spotShadowMap[M]=xe,w++}M++}else if(B.isRectAreaLight){let se=e.get(B);se.color.copy(Z).multiplyScalar(te),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),n.rectArea[b]=se,b++}else if(B.isPointLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){let ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,de.shadowCameraNear=ae.camera.near,de.shadowCameraFar=ae.camera.far,n.pointShadow[p]=de,n.pointShadowMap[p]=xe,n.pointShadowMatrix[p]=B.shadow.matrix,E++}n.point[p]=se,p++}else if(B.isHemisphereLight){let se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(te),se.groundColor.copy(B.groundColor).multiplyScalar(te),n.hemi[y]=se,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.sunLength!==d||F.directionalLength!==g||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==b||F.hemiLength!==y||F.numSunShadows!==m||F.numDirectionalShadows!==A||F.numPointShadows!==E||F.numSpotShadows!==w||F.numSpotMaps!==x||F.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,F.sunLength=d,F.directionalLength=g,F.pointLength=p,F.spotLength=M,F.rectAreaLength=b,F.hemiLength=y,F.numSunShadows=m,F.numDirectionalShadows=A,F.numPointShadows=E,F.numSpotShadows=w,F.numSpotMaps=x,F.numLightProbes=I,n.version=o_++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){let y=c[M];if(y.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(y.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function bd(i){let e=new c_(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function h_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new bd(i),e.set(s,[o])):r>=a.length?(o=new bd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
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
}`,f_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],p_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],wd=new wt,Ta=new D,xh=new D;function m_(i,e,t){let n=new nr,s=new Ae,r=new Ae,a=new It,o=new Po,l=new Lo,c={},h=t.maxTextureSize,f={[Hi]:pn,[pn]:Hi,[Jt]:Jt},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:u_,fragmentShader:d_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ut;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let p=this.type;this.render=function(E,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===mu&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=p!==this.type;q&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Z=>Z.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Z=E.length;B<Z;B++){let te=E[B],ie=te.shadow;if(ie===void 0){tt("WebGLShadowMap:",te,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let xe=ie.getFrameExtents();s.multiply(xe),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,ie.mapSize.y=r.y));let se=i.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=se,ie.map===null||q===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===cr){if(te.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new _n(s.x,s.y,{format:Yi,type:Yn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),ie.map.texture.name=te.name+".shadowMap",ie.map.depthTexture=new Fi(s.x,s.y,Pn),ie.map.depthTexture.name=te.name+".shadowMapDepth",ie.map.depthTexture.format=jn,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt}else te.isPointLight?(ie.map=new Bl(s.x),ie.map.depthTexture=new wo(s.x,qn)):(ie.map=new _n(s.x,s.y),ie.map.depthTexture=new Fi(s.x,s.y,qn)),ie.map.depthTexture.name=te.name+".shadowMap",ie.map.depthTexture.format=jn,this.type===ms?(ie.map.depthTexture.compareFunction=se?Dl:Ll,ie.map.depthTexture.minFilter=Qt,ie.map.depthTexture.magFilter=Qt):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=Yt,ie.map.depthTexture.magFilter=Yt);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==s.x||ie.map.height!==s.y)&&ie.map.setSize(s.x,s.y);let ae=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();te.isPointLight!==!0&&ie.updateMatrices(te,x);for(let de=0;de<ae;de++){let Ge=ie.getCamera(de);if(te.isPointLight){let R=ie.camera,W=ie.matrix,j=te.distance||R.far;j!==R.far&&(R.far=j,R.updateProjectionMatrix()),Ta.setFromMatrixPosition(te.matrixWorld),R.position.copy(Ta),xh.copy(R.position),xh.add(f_[de]),R.up.copy(p_[de]),R.lookAt(xh),R.updateMatrixWorld(),W.makeTranslation(-Ta.x,-Ta.y,-Ta.z),wd.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(wd,R.coordinateSystem,R.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)i.setRenderTarget(ie.map,de),i.clear();else{de===0&&(i.setRenderTarget(ie.map),i.clear());let R=ie.getViewport(de);a.set(r.x*R.x,r.y*R.y,r.x*R.z,r.y*R.w),z.viewport(a)}n=ie.getFrustum(de),y(w,x,Ge,te,this.type)}ie.isPointLightShadow!==!0&&this.type===cr&&M(ie,x),ie.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,I,F)};function M(E,w){let x=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(s.x,s.y,{format:Yi,type:Yn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,x,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,x,d,v,null)}function b(E,w,x,T){let I=null,F=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)I=F;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=I.uuid,q=w.uuid,B=c[z];B===void 0&&(B={},c[z]=B);let Z=B[q];Z===void 0&&(Z=I.clone(),B[q]=Z,w.addEventListener("dispose",A)),I=Z}if(I.visible=w.visible,I.wireframe=w.wireframe,T===cr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=x}return I}function y(E,w,x,T,I){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let q=e.update(E),B=E.material;if(Array.isArray(B)){let Z=q.groups;for(let te=0,ie=Z.length;te<ie;te++){let xe=Z[te],se=B[xe.materialIndex];if(se&&se.visible){let ae=b(E,se,T,I);E.onBeforeShadow(i,E,w,x,q,ae,xe),i.renderBufferDirect(x,null,q,ae,E,xe),E.onAfterShadow(i,E,w,x,q,ae,xe)}}}else if(B.visible){let Z=b(E,B,T,I);E.onBeforeShadow(i,E,w,x,q,Z,null),i.renderBufferDirect(x,null,q,Z,E,null),E.onAfterShadow(i,E,w,x,q,Z,null)}}let z=E.children;for(let q=0,B=z.length;q<B;q++)y(z[q],w,x,T,I)}function A(E){E.target.removeEventListener("dispose",A);for(let x in c){let T=c[x],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function g_(i,e){function t(){let V=!1,Ie=new It,le=null,Pe=new It(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!V&&(i.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,_e,Je,Xe,Et){Et===!0&&(Ue*=Xe,_e*=Xe,Je*=Xe),Ie.set(Ue,_e,Je,Xe),Pe.equals(Ie)===!1&&(i.clearColor(Ue,_e,Je,Xe),Pe.copy(Ie))},reset:function(){V=!1,le=null,Pe.set(-1,0,0,0)}}}function n(){let V=!1,Ie=!1,le=null,Pe=null,Ue=null;return{setReversed:function(_e){if(Ie!==_e){let Je=e.get("EXT_clip_control");_e?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ie=_e;let Xe=Ue;Ue=null,this.setClear(Xe)}},getReversed:function(){return Ie},setTest:function(_e){_e?H(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(_e){le!==_e&&!V&&(i.depthMask(_e),le=_e)},setFunc:function(_e){if(Ie&&(_e=Ju[_e]),Pe!==_e){switch(_e){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ue!==_e&&(Ue=_e,Ie&&(_e=1-_e),i.clearDepth(_e))},reset:function(){V=!1,le=null,Pe=null,Ue=null,Ie=!1}}}function s(){let V=!1,Ie=null,le=null,Pe=null,Ue=null,_e=null,Je=null,Xe=null,Et=null;return{setTest:function(St){V||(St?H(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(St){Ie!==St&&!V&&(i.stencilMask(St),Ie=St)},setFunc:function(St,rn,zt){(le!==St||Pe!==rn||Ue!==zt)&&(i.stencilFunc(St,rn,zt),le=St,Pe=rn,Ue=zt)},setOp:function(St,rn,zt){(_e!==St||Je!==rn||Xe!==zt)&&(i.stencilOp(St,rn,zt),_e=St,Je=rn,Xe=zt)},setLocked:function(St){V=St},setClear:function(St){Et!==St&&(i.clearStencil(St),Et=St)},reset:function(){V=!1,Ie=null,le=null,Pe=null,Ue=null,_e=null,Je=null,Xe=null,Et=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,b=null,y=null,A=null,E=null,w=null,x=new lt(0,0,0),T=0,I=!1,F=null,z=null,q=null,B=null,Z=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,xe=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ie=xe>=1):se.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ie=xe>=2);let ae=null,de={},Ge=i.getParameter(i.SCISSOR_BOX),R=i.getParameter(i.VIEWPORT),W=new It().fromArray(Ge),j=new It().fromArray(R);function me(V,Ie,le,Pe){let Ue=new Uint8Array(4),_e=i.createTexture();i.bindTexture(V,_e),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<le;Je++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Ie+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return _e}let U={};U[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(i.DEPTH_TEST),a.setFunc(Zs),Se(!1),be(Bc),H(i.CULL_FACE),ge(si);function H(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function X(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function pe(V,Ie){return u[V]!==Ie?(i.bindFramebuffer(V,Ie),u[V]=Ie,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ve(V,Ie){let le=m,Pe=!1;if(V){le=d.get(Ie),le===void 0&&(le=[],d.set(Ie,le));let Ue=V.textures;if(le.length!==Ue.length||le[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Je=Ue.length;_e<Je;_e++)le[_e]=i.COLOR_ATTACHMENT0+_e;le.length=Ue.length,Pe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(le)}function De(V){return v!==V?(i.useProgram(V),v=V,!0):!1}let je={[gs]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};je[yu]=i.MIN,je[vu]=i.MAX;let he={[Mu]:i.ZERO,[Su]:i.ONE,[bu]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(V,Ie,le,Pe,Ue,_e,Je,Xe,Et,St){if(V===si){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(H(i.BLEND),g=!0),V!==gu){if(V!==p||St!==I){if((M!==gs||A!==gs)&&(i.blendEquation(i.FUNC_ADD),M=gs,A=gs),St)switch(V){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kc:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",V);break}else switch(V){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",V);break}b=null,y=null,E=null,w=null,x.set(0,0,0),T=0,p=V,I=St}return}Ue=Ue||Ie,_e=_e||le,Je=Je||Pe,(Ie!==M||Ue!==A)&&(i.blendEquationSeparate(je[Ie],je[Ue]),M=Ie,A=Ue),(le!==b||Pe!==y||_e!==E||Je!==w)&&(i.blendFuncSeparate(he[le],he[Pe],he[_e],he[Je]),b=le,y=Pe,E=_e,w=Je),(Xe.equals(x)===!1||Et!==T)&&(i.blendColor(Xe.r,Xe.g,Xe.b,Et),x.copy(Xe),T=Et),p=V,I=!1}function Me(V,Ie){V.side===Jt?X(i.CULL_FACE):H(i.CULL_FACE);let le=V.side===pn;Ie&&(le=!le),Se(le),V.blending===hr&&V.transparent===!1?ge(si):ge(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Pe=V.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ke(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){F!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),F=V)}function be(V){V!==fu?(H(i.CULL_FACE),V!==z&&(V===Bc?i.cullFace(i.BACK):V===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),z=V}function $e(V){V!==q&&(ie&&i.lineWidth(V),q=V)}function ke(V,Ie,le){V?(H(i.POLYGON_OFFSET_FILL),(B!==Ie||Z!==le)&&(B=Ie,Z=le,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,le))):X(i.POLYGON_OFFSET_FILL)}function Ke(V){V?H(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function it(V){V===void 0&&(V=i.TEXTURE0+te-1),ae!==V&&(i.activeTexture(V),ae=V)}function O(V,Ie,le){le===void 0&&(ae===null?le=i.TEXTURE0+te-1:le=ae);let Pe=de[le];Pe===void 0&&(Pe={type:void 0,texture:void 0},de[le]=Pe),(Pe.type!==V||Pe.texture!==Ie)&&(ae!==le&&(i.activeTexture(le),ae=le),i.bindTexture(V,Ie||U[V]),Pe.type=V,Pe.texture=Ie)}function Mt(){let V=de[ae];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function _(){try{i.texSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function Y(){try{i.texSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function we(){try{i.texStorage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function Ee(){try{i.texStorage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function oe(){try{i.texImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function fe(){try{i.texImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Re(V){return f[V]!==void 0?f[V]:i.getParameter(V)}function Ye(V,Ie){f[V]!==Ie&&(i.pixelStorei(V,Ie),f[V]=Ie)}function Ce(V){W.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),W.copy(V))}function Te(V){j.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function Ze(V,Ie){let le=c.get(Ie);le===void 0&&(le=new WeakMap,c.set(Ie,le));let Pe=le.get(V);Pe===void 0&&(Pe=i.getUniformBlockIndex(Ie,V.name),le.set(V,Pe))}function Qe(V,Ie){let Pe=c.get(Ie).get(V);l.get(Ie)!==Pe&&(i.uniformBlockBinding(Ie,Pe,V.__bindingPointIndex),l.set(Ie,Pe))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ae=null,de={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,b=null,y=null,A=null,E=null,w=null,x=new lt(0,0,0),T=0,I=!1,F=null,z=null,q=null,B=null,Z=null,W.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:X,bindFramebuffer:pe,drawBuffers:ve,useProgram:De,setBlending:ge,setMaterial:Me,setFlipSided:Se,setCullFace:be,setLineWidth:$e,setPolygonOffset:ke,setScissorTest:Ke,activeTexture:it,bindTexture:O,unbindTexture:Mt,compressedTexImage2D:ut,compressedTexImage3D:C,texImage2D:oe,texImage3D:fe,pixelStorei:Ye,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:we,texStorage3D:Ee,texSubImage2D:_,texSubImage3D:Y,compressedTexSubImage2D:ee,compressedTexSubImage3D:re,scissor:Ce,viewport:Te,reset:at}}function x_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return m?new OffscreenCanvas(C,_):zr("canvas")}function g(C,_,Y){let ee=1,re=ut(C);if((re.width>Y||re.height>Y)&&(ee=Y/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let we=Math.floor(ee*re.width),Ee=Math.floor(ee*re.height);u===void 0&&(u=v(we,Ee));let oe=_?v(we,Ee):u;return oe.width=we,oe.height=Ee,oe.getContext("2d").drawImage(C,0,0,we,Ee),tt("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+we+"x"+Ee+")."),oe}else return"data"in C&&tt("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,_,Y,ee,re,we=!1){if(C!==null){if(i[C]!==void 0)return i[C];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee;ee&&(Ee=e.get("EXT_texture_norm16"),Ee||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=_;if(_===i.RED&&(Y===i.FLOAT&&(oe=i.R32F),Y===i.HALF_FLOAT&&(oe=i.R16F),Y===i.UNSIGNED_BYTE&&(oe=i.R8),Y===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.R16_EXT),Y===i.SHORT&&Ee&&(oe=Ee.R16_SNORM_EXT)),_===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.R8UI),Y===i.UNSIGNED_SHORT&&(oe=i.R16UI),Y===i.UNSIGNED_INT&&(oe=i.R32UI),Y===i.BYTE&&(oe=i.R8I),Y===i.SHORT&&(oe=i.R16I),Y===i.INT&&(oe=i.R32I)),_===i.RG&&(Y===i.FLOAT&&(oe=i.RG32F),Y===i.HALF_FLOAT&&(oe=i.RG16F),Y===i.UNSIGNED_BYTE&&(oe=i.RG8),Y===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.RG16_EXT),Y===i.SHORT&&Ee&&(oe=Ee.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Y===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Y===i.UNSIGNED_INT&&(oe=i.RG32UI),Y===i.BYTE&&(oe=i.RG8I),Y===i.SHORT&&(oe=i.RG16I),Y===i.INT&&(oe=i.RG32I)),_===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Y===i.UNSIGNED_INT&&(oe=i.RGB32UI),Y===i.BYTE&&(oe=i.RGB8I),Y===i.SHORT&&(oe=i.RGB16I),Y===i.INT&&(oe=i.RGB32I)),_===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Y===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Y===i.BYTE&&(oe=i.RGBA8I),Y===i.SHORT&&(oe=i.RGBA16I),Y===i.INT&&(oe=i.RGBA32I)),_===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.RGB16_EXT),Y===i.SHORT&&Ee&&(oe=Ee.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),_===i.RGBA){let fe=we?kr:_t.getTransfer(re);Y===i.FLOAT&&(oe=i.RGBA32F),Y===i.HALF_FLOAT&&(oe=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(oe=fe===Tt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ee&&(oe=Ee.RGBA16_EXT),Y===i.SHORT&&Ee&&(oe=Ee.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function A(C,_){let Y;return C?_===null||_===qn||_===dr?Y=i.DEPTH24_STENCIL8:_===Pn?Y=i.DEPTH32F_STENCIL8:_===ur&&(Y=i.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===dr?Y=i.DEPTH_COMPONENT24:_===Pn?Y=i.DEPTH_COMPONENT32F:_===ur&&(Y=i.DEPTH_COMPONENT16),Y}function E(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function w(C){let _=C.target;_.removeEventListener("dispose",w),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(C){let _=C.target;_.removeEventListener("dispose",x),F(_)}function T(C){let _=n.get(C);if(_.__webglInit===void 0)return;let Y=C.source,ee=d.get(Y);if(ee){let re=ee[_.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(C),Object.keys(ee).length===0&&d.delete(Y)}n.remove(C)}function I(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let Y=C.source,ee=d.get(Y);delete ee[_.__cacheKey],a.memory.textures--}function F(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let re=0;re<_.__webglFramebuffer[ee].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[ee][re]);else i.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[ee]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Y=C.textures;for(let ee=0,re=Y.length;ee<re;ee++){let we=n.get(Y[ee]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(Y[ee])}n.remove(C)}let z=0;function q(){z=0}function B(){return z}function Z(C){z=C}function te(){let C=z;return C>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function ie(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function xe(C,_){let Y=n.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let ee=C.image;if(ee===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(Y,C,_);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+_)}function se(C,_){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){X(Y,C,_);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+_)}function ae(C,_){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){X(Y,C,_);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+_)}function de(C,_){let Y=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Y.__version!==C.version){pe(Y,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+_)}let Ge={[Js]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},R={[Yt]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},W={[zu]:i.NEVER,[Xu]:i.ALWAYS,[Vu]:i.LESS,[Ll]:i.LEQUAL,[Gu]:i.EQUAL,[Dl]:i.GEQUAL,[Hu]:i.GREATER,[Wu]:i.NOTEQUAL};function j(C,_){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Yo||_.magFilter===xa||_.magFilter===Xi||_.minFilter===Qt||_.minFilter===Yo||_.minFilter===xa||_.minFilter===Xi)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ge[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ge[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ge[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,R[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,R[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,W[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==xa&&_.minFilter!==Xi||_.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function me(C,_){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",w));let ee=_.source,re=d.get(ee);re===void 0&&(re={},d.set(ee,re));let we=ie(_);if(we!==C.__cacheKey){re[we]===void 0&&(re[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[we].usedTimes++;let Ee=re[C.__cacheKey];Ee!==void 0&&(re[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(_)),C.__cacheKey=we,C.__webglTexture=re[we].texture}return Y}function U(C,_,Y){return Math.floor(Math.floor(C/Y)/_)}function H(C,_,Y,ee){let we=C.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,Y,ee,_.data);else{we.sort((Ye,Ce)=>Ye.start-Ce.start);let Ee=0;for(let Ye=1;Ye<we.length;Ye++){let Ce=we[Ee],Te=we[Ye],Ze=Ce.start+Ce.count,Qe=U(Te.start,_.width,4),at=U(Ce.start,_.width,4);Te.start<=Ze+1&&Qe===at&&U(Te.start+Te.count-1,_.width,4)===Qe?Ce.count=Math.max(Ce.count,Te.start+Te.count-Ce.start):(++Ee,we[Ee]=Te)}we.length=Ee+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ye=0,Ce=we.length;Ye<Ce;Ye++){let Te=we[Ye],Ze=Math.floor(Te.start/4),Qe=Math.ceil(Te.count/4),at=Ze%_.width,V=Math.floor(Ze/_.width),Ie=Qe,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,at,V,Ie,le,Y,ee,_.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function X(C,_,Y){let ee=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=i.TEXTURE_3D);let re=me(C,_),we=_.source;t.bindTexture(ee,C.__webglTexture,i.TEXTURE0+Y);let Ee=n.get(we);if(we.version!==Ee.__version||re===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let le=_t.getPrimaries(_t.workingColorSpace),Pe=_.colorSpace===Ti?null:_t.getPrimaries(_.colorSpace),Ue=_.colorSpace===Ti||le===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let fe=g(_.image,!1,s.maxTextureSize);fe=Mt(_,fe);let Re=r.convert(_.format,_.colorSpace),Ye=r.convert(_.type),Ce=y(_.internalFormat,Re,Ye,_.normalized,_.colorSpace,_.isVideoTexture);j(ee,_);let Te,Ze=_.mipmaps,Qe=_.isVideoTexture!==!0,at=Ee.__version===void 0||re===!0,V=we.dataReady,Ie=E(_,fe);if(_.isDepthTexture)Ce=A(_.format===qi,_.type),at&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Re,Ye,null));else if(_.isDataTexture)if(Ze.length>0){Qe&&at&&t.texStorage2D(i.TEXTURE_2D,Ie,Ce,Ze[0].width,Ze[0].height);for(let le=0,Pe=Ze.length;le<Pe;le++)Te=Ze[le],Qe?V&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Te.width,Te.height,Re,Ye,Te.data):t.texImage2D(i.TEXTURE_2D,le,Ce,Te.width,Te.height,0,Re,Ye,Te.data);_.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(i.TEXTURE_2D,Ie,Ce,fe.width,fe.height),V&&H(_,fe,Re,Ye)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Re,Ye,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qe&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ce,Ze[0].width,Ze[0].height,fe.depth);for(let le=0,Pe=Ze.length;le<Pe;le++)if(Te=Ze[le],_.format!==Ln)if(Re!==null)if(Qe){if(V)if(_.layerUpdates.size>0){let Ue=uh(Te.width,Te.height,_.format,_.type);for(let _e of _.layerUpdates){let Je=Te.data.subarray(_e*Ue/Te.data.BYTES_PER_ELEMENT,(_e+1)*Ue/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,_e,Te.width,Te.height,1,Re,Je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Te.width,Te.height,fe.depth,Re,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ce,Te.width,Te.height,fe.depth,0,Te.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Te.width,Te.height,fe.depth,Re,Ye,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ce,Te.width,Te.height,fe.depth,0,Re,Ye,Te.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Qe&&at&&t.texStorage2D(i.TEXTURE_2D,Ie,Ce,Ze[0].width,Ze[0].height);for(let le=0,Pe=Ze.length;le<Pe;le++)Te=Ze[le],_.format!==Ln?Re!==null?Qe?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ce,Te.width,Te.height,0,Te.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?V&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Te.width,Te.height,Re,Ye,Te.data):t.texImage2D(i.TEXTURE_2D,le,Ce,Te.width,Te.height,0,Re,Ye,Te.data)}else if(_.isDataArrayTexture)if(Qe){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ce,fe.width,fe.height,fe.depth),V)if(_.layerUpdates.size>0){let le=uh(fe.width,fe.height,_.format,_.type);for(let Pe of _.layerUpdates){let Ue=fe.data.subarray(Pe*le/fe.data.BYTES_PER_ELEMENT,(Pe+1)*le/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,fe.width,fe.height,1,Re,Ye,Ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ye,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,Re,Ye,fe.data);else if(_.isData3DTexture)Qe?(at&&t.texStorage3D(i.TEXTURE_3D,Ie,Ce,fe.width,fe.height,fe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ye,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,Re,Ye,fe.data);else if(_.isFramebufferTexture){if(at)if(Qe)t.texStorage2D(i.TEXTURE_2D,Ie,Ce,fe.width,fe.height);else{let le=fe.width,Pe=fe.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ce,le,Pe,0,Re,Ye,null),le>>=1,Pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),fe.parentNode!==le){le.appendChild(fe),f.add(_),le.onpaint=Pe=>{let Ue=Pe.changedElements;for(let _e of f)Ue.includes(_e.image)&&(_e.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Ue=i.RGBA,_e=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,_e,Je,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&at){let le=ut(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ce,le.width,le.height)}for(let le=0,Pe=Ze.length;le<Pe;le++)Te=Ze[le],Qe?V&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Re,Ye,Te):t.texImage2D(i.TEXTURE_2D,le,Ce,Re,Ye,Te);_.generateMipmaps=!1}else if(Qe){if(at){let le=ut(fe);t.texStorage2D(i.TEXTURE_2D,Ie,Ce,le.width,le.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ye,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Re,Ye,fe);p(_)&&M(ee),Ee.__version=we.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function pe(C,_,Y){if(_.image.length!==6)return;let ee=me(C,_),re=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let we=n.get(re);if(re.version!==we.__version||ee===!0){t.activeTexture(i.TEXTURE0+Y);let Ee=_t.getPrimaries(_t.workingColorSpace),oe=_.colorSpace===Ti?null:_t.getPrimaries(_.colorSpace),fe=_.colorSpace===Ti||Ee===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Re=_.isCompressedTexture||_.image[0].isCompressedTexture,Ye=_.image[0]&&_.image[0].isDataTexture,Ce=[];for(let _e=0;_e<6;_e++)!Re&&!Ye?Ce[_e]=g(_.image[_e],!0,s.maxCubemapSize):Ce[_e]=Ye?_.image[_e].image:_.image[_e],Ce[_e]=Mt(_,Ce[_e]);let Te=Ce[0],Ze=r.convert(_.format,_.colorSpace),Qe=r.convert(_.type),at=y(_.internalFormat,Ze,Qe,_.normalized,_.colorSpace),V=_.isVideoTexture!==!0,Ie=we.__version===void 0||ee===!0,le=re.dataReady,Pe=E(_,Te);j(i.TEXTURE_CUBE_MAP,_);let Ue;if(Re){V&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,at,Te.width,Te.height);for(let _e=0;_e<6;_e++){Ue=Ce[_e].mipmaps;for(let Je=0;Je<Ue.length;Je++){let Xe=Ue[Je];_.format!==Ln?Ze!==null?V?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,0,0,Xe.width,Xe.height,Ze,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,at,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,0,0,Xe.width,Xe.height,Ze,Qe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,at,Xe.width,Xe.height,0,Ze,Qe,Xe.data)}}}else{if(Ue=_.mipmaps,V&&Ie){Ue.length>0&&Pe++;let _e=ut(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ye){V?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ce[_e].width,Ce[_e].height,Ze,Qe,Ce[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Ce[_e].width,Ce[_e].height,0,Ze,Qe,Ce[_e].data);for(let Je=0;Je<Ue.length;Je++){let Et=Ue[Je].image[_e].image;V?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,0,0,Et.width,Et.height,Ze,Qe,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,at,Et.width,Et.height,0,Ze,Qe,Et.data)}}else{V?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ze,Qe,Ce[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Ze,Qe,Ce[_e]);for(let Je=0;Je<Ue.length;Je++){let Xe=Ue[Je];V?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,0,0,Ze,Qe,Xe.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,at,Ze,Qe,Xe.image[_e])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),we.__version=re.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ve(C,_,Y,ee,re,we){let Ee=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),fe=y(Y.internalFormat,Ee,oe,Y.normalized,Y.colorSpace),Re=n.get(_),Ye=n.get(Y);if(Ye.__renderTarget=_,!Re.__hasExternalTextures){let Ce=Math.max(1,_.width>>we),Te=Math.max(1,_.height>>we);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,we,fe,Ce,Te,_.depth,0,Ee,oe,null):t.texImage2D(re,we,fe,Ce,Te,0,Ee,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),it(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,re,Ye.__webglTexture,0,Ke(_)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,re,Ye.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(C,_,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let ee=_.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,we=A(_.stencilBuffer,re),Ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(_),we,_.width,_.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(_),we,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,we,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,C)}else{let ee=_.textures;for(let re=0;re<ee.length;re++){let we=ee[re],Ee=r.convert(we.format,we.colorSpace),oe=r.convert(we.type),fe=y(we.internalFormat,Ee,oe,we.normalized,we.colorSpace);it(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(_),fe,_.width,_.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(_),fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(C,_,Y){let ee=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(_.depthTexture);if(re.__renderTarget=_,(!re.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee){if(re.__webglInit===void 0&&(re.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),j(i.TEXTURE_CUBE_MAP,_.depthTexture);let Re=r.convert(_.depthTexture.format),Ye=r.convert(_.depthTexture.type),Ce;_.depthTexture.format===jn?Ce=i.DEPTH_COMPONENT24:_.depthTexture.format===qi&&(Ce=i.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ce,_.width,_.height,0,Re,Ye,null)}}else xe(_.depthTexture,0);let we=re.__webglTexture,Ee=Ke(_),oe=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,fe=_.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===jn)it(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,oe,we,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,oe,we,0);else if(_.depthTexture.format===qi)it(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,oe,we,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,oe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(C){let _=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let ee=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){let re=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),_.__depthDisposeCallback=re}_.__boundDepthTexture=ee}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(Y)for(let ee=0;ee<6;ee++)je(_.__webglFramebuffer[ee],C,ee);else{let ee=C.texture.mipmaps;ee&&ee.length>0?je(_.__webglFramebuffer[0],C,0):je(_.__webglFramebuffer,C,0)}else if(Y){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=i.createRenderbuffer(),De(_.__webglDepthbuffer[ee],C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=_.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,we)}}else{let ee=C.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,C,!1);else{let re=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,_,Y){let ee=n.get(C);_!==void 0&&ve(ee.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&he(C)}function Me(C){let _=C.texture,Y=n.get(C),ee=n.get(_);C.addEventListener("dispose",x);let re=C.textures,we=C.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=_.version,a.memory.textures++),we){Y.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer[oe]=[];for(let fe=0;fe<_.mipmaps.length;fe++)Y.__webglFramebuffer[oe][fe]=i.createFramebuffer()}else Y.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)Y.__webglFramebuffer[oe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let oe=0,fe=re.length;oe<fe;oe++){let Re=n.get(re[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&it(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let oe=0;oe<re.length;oe++){let fe=re[oe];Y.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[oe]);let Re=r.convert(fe.format,fe.colorSpace),Ye=r.convert(fe.type),Ce=y(fe.internalFormat,Re,Ye,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),Te=Ke(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ce,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),j(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ve(Y.__webglFramebuffer[oe][fe],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ve(Y.__webglFramebuffer[oe],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,fe=re.length;oe<fe;oe++){let Re=re[oe],Ye=n.get(Re),Ce=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ye.__webglTexture),j(Ce,Re),ve(Y.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+oe,Ce,0),p(Re)&&M(Ce)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),j(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)ve(Y.__webglFramebuffer[fe],C,_,i.COLOR_ATTACHMENT0,oe,fe);else ve(Y.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,oe,0);p(_)&&M(oe),t.unbindTexture()}C.depthBuffer&&he(C)}function Se(C){let _=C.textures;for(let Y=0,ee=_.length;Y<ee;Y++){let re=_[Y];if(p(re)){let we=b(C),Ee=n.get(re).__webglTexture;t.bindTexture(we,Ee),M(we),t.unbindTexture()}}}let be=[],$e=[];function ke(C){if(C.samples>0){if(it(C)===!1){let _=C.textures,Y=C.width,ee=C.height,re=i.COLOR_BUFFER_BIT,we=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(C),oe=_.length>1;if(oe)for(let Re=0;Re<_.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let fe=C.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Re=0;Re<_.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);let Ye=n.get(_[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,re,i.NEAREST),l===!0&&(be.length=0,$e.length=0,be.push(i.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(be.push(we),$e.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<_.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);let Ye=n.get(_[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ke(C){return Math.min(s.maxSamples,C.samples)}function it(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Mt(C,_){let Y=C.colorSpace,ee=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Br&&Y!==Ti&&(_t.getTransfer(Y)===Tt?(ee!==Ln||re!==vn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",Y)),_}function ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.getTextureUnits=B,this.setTextureUnits=Z,this.setTexture2D=xe,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=de,this.rebindTextures=ge,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function __(i,e){function t(n,s=Ti){let r,a=_t.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qc)return i.BYTE;if(n===jc)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===Ln)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===_a||n===ya||n===va||n===Ma)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol||n===ll||n===cl||n===Sa||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Rl||n===ba||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:y_,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,v=typeof XRWebGLBinding<"u",g=new Th,p={},M=t.getContextAttributes(),b=null,y=null,A=[],E=[],w=new Ae,x=null,T=null,I=new un;I.viewport=new It;let F=new un;F.viewport=new It;let z=[I,F],q=new Wo,B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=A[U];return H===void 0&&(H=new er,A[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=A[U];return H===void 0&&(H=new er,A[U]=H),H.getGripSpace()},this.getHand=function(U){let H=A[U];return H===void 0&&(H=new er,A[U]=H),H.getHandSpace()};function te(U){let H=E.indexOf(U.inputSource);if(H===-1)return;let X=A[H];X!==void 0&&(X.update(U.inputSource,U.frame,c||a),X.dispatchEvent({type:U.type,data:U.inputSource}))}function ie(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",xe);for(let U=0;U<A.length;U++){let H=E[U];H!==null&&(E[U]=null,A[U].disconnect(H))}B=null,Z=null,g.reset();for(let U in p)delete p[U];if(e.setRenderTarget(b),d=null,u=null,f=null,s=null,y=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),T!==null){let U=T.camera;U.fov=T.fov,U.zoom=T.zoom,U.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",xe),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,pe=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=M.stencil?qi:jn,pe=M.stencil?dr:qn);let De={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new _n(u.textureWidth,u.textureHeight,{format:Ln,type:vn,depthTexture:new Fi(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let X={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new _n(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function xe(U){for(let H=0;H<U.removed.length;H++){let X=U.removed[H],pe=E.indexOf(X);pe>=0&&(E[pe]=null,A[pe].disconnect(X))}for(let H=0;H<U.added.length;H++){let X=U.added[H],pe=E.indexOf(X);if(pe===-1){for(let De=0;De<A.length;De++)if(De>=E.length){E.push(X),pe=De;break}else if(E[De]===null){E[De]=X,pe=De;break}if(pe===-1)break}let ve=A[pe];ve&&ve.connect(X)}}let se=new D,ae=new D;function de(U,H,X){se.setFromMatrixPosition(H.matrixWorld),ae.setFromMatrixPosition(X.matrixWorld);let pe=se.distanceTo(ae),ve=H.projectionMatrix.elements,De=X.projectionMatrix.elements,je=ve[14]/(ve[10]-1),he=ve[14]/(ve[10]+1),ge=(ve[9]+1)/ve[5],Me=(ve[9]-1)/ve[5],Se=(ve[8]-1)/ve[0],be=(De[8]+1)/De[0],$e=je*Se,ke=je*be,Ke=pe/(-Se+be),it=Ke*-Se;if(H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(it),U.translateZ(Ke),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ve[10]===-1)U.projectionMatrix.copy(H.projectionMatrix),U.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let O=je+Ke,Mt=he+Ke,ut=$e-it,C=ke+(pe-it),_=ge*he/Mt*O,Y=Me*he/Mt*O;U.projectionMatrix.makePerspective(ut,C,_,Y,O,Mt),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Ge(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let H=U.near,X=U.far;g.texture!==null&&(g.depthNear>0&&(H=g.depthNear),g.depthFar>0&&(X=g.depthFar)),q.near=F.near=I.near=H,q.far=F.far=I.far=X,(B!==q.near||Z!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),B=q.near,Z=q.far),q.layers.mask=U.layers.mask|6,I.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;let pe=U.parent,ve=q.cameras;Ge(q,pe);for(let De=0;De<ve.length;De++)Ge(ve[De],pe);ve.length===2?de(q,I,F):q.projectionMatrix.copy(I.projectionMatrix),T===null&&U.isPerspectiveCamera&&(T={camera:U,fov:U.fov,zoom:U.zoom}),R(U,q,pe)};function R(U,H,X){X===null?U.matrix.copy(H.matrixWorld):(U.matrix.copy(X.matrixWorld),U.matrix.invert(),U.matrix.multiply(H.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(H.projectionMatrix),U.projectionMatrixInverse.copy(H.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Qs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(U){return p[U]};let W=null;function j(U,H){if(h=H.getViewerPose(c||a),m=H,h!==null){let X=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let pe=!1;X.length!==q.cameras.length&&(q.cameras.length=0,pe=!0);for(let he=0;he<X.length;he++){let ge=X[he],Me=null;if(d!==null)Me=d.getViewport(ge);else{let be=f.getViewSubImage(u,ge);Me=be.viewport,he===0&&(e.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(y))}let Se=z[he];Se===void 0&&(Se=new un,Se.layers.enable(he),Se.viewport=new It,z[he]=Se),Se.matrix.fromArray(ge.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ge.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Me.x,Me.y,Me.width,Me.height),he===0&&(q.matrix.copy(Se.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),pe===!0&&q.cameras.push(Se)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let he=f.getDepthInformation(X[0]);he&&he.isValid&&he.texture&&g.init(he,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let he=0;he<X.length;he++){let ge=X[he].camera;if(ge){let Me=p[ge];Me||(Me=new Kr,p[ge]=Me);let Se=f.getCameraImage(ge);Me.sourceTexture=Se}}}}for(let X=0;X<A.length;X++){let pe=E[X],ve=A[X];pe!==null&&ve!==void 0&&ve.update(pe,H,c||a)}W&&W(U,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),m=null}let me=new Td;me.setAnimationLoop(j),this.setAnimationLoop=function(U){W=U},this.dispose=function(){}}},M_=new wt,Pd=new rt;Pd.set(-1,0,0,0,1,0,0,0,1);function S_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,lh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),b=M.envMap,y=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){let E=A.program;n.uniformBlockBinding(y,E)}function c(y,A){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",M));let w=A.program;n.updateUBOMapping(y,w);let x=e.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let A=f();y.__bindingPointIndex=A;let E=i.createBuffer(),w=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let A=s[y.id],E=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,T=E.length;x<T;x++){let I=E[x];if(Array.isArray(I))for(let F=0,z=I.length;F<z;F++)d(I[F],x,F,w);else d(I,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,A,E,w){if(v(y,A,E,w)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let F=0;F<T.length;F++){let z=T[F],q=p(z);m(z,y.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function m(y,A,E){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,E)}function v(y,A,E,w){let x=y.value,T=A+"_"+E;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let I=w[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function g(y){let A=y.uniforms,E=0,w=16;for(let T=0,I=A.length;T<I;T++){let F=Array.isArray(A[T])?A[T]:[A[T]];for(let z=0,q=F.length;z<q;z++){let B=F[z],Z=Array.isArray(B.value)?B.value:[B.value];for(let te=0,ie=Z.length;te<ie;te++){let xe=Z[te],se=p(xe),ae=E%w,de=ae%se.boundary,Ge=ae+de;E+=de,Ge!==0&&w-Ge<se.storage&&(E+=w-Ge),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=se.storage}}}let x=E%w;return x>0&&(E+=w-x),y.__size=E,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",y),A}function M(y){let A=y.target;A.removeEventListener("dispose",M);let E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function T_(){return ri===null&&(ri=new Zr(w_,16,16,Yi,Yn),ri.name="DFG_LUT",ri.minFilter=Qt,ri.magFilter=Qt,ri.wrapS=Kn,ri.wrapT=Kn,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var kl=class{constructor(e={}){let{canvas:t=qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=d,g=new Set([el,jo,Qo]),p=new Set([vn,qn,ur,dr,Jo,$o]),M=new Uint32Array(4),b=new Int32Array(4),y=new D,A=null,E=null,w=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,z=null,q=null,B=null,Z=null;this._outputColorSpace=qt;let te=0,ie=0,xe=null,se=-1,ae=null,de=new It,Ge=new It,R=null,W=new lt(0),j=0,me=t.width,U=t.height,H=1,X=null,pe=null,ve=new It(0,0,me,U),De=new It(0,0,me,U),je=!1,he=new nr,ge=!1,Me=!1,Se=new wt,be=new D,$e=new It,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function it(){return xe===null?H:1}let O=n;function Mt(S,k){return t.getContext(S,k)}let ut,C,_,Y,ee,re,we,Ee,oe,fe,Re,Ye,Ce,Te,Ze,Qe,at,V,Ie,le,Pe,Ue,_e;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",rn,!1),O===null){let k="webgl2";if(O=Mt(k,S),O===null)throw Mt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(S){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),nt("WebGLRenderer: "+S.message),S}function Je(){ut=new L0(O),ut.init(),Pe=new __(O,ut),C=new S0(O,ut,e,Pe),_=new g_(O,ut),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),q=O.createFramebuffer(),B=O.createFramebuffer(),Z=O.createFramebuffer(),Y=new N0(O),ee=new n_,re=new x_(O,ut,_,ee,C,Pe,Y),we=new P0(I),Ee=new Op(O),Ue=new v0(O,Ee),oe=new D0(O,Ee,Y,Ue),fe=new O0(O,oe,Ee,Ue,Y),V=new F0(O,C,re),Ze=new b0(ee),Re=new t_(I,we,ut,C,Ue,Ze),Ye=new S_(I,ee),Ce=new s_,Te=new h_(ut),at=new y0(I,we,_,fe,m,l),Qe=new m_(I,fe,C),_e=new b_(O,Y,C,_),Ie=new M0(O,ut,Y),le=new U0(O,ut,Y),Y.programs=Re.programs,I.capabilities=C,I.extensions=ut,I.properties=ee,I.renderLists=Ce,I.shadowMap=Qe,I.state=_,I.info=Y}v!==vn&&(T=new k0(v,t.width,t.height,o,s,r));let Xe=new Ah(I,O);this.xr=Xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(me,U,!1))},this.getSize=function(S){return S.set(me,U)},this.setSize=function(S,k,ne=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=S,U=k,t.width=Math.floor(S*H),t.height=Math.floor(k*H),ne===!0&&(t.style.width=S+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(me*H,U*H).floor()},this.setDrawingBufferSize=function(S,k,ne){me=S,U=k,H=ne,t.width=Math.floor(S*ne),t.height=Math.floor(k*ne),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(v===vn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(de)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,k,ne,K){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,k,ne,K),_.viewport(de.copy(ve).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,k,ne,K){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,k,ne,K),_.scissor(Ge.copy(De).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){_.setScissorTest(je=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,ne=!0){let K=0;if(S){let Q=!1;if(xe!==null){let Le=xe.texture.format;Q=g.has(Le)}if(Q){let Le=xe.texture.type,Oe=p.has(Le),Ne=at.getClearColor(),ze=at.getClearAlpha(),qe=Ne.r,ot=Ne.g,dt=Ne.b;Oe?(M[0]=qe,M[1]=ot,M[2]=dt,M[3]=ze,O.clearBufferuiv(O.COLOR,0,M)):(b[0]=qe,b[1]=ot,b[2]=dt,b[3]=ze,O.clearBufferiv(O.COLOR,0,b))}else K|=O.COLOR_BUFFER_BIT}k&&(K|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),at.dispose(),Ce.dispose(),Te.dispose(),ee.dispose(),we.dispose(),fe.dispose(),Ue.dispose(),_e.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Es),Xe.removeEventListener("sessionend",Cs),mn.stop()};function Et(S){S.preventDefault(),rh("WebGLRenderer: Context Lost."),F=!0}function St(){rh("WebGLRenderer: Context Restored."),F=!1;let S=Y.autoReset,k=Qe.enabled,ne=Qe.autoUpdate,K=Qe.needsUpdate,Q=Qe.type;Je(),Y.autoReset=S,Qe.enabled=k,Qe.autoUpdate=ne,Qe.needsUpdate=K,Qe.type=Q}function rn(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){let k=S.target;k.removeEventListener("dispose",zt),Ua(k)}function Ua(S){Na(S),ee.remove(S)}function Na(S){let k=ee.get(S).programs;k!==void 0&&(k.forEach(function(ne){Re.releaseProgram(ne)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,ne,K,Q,Le){k===null&&(k=ke);let Oe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ne=is(S,k,ne,K,Q);_.setMaterial(K,Oe);let ze=ne.index,qe=1;if(K.wireframe===!0){if(ze=oe.getWireframeAttribute(ne),ze===void 0)return;qe=2}let ot=ne.drawRange,dt=ne.attributes.position,He=ot.start*qe,bt=(ot.start+ot.count)*qe;Le!==null&&(He=Math.max(He,Le.start*qe),bt=Math.min(bt,(Le.start+Le.count)*qe)),ze!==null?(He=Math.max(He,0),bt=Math.min(bt,ze.count)):dt!=null&&(He=Math.max(He,0),bt=Math.min(bt,dt.count));let Pt=bt-He;if(Pt<0||Pt===1/0)return;Ue.setup(Q,K,Ne,ne,ze);let P,G=Ie;if(ze!==null&&(P=Ee.get(ze),G=le,G.setIndex(P)),Q.isMesh)K.wireframe===!0?(_.setLineWidth(K.wireframeLinewidth*it()),G.setMode(O.LINES)):G.setMode(O.TRIANGLES);else if(Q.isLine){let N=K.linewidth;N===void 0&&(N=1),_.setLineWidth(N*it()),Q.isLineSegments?G.setMode(O.LINES):Q.isLineLoop?G.setMode(O.LINE_LOOP):G.setMode(O.LINE_STRIP)}else Q.isPoints?G.setMode(O.POINTS):Q.isSprite&&G.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))G.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let N=Q._multiDrawStarts,L=Q._multiDrawCounts,ue=Q._multiDrawCount,$=ze?Ee.get(ze).bytesPerElement:1,ye=ee.get(K).currentProgram.getUniforms();for(let Be=0;Be<ue;Be++)ye.setValue(O,"_gl_DrawID",Be),G.render(N[Be]/$,L[Be])}else if(Q.isInstancedMesh)G.renderInstances(He,Pt,Q.count);else if(ne.isInstancedBufferGeometry){let N=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,L=Math.min(ne.instanceCount,N);G.renderInstances(He,Pt,L)}else G.render(He,Pt)};function es(S,k,ne,K){z!==null&&S.isNodeMaterial&&z.setObject(K,S),ge===!0&&Ze.setState(S,ne,!1),S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,di(S,k,K),S.side=Hi,S.needsUpdate=!0,di(S,k,K),S.side=Jt):di(S,k,K)}this.compile=function(S,k,ne=null){ne===null&&(ne=S),z!==null&&z.renderStart(S,k,ne),E=Te.get(ne),E.init(k),x.push(E),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),S!==ne&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(k.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Me=this.localClippingEnabled,ge=Ze.init(this.clippingPlanes,Me),ge===!0&&Ze.setGlobalState(this.clippingPlanes,k),z!==null&&Qe.render(E.state.shadowsArray,ne,k);let K=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Le=Q.material;if(Le)if(Array.isArray(Le))for(let Oe=0;Oe<Le.length;Oe++){let Ne=Le[Oe];es(Ne,ne,k,Q),K.add(Ne)}else es(Le,ne,k,Q),K.add(Le)}),E=x.pop(),z!==null&&z.renderEnd(),K},this.compileAsync=function(S,k,ne=null){let K=this.compile(S,k,ne);return new Promise(Q=>{function Le(){if(K.forEach(function(Oe){let ze=ee.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&K.delete(Oe)}),K.size===0){Q(S);return}setTimeout(Le,10)}ut.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let As=null;function jl(S){As&&As(S)}function Es(){mn.stop()}function Cs(){mn.start()}let mn=new Td;mn.setAnimationLoop(jl),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(S){As=S,Xe.setAnimationLoop(S),S===null?mn.stop():mn.start()},Xe.addEventListener("sessionstart",Es),Xe.addEventListener("sessionend",Cs),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(S,k);let ne=Xe.enabled===!0&&Xe.isPresenting===!0,K=T!==null&&(xe===null||ne)&&T.begin(I,xe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(k),k=Xe.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,k,xe),E=Te.get(S,x.length),E.init(k),E.state.textureUnits=re.getTextureUnits(),x.push(E),Se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),he.setFromProjectionMatrix(Se,Hn,k.reversedDepth),Me=this.localClippingEnabled,ge=Ze.init(this.clippingPlanes,Me),A=Ce.get(S,w.length),A.init(),w.push(A),Xe.enabled===!0&&Xe.isPresenting===!0){let Oe=I.xr.getDepthSensingMesh();Oe!==null&&Nn(Oe,k,-1/0,I.sortObjects)}Nn(S,k,0,I.sortObjects),A.finish(),z!==null&&z.updateLights(E.state.lightsArray),I.sortObjects===!0&&A.sort(X,pe),Ke=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ke&&at.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Ze.beginShadows();let Q=E.state.shadowsArray;if(Qe.render(Q,S,k),ge===!0&&Ze.endShadows(),(K&&T.hasRenderPass())===!1){let Oe=A.opaque,Ne=A.transmissive;if(E.setupLights(),k.isArrayCamera){let ze=k.cameras;if(Ne.length>0)for(let qe=0,ot=ze.length;qe<ot;qe++){let dt=ze[qe];ts(Oe,Ne,S,dt)}Ke&&at.render(S);for(let qe=0,ot=ze.length;qe<ot;qe++){let dt=ze[qe];ui(A,S,dt,dt.viewport)}}else Ne.length>0&&ts(Oe,Ne,S,k),Ke&&at.render(S),ui(A,S,k)}xe!==null&&ie===0&&(re.updateMultisampleRenderTarget(xe),re.updateRenderTargetMipmap(xe)),K&&T.end(I),S.isScene===!0&&S.onAfterRender(I,S,k),Ue.resetDefaultState(),se=-1,ae=null,x.pop(),x.length>0?(E=x[x.length-1],re.setTextureUnits(E.state.textureUnits),ge===!0&&Ze.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,z!==null&&z.renderEnd()};function Nn(S,k,ne,K){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)ne=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(he)){K&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);let Oe=fe.update(S),Ne=S.material;Ne.visible&&A.push(S,Oe,Ne,ne,$e.z,null,k)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(he))){let Oe=fe.update(S),Ne=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),$e.copy(Oe.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(Ne)){let ze=Oe.groups;for(let qe=0,ot=ze.length;qe<ot;qe++){let dt=ze[qe],He=Ne[dt.materialIndex];He&&He.visible&&A.push(S,Oe,He,ne,$e.z,dt,k)}}else Ne.visible&&A.push(S,Oe,Ne,ne,$e.z,null,k)}}let Le=S.children;for(let Oe=0,Ne=Le.length;Oe<Ne;Oe++)Nn(Le[Oe],k,ne,K)}function ui(S,k,ne,K){let{opaque:Q,transmissive:Le,transparent:Oe}=S;E.setupLightsView(ne),ge===!0&&Ze.setGlobalState(I.clippingPlanes,ne),K&&_.viewport(de.copy(K)),Q.length>0&&Fn(Q,k,ne),Le.length>0&&Fn(Le,k,ne),Oe.length>0&&Fn(Oe,k,ne),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ts(S,k,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let He=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new _n(1,1,{generateMipmaps:!0,type:He?Yn:vn,minFilter:Xi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Le=E.state.transmissionRenderTarget[K.id],Oe=K.viewport||de;Le.setSize(Oe.z*I.transmissionResolutionScale,Oe.w*I.transmissionResolutionScale);let Ne=I.getRenderTarget(),ze=I.getActiveCubeFace(),qe=I.getActiveMipmapLevel();I.setRenderTarget(Le),I.getClearColor(W),j=I.getClearAlpha(),j<1&&I.setClearColor(16777215,.5),I.clear(),Ke&&at.render(ne);let ot=I.toneMapping;I.toneMapping=Xn;let dt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),ge===!0&&Ze.setGlobalState(I.clippingPlanes,K),Fn(S,ne,K),re.updateMultisampleRenderTarget(Le),re.updateRenderTargetMipmap(Le),ut.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let bt=0,Pt=k.length;bt<Pt;bt++){let P=k[bt],{object:G,geometry:N,material:L,group:ue}=P;if(L.side===Jt&&G.layers.test(K.layers)){let $=L.side;L.side=pn,L.needsUpdate=!0,ns(G,ne,K,N,L,ue),L.side=$,L.needsUpdate=!0,He=!0}}He===!0&&(re.updateMultisampleRenderTarget(Le),re.updateRenderTargetMipmap(Le))}I.setRenderTarget(Ne,ze,qe),I.setClearColor(W,j),dt!==void 0&&(K.viewport=dt),I.toneMapping=ot}function Fn(S,k,ne){let K=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Le=S.length;Q<Le;Q++){let Oe=S[Q],{object:Ne,geometry:ze,group:qe}=Oe,ot=Oe.material;ot.allowOverride===!0&&K!==null&&(ot=K),Ne.layers.test(ne.layers)&&ns(Ne,k,ne,ze,ot,qe)}}function ns(S,k,ne,K,Q,Le){z!==null&&Q.isNodeMaterial&&z.setObject(S,Q),S.onBeforeRender(I,k,ne,K,Q,Le),S.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(I,k,ne,K,S,Le),Q.transparent===!0&&Q.side===Jt&&Q.forceSinglePass===!1?(Q.side=pn,Q.needsUpdate=!0,I.renderBufferDirect(ne,k,K,Q,S,Le),Q.side=Hi,Q.needsUpdate=!0,I.renderBufferDirect(ne,k,K,Q,S,Le),Q.side=Jt):I.renderBufferDirect(ne,k,K,Q,S,Le),S.onAfterRender(I,k,ne,K,Q,Le)}function di(S,k,ne){k.isScene!==!0&&(k=ke);let K=ee.get(S),Q=E.state.lights,Le=E.state.shadowsArray,Oe=Q.state.version,Ne=Re.getParameters(S,Q.state,Le,k,ne,E.state.lightProbeGridArray),ze=Re.getProgramCacheKey(Ne),qe=K.programs;K.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;K.envMap=we.get(S.envMap||K.environment,ot),K.envMapRotation=K.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",zt),qe=new Map,K.programs=qe);let dt=qe.get(ze);if(dt!==void 0){if(K.currentProgram===dt&&K.lightsStateVersion===Oe)return wr(S,Ne),dt}else Ne.uniforms=Re.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,ne,Ne),S.onBeforeCompile(Ne,I),dt=Re.acquireProgram(Ne,ze),qe.set(ze,dt),K.uniforms=Ne.uniforms;let He=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Ze.uniform),wr(S,Ne),K.needsLights=ec(S),K.lightsStateVersion=Oe,K.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.sunLights.value=Q.state.sun,He.sunLightShadows.value=Q.state.sunShadow,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.sunShadowMatrix.value=Q.state.sunShadowMatrix,He.sunShadowCascade.value=Q.state.sunShadowCascade,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.lightProbeGrid=E.state.lightProbeGridArray.length>0,K.currentProgram=dt,K.uniformsList=null,dt}function Rs(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function wr(S,k){let ne=ee.get(S);ne.outputColorSpace=k.outputColorSpace,ne.batching=k.batching,ne.batchingColor=k.batchingColor,ne.instancing=k.instancing,ne.instancingColor=k.instancingColor,ne.instancingMorph=k.instancingMorph,ne.skinning=k.skinning,ne.morphTargets=k.morphTargets,ne.morphNormals=k.morphNormals,ne.morphColors=k.morphColors,ne.morphTargetsCount=k.morphTargetsCount,ne.numClippingPlanes=k.numClippingPlanes,ne.numIntersection=k.numClipIntersection,ne.vertexAlphas=k.vertexAlphas,ne.vertexTangents=k.vertexTangents,ne.toneMapping=k.toneMapping}function Vt(S,k){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let ne=0,K=S.length;ne<K;ne++){let Q=S[ne];if(Q.texture!==null&&Q.boundingBox.containsPoint(y))return Q}return null}function is(S,k,ne,K,Q){k.isScene!==!0&&(k=ke),re.resetTextureUnits();let Le=k.fog,Oe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,Ne=xe===null?I.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:_t.workingColorSpace,ze=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,qe=we.get(K.envMap||Oe,ze),ot=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,dt=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,Pt=!!ne.morphAttributes.color,P=Xn;K.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(P=I.toneMapping);let G=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,N=G!==void 0?G.length:0,L=ee.get(K),ue=E.state.lights;if(ge===!0&&(Me===!0||S!==ae)){let vt=S===ae&&K.id===se;Ze.setState(K,S,vt)}let $=!1;K.version===L.__version?(L.needsLights&&L.lightsStateVersion!==ue.state.version||L.outputColorSpace!==Ne||Q.isBatchedMesh&&L.batching===!1||!Q.isBatchedMesh&&L.batching===!0||Q.isBatchedMesh&&L.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&L.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&L.instancing===!1||!Q.isInstancedMesh&&L.instancing===!0||Q.isSkinnedMesh&&L.skinning===!1||!Q.isSkinnedMesh&&L.skinning===!0||Q.isInstancedMesh&&L.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&L.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&L.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&L.instancingMorph===!1&&Q.morphTexture!==null||L.envMap!==qe||K.fog===!0&&L.fog!==Le||L.numClippingPlanes!==void 0&&(L.numClippingPlanes!==Ze.numPlanes||L.numIntersection!==Ze.numIntersection)||L.vertexAlphas!==ot||L.vertexTangents!==dt||L.morphTargets!==He||L.morphNormals!==bt||L.morphColors!==Pt||L.toneMapping!==P||L.morphTargetsCount!==N||!!L.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($=!0):($=!0,L.__version=K.version);let ye=L.currentProgram;$===!0&&(ye=di(K,k,Q),z&&K.isNodeMaterial&&z.onUpdateProgram(K,ye,L));let Be=!1,st=!1,xt=!1,We=ye.getUniforms(),ct=L.uniforms;if(_.useProgram(ye.program)&&(Be=!0,st=!0,xt=!0),K.id!==se&&(se=K.id,st=!0),L.needsLights){let vt=Vt(E.state.lightProbeGridArray,Q);L.lightProbeGrid!==vt&&(L.lightProbeGrid=vt,st=!0)}if(Be||ae!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),We.setValue(O,"projectionMatrix",S.projectionMatrix),We.setValue(O,"viewMatrix",S.matrixWorldInverse);let an=We.map.cameraPosition;an!==void 0&&an.setValue(O,be.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&We.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&We.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),ae!==S&&(ae=S,st=!0,xt=!0)}if(L.needsLights&&(ue.state.sunShadowMap.length>0&&We.setValue(O,"sunShadowMap",ue.state.sunShadowMap,re),ue.state.directionalShadowMap.length>0&&We.setValue(O,"directionalShadowMap",ue.state.directionalShadowMap,re),ue.state.spotShadowMap.length>0&&We.setValue(O,"spotShadowMap",ue.state.spotShadowMap,re),ue.state.pointShadowMap.length>0&&We.setValue(O,"pointShadowMap",ue.state.pointShadowMap,re)),Q.isSkinnedMesh){We.setOptional(O,Q,"bindMatrix"),We.setOptional(O,Q,"bindMatrixInverse");let vt=Q.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),We.setValue(O,"boneTexture",vt.boneTexture,re))}Q.isBatchedMesh&&(We.setOptional(O,Q,"batchingTexture"),We.setValue(O,"batchingTexture",Q._matricesTexture,re),We.setOptional(O,Q,"batchingIdTexture"),We.setValue(O,"batchingIdTexture",Q._indirectTexture,re),We.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&We.setValue(O,"batchingColorTexture",Q._colorsTexture,re));let Nt=ne.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&V.update(Q,ne,ye),(st||L.receiveShadow!==Q.receiveShadow)&&(L.receiveShadow=Q.receiveShadow,We.setValue(O,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(ct.envMapIntensity.value=k.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=T_()),st){if(We.setValue(O,"toneMappingExposure",I.toneMappingExposure),L.needsLights&&Ri(ct,xt),Le&&K.fog===!0&&Ye.refreshFogUniforms(ct,Le),Ye.refreshMaterialUniforms(ct,K,H,U,E.state.transmissionRenderTarget[S.id]),L.needsLights&&L.lightProbeGrid){let vt=L.lightProbeGrid;ct.probesSH.value=vt.texture,ct.probesMin.value.copy(vt.boundingBox.min),ct.probesMax.value.copy(vt.boundingBox.max),ct.probesResolution.value.copy(vt.resolution)}mr.upload(O,Rs(L),ct,re)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(mr.upload(O,Rs(L),ct,re),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&We.setValue(O,"center",Q.center),We.setValue(O,"modelViewMatrix",Q.modelViewMatrix),We.setValue(O,"normalMatrix",Q.normalMatrix),We.setValue(O,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){let vt=K.uniformsGroups;for(let an=0,on=vt.length;an<on;an++){let Ve=vt[an];_e.update(Ve,ye),_e.bind(Ve,ye)}}return ye}function Ri(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function ec(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(S,k,ne){let K=ee.get(S);K.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ee.get(S.texture).__webglTexture=k,ee.get(S.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let ne=ee.get(S);ne.__webglFramebuffer=k,ne.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,ne=0){xe=S,te=k,ie=ne;let K=null,Q=!1,Le=!1;if(S){let Ne=ee.get(S);if(Ne.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,Ne.__webglFramebuffer),de.copy(S.viewport),Ge.copy(S.scissor),R=S.scissorTest,_.viewport(de),_.scissor(Ge),_.setScissorTest(R),se=-1;return}else if(Ne.__webglFramebuffer===void 0)re.setupRenderTarget(S);else if(Ne.__hasExternalTextures)re.rebindTextures(S,ee.get(S.texture).__webglTexture,ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ot=S.depthTexture;if(Ne.__boundDepthTexture!==ot){if(ot!==null&&ee.has(ot)&&(S.width!==ot.image.width||S.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(S)}}let ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);let qe=ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[k])?K=qe[k][ne]:K=qe[k],Q=!0):S.samples>0&&re.useMultisampledRTT(S)===!1?K=ee.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?K=qe[ne]:K=qe,de.copy(S.viewport),Ge.copy(S.scissor),R=S.scissorTest}else de.copy(ve).multiplyScalar(H).floor(),Ge.copy(De).multiplyScalar(H).floor(),R=je;if(ne!==0&&(K=q),_.bindFramebuffer(O.FRAMEBUFFER,K)&&_.drawBuffers(S,K),_.viewport(de),_.scissor(Ge),_.setScissorTest(R),Q){let Ne=ee.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,ne)}else if(Le){let Ne=k;for(let ze=0;ze<S.textures.length;ze++){let qe=ee.get(S.textures[ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ze,qe.__webglTexture,ne,Ne)}}else if(S!==null&&ne!==0){let Ne=ee.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,ne)}se=-1};function Is(S){let k=ee.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=C.textureFormatReadable(S.format),k.__typeReadable=C.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,ne,K,Q,Le,Oe,Ne=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){_.bindFramebuffer(O.FRAMEBUFFER,ze);try{let qe=S.textures[Ne],ot=qe.format,dt=qe.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ne);let He=Is(qe);if(He.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-K&&ne>=0&&ne<=S.height-Q&&O.readPixels(k,ne,K,Q,Pe.convert(ot),Pe.convert(dt),Le)}finally{let qe=xe!==null?ee.get(xe).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(S,k,ne,K,Q,Le,Oe,Ne=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(k>=0&&k<=S.width-K&&ne>=0&&ne<=S.height-Q){_.bindFramebuffer(O.FRAMEBUFFER,ze);let qe=S.textures[Ne],ot=qe.format,dt=qe.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ne);let He=Is(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.bufferData(O.PIXEL_PACK_BUFFER,Le.byteLength,O.STREAM_READ),O.readPixels(k,ne,K,Q,Pe.convert(ot),Pe.convert(dt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Pt=xe!==null?ee.get(xe).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Pt);let P=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Zu(O,P,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Le),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(bt),O.deleteSync(P),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,ne=0){let K=Math.pow(2,-ne),Q=Math.floor(S.image.width*K),Le=Math.floor(S.image.height*K),Oe=k!==null?k.x:0,Ne=k!==null?k.y:0;re.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,ne,0,0,Oe,Ne,Q,Le),_.unbindTexture()},this.copyTextureToTexture=function(S,k,ne=null,K=null,Q=0,Le=0){let Oe,Ne,ze,qe,ot,dt,He,bt,Pt,P=S.isCompressedTexture?S.mipmaps[Le]:S.image;if(ne!==null)Oe=ne.max.x-ne.min.x,Ne=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,qe=ne.min.x,ot=ne.min.y,dt=ne.isBox3?ne.min.z:0;else{let ct=Math.pow(2,-Q);Oe=Math.floor(P.width*ct),Ne=Math.floor(P.height*ct),S.isDataArrayTexture?ze=P.depth:S.isData3DTexture?ze=Math.floor(P.depth*ct):ze=1,qe=0,ot=0,dt=0}K!==null?(He=K.x,bt=K.y,Pt=K.z):(He=0,bt=0,Pt=0);let G=Pe.convert(k.format),N=Pe.convert(k.type),L;k.isData3DTexture?(re.setTexture3D(k,0),L=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(re.setTexture2DArray(k,0),L=O.TEXTURE_2D_ARRAY):(re.setTexture2D(k,0),L=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let ue=_.getParameter(O.UNPACK_ROW_LENGTH),$=_.getParameter(O.UNPACK_IMAGE_HEIGHT),ye=_.getParameter(O.UNPACK_SKIP_PIXELS),Be=_.getParameter(O.UNPACK_SKIP_ROWS),st=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,P.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,P.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),_.pixelStorei(O.UNPACK_SKIP_ROWS,ot),_.pixelStorei(O.UNPACK_SKIP_IMAGES,dt);let xt=S.isDataArrayTexture||S.isData3DTexture,We=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let ct=ee.get(S),Nt=ee.get(k),vt=ee.get(ct.__renderTarget),an=ee.get(Nt.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,vt.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let on=0;on<ze;on++)xt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ee.get(S).__webglTexture,Q,dt+on),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ee.get(k).__webglTexture,Le,Pt+on)),O.blitFramebuffer(qe,ot,Oe,Ne,He,bt,Oe,Ne,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||ee.has(S)){let ct=ee.get(S),Nt=ee.get(k);_.bindFramebuffer(O.READ_FRAMEBUFFER,B),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let vt=0;vt<ze;vt++)xt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ct.__webglTexture,Q,dt+vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ct.__webglTexture,Q),We?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,Le,Pt+vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,Le),Q!==0?O.blitFramebuffer(qe,ot,Oe,Ne,He,bt,Oe,Ne,O.COLOR_BUFFER_BIT,O.NEAREST):We?O.copyTexSubImage3D(L,Le,He,bt,Pt+vt,qe,ot,Oe,Ne):O.copyTexSubImage2D(L,Le,He,bt,qe,ot,Oe,Ne);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else We?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(L,Le,He,bt,Pt,Oe,Ne,ze,G,N,P.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(L,Le,He,bt,Pt,Oe,Ne,ze,G,P.data):O.texSubImage3D(L,Le,He,bt,Pt,Oe,Ne,ze,G,N,P):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Le,He,bt,Oe,Ne,G,N,P.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Le,He,bt,P.width,P.height,G,P.data):O.texSubImage2D(O.TEXTURE_2D,Le,He,bt,Oe,Ne,G,N,P);_.pixelStorei(O.UNPACK_ROW_LENGTH,ue),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$),_.pixelStorei(O.UNPACK_SKIP_PIXELS,ye),_.pixelStorei(O.UNPACK_SKIP_ROWS,Be),_.pixelStorei(O.UNPACK_SKIP_IMAGES,st),Le===0&&k.generateMipmaps&&O.generateMipmap(L),_.unbindTexture()},this.initRenderTarget=function(S){ee.get(S).__webglFramebuffer===void 0&&re.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?re.setTextureCube(S,0):S.isData3DTexture?re.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?re.setTexture2DArray(S,0):re.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){te=0,ie=0,xe=null,_.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Ea=new D;function Dn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ea.copy(e),Ea[n]=0,Ea.normalize();let c=.5*a/(a+o),h=1-Ea.angleTo(i)/l;return Math.sign(Ea[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ca=class i extends Oi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,v=new D,g=.5/a;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[M+0]=Dn(v,c,"z","y",r,n),d[M+1]=1-Dn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[M+0]=1-Dn(v,c,"z","y",r,n),d[M+1]=1-Dn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[M+0]=1-Dn(v,c,"x","z",r,e),d[M+1]=Dn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[M+0]=1-Dn(v,c,"x","z",r,e),d[M+1]=1-Dn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[M+0]=1-Dn(v,c,"x","y",r,e),d[M+1]=1-Dn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[M+0]=Dn(v,c,"x","y",r,e),d[M+1]=1-Dn(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Ld({scene:i,camera:e,board:t,reduced:n,getRoom:s,diagnostics:r}){let o=new At,l=new Ot,c=new D,h=e.position.clone(),f=new yn;for(let w=0;w<10;w++){let x=w*Math.PI/5,T=w%2?.045:.1;w?f.lineTo(Math.cos(x)*T,Math.sin(x)*T):f.moveTo(Math.cos(x)*T,Math.sin(x)*T)}f.closePath();let u=[new fs(f),new wn(1,6,4),new wn(1,6,4)],d=["#ffe67c","#80cf5a","#efdfb8"].map(w=>new fn({color:w,transparent:!0,depthWrite:!1,side:Jt})),m=[6,6,4],v=m.map((w,x)=>{let T=new Wn(u[x],d[x],w);return T.instanceMatrix.setUsage(Zi),T.frustumCulled=!1,o.add(T),T});o.visible=!1,i.add(o);let g=document.createElement("div");g.className="capture-callout",g.hidden=!0,g.setAttribute("aria-hidden","true"),t.append(g);let p=["\u0D2A\u0D3F\u0D1F\u0D3F\u0D1A\u0D4D\u0D1A\u0D47! \u{1F43E}","\u0D35\u0D40\u0D1F\u0D4D\u0D1F\u0D3F\u0D7D \u0D2A\u0D4B\u0D1F\u0D3E! \u{1F602}","\u0D35\u0D40\u0D23\u0D4D\u0D1F\u0D41\u0D02 \u0D35\u0D3E! \u{1F61C}"],M=null;function b(){M=null,o.visible=!1,g.hidden=!0,e.position.copy(h),r.capture=null}function y(w,x){b(),!(!w.captured.length||!s())&&(M={started:performance.now(),room:s().code,revision:s().game.revision,seat:w.seat,token:w.token,victims:new Set(w.captured.map(T=>T.seat+"-"+T.token)),point:x},o.position.set(x.x,.65,x.z),g.textContent=p[(w.id%p.length+p.length)%p.length],g.hidden=!1)}function A(w){if(!M)return;let x=s(),T=(w-M.started)/1e3;if(x?.code!==M.room||!x.game||x.game.revision<M.revision||T>=1350/1e3){b();return}let I=!n.matches;o.visible=I&&T<.85,e.position.x=h.x+(I&&T<.16?Math.sin(T*90)*.035*(1-T/.16):0);let F=Math.max(0,1-T/.85);o.visible&&v.forEach((z,q)=>{z.material.opacity=F*(q===2?.45:1);for(let B=0;B<m[q];B++){let Z=B*Math.PI*2/m[q]+q*.35,te=.14+T*(q===2?.7:1.45);l.position.set(Math.cos(Z)*te,q===2?.02:Math.sin(Math.min(1,T/.85)*Math.PI)*.65+.13,Math.sin(Z)*te),q===0?(l.quaternion.copy(e.quaternion),l.rotateZ(T*6+B),l.scale.setScalar(1.4)):(l.rotation.set(T*5+B,Z,T*3),l.scale.set(q===1?.12:.16,q===1?.025:.14,q===1?.22:.16)),l.updateMatrix(),z.setMatrixAt(B,l.matrix)}z.instanceMatrix.needsUpdate=!0}),c.set(M.point.x,2.45,M.point.z).project(e),g.style.left=Math.max(25,Math.min(75,(c.x*.5+.5)*100))+"%",g.style.top=Math.max(26,Math.min(65,(-c.y*.5+.5)*100))+"%",r.capture={seat:M.seat,token:M.token,victims:[...M.victims],age:T,routine:["belly-laugh","clap","head-wiggle","wink"][M.seat],particles:o.visible?16:0,reducedMotion:!I,poses:[]}}function E(w,x){if(!M||n.matches)return;let T=(x-M.started)/1e3,I=Math.min(1,T/.1,(1.35-T)/.2);if(w.seat===M.seat&&w.token===M.token){w.ring.visible=!0,w.halo.visible=!0;let F=Math.max(0,Math.sin(T*14))*.11*I;w.body.position.y+=F+(T<.3?Math.sin(T/.3*Math.PI)*.25:0),w.seat===0?(w.body.rotation.x=Math.sin(T*17)*.12*I,w.body.scale.y=1-Math.abs(Math.sin(T*17))*.06*I,w.head.rotation.x-=Math.abs(Math.sin(T*17))*.1*I,w.arms.forEach((z,q)=>z.rotation.z=(q?1:-1)*(.8+Math.sin(T*17)*.35)*I)):w.seat===1?(w.arms.forEach((z,q)=>z.rotation.z=(q?1:-1)*(1.15+Math.sin(T*20)*.55)*I),w.body.rotation.z=Math.sin(T*12)*.08*I):w.seat===2?(w.head.rotation.z=Math.sin(T*22)*.2*I,w.head.rotation.y=Math.sin(T*15)*.23*I,w.arms.forEach((z,q)=>z.rotation.z=(q?1:-1)*1.25*I)):(w.head.rotation.z=-.16*I,w.arms[1].rotation.z=(1.8+Math.sin(T*18)*.25)*I,T>.5&&T<1.05&&(w.eyeParts[1].pupil.scale.y=.008,w.eyeParts[1].glint.scale.y=.003))}else if(M.victims.has(w.seat+"-"+w.token))if(w.arms.forEach((F,z)=>F.rotation.z=(z?1:-1)*2.2*I),T<.22)w.eyes.scale.y=1.45,w.head.rotation.z=Math.sin(T*45)*.14,w.body.scale.set(1.1,.88,1.05);else if(T<.92){let F=(T-.22)/.7;w.body.position.y+=Math.sin(F*Math.PI)*1.35,w.body.rotation.y=F*Math.PI*4,w.body.rotation.z=Math.sin(F*Math.PI)*.35,w.feet.forEach(z=>z.rotation.x=-.5)}else{let F=Math.max(0,Math.sin((T-.92)/.25*Math.PI))*.16*I;w.body.scale.set(1+F,1-F,1+F*.5),w.head.rotation.z=-.18*I}(w.seat===M.seat&&w.token===M.token||M.victims.has(w.seat+"-"+w.token))&&r.capture?.poses.push({seat:w.seat,token:w.token,height:w.body.position.y,spin:w.body.rotation.y,headTilt:w.head.rotation.z,rightEye:w.eyeParts[1].pupil.scale.y})}return{start:y,update:A,pose:E,reset:b,duration:1350,dispose(){b(),g.remove(),i.remove(o),v.forEach(w=>w.dispose()),u.forEach(w=>w.dispose()),d.forEach(w=>w.dispose())}}}function Ud(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ut,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Dd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);let m=Dd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Dd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Kt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let v=h.getComponent(u,m);o.setComponent(u+f,m,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Ji=["Explorer","Forest pirate","Leaf royalty","Flower friend","Party pal","Sky explorer"];function Nd({scene:i,camera:e,board:t,animals:n,track:s,reduced:r,getRoom:a,diagnostics:o}){let l=new ps({vertexColors:!0,roughness:.75}),c=new fn({vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1}),h=new wn(1,16,10),f=[],u=new Map,d=new Ot,m=new D,v=new D,g=new D,p=new wt().makeScale(0,0,0),M=new Map,b=null,y=null,A=null;function E(R,W,j,me=[0,0,0],U=[1,1,1],H=[0,0,0]){let X=W.clone(),pe=X.index?X.toNonIndexed():X;pe!==X&&X.dispose(),d.position.fromArray(me),d.scale.fromArray(U),d.rotation.fromArray(H),d.updateMatrix(),pe.applyMatrix4(d.matrix);let ve=new lt(j),De=new Float32Array(pe.attributes.position.count*3);for(let je=0;je<De.length;je+=3)De[je]=ve.r,De[je+1]=ve.g,De[je+2]=ve.b;pe.setAttribute("color",new Kt(De,3)),R.push(pe)}let w=(R,W,j,me,U,H,X=H,pe=H,ve=[0,0,0])=>E(R,h,W,[j,me,U],[H,X,pe],ve);function x(R,W,j,me,U,H,X){let pe=new Rn(H,H,X,24);E(R,pe,W,[j,me,U]),pe.dispose()}function T(R){let W=Ud(R);return R.forEach(j=>j.dispose()),f.push(W),W}function I(R,W){let j=new Zt(T(R),l);return j.castShadow=!1,W.add(j),j}function F(R,W,j,me=.3){for(let U=0;U<5;U++){let H=U*Math.PI*2/5,X=Math.cos(H)*me,pe=j+Math.sin(H)*me;for(let ve=0;ve<5;ve++){let De=ve*Math.PI*2/5;w(R,U%2?"#ffc56a":"#ff88ae",X+Math.cos(De)*.045,W,pe+Math.sin(De)*.045,.045,.022,.045)}w(R,"#ffe990",X,W+.025,pe,.027)}}function z(R,W=!1){for(let j of[-.14,.14])w(R,W?"#a96b30":"#3e4030",j,-.32,.29,.128,.1,.04),w(R,W?"#79cdd0":"#253a35",j,-.32,.327,.097,.072,.014),w(R,"#e0f6e8",j-.03,-.292,.342,.018,.023,.006);w(R,"#d0a560",0,-.315,.323,.035,.015,.014)}function q(R){let W=[],j=[];if(R===0)x(W,"#e8bf70",0,0,0,.44,.035),w(W,"#e8c886",0,.105,0,.3,.19,.29),x(W,"#4d7340",0,.055,0,.307,.075),w(W,"#8bc65b",.24,.23,-.07,.04,.2,.025,[0,0,-.45]),z(W),w(j,"#d7c277",0,.85,.22,.2,.045,.04);else if(R===1){let U=new yn;U.moveTo(-.46,-.02),U.quadraticCurveTo(-.4,.43,0,.15),U.quadraticCurveTo(.4,.43,.46,-.02),U.closePath();let H=new bi(U,{depth:.08,bevelEnabled:!1});E(W,H,"#354039",[0,0,.015]),H.dispose(),w(W,"#ffdc81",0,.125,.11,.074,.052,.025);for(let X of[-.09,.09])w(W,"#45302a",X,-.5,.39,.11,.038,.025,[0,0,X>0?.3:-.3]);w(j,"#ce6350",0,.84,.19,.2,.07,.06)}else if(R===2){x(W,"#c8a559",0,.015,0,.29,.04);for(let U=0;U<7;U++){let H=U*Math.PI*2/7;w(W,U%2?"#9bd75c":"#429c46",Math.cos(H)*.28,.1,Math.sin(H)*.28,.06,.17,.025,[0,-H,Math.cos(H)*.28])}w(W,"#ffe78f",0,.075,.3,.065,.065,.026),w(j,"#53916a",0,.49,-.3,.32,.4,.055),w(j,"#e4cb6d",0,.83,.22,.055)}else if(R===3){x(W,"#e4c285",0,0,0,.42,.035),w(W,"#e8ce9b",0,.07,0,.29,.13,.28),F(W,.07,0);for(let U of[-.17,0,.17]){w(j,"#72b65a",U,.82-Math.abs(U)*.25,.24,.08,.065,.025);for(let H=0;H<5;H++){let X=H*Math.PI*2/5;w(j,"#ff9fb8",U+Math.cos(X)*.035,.81-Math.abs(U)*.25+Math.sin(X)*.035,.275,.035,.035,.012)}w(j,"#ffe68b",U,.81-Math.abs(U)*.25,.292,.023,.023,.009)}}else if(R===4){let U=new ii(.25,.48,16);E(W,U,"#a47ad6",[0,.22,0],[1,1,1],[0,0,-.18]),U.dispose(),w(W,"#ffe294",.045,.45,0,.068);for(let H of[-.12,.12])w(j,H<0?"#e67a89":"#ffbc63",H,.81,.245,.13,.07,.035,[0,0,H<0?-.25:.25]);w(j,"#fff0a4",0,.81,.285,.04)}else w(W,"#a87642",0,.04,-.02,.3,.16,.29),z(W,!0),w(j,"#fa9d50",0,.82,.2,.21,.065,.07),w(j,"#ef7144",.19,.66,.245,.065,.18,.035,[0,0,-.3]);let me={head:new Wn(T(W),l,17),body:new Wn(T(j),l,16)};for(let U of Object.values(me)){U.frustumCulled=!1,U.instanceMatrix.setUsage(Zi),U.visible=!1;for(let H=0;H<U.count;H++)U.setMatrixAt(H,p);i.add(U)}return u.set(R,me),me}function B(){let R=new At,W=new At,j=new At,me=[];R.add(W),j.position.set(0,1.03,0),j.rotation.x=-.35,W.add(j);let U=[],H=[];w(U,"#985831",0,.56,0,.25,.34,.2),w(U,"#ead3a0",0,.55,.18,.17,.24,.035),w(U,"#426f35",.25,.46,-.19,.15,.22,.14);let X=new rr([new D(.17,.4,-.13),new D(.52,.33,-.2),new D(.75,.58,-.17),new D(.7,.86,-.12),new D(.49,.82,-.1)]),pe=new Bi(X,16,.043,6,!1);E(U,pe,"#985831"),pe.dispose(),w(H,"#96512c",0,0,0,.34,.32,.29),w(H,"#ead3a0",0,-.04,.245,.26,.235,.05);for(let je of[-1,1]){w(H,"#985831",je*.34,.05,0,.15,.16,.09),w(H,"#e9bc89",je*.35,.05,.07,.085,.1,.018),w(H,"#30271d",je*.1,.005,.3,.045,.065,.025),w(H,"#fff6dc",je*.1-.012,.03,.32,.012,.018,.008),w(U,"#754326",je*.13,.16,.05,.115,.12,.17);let he=new At,ge=[];he.position.set(je*.26,.72,.045),W.add(he),w(ge,"#985831",0,-.15,0,.085,.22,.09),w(ge,"#eacb93",0,-.32,.02,.09,.085,.09),I(ge,he),me.push(he)}w(H,"#66412c",0,-.095,.31,.049,.035,.028);let ve=new Si(new D(-.09,-.13,.31),new D(0,-.23,.345),new D(.09,-.13,.31)),De=new Bi(ve,10,.012,5,!1);return E(H,De,"#764c34"),De.dispose(),I(U,W),I(H,j),R.visible=!1,i.add(R),{root:R,body:W,head:j,arms:me}}function Z(){let R=[],W=new wi(.36,.026,5,24);E(R,W,"#ffe08b",[0,0,0],[1,1,1],[Math.PI/2,0,0]),W.dispose();let j=new wn(1,8,5);E(R,j,"#a4e271",[0,0,0],[.12,.025,.22],[0,.7,0]),j.dispose();let me=new Wn(T(R),c,2);return me.frustumCulled=!1,me.instanceMatrix.setUsage(Zi),i.add(me),me}let te=document.createElement("div");te.className="forest-gift-callout",te.hidden=!0,te.setAttribute("aria-hidden","true"),t.append(te);function ie(){y=null,M.clear(),b&&(b.root.visible=!1),te.hidden=!0,o.forestGift=null}function xe(R){R&&M.set(R.seat+"-"+R.token,R.outfit)}function se(R){!R||!a()?.game||(b??=B(),y={...R,started:performance.now(),room:a().code,revision:a().game.revision,point:null},te.textContent="\u0D15\u0D41\u0D30\u0D19\u0D4D\u0D19\u0D28\u0D4D\u0D31\u0D46 \u0D38\u0D2E\u0D4D\u0D2E\u0D3E\u0D28\u0D02! \u{1F412} "+Ji[R.outfit],te.hidden=!1)}let ae=R=>(R=Ai.clamp(R,0,1),R*R*(3-2*R));function de(R,W){if(!y||R.seat!==y.seat||R.token!==y.token)return;y.point=R.g.position.clone();let j=(W-y.started)/1e3;r.matches||(j>1.15&&j<1.9&&(R.arms[1].rotation.z=2.25,R.head.rotation.z=-.15),j>1.9&&j<2.5&&(R.body.position.y+=Math.max(0,Math.sin(j*17))*.12,R.arms.forEach((me,U)=>me.rotation.z=(U?1:-1)*1.6),R.head.rotation.z=Math.sin(j*14)*.08))}function Ge(R){let W=a(),j=W?.game,me=j?.forestGifts;y&&(W?.code!==y.room||!j||j.revision<y.revision)&&ie(),y&&R-y.started>=3e3&&(M.delete(y.seat+"-"+y.token),y=null,b.root.visible=!1,te.hidden=!0);let U=y?(R-y.started)/1e3:0;y&&U>=1.15&&M.delete(y.seat+"-"+y.token);let H=[];if(me)for(let pe of n){let ve=me.outfits[pe.seat]?.[pe.token],De=pe.seat+"-"+pe.token;Number.isInteger(ve)&&Ji[ve]&&pe.g.visible&&!M.has(De)&&H.push({a:pe,kind:ve})}let X=new Set(H.map(pe=>pe.kind));y&&X.add(y.outfit);for(let pe of X)u.has(pe)||q(pe);for(let pe of u.values())pe.head.count=0,pe.body.count=0,pe.head.visible=!1,pe.body.visible=!1;for(let{a:pe,kind:ve}of H){let De=u.get(ve);if(d.position.set(0,pe.seat===2?.4:.34,0),d.rotation.set(0,0,0),d.scale.setScalar(1),y?.seat===pe.seat&&y.token===pe.token&&!r.matches){let je=ae((U-1.4)/.45);d.rotation.y=Math.PI*(1-je),d.rotation.z=.18*(1-je)}d.updateMatrix(),De.head.setMatrixAt(De.head.count++,d.matrix.premultiply(pe.head.matrixWorld)),De.body.setMatrixAt(De.body.count++,pe.body.matrixWorld),De.head.visible=!0,De.body.visible=!0}if(b&&(b.root.visible=!!y&&!r.matches&&U<2.9),y?.point){let pe=y.point,ve=ae(U/.6),De=ae((U-2.4)/.5),je=pe.x<0?-1:1,he=pe.x+je*1.05,ge=pe.z+.4,Me=je*8.8,Se=pe.z-1.1;if(b.root.position.set(Ai.lerp(Me,he,ve)+De*(Me-he),.5+Math.sin(ve*Math.PI)*1.3+Math.sin(De*Math.PI)*1.15,Ai.lerp(Se,ge,ve)+De*(Se-ge)),b.root.rotation.y=je>0?-.45:.45,b.root.scale.setScalar(.94),b.body.position.y=Math.abs(Math.sin(U*12))*.06,b.body.rotation.z=Math.sin(U*11)*.06,b.head.rotation.z=Math.sin(U*8)*.1,b.arms[0].rotation.z=-1.55,b.arms[1].rotation.z=U<.8?2.3:.8,U>1.9&&U<2.4&&b.arms.forEach((be,$e)=>be.rotation.z=($e?1:-1)*(1.2+Math.sin(U*24)*.5)),b.root.updateMatrixWorld(!0),U<1.15&&!r.matches){let be=n[y.seat*4+y.token],$e=u.get(y.outfit);v.set(0,-.35,.12).applyMatrix4(b.arms[0].matrixWorld),g.set(0,be.seat===2?.4:.34,0).applyMatrix4(be.head.matrixWorld);let ke=ae((U-.8)/.35);d.position.copy(v).lerp(g,ke),d.position.y+=Math.sin(ke*Math.PI)*.3,d.rotation.set(.25*(1-ke),ke*Math.PI,.18),d.scale.setScalar(be.g.scale.x),d.updateMatrix(),$e.head.setMatrixAt($e.head.count++,d.matrix),$e.head.visible=!0}m.set(pe.x,2.3,pe.z).project(e),te.style.left=Ai.clamp((m.x*.5+.5)*100,25,75)+"%",te.style.top=Ai.clamp((-m.y*.5+.5)*100,28,65)+"%"}y&&r.matches&&M.delete(y.seat+"-"+y.token);for(let pe of u.values())pe.head.instanceMatrix.needsUpdate=!0,pe.body.instanceMatrix.needsUpdate=!0;me?(A??=Z(),A.visible=j.phase!=="done"&&j.phase!=="celebration"&&j.active.some(pe=>me.counts[pe]<2),me.tiles.forEach((pe,ve)=>{let[De,je]=s[pe];d.position.set(je-7,.515,De-7),d.rotation.set(0,r.matches?0:R/1700,0),d.scale.setScalar(r.matches?1:1+Math.sin(R/300+ve)*.06),d.updateMatrix(),A.setMatrixAt(ve,d.matrix)}),A.instanceMatrix.needsUpdate=!0):A&&(A.visible=!1),o.forestGift=y?{seat:y.seat,token:y.token,outfit:y.outfit,age:U,monkeyVisible:b.root.visible,reducedMotion:r.matches}:null,o.outfits=H.map(({a:pe,kind:ve})=>({seat:pe.seat,token:pe.token,kind:ve,name:Ji[ve]})),o.giftTiles=me?.tiles||[]}return{start:se,defer:xe,pose:de,frame:Ge,reset:ie,duration:3e3,dispose(){ie(),te.remove(),b&&i.remove(b.root),A&&(i.remove(A),A.dispose());for(let R of u.values())for(let W of Object.values(R))i.remove(W),W.dispose();f.forEach(R=>R.dispose()),h.dispose(),l.dispose(),c.dispose()}}}function Fd({board:i,tokenNodes:e,getRoom:t,getSeat:n,getServerTime:s=()=>Date.now(),colors:r,track:a,lanes:o,yards:l,safe:c}){let h=()=>innerWidth<650||matchMedia("(pointer: coarse)").matches,f=h(),u=matchMedia("(prefers-reduced-motion: reduce)"),d;try{d=new kl({antialias:!f,alpha:!1,powerPreference:"high-performance"})}catch{return document.body.classList.add("webgl-fallback"),null}d.setPixelRatio(Math.min(devicePixelRatio,f?1.5:1.65)),d.outputColorSpace=qt,d.toneMapping=ma,d.toneMappingExposure=1.02,d.shadowMap.enabled=!f,d.shadowMap.type=ms,d.domElement.className="jungle-canvas",d.domElement.setAttribute("aria-hidden","true"),i.prepend(d.domElement),document.body.classList.add("scene-3d");let m=new Wr;m.background=new lt("#0f4539"),m.fog=new Hr("#0c4835",36,70);let v=new Gi(-12,12,8.5,-8.5,.1,100);v.position.set(0,24,15),v.lookAt(0,.3,0),m.add(new ua("#eaffd7","#143e34",1.05));let g=new lr("#fff0be",2.9);g.position.set(-9,20,10),g.castShadow=!0,g.shadow.mapSize.set(f?1024:2048,f?1024:2048),Object.assign(g.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:50}),g.shadow.bias=-8e-4,g.shadow.normalBias=.025,g.shadow.radius=3,m.add(g);let p=new lr("#8bf2f5",.8);p.position.set(12,10,-10),m.add(p);let M=new Map;function b(P,G={}){let N=P+JSON.stringify(Object.fromEntries(Object.entries(G).map(([L,ue])=>[L,ue?.isTexture?ue.uuid:ue])));return M.has(N)||M.set(N,new ps({color:P,roughness:.72,...G})),M.get(N)}let y=new wn(1,f?12:20,f?8:14),A=new la(1,1),E=new wn(1,20,14),w=new Rn(1,1,1,8),x=new wn(1,f?8:12,f?5:8),T=new wi(.43,.045,8,32),I=new Qr(.51,24),F=new ii(.11,.2,3),z=Array.from({length:4},()=>new Map),q=r.map(P=>new fn({color:P})),B=r.map(P=>new fn({color:P,transparent:!0,opacity:.3,depthWrite:!1})),Z=new fn({color:"#fff4a3"}),te=new ii(.14,.18,3),ie=new Si(new D(-.08,-.185,.351),new D(0,-.24,.38),new D(.08,-.185,.351)),xe=new Bi(ie,10,.008,5,!1),se=new Rn(.56,.6,.08,28),ae=new Rn(.51,.51,.085,28),de=new Rn(.015,.018,1,5),Ge=new ca(.035);function R(P,G,N,L=0,ue=0,$=0,ye=1,Be=ye,st=ye,xt=!0){let We=new Zt(G,N);return We.position.set(L,ue,$),We.scale.set(ye,Be,st),We.castShadow=xt,We.receiveShadow=!0,P.add(We),We}let W=(P,G,N,L,ue,$,ye=$,Be=$,st={})=>R(P,y,b(G,st),N,L,ue,$,ye,Be),j=new Map;function me(P,G,N,L,ue,$,ye,Be,st=.08){let xt=[$,ye,Be,st].join(",");return j.has(xt)||j.set(xt,new Ca($,ye,Be,2,st)),R(P,j.get(xt),b(G),N,L,ue)}function U(P,G,N,L,ue=.04){let $=new D(...N),ye=new D(...L),Be=R(P,w,b(G),0,0,0,ue,$.distanceTo(ye),ue);return Be.position.copy($).add(ye).multiplyScalar(.5),Be.quaternion.setFromUnitVectors(new D(0,1,0),ye.sub($).normalize()),Be}let H=721,X=()=>(H=Math.imul(H,1664525)+1013904223>>>0,H/4294967296);function pe(P){let G=document.createElement("canvas");G.width=256,G.height=256;let N=G.getContext("2d");N.fillStyle=P==="grass"?"#b3c884":P==="wood"?"#d5bd8b":"#c3c8b8",N.fillRect(0,0,256,256);for(let ue=0;ue<(P==="grass"?2400:700);ue++){let $=X()*256,ye=X()*256;N.strokeStyle=P==="grass"?X()>.5?"#39652b55":"#eef7a04d":P==="wood"?"#7155363b":"#495e5128",N.lineWidth=P==="grass"?.6:1,N.beginPath(),N.moveTo($,ye),N.lineTo($+(P==="wood"?X()*50:X()*5-2),ye+(P==="wood"?X()*3:X()*8-4)),N.stroke()}let L=new us(G);return L.colorSpace=qt,L.wrapS=L.wrapT=Js,L.anisotropy=Math.min(4,d.capabilities.getMaxAnisotropy()),L}let ve=pe("grass"),De=pe("rock"),je=pe("wood"),he=[],ge=[],Me=[],Se=[],be=[],$e=[],ke=[],Ke=[],it=new nn({uniforms:{time:{value:0}},transparent:!0,side:Jt,depthWrite:!1,vertexShader:"varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;p.x+=sin(time*8.+uv.y*12.)*uv.y*.055;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"varying vec2 vUv;uniform float time;void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float n=sin(p.y*17.-time*9.+sin(p.x*8.+time*3.))*.06;float w=(1.-p.y)*.75+sin(p.y*7.-time*4.)*.07;float a=(1.-smoothstep(w+n-.18,w+n,abs(p.x)))*(1.-smoothstep(.82,1.,p.y));vec3 c=mix(vec3(1.,.24,.01),vec3(1.,.92,.3),(1.-smoothstep(0.,.8,p.y))*(1.-smoothstep(0.,.6,abs(p.x))));gl_FragColor=vec4(c,a*.9);}"}),O=R(m,new In(80,80),b("#237144"),0,-1.4,0,1,1,1,!1);O.rotation.x=-Math.PI/2;let Mt=new nn({uniforms:{time:{value:0}},vertexShader:"varying vec2 vWater; void main(){vec4 world=modelMatrix*vec4(position,1.);vWater=world.xz;gl_Position=projectionMatrix*viewMatrix*world;}",fragmentShader:"varying vec2 vWater;uniform float time;void main(){vec2 p=vWater*2.5;float w=(sin(p.x*1.7+p.y*.6-time)*sin(p.y*2.1-time*.7)+1.)*.5;float n=sin(p.x*3.1+sin(p.y*2.7-time*1.5))*sin(p.y*3.7+sin(p.x*2.5+time*.7));float f=smoothstep(.61,.86,n);float fine=sin(p.x*11.+sin(p.y*6.-time*2.))*sin(p.y*9.-time*2.);vec3 c=mix(vec3(.012,.25,.32),vec3(.025,.54,.61),w);c+=vec3(.45,.8,.84)*(f*.48+smoothstep(.83,.98,fine)*.14);gl_FragColor=vec4(c,1.);}"}),ut=R(m,new In(80,80,1,1),Mt,0,-.55,0,1,1,1,!1);ut.rotation.x=-Math.PI/2;for(let P of[-11.2,11.2]){me(m,"#34572d",P,-.14,0,5.7,.74,80,1);let G=me(m,"#529035",P,.25,0,5.65,.14,79.8,.8),N=ve.clone();N.repeat.set(2,25),G.material=b("#529035",{map:N})}function C(P,G,N,L=.4){let ue=["#687b6c","#7c8a71","#586963","#8f977b"][Math.floor(X()*4)],$=R(m,A,b(ue,{map:De}),P,G,N,L,L*(.65+X()*.6),L*(.7+X()*.5));return $.rotation.set(X(),X()*6,X()*.3),X()>.4&&W(m,"#599437",P-.05,G+L*.43,N,L*.65,.07,L*.6),$}function _(P,G,N=.4,L=0){let ue=new At;ue.position.set(P,.35,G),m.add(ue);for(let $=0;$<(L?9:6);$++){let ye=$*6.283/(L?9:6);R(ue,x,b(["#65b92a","#279440","#8ac735","#197346"][$%4]),Math.sin(ye)*N*.32,N*.4,Math.cos(ye)*N*.32,N*.15,N*.7,N*.26).rotation.set(Math.cos(ye)*.6,ye,Math.sin(ye)*.6),$<3&&U(ue,"#a6d34b",[0,0,0],[Math.sin(ye)*N*.55,N*.7,Math.cos(ye)*N*.55],.012)}return he.push({g:ue,phase:X()*6,size:N}),ue}function Y(P,G,N=1){let L=new At;L.position.set(P,.1,G),m.add(L),U(L,"#80532d",[0,0,0],[.1,1.6*N,0],.11*N);for(let ue=0;ue<6;ue++){let $=ue*6.283/6,ye=R(L,x,b(ue%2?"#419c30":"#7fc339"),Math.sin($)*N*.48,1.65*N,Math.cos($)*N*.48,.16*N,.12*N,.73*N);ye.rotation.y=$,ye.rotation.x=.16,U(L,"#a7bd38",[.1,1.72*N,0],[Math.sin($)*N*.9,1.57*N,Math.cos($)*N*.9],.016*N)}return W(L,"#806932",0,1.6*N,.1,.14*N),he.push({g:L,phase:X()*6,size:N}),L}function ee(P,G,N=1){let L=new At;L.position.set(P,.05,G),m.add(L),U(L,"#78512d",[0,0,0],[0,1.4*N,0],.14*N);for(let ue=0;ue<7;ue++){let $=ue*2.4,ye=R(L,x,b(["#1c7139","#3b9434","#60a82d","#266c32"][ue%4]),Math.sin($)*N*.42,1.15*N+ue%3*N*.22,Math.cos($)*N*.37,N*.55,N*.4,N*.5);ye.rotation.y=$}for(let ue=0;ue<14;ue++){let $=ue*2.4,ye=N*(.38+X()*.25);R(L,x,b(ue%2?"#79b43b":"#2e8738"),Math.sin($)*ye,1.37*N+ue%3*N*.22,Math.cos($)*ye,N*.18,N*.09,N*.32).rotation.set(.2,$,.15)}return he.push({g:L,phase:X()*6,size:N}),L}function re(P,G,N=.16){let L=new At;L.position.set(P,.42,G),m.add(L);let ue=["#ff6d95","#ffa467","#b26aff","#fff165"][Math.floor(X()*4)];for(let $=0;$<5;$++){let ye=$*6.283/5;W(L,ue,Math.sin(ye)*N,.035,Math.cos(ye)*N,N*.75,.07,N*.75)}W(L,"#ffd93d",0,.09,0,N*.5,.075,N*.5),ge.push({g:L,phase:X()*6})}function we(P,G,N=.23){U(m,"#efe0af",[P,.3,G],[P,.3+N*1.1,G],N*.18);let L=new At;L.position.set(P,.3+N,G),m.add(L),W(L,"#f65b38",0,.04,0,N,.12,N);for(let ue=0;ue<5;ue++){let $=ue*2.4;W(L,"#ffeed6",Math.sin($)*N*.63,.15,Math.cos($)*N*.63,.045,.017,.045)}ge.push({g:L,phase:X()*6})}function Ee(P,G){let N=new At;N.position.set(P,.2,G),m.add(N),U(N,"#845331",[0,0,0],[0,1.05,0],.085),U(N,"#d2a340",[0,.72,0],[0,.91,0],.15);let L=W(N,"#ff8d0a",0,1.15,0,.17,.35,.17,{emissive:"#ff5000",emissiveIntensity:2}),ue=W(N,"#fff38b",0,1.14,.02,.08,.23,.08,{emissive:"#ffce32",emissiveIntensity:3}),$=R(N,new In(.52,.78,5,12),it,0,1.28,.08,1,1,1,!1);$.rotation.x=-.16;let ye=new pa("#ffb531",2,3,2);ye.position.set(0,1.3,0),ye.visible=!f,N.add(ye),Me.push({flame:L,core:ue,light:ye,phase:X()*6});for(let Be=0;Be<3;Be++)ke.push({m:W(N,"#ffe999",0,1.6+Be*.2,0,.02,.02,.02,{emissive:"#ffb800",emissiveIntensity:2}),base:1.3,phase:X()*6,fire:!0})}function oe(P,G,N=0){let L=new At;L.position.set(P,.36,G),L.rotation.y=N,m.add(L),me(L,"#99602c",0,.18,0,.53,.35,.37,.05),me(L,"#c28a40",0,.37,0,.55,.17,.4,.08);for(let ue of[-.17,.17])me(L,"#f1c454",ue,.28,.21,.045,.39,.025,.01);me(L,"#f3d271",0,.24,.218,.1,.13,.03,.01)}function fe(P,G,N){let L=[[-2.7,-2.5],[2.7,-2.5],[2.7,2.5],[-2.7,2.5]];for(let ye=0;ye<4;ye++){let Be=L[ye],st=L[(ye+1)%4];for(let xt=0;xt<5;xt++){let We=xt/4,ct=P+Be[0]+(st[0]-Be[0])*We,Nt=G+Be[1]+(st[1]-Be[1])*We;ye===1&&xt===2||(U(m,"#b6813e",[ct,.25,Nt],[ct,.8,Nt],.06),W(m,"#e0ba70",ct,.8,Nt,.075))}U(m,"#9b733e",[P+Be[0],.61,G+Be[1]],[P+st[0],.61,G+st[1]],.038)}U(m,"#997044",[P-2.2,.3,G-1.6],[P-2.2,1.75,G-1.6],.055);let ue=R(m,new In(.7,.78),b(N,{side:Jt}),P-1.83,1.3,G-1.6);ue.rotation.y=-.16;let $=W(m,"#ffdf82",P-1.84,1.26,G-1.56,.13,.14,.015);for(let[ye,Be]of[[-.17,.15],[0,.23],[.17,.15]])W(m,"#ffdf82",P-1.84+ye,1.26+Be,G-1.55,.055,.065,.016);oe(P+2.05,G-1.65,.3),Ee(P-2.55,G-.9)}let Re=[[-4.5,-4.5],[4.5,-4.5],[4.5,4.5],[-4.5,4.5]],Ye=["#bc593c","#80ac3c","#d7ad38","#479bba"];Re.forEach(([P,G],N)=>{me(m,"#536a44",P,-.26,G,5.98,.95,5.88,.5);let L=me(m,Ye[N],P,.25,G,5.65,.23,5.6,.4);L.material=b(Ye[N],{map:ve});for(let ue=0;ue<38;ue++){let $=ue*6.283/38,ye=P+Math.cos($)*2.83,Be=G+Math.sin($)*2.8;C(ye,-.05,Be,.19+X()*.15),ue%2===0&&_(ye,Be,.25+X()*.22),ue%4===0&&re(ye,Be,.12)}for(let ue=0;ue<22;ue++){let $=P+(X()-.5)*5.1,ye=G+(X()-.5)*5.1;W(m,["#d49452","#a9bb51","#f7d46a","#76b7be"][N],$,.375,ye,.02+X()*.025,.008,.026,{}).castShadow=!1}fe(P,G,r[N]),we(P+2.1,G+2.23),_(P-2.05,G+2.15,.42);for(let ue=0;ue<4;ue++){let[$,ye]=l[N][ue],Be=R(m,se,b("#e4bf77"),ye-7.5,.39,$-7.5);R(m,ae,b(Ye[N]),ye-7.5,.41,$-7.5)}});let Ce=document.createElement("canvas");Ce.width=128,Ce.height=128;let Te=Ce.getContext("2d");Te.fillStyle="#f7f0df",Te.fillRect(0,0,128,128);for(let P=0;P<500;P++)Te.fillStyle=X()>.5?"#cdc1a922":"#ffffff35",Te.fillRect(X()*128,X()*128,1+X()*3,1+X()*2);let Ze=Te.createRadialGradient(64,54,20,64,64,91);Ze.addColorStop(0,"#ffffff00"),Ze.addColorStop(1,"#8b795533"),Te.fillStyle=Ze,Te.fillRect(0,0,128,128);let Qe=new us(Ce);Qe.colorSpace=qt;let at=new Ca(.92,.31,.92,3,.105),V=[];for(let P=0;P<15;P++)for(let G=0;G<15;G++){if(!(P>=6&&P<=8||G>=6&&G<=8)||P>=6&&P<=8&&G>=6&&G<=8)continue;let N=a.findIndex($=>$[0]===P&&$[1]===G),L="#ead7a0";for(let $=0;$<4;$++)(o[$].some(ye=>ye[0]===P&&ye[1]===G)||N===$*13)&&(L=r[$]);let ue=R(m,at,b(L,{map:Qe,roughness:.65}),G-7+.002,.34,P-7+.002);if(V.push(ue),c.has(N)){let $=new yn;for(let Be=0;Be<10;Be++){let st=Be*Math.PI/5+Math.PI/2,xt=Be%2?.125:.26;Be?$.lineTo(Math.cos(st)*xt,Math.sin(st)*xt):$.moveTo(Math.cos(st)*xt,Math.sin(st)*xt)}$.closePath();let ye=R(m,new bi($,{depth:.04,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:2,steps:1}),b("#ffce31",{metalness:.2,roughness:.4,emissive:"#c28800",emissiveIntensity:.15}),G-7,.525,P-7);ye.rotation.x=-Math.PI/2,$e.push(ye)}else if((P+G)%5===0){let $=[new D(G-7-.28,.504,P-7+.4),new D(G-7-.16,.504,P-7+.26),new D(G-7-.2,.504,P-7+.09)];m.add(new Jr(new Ut().setFromPoints($),new ir({color:"#927f54",transparent:!0,opacity:.5})))}}let Ie=[[[-1.5,-1.5],[0,0],[-1.5,1.5]],[[-1.5,-1.5],[0,0],[1.5,-1.5]],[[1.5,-1.5],[0,0],[1.5,1.5]],[[-1.5,1.5],[0,0],[1.5,1.5]]];me(m,"#665333",0,.27,0,3,.29,3,.06),Ie.forEach((P,G)=>{let N=new yn;N.moveTo(P[0][0],-P[0][1]),P.slice(1).forEach(ue=>N.lineTo(ue[0],-ue[1])),N.closePath();let L=R(m,new bi(N,{depth:.1,bevelEnabled:!1}),b(r[G]),0,.51,0);L.rotation.x=-Math.PI/2}),R(m,new Rn(.64,.7,.17,32),b("#915e2c"),0,.66,0),R(m,new wi(.64,.035,8,32),b("#e0b964"),0,.75,0).rotation.x=Math.PI/2;let le=new yn;le.moveTo(-.36,0),le.lineTo(-.42,.35),le.lineTo(-.17,.2),le.lineTo(0,.52),le.lineTo(.17,.2),le.lineTo(.42,.35),le.lineTo(.36,0),le.closePath();let Pe=R(m,new bi(le,{depth:.13,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:2}),b("#ffd031",{metalness:.5,roughness:.3}),0,.79,.12);Pe.rotation.x=-.35;for(let P=0;P<2;P++)for(let G=0;G<25;G++){let N=(P?1:-1)*(8.2+X()*3.2),L=-9+X()*18;Math.abs(N)<9.4&&L>-5&&L<-1.8||(C(N,-.15,L,.55+X()*.75),G%3===0?Y(N,L,.8+X()*.8):ee(N,L,.65+X()*.9),_(N+(X()-.5),L+(X()-.5),.35+X()*.4),G%4===0&&re(N-.4,L+.45,.2))}for(let P=0;P<24;P++){let G=-11+X()*22,N=P%2?-8.6-X()*1.5:8.4+X()*1.5;C(G,-.15,N,.45+X()*.5),_(G,N,.5+X()*.5),P%4===0&&Y(G,N,1.1)}for(let P=0;P<2;P++)for(let G=0;G<(f?32:65);G++){let N=(P?1:-1)*(8.75+X()*3.7),L=-9.4+X()*18.8;Math.abs(N)<9.6&&L>-4.9&&L<-2.2||(_(N,L,.27+X()*.36,G%3===0?1:0),G%4===0&&C(N,.34,L,.12+X()*.18),G%3===0&&re(N-.12,L+.1,.12+X()*.08))}for(let P=0;P<2;P++)for(let G=0;G<(f?36:85);G++){let N=(P?1:-1)*(8.65+X()*4.5),L=-19+X()*38;Math.abs(L)<8.5||(C(N,.05,L,.35+X()*.6),_(N,L,.35+X()*.5),G%4===0&&ee(N,L,.8+X()*.6),G%7===0&&Y(N,L,.85+X()*.7),G%5===0&&re(N+.2,L+.3,.16))}let Ue=new yn;Ue.moveTo(-.03,0),Ue.quadraticCurveTo(-.07,.2,.03,.35),Ue.quadraticCurveTo(.07,.14,.03,0),Ue.closePath();let _e=new fs(Ue);for(let P=0;P<360;P++){let G=P%2?1:-1,N=G*(8.4+X()*4.1),L=-10.5+X()*21;if(Math.abs(N)<9.5&&L>-5&&L<-2)continue;let ue=R(m,_e,b(P%3?"#8eb93b":"#488c32",{side:Jt}),N,.31,L,1,1+X(),1,!1);ue.rotation.y=X()*6.28}m.traverse(P=>{P.isMesh&&P.material?.isMeshStandardMaterial&&["99602c","c28a40","b6813e","9b733e","bb8b43","96672f","845331","997044","78512d","80532d"].includes(P.material.color.getHexString())&&(P.material=b("#"+P.material.color.getHexString(),{map:je}))});function Je(P,G,N=1.3,L=0){let ue=new At;ue.position.set(P,.1,G),ue.rotation.y=L,m.add(ue);for(let $=0;$<8;$++)me(ue,$%2?"#bb8b43":"#96672f",-.63+$*.18,.13,0,.16,.12,N,.02);for(let $ of[-.73,.73])for(let ye of[-N*.5,N*.5])U(ue,"#ae7a36",[$,-.1,ye],[$,.73,ye],.055);for(let $ of[-N*.5,N*.5])U(ue,"#d2b47c",[-.73,.64,$],[.73,.64,$],.025),U(ue,"#996b34",[-.73,.4,$],[.73,.4,$],.025)}Je(-8.75,0,1.35,.2),Je(8.75,0,1.35,-.2),Je(-8.45,6.7,1.2,-.5),Je(8.4,-5.7,1.2,.3);function Xe(P,G){let N=new At;N.position.set(P,0,G),m.add(N);for(let $=0;$<8;$++)C(P+($-3.5)*.27,.85,G-.45,.45);let L=new fn({color:"#6bdef5",transparent:!0,opacity:.75,side:Jt,depthWrite:!1}),ue=R(N,new In(1.5,2),L,0,.28,0,1,1,1,!1);for(let $=0;$<22;$++){let ye=.33+X()*.4,Be=R(N,de,b("#bdfdff",{emissive:"#66d7ef",emissiveIntensity:.65,transparent:!0,opacity:.65}),-.68+X()*1.36,X()*2-.65,.025+X()*.03,1,ye,1,!1);Se.push({m:Be,phase:X()*2,base:.99})}for(let $=0;$<28;$++){let ye=W(N,"#e8ffff",(X()-.5)*1.5,-.43,(X()-.5)*.55,.025+X()*.04,.03,.03,{transparent:!0,opacity:.65,emissive:"#5dcdc9",emissiveIntensity:.4});ke.push({m:ye,phase:X()*6,base:-.45,spray:!0,scale:ye.scale.clone()})}for(let $=0;$<5;$++){let ye=R(N,new wi(.2+$*.12,.016,6,32),b("#d1ffff",{transparent:!0,opacity:.65,emissive:"#429eae",emissiveIntensity:.35}),0,-.48,.42,1,1,1,!1);ye.rotation.x=Math.PI/2,be.push({m:ye,phase:$*.5})}}Xe(-8.25,-3.55),Xe(8.25,-3.65);for(let[P,G]of[[-8.2,2.2],[8.2,2.5],[-7.3,7.5],[7.3,7.5]])Ee(P,G);for(let P=0;P<32;P++){let G=(X()-.5)*23,N=(X()-.5)*19,L=W(m,"#fff3a1",G,.8+X()*1.1,N,.025,.025,.025,{emissive:"#ffe653",emissiveIntensity:2});ke.push({m:L,phase:X()*6,base:L.position.y,fly:!0,x:G,z:N})}function Et(P,G){let N=(yt,$t,Ft,On,rs,En,Lt=En,et=En,Ps={})=>R(yt,E,b($t,Ps),Ft,On,rs,En,Lt,et),L=new At,ue=new At,$=new At,ye=new At;L.add(ue),$.position.set(0,.98,0),$.rotation.x=-.4,ue.add($),$.add(ye);let Be=P===1,st=P===3,xt=P===2,We=Be?"#fff6df":st?"#e77d25":xt?"#d3a252":"#a76535",ct=Be?"#fff7e6":"#efd8a7",Nt=Be?"#18251f":"#694326";N(ue,r[P],0,.51,0,.26,.33,.2),N(ue,ct,0,.6,.185,.16,.2,.025);let vt=[],an=[];for(let yt of[-.16,.16]){let $t=N(ue,Nt,yt,.15,.05,.125,.12,.19);vt.push($t);let Ft=new At;Ft.position.set(yt*1.7,.65,.045),ue.add(Ft),N(Ft,We,0,-.13,0,.09,.2,.095),N(Ft,We,0,-.29,.025,.1,.09,.1),an.push(Ft)}me(ue,"#77643a",0,.59,-.22,.38,.44,.19,.07),U(ue,"#bba566",[-.21,.82,-.24],[.21,.82,-.24],.065);for(let yt of[-.14,.14])me(ue,"#d2af58",yt,.63,.2,.036,.39,.035,.009);N(ue,"#eece68",.15,.54,.225,.045,.055,.021);let on=R(ue,te,b(r[P]),0,.83,.19);if(on.rotation.z=Math.PI,N($,We,0,0,0,.36,.33,.3),st){for(let $t of[-.26,.26]){let Ft=R($,new ii(.14,.32,3),b(We),$t,.3,-.015);Ft.rotation.z=$t<0?.22:-.22,R($,new ii(.079,.21,3),b("#ffc592"),$t,.3,.075)}N($,ct,-.14,-.13,.255,.16,.12,.09),N($,ct,.14,-.13,.255,.16,.12,.09);let yt=N(ue,We,.32,.41,-.13,.13,.38,.14);yt.rotation.z=-.58,N(ue,ct,.45,.67,-.13,.09,.12,.095)}else{for(let yt of[-.28,.28])N($,Be?Nt:We,yt,.24,-.01,.145,.155,.095),N($,Be?"#484337":"#d39478",yt,.24,.069,.083,.09,.016);N($,ct,0,-.14,.27,.21,.135,.085)}let Ve=[];for(let yt of[-.13,.13]){if(Be){let On=N($,Nt,yt,0,.258,.111,.145,.046);On.rotation.z=yt<0?-.3:.3}let $t=N(ye,"#19251b",yt,.015,.305,.045,.064,.026,{roughness:.24}),Ft=N(ye,"#ffffff",yt-.012,.037,.331,.014,.018,.006,{emissive:"#ffffff",emissiveIntensity:.1});Ve.push({pupil:$t,glint:Ft}),U($,xt?"#7e552f":"#6c492a",[yt-.035,.122,.28],[yt+.03,.134,.282],.012)}N($,"#27251e",0,-.12,.365,.065,.045,.035,{roughness:.3}),R($,xe,b("#66412d"));for(let yt of[-.25,.25])N($,"#e9a380",yt,-.09,.248,.036,.022,.008);if(xt){for(let yt of[-1,1])U($,"#926735",[yt*.22,.29,-.02],[yt*.33,.62,-.02],.035),U($,"#926735",[yt*.29,.5,-.02],[yt*.47,.58,-.02],.027),U($,"#926735",[yt*.32,.55,-.02],[yt*.24,.67,-.02],.025);for(let yt of[-.2,.2])N($,"#fae4b1",yt,.14,.227,.025,.029,.008)}let J=R(L,T,q[P],0,.045,0,1,1,1,!1);J.rotation.x=Math.PI/2;let ft=R(L,I,B[P],0,.035,0,1,1,1,!1);ft.rotation.x=-Math.PI/2;let ln=R(L,F,Z,0,1.63,0,1,1,1,!1);ln.rotation.z=Math.PI;let Wt=document.createElement("canvas");Wt.width=64,Wt.height=64;let Ct=Wt.getContext("2d");Ct.fillStyle="#ffe6a1",Ct.beginPath(),Ct.arc(32,32,28,0,Math.PI*2),Ct.fill(),Ct.fillStyle="#4d3921",Ct.font="bold 39px Trebuchet MS",Ct.textAlign="center",Ct.textBaseline="middle",Ct.fillText(String(G+1),32,34);let Fa=new us(Wt);Fa.colorSpace=qt;let ss=R(L,new In(.16,.16),new fn({map:Fa,transparent:!0,side:Jt}),.27,.17,.22,1,1,1,!1);return ss.rotation.x=-.45,L.traverse(yt=>{if(!yt.material?.isMeshStandardMaterial)return;let $t=yt.material,Ft=z[P];if(!Ft.has($t.uuid)){let On=$t.clone();Ft.set($t.uuid,{material:On,emissive:On.emissive.clone(),intensity:On.emissiveIntensity})}yt.material=Ft.get($t.uuid).material}),m.add(L),{g:L,body:ue,head:$,eyes:ye,eyeParts:Ve,feet:vt,arms:an,ring:J,halo:ft,marker:ln,seat:P,token:G,phase:P*.9+G*1.6}}for(let P=0;P<4;P++)for(let G=0;G<4;G++)Ke.push(Et(P,G));let St=new Set,rn=new Set;function zt(P){St.add(P),P.traverse(G=>{G.isMesh&&rn.add(G)})}let Ua=f?he.filter((P,G)=>G%4===0):he,Na=f?ge.filter((P,G)=>G%3===0):ge;Ua.forEach(P=>zt(P.g)),Na.forEach(P=>zt(P.g)),Me.forEach(P=>{zt(P.flame),zt(P.core)}),Se.forEach(P=>zt(P.m)),be.forEach(P=>zt(P.m)),ke.forEach(P=>zt(P.m)),Ke.forEach(P=>[P.g,P.body,P.head,P.eyes,P.ring,P.halo,P.marker,...P.arms,...P.feet].forEach(zt)),m.updateMatrixWorld(!0),m.traverse(P=>{St.has(P)||(P.updateMatrix(),P.matrixAutoUpdate=!1)}),m.matrixWorldAutoUpdate=!1;let es=new Map;m.traverse(P=>{if(!P.isMesh||!P.geometry||Array.isArray(P.material))return;let G=P.geometry.uuid+"|"+P.material.uuid+"|"+rn.has(P);es.has(G)||es.set(G,[]),es.get(G).push(P)});let As=[],jl=new wt().makeScale(0,0,0);for(let P of es.values()){if(P.length<2)continue;let G=new Wn(P[0].geometry,P[0].material,P.length);G.castShadow=P.some(L=>L.castShadow),G.receiveShadow=!0,G.frustumCulled=!1;let N=rn.has(P[0]);G.instanceMatrix.setUsage(N?Zi:Ul),P.forEach((L,ue)=>{L.layers.set(31),G.setMatrixAt(ue,L.matrixWorld)}),G.instanceMatrix.needsUpdate=!0,G.matrixAutoUpdate=!1,m.add(G),N&&As.push({batch:G,sources:P})}let Es=i.querySelector("svg"),Cs=Es.createSVGPoint(),mn=new D,Nn=document.getElementById("preview-board");Nn.innerHTML="";let ui=Nn;Nn.append(d.domElement);let ts=0,Fn=0,ns=0,di=0,Rs=0,wr=!1,Vt={renderer:"WebGL 3D",frames:0,tiles:V.length,animals:16,waterfalls:2,torchCount:Me.length,drawCalls:0,fps:0,performanceVersion:2,characterDetail:"full"},is=Ld({scene:m,camera:v,board:i,reduced:u,getRoom:t,diagnostics:Vt}),Ri=Nd({scene:m,camera:v,board:i,animals:Ke,track:a,reduced:u,getRoom:t,diagnostics:Vt});function ec(P){let G=e.get(P.seat+"-"+P.token),N=getComputedStyle(G).transform,L=N==="none"?new DOMMatrix:new DOMMatrix(N);is.start(P,{x:L.e-7.5,z:L.f-7.5})}let Is=null,S=0,k=-1,ne=-1,K=new Map;function Q(P,G="jump"){let N=t();return!N?.seats[P]||!Number.isInteger(P)||!["jump","dance","wave"].includes(G)?!1:(K.set(P,{kind:G,started:performance.now(),room:N.code}),!0)}i.dataset.renderer="webgl",window.jungleScene=Vt;function Le(){let P=ui.getBoundingClientRect();if(!P.width||!P.height)return;let G=h();d.setPixelRatio(Math.min(devicePixelRatio,G?1.5:1.65)),d.shadowMap.enabled=!G,Me.forEach($=>$.light.visible=!G),Vt.quality=G?"mobile-smooth":"full",ts=P.width,Fn=P.height,d.setSize(ts,Fn,!1);let N=ts/Fn,L=innerWidth<650?18.2/N:Math.max(16.85,13.6*Fn/Math.max(300,Fn-180)),ue=L*N;v.left=-ue/2,v.right=ue/2,v.top=L/2,v.bottom=-L/2,v.updateProjectionMatrix(),Vt.cameraAspect=(v.right-v.left)/(v.top-v.bottom),Vt.viewportAspect=N}let Oe=new ResizeObserver(Le);Oe.observe(i),Oe.observe(Nn);let Ne=new Map([[i,!0],[Nn,!0]]),ze=new IntersectionObserver(P=>{P.forEach(G=>Ne.set(G.target,G.isIntersecting))});ze.observe(i),ze.observe(Nn);let qe=-1/0,ot=()=>{h()&&(qe=performance.now())};window.addEventListener("scroll",ot,{passive:!0});function dt(P,G,N,L,ue){mn.set(0,.55,0).applyMatrix4(P.body.matrixWorld).project(v),Cs.x=L.left+(mn.x*.5+.5)*L.width,Cs.y=L.top+(-mn.y*.5+.5)*L.height;let $=Cs.matrixTransform(ue),ye=G.querySelector(".token-hit");ye.setAttribute("cx",$.x-N.e),ye.setAttribute("cy",$.y-N.f),ye.setAttribute("r",innerWidth<650?".52":".5")}function He(P,G){if(ui!==i||!t())return null;let N=d.domElement.getBoundingClientRect(),L=null,ue=1/0;for(let $ of Ke){let ye=e.get($.seat+"-"+$.token);if(!$.g.visible||!ye.classList.contains("movable"))continue;let Be=1/0,st=-1/0,xt=1/0,We=-1/0;for(let vt of[-.46,.46])for(let an of[0,$.marker.visible?1.8:1.48])for(let on of[-.3,.4]){mn.set(vt,an,on).applyMatrix4($.body.matrixWorld).project(v);let Ve=N.left+(mn.x*.5+.5)*N.width,J=N.top+(-mn.y*.5+.5)*N.height;Be=Math.min(Be,Ve),st=Math.max(st,Ve),xt=Math.min(xt,J),We=Math.max(We,J)}let ct=innerWidth<650?7:4;if(P<Be-ct||P>st+ct||G<xt-ct||G>We+ct)continue;let Nt=((P-(Be+st)/2)/Math.max(1,st-Be))**2+((G-(xt+We)/2)/Math.max(1,We-xt))**2;Nt<ue&&(ue=Nt,L=ye)}return L}let bt=new MutationObserver(P=>{for(let G of P)for(let N of G.addedNodes){if(!(N instanceof SVGElement))continue;let L=/translate\(([\d.-]+) ([\d.-]+)\)/.exec(N.getAttribute("transform")||"");if(L&&N.dataset.capture!=="true")for(let ue=0;ue<12;ue++){let $=b("#ffe266",{emissive:"#e8a923",emissiveIntensity:1,transparent:!0,opacity:1}).clone(),ye=R(m,Ge,$,Number(L[1])-7.5,.65,Number(L[2])-7.5,1,1,1,!1);ke.push({m:ye,burst:!0,born:performance.now()/1e3,angle:ue*6.283/12,x:ye.position.x,z:ye.position.z})}}});bt.observe(i.querySelector("#effects"),{childList:!0});function Pt(P){if(wr)return;requestAnimationFrame(Pt);let G=t()?i:Nn;if(G!==ui&&(ui=G,ui.prepend(d.domElement),Le()),document.hidden||!Ne.get(ui)||P-qe<120||!ts||!Fn){ns=P;return}if(P-ns<(innerWidth<650?32:21))return;let N=P-ns;ns=P,Rs+=N,di++;let L=u.matches?0:P/1e3;is.update(P),Mt.uniforms.time.value=L,it.uniforms.time.value=L,Vt.waterTime=L,Vt.fireTime=L;for(let Ve of Ua)Ve.g.rotation.z=Math.sin(L*1.05+Ve.phase)*.025,Ve.g.rotation.x=Math.sin(L*.8+Ve.phase)*.018;for(let Ve of Na)Ve.g.rotation.y=Math.sin(L*1.3+Ve.phase)*.1;for(let Ve of Me){let J=Math.sin(L*12+Ve.phase)*.1+Math.sin(L*19+Ve.phase)*.05;Ve.flame.scale.y=.35*(1+J),Ve.flame.rotation.z=J*.7,Ve.core.scale.y=.23*(1-J*.6),Ve.light.intensity=1.9+J*3}for(let Ve of Se)Ve.m.position.y=Ve.base-(L*1.7+Ve.phase)%1.9;for(let Ve of be){let J=(L*.6+Ve.phase)%1;Ve.m.scale.setScalar(.6+J*1.7),Ve.m.material.opacity=(1-J)*.5}for(let Ve=ke.length-1;Ve>=0;Ve--){let J=ke[Ve];if(J.burst){let ft=P/1e3-J.born;if(ft>.65){m.remove(J.m),J.m.material.dispose(),ke.splice(Ve,1);continue}J.m.position.set(J.x+Math.sin(J.angle)*ft*1.2,.65+Math.sin(ft*Math.PI/.65)*.5,J.z+Math.cos(J.angle)*ft*1.2),J.m.material.opacity=1-ft/.65}else J.spray?(J.m.position.y=J.base+Math.abs(Math.sin(L*2+J.phase))*.32,J.m.scale.copy(J.scale).multiplyScalar(.7+Math.sin(L*2+J.phase)*.25)):J.fire?(J.m.position.y=J.base+(L*.8+J.phase)%1.1,J.m.position.x=Math.sin(L*2+J.phase)*.13):J.fly&&(J.m.position.y=J.base+Math.sin(L+J.phase)*.19,J.m.position.x=J.x+Math.sin(L*.6+J.phase)*.25)}$e.forEach((Ve,J)=>Ve.material.emissiveIntensity=.12+(Math.sin(L*2+J)+1)*.1);let ue=Es.getBoundingClientRect(),ye=Es.getScreenCTM()?.inverse(),Be=t(),st=Be?.game,xt=st?.lastRoll?Be.code+":"+st.lastRoll.id:null;xt!==Is&&(xt!==null&&Is?.startsWith(Be.code+":")?(k=st.lastRoll.seat,S=P+1200):(S=0,k=-1),Is=xt);let We=st?.phase==="celebration"&&s()<st.celebration.endsAt?st.celebration:null,ct=st&&["roll","move","waiting"].includes(st.phase)?P<S?k:st.turn:-1;ct!==ne&&(z.forEach((Ve,J)=>Ve.forEach(({material:ft,emissive:ln,intensity:Wt})=>{let Ct=ft.color.r+ft.color.g+ft.color.b>.4;J===ct&&Ct&&ln.getHex()===0?(ft.emissive.set(r[J]),ft.emissiveIntensity=.14):(ft.emissive.copy(ln),ft.emissiveIntensity=Wt)})),ne=ct);let Nt=[],vt=[],an=Ke.map(Ve=>getComputedStyle(e.get(Ve.seat+"-"+Ve.token)).transform),on=new Map;for(let[Ve,J]of K){let ft=(P-J.started)/1e3,ln=J.kind==="dance"?2.8:J.kind==="wave"?2.4:2.2;if(J.room!==Be?.code||ft>=ln){K.delete(Ve);continue}let Wt=u.matches?0:Math.max(0,Math.min(1,ft/.16,(ln-ft)/.25)),Ct=J.kind==="jump"&&!u.matches&&ft>.16&&ft<1.9?Math.sin(Math.PI*((ft-.16)%.58/.58)):0;on.set(Ve,{seat:Ve,kind:J.kind,age:ft,strength:Wt,hop:Ct,jumpHeight:Ct*.7,participants:0})}if(We)for(let Ve of We.seats){let J=Math.max(0,(s()-We.startedAt)/1e3),ft=(We.endsAt-We.startedAt)/1e3;on.set(Ve,{seat:Ve,kind:"victory",age:J,strength:u.matches?0:Math.max(0,Math.min(1,J/.25,(ft-J)/.4)),hop:0,jumpHeight:0,participants:0})}for(let[Ve,J]of Ke.entries()){let ft=e.get(J.seat+"-"+J.token),ln=an[Ve],Wt=ln==="none"?new DOMMatrix:new DOMMatrix(ln),Ct=ft.classList.contains("walking"),Fa=ft.classList.contains("finished"),ss=!!We?.seats.includes(J.seat);if(J.g.visible=ss||!Be||!Fa&&!!Be?.seats[J.seat]&&(!st||st.active.includes(J.seat)),!J.g.visible)continue;let yt=Number(ft.dataset.visualStep),$t=ss||yt<0?1.25:.88;if(u.matches?J.g.scale.setScalar($t):J.g.scale.setScalar(Ai.lerp(J.g.scale.x,$t,.2)),J.g.position.set(Wt.e-7.5,.5,Wt.f-7.5),ss){let[Lt,et]=l[J.seat][J.token];J.g.position.set(et-7.5,.5,Lt-7.5)}let Ft=L*(Ct?[14,12,15,18][J.seat]:2)+J.phase;J.body.position.x=0,J.body.position.y=Ct?Math.abs(Math.sin(Ft))*(J.seat===2?.16:.095):Math.sin(Ft)*.017,J.body.rotation.z=Ct?Math.sin(Ft)*.06:Math.sin(L*.8+J.phase)*.016,J.body.rotation.x=0,J.body.rotation.y=0,J.body.scale.set(1,1,1),J.arms.forEach((Lt,et)=>Lt.rotation.z=(et?1:-1)*.1),J.head.rotation.y=Math.sin(L*.7+J.phase)*.08,J.head.rotation.z=Math.sin(L*.9+J.phase)*.026,J.head.rotation.x=-.4,J.eyes.scale.y=(L+J.phase)%4.8<.13?.12:1,J.eyeParts.forEach(({pupil:Lt,glint:et})=>{Lt.scale.y=.064,et.scale.y=.018}),J.feet[0].rotation.x=Ct?Math.sin(Ft)*.5:0,J.feet[1].rotation.x=Ct?-Math.sin(Ft)*.5:0;let On=J.seat===ct,rs=ft.classList.contains("movable");J.ring.visible=On||rs,J.ring.scale.setScalar((rs?1.15:1)+Math.sin(L*3)*.06),J.halo.visible=On,J.halo.scale.setScalar(1+Math.sin(L*3)*.04),J.marker.visible=rs,J.marker.position.y=1.63+Math.sin(L*4)*.06,On&&Nt.push(J.seat+"-"+J.token),rs&&vt.push(J.seat+"-"+J.token),ft.classList.contains("reacting")&&(J.body.position.y+=Math.abs(Math.sin(L*7))*.12);let En=on.get(J.seat);if(En&&(En.participants++,J.ring.visible=!0,En.kind==="victory"&&u.matches&&(J.arms.forEach((Lt,et)=>Lt.rotation.z=(et?1:-1)*1.3),J.halo.visible=!0),!u.matches)){let{age:Lt,strength:et,hop:Ps}=En;if(En.kind==="jump"){let jt=Lt<.16?Math.sin(Lt/.16*Math.PI)*.15:0,cn=Lt>=1.9?Math.sin((Lt-1.9)/.3*Math.PI)*.08:0;J.body.position.y+=En.jumpHeight-jt*.25,J.body.scale.set(1+jt+cn-Ps*.035,1-jt-cn+Ps*.07,1+jt*.5),J.body.rotation.z+=Math.sin(Lt*11)*.07*et,J.head.rotation.z+=Math.sin(Lt*7)*.12*et,J.eyes.scale.y=1-Ps*.35,J.arms.forEach((gn,Bt)=>gn.rotation.z=(Bt?1:-1)*(1.95+Math.sin(Lt*15)*.22)*et),J.feet.forEach((gn,Bt)=>gn.rotation.x+=Ps*(Bt?.45:-.35))}else if(En.kind==="victory"){let jt=Lt*7+J.token*.3,cn=Math.sin(jt),gn=Math.sin(jt+Math.PI/2);J.halo.visible=!0,J.seat===0?(J.body.position.y+=Math.abs(cn)*.16*et,J.body.rotation.z=cn*.13*et,J.body.scale.set(1+gn*.04*et,1-gn*.04*et,1),J.arms.forEach((xn,Bn)=>xn.rotation.z=(Bn?1:-1)*(1.2+cn*.65)*et)):J.seat===1?(J.body.position.x=cn*.13*et,J.body.rotation.z=cn*.24*et,J.head.rotation.z=-cn*.2*et,J.arms.forEach((xn,Bn)=>xn.rotation.z=(Bn?1:-1)*(1+Math.sin(jt+Bn*Math.PI)*.8)*et)):J.seat===2?(J.body.position.y+=Math.abs(cn)*.3*et,J.body.rotation.y=Math.sin(Lt*2)*.85*et,J.body.rotation.z=gn*.1*et,J.arms.forEach((xn,Bn)=>xn.rotation.z=(Bn?1:-1)*1.7*et)):(J.body.position.x=cn*.18*et,J.body.rotation.y=gn*.5*et,J.head.rotation.x+=cn*.15*et,J.arms[0].rotation.z=-(1.7+gn*.7)*et,J.arms[1].rotation.z=(1.7-gn*.7)*et),J.feet.forEach((xn,Bn)=>xn.rotation.x=Math.sin(jt+Bn*Math.PI)*.55*et);let Bt=(Lt+J.token*.18)%7;if(Bt>=2&&Bt<3.4){let xn=(Bt-2)/1.4,Bn=Math.sin(Math.PI*xn);J.body.position.y+=Bn*1.9*et,J.body.rotation.x=(J.seat%2?1:-1)*xn*Math.PI*2*et,J.body.rotation.z*=.2,J.arms.forEach((tc,af)=>tc.rotation.z=(af?1:-1)*2.2*et),J.feet.forEach(tc=>tc.rotation.x=-.6*Bn*et)}else if(Bt>=3.4&&Bt<3.8){let xn=Math.sin((Bt-3.4)/.4*Math.PI)*.16*et;J.body.scale.set(1+xn,1-xn,1+xn*.5)}else Bt>=4&&Bt<6&&(J.body.rotation.y=Math.sin(Bt*3)*.5*et,J.head.rotation.z=Math.sin(Bt*9)*.16*et,J.arms[1].rotation.z=2.05*et,J.arms[0].rotation.z=-.3*et,J.eyes.scale.y=Bt%1<.18?.15:1)}else if(En.kind==="dance"){let jt=Lt*10,cn=Math.sin(jt)*et;J.body.position.y+=Math.abs(Math.sin(jt))*.11*et,J.body.rotation.z+=cn*.14,J.body.rotation.y=Math.sin(jt*.5)*.4*et,J.head.rotation.z-=cn*.12,J.head.rotation.x+=Math.cos(jt)*.07*et,J.arms.forEach((gn,Bt)=>gn.rotation.z=(Bt?1:-1)*(1.05+Math.sin(jt+Bt*Math.PI)*.55)*et),J.feet.forEach((gn,Bt)=>gn.rotation.x+=Math.sin(jt+Bt*Math.PI)*.5*et)}else J.body.rotation.z-=.07*et,J.head.rotation.y+=.12*et,J.head.rotation.z+=Math.sin(Lt*5)*.07*et,J.arms[1].rotation.z=(2.35+Math.sin(Lt*17)*.3)*et,J.arms[0].rotation.z=-.3*et}ss||is.pose(J,P),ss||Ri.pose(J,P),J.g.updateMatrixWorld(),ye&&Be&&rs&&dt(J,ft,Wt,ue,ye)}Vt.emotes=Array.from(on.values()).map(({seat:Ve,kind:J,participants:ft,jumpHeight:ln,strength:Wt})=>({seat:Ve,kind:J,participants:ft,jumpHeight:ln,strength:Wt})),Vt.victory=We?{seats:We.seats,final:We.final,endsAt:We.endsAt,routines:We.seats.map(Ve=>["belly-clap","waddle-shimmy","prance-twirl","disco-step"][Ve]),flips:Ke.filter(Ve=>We.seats.includes(Ve.seat)).map(Ve=>({seat:Ve.seat,token:Ve.token,rotation:Ve.body.rotation.x,height:Ve.body.position.y}))}:null,Vt.highlight={seat:ct,tokens:Nt,legalTokens:vt},Ri.frame(P),m.updateMatrixWorld();for(let{batch:Ve,sources:J}of As)J.forEach((ft,ln)=>{let Wt=ft.visible,Ct=ft.parent;for(;Ct&&Wt;)Wt=Ct.visible,Ct=Ct.parent;Ve.setMatrixAt(ln,Wt?ft.matrixWorld:jl)}),Ve.instanceMatrix.needsUpdate=!0;d.render(m,v),Vt.frames++,Vt.time=L,Vt.drawCalls=d.info.render.calls,Vt.triangles=d.info.render.triangles,di>=30&&(Vt.fps=Math.round(1e3*di/Rs),di=0,Rs=0)}return Le(),requestAnimationFrame(Pt),d.domElement.addEventListener("webglcontextlost",()=>{i.dataset.renderer="lost"},{passive:!0}),{resize:Le,pickToken:He,celebrate:Q,capture:ec,gift:Ri.start,deferGift:Ri.defer,resetCaptures:()=>{is.reset(),Ri.reset()},renderer:d,scene:m,camera:v,diagnostics:Vt,dispose(){wr=!0,is.dispose(),Ri.dispose(),Oe.disconnect(),ze.disconnect(),bt.disconnect(),window.removeEventListener("scroll",ot),d.dispose()}}}var Ch=["red","green","yellow","blue"],Gl=new Set([0,8,13,21,26,34,39,47]),xr=56,Ia=[[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0]],Hl=[[[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]],[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],[[7,13],[7,12],[7,11],[7,10],[7,9],[7,8]],[[13,7],[12,7],[11,7],[10,7],[9,7],[8,7]]],Wl=[[[1.9,1.9],[1.9,4.1],[4.1,1.9],[4.1,4.1]],[[1.9,10.9],[1.9,13.1],[4.1,10.9],[4.1,13.1]],[[10.9,10.9],[10.9,13.1],[13.1,10.9],[13.1,13.1]],[[10.9,1.9],[10.9,4.1],[13.1,1.9],[13.1,4.1]]];function A_(i=""){if(!i.trim())return"";let e=new URL(i.trim());if(!["https:","http:","wss:","ws:"].includes(e.protocol)||e.username||e.password||e.pathname!=="/"||e.search||e.hash)throw new Error("BACKEND_URL must be a server origin such as https://ludoloop.pythonanywhere.com");return e.origin}function Od(i,e){let t=new URL(e),n=new URL(A_(i)||t.origin);if(n.protocol=["https:","wss:"].includes(n.protocol)?"wss:":"ws:",t.protocol==="https:"&&n.protocol!=="wss:")throw new Error("An HTTPS frontend needs an HTTPS/WSS backend.");return n.href}function Bd(i,e,t,n){let s=e?new URL("./",t):new URL((n||new URL(t).origin).replace(/\/$/,"")+"/");return s.search="",s.hash="",s.searchParams.set("room",i),s.href}function kd({send:i,identity:e,notify:t}){let n=R=>document.getElementById(R),s=!1,r=!1,a=!1,o=0,l,c,h="",f=[],u={},d=!1,m=!1,v,g,p="Join to talk with your crew.",M=new Map,b=new Map,y=!!(window.isSecureContext&&navigator.mediaDevices?.getUserMedia&&window.RTCPeerConnection);function A(R){p=R,E()}function E(){n("voice-join").hidden=r,n("voice-join").disabled=a||!s||!y,n("voice-join").textContent=a?"Connecting\u2026":"\u{1F399} Join voice";for(let R of["voice-mic","voice-speaker","voice-leave"])n(R).hidden=!r;n("voice-mic").textContent=d?"\u{1F399} Unmute":"\u{1F399} Mute",n("voice-mic").setAttribute("aria-pressed",String(d)),n("voice-speaker").textContent=m?"\u{1F507} Hear crew":"\u{1F50A} Sound on",n("voice-speaker").setAttribute("aria-pressed",String(m)),n("voice-status").textContent=p,n("voice-hear").hidden=![...M.values()].some(R=>R.blocked),w()}function w(){let R=e();document.querySelectorAll("[data-voice-seat]").forEach(W=>{let j=f.find(ve=>ve.seat===Number(W.dataset.voiceSeat)),me=j&&M.get(j.id),H=j?.id===R.id?r:me?.pc.connectionState==="connected",X=H&&!j.muted&&!!b.get(j.id)?.talking;W.hidden=!j,W.textContent=j?.muted?"\u{1F507}":X?"\u25CF":"\u{1F399}",W.title=j?.muted?"Microphone muted":X?"Speaking":H?"In voice chat":"Joining voice";let pe=W.closest(".player-card");pe?.classList.toggle("voice-talking",!!X),pe?.classList.toggle("voice-connected",!!H)})}function x(){if(!r)return;let R=[...M.values()];R.some(W=>W.pc.connectionState==="failed"||W.retries>=3&&W.pc.connectionState!=="connected")?A("Voice could not connect. Leave and rejoin, or try Wi-Fi."):R.some(W=>W.blocked)?A("Tap Hear crew to enable sound."):R.some(W=>W.pc.connectionState!=="connected")?A("Connecting your crew\u2026"):A(R.length?`${R.length+1} in voice \xB7 ${d?"Mic muted":"Mic on"}`:`${d?"Mic muted":"Mic on"} \xB7 waiting for your crew`)}function T(R,W){if(I(R),!!c)try{let j=c.createMediaStreamSource(W),me=c.createAnalyser();me.fftSize=256,j.connect(me),b.set(R,{source:j,analyser:me,data:new Uint8Array(me.fftSize),talking:!1,until:0})}catch{}}function I(R){let W=b.get(R);W&&(W.source.disconnect(),W.analyser.disconnect(),b.delete(R))}function F(){clearInterval(g),g=setInterval(()=>{if(document.hidden||!r)return;let R=e(),W=!1;for(let[j,me]of b){me.analyser.getByteTimeDomainData(me.data);let U=0;for(let X of me.data)U+=((X-128)/128)**2;Math.sqrt(U/me.data.length)>.025&&(me.until=performance.now()+250);let H=(j===R.id?!d:!f.find(X=>X.id===j)?.muted)&&performance.now()<me.until;H!==me.talking&&(me.talking=H,W=!0)}W&&w()},125)}function z(R,W){r&&M.get(R.member.id)===R&&i({type:"voice-signal",to:R.member.id,fromSession:h,toSession:R.member.session,data:W})}function q(R,W){R.queue=R.queue.then(async()=>{M.get(R.member.id)===R&&r&&await W()}).catch(()=>{M.get(R.member.id)===R&&r&&A("Voice connection interrupted. Try leaving and rejoining voice.")})}async function B(R,W=!1){R.pc.signalingState==="stable"&&(await R.pc.setLocalDescription(await R.pc.createOffer({iceRestart:W})),z(R,{description:{type:R.pc.localDescription.type,sdp:R.pc.localDescription.sdp}}))}async function Z(R){if(R.audio){R.audio.muted=m;try{await R.audio.play(),R.blocked=!1}catch{R.blocked=!0}x()}}function te(R){if(clearTimeout(R.retryTimer),R.retries>=3){x();return}R.retryTimer=setTimeout(()=>{M.get(R.member.id)!==R||R.pc.connectionState==="connected"||(R.retries++,e().seat<R.member.seat?q(R,()=>B(R,!0)):z(R,{restart:!0}),x(),te(R))},4e3)}function ie(R){let W=new RTCPeerConnection({iceServers:u.iceServers||[],bundlePolicy:"max-bundle"}),j={member:R,pc:W,queue:Promise.resolve(),candidates:[],audio:null,blocked:!1,retries:0};M.set(R.id,j);for(let me of l.getAudioTracks()){let U=W.addTrack(me,l),H=U.getParameters();H.encodings?.length&&(H.encodings[0].maxBitrate=24e3,U.setParameters(H).catch(()=>{}))}return W.onicecandidate=me=>{me.candidate&&z(j,{candidate:me.candidate.toJSON()})},W.ontrack=me=>{if(M.get(R.id)!==j)return;let U=me.streams[0]||new MediaStream([me.track]);j.audio?.remove();let H=document.createElement("audio");H.autoplay=!0,H.setAttribute("playsinline",""),H.srcObject=U,n("voice-audio").append(H),j.audio=H,T(R.id,U),Z(j)},W.onconnectionstatechange=()=>{M.get(R.id)===j&&(W.connectionState==="connected"?(clearTimeout(j.retryTimer),j.retries=0):["failed","disconnected"].includes(W.connectionState)&&te(j),x())},te(j),e().seat<R.seat&&q(j,()=>B(j)),j}function xe(R){let W=M.get(R);W&&(M.delete(R),clearTimeout(W.retryTimer),W.pc.ontrack=W.pc.onicecandidate=W.pc.onconnectionstatechange=null,W.pc.close(),W.audio&&(W.audio.pause(),W.audio.srcObject=null,W.audio.remove()),I(R))}function se(){if(!r||!h||!l){w();return}let R=e();if(!f.find(j=>j.id===R.id&&j.session===h)){ae(!1,"Voice ended. Join again to talk.");return}for(let[j,me]of M)f.some(U=>U.id===j&&U.session===me.member.session)||xe(j);for(let j of f)j.id!==R.id&&(M.has(j.id)?M.get(j.id).member=j:ie(j));x()}function ae(R=!0,W="Join to talk with your crew."){o++,clearTimeout(v),clearInterval(g),R&&(r||a)&&i({type:"voice-leave"}),r=a=!1,h="",d=m=!1;for(let j of[...M.keys()])xe(j);for(let j of[...b.keys()])I(j);l?.getTracks().forEach(j=>j.stop()),l=null,c?.close().catch(()=>{}),c=null,A(W)}async function de(){if(a||r||!s||!y)return;a=!0;let R=++o;A("Allow your microphone to join voice.");try{if(c=new(window.AudioContext||window.webkitAudioContext),await c.resume(),R!==o)return;let W=await navigator.mediaDevices.getUserMedia({video:!1,audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:1}});if(R!==o){W.getTracks().forEach(j=>j.stop());return}if(l=W,l.getAudioTracks()[0].onended=()=>ae(!0,"Microphone disconnected. Join voice again."),T(e().id,l),!i({type:"voice-join"})){ae(!1,"Reconnect to the room, then join voice.");return}A("Joining room voice\u2026"),v=setTimeout(()=>ae(!0,"Voice is unavailable. Refresh after the server update."),8e3)}catch(W){if(R!==o)return;let j=["NotAllowedError","SecurityError"].includes(W.name)?"Microphone permission denied. Allow it in browser settings, then join again.":W.name==="NotFoundError"?"No microphone found. Connect one and try again.":"Microphone is busy or unavailable. Close other calls and try again.";ae(!1,j),t(j)}}function Ge(R){if(R.type==="voice-ready"){if(!a||!l)return;clearTimeout(v),h=R.session,u=R,r=!0,a=!1,F(),A("Mic on \xB7 waiting for your crew")}else if(R.type==="voice-state")f=R.members||[],se();else if(R.type==="voice-error")ae(!0,R.message),t(R.message);else if(R.type==="voice-signal"){let W=M.get(R.from);if(!r||R.toSession!==h||!W||W.member.session!==R.fromSession)return;q(W,async()=>{let j=R.data;if(j.description){if(j.description.type==="offer"&&e().seat<W.member.seat)return;await W.pc.setRemoteDescription(j.description);for(let me of W.candidates.splice(0))await W.pc.addIceCandidate(me);j.description.type==="offer"&&(await W.pc.setLocalDescription(await W.pc.createAnswer()),z(W,{description:{type:W.pc.localDescription.type,sdp:W.pc.localDescription.sdp}}))}else j.candidate?W.pc.remoteDescription?await W.pc.addIceCandidate(j.candidate):W.candidates.length<64&&W.candidates.push(j.candidate):j.restart&&e().seat<W.member.seat&&await B(W,!0)})}}return n("voice-join").onclick=de,n("voice-leave").onclick=()=>ae(),n("voice-mic").onclick=()=>{r&&(d=!d,l.getAudioTracks().forEach(R=>R.enabled=!d),i({type:"voice-mute",fromSession:h,muted:d}),x())},n("voice-speaker").onclick=()=>{m=!m;for(let R of M.values())Z(R);E()},n("voice-hear").onclick=()=>{c?.resume();for(let R of M.values())Z(R)},window.addEventListener("pagehide",()=>ae()),document.addEventListener("visibilitychange",()=>{!document.hidden&&r&&(c?.resume().catch(()=>{}),x())}),E(),{receive:Ge,paintPlayers:w,connected(R){s=R===1,A(y?s?"Join to talk with your crew.":"Voice server update pending.":"Voice needs HTTPS and a browser with microphone support.")},disconnect(){s=!1,f=[],ae(!1,"Reconnect to the room, then join voice.")},leave(){f=[],ae(!1)},diagnostics(){return{active:r,joining:a,muted:d,deafened:m,microphoneLive:!!l?.getAudioTracks().some(R=>R.readyState==="live"),relayConfigured:!!u.relayConfigured,peers:[...M.values()].map(R=>({seat:R.member.seat,state:R.pc.connectionState,blocked:R.blocked})),talking:[...b].filter(([,R])=>R.talking).map(([R])=>f.find(W=>W.id===R)?.seat)}},async stats(){let R=[];for(let W of M.values()){let j=await W.pc.getStats();for(let me of j.values())me.type==="inbound-rtp"&&me.kind==="audio"&&R.push({seat:W.member.seat,bytes:me.bytesReceived,packets:me.packetsReceived,energy:me.totalAudioEnergy,samples:me.totalSamplesReceived})}return R}}}function zd(i){let e='<g fill="#274238" stroke="#d8ba79" stroke-width=".025"><ellipse cx="-.14" cy="-.49" rx=".12" ry=".09"/><ellipse cx=".14" cy="-.49" rx=".12" ry=".09"/><path d="M-.025-.49H.025"/></g>';return i===0?'<ellipse cy="-.77" rx=".43" ry=".06" fill="#dab77a"/><path d="M-.28-.77Q-.32-1.12 0-1.09Q.32-1.12.28-.77Z" fill="#ead09a"/><path d="M-.28-.81H.28" stroke="#4f7b40" stroke-width=".06"/>'+e:i===1?'<path d="M-.46-.75Q-.4-1.19 0-.96Q.4-1.19.46-.75Z" fill="#34433b" stroke="#dbb16b" stroke-width=".035"/><circle cy="-.91" r=".055" fill="#ffe5a3"/><path d="M0-.28Q-.15-.38-.2-.27Q-.1-.2 0-.28Q.15-.38.2-.27Q.1-.2 0-.28" fill="#45332a"/><path d="M-.17-.23H.17" stroke="#d26e5c" stroke-width=".075"/>':i===2?'<path d="M-.3-.75L-.33-1.04-.15-.87 0-1.12.15-.87.33-1.04.3-.75Z" fill="#7ac54a" stroke="#d1b56b" stroke-width=".03"/><circle cy="-.79" r=".045" fill="#ffe79b"/><path d="M-.22-.2L-.4.2H.4L.22-.2" fill="#50916a" opacity=".75"/>':i===3?'<ellipse cy="-.77" rx=".42" ry=".06" fill="#e5bd83"/><ellipse cy="-.85" rx=".28" ry=".14" fill="#ecd1a1"/><g fill="#ff92b3" stroke="#ffe49c" stroke-width=".025"><circle cx="-.2" cy="-.8" r=".075"/><circle cy="-.85" r=".075"/><circle cx=".2" cy="-.8" r=".075"/><circle cx="-.17" cy="-.21" r=".065"/><circle cy="-.16" r=".065"/><circle cx=".17" cy="-.21" r=".065"/></g>':i===4?'<path d="M-.24-.77L.05-1.27.25-.77Z" fill="#ad82de" stroke="#ffe29e" stroke-width=".025"/><circle cx=".05" cy="-1.27" r=".06" fill="#ffe59f"/><path d="M0-.18L-.22-.27V-.09L0-.18.22-.27V-.09Z" fill="#ef9d78"/>':i===5?'<ellipse cy="-.82" rx=".3" ry=".17" fill="#ad7e49"/>'+e+'<path d="M-.2-.23H.2L.27.06.16.09.12-.15" fill="#fb9956"/>':""}var Zd="https://ludoloop.pythonanywhere.com",ce=i=>document.getElementById(i),$i=["#df5e49","#64b85d","#e9b13e","#409acb"],Ts=["Bear","Panda","Deer","Fox"];var Mr="http://www.w3.org/2000/svg",Jd=[{kind:"jump",label:"Jump",icon:"\u{1F43E}",wireText:"Nice move! \u2728"},{kind:"dance",label:"Dance",icon:"\u{1F483}",wireText:"Oops! \u{1F648}"},{kind:"wave",label:"Wave",icon:"\u{1F44B}",wireText:"Let\u2019s go! \u{1F680}"}],Ms=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ci,pt=null,Un=-1,La="",An=null,Xl=null,Sr=!1,Vd,Gd=0,Rh=!0,Ki=!1,oi,Hd,Pa=null,_r=null,ql=0,bs=0,$d="create",E_=new URLSearchParams(location.search),Yl=(E_.get("room")||"").toUpperCase();try{ce("name").value=localStorage.getItem("ludo-name")||"Player",Ki=localStorage.getItem("ludo-sound")==="on",Yl&&(An=JSON.parse(localStorage.getItem("ludo-session-"+Yl)||"null"))}catch{}function Zn(i){ce("toast").textContent=i,ce("toast").hidden=!1,clearTimeout(Hd),Hd=setTimeout(()=>{ce("toast").hidden=!0},3800)}function ws(i){if(Ki)try{if(oi??=new(window.AudioContext||window.webkitAudioContext),oi.resume(),i==="capture"){[[0,190,720,.24],[.24,950,150,.09]].forEach(([t,n,s,r])=>{let a=oi.createOscillator(),o=oi.createGain(),l=oi.currentTime+t;a.type="sine",a.frequency.setValueAtTime(n,l),a.frequency.exponentialRampToValueAtTime(s,l+r),o.gain.setValueAtTime(.001,l),o.gain.linearRampToValueAtTime(.045,l+.015),o.gain.exponentialRampToValueAtTime(.001,l+r),a.connect(o),o.connect(oi.destination),a.onended=()=>{a.disconnect(),o.disconnect()},a.start(l),a.stop(l+r+.02)});return}(i==="win"?[523,659,784,1047]:[240,310,370]).forEach((t,n)=>{let s=oi.createOscillator(),r=oi.createGain();s.type="sine",s.frequency.value=t;let a=oi.currentTime+n*.09;r.gain.setValueAtTime(.035,a),r.gain.exponentialRampToValueAtTime(.001,a+.16),s.connect(r),r.connect(oi.destination),s.start(a),s.stop(a+.17)})}catch{}}function Kd(){ce("sound").classList.toggle("active",Ki),ce("sound").setAttribute("aria-label",Ki?"Disable sound":"Enable sound"),ce("sound").setAttribute("aria-pressed",String(Ki))}Kd();ce("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Zn("Fullscreen is unavailable in this browser.")}};ce("sound").onclick=()=>{Ki=!Ki;try{localStorage.setItem("ludo-sound",Ki?"on":"off")}catch{}Kd(),ws("roll")};function Jn(i){return ci?.readyState!==WebSocket.OPEN?(Zn("Reconnecting to the table. One moment\u2026"),!1):(ci.send(JSON.stringify(i)),!0)}var Ss=kd({send:Jn,identity:()=>({id:La,seat:Un}),notify:Zn});window.ludoVoice={snapshot:()=>Ss.diagnostics(),stats:()=>Ss.stats()};function Qd(){clearTimeout(Vd);let i=new WebSocket(Od(Zd,location.href));ci=i,i.onopen=()=>{i===ci&&(Gd=0,ce("connection-text").textContent="Ready to play",document.querySelector(".connection").classList.add("online"),An?.token?Jn({type:"resume",code:An.code,token:An.token}):Xl&&(Jn(Xl),Xl=null),hi())},i.onmessage=e=>{if(i!==ci)return;let t=JSON.parse(e.data);if(t.type==="joined"){Zl=!0,An={code:t.code,token:t.token,seat:t.seat,id:t.id,shareBase:t.shareBase},Un=t.seat,La=t.id,Sr=!1,Ss.connected(t.voiceVersion);try{localStorage.setItem("ludo-session-"+t.code,JSON.stringify(An))}catch{}history.replaceState({},"",location.pathname+"?room="+t.code)}else if(t.type.startsWith("voice-"))Ss.receive(t);else if(t.type==="state")R_(t.room),pt=t.room,bs=pt.serverTime-Date.now(),D_();else if(t.type==="error"){if(Sr=!1,!pt&&An){try{localStorage.removeItem("ludo-session-"+An.code)}catch{}An=null}Zn(t.message),hi()}else if(t.type==="emote"){let n=Jd.find(s=>s.wireText===t.text);n&&Ei?.celebrate(t.seat,n.kind),Zn((pt?.seats[t.seat]?.name||"Player")+": "+(n?n.icon+" "+n.label+"!":t.text)),ws("emote")}else if(t.type==="left"){if(Ss.leave(),An)try{localStorage.removeItem("ludo-session-"+An.code)}catch{}pt=null,An=null,Un=-1,La="",Pa=null,_r=null,sf({game:null}),Zl=!0,ce("welcome").hidden=!1,ce("room-screen").hidden=!0,ce("mobile-dock").hidden=!0,document.body.classList.remove("playing"),history.replaceState({},"",location.pathname),Jl("create"),hi()}},i.onclose=e=>{i===ci&&(Ss.disconnect(),ce("connection-text").textContent="Reconnecting\u2026",document.querySelector(".connection").classList.remove("online"),e.code===4001&&(Rh=!1,Zn("This player session is open in another tab.")),e.code===1008&&(Rh=!1,ce("connection-text").textContent="Connection blocked",Zn("The server blocked this connection. Check the allowed website address or reload to try again.")),Rh&&(Vd=setTimeout(Qd,Math.min(5e3,800*++Gd))),hi())},i.onerror=()=>{}}function Jl(i){$d=i,ce("create-tab").classList.toggle("selected",i==="create"),ce("join-tab").classList.toggle("selected",i==="join"),ce("join-field").hidden=i!=="join",ce("begin").innerHTML=i==="join"?"Pull up a seat <span>\u2192</span>":"Make some room <span>\u2192</span>"}ce("create-tab").onclick=()=>Jl("create");ce("join-tab").onclick=()=>Jl("join");Yl&&(Jl("join"),ce("room-input").value=Yl);function $l(i=!1){if(Sr)return;let e=ce("name").value.trim()||"Player";try{localStorage.setItem("ludo-name",e)}catch{}let t=i||$d==="create"?{type:"create",name:e,mode:i?"solo":"friends"}:{type:"join",name:e,code:ce("room-input").value.trim().toUpperCase()};if(t.type==="join"&&!/^[A-Z2-9]{6}$/.test(t.code)){Zn("Enter the six-character room code."),ce("room-input").focus();return}Sr=!0,hi(),ci?.readyState===WebSocket.OPEN?Jn(t):Xl=t}ce("begin").onclick=()=>$l();ce("solo").onclick=()=>$l(!0);ce("room-input").addEventListener("keydown",i=>{i.key==="Enter"&&$l()});ce("name").addEventListener("keydown",i=>{i.key==="Enter"&&$l()});ce("room-input").addEventListener("input",()=>{ce("room-input").value=ce("room-input").value.toUpperCase().replace(/[^A-Z0-9]/g,"")});function hi(){if(ce("begin").disabled=Sr,ce("solo").disabled=Sr,!pt?.game)return;let i=pt.game,e=Date.now()+bs>=(i.giftUntil||0),t=e&&!Ci&&i.turn===Un&&i.phase==="roll"&&ci?.readyState===WebSocket.OPEN&&Date.now()>=ql;ce("roll").disabled=!t,ce("dice").disabled=!t,document.querySelectorAll("[data-seat-dice]").forEach(s=>{s.disabled=!(t&&Number(s.dataset.seatDice)===Un)});let n=e&&!Ci&&i.turn===Un&&i.phase==="move"&&Date.now()>=ql&&ci?.readyState===WebSocket.OPEN;ce("mobile-roll").disabled=!(t||n),ce("mobile-dice").disabled=!t}async function jd(i,e){try{await navigator.clipboard.writeText(i)}catch{let t=document.createElement("textarea");t.value=i,t.className="sr-only",document.body.append(t),t.select();let n=document.execCommand("copy");if(t.remove(),!n){window.prompt("Copy this invite",i);return}}Zn(e)}ce("copy-code").onclick=()=>pt&&jd(pt.code,"Room code copied. Bring your crew!");ce("copy-link").onclick=()=>{pt&&jd(Bd(pt.code,Zd,location.href,An?.shareBase),"Invite link copied. Send it to your friends!")};ce("leave").onclick=()=>{pt?.game&&pt.game.phase!=="done"&&!window.confirm("Leave this race? Your tokens will leave the board.")||Jn({type:"leave"})};ce("rules-button").onclick=()=>ce("rules-dialog").showModal();ce("close-rules").onclick=ce("got-it").onclick=()=>ce("rules-dialog").close();ce("rules-dialog").onclick=i=>{if(i.target===ce("rules-dialog")){let e=i.target.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&i.target.close()}};document.querySelector(".emotes").innerHTML=Jd.map((i,e)=>'<button type="button" class="emote-action" data-emote="'+e+'" title="'+i.label+' with your explorers" aria-label="'+i.label+' with my characters"><span aria-hidden="true">'+i.icon+"</span><span>"+i.label+"</span></button>").join("");document.querySelectorAll("[data-emote]").forEach(i=>{i.onclick=()=>{!pt||!Jn({type:"emote",index:Number(i.dataset.emote)})||(document.querySelectorAll("[data-emote]").forEach(e=>e.disabled=!0),setTimeout(()=>document.querySelectorAll("[data-emote]").forEach(e=>e.disabled=!1),2050))}});function Kl(){pt?.game&&!ce("roll").disabled&&Jn({type:"roll",revision:pt.game.revision})}ce("roll").onclick=ce("dice").onclick=Kl;ce("mobile-dice").onclick=Kl;ce("mobile-roll").onclick=()=>{pt?.game?.phase==="move"?ce("board").scrollIntoView({behavior:"smooth",block:"center"}):Kl()};function ef(i=""){return'<defs><radialGradient id="'+i+'canopy"><stop stop-color="#92c63f"/><stop offset=".48" stop-color="#41953a"/><stop offset="1" stop-color="#155d39"/></radialGradient><linearGradient id="'+i+'bark" x2="1" y2=".1"><stop stop-color="#4d3624"/><stop offset=".5" stop-color="#977044"/><stop offset="1" stop-color="#503d28"/></linearGradient><radialGradient id="'+i+'forest-floor"><stop stop-color="#81a943"/><stop offset=".65" stop-color="#417637"/><stop offset="1" stop-color="#174b35"/></radialGradient><linearGradient id="'+i+'stream" x2="1" y2=".3"><stop stop-color="#145968"/><stop offset=".4" stop-color="#24b6ba"/><stop offset=".7" stop-color="#5cdad1"/><stop offset="1" stop-color="#19758c"/></linearGradient><symbol id="'+i+'tree" viewBox="-1 -1.8 2 2.3"><ellipse cy=".29" rx=".8" ry=".22" fill="#102e2370"/><path d="M-.14 .25L-.09-1.25H.11L.18 .25Z" fill="url(#'+i+'bark)"/><path d="M0-.5L-.44-.87M.05-.7L.4-1.02" stroke="#694a2a" stroke-width=".11" stroke-linecap="round"/><g class="tree-crown"><path d="M-.79-.62Q-1.02-.86-.65-1.14Q-.85-1.54-.34-1.58Q-.01-1.97.33-1.57Q.82-1.56.72-1.15Q1.07-.82.7-.62Q.42-.33.1-.56Q-.38-.35-.79-.62Z" fill="#145635" stroke="#164329" stroke-width=".035"/><ellipse cx="-.42" cy="-1.13" rx=".43" ry=".36" fill="url(#'+i+'canopy)"/><ellipse cx=".4" cy="-1.17" rx=".4" ry=".34" fill="url(#'+i+'canopy)"/><ellipse cy="-1.4" rx=".48" ry=".37" fill="url(#'+i+'canopy)"/><ellipse cy="-.9" rx=".51" ry=".32" fill="url(#'+i+'canopy)"/><path d="M-.59-1.28Q-.47-1.42-.31-1.38M-.1-1.56Q.08-1.71.25-1.55M.34-1.18Q.57-1.33.64-1.15M-.19-.92Q.05-1.12.22-.92" stroke="#aed45c" stroke-opacity=".55" stroke-width=".045" fill="none" stroke-linecap="round"/></g></symbol><symbol id="'+i+'rock" viewBox="-.6 -.6 1.2 1"><ellipse cy=".2" rx=".52" ry=".16" fill="#163d2570"/><path d="M-.53.1L-.35-.35.06-.5.44-.22.53.16.14.29Z" fill="#687d70" stroke="#324e40" stroke-width=".035"/><path d="M-.35-.35L.06-.5.17-.15-.14.09-.53.1Z" fill="#99aa86"/><path d="M.17-.15L.44-.22.53.16.14.29-.14.09Z" fill="#50695b"/><path d="M-.35-.35L.06-.5.17-.15" stroke="#c6cdb0" stroke-width=".03" fill="none"/><path d="M-.48.13Q-.18.0-.08.24" stroke="#7aab42" stroke-width=".09" fill="none"/></symbol><symbol id="'+i+'grass" viewBox="-.4 -.5 .8 .7"><g class="grass-blades"><path d="M0 .1Q-.43-.02-.35-.36Q-.18-.19-.08.05Q-.23-.37.02-.49Q.15-.25.06.05Q.16-.28.39-.28Q.37-.04.08.1Z" fill="#407e31"/><path d="M-.05.06Q-.19-.29-.16-.32M.04.05L.02-.34M.11.06Q.24-.17.31-.21" stroke="#a0c94d" stroke-width=".025" fill="none"/></g></symbol></defs>'}function vr(i,e,t,n=1,s="",r=0){let a=i==="tree"?n*1.15:n*.85;return'<g transform="translate('+e+" "+t+')"><g class="scenery-motion motion-'+i+'" style="--scene-delay:'+r+'s"><use class="scene-'+i+'" href="#'+s+i+'" x="'+-n/2+'" y="'+-a*.8+'" width="'+n+'" height="'+a+'"/></g></g>'}function C_(){let i='<svg viewBox="-4 -1.2 23 17.4" xmlns="'+Mr+'" aria-hidden="true">'+ef("world-");i+='<rect x="-4" y="-1.2" width="23" height="17.4" rx="1.5" fill="url(#world-forest-floor)"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#274a32" stroke-width="1.6" fill="none"/><path d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="url(#world-stream)" stroke-width="1.12" fill="none"/><path class="world-current" d="M-2.9-1.3Q-1.3 2.6-2.4 5.9T-2.4 10.7Q-.9 13.3-2.5 16.4M17.3-1.3Q15.9 3.1 17.4 6Q18.6 8.3 17 11.3Q16 14 17.7 16.4" stroke="#cffcf0" stroke-opacity=".55" stroke-width=".06" stroke-dasharray=".25 .65" fill="none"/>';for(let e of[-.88,15.95]){let t="M"+e+"-1.2Q"+(e+.28)+" 2.8 "+(e-.08)+" 5.8T"+(e-.08)+" 10.4Q"+(e+.35)+" 13 "+e+" 16.2";i+='<path d="'+t+'" stroke="#335439" stroke-width=".8" fill="none"/><path d="'+t+'" stroke="url(#world-stream)" stroke-width=".59" fill="none"/><path class="world-current" d="'+t+'" stroke="#b8fff1" stroke-width=".045" stroke-dasharray=".2 .4" fill="none" opacity=".6"/>'}for(let e=0;e<82;e++){let t=e%2,n=Math.floor(e/2),s=t?16.9+n%3*.7:-1.85-n%3*.7,r=-.4+n%14*1.23;i+=vr("tree",s,r,1.5+e%4*.18,"world-",-(e%9)*.7)}for(let e=0;e<88;e++){let t=e%2,n=Math.floor(e/2),s=t?15.1+n%4*.92:-.18-n%4*.92,r=.15+n%15*1.06;i+=vr(e%7===0?"rock":"grass",s,r,e%7===0?.65:.6,"world-",-e*.13)}for(let[e,t]of[[-.9,4.1],[15.95,9.4],[-.88,12.8]]){i+='<g transform="translate('+e+" "+t+') rotate(-12)"><ellipse cy=".18" rx=".98" ry=".34" fill="#123e2f70"/><rect x="-.95" y="-.29" width="1.9" height=".58" rx=".08" fill="#604529"/>';for(let n=0;n<9;n++)i+='<rect x="'+(-.91+n*.21)+'" y="-.31" width=".18" height=".55" rx=".03" fill="'+(n%2?"#ac834b":"#c3985a")+'" stroke="#59432b" stroke-width=".025"/>';i+='<path d="M-.95-.31Q0-.47.95-.31M-.95.2Q0 .1.95.2" stroke="#dfc78b" stroke-width=".055" fill="none"/><path d="M-.91-.4V.29M.9-.4V.29" stroke="#785329" stroke-width=".12"/></g>'}for(let e of[-.88,15.95]){i+='<g transform="translate('+e+' 7.2) scale(.65 1)"><path d="M-.55-.8L-.5 .55Q0 .85.5 .55L.55-.8" fill="url(#world-stream)"/>';for(let t=0;t<7;t++)i+='<path class="waterfall-line" style="--scene-delay:'+-t*.12+'s" d="M'+(-.43+t*.14)+'-.78v.75" stroke="#c1fff7" stroke-opacity=".65" stroke-width=".05" stroke-dasharray=".2 .16"/>';i+='<ellipse class="water-spray" cy=".65" rx=".7" ry=".22" fill="#d2fff7" opacity=".45"/></g>'}for(let e=0;e<25;e++){let t=e%2?15.7+e%3*.65:-.65-e%3*.65,n=.5+e%13*1.2;i+='<g transform="translate('+t+" "+n+')"><g class="forest-flower"><circle cx="-.06" r=".09" fill="#ef9b9d"/><circle cx=".06" r=".09" fill="#f1b095"/><circle cy="-.08" r=".09" fill="#ee817e"/><circle r=".055" fill="#ffe58e"/></g></g>',i+='<circle class="forest-firefly" style="--scene-delay:'+-e*.37+'s" cx="'+(t+.22)+'" cy="'+(n-.6)+'" r=".027" fill="#fff795"/>'}return i+="</svg>",i}var Ql=document.createElement("div");Ql.className="world-stage";Ql.setAttribute("aria-hidden","true");Ql.innerHTML=C_();document.querySelector(".board-shell").prepend(Ql);var tf=()=>{let i='<svg viewBox="-.2 -.2 15.4 15.4" xmlns="'+Mr+'" aria-label="Jungle adventure Ludo board" role="group"><defs>';i+='<linearGradient id="stone" x2=".3" y2="1"><stop stop-color="#fff0cb"/><stop offset=".55" stop-color="#e3cca4"/><stop offset="1" stop-color="#bca27b"/></linearGradient><linearGradient id="wood" x2=".2" y2="1"><stop stop-color="#ac783e"/><stop offset="1" stop-color="#583a22"/></linearGradient><radialGradient id="water"><stop stop-color="#67e8e8"/><stop offset="1" stop-color="#087d96"/></radialGradient>',$i.forEach((n,s)=>{i+='<linearGradient id="land-'+s+'" x2=".6" y2="1"><stop stop-color="'+n+'" stop-opacity=".85"/><stop offset="1" stop-color="'+n+'" stop-opacity=".45"/></linearGradient>',i+='<radialGradient id="fur-'+s+'" cx=".3" cy=".2" r=".9"><stop stop-color="'+["#d49350","#fffdf0","#e9b965","#ffb74e"][s]+'"/><stop offset="1" stop-color="'+["#854c28","#d9d9c8","#ac702d","#cb5420"][s]+'"/></radialGradient>'}),i+='<pattern id="ground-grain" width=".62" height=".62" patternUnits="userSpaceOnUse"><path d="M.1 .22l.06-.09.04 .08M.45 .49l.035-.09.03 .07" stroke="#e7ec9570" stroke-width=".025" fill="none"/><ellipse cx=".42" cy=".16" rx=".055" ry=".025" fill="#182f1935"/><circle cx=".15" cy=".52" r=".018" fill="#ffe8aa55"/><path d="M.32 .35h.07" stroke="#eacf8035" stroke-width=".02"/></pattern><filter id="token-shadow" x="-60%" y="-60%" width="220%" height="230%"><feDropShadow dx=".02" dy=".045" stdDeviation=".025" flood-color="#182d18" flood-opacity=".4"/></filter></defs>',i+=ef(),i+='<path d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#0b6880" stroke-width=".52" fill="none"/><path class="river-flow" d="M-.15 6 Q3 5.4 5.6 6 Q6.5 3 6 -.2 M9 -.2 Q8.6 3.7 9.4 5.6 Q12 6.7 15.2 6 M15.2 9 Q12 8.3 9.4 9.4 Q8.7 12 9 15.2 M6 15.2 Q6.7 12 5.6 9.4 Q3 8.7 -.2 9" stroke="#7ef0e9" stroke-width=".12" stroke-dasharray=".14 .5" fill="none" opacity=".8"/>',[[0,0],[0,9],[9,9],[9,0]].forEach(([n,s],r)=>{i+='<g class="habitat"><rect x="'+(s+.18)+'" y="'+(n+.26)+'" width="5.64" height="5.64" rx="1.2" fill="#273f22"/><rect x="'+(s+.2)+'" y="'+(n+.1)+'" width="5.6" height="5.65" rx="1.2" fill="url(#land-'+r+')" stroke="#769741" stroke-width=".11"/>',i+='<rect x="'+(s+.25)+'" y="'+(n+.15)+'" width="5.5" height="5.55" rx="1.15" fill="url(#ground-grain)"/><path d="M'+(s+1.8)+" "+(n+1.9)+"Q"+(s+3)+" "+(n+2.5)+" "+(s+4.2)+" "+(n+1.9)+"M"+(s+1.9)+" "+(n+1.9)+"Q"+(s+2.4)+" "+(n+3)+" "+(s+1.9)+" "+(n+4.1)+"M"+(s+4.1)+" "+(n+1.9)+"Q"+(s+3.5)+" "+(n+3)+" "+(s+4.1)+" "+(n+4.1)+"M"+(s+1.9)+" "+(n+4.1)+"Q"+(s+3)+" "+(n+3.7)+" "+(s+4.1)+" "+(n+4.1)+'" fill="none" stroke="#efdc9640" stroke-width=".26" stroke-linecap="round"/>',i+='<path d="M'+(s+.8)+" "+(n+4.9)+" Q"+(s+3)+" "+(n+5.8)+" "+(s+5.1)+" "+(n+4.9)+'" fill="none" stroke="#ffe8a5" stroke-opacity=".16" stroke-width=".12"/>',Wl[r].forEach(([a,o])=>{i+='<ellipse cx="'+o+'" cy="'+(a+.12)+'" rx=".7" ry=".43" fill="#132816" fill-opacity=".25" stroke="#f9d486" stroke-opacity=".35" stroke-width=".05"/>'});for(let[a,o,l]of[[.55,1.32,1.25],[5.35,1.38,1.1],[.48,4.3,.95],[5.5,4.8,1.3],[1.12,5.3,.8],[4.64,5.5,.82]])i+=vr("tree",s+a,n+o,l,"",-(r+a)*.6);for(let a=0;a<15;a++){let o=s+.45+a%5*1.15,l=n+(a<5?5.6:a<10?.4:3.04);a>=10&&a%5>0&&a%5<4||(i+=vr("grass",o,l,.43,"",-a*.3))}i+=vr("rock",s+.84,n+3.54,.52)+vr("rock",s+5.05,n+2.25,.49),i+='<text x="'+(s+3)+'" y="'+(n+.78)+'" text-anchor="middle" fill="#fff4c9" font-size=".26" class="yard-name">'+Ts[r].toUpperCase()+" CAMP</text>";for(let a=0;a<9;a++){let o=s+.4+a%5*1.22,l=n+(a<5?5.4:.35);i+='<g transform="translate('+o+" "+l+") rotate("+a*39+')"><ellipse cx="-.08" cy="0" rx=".24" ry=".1" fill="#1e6634"/><ellipse cx=".1" cy="-.13" rx=".26" ry=".11" fill="#72a72d"/><path d="M-.3 .03L.26 -.08" stroke="#b3c84b" stroke-width=".025"/>'+(a%3===0?'<circle cx=".1" cy=".04" r=".1" fill="#f09286"/><circle cx=".1" cy=".04" r=".035" fill="#ffe27d"/>':"")+"</g>"}i+='<g transform="translate('+(s+.66)+" "+(n+3)+')"><path d="M0 .3V-.15" stroke="#704623" stroke-width=".12"/><path class="torch-flame" d="M0 -.7Q.3 -.36 0 -.1Q-.25 -.25 0 -.7" fill="#ffce58"/><circle class="torch-glow" cy="-.35" r=".4" fill="#ffb12b" opacity=".12"/></g>',i+='<g transform="translate('+(s+5.12)+" "+(n+3)+') rotate(-12)"><rect x="-.22" y="-.15" width=".44" height=".32" rx=".05" fill="url(#wood)" stroke="#e7b65e" stroke-width=".035"/><path d="M-.22 -.02H.22M0 -.15V.17" stroke="#e9bc5e" stroke-width=".045"/><circle class="treasure-glint" cy=".01" r=".055" fill="#ffef9c"/></g></g>',i+='<g transform="translate('+(s+.87)+" "+(n+4.7)+')"><ellipse cy=".13" rx=".35" ry=".14" fill="#294627"/><path d="M-.3 .12L-.23 -.15-.05 -.24.15 -.12.2 .14Z" fill="#667868" stroke="#354b35" stroke-width=".035"/><path d="M-.22 -.13L-.05 -.18.12 -.09" stroke="#9aa484" stroke-width=".045" fill="none"/><rect x=".18" y="-.07" width=".065" height=".22" rx=".02" fill="#e6d4a2"/><path class="mushroom-cap" d="M.07 -.06Q.2 -.33.35 -.06Z" fill="#e67552"/><circle cx=".19" cy="-.15" r=".025" fill="#ffefd0"/><circle cx=".27" cy="-.11" r=".02" fill="#ffefd0"/></g>'});for(let n=0;n<15;n++)for(let s=0;s<15;s++){if(!(n>=6&&n<=8||s>=6&&s<=8)||n>=6&&n<=8&&s>=6&&s<=8)continue;let r=Ia.findIndex(([l,c])=>l===n&&c===s),a="url(#stone)",o=!1;for(let l=0;l<4;l++)(Hl[l].some(([c,h])=>c===n&&h===s)||r===l*13)&&(a=$i[l],o=!0);i+='<g class="path-tile" data-cell="'+n+","+s+'"><rect x="'+(s+.03)+'" y="'+(n+.14)+'" width=".94" height=".9" rx=".13" fill="#574b32"/><rect x="'+(s+.035)+'" y="'+(n+.03)+'" width=".93" height=".91" rx=".13" fill="'+a+'" stroke="'+(o?"#fff2ae":"#f3dfb7")+'" stroke-opacity=".5" stroke-width=".035"/><path d="M'+(s+.17)+" "+(n+.13)+"H"+(s+.65)+"M"+(s+.08)+" "+(n+.36)+"V"+(n+.64)+'" stroke="#fff6d3" stroke-opacity=".32" stroke-width=".04" stroke-linecap="round"/>',!o&&(n+s)%4===0&&(i+='<path d="M'+(s+.77)+" "+(n+.78)+'l.14 -.05-.04 .14" fill="none" stroke="#71894e" stroke-width=".045"/>'),Gl.has(r)&&(i+='<text class="safe-star" x="'+(s+.5)+'" y="'+(n+.7)+'" fill="#ffdf65" stroke="#a97824" stroke-width=".017" text-anchor="middle" font-size=".59">\u2605</text>'),i+="</g>"}return["6,6 7.5,7.5 6,9","6,6 7.5,7.5 9,6","9,6 7.5,7.5 9,9","6,9 7.5,7.5 9,9"].forEach((n,s)=>{i+='<polygon points="'+n+'" fill="'+$i[s]+'" stroke="#bc9b4e" stroke-width=".065"/>'}),i+='<circle cx="7.5" cy="7.56" r=".65" fill="#453421"/><circle cx="7.5" cy="7.5" r=".6" fill="url(#wood)" stroke="#e3bf74" stroke-width=".08"/><path d="M7.13 7.26L7.28 7.39 7.5 7.08 7.72 7.39 7.87 7.26 7.79 7.68H7.21Z" fill="#ffdb56" stroke="#aa6d16" stroke-width=".035"/><path d="M7.23 7.75H7.77" stroke="#ffea9c" stroke-width=".07" stroke-linecap="round"/><g id="effects" aria-hidden="true"></g><g id="tokens"></g></svg>',i};ce("board").innerHTML=tf();ce("preview-board").innerHTML=tf().replaceAll('id="','id="preview-').replaceAll("url(#","url(#preview-").replaceAll('href="#','href="#preview-');var ji=new Map;function br(i,e,t){return t<0?Wl[i][e]:t<=50?Ia[(i*13+t)%52].map(n=>n+.5):Hl[i][t-51].map(n=>n+.5)}function nf(i,e=!1){let t=i===2?3:i===3?2:i,n="url(#"+(e?"preview-":"")+"fur-"+i+")",s=t===1?"#292e2a":"#663819",r=t===2?'<path d="M-.34 -.43L-.37 -.91-.08 -.68M.34 -.43L.37 -.91.08 -.68" fill="'+n+'" stroke="#9d481f" stroke-width=".035"/><path d="M-.3 -.57L-.31 -.8-.19 -.64M.3 -.57L.31 -.8.19 -.64" fill="#f1d6ad"/>':'<circle cx="-.27" cy="-.68" r=".16" fill="'+(t===1?s:n)+'"/><circle cx=".27" cy="-.68" r=".16" fill="'+(t===1?s:n)+'"/><circle cx="-.27" cy="-.68" r=".09" fill="#d39b7d"/><circle cx=".27" cy="-.68" r=".09" fill="#d39b7d"/>';return t===2&&(r+='<path d="M.18 .06Q.65 .18.57 -.3Q.43 -.22.36 -.26" fill="'+n+'" stroke="#954216" stroke-width=".035"/><path d="M.49 -.04Q.59 -.14.57 -.3Q.43 -.22.36 -.26" fill="#fff5dc"/>'),t===3&&(r+='<path d="M-.2 -.7L-.27 -1.05M-.27 -.91L-.43 -1M-.27 -.91L-.18 -1.03M.2 -.7L.27 -1.05M.27 -.91L.43 -1M.27 -.91L.18 -1.03" stroke="#845c34" stroke-width=".065" fill="none" stroke-linecap="round"/>'),'<g class="animal-stride">'+r+'<g class="animal-body"><rect x="-.29" y="-.24" width=".58" height=".47" rx=".15" fill="'+$i[i]+'" stroke="#493f24" stroke-width=".035"/><rect x=".19" y="-.27" width=".17" height=".37" rx=".07" fill="#927344" stroke="#544329" stroke-width=".025"/><path d="M.23 -.25V.11M.26 -.11H.33" stroke="#f4d589" stroke-width=".035"/><ellipse class="animal-foot foot-left" cx="-.17" cy=".2" rx=".12" ry=".09" fill="'+s+'"/><ellipse class="animal-foot foot-right" cx=".17" cy=".2" rx=".12" ry=".09" fill="'+s+'"/><ellipse cx="-.27" cy="-.03" rx=".085" ry=".13" fill="'+n+'"/><path d="M-.18 -.25L.15 .12" stroke="#eac980" stroke-width=".055"/><circle cx="-.07" cy="-.1" r=".04" fill="#f9df93"/></g><g class="animal-head"><ellipse cy="-.46" rx=".34" ry=".3" fill="'+n+'" stroke="'+(t===1?"#8b9180":"#794726")+'" stroke-width=".025"/>'+(t===1?'<ellipse cx="-.16" cy="-.48" rx=".115" ry=".14" fill="'+s+'" transform="rotate(20 -.16 -.48)"/><ellipse cx=".16" cy="-.48" rx=".115" ry=".14" fill="'+s+'" transform="rotate(-20 .16 -.48)"/>':"")+(t===2?'<path d="M-.32 -.39Q-.18 -.43 0 -.25Q.18 -.43.32 -.39Q.24 -.14 0 -.18Q-.24 -.14-.32 -.39" fill="#fff5df"/>':'<ellipse cy="-.32" rx=".19" ry=".13" fill="'+(t===1?"#fffbed":"#efd1a0")+'"/>')+'<g class="animal-eyes"><ellipse cx="-.13" cy="-.48" rx=".046" ry=".063" fill="#222a20"/><ellipse cx=".13" cy="-.48" rx=".046" ry=".063" fill="#222a20"/><circle cx="-.14" cy="-.5" r=".015" fill="white"/><circle cx=".12" cy="-.5" r=".015" fill="white"/></g><ellipse cy="-.33" rx=".058" ry=".042" fill="#35291e"/><path d="M0 -.31V-.27Q-.07 -.22-.1 -.28M0 -.27Q.07 -.22.1 -.28" stroke="#614735" stroke-width=".025" fill="none" stroke-linecap="round"/><ellipse cx="-.23" cy="-.35" rx=".046" ry=".025" fill="#ef8d76" opacity=".55"/><ellipse cx=".23" cy="-.35" rx=".046" ry=".025" fill="#ef8d76" opacity=".55"/><path d="M-.18 -.63Q-.12 -.67-.07 -.64M.07 -.64Q.12 -.67.18 -.63" fill="none" stroke="#744c2d" stroke-width=".026" stroke-linecap="round"/></g></g>'}function Wd(i,e,t=!1){let n=document.createElementNS(Mr,"g");n.classList.add("token","explorer-"+i),n.dataset.seat=i,n.dataset.token=e,n.style.setProperty("--idle-delay",-e*1.3-i*.7+"s"),n.innerHTML='<ellipse class="token-shadow" cy=".24" rx=".4" ry=".16" fill="#162a1d" opacity=".3"/><ellipse class="token-ring" cy=".23" rx=".43" ry=".22" fill="'+$i[i]+'" fill-opacity=".25" stroke="'+$i[i]+'" stroke-width=".035"/><g class="animal-idle" filter="url(#'+(t?"preview-":"")+'token-shadow)">'+nf(i,t)+'</g><circle cx=".28" cy=".24" r=".11" fill="#fff0c6" stroke="#665031" stroke-width=".025"/><text class="token-number" x=".28" y=".28" text-anchor="middle" fill="#493821" font-size=".12" font-weight="900">'+(e+1)+'</text><circle class="token-hit" cy="-.23" r=".53" fill="transparent"/>';let s=document.createElementNS(Mr,"g");return s.classList.add("forest-outfit"),n.append(s),n}for(let i=0;i<4;i++)for(let e=0;e<4;e++){let t=Wd(i,e);ji.set(i+"-"+e,t),ce("board").querySelector("#tokens").append(t);let n=Wd(i,e,!0),s=i===0&&e===0?9:i===1&&e===1?16:-1,[r,a]=br(i,e,s);n.setAttribute("transform","translate("+a+","+r+")"),ce("preview-board").querySelector("#preview-tokens").append(n)}var Uh=new Map,yr=matchMedia("(prefers-reduced-motion: reduce)"),Zl=!0,Xd="",Ih=-1,Ph=null,li=0,Da=[],Ci=!1;function sf(i){li++,Da=[],Ci=!1,Ei?.resetCaptures();for(let e of ji.values())e.getAnimations().forEach(t=>t.cancel()),e.classList.remove("walking","returning","reacting","capture-prank");for(let e=0;e<4;e++)for(let t=0;t<4;t++)Uh.set(e+"-"+t,i.game?.tokens[e][t]??-1);ce("winner-layer").classList.remove("waiting-flight")}function R_(i){let e=i.game;if(Zl||Xd!==i.code||!e||e.revision<Ih){sf(i),Zl=!1,Xd=i.code,Ph=e?.lastMove?.id??null,Ih=e?.revision??-1;return}Ih=e.revision,e.lastMove&&e.lastMove.id!==Ph&&(Ph=e.lastMove.id,Ei?.deferGift(e.lastMove.gift),Da.push({...e.lastMove,captured:e.lastMove.captured.map(t=>({...t}))}),queueMicrotask(P_))}function Lh(i,e,t){Uh.set(i+"-"+e,t);let n=ji.get(i+"-"+e),[s,r]=br(i,e,t);n.style.transform="translate("+r+"px,"+s+"px)",n.dataset.visualStep=t}function I_(i,e,t,n="leaf"){if(yr.matches)return;let[s,r]=br(i,e,t),a=document.createElementNS(Mr,"g");a.setAttribute("transform","translate("+r+" "+s+")"),a.classList.add("landing-effect"),a.dataset.capture=String(n==="capture"),a.innerHTML='<circle r=".42" fill="none" stroke="'+(n==="capture"?"#fcb46a":"#ffdf78")+'" stroke-width=".055"/>'+Array.from({length:5},(o,l)=>'<text x="'+Math.cos(l*1.256)*.5+'" y="'+Math.sin(l*1.256)*.5+'" fill="#ffed9d" font-size=".18">'+(n==="capture"?"\u2727":"\u2726")+"</text>").join(""),ce("board").querySelector("#effects").append(a),setTimeout(()=>a.remove(),650)}async function P_(){if(Ci)return;Ci=!0;let i=li;for(hi(),Qi();Da.length&&i===li;){let e=Da.shift(),t=ji.get(e.seat+"-"+e.token);t.classList.add("walking"),t.classList.remove("finished"),Lh(e.seat,e.token,e.old);let n=e.old<0?[0]:Array.from({length:e.next-e.old},(r,a)=>e.old+a+1);for(let r of n){if(i!==li)return;let[a,o]=br(e.seat,e.token,r),l=yr.matches?0:[155,175,160,130][e.seat],c=t.style.transform,h="translate("+o+"px,"+a+"px)";if(l){let f=t.animate([{transform:c},{transform:h}],{duration:l,easing:"ease-in-out"});try{await f.finished}catch{return}if(i!==li)return;f.cancel()}Lh(e.seat,e.token,r)}if(t.classList.remove("walking"),(e.next<=50&&Gl.has((e.seat*13+e.next)%52)||e.next===xr||e.captured.length)&&I_(e.seat,e.token,e.next,e.captured.length?"capture":"leaf"),e.captured.length){Ei?.capture(e),ws("capture"),t.classList.add("capture-prank"),Ei||Zn(["\u0D2A\u0D3F\u0D1F\u0D3F\u0D1A\u0D4D\u0D1A\u0D47! \u{1F43E}","\u0D35\u0D40\u0D1F\u0D4D\u0D1F\u0D3F\u0D7D \u0D2A\u0D4B\u0D1F\u0D3E! \u{1F602}","\u0D35\u0D40\u0D23\u0D4D\u0D1F\u0D41\u0D02 \u0D35\u0D3E! \u{1F61C}"][(e.id%3+3)%3]),ce("live-announcement").textContent=(pt.seats[e.seat]?.name||Ts[e.seat])+" captured "+e.captured.length+" explorer"+(e.captured.length>1?"s":"")+"!";let r=performance.now(),a=e.captured.map(l=>({c:l,node:ji.get(l.seat+"-"+l.token)}));if(a.forEach(({node:l})=>l.classList.add("returning")),yr.matches||await new Promise(l=>setTimeout(l,220)),i!==li)return;let o=a.map(({c:l,node:c})=>{let[h,f]=br(l.seat,l.token,-1);return yr.matches?null:c.animate([{transform:c.style.transform},{transform:"translate("+f+"px,"+h+"px)"}],{duration:700,easing:"cubic-bezier(.2,.6,.35,1)",fill:"forwards"})});try{await Promise.all(o.filter(Boolean).map(l=>l.finished))}catch{return}if(i!==li||(a.forEach(({c:l,node:c},h)=>{Lh(l.seat,l.token,-1),o[h]?.cancel(),c.classList.remove("returning")}),yr.matches||await new Promise(l=>setTimeout(l,Math.max(0,1350-(performance.now()-r)))),i!==li))return;t.classList.remove("capture-prank")}if(e.gift){Ei?.gift(e.gift),ws("emote");let r=(pt.seats[e.seat]?.name||Ts[e.seat])+" got the "+Ji[e.gift.outfit]+" outfit from the monkey!";if(ce("live-announcement").textContent=r,Ei||Zn(r),await new Promise(a=>setTimeout(a,yr.matches?700:3e3)),i!==li)return}Qi()}i===li&&(Ci=!1,ce("winner-layer").classList.remove("waiting-flight"),Qi(),hi())}function Qi(){let i=pt?.game,e=new Map,t=ce("forest-gift-spots");t||(t=document.createElementNS(Mr,"g"),t.id="forest-gift-spots",t.setAttribute("aria-hidden","true"),ce("board").querySelector("#tokens").before(t));let n=i?.forestGifts&&["roll","move","waiting"].includes(i.phase)&&i.active.some(r=>i.forestGifts.counts[r]<2)?i.forestGifts.tiles:[],s=n.join(",");t.dataset.tiles!==s&&(t.dataset.tiles=s,t.innerHTML=n.map(r=>{let[a,o]=Ia[r];return'<g transform="translate('+(o+.5)+" "+(a+.5)+')"><circle r=".35" fill="none" stroke="#ffe38b" stroke-width=".045"/><path d="M-.13 .1Q-.2-.16.13-.2Q.22 .03-.13 .1" fill="#9fdd70"/></g>'}).join(""));for(let r=0;r<4;r++)for(let a=0;a<4;a++){let o=r+"-"+a,l=ji.get(o),c=Uh.get(o)??i?.tokens[r][a]??-1,h=i?.phase==="celebration"&&i.celebration.seats.includes(r),[f,u]=br(r,a,h?-1:c),d=f+","+u;e.has(d)||e.set(d,[]),(c!==xr||h)&&e.get(d).push({el:l,r:f,c:u,p:c}),l.classList.toggle("finished",!h&&c===xr&&!l.classList.contains("walking")),l.classList.toggle("victory-dance",!!h);let m=h||!!pt?.seats[r]&&(!i||i.active.includes(r));l.style.opacity=m?"1":".2",l.classList.toggle("active-explorer",m&&i?.turn===r&&["roll","move","waiting"].includes(i.phase));let v=!!i&&Date.now()+bs>=(i.giftUntil||0)&&i.turn===Un&&r===Un&&i.phase==="move"&&i.legal.includes(a)&&Date.now()>=ql&&ci?.readyState===WebSocket.OPEN&&!Ci;l.classList.toggle("movable",v),l.setAttribute("role","button"),l.setAttribute("tabindex",v?"0":"-1"),l.setAttribute("aria-disabled",String(!v)),l.setAttribute("aria-label",Ts[r]+" token "+(a+1)+(c<0?" in camp":c===xr?" finished":" at step "+c)+(v?", can move":"")),l.dataset.visualStep=c;let g=i?.forestGifts?.outfits[r]?.[a],p=Number.isInteger(g)?Ji[g]:"";l.dataset.outfit!==p&&(l.dataset.outfit=p,l.querySelector(".forest-outfit").innerHTML=zd(g)),Number.isInteger(g)&&l.setAttribute("aria-label",l.getAttribute("aria-label")+", wearing "+Ji[g])}for(let r of e.values())r.forEach(({el:a,r:o,c:l},c)=>{if(a.classList.contains("walking")||a.classList.contains("returning"))return;let h=r.length>1?.17:0,f=r.length>1?c%2?h:-h:0,u=r.length>2?c<2?-h:h:0;a.style.transform="translate("+(l+f)+"px,"+(o+u)+"px)",a.classList.toggle("stacked",r.length>1)})}ce("board").addEventListener("click",i=>{let e=i.detail&&Ei?Ei.pickToken(i.clientX,i.clientY):i.target.closest(".token.movable");!Ci&&e&&pt?.game&&Jn({type:"move",token:Number(e.dataset.token),revision:pt.game.revision})});ce("board").addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&i.target.classList.contains("movable")&&(i.preventDefault(),i.target.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});function L_(){let i=pt.game,e=pt.owner===La;ce("mobile-dock").hidden=!i||i.phase==="done",document.body.classList.toggle("playing",!!i&&i.phase!=="done"),ce("players").innerHTML=pt.seats.map((t,n)=>{let s=i?.tokens[n].filter(o=>o===xr).length||0,r=i?.placements?.find(o=>o.seat===n);if(!t)return'<div class="player-card empty-seat '+Ch[n]+'"><div class="avatar">+</div><div class="player-info"><h3>Seat for a friend</h3><p>'+Ts[n]+" is waiting</p>"+(e&&!i?'<button class="add-bot" data-bot="'+n+'">Add a bot</button>':"")+"</div></div>";let a=i?'<div class="player-score">'+Array.from({length:4},(o,l)=>'<i class="'+(l<s?"done":"")+'"></i>').join("")+"</div>":"";return'<div class="player-card '+Ch[n]+(i&&i.turn===n&&["roll","move","waiting"].includes(i.phase)?" active":"")+(r?" placed":"")+'"><span class="voice-indicator" data-voice-seat="'+n+'" hidden></span><div class="avatar">'+('<svg viewBox="-.6 -1.12 1.2 1.5" aria-hidden="true">'+nf(n)+"</svg>")+'</div><div class="player-info"><h3>'+Ms(t.name)+"<small>"+(n===Un?"YOU":t.bot?"BOT":t.id===pt.owner?"HOST":"")+"</small></h3><p>"+(i?r?r.place===1?"\u{1F947} First place":"\u{1F948} Second place":i.active.includes(n)?s+" / 4 home \xB7 "+i.captures[n]+" captures":"Left the race":t.connected?"Ready for the race":"Reconnecting\u2026")+"</p>"+a+(e&&t.bot&&!i?'<button class="add-bot" data-bot="'+n+'">Remove bot</button>':"")+'</div><button class="seat-dice" data-seat-dice="'+n+'" aria-label="Roll for '+Ms(t.name)+'" disabled>'+["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"][(i?.lastRoll?.seat===n?i.lastRoll.value:1)-1]+"</button></div>"}).join(""),document.querySelectorAll("[data-seat-dice]").forEach(t=>{t.onclick=Kl}),document.querySelectorAll("[data-bot]").forEach(t=>{t.onclick=()=>Jn({type:"bot",seat:Number(t.dataset.bot)})}),ce("crew-count").textContent=pt.seats.filter(Boolean).length+" / 4",Ss.paintPlayers()}function Dh(i){let e={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},t=e[i]||e[6];ce("dice").querySelector(".pip-grid").innerHTML=Array.from({length:9},(n,s)=>'<i class="'+(t.includes(s)?"":"off")+'"></i>').join(""),ce("dice").setAttribute("aria-label","Dice showing "+(i||6))}function D_(){ce("welcome").hidden=!0,ce("room-screen").hidden=!1,ce("copy-code").innerHTML=Ms(pt.code)+" <small>\u25A3</small>",ce("you-label").textContent="YOU ARE "+Ts[Un]?.toUpperCase(),ce("game-mode").textContent=pt.mode==="solo"?"BOT EXPEDITION":"JUNGLE EXPEDITION";let i=pt.game,e=pt.owner===La;if(ce("room-title").textContent=i?"Your jungle adventure.":"Gather your explorers.",L_(),ce("turn-controls").hidden=!i,ce("lobby-controls").hidden=!!i,!i){ce("lobby-controls").innerHTML='<div class="eyebrow">PULL UP A SEAT</div><h2 class="lobby-title">Gather your<br>expedition.</h2><p class="lobby-help">Share your room code or invite link. Everyone joins from their own device.</p><div class="lobby-illustration">\u{1F3B2}</div><div class="lobby-steps"><span>1</span>Invite up to three friends.</div><div class="lobby-steps"><span>2</span>Fill any empty seats with bots.</div>'+(e?'<button id="start-game" class="primary" '+(pt.seats.filter(Boolean).length<2?"disabled":"")+">Start the race <span>\u2192</span></button>":'<p class="lobby-wait">Waiting for the host to start the race.</p>'),ce("start-game")&&(ce("start-game").onclick=()=>Jn({type:"start"})),ce("activity-log").innerHTML="<p>Your table is ready. Invite the crew!</p><p>At least two players are needed to start.</p>",ce("winner-layer").hidden=!0,Qi();return}ce("activity-log").innerHTML=i.messages.slice(0,5).map(r=>"<p>"+Ms(r)+"</p>").join("");let t=pt.seats[i.turn],n=i.turn===Un;if(ce("mobile-turn").textContent=n?"Your turn":(t?.name||"Player")+" is up",ce("mobile-help").textContent=i.phase==="move"?n?"Choose a glowing token":"Waiting for a move":i.phase==="waiting"?"No legal move":n?"Ready for your next roll":"Waiting for the roll",ce("mobile-roll").textContent=n?i.phase==="move"?"Pick token \u2191":"Roll \u2197":"Waiting\u2026",ce("mobile-dice").textContent=i.lastRoll?.value||6,ce("turn-tag").textContent=i.phase==="done"?"A CHAMPION IS HERE":n?"YOUR TURN":Ts[i.turn].toUpperCase()+"\u2019S TURN",ce("turn-name").textContent=i.phase==="done"?"What a race!":n?"Let\u2019s roll, "+(t?.name||"friend")+".":(t?.name||"Player")+" is up.",ce("turn-help").textContent=i.phase==="done"?"A rematch is always a good idea.":i.phase==="move"?n?"Choose a glowing token on the board.":"Waiting for a token move.":i.phase==="waiting"?"No legal move. Passing the dice\u2026":n?"Roll the dice. Make your next move.":"The dice belong to "+(t?.name||"Player")+".",ce("roll").innerHTML=i.phase==="done"?"Race complete <span>\u2661</span>":i.phase==="move"?n?"Pick a glowing token <span>\u2197</span>":"Waiting for a move\u2026":n?"Roll the dice <span>\u2197</span>":"Waiting for the roll\u2026",i.lastRoll?(Dh(i.lastRoll.value),ce("last-roll").textContent=(pt.seats[i.lastRoll.seat]?.name||"Player")+" rolled a "+i.lastRoll.value+".",Pa!==null&&Pa!==i.lastRoll.id&&(ql=Date.now()+650,ce("dice").classList.remove("rolling"),ce("dice").offsetWidth,ce("dice").classList.add("rolling"),document.querySelectorAll(".player-card.active .seat-dice").forEach(r=>r.classList.add("rolling")),ji.forEach(r=>{Number(r.dataset.seat)===i.lastRoll.seat&&(r.classList.add("reacting"),setTimeout(()=>r.classList.remove("reacting"),670))}),ws("roll"),setTimeout(()=>{ce("dice").classList.remove("rolling"),hi(),Qi()},670)),Pa=i.lastRoll.id):(Pa=null,Dh(6),ce("last-roll").textContent="Your lucky streak starts here."),ce("live-announcement").textContent=i.messages[0],i.phase==="celebration")ce("turn-tag").textContent=i.celebration.final?"TWO WINNERS!":"FIRST PLACE!",ce("turn-name").textContent=i.celebration.final?"The winners take the stage.":i.placements[0].name+" takes a bow!",ce("turn-help").textContent=i.celebration.final?"20 seconds of victory dancing. The race is complete.":"A 15-second dance, then the race for second place continues.",ce("mobile-turn").textContent=ce("turn-tag").textContent,ce("mobile-help").textContent="Enjoy the victory dance",ce("mobile-roll").textContent="Dancing\u2026",ce("roll").textContent="Victory dance\u2026",ce("winner-layer").hidden=!1,ce("winner-layer").classList.add("dance-banner"),ce("winner-layer").classList.remove("waiting-flight"),ce("winner-layer").innerHTML='<div class="winner-tag">'+(i.celebration.final?"\u{1F947} + \u{1F948} VICTORY PARTY":"\u{1F947} FIRST PLACE")+"</div><h2>"+(i.celebration.final?"Our jungle winners!":Ms(i.placements[0].name)+" wins!")+'</h2><p id="victory-quip"></p><p><span id="dance-countdown"></span> \xB7 '+(i.celebration.final?"Final celebration":"Second place up next")+"</p>",_r!==i.celebration.startedAt&&(_r=i.celebration.startedAt,Yd(),ws("win"));else if(i.phase==="done"){let r=i.placements?.[0]?.name||pt.seats[i.winner]?.name||"Player";ce("winner-layer").hidden=!1,ce("winner-layer").classList.remove("dance-banner"),ce("winner-layer").classList.toggle("waiting-flight",Ci||Da.length>0);let a=(i.placements||[]).map(o=>"<li>"+(o.place===1?"\u{1F947} First":"\u{1F948} Second")+" \u2014 "+Ms(o.name)+"</li>").join("");ce("winner-layer").innerHTML='<div class="winner-tag">JUNGLE CHAMPION</div><div class="trophy">\u{1F3C6}</div><h2>'+Ms(r)+' wins!</h2><ol class="standings">'+a+"</ol><p>Same crew, another race?</p>"+(e?'<button id="rematch" class="primary">One more game <span>\u2192</span></button>':"<p>Waiting for the host to start a rematch.</p>"),ce("rematch")&&(ce("rematch").onclick=()=>Jn({type:"rematch"})),_r!==i.winner&&(_r=i.winner,Yd(),ws("win"))}else ce("winner-layer").hidden=!0,_r=null;hi(),Qi(),rf()}var qd=0;function rf(){if(!pt?.game)return;let i=pt.game;i.giftUntil&&qd!==i.giftUntil&&Date.now()+bs>=i.giftUntil&&(qd=i.giftUntil,hi(),Qi());let e=Math.max(0,Math.ceil((i.deadline-Date.now()-bs)/1e3));if(ce("dance-countdown")&&(ce("dance-countdown").textContent=e+"s"),i.phase==="celebration"&&ce("victory-quip")){let n=Math.max(0,Date.now()+bs-i.celebration.startedAt),s=["Catch me if you can! \u{1F61C}","Oops\u2026 stuck the landing! \u{1F938}","Keep up, jungle crew! \u{1F609}","Victory looks good on us! \u2728"];ce("victory-quip").textContent=s[Math.floor(n/3500)%s.length]}ce("timer").textContent=i.phase==="done"?"":e+"s";let t=i.phase==="celebration"?(i.celebration.endsAt-i.celebration.startedAt)/1e3:45;ce("timer-fill").style.width=(i.phase==="done"?0:Math.min(100,e/t*100))+"%"}setInterval(rf,250);function Yd(){ce("confetti").innerHTML="";for(let i=0;i<70;i++){let e=document.createElement("i");e.style.left=Math.random()*100+"%",e.style.background=$i[i%4],e.style.animationDelay=Math.random()*.65+"s",e.style.animationDuration=2+Math.random()*1.5+"s",ce("confetti").append(e)}setTimeout(()=>{ce("confetti").innerHTML=""},4500)}Qi();Dh(6);var Ei=Fd({board:ce("board"),tokenNodes:ji,getRoom:()=>pt,getSeat:()=>Un,getServerTime:()=>Date.now()+bs,colors:$i,track:Ia,lanes:Hl,yards:Wl,safe:Gl});Qd();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
