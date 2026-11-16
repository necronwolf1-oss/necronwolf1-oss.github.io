(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,O=1020,k=35902,A=35899,j=1021,ee=1022,M=1023,te=1026,ne=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,N=33779,de=35840,fe=35841,pe=35842,me=35843,he=36196,ge=37492,_e=37496,ve=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,ke=37815,Ae=37816,je=37817,Me=37818,Ne=37819,Pe=37820,Fe=37821,P=36492,Ie=36494,Le=36495,Re=36283,F=36284,ze=36285,I=36286,L=2300,Be=2301,Ve=2302,He=2303,Ue=2400,We=2401,Ge=2402,Ke=3200,qe=`srgb`,Je=`srgb-linear`,Ye=`linear`,Xe=`srgb`,Ze=7680,Qe=35044,$e=35048,et=2e3;function tt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function nt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function it(){let e=rt(`canvas`);return e.style.display=`block`,e}var at={};function ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function st(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=st(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ct(...e){let t=e.join(` `);t in at||(at[t]=!0,R(...e))}function lt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ut={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},dt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ft=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pt=Math.PI/180,mt=180/Math.PI;function ht(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ft[e&255]+ft[e>>8&255]+ft[e>>16&255]+ft[e>>24&255]+`-`+ft[t&255]+ft[t>>8&255]+`-`+ft[t>>16&15|64]+ft[t>>24&255]+`-`+ft[n&63|128]+ft[n>>8&255]+`-`+ft[n>>16&255]+ft[n>>24&255]+ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]).toLowerCase()}function gt(e,t,n){return Math.max(t,Math.min(n,e))}function _t(e,t){return(e%t+t)%t}function vt(e,t,n){return(1-n)*e+n*t}function yt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function bt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xt(e,t){if(t.constructor===Float32Array)return e;let n=bt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function St(e,t){if(t.constructor===Float32Array)return e;let n=bt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}o=Symbol.iterator;var B=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=B,e.prototype.isVector2=!0;var Ct=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var V=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wt.copy(this).projectOnVector(e),this.sub(wt)}reflect(e){return this.sub(wt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=V,t.prototype.isVector3=!0;var wt=new V,Tt=new Ct,H=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Et.makeScale(e,t)),this}rotate(e){return ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Et.makeRotation(-e)),this}translate(e,t){return ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Et.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=H,n.prototype.isMatrix3=!0;var Et=new H,Dt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ot=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kt(){let e={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=jt(e.r),e.g=jt(e.g),e.b=jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Mt(e.r),e.g=Mt(e.g),e.b=Mt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ye:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Je]:{primaries:t,whitePoint:r,transfer:Ye,toXYZ:Dt,fromXYZ:Ot,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Dt,fromXYZ:Ot,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),e}var At=kt();function jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Mt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Nt,Pt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nt===void 0&&(Nt=rt(`canvas`)),Nt.width=e.width,Nt.height=e.height;let t=Nt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Nt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(jt(t[e]/255)*255):t[e]=jt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ft=0,It=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ft++}),this.uuid=ht(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Lt(r[t].image)):e.push(Lt(r[t]))}else e=Lt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Lt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Pt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Rt=0,zt=new V,Bt=class e extends dt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=M,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=ht(),this.name=``,this.source=new It(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zt).x}get height(){return this.source.getSize(zt).y}get depth(){return this.source.getSize(zt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=300,Bt.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var Vt=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=Vt,r.prototype.isVector4=!0;var Ht=class extends dt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Bt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new It(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ut=class extends Ht{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wt=class extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Gt=class extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Kt=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/qt.setFromMatrixColumn(e,0).length(),i=1/qt.setFromMatrixColumn(e,1).length(),a=1/qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yt,e,Xt)}lookAt(e,t,n){let r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Zt.crossVectors(n,$t),Zt.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Zt.crossVectors(n,$t)),Zt.normalize(),Qt.crossVectors($t,Zt),r[0]=Zt.x,r[4]=Qt.x,r[8]=$t.x,r[1]=Zt.y,r[5]=Qt.y,r[9]=$t.y,r[2]=Zt.z,r[6]=Qt.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=qt.set(r[0],r[1],r[2]).length(),o=qt.set(r[4],r[5],r[6]).length(),s=qt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Jt.copy(this);let c=1/a,l=1/o,u=1/s;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=l,Jt.elements[5]*=l,Jt.elements[6]*=l,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=et,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=Kt,i.prototype.isMatrix4=!0;var qt=new V,Jt=new Kt,Yt=new V(0,0,0),Xt=new V(1,1,1),Zt=new V,Qt=new V,$t=new V,en=new Kt,tn=new Ct,nn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-gt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return en.makeRotationFromQuaternion(e),this.setFromRotationMatrix(en,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tn.setFromEuler(this),this.setFromQuaternion(tn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER=`XYZ`;var rn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},an=0,on=new V,sn=new Ct,cn=new Kt,ln=new V,un=new V,dn=new V,fn=new Ct,pn=new V(1,0,0),mn=new V(0,1,0),hn=new V(0,0,1),gn={type:`added`},_n={type:`removed`},vn={type:`childadded`,child:null},yn={type:`childremoved`,child:null},bn=class e extends dt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:an++}),this.uuid=ht(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new nn,r=new Ct,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new H}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sn.setFromAxisAngle(e,t),this.quaternion.multiply(sn),this}rotateOnWorldAxis(e,t){return sn.setFromAxisAngle(e,t),this.quaternion.premultiply(sn),this}rotateX(e){return this.rotateOnAxis(pn,e)}rotateY(e){return this.rotateOnAxis(mn,e)}rotateZ(e){return this.rotateOnAxis(hn,e)}translateOnAxis(e,t){return on.copy(e).applyQuaternion(this.quaternion),this.position.add(on.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pn,e)}translateY(e){return this.translateOnAxis(mn,e)}translateZ(e){return this.translateOnAxis(hn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ln.copy(e):ln.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(un,ln,this.up):cn.lookAt(ln,un,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),sn.setFromRotationMatrix(cn),this.quaternion.premultiply(sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_n),yn.child=e,this.dispatchEvent(yn),yn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gn),vn.child=e,this.dispatchEvent(vn),vn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(un,e,dn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(un,fn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};bn.DEFAULT_UP=new V(0,1,0),bn.DEFAULT_MATRIX_AUTO_UPDATE=!0,bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=class extends bn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Sn={type:`move`},Cn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},En={h:0,s:0,l:0};function Dn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=At.workingColorSpace){if(e=_t(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Dn(i,r,e+1/3),this.g=Dn(i,r,e),this.b=Dn(i,r,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,t=qe){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){let n=wn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}copyLinearToSRGB(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return At.workingToColorSpace(On.copy(this),e),Math.round(gt(On.r*255,0,255))*65536+Math.round(gt(On.g*255,0,255))*256+Math.round(gt(On.b*255,0,255))}getHexString(e=qe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(On.copy(this),t);let n=On.r,r=On.g,i=On.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=qe){At.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,r=On.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(En);let n=vt(Tn.h,En.h,t),r=vt(Tn.s,En.s,t),i=vt(Tn.l,En.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new U;U.NAMES=wn;var kn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},An=class extends bn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new V,Mn=new V,Nn=new V,Pn=new V,Fn=new V,In=new V,Ln=new V,Rn=new V,zn=new V,Bn=new V,Vn=new Vt,Hn=new Vt,Un=new Vt,Wn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jn.subVectors(e,t),r.cross(jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){jn.subVectors(r,t),Mn.subVectors(n,t),Nn.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Mn),s=jn.dot(Nn),c=Mn.dot(Mn),l=Mn.dot(Nn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)!==null&&Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Pn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Pn.x),s.addScaledVector(a,Pn.y),s.addScaledVector(o,Pn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Vn.setScalar(0),Hn.setScalar(0),Un.setScalar(0),Vn.fromBufferAttribute(e,t),Hn.fromBufferAttribute(e,n),Un.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vn,i.x),a.addScaledVector(Hn,i.y),a.addScaledVector(Un,i.z),a}static isFrontFacing(e,t,n,r){return jn.subVectors(n,t),Mn.subVectors(e,t),jn.cross(Mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),jn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Fn.subVectors(r,n),In.subVectors(i,n),Rn.subVectors(e,n);let s=Fn.dot(Rn),c=In.dot(Rn);if(s<=0&&c<=0)return t.copy(n);zn.subVectors(e,r);let l=Fn.dot(zn),u=In.dot(zn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Fn,a);Bn.subVectors(e,i);let f=Fn.dot(Bn),p=In.dot(Bn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(In,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ln.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ln,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Fn,a).addScaledVector(In,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,qn):qn.fromBufferAttribute(r,t),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Jn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Jn.copy(e.boundingBox)),Jn.applyMatrix4(e.matrixWorld),this.union(Jn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),nr.subVectors(this.max,tr),Yn.subVectors(e.a,tr),Xn.subVectors(e.b,tr),Zn.subVectors(e.c,tr),Qn.subVectors(Xn,Yn),$n.subVectors(Zn,Xn),er.subVectors(Yn,Zn);let t=[0,-Qn.z,Qn.y,0,-$n.z,$n.y,0,-er.z,er.y,Qn.z,0,-Qn.x,$n.z,0,-$n.x,er.z,0,-er.x,-Qn.y,Qn.x,0,-$n.y,$n.x,0,-er.y,er.x,0];return!ar(t,Yn,Xn,Zn,nr)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,Yn,Xn,Zn,nr))?!1:(rr.crossVectors(Qn,$n),t=[rr.x,rr.y,rr.z],ar(t,Yn,Xn,Zn,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new V,new V,new V,new V,new V,new V,new V,new V],qn=new V,Jn=new Gn,Yn=new V,Xn=new V,Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new V;function ar(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ir.fromArray(e,a);let o=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),s=t.dot(ir),c=n.dot(ir),l=r.dot(ir);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var or=new V,sr=new B,cr=0,lr=class extends dt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qe,this.updateRanges=[],this.gpuType=w,this.version=0,this._normalizationScale=e===void 0?void 0:bt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXYZ(t,or.x,or.y,or.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix4(e),this.setXYZ(t,or.x,or.y,or.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyNormalMatrix(e),this.setXYZ(t,or.x,or.y,or.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.transformDirection(e),this.setXYZ(t,or.x,or.y,or.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?xt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?St(e,this.array):Math.round(e*t)}},ur=class extends lr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},dr=class extends lr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},fr=class extends lr{constructor(e,t,n){super(new Float32Array(e),t,n)}},pr=new Gn,mr=new V,hr=new V,gr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?pr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(mr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(hr)),this.expandByPoint(mr.copy(e.center).sub(hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_r=0,vr=new Kt,yr=new bn,br=new V,xr=new Gn,Sr=new Gn,Cr=new V,wr=class e extends dt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=ht(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(tt(e)?dr:ur)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,t,n){return vr.makeTranslation(e,t,n),this.applyMatrix4(vr),this}scale(e,t,n){return vr.makeScale(e,t,n),this.applyMatrix4(vr),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new fr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Cr.addVectors(this.boundingBox.min,xr.min),this.boundingBox.expandByPoint(Cr),Cr.addVectors(this.boundingBox.max,xr.max),this.boundingBox.expandByPoint(Cr)):(this.boundingBox.expandByPoint(xr.min),this.boundingBox.expandByPoint(xr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(xr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sr.setFromBufferAttribute(n),this.morphTargetsRelative?(Cr.addVectors(xr.min,Sr.min),xr.expandByPoint(Cr),Cr.addVectors(xr.max,Sr.max),xr.expandByPoint(Cr)):(xr.expandByPoint(Sr.min),xr.expandByPoint(Sr.max))}xr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Cr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Cr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Cr.fromBufferAttribute(a,t),o&&(br.fromBufferAttribute(e,t),Cr.add(br)),r=Math.max(r,n.distanceToSquared(Cr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new lr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new lr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cr.fromBufferAttribute(e,t),Cr.normalize(),e.setXYZ(t,Cr.x,Cr.y,Cr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new lr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Qe,this.updateRanges=[],this.version=0,this.uuid=ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Er(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Er(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Er(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=ht()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Dr=new V,Or=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:bt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix4(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyNormalMatrix(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.transformDirection(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ot(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new lr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ot(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?xt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?St(e,this.data.array):Math.round(e*t)}},kr=new V,Ar=new V,jr=new H,Mr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=kr.subVectors(n,t).cross(Ar.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(kr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jr.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Nr=0,Pr=class extends dt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=ht(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ze,this.stencilZFail=Ze,this.stencilZPass=Ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Mr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Fr=class extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir,Lr=new V,Rr=new V,zr=new V,Br=new B,Vr=new B,Hr=new Kt,Ur=new V,Wr=new V,Gr=new V,Kr=new B,qr=new B,Jr=new B,Yr=class extends bn{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type=`Sprite`,Ir===void 0){Ir=new wr;let e=new Tr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute(`position`,new Or(e,3,0,!1)),Ir.setAttribute(`uv`,new Or(e,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Rr.setFromMatrixScale(this.matrixWorld),Hr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-zr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Xr(Ur.set(-.5,-.5,0),zr,a,Rr,r,i),Xr(Wr.set(.5,-.5,0),zr,a,Rr,r,i),Xr(Gr.set(.5,.5,0),zr,a,Rr,r,i),Kr.set(0,0),qr.set(1,0),Jr.set(1,1);let o=e.ray.intersectTriangle(Ur,Wr,Gr,!1,Lr);if(o===null&&(Xr(Wr.set(-.5,.5,0),zr,a,Rr,r,i),qr.set(0,1),o=e.ray.intersectTriangle(Ur,Gr,Wr,!1,Lr),o===null))return;let s=e.ray.origin.distanceTo(Lr);s<e.near||s>e.far||t.push({distance:s,point:Lr.clone(),uv:Wn.getInterpolation(Lr,Ur,Wr,Gr,Kr,qr,Jr,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Xr(e,t,n,r,i,a){Br.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Vr.copy(Br):(Vr.x=a*Br.x-i*Br.y,Vr.y=i*Br.x+a*Br.y),e.copy(t),e.x+=Vr.x,e.y+=Vr.y,e.applyMatrix4(Hr)}var Zr=new V,Qr=new V,$r=new V,ei=new V,ti=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zr.copy(this.origin).addScaledVector(this.direction,t),Zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Qr);let i=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=ei.dot(this.direction),s=-ei.dot($r),c=ei.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qr).addScaledVector($r,d),f}intersectSphere(e,t){if(e.radius<0)return null;Zr.subVectors(e.center,this.origin);let n=Zr.dot(this.direction),r=Zr.dot(Zr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,ce=j-te*M,le=ee-ne*M,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ri=new Kt,ii=new ti,ai=new gr,oi=new V,si=new V,ci=new V,li=new V,ui=new V,di=new V,fi=new V,pi=new V,W=class extends bn{constructor(e=new wr,t=new ni){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ui.fromBufferAttribute(s,e),a?di.addScaledVector(ui,r):di.addScaledVector(ui.sub(t),r))}t.add(di)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ai.copy(n.boundingSphere),ai.applyMatrix4(i),ii.copy(e.ray).recast(e.near),ai.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ai,oi)===null||ii.origin.distanceToSquared(oi)>(e.far-e.near)**2)||(ri.copy(i).invert(),ii.copy(e.ray).applyMatrix4(ri),(n.boundingBox===null||ii.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;pi.copy(s),pi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(pi);return l<n.near||l>n.far?null:{distance:l,point:pi.clone(),object:e}}function hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,si),e.getVertexPosition(c,ci),e.getVertexPosition(l,li);let u=mi(e,t,n,r,si,ci,li,fi);if(u){let e=new V;Wn.getBarycoord(fi,si,ci,li,e),i&&(u.uv=Wn.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Wn.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Wn.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Wn.getNormal(si,ci,li,t.normal),u.face=t,u.barycoord=e}return u}var gi=class extends Bt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_i=class extends lr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vi=new Kt,yi=new Kt,bi=[],xi=new Gn,Si=new Kt,Ci=new W,wi=new gr,Ti=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Si)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),xi.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(xi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),wi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wi.copy(this.boundingSphere),wi.applyMatrix4(n),e.ray.intersectsSphere(wi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,vi),yi.multiplyMatrices(n,vi),Ci.matrixWorld=yi,Ci.raycast(e,bi);for(let e=0,n=bi.length;e<n;e++){let n=bi[e];n.instanceId=i,n.object=this,t.push(n)}bi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(r*this.count),r,this.count,re,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new gr,Di=new B(.5,.5),Oi=new V,ki=class{constructor(e=new Mr,t=new Mr,n=new Mr,r=new Mr,i=new Mr,a=new Mr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=et,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476+Di.distanceTo(e.center),Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Oi.x=r.normal.x>0?e.max.x:e.min.x,Oi.y=r.normal.y>0?e.max.y:e.min.y,Oi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ai=new Kt,ji=class e{constructor(){this.coordinateSystem=et,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Ai.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ki),n[e].setFromProjectionMatrix(Ai,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ki),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Mi=class extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ni=new V,Pi=new V,Fi=new Kt,Ii=new ti,Li=new gr,Ri=new V,zi=new V,Bi=class extends bn{constructor(e=new wr,t=new Mi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ni.fromBufferAttribute(t,e-1),Pi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ni.distanceTo(Pi);e.setAttribute(`lineDistance`,new fr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(r),Li.radius+=i,e.ray.intersectsSphere(Li)===!1)return;Fi.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Fi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Vi(this,e,Ii,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Vi(this,e,Ii,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Vi(this,e,Ii,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Vi(this,e,Ii,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Vi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ni.fromBufferAttribute(s,i),Pi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ni,Pi,Ri,zi)>r)return;Ri.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ri);if(!(c<t.near||c>t.far))return{distance:c,point:zi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Hi=new V,Ui=new V,Wi=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Hi.fromBufferAttribute(t,e),Ui.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Hi.distanceTo(Ui);e.setAttribute(`lineDistance`,new fr(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Gi=class extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ki=new Kt,qi=new ti,Ji=new gr,Yi=new V,Xi=class extends bn{constructor(e=new wr,t=new Gi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Ji.radius+=i,e.ray.intersectsSphere(Ji)===!1)return;Ki.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Ki);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Yi.fromBufferAttribute(l,n),Zi(Yi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Yi.fromBufferAttribute(l,a),Zi(Yi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Zi(e,t,n,r,i,a,o){let s=qi.distanceSqToPoint(e);if(s<n){let n=new V;qi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qi=class extends Bt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$i=class extends Bt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ea=class extends Bt{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=te,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new It(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ta=class extends ea{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=te){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},na=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ra=class e extends wr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new fr(c,3)),this.setAttribute(`normal`,new fr(l,3)),this.setAttribute(`uv`,new fr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ia=class e extends wr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new fr(u,3)),this.setAttribute(`normal`,new fr(d,3)),this.setAttribute(`uv`,new fr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},aa=class e extends ia{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class e extends wr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new fr(i,3)),this.setAttribute(`normal`,new fr(i.slice(),3)),this.setAttribute(`uv`,new fr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},sa=class e extends oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ca=class e extends wr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new fr(p,3)),this.setAttribute(`normal`,new fr(m,3)),this.setAttribute(`uv`,new fr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},la=class e extends wr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new fr(s,3)),this.setAttribute(`normal`,new fr(c,3)),this.setAttribute(`uv`,new fr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ua=class e extends wr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new fr(p,3)),this.setAttribute(`normal`,new fr(m,3)),this.setAttribute(`uv`,new fr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},da=class e extends wr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new fr(c,3)),this.setAttribute(`normal`,new fr(l,3)),this.setAttribute(`uv`,new fr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function fa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ma(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ma(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function pa(e){let t={};for(let n=0;n<e.length;n++){let r=fa(e[n]);for(let e in r)t[e]=r[e]}return t}function ma(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ha(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ga(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:At.workingColorSpace}var _a={clone:fa,merge:pa},va=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ya=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ba=class extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=va,this.fragmentShader=ya,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ha(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Vt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Kt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xa=class extends ba{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Sa=class extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ca=class extends Pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wa=class extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ta=class extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ea(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Da(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Oa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ka=class extends Oa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ue,endingEnd:Ue}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case We:i=e,o=2*t-n;break;case Ge:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case We:a=e,s=2*n-t;break;case Ge:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Aa=class extends Oa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ja=class extends Oa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends Oa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Fa(n,t,g,y,r);i[p]=Na(x,o,_,b,m)}return i}};function Na(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Pa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Fa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Na(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Pa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ia=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Da(e.settings)&&(n.settings={inTangents:Ea(e.settings.inTangents,Array),outTangents:Ea(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case L:t=this.InterpolantFactoryMethodDiscrete;break;case Be:t=this.InterpolantFactoryMethodLinear;break;case Ve:t=this.InterpolantFactoryMethodSmooth;break;case He:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return L;case this.InterpolantFactoryMethodLinear:return Be;case this.InterpolantFactoryMethodSmooth:return Ve;case this.InterpolantFactoryMethodBezier:return He}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Da(this.settings)&&(La(this.settings.inTangents,e),La(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Da(this.settings)&&(Ra(this.settings.inTangents,e),Ra(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&nt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ve,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Da(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function La(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ra(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ia.prototype.ValueTypeName=``,Ia.prototype.TimeBufferType=Float32Array,Ia.prototype.ValueBufferType=Float32Array,Ia.prototype.DefaultInterpolation=Be;var za=class extends Ia{constructor(e,t,n){super(e,t,n)}};za.prototype.ValueTypeName=`bool`,za.prototype.ValueBufferType=Array,za.prototype.DefaultInterpolation=L,za.prototype.InterpolantFactoryMethodLinear=void 0,za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName=`color`;var Va=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}};Va.prototype.ValueTypeName=`number`;var Ha=class extends Oa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ct.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ua=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}};Ua.prototype.ValueTypeName=`quaternion`,Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Ia{constructor(e,t,n){super(e,t,n)}};Wa.prototype.ValueTypeName=`string`,Wa.prototype.ValueBufferType=Array,Wa.prototype.DefaultInterpolation=L,Wa.prototype.InterpolantFactoryMethodLinear=void 0,Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}};Ga.prototype.ValueTypeName=`vector`;var Ka=class extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qa=class extends Ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ja=new Kt,Ya=new V,Xa=new V,Za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qa=new V,$a=new Ct,eo=new V,to=class extends bn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=et,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,$a,eo),eo.x===1&&eo.y===1&&eo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,$a,eo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qa,$a,eo),eo.x===1&&eo.y===1&&eo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,$a,eo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},no=new V,ro=new B,io=new B,ao=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mt*2*Math.atan(Math.tan(pt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){no.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(no.x,no.y).multiplyScalar(-e/no.z),no.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(no.x,no.y).multiplyScalar(-e/no.z)}getViewSize(e,t){return this.getViewBounds(e,ro,io),t.subVectors(io,ro)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oo=class extends Za{constructor(){super(new ao(90,1,.5,500)),this.isPointLightShadow=!0}},so=class extends Ka{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new oo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},co=class extends to{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lo=class extends Za{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uo=class extends Ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new lo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fo=-90,po=1,mo=class extends bn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ao(fo,po,e,t);r.layers=this.layers,this.add(r);let i=new ao(fo,po,e,t);i.layers=this.layers,this.add(i);let a=new ao(fo,po,e,t);a.layers=this.layers,this.add(a);let o=new ao(fo,po,e,t);o.layers=this.layers,this.add(o);let s=new ao(fo,po,e,t);s.layers=this.layers,this.add(s);let c=new ao(fo,po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ho=class extends ao{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},go=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_o.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _o(){this._document.hidden===!1&&this.reset()}var vo=`\\[\\]\\.:\\/`,yo=RegExp(`[\\[\\]\\.:\\/]`,`g`),bo=`[^\\[\\]\\.:\\/]`,xo=`[^`+vo.replace(`\\.`,``)+`]`,So=`((?:WC+[\\/:])*)`.replace(`WC`,bo),Co=`(WCOD+)?`.replace(`WCOD`,xo),wo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,bo),To=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,bo),Eo=RegExp(`^`+So+Co+wo+To+`$`),Do=[`material`,`materials`,`bones`,`map`],Oo=class{constructor(e,t,n){let r=n||ko.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ko=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(yo,``)}static parseTrackName(e){let t=Eo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Do.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ko.Composite=Oo,ko.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ko.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ko.prototype.GetterByBindingType=[ko.prototype._getValue_direct,ko.prototype._getValue_array,ko.prototype._getValue_arrayElement,ko.prototype._getValue_toArray],ko.prototype.SetterByBindingTypeAndVersioning=[[ko.prototype._setValue_direct,ko.prototype._setValue_direct_setNeedsUpdate,ko.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ko.prototype._setValue_array,ko.prototype._setValue_array_setNeedsUpdate,ko.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ko.prototype._setValue_arrayElement,ko.prototype._setValue_arrayElement_setNeedsUpdate,ko.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ko.prototype._setValue_fromArray,ko.prototype._setValue_fromArray_setNeedsUpdate,ko.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Ao(e,t,n,r){let i=jo(r);switch(n){case j:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case ee:return e*t*3/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:case me:return Math.max(e,16)*Math.max(t,8)/4;case de:case pe:return Math.max(e,8)*Math.max(t,8)/2;case he:case ge:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case P:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Re:case F:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ze:case I:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function jo(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Mo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function No(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Po={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Fo={basic:{uniforms:pa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Po.meshbasic_vert,fragmentShader:Po.meshbasic_frag},lambert:{uniforms:pa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:Po.meshlambert_vert,fragmentShader:Po.meshlambert_frag},phong:{uniforms:pa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Po.meshphong_vert,fragmentShader:Po.meshphong_frag},standard:{uniforms:pa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Po.meshphysical_vert,fragmentShader:Po.meshphysical_frag},toon:{uniforms:pa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:Po.meshtoon_vert,fragmentShader:Po.meshtoon_frag},matcap:{uniforms:pa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Po.meshmatcap_vert,fragmentShader:Po.meshmatcap_frag},points:{uniforms:pa([G.points,G.fog]),vertexShader:Po.points_vert,fragmentShader:Po.points_frag},dashed:{uniforms:pa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Po.linedashed_vert,fragmentShader:Po.linedashed_frag},depth:{uniforms:pa([G.common,G.displacementmap]),vertexShader:Po.depth_vert,fragmentShader:Po.depth_frag},normal:{uniforms:pa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Po.meshnormal_vert,fragmentShader:Po.meshnormal_frag},sprite:{uniforms:pa([G.sprite,G.fog]),vertexShader:Po.sprite_vert,fragmentShader:Po.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Po.background_vert,fragmentShader:Po.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:Po.backgroundCube_vert,fragmentShader:Po.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Po.cube_vert,fragmentShader:Po.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Po.equirect_vert,fragmentShader:Po.equirect_frag},distance:{uniforms:pa([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Po.distance_vert,fragmentShader:Po.distance_frag},shadow:{uniforms:pa([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:Po.shadow_vert,fragmentShader:Po.shadow_frag}};Fo.physical={uniforms:pa([Fo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:Po.meshphysical_vert,fragmentShader:Po.meshphysical_frag};var Io={r:0,b:0,g:0},Lo=new Kt,Ro=new H;Ro.set(-1,0,0,0,1,0,0,0,1);function zo(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new W(new ra(1,1,1),new ba({name:`BackgroundCubeMaterial`,uniforms:fa(Fo.backgroundCube.uniforms),vertexShader:Fo.backgroundCube.vertexShader,fragmentShader:Fo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ro),l.material.toneMapped=At.getTransfer(i.colorSpace)!==Xe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new ca(2,2),new ba({name:`BackgroundMaterial`,uniforms:fa(Fo.background.uniforms),vertexShader:Fo.background.vertexShader,fragmentShader:Fo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=At.getTransfer(i.colorSpace)!==Xe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Io,ga(e)),n.buffers.color.setClear(Io.r,Io.g,Io.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Bo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Vo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ho(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Uo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Mr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Wo=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ra(5,5,5),i=new ba({name:`CubemapFromEquirect`,uniforms:fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Go=256,Ko=3,qo=20,Jo=256,Yo=16,Xo=3,Zo=new V,Qo=new U,$o=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mo(1,10,null),this._boxMesh=new W(new ra(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Zo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Qo));let h=new mo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=os(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=as(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Go,yt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Go:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=es(e,!1,!1),n=Math.log2(e)-Ko;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=es(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=os()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=as()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ns(),this._integrationMaterial=rs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Yo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Xo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Jo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=is());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function es(e,t,n){return new Wo(e,{minFilter:_,generateMipmaps:t,type:T,colorSpace:Je,depthBuffer:n})}function ts(e,t,n){return new ba({name:e,uniforms:t,vertexShader:Po.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function ns(){return ts(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rs(){return ts(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function is(){return ts(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function as(){return ts(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function os(){return ts(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ss(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Wo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new $o(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new $o(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function cs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ls(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?dr:ur)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function us(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ds(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function fs(e,t,n){let r=new WeakMap,i=new Vt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Wt(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ps(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ms={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function hs(e,t,n,r,i,a){let o=new Ut(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new wr;u.setAttribute(`position`,new fr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new fr([0,2,0,0,2,0],2));let d=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new W(u,d),p=new co(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Ut(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new Ut(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ea(t,n),a===!0&&(l.format=ne,l.type=O)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},At.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ms[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var gs=new Bt,_s=new ea(1,1),vs=new ta(1),ys=new Wt,bs=new Gt,xs=new Qi,Ss=[],Cs=[],ws=new Float32Array(16),Ts=new Float32Array(9),Es=new Float32Array(4);function Ds(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ss[i];if(a===void 0&&(a=new Float32Array(i),Ss[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Os(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ks(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function As(e,t){let n=Cs[t];n===void 0&&(n=new Int32Array(t),Cs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Os(n,t))return;e.uniform2fv(this.addr,t),ks(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Os(n,t))return;e.uniform3fv(this.addr,t),ks(n,t)}}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Os(n,t))return;e.uniform4fv(this.addr,t),ks(n,t)}}function Fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Os(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ks(n,t)}else{if(Os(n,r))return;Es.set(r),e.uniformMatrix2fv(this.addr,!1,Es),ks(n,r)}}function Is(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Os(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ks(n,t)}else{if(Os(n,r))return;Ts.set(r),e.uniformMatrix3fv(this.addr,!1,Ts),ks(n,r)}}function Ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Os(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ks(n,t)}else{if(Os(n,r))return;ws.set(r),e.uniformMatrix4fv(this.addr,!1,ws),ks(n,r)}}function Rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Os(n,t))return;e.uniform2iv(this.addr,t),ks(n,t)}}function Bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Os(n,t))return;e.uniform3iv(this.addr,t),ks(n,t)}}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Os(n,t))return;e.uniform4iv(this.addr,t),ks(n,t)}}function Hs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Os(n,t))return;e.uniform2uiv(this.addr,t),ks(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Os(n,t))return;e.uniform3uiv(this.addr,t),ks(n,t)}}function Gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Os(n,t))return;e.uniform4uiv(this.addr,t),ks(n,t)}}function Ks(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Ks(_s):gs,n.setTexture2D(t||a,i)}function Js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||bs,i)}function Ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Ks(vs):xs,n.setTextureCube(t||a,i)}function Xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ys,i)}function Zs(e){switch(e){case 5126:return js;case 35664:return Ms;case 35665:return Ns;case 35666:return Ps;case 35674:return Fs;case 35675:return Is;case 35676:return Ls;case 5124:case 35670:return Rs;case 35667:case 35671:return zs;case 35668:case 35672:return Bs;case 35669:case 35673:return Vs;case 5125:return Hs;case 36294:return Us;case 36295:return Ws;case 36296:return Gs;case 35678:case 36198:case 36298:case 36306:case 35682:return qs;case 35679:case 36299:case 36307:return Js;case 35680:case 36300:case 36308:case 36293:return Ys;case 36289:case 36303:case 36311:case 36292:return Xs}}function Qs(e,t){e.uniform1fv(this.addr,t)}function $s(e,t){let n=Ds(t,this.size,2);e.uniform2fv(this.addr,n)}function ec(e,t){let n=Ds(t,this.size,3);e.uniform3fv(this.addr,n)}function tc(e,t){let n=Ds(t,this.size,4);e.uniform4fv(this.addr,n)}function nc(e,t){let n=Ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rc(e,t){let n=Ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ic(e,t){let n=Ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ac(e,t){e.uniform1iv(this.addr,t)}function oc(e,t){e.uniform2iv(this.addr,t)}function sc(e,t){e.uniform3iv(this.addr,t)}function cc(e,t){e.uniform4iv(this.addr,t)}function lc(e,t){e.uniform1uiv(this.addr,t)}function uc(e,t){e.uniform2uiv(this.addr,t)}function dc(e,t){e.uniform3uiv(this.addr,t)}function fc(e,t){e.uniform4uiv(this.addr,t)}function pc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ks(_s):gs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function mc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||bs,a[e])}function hc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Ks(vs):xs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function gc(e,t,n){let r=this.cache,i=t.length,a=As(n,i);Os(r,a)||(e.uniform1iv(this.addr,a),ks(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ys,a[e])}function _c(e){switch(e){case 5126:return Qs;case 35664:return $s;case 35665:return ec;case 35666:return tc;case 35674:return nc;case 35675:return rc;case 35676:return ic;case 5124:case 35670:return ac;case 35667:case 35671:return oc;case 35668:case 35672:return sc;case 35669:case 35673:return cc;case 5125:return lc;case 36294:return uc;case 36295:return dc;case 36296:return fc;case 35678:case 36198:case 36298:case 36306:case 35682:return pc;case 35679:case 36299:case 36307:return mc;case 35680:case 36300:case 36308:case 36293:return hc;case 36289:case 36303:case 36311:case 36292:return gc}}var vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zs(t.type)}},yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_c(t.type)}},bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function Sc(e,t){e.seq.push(t),e.map[t.id]=t}function Cc(e,t,n){let r=e.name,i=r.length;for(xc.lastIndex=0;;){let a=xc.exec(r),o=xc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Sc(n,l===void 0?new vc(s,e,t):new yc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new bc(s),Sc(n,e)),n=e}}}var wc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Cc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Tc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ec=37297,Dc=0;function Oc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var kc=new H;function Ac(e){At._getMatrix(kc,At.workingColorSpace,e);let t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(At.getTransfer(e)){case Ye:return[t,`LinearTransferOETF`];case Xe:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function jc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Oc(e.getShaderSource(t),r)}return i}function Mc(e,t){let n=Ac(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Nc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Pc(e,t){let n=Nc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Fc=new V;function Ic(){return At.getLuminanceCoefficients(Fc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Fc.x.toFixed(4)}, ${Fc.y.toFixed(4)}, ${Fc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Lc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Bc).join(`
`)}function Rc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function zc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Bc(e){return e!==``}function Vc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Hc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Uc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(e){return e.replace(Uc,Gc)}function Gc(e,t){let n=Po[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Wc(n)}var Kc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(e){return e.replace(Kc,Jc)}function Jc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Yc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Xc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Zc(e){return Xc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Qc={302:`ENVMAP_MODE_REFRACTION`};function $c(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Qc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var el={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function tl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:el[e.combine]||`ENVMAP_BLENDING_NONE`}function nl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Zc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=$c(n),d=tl(n),f=Lc(n),p=Rc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Bc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Bc).join(`
`),g.length>0&&(g+=`
`)):(h=[Yc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Bc).join(`
`),g=[Yc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Po.tonemapping_pars_fragment,n.toneMapping===0?``:Pc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Po.colorspace_pars_fragment,Mc(`linearToOutputTexel`,n.outputColorSpace),Ic(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Bc).join(`
`)),o=Wc(o),o=Vc(o,n),o=Hc(o,n),s=Wc(s),s=Vc(s,n),s=Hc(s,n),o=qc(o),s=qc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Tc(i,i.VERTEX_SHADER,v),x=Tc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=jc(i,b,`vertex`),n=jc(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new wc(i,m),w=zc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Ec)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var rl=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new al(e),t.set(e,n)),n}},al=class{constructor(e){this.id=rl++,this.code=e,this.usedTimes=0}};function ol(e){return e===1030||e===37490||e===36285}function sl(e,t,n,r,i,a){let o=new rn,s=new il,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Fo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!b,ie=re&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?F.length-1:null,envMapSize:ie?F[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&ol(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:N&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&At.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&At.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Fo[t];n=_a.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new nl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function cl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ll(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ul(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function dl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ll),r.length>1&&r.sort(t||ul),i.length>1&&i.sort(t||ul)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function fl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new dl,e.set(t,[i])):n>=r.length?(i=new dl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function pl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function ml(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var hl=0;function gl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function _l(e){let t=new pl,n=ml(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Kt,o=new Kt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(gl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=hl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function vl(e){let t=new _l(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function yl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new vl(e),t.set(n,[a])):r>=i.length?(a=new vl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var bl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xl=`uniform sampler2D shadow_pass;
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
}`,Sl=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Cl=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],wl=new Kt,Tl=new V,El=new V;function Dl(e,t,n){let r=new ki,i=new B,a=new B,o=new Vt,s=new wa,c=new Ta,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:bl,fragmentShader:xl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new wr;g.setAttribute(`position`,new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new W(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ut(i.x,i.y,{format:ae,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ea(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=te,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Wo(i.x),d.map.depthTexture=new ta(i.x,C)):(d.map=new Ut(i.x,i.y),d.map.depthTexture=new ea(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=te,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Tl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Tl),El.copy(e.position),El.add(Sl[t]),e.up.copy(Cl[t]),e.lookAt(El),e.updateMatrixWorld(),n.makeTranslation(-Tl.x,-Tl.y,-Tl.z),wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ut(i.x,i.y,{format:ae,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ol(e,t){function n(){let t=!1,n=new Vt,r=null,i=new Vt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ut[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Vt().fromArray(ae),ce=new Vt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function F(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:L}}function kl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):rt(`canvas`)}function D(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ye:At.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function re(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),re(e),le(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),re(e),N(e)}function ce(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function le(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ue(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ue(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function N(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&oe(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let de=0;function fe(){de=0}function pe(){return de}function me(e){de=e}function he(){let e=de;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),de+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(t,i){let a=r.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ye(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ke(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let xe={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},Se={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,xe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,xe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,xe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ie),te(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ge(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ue(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=At.getPrimaries(At.workingColorSpace),r=o.colorSpace===``?null:At.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);we(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=M(o,t);if(o.isDepthTexture)p=ee(o.format===ne,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&De(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Ao(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Ao(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=L(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=L(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,o,s){if(o.image.length!==6)return;let c=Te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=At.getPrimaries(At.workingColorSpace),r=o.colorSpace===``?null:At.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=j(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=M(o,h);we(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=ee(o.format===ne,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=L(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Re(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?be(i.depthTexture,0):_e(i.depthTexture,0);let u=c.__webglTexture,d=Re(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Me(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(i.__webglFramebuffer[0],t,0):Me(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),je(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),je(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,i){let a=r.get(t);n!==void 0&&Ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ne(t)}function Fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ae),te(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),je(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),we(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),we(c,a),Ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),we(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(At.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=he,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=ce}function Al(e,t){function n(n,r=``){let i,a=At.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var jl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ml=`
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

}`,Nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ba({vertexShader:jl,fragmentShader:Ml,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pl=class extends dt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Nl,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new B,T=null,E=null,D=new ao;D.viewport=new Vt;let k=new ao;k.viewport=new Vt;let A=[D,k],j=new ho,ee=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Cn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Cn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Cn,x[e]=t),t.getHandSpace()};function ie(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,re=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ne:te,a=_.stencil?O:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ut(d.textureWidth,d.textureHeight,{format:M,type:v,depthTexture:new ea(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ut(f.framebufferWidth,f.framebufferHeight,{format:M,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=D.near=t,j.far=k.far=D.far=n,(ee!==j.near||re!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,re=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);j.projectionMatrix.copy(D.projectionMatrix),j.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new ao,o.layers.enable(n),o.viewport=new Vt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new na,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let N=new Mo;N.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Fl=new Kt,Il=new H;Il.set(-1,0,0,0,1,0,0,0,1);function Ll(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ga(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Fl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Il),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Rl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var zl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bl=null;function Vl(){return Bl===null&&(Bl=new gi(zl,16,16,ae,T),Bl.name=`DFG_LUT`,Bl.minFilter=h,Bl.magFilter=h,Bl.wrapS=u,Bl.wrapT=u,Bl.generateMipmaps=!1,Bl.needsUpdate=!0),Bl}var Hl=class{constructor(e={}){let{canvas:t=it(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([v,C,x,O,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,k=null,A=[],j=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,te=!1,ne=null,re=null,ae=null,ce=null;this._outputColorSpace=qe;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Vt,me=new Vt,he=null,ge=new U(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Vt(0,0,ve,ye),we=new Vt(0,0,ve,ye),Te=!1,Ee=new ki,De=new ji,Oe=!1,ke=!1,Ae=new Kt,je=new V,Me=new Vt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return N===null?be:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,L,Be,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),z(`WebGLRenderer: `+e.message),e}function st(){Le=new cs(P),Le.init(),nt=new Al(P,Le),Re=new Ho(P,Le,e,nt),F=new Ol(P,Le),Re.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ae=P.createFramebuffer(),ce=P.createFramebuffer(),ze=new ds(P),I=new cl,L=new kl(P,Le,F,I,Re,nt,ze),Be=new ss(M),Ve=new No(P),rt=new Bo(P,Ve),He=new ls(P,Ve,ze,rt),Ue=new ps(P,He,Ve,rt,ze),Qe=new fs(P,Re,L),Ye=new Uo(I),We=new sl(M,Be,Le,Re,rt,Ye),Ge=new Ll(M,I),Ke=new fl,Je=new yl(Le),Ze=new zo(M,Be,F,Ue,p,s),Xe=new Dl(M,Ue,Re),at=new Rl(P,ze,Re,F),$e=new Vo(P,Le,ze),tt=new us(P,Le,ze),ze.programs=We.programs,M.capabilities=Re,M.extensions=Le,M.properties=I,M.renderLists=Ke,M.shadowMap=Xe,M.state=F,M.info=ze}m!==1009&&(ee=new hs(m,t.width,t.height,o,r,i));let ct=new Pl(M,P);this.xr=ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){ct.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,P.clearBufferiv(P.COLOR,0,b))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Ze.dispose(),Ke.dispose(),Je.dispose(),L.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),He.dispose(),rt.dispose(),at.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,yt),ct.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),ot(`WebGLRenderer: Context Lost.`),te=!0}function dt(){ot(`WebGLRenderer: Context Restored.`),te=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;st(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ft(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ne!==null&&e.isNodeMaterial&&ne.setObject(r,e),Oe===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ne!==null&&ne.renderStart(e,t,n),k=Je.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),ne!==null&&ne.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),Oe===!0&&Ye.setGlobalState(this.clippingPlanes,t),ne!==null&&Xe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=j.pop(),ne!==null&&ne.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new Mo;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ct.setAnimationLoop(e),e===null?xt.stop():xt.start()},ct.addEventListener(`sessionstart`,yt),ct.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=ee!==null&&(N===null||n)&&ee.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),k=Je.get(e,j.length),k.init(t),k.state.textureUnits=L.getTextureUnits(),j.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,et,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),w=Ke.get(e,A.length),w.init(),A.push(w),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,M.sortObjects)}St(e,t,0,M.sortObjects),w.finish(),ne!==null&&ne.updateLights(k.state.lightsArray),M.sortObjects===!0&&w.sort(xe,Se),Pe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Pe&&Ze.addToRenderList(w,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Xe.render(i,e,t),Oe===!0&&Ye.endShadows(),(r&&ee.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Pe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];B(w,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Pe&&Ze.render(e),B(w,e,t)}N!==null&&ue===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),r&&ee.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),rt.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(k=j[j.length-1],L.setTextureUnits(k.state.textureUnits),Oe===!0&&Ye.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),w=A.length>0?A[A.length-1]:null,ne!==null&&ne.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ue.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Me.z,s,t)}}else a.visible&&w.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function B(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Ye.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Ut(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Pe&&Ze.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Ye.setGlobalState(M.clippingPlanes,r),wt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),M.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){ne!==null&&i.isNodeMaterial&&ne.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function H(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Et(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,M),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=H(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Dt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Et(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=wc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:At.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==fe)){let t=e===fe&&r.id===de;Ye.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===H(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||x===!0)&&(C=x===!0?Dt(r,t,i,s,h):Et(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,C,v));let w=!1,T=!1,E=!1,D=C.getUniforms(),O=v.uniforms;if(F.useProgram(C.program)&&(w=!0,T=!0,E=!0),r.id!==de&&(de=r.id,T=!0),w||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(P,`projectionMatrix`,e.projectionMatrix),D.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&D.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,T=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&D.setValue(P,`sunShadowMap`,y.state.sunShadowMap,L),y.state.directionalShadowMap.length>0&&D.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&D.setValue(P,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&D.setValue(P,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){D.setOptional(P,i,`bindMatrix`),D.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(D.setOptional(P,i,`batchingTexture`),D.setValue(P,`batchingTexture`,i._matricesTexture,L),D.setOptional(P,i,`batchingIdTexture`),D.setValue(P,`batchingIdTexture`,i._indirectTexture,L),D.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Qe.update(i,n,C),(T||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Vl()),T){if(D.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Mt(O,E),a&&r.fog===!0&&Ge.refreshFogUniforms(O,a),Ge.refreshMaterialUniforms(O,r,be,ye,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=S,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}wc.upload(P,Ot(v),O,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(wc.upload(P,Ot(v),O,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(P,`center`,i.center),D.setValue(P,`modelViewMatrix`,i.modelViewMatrix),D.setValue(P,`normalMatrix`,i.normalMatrix),D.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,C),at.bind(n,C)}}return C}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await lt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ae),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return et}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}},Ul=class extends An{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ra;e.deleteAttribute(`uv`);let t=new Sa({side:1}),n=new Sa,r=new so(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new W(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Ti(e,n,6),o=new bn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new W(e,Wl(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new W(e,Wl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new W(e,Wl(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new W(e,Wl(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new W(e,Wl(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new W(e,Wl(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wl(e){return new Ca({color:0,emissive:16777215,emissiveIntensity:e})}function Gl(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new wr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Kl(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Kl(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Kl(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new lr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var ql=(e,t,n)=>e<t?t:e>n?n:e,Jl=(e,t,n)=>e+(t-e)*n,K=(e=0,t=1)=>e+Math.random()*(t-e),q=e=>e[Math.floor(Math.random()*e.length)],Yl=(e,t,n)=>{let r=ql((n-e)/(t-e),0,1);return r*r*(3-2*r)},Xl=(e,t)=>{let n=t-e;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n},Zl=(e,t=new V)=>t.set(Math.sin(e),0,Math.cos(e)),Ql=(e,t=new V)=>t.set(-Math.cos(e),0,Math.sin(e));function $l(e,t){let n=e*374761393+t*668265263;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function eu(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=$l(n,r),l=$l(n+1,r),u=$l(n,r+1),d=$l(n+1,r+1);return Jl(Jl(c,l,o),Jl(u,d,o),s)}function tu(e,t,n=4){let r=0,i=.5,a=1;for(let o=0;o<n;o++)r+=i*eu(e*a,t*a),a*=2,i*=.5;return r}function nu(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var ru=new U;function J(e,t,n,r,i=0,a=0,o=0,s=0,c=0,l=0){let u=new ra(e,t,n).toNonIndexed();return iu(u,r),(s||c||l)&&u.applyMatrix4(new Kt().makeRotationFromEuler(new nn(s,c,l))),u.translate(i,a,o),u}function Y(e,t,n,r,i,a=0,o=0,s=0,c=0,l=0,u=0){let d=new ia(e,t,n,r).toNonIndexed();return iu(d,i),(c||l||u)&&d.applyMatrix4(new Kt().makeRotationFromEuler(new nn(c,l,u))),d.translate(a,o,s),d}function X(e,t,n=0,r=0,i=0,a=1,o=1,s=1,c=0){let l=new sa(e,c);return l.scale(a,o,s),iu(l,t),l.translate(n,r,i),l}function iu(e,t){ru.set(t);let n=e.attributes.position.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3]=ru.r,r[e*3+1]=ru.g,r[e*3+2]=ru.b;return e.setAttribute(`color`,new lr(r,3)),e.attributes.uv&&e.deleteAttribute(`uv`),e}function Z(e){let t=Gl(e,!1);return e.forEach(e=>e.dispose()),t.computeVertexNormals(),t}var au=(e={})=>new Sa({vertexColors:!0,roughness:.55,metalness:.05,flatShading:!0,...e});function ou(e){return`$`+Math.floor(e).toLocaleString(`en-US`)}function su(e){"@babel/helpers - typeof";return su=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},su(e)}function cu(e,t){if(su(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(su(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function lu(e){var t=cu(e,`string`);return su(t)==`symbol`?t:t+``}function Q(e,t,n){return(t=lu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uu=[];for(let e=0;e<=9;e++)uu.push(-288+e*64);var du=-1.2,fu={x0:360,x1:720,z:0,halfW:14},pu={x0:-640,x1:-335,z0:-150,z1:150},mu=[],hu=pu;mu.push({x:-380,z:-60,yaw:-Math.PI/2,L:70,W:16,H:26,type:`quarter`,color:`#ff006e`},{x:-470,z:-60,yaw:-Math.PI/2,L:20,W:22,H:8,type:`down`,color:`#3a86ff`},{x:-400,z:40,yaw:-Math.PI/2,L:16,W:10,H:5,type:`wedge`,color:`#ffbe0b`},{x:-440,z:40,yaw:-Math.PI/2,L:18,W:12,H:6,type:`hump`,color:`#06d6a0`},{x:-480,z:40,yaw:-Math.PI/2,L:16,W:10,H:7,type:`wedge`,color:`#ffbe0b`},{x:-560,z:0,yaw:Math.PI/2,L:22,W:30,H:14,type:`quarter`,color:`#8338ec`},{x:-600,z:0,yaw:-Math.PI/2,L:22,W:30,H:14,type:`quarter`,color:`#8338ec`},{x:-420,z:110,yaw:0,L:14,W:10,H:4,type:`wedge`,color:`#ff7b00`},{x:-420,z:132,yaw:0,L:30,W:14,H:12,type:`deck`,color:`#adb5bd`},{x:-520,z:-110,yaw:Math.PI,L:30,W:12,H:10,type:`quarter`,color:`#ef233c`});for(let[e,t,n]of[[-160,-224,Math.PI/2],[96,120,0],[-32,200,Math.PI],[224,-80,0],[-224,40,-Math.PI/2],[160,256,Math.PI/2]])mu.push({x:e,z:t,yaw:n,L:9,W:6,H:2.6,type:`wedge`,color:`#ffd60a`});function gu(e,t,n){let r=t-e.x,i=n-e.z,a=Math.cos(e.yaw),o=Math.sin(e.yaw);return{u:r*o+i*a,v:r*a-i*o}}function _u(e,t){let n=t/e.L;switch(e.type){case`wedge`:return e.H*n;case`quarter`:return e.H*n*n;case`hump`:return e.H*Math.sin(Math.PI*n);case`deck`:return e.H;case`down`:return e.H*(1-n)}}function vu(e,t){let n=0;for(let r of mu){if(Math.abs(e-r.x)>r.L+r.W||Math.abs(t-r.z)>r.L+r.W)continue;let{u:i,v:a}=gu(r,e,t);i<0||i>r.L||Math.abs(a)>r.W/2||(n=Math.max(n,_u(r,i)))}return n}function $(e,t){return yu(e,t)+vu(e,t)}function yu(e,t){let n=t>300?-(t-300)*.075:0,r=Math.max(0,Math.abs(e)-305),i=Math.max(0,-t-305),a=Math.hypot(r,i),o=0;if(a>0){o=Yl(0,70,a)*(tu(e*.007+13,t*.007-7)*70-12+a*.06),o<0&&(o*=.15),e>320&&(o*=Yl(40,110,Math.abs(t-fu.z))),o*=1-Yl(210,305,t);let n=Math.max(hu.x0-e,e-hu.x1,hu.z0-t,t-hu.z1,0);o*=Yl(0,60,n)}return Math.max(n+o,-9)}function bu(e,t){return e>305&&t<300}var xu=[],Su=new Kt().makeScale(0,0,0);function Cu(e,t){e.hidden!==t&&(e.hidden=t,e.im.setMatrixAt(e.i,t?Su:e.m),e.im.instanceMatrix.needsUpdate=!0)}var wu=[],Tu=32,Eu=new Map;function Du(e){wu.push(e);for(let t=Math.floor(e.minX/Tu);t<=Math.floor(e.maxX/Tu);t++)for(let n=Math.floor(e.minZ/Tu);n<=Math.floor(e.maxZ/Tu);n++){let r=t+`,`+n;Eu.has(r)||Eu.set(r,[]),Eu.get(r).push(e)}}var Ou=new Set;function ku(e,t,n){Ou.clear();let r=[];for(let i=Math.floor((e-n)/Tu);i<=Math.floor((e+n)/Tu);i++)for(let e=Math.floor((t-n)/Tu);e<=Math.floor((t+n)/Tu);e++){let t=Eu.get(i+`,`+e);if(t)for(let e of t)Ou.has(e)||(Ou.add(e),r.push(e))}return r}function Au(e,t,n){let r=null;for(let i of ku(e.x,e.z,t+1)){if(e.y>i.h)continue;let a=ql(e.x,i.minX,i.maxX),o=ql(e.z,i.minZ,i.maxZ),s=e.x-a,c=e.z-o,l=s*s+c*c;if(!(l>=t*t)){if(l<1e-6){let n=e.x-i.minX,r=i.maxX-e.x,a=e.z-i.minZ,o=i.maxZ-e.z,l=Math.min(n,r,a,o);l===n?(e.x=i.minX-t,s=-1,c=0):l===r?(e.x=i.maxX+t,s=1,c=0):l===a?(e.z=i.minZ-t,s=0,c=-1):(e.z=i.maxZ+t,s=0,c=1)}else{let n=Math.sqrt(l);s/=n,c/=n,e.x=a+s*t,e.z=o+c*t}r=(n||new V).set(s,0,c)}}return r}function ju(e,t,n){let r=n,i=Math.ceil(n/Tu);Ou.clear();for(let n=0;n<=i;n++){let i=e.x+t.x*n*Tu,a=e.z+t.z*n*Tu;for(let n=-1;n<=1;n++)for(let o=-1;o<=1;o++){let s=Eu.get(Math.floor(i/Tu)+n+`,`+(Math.floor(a/Tu)+o));if(s)for(let n of s){if(Ou.has(n)||n.thin)continue;Ou.add(n);let i=Mu(e,t,n);i<r&&(r=i)}}if(r<n*Tu)break}for(let n=2;n<r;n+=3)if(e.y+t.y*n<$(e.x+t.x*n,e.z+t.z*n)){r=n;break}return r}function Mu(e,t,n){let r=0,i=1/0,a=[[e.x,t.x,n.minX,n.maxX],[e.y,t.y,-50,n.h],[e.z,t.z,n.minZ,n.maxZ]];for(let[e,t,n,o]of a){if(Math.abs(t)<1e-8){if(e<n||e>o)return 1/0;continue}let a=(n-e)/t,s=(o-e)/t;if(a>s&&([a,s]=[s,a]),r=Math.max(r,a),i=Math.min(i,s),r>i)return 1/0}return r}var Nu=[],Pu=[],Fu=new V,Iu=new V,Lu={value:0},Ru=[],zu=null,Bu=[],Vu=[];function Hu(){let e=new Sa({color:16777215,roughness:.6,metalness:0,envMapIntensity:.6});return e.onBeforeCompile=e=>{e.uniforms.uNight=Lu,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos; varying vec3 vWNorm;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
        vec4 wpp = vec4(transformed, 1.0);
        vec3 wn = objectNormal;
        #ifdef USE_INSTANCING
          wpp = instanceMatrix * wpp;
          wn = mat3(instanceMatrix) * wn;
        #endif
        wpp = modelMatrix * wpp;
        vWPos = wpp.xyz;
        vWNorm = normalize(mat3(modelMatrix) * wn);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPos; varying vec3 vWNorm; uniform float uNight;`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float isSide = 1.0 - step(0.5, abs(vWNorm.y));
        vec2 wc = vec2(abs(vWNorm.x) > 0.5 ? vWPos.z : vWPos.x, vWPos.y);
        float style = fract(sin(dot(floor(vWPos.xz / 44.0), vec2(4.1, 7.7))) * 913.7);
        vec2 csz = style < 0.33 ? vec2(3.0, 3.4) : style < 0.66 ? vec2(1.9, 3.4) : vec2(5.0, 3.4);
        vec2 cell = fract(wc / csz);
        float win = style < 0.66
          ? step(0.2, cell.x) * step(cell.x, 0.8) * step(0.28, cell.y) * step(cell.y, 0.82)
          : step(0.04, cell.x) * step(cell.x, 0.96) * step(0.35, cell.y) * step(cell.y, 0.78);
        win *= isSide * step(4.4, vWPos.y);
        // ground-floor storefront: big panes + dark trim band
        float shop = isSide * step(vWPos.y, 4.0) * step(0.3, vWPos.y);
        float pane = step(0.06, fract(wc.x / 4.0)) * step(fract(wc.x / 4.0), 0.94) * step(0.5, vWPos.y) * step(vWPos.y, 3.4);
        win = max(win, shop * pane);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.45, isSide * step(3.4, vWPos.y) * step(vWPos.y, 4.3));
        vec2 wid = floor(wc / csz) + floor(vWPos.xz / 40.0) * 7.0;
        float rnd = fract(sin(dot(wid, vec2(12.9898, 78.233))) * 43758.5453);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.24, 0.33), win * 0.8);
        float winGlow = win * max(step(0.42, rnd), shop) * uNight;`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.3, win);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.8, 0.48) * winGlow * 0.8;`)},e}function Uu(e){let t=nu(1337),n=()=>t(),r=1640,i=new ca(r,r,180,180);i.rotateX(-Math.PI/2);let a=i.attributes.position,o=[],s=new U(`#ecd29b`),c=new U(`#7cbf5a`),l=new U(`#dcae6c`),u=new U(`#a7735a`),d=new U(`#b9a76a`),f=new U(`#c9ad7a`);for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getZ(e),r=yu(t,n);Math.abs(t)<300&&n>-300&&n<298&&(r-=.15),a.setY(e,r);let i;i=n>294?r<-.7999999999999999?f:s:bu(t,n)?r>22?u:l:r>30?u:r>12?d:c;let p=.92+tu(t*.05,n*.05,2)*.16;o.push(i.r*p,i.g*p,i.b*p)}i.setAttribute(`color`,new fr(o,3));let p=i.toNonIndexed();i.dispose(),p.computeVertexNormals();let m=new W(p,au({roughness:.95}));m.receiveShadow=!0,e.add(m);let h=$u();h.repeat.set(160,100);let g=new W(new ca(4e3,2400,1,1),new Sa({color:`#1f8fc9`,roughness:.06,metalness:.25,transparent:!0,opacity:.9,normalMap:h,normalScale:new B(.55,.55)}));zu=h,g.rotation.x=-Math.PI/2,g.position.set(0,du,1450),e.add(g);let _=new W(new ca(4e3,4e3),g.material);_.rotation.x=-Math.PI/2,_.position.y=-1.25,e.add(_);let v=new W(new ca(592,592),new Sa({color:`#3c4048`,roughness:.85}));v.rotation.x=-Math.PI/2,v.position.y=0,v.receiveShadow=!0,e.add(v);let y=new Ti(new ra(.35,.03,3.2),new Sa({color:`#ffd23f`,roughness:.6}),2e3),b=0,x=new Kt,S=new Ct,C=new V(1,1,1),w=new V,T=e=>S.setFromAxisAngle(new V(0,1,0),e);for(let e of uu)for(let t=-288;t<288;t+=8){let n=((t+288)%64+64)%64;n<12||n>52||(x.compose(w.set(e,.02,t+4),T(0),C),y.setMatrixAt(b++,x),x.compose(w.set(t+4,.02,e),T(Math.PI/2),C),y.setMatrixAt(b++,x))}y.count=b,e.add(y);let E=new W(new ca(fu.x1-290,16),v.material);E.rotation.x=-Math.PI/2,E.position.set((fu.x1+290)/2,.02,0),e.add(E);let D=new W(new ca(fu.x1-fu.x0,26),new Sa({color:`#2f3238`,roughness:.9}));D.rotation.x=-Math.PI/2,D.position.set((fu.x0+fu.x1)/2,.04,24),e.add(D);let O=new Ti(new ra(8,.03,.7),new Sa({color:`#ffffff`}),40),k=0;for(let e=fu.x0+10;e<fu.x1-10;e+=16)x.compose(w.set(e,.06,24),T(0),C),O.setMatrixAt(k++,x);O.count=k,e.add(O);let A=new Ti(new ra(1,1,1),new Sa({color:`#a9a49b`,roughness:.9}),100),j=new Ti(new ra(1,1,1),new Sa({color:`#6fbf4f`,roughness:.95}),100),ee=Hu(),M=new Ti(new ra(1,1,1),ee,500);M.castShadow=!0,M.receiveShadow=!0;let te=new Ti(new ra(1,1,1),new Sa({color:`#8a8f99`,roughness:.7}),800),ne=0,re=0,ie=0,ae=0,oe=`mid`,se=new U,ce=[`#f2d0a4`,`#e8a87c`,`#c38d9e`,`#41b3a3`,`#85cdca`,`#e27d60`,`#f6e8b1`,`#9ad1d4`,`#fff4dc`,`#d4a5a5`,`#b5c99a`,`#ffb4a2`],le=[`#7fa7c9`,`#a9b8c9`,`#6d8fb3`,`#9fb9cf`,`#c4d3df`,`#5f7d99`],ue=(e,t,r,i,a,o)=>{if(ne>=500)return;x.compose(w.set(e,a/2,t),T(0),C.set(r,a,i)),M.setMatrixAt(ne,x),M.setColorAt(ne,se.set(o)),ne++,Du({minX:e-r/2,maxX:e+r/2,minZ:t-i/2,maxZ:t+i/2,h:a}),Vu.push({x:e,z:t,w:r,d:i,h:a,kind:oe});let s=1+Math.floor(n()*3);for(let o=0;o<s&&re<800;o++){let o=2+n()*Math.min(6,r*.3),s=1+n()*2.5;x.compose(w.set(e+(n()-.5)*(r-o-1),a+s/2,t+(n()-.5)*(i-o-1)),T(0),C.set(o,s,o)),te.setMatrixAt(re++,x)}C.set(1,1,1)},N=[],de=[],fe=[],pe=Ru,me=[];for(let t=0;t<9;t++)for(let r=0;r<9;r++){let i=uu[t]+8,a=uu[t+1]-8,o=uu[r]+8,s=uu[r+1]-8,c=(i+a)/2,l=(o+s)/2,u=Math.hypot(c,l),d;if(t===4&&r===4)d=`garage`;else if(t===3&&r===4)d=`police`;else if(t===5&&r===3)d=`hospital`;else if((t===1||t===2)&&r===7)d=`bounce`;else if(r===8)d=n()<.25?`park`:`houses`;else if(u<130)d=n()<.12?`plaza`:`downtown`;else if(u<230){let e=n();d=e<.15?`park`:e<.27?`lot`:`mid`}else{let e=n();d=e<.2?`park`:e<.3?`lot`:`houses`}Nu.push({i:t,j:r,x0:i,x1:a,z0:o,z1:s,cx:c,cz:l,kind:d}),oe=d;let f=a-i;x.compose(w.set(c,.08,l),T(0),C.set(f,.16,f)),A.setMatrixAt(ie++,x),C.set(1,1,1);let p=f-8;switch(pe.push(new V(i+1,0,o+1),new V(a-1,0,s-1)),d){case`downtown`:if(n()<.5)ue(c-p/4,l,p/2-2,p,30+n()*70*(1-u/180),le[Math.floor(n()*le.length)]),ue(c+p/4,l,p/2-2,p,25+n()*60*(1-u/180),le[Math.floor(n()*le.length)]);else{let e=40+n()*80*(1-u/180);ue(c,l,p,p,e*.35,ce[Math.floor(n()*ce.length)]),ue(c,l,p*.6,p*.6,e,le[Math.floor(n()*le.length)])}break;case`mid`:for(let e=0;e<2;e++)for(let t=0;t<2;t++)n()<.15||ue(c+(e-.5)*p/2,l+(t-.5)*p/2,p/2-3,p/2-3,8+n()*22,ce[Math.floor(n()*ce.length)]);break;case`houses`:x.compose(w.set(c,.17,l),T(0),C.set(p,.04,p)),j.setMatrixAt(ae++,x),C.set(1,1,1);for(let e=0;e<2;e++)for(let t=0;t<2;t++){let r=c+(e-.5)*p/2,i=l+(t-.5)*p/2;ue(r,i,11+n()*4,9+n()*4,4+n()*4,ce[Math.floor(n()*ce.length)]),N.push(new V(r+(e-.5)*14,0,i+(t-.5)*3))}break;case`bounce`:x.compose(w.set(c,.17,l),T(0),C.set(p,.06,p)),me.push(x.clone()),C.set(1,1,1);break;case`park`:x.compose(w.set(c,.17,l),T(0),C.set(p,.04,p)),j.setMatrixAt(ae++,x),C.set(1,1,1);for(let e=0;e<9;e++)(n()<.5?N:de).push(new V(c+(n()-.5)*p*.9,0,l+(n()-.5)*p*.9));break;case`lot`:for(let e=0;e<6;e++)Pu.push({x:c-15+e*6,z:l+(e%2?10:-10),yaw:e%2?0:Math.PI});break;case`plaza`:{N.push(new V(c-12,0,l-12),new V(c+12,0,l+12),new V(c-12,0,l+12),new V(c+12,0,l-12));let t=new W(Z([Y(6,6.5,1,12,`#d8d2c4`,0,.5,0),Y(5.2,5.2,.2,12,`#3fb3e0`,0,1,0),Y(.8,1,4,8,`#d8d2c4`,0,2,0),X(1.4,`#3fb3e0`,0,4.4,0)]),au({roughness:.25}));t.position.set(c,0,l),t.castShadow=!0,e.add(t),Du({minX:c-6,maxX:c+6,minZ:l-6,maxZ:l+6,h:1.2});break}case`police`:ue(c,l-8,p,20,14,`#3d5a80`),ue(c,l-8,12,8,18,`#e0e6ef`),Fu.set(c,0,l+14);for(let e=0;e<3;e++)Pu.push({x:c-12+e*12,z:l+12,yaw:0});break;case`hospital`:ue(c,l-4,p,26,22,`#f4f7f7`),ue(c,l-4,14,14,30,`#5fc9b8`),Iu.set(c,0,l+15);break;case`garage`:{let t=new xn,n=new W(Z([J(p,.4,3,`#ff3d7f`,0,12,-p/2+1.5),J(.6,12,.6,`#222`,-p/2+1,6,-p/2+1),J(.6,12,.6,`#222`,p/2-1,6,-p/2+1),...[-15,-5,5,15].map(e=>J(.25,.04,8,`#ffffff`,e,.37,-p/2+6))]),au({roughness:.3,metalness:.3}));t.add(n);let r=new W(J(p-2,.3,p-2,`#33363d`,0,.2,0),au({roughness:.92,metalness:0}));r.receiveShadow=!0,t.add(r);let i=Gu(`MOD GARAGE`,`#ff3d7f`,`#fff`);i.position.set(0,14,-p/2+1),t.add(i),t.position.set(c,0,l),e.add(t);break}}}A.count=ie,j.count=ae,M.count=ne,te.count=re,M.instanceColor.needsUpdate=!0,A.receiveShadow=!0,j.receiveShadow=!0,te.castShadow=!0,e.add(A,j,M,te);for(let e=-280;e<=280;e+=26)N.push(new V(e+(n()-.5)*8,$(e,306),306+n()*8));for(let e=0;e<160;e++){let e=310+n()*480,t=-780+n()*1060;Math.abs(t-fu.z)<50||fe.push(new V(e,$(e,t),t))}for(let e=0;e<260;e++){let e=-790+n()*1580,t=-790+n()*1080;if(e>305||Math.abs(e)<315&&t>-315)continue;let r=$(e,t);r>40||de.push(new V(e,r,t))}if(Wu(e,N,de,fe),me.length){let t=new Ti(new ra(1,1,1),new Sa({color:`#ff8fd8`,roughness:.35}),me.length);me.forEach((e,n)=>t.setMatrixAt(n,e)),t.receiveShadow=!0,e.add(t)}qu(e),Qu(e,n);let he=new W(Z([X(7,`#ffd60a`,0,6,0,1.3,.85,1,1),X(4.2,`#ffd60a`,0,13.5,4.5,1,1,1,1),J(4,1.2,3,`#ff8c1a`,0,13,9),X(.7,`#111`,2,14.6,7.8),X(.7,`#111`,-2,14.6,7.8)]),au({roughness:.18,metalness:.1}));he.position.set(-120,$(-120,330)-1,330),he.rotation.y=.6,he.castShadow=!0,e.add(he),Du({minX:-129,maxX:-111,minZ:321,maxZ:339,h:17});let ge=new W(Z([J(10,.6,90,`#9c6b45`,0,1.6,0),...[...Array(10)].map((e,t)=>J(.6,6,.6,`#6b4a30`,t%2?4.5:-4.5,-1.2,-40+Math.floor(t/2)*20))]),au({roughness:.9}));ge.position.set(90,0,360),e.add(ge);let _e=new W(Z([J(40,14,30,`#b8c0c8`,0,7,0),J(30,10,.4,`#3a3f47`,0,5,15.1)]),au({metalness:.4,roughness:.4}));return _e.position.set(fu.x0+40,0,-40),_e.castShadow=!0,e.add(_e),Du({minX:fu.x0+20,maxX:fu.x0+60,minZ:-55,maxZ:-25,h:14}),{terrain:m,ocean:g}}function Wu(e,t,n,r){let i=new Kt,a=new Ct,o=new V,s=Z([Y(.25,.4,9,6,`#8d6e4a`,0,4.5,0,.06,0,0),...[0,1,2,3,4,5].map(e=>J(.9,.15,5,`#3f9b45`,Math.sin(e*1.05)*2.2,8.8,Math.cos(e*1.05)*2.2,-.35,e*1.05,0).rotateY(0)),X(.7,`#5a4632`,0,8.9,0)]),c=Z([Y(.3,.45,3,6,`#7a5a3c`,0,1.5,0),X(2.6,`#4f9d3a`,0,4.6,0,1,1.1,1,0),X(1.8,`#5fb04a`,.8,6.2,.4)]),l=Z([Y(.45,.5,4,7,`#4f8a3c`,0,2,0),Y(.3,.3,1.8,6,`#4f8a3c`,.9,2.4,0,0,0,0),J(.9,.5,.5,`#4f8a3c`,.5,1.6,0)]),u=(t,n,r,s)=>{if(!n.length)return;let c=new Ti(t,au({roughness:.8}),n.length);n.forEach((e,t)=>{let n=.8+Math.random()*.5;a.setFromAxisAngle(new V(0,1,0),Math.random()*6.28),i.compose(e,a,o.set(n,n,n)),c.setMatrixAt(t,i),Du({minX:e.x-r,maxX:e.x+r,minZ:e.z-r,maxZ:e.z+r,h:e.y+6,thin:!0}),xu.push({im:c,i:t,x:e.x,z:e.z,r:s*n,m:i.clone(),hidden:!1})}),c.castShadow=!0,e.add(c)};u(s,t,.4,.8),u(c,n,.5,2.2),u(l,r,.5,.9)}function Gu(e,t,n,r=18,i=3){let a=document.createElement(`canvas`);a.width=512,a.height=86;let o=a.getContext(`2d`);o.fillStyle=t,o.fillRect(0,0,512,86),o.fillStyle=n,o.font=`bold 58px Impact, Arial Black, sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(e,256,46);let s=new $i(a);return s.colorSpace=qe,new W(new ra(r,i,.4),new Sa({map:s,emissive:`#ffffff`,emissiveMap:s,emissiveIntensity:.35,roughness:.3}))}var Ku=class{constructor(e){Q(this,`scene`,void 0),Q(this,`time`,10.5),Q(this,`speed`,24/480),Q(this,`weather`,`clear`),Q(this,`sun`,void 0),Q(this,`hemi`,void 0),Q(this,`stars`,void 0),Q(this,`rain`,void 0),Q(this,`dome`,void 0),Q(this,`domeU`,void 0),Q(this,`night`,0),Q(this,`flash`,0),Q(this,`rainPos`,void 0),this.scene=e,this.hemi=new qa(`#bfe6ff`,`#c9a679`,1.1),e.add(this.hemi),this.sun=new uo(`#fff1d6`,2.6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let t=this.sun.shadow.camera;t.left=-90,t.right=90,t.top=90,t.bottom=-90,t.near=1,t.far=500,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.6,e.add(this.sun,this.sun.target),e.fog=new kn(`#9fd8ff`,150,900);let n=[];for(let e=0;e<1200;e++){let e=new V().randomDirection();e.y<.05&&(e.y=Math.abs(e.y)+.05),e.multiplyScalar(1500),n.push(e.x,e.y,e.z)}let r=new wr;r.setAttribute(`position`,new fr(n,3)),this.stars=new Xi(r,new Gi({color:`#fff`,size:2,sizeAttenuation:!1,transparent:!0,fog:!1})),e.add(this.stars),this.domeU={top:{value:new U(`#3d8bff`)},horizon:{value:new U(`#bfe9ff`)},sunDir:{value:new V(0,1,0)},sunCol:{value:new U(`#fff2c4`)},sunVis:{value:1}},this.dome=new W(new ua(2e3,32,16),new ba({uniforms:this.domeU,side:1,depthWrite:!1,fog:!1,vertexShader:`varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform float sunVis; varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = clamp(d.y, -0.2, 1.0);
          vec3 c = mix(horizon, top, pow(max(h, 0.0), 0.55));
          c = mix(c, horizon * 0.85, smoothstep(0.0, -0.2, h));
          float sd = max(dot(d, normalize(sunDir)), 0.0);
          c += sunCol * (pow(sd, 900.0) * 6.0 + pow(sd, 40.0) * 0.35 + pow(sd, 6.0) * 0.12) * sunVis;
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`})),this.dome.renderOrder=-10,this.dome.frustumCulled=!1,e.add(this.dome),this.rainPos=new Float32Array(10800);let i=new wr;i.setAttribute(`position`,new lr(this.rainPos,3)),this.rain=new Wi(i,new Mi({color:`#cfe3ff`,transparent:!0,opacity:.55})),this.rain.frustumCulled=!1,this.rain.visible=!1,e.add(this.rain);for(let e=0;e<1800;e++)this.resetDrop(e,new V,!0)}resetDrop(e,t,n=!1){let r=t.x+(Math.random()-.5)*120,i=t.z+(Math.random()-.5)*120,a=t.y+(n?Math.random()*60-10:40+Math.random()*20),o=this.rainPos;o[e*6]=r,o[e*6+1]=a,o[e*6+2]=i,o[e*6+3]=r+.15,o[e*6+4]=a-1.6,o[e*6+5]=i}hours(){return this.time}update(e,t,n){this.time=(this.time+e*this.speed)%24;let r=(this.time-6)/24*Math.PI*2,i=new V(Math.cos(r)*.8,Math.sin(r),.45).normalize(),a=Yl(-.08,.25,i.y);this.night=1-a,Lu.value=Yl(.35,.9,this.night);let o=Yl(.35,0,Math.abs(i.y))*+(i.y>-.2),s=new U(`#8fd3ff`),c=new U(`#0b1030`),l=new U(`#ff9a6b`),u=c.clone().lerp(s,a).lerp(l,o*.3),d=160,f=950,p=2.7*a,m=.22+.98*a,h=this.weather;if((h===`rain`||h===`storm`)&&(u.lerp(new U(`#5d6670`),.65),p*=.35,m*=.75,d=60,f=420),h===`fog`&&(u.lerp(new U(`#c9d0d6`),.8),p*=.5,d=8,f=140),h===`disco`){let e=new U().setHSL(n*.25%1,.9,.55);u.lerp(e,.7),this.hemi.color.copy(e)}else this.hemi.color.set(`#bfe6ff`);h===`storm`&&(Math.random()<e*.25&&(this.flash=1),this.flash=Math.max(0,this.flash-e*3),u.lerp(new U(`#e8f0ff`),this.flash*.8),m+=this.flash*2),this.scene.background=null;let g=this.scene.fog;g.color.copy(u),g.near=Jl(g.near,d,Math.min(1,e*2)),g.far=Jl(g.far,f,Math.min(1,e*2)),this.sun.intensity=p,this.sun.color.set(`#fff1d6`).lerp(new U(`#ff9c5c`),o),this.hemi.intensity=m,this.hemi.groundColor.set(`#c9a679`).multiplyScalar(.3+.7*a);let _=i.y>0?i:i.clone().setY(Math.max(.2,-i.y));i.y<=0&&(this.sun.intensity=.35,this.sun.color.set(`#9fb4ff`)),this.sun.position.copy(t).addScaledVector(_,200),this.sun.target.position.copy(t),this.dome.position.copy(t);let v=new U(`#050a24`).lerp(new U(`#2f7fff`),a).lerp(new U(`#5a4a9c`),o*.4);h!==`clear`&&v.lerp(u,.7),this.domeU.top.value.copy(v),this.domeU.horizon.value.copy(u).lerp(new U(`#ffffff`),.18*a*(h===`clear`)),this.domeU.sunDir.value.copy(i),this.domeU.sunCol.value.set(`#fff2c4`).lerp(new U(`#ff8a3d`),o),this.domeU.sunVis.value=h===`fog`||h===`storm`?.1:h===`rain`?.3:Yl(-.1,.05,i.y),g.color.copy(this.domeU.horizon.value),zu&&(zu.offset.x=n*.012,zu.offset.y=n*.008),this.stars.material.opacity=Yl(.75,.98,this.night)*(h===`clear`||h===`disco`?1:.1),this.stars.position.copy(t);for(let e of Bu)e.emissiveIntensity=(e.userData.base||0)+Lu.value*(e.userData.glow||1);let y=h===`rain`||h===`storm`;if(this.rain.visible=y,y){let n=this.rainPos;for(let r=0;r<1800;r++)n[r*6+1]-=e*45,n[r*6+4]-=e*45,(n[r*6+4]<t.y-15||Math.abs(n[r*6]-t.x)>70||Math.abs(n[r*6+2]-t.z)>70)&&this.resetDrop(r,t);this.rain.geometry.attributes.position.needsUpdate=!0}}};function qu(e){let t=[];for(let e of mu){let n=e.type===`deck`?1:14,r=[],i=[],a=new U(e.color||`#ffd60a`),o=new U(`#1b1b1b`),s=a.clone().multiplyScalar(.7),c=(t,n,r)=>{let i=Math.cos(e.yaw),a=Math.sin(e.yaw);return[e.x+t*a+n*i,yu(e.x,e.z)+r,e.z+t*i-n*a]},l=(e,t,n,a,o)=>{r.push(...e,...t,...n,...e,...n,...a);for(let e=0;e<6;e++)i.push(o.r,o.g,o.b)},u=e.W/2;for(let t=0;t<n;t++){let r=t/n*e.L,i=(t+1)/n*e.L,d=_u(e,e.type===`deck`?0:r)+.05,f=_u(e,e.type===`deck`?e.L:i)+.05,p=t%2&&e.L<20?o:a;l(c(r,-u,d),c(r,u,d),c(i,u,f),c(i,-u,f),p),l(c(r,u,0),c(i,u,0),c(i,u,f),c(r,u,d),s),l(c(i,-u,0),c(r,-u,0),c(r,-u,d),c(i,-u,f),s)}let d=_u(e,e.L)+.05,f=_u(e,0)+.05;d>.2&&l(c(e.L,u,0),c(e.L,-u,0),c(e.L,-u,d),c(e.L,u,d),s),f>.2&&l(c(0,-u,0),c(0,u,0),c(0,u,f),c(0,-u,f),s);let p=new wr;p.setAttribute(`position`,new fr(r,3)),p.setAttribute(`color`,new fr(i,3)),p.computeVertexNormals(),t.push(p)}let n=new W(Z(t),au({roughness:.35,metalness:.15,side:2}));n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new W(new ca(hu.x1-hu.x0,hu.z1-hu.z0),new Sa({color:`#4a4f58`,roughness:.9}));r.rotation.x=-Math.PI/2,r.position.set((hu.x0+hu.x1)/2,.03,(hu.z0+hu.z1)/2),r.receiveShadow=!0,e.add(r);let i=new W(new ca(hu.x1*-1-290,16),r.material);i.rotation.x=-Math.PI/2,i.position.set((hu.x1-290)/2,.03,-32),e.add(i);let a=Gu(`SEND IT PARK`,`#ff006e`,`#fff`,30,5);a.position.set(-345,12,0),a.rotation.y=-Math.PI/2,e.add(a);let o=new W(Z([J(.6,12,.6,`#222`,0,6,-12),J(.6,12,.6,`#222`,0,6,12)]),au());o.position.set(-345,0,0),e.add(o)}var Ju=[{name:`TACO TSUNAMI`,bg:`#ff6b00`,fg:`#fff`,tag:`Drown in flavor`},{name:`DONUT PANIC`,bg:`#ff4fd8`,fg:`#fff`,tag:`Glazed & alarmed`},{name:`SLURP-O-MATIC`,bg:`#00b4d8`,fg:`#fff`,tag:`128 oz minimum. Bladder not included.`},{name:`GIZMO GULCH`,bg:`#2b2d42`,fg:`#06d6a0`,tag:`Probably not stolen`},{name:`BURGER BUNKER`,bg:`#d00000`,fg:`#ffd60a`,tag:`Survive lunch`},{name:`NAP STATION`,bg:`#5e60ce`,fg:`#fff`,tag:`Mattresses & regrets`},{name:`SKETCHY SUSHI`,bg:`#f1faee`,fg:`#e63946`,tag:`Gas station fresh`},{name:`LAWYERS 4 LESS`,bg:`#023047`,fg:`#ffb703`,tag:`Hit by a couch? Call us`},{name:`GYM DANDY`,bg:`#8ac926`,fg:`#111`,tag:`Lift things. Then cars.`},{name:`PIZZA FIASCO`,bg:`#ffbe0b`,fg:`#9d0208`,tag:`Now delivering by cannon`},{name:`CRYPTO KIOSK`,bg:`#111`,fg:`#ffd60a`,tag:`Number go up? Number go sideways.`},{name:`HOT TUB EMPORIUM`,bg:`#4cc9f0`,fg:`#03045e`,tag:`Bubbles for all`},{name:`DISCOUNT HELMETS`,bg:`#ffd60a`,fg:`#111`,tag:`You'll need one. Trust us.`},{name:`CHAOS MUTUAL`,bg:`#1b4332`,fg:`#d8f3dc`,tag:`Insurance that covers nothing, beautifully`},{name:`BAIL BONDS & BAGELS`,bg:`#6a040f`,fg:`#ffe8d6`,tag:`Get out. Get carbs.`},{name:`MEDIOCRE COFFEE`,bg:`#7f5539`,fg:`#ede0d4`,tag:`It's fine. It's coffee.`},{name:`WIG WAREHOUSE`,bg:`#ff70a6`,fg:`#3c096c`,tag:`Hair today, gone tomorrow`},{name:`MIME TIME`,bg:`#ffffff`,fg:`#111`,tag:`...............`},{name:`ST. BANDAID'S`,bg:`#e9ecef`,fg:`#d00000`,tag:`Urgent-ish care. Take a number.`},{name:`TAXIDERMY & TACOS`,bg:`#386641`,fg:`#f2e8cf`,tag:`Don't mix up the orders`},{name:`FORK FORTRESS`,bg:`#3a0ca3`,fg:`#f72585`,tag:`Tines of the times`},{name:`RENT-A-GOOSE`,bg:`#adb5bd`,fg:`#212529`,tag:`Security, but angrier`},{name:`NOT A FRONT INC.`,bg:`#22223b`,fg:`#c9ada7`,tag:`Totally real business. Buy something.`},{name:`SOCK SANCTUARY`,bg:`#06d6a0`,fg:`#073b4c`,tag:`Reuniting lost pairs since forever`}],Yu=4;function Xu(e){let t=e?256:96,n=Math.ceil(Ju.length/Yu),r=document.createElement(`canvas`);r.width=512*Yu,r.height=t*n;let i=r.getContext(`2d`);Ju.forEach((n,r)=>{let a=r%Yu*512,o=Math.floor(r/Yu)*t;i.save(),i.translate(a,o),i.beginPath(),i.rect(0,0,512,t),i.clip();let s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,n.bg),s.addColorStop(1,Zu(n.bg,-.25)),i.fillStyle=s,i.fillRect(0,0,512,t),i.strokeStyle=`rgba(255,255,255,.6)`,i.lineWidth=6,i.strokeRect(6,6,500,t-12),i.fillStyle=n.fg,i.textAlign=`center`,i.textBaseline=`middle`,i.font=`900 ${e?70:58}px Impact, 'Arial Black', sans-serif`,i.fillText(n.name,256,e?100:50,480),e&&(i.font=`italic 700 34px Arial, sans-serif`,i.fillText(n.tag,256,185,470)),i.restore()});let a=new $i(r);return a.colorSpace=qe,a.anisotropy=4,{tex:a,rows:n}}function Zu(e,t){let n=new U(e);return n.offsetHSL(0,0,t*.5),`#`+n.getHexString()}function Qu(e,t){let n=new Kt,r=new Ct,i=new V(1,1,1),a=new V,o=new V(0,1,0),s=Ju.map(()=>[]),c=Ju.map(()=>[]),l=[],u=[],d=[],f=[];for(let e of Vu){if(e.kind===`houses`||e.kind===`police`||e.kind===`hospital`)continue;let p=[[0,1],[0,-1],[1,0],[-1,0]].filter(()=>t()<.45).slice(0,2);for(let[c,u]of p){let d=Math.floor(t()*Ju.length),f=Math.atan2(c,u),p=c?e.w/2:e.d/2,m=c?e.d:e.w;m<9||e.h<6||(r.setFromAxisAngle(o,f),a.set(e.x+c*(p+.08),3.9,e.z+u*(p+.08)),n.compose(a,r,i.set(Math.min(9,m*.7),1.5,1)),s[d].push(n.clone()),a.set(e.x+c*(p+1),3.2,e.z+u*(p+1)),n.compose(a,r,i.set(Math.min(10,m*.75),.25,2.2)),l.push({m:n.clone(),c:Ju[d].bg}))}let m=t();if(e.h>10&&e.h<45&&m<.3){let s=Math.floor(t()*Ju.length),l=Math.floor(t()*4)*Math.PI/2;r.setFromAxisAngle(o,l),n.compose(a.set(e.x,e.h+5,e.z),r,i.set(12,6,1)),c[s].push(n.clone())}else e.h>8&&e.h<40&&m<.55?(n.compose(a.set(e.x+(t()-.5)*e.w*.4,e.h,e.z+(t()-.5)*e.d*.4),r.identity(),i.set(1,1,1)),u.push(n.clone())):e.h>=45&&m<.5?(n.compose(a.set(e.x,e.h,e.z),r.identity(),i.set(1,.6+t(),1)),d.push(n.clone())):e.h>=45&&(n.compose(a.set(e.x,e.h+.05,e.z),r.identity(),i.set(1,1,1)),f.push(n.clone()))}let p=new ca(1,1);for(let[t,n]of[[s,!1],[c,!0]]){let r=t.reduce((e,t)=>e+t.length,0);if(!r)continue;let{tex:i,rows:a}=Xu(n),o=new Sa({map:i,emissive:`#ffffff`,emissiveMap:i,emissiveIntensity:.15,roughness:.35,side:2});o.userData.glow=1.3,o.userData.base=.15,Bu.push(o),o.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 uvOff;
uniform vec2 uvScale;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vMapUv * uvScale + uvOff;
#endif
#ifdef USE_EMISSIVEMAP
vEmissiveMapUv = vEmissiveMapUv * uvScale + uvOff;
#endif`),e.uniforms.uvScale={value:new B(1/Yu,1/a)}},o.customProgramCacheKey=()=>`signatlas`+a;let s=new Ti(p,o,r),c=new Float32Array(r*2),l=0;t.forEach((e,t)=>e.forEach(e=>{s.setMatrixAt(l,e),c[l*2]=t%Yu/Yu,c[l*2+1]=1-(Math.floor(t/Yu)+1)/a,l++})),p.setAttribute(`uvOff`,new _i(c,2)),s.geometry=p.clone(),s.geometry.setAttribute(`uvOff`,new _i(c,2)),e.add(s)}if(l.length){let t=new Ti(new ra(1,1,1),new Sa({roughness:.5}),l.length),n=new U;l.forEach((e,r)=>{t.setMatrixAt(r,e.m),t.setColorAt(r,n.set(e.c))}),t.castShadow=!0,e.add(t)}let m=(t,n,r)=>{if(!n.length)return;let i=new Ti(t,r,n.length);n.forEach((e,t)=>i.setMatrixAt(t,e)),i.castShadow=!0,e.add(i)};m(Z([Y(2,2,3.2,10,`#8d6e4a`,0,4.6,0),Y(.1,2.2,.9,10,`#6b4a30`,0,6.6,0),...[0,1,2,3].map(e=>J(.2,3,.2,`#555`,Math.cos(e*1.57+.78)*1.6,1.5,Math.sin(e*1.57+.78)*1.6))]),u,au({roughness:.8})),m(Z([Y(.12,.25,14,5,`#ccc`,0,7,0),X(.35,`#ff2a2a`,0,14.2,0)]),d,au({metalness:.6,roughness:.3})),m(Z([Y(6,6,.1,16,`#2b2d42`,0,.05,0),J(.8,.12,5,`#ffd60a`,-1.6,.12,0),J(.8,.12,5,`#ffd60a`,1.6,.12,0),J(3.2,.12,.8,`#ffd60a`,0,.12,0)]),f,au())}function $u(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createImageData(256,256),r=(e,t)=>{let n=e/256*Math.PI*2,r=t/256*Math.PI*2;return Math.sin(n*3+r*2)*.5+Math.sin(n*7-r*5+1.3)*.25+Math.sin(-n*11+r*13+2.1)*.12+Math.sin(n*2-r*9)*.2};for(let e=0;e<256;e++)for(let t=0;t<256;t++){let i=r(t+1,e)-r(t-1,e),a=r(t,e+1)-r(t,e-1),o=new V(-i*3,-a*3,1).normalize(),s=(e*256+t)*4;n.data[s]=(o.x*.5+.5)*255,n.data[s+1]=(o.y*.5+.5)*255,n.data[s+2]=(o.z*.5+.5)*255,n.data[s+3]=255}t.putImageData(n,0,0);let i=new $i(e);return i.wrapS=i.wrapT=l,i}var ed=new V(0,1,0),td=new Sa({color:`#fff7d6`,emissive:`#ffd27a`,emissiveIntensity:0});td.userData.glow=3,Bu.push(td);var nd=au({roughness:.45,metalness:.15}),rd=au({roughness:.18,metalness:.1}),id={lamp:{r:.3,hh:0,mass:3,bounce:.1,cap:260,breakSpeed:5,pole:!0,parts:[{geo:Z([Y(.15,.22,7,6,`#40444c`,0,3.5,0),J(2.2,.2,.3,`#40444c`,1,7,0)]),mat:au({metalness:.5,roughness:.4})},{geo:new ra(.9,.3,.6).translate(1.9,6.8,0),mat:td}]},hydrant:{r:.35,hh:.45,mass:1,bounce:.3,cap:120,breakSpeed:3,parts:[{geo:Z([Y(.22,.26,.8,8,`#e63946`,0,0,0),X(.24,`#e63946`,0,.4,0),J(.7,.14,.14,`#c1121f`,0,.1,0)]),mat:rd}]},mailbox:{r:.45,hh:.65,mass:1,bounce:.3,cap:80,breakSpeed:3,parts:[{geo:Z([J(.6,.8,.5,`#1d4ed8`,0,.2,0),X(.3,`#1d4ed8`,0,.6,0,1,.6,.8),J(.1,.5,.1,`#111`,0,-.45,0)]),mat:rd}]},trash:{r:.4,hh:.5,mass:.5,bounce:.4,cap:120,breakSpeed:2,parts:[{geo:Z([Y(.38,.32,1,8,`#3a5a40`,0,0,0),Y(.42,.42,.1,8,`#2d3e2f`,0,.52,0)]),mat:nd}]},cone:{r:.3,hh:.4,mass:.15,bounce:.5,cap:160,breakSpeed:1,parts:[{geo:Z([Y(.04,.28,.75,8,`#ff7b00`,0,.05,0),J(.6,.08,.6,`#ff7b00`,0,-.36,0),Y(.17,.2,.12,8,`#fff`,0,.05,0)]),mat:rd}]},crate:{r:.6,hh:.6,mass:.6,bounce:.25,cap:160,breakSpeed:2,parts:[{geo:Z([J(1.2,1.2,1.2,`#c08552`),J(1.24,.15,1.24,`#8d5b3a`,0,.45,0),J(1.24,.15,1.24,`#8d5b3a`,0,-.45,0)]),mat:nd}]},barrel:{r:.45,hh:.6,mass:.8,bounce:.3,cap:80,breakSpeed:2,parts:[{geo:Z([Y(.45,.45,1.2,10,`#d00000`),Y(.47,.47,.08,10,`#222`,0,.35,0),Y(.47,.47,.08,10,`#222`,0,-.35,0),J(.5,.3,.02,`#ffd60a`,0,0,.46)]),mat:rd}]},stand:{r:1.6,hh:1,mass:5,bounce:.1,cap:40,breakSpeed:3,parts:[{geo:Z([J(3,.9,1.4,`#a0522d`,0,-.55,0),J(3.2,.12,1.6,`#fff`,0,1.2,0),J(3.2,.06,1.6,`#e63946`,0,1.27,0),J(.1,1.2,.1,`#6b4a30`,1.5,.6,.7),J(.1,1.2,.1,`#6b4a30`,-1.5,.6,.7),...[...Array(10)].map((e,t)=>X(.18,[`#ff3b30`,`#ffcc00`,`#34c759`,`#ff9500`][t%4],-1.2+t%5*.6,0,-.3+Math.floor(t/5)*.5))]),mat:nd}]},fruit:{r:.22,hh:.2,mass:.05,bounce:.6,cap:200,breakSpeed:0,parts:[{geo:X(.22,`#ffffff`,0,0,0,1,1,1,1),mat:au({roughness:.3,flatShading:!1})}]},bench:{r:.9,hh:.45,mass:1.5,bounce:.2,cap:80,breakSpeed:3,parts:[{geo:Z([J(2,.12,.6,`#8d6e4a`,0,0,0),J(2,.5,.1,`#8d6e4a`,0,.3,-.3),J(.1,.45,.6,`#333`,.9,-.25,0),J(.1,.45,.6,`#333`,-.9,-.25,0)]),mat:nd}]},fence:{r:1,hh:.5,mass:.4,bounce:.3,cap:200,breakSpeed:1.5,parts:[{geo:Z([J(2.2,.12,.08,`#fff`,0,.25,0),J(2.2,.12,.08,`#fff`,0,-.15,0),...[-.9,-.3,.3,.9].map(e=>J(.14,1,.1,`#fff`,e,0,0))]),mat:nd}]},ball:{r:1.4,hh:1.4,mass:.3,bounce:.85,cap:30,breakSpeed:0,parts:[{geo:Z([X(1.4,`#ffffff`,0,0,0,1,1,1,2)]),mat:new Sa({vertexColors:!0,roughness:.15,metalness:.05})}]},gnome:{r:.3,hh:.4,mass:.2,bounce:.5,cap:80,breakSpeed:1,parts:[{geo:Z([Y(.18,.25,.45,7,`#1d4ed8`,0,-.15,0),X(.16,`#f1c9a5`,0,.16,0),Y(0,.17,.4,7,`#e63946`,0,.42,0),X(.14,`#fff`,0,.06,.1,1,1.2,.6)]),mat:rd}]},peel:{r:.35,hh:.06,mass:.05,bounce:.1,cap:80,breakSpeed:0,parts:[{geo:Z([J(.5,.06,.18,`#ffe135`,0,0,0),J(.18,.06,.5,`#ffe135`,0,.01,0),J(.12,.08,.12,`#6b4a30`,0,.04,0)]),mat:nd}]}};{let e=id.ball.parts[0].geo,t=e.attributes.position,n=e.attributes.color,r=[`#ff006e`,`#ffffff`,`#3a86ff`,`#ffbe0b`,`#ffffff`,`#06d6a0`].map(e=>new U(e));for(let e=0;e<t.count;e+=3){let i=(t.getX(e)+t.getX(e+1)+t.getX(e+2))/3,a=(t.getZ(e)+t.getZ(e+1)+t.getZ(e+2))/3,o=r[Math.floor((Math.atan2(a,i)+Math.PI)/(Math.PI*2)*6)%6];for(let t=0;t<3;t++)n.setXYZ(e+t,o.r,o.g,o.b)}}var ad=0,od=class{constructor(e,t,n,r,i=0){Q(this,`kind`,void 0),Q(this,`id`,ad++),Q(this,`pos`,new V),Q(this,`vel`,new V),Q(this,`quat`,new Ct),Q(this,`ang`,new V),Q(this,`state`,`static`),Q(this,`sleepT`,0),Q(this,`slot`,-1),Q(this,`life`,1/0),Q(this,`held`,!1),Q(this,`fall`,0),Q(this,`fallDir`,new V),Q(this,`hp`,3),Q(this,`color`,null),Q(this,`geyser`,0),Q(this,`lastHitBy`,null),Q(this,`bouncyT`,0),this.kind=e,this.pos.set(t,n,r),this.quat.setFromAxisAngle(ed,i)}get def(){return id[this.kind]}},sd=16,cd=class{constructor(e){Q(this,`scene`,void 0),Q(this,`list`,[]),Q(this,`meshes`,{}),Q(this,`free`,{}),Q(this,`grid`,new Map),Q(this,`geysers`,[]),Q(this,`m4`,new Kt),Q(this,`s1`,new V(1,1,1)),Q(this,`tq`,new Ct),Q(this,`gk`,new Map),this.scene=e;for(let t of Object.keys(id)){let n=id[t];this.meshes[t]=n.parts.map(r=>{let i=new Ti(r.geo,r.mat,n.cap);return i.count=0,i.castShadow=t!==`fruit`&&t!==`peel`,i.receiveShadow=!1,i.frustumCulled=!1,e.add(i),i}),(t===`fruit`||t===`ball`)&&this.meshes[t][0].setColorAt(0,new U(`#fff`)),this.free[t]=[]}}key(e,t){return Math.floor(e/sd)+`,`+Math.floor(t/sd)}add(e,t,n,r=0,i,a=`static`){let o=id[e],s=this.meshes[e],c=this.free[e].pop();if(c===void 0){if(s[0].count>=o.cap){let t=this.list.find(t=>t.kind===e&&t.state!==`static`);if(!t)return null;this.remove(t),c=this.free[e].pop()}else c=s[0].count++;s.forEach(e=>e.count=s[0].count)}let l=new od(e,t,i??$(t,n)+o.hh,n,r);return l.slot=c,l.state=a,e===`fruit`&&(l.color=new U(q([`#ff3b30`,`#ffcc00`,`#34c759`,`#ff9500`,`#af52de`]))),this.list.push(l),this.gridAdd(l),this.writeMatrix(l),l.color&&(s[0].setColorAt(c,l.color),s[0].instanceColor.needsUpdate=!0),l}remove(e){this.gridDel(e),this.list.splice(this.list.indexOf(e),1),e.state=`dead`,this.m4.makeScale(0,0,0);for(let t of this.meshes[e.kind])t.setMatrixAt(e.slot,this.m4),t.instanceMatrix.needsUpdate=!0;this.free[e.kind].push(e.slot)}gridAdd(e){let t=this.key(e.pos.x,e.pos.z);this.gk.set(e,t),this.grid.has(t)||this.grid.set(t,[]),this.grid.get(t).push(e)}gridDel(e){let t=this.gk.get(e);if(!t)return;let n=this.grid.get(t);if(n){let t=n.indexOf(e);t>=0&&n.splice(t,1)}this.gk.delete(e)}gridMove(e){let t=this.key(e.pos.x,e.pos.z);this.gk.get(e)!==t&&(this.gridDel(e),this.gridAdd(e))}near(e,t,n,r=[]){r.length=0;for(let i=Math.floor((e-n)/sd);i<=Math.floor((e+n)/sd);i++)for(let e=Math.floor((t-n)/sd);e<=Math.floor((t+n)/sd);e++){let t=this.grid.get(i+`,`+e);if(t)for(let e of t)r.push(e)}return r}writeMatrix(e){if(e.def.pole&&e.fall>0){let t=new V().crossVectors(ed,e.fallDir).normalize();this.tq.setFromAxisAngle(t,e.fall).multiply(e.quat),this.m4.compose(e.pos,this.tq,this.s1)}else this.m4.compose(e.pos,e.quat,this.s1);for(let t of this.meshes[e.kind])t.setMatrixAt(e.slot,this.m4),t.instanceMatrix.needsUpdate=!0}hit(e,t,n,r=`player`){if(e.state===`dead`||e.held)return;e.lastHitBy=r;let i=e.def;e.state===`static`&&(t.length()<i.breakSpeed||(this.breakStatic(e,t,n),e.kind===`lamp`||e.kind===`stand`))||(e.state=`awake`,e.sleepT=0,this.wakeAbove(e),e.vel.addScaledVector(t,1/Math.max(.3,i.mass)),e.ang.add(new V(K(-1,1),K(-1,1),K(-1,1)).multiplyScalar(Math.min(12,t.length()*.8))),e.kind===`barrel`&&t.length()>9&&(--e.hp,e.hp<=0&&setTimeout(()=>this.explodeBarrel(e,n),60)))}wakeAbove(e){for(let t of this.near(e.pos.x,e.pos.z,2.5,[]))t!==e&&(t.state===`static`||t.state===`asleep`)&&!t.def.pole&&t.kind!==`stand`&&t.kind!==`hydrant`&&t.pos.y>e.pos.y+.3&&(t.state=`awake`,t.sleepT=0)}breakStatic(e,t,n){if(n.chaos?.(25,q([`SMASH`,`WHOOPS`,`PROPERTY DAMAGE`,`BONK`]),e.pos),e.kind===`lamp`)e.state=`awake`,e.fallDir.copy(t).setY(0).normalize(),e.fallDir.lengthSq()<.1&&e.fallDir.set(1,0,0),e.fall=.01,e.ang.set(0,0,0),n.sfx?.(`crash`,.5,e.pos),n.fx?.sparks?.(e.pos.clone().setY(e.pos.y+.5),10);else if(e.kind===`hydrant`&&(e.geyser=12,this.geysers.push(e),e.base=e.pos.clone(),n.sfx?.(`splash`)),e.kind===`stand`){for(let n=0;n<14;n++){let n=this.add(`fruit`,e.pos.x+K(-1.2,1.2),e.pos.z+K(-.5,.5),0,e.pos.y+K(0,1),`awake`);n&&(n.vel.copy(t).multiplyScalar(K(.4,1)).add(new V(K(-4,4),K(3,9),K(-4,4))),n.life=25)}for(let n=0;n<3;n++){let n=this.add(`crate`,e.pos.x+K(-1,1),e.pos.z,0,e.pos.y+.5,`awake`);n&&(n.vel.copy(t).multiplyScalar(.6).setY(K(4,8)),n.life=40)}n.hud?.floatText(e.pos.clone().setY(e.pos.y+2),`MY CABBAGES!`,`#7CFC00`),this.remove(e)}else e.state=`awake`}explodeBarrel(e,t){if(e.state===`dead`)return;let n=e.pos.clone();this.remove(e),t.explosion(n,8,90,e.lastHitBy||`player`)}update(e,t){let n=t.gravity,r=[];for(let i=this.list.length-1;i>=0;i--){let a=this.list[i];if(a.state!==`awake`||a.held)continue;let o=a.def;if(a.life-=e,a.life<=0){this.remove(a);continue}if(o.pole){a.fall<Math.PI/2-.05&&(a.ang.x+=e*3.5,a.fall=Math.min(Math.PI/2-.05,a.fall+a.ang.x*e),a.fall>=Math.PI/2-.06&&(t.sfx?.(`crash`,.4,a.pos),t.fx?.dust?.(a.pos.clone().addScaledVector(a.fallDir,5),10),a.state=`asleep`)),this.writeMatrix(a);continue}a.vel.y-=n*e,a.pos.addScaledVector(a.vel,e);let s=a.ang.length();s>1e-4&&(this.tq.setFromAxisAngle(a.ang.clone().divideScalar(s),s*e),a.quat.premultiply(this.tq));let c=$(a.pos.x,a.pos.z)+o.hh;c-o.hh<-1.6&&(a.kind===`ball`||a.kind===`crate`||a.kind===`barrel`||a.kind===`fruit`)&&(c=du+o.hh*.3);for(let e of this.near(a.pos.x,a.pos.z,3,r)){if(e===a||e.state===`dead`||e.def.pole)continue;let n=e.pos.x-a.pos.x,r=e.pos.z-a.pos.z,i=Math.hypot(n,r),s=(o.r+e.def.r)*.85;if(!(i>=s)){if(a.pos.y>e.pos.y+e.def.hh*.6)c=Math.max(c,e.pos.y+e.def.hh+o.hh);else if(Math.abs(a.pos.y-e.pos.y)<o.hh+e.def.hh){let c=i>.001?n/i:1,l=i>.001?r/i:0,u=s-i;a.pos.x-=c*u*.5,a.pos.z-=l*u*.5;let d=(a.vel.x-e.vel.x)*c+(a.vel.z-e.vel.z)*l;if(d>.5){let n=d*.8;a.vel.x-=c*n,a.vel.z-=l*n,this.hit(e,new V(c*n,.5,l*n).multiplyScalar(o.mass),t,a.lastHitBy)}}}}let l=a.bouncyT>0||t.isBouncy?.(a.pos.x,a.pos.z);a.bouncyT-=e;let u=t.trampolineAt?.(a.pos.x,a.pos.z,a.pos.y-o.hh,a.vel.y);if(u)a.vel.y=u,a.ang.x+=K(-3,3);else if(a.pos.y<c){a.pos.y=c;let n=l?.92:o.bounce;a.vel.y<-2?(a.vel.y=-a.vel.y*n,a.ang.multiplyScalar(.7),(a.kind===`ball`||l)&&t.sfx?.(`pop`,.2,a.pos)):a.vel.y=0;let r=a.kind===`ball`?.4:3;if(a.vel.x*=Math.max(0,1-r*e),a.vel.z*=Math.max(0,1-r*e),a.ang.multiplyScalar(Math.max(0,1-3*e)),a.kind!==`ball`&&a.kind!==`fruit`&&a.vel.lengthSq()<4){let t=[new V(1,0,0),new V(0,1,0),new V(0,0,1)].map(e=>e.applyQuaternion(a.quat)),n=t[0],r=0;for(let e of t)Math.abs(e.y)>r&&(r=Math.abs(e.y),n=e);let i=new Ct().setFromUnitVectors(n.clone().multiplyScalar(Math.sign(n.y)||1),ed).multiply(a.quat);a.quat.slerp(i,Math.min(1,e*6))}}let d=Au(a.pos,o.r);if(d){let e=-a.vel.dot(d);e>0&&a.vel.addScaledVector(d,e*(1+o.bounce))}this.gridMove(a),this.writeMatrix(a),a.pos.y<=c+.05&&a.vel.lengthSq()<.05&&a.ang.lengthSq()<.1?(a.sleepT+=e,a.sleepT>.8&&(a.state=`asleep`,a.vel.set(0,0,0),a.ang.set(0,0,0))):a.sleepT=0}for(let n=this.geysers.length-1;n>=0;n--){let r=this.geysers[n];r.geyser-=e;let i=r.base;if(r.geyser<=0)this.geysers.splice(n,1);else{for(let e=0;e<3;e++)t.fx.add(i.clone().add(new V(K(-.2,.2),.3,K(-.2,.2))),new V(K(-2.6,2.6),K(14,21),K(-2.6,2.6)),1.3,K(.25,.45),Math.random()<.6?`#6cc4ff`:`#b8e6ff`,1,.4,.2);t.geyserPush?.(i)}}}each(e,t,n,r){for(let i of this.near(e,t,n,[]))i.state!==`dead`&&r(i)}populate(){for(let e of Ru){let t=Math.atan2(-e.x,-e.z);this.add(`lamp`,e.x,e.z,t-Math.PI/2,$(e.x,e.z))}let e=Math.random;for(let t of Nu){let n=[[t.x0+2.5,t.z0+2.5],[t.x1-2.5,t.z0+2.5],[t.x1-2.5,t.z1-2.5],[t.x0+2.5,t.z1-2.5]];if(t.kind===`garage`||t.kind===`bounce`)continue;let r=(e,t)=>(e+t)/2;e()<.7&&this.add(`hydrant`,r(t.x0,t.x1)+K(-12,12),t.z0+1.6),e()<.5&&this.add(`hydrant`,t.x0+1.6,r(t.z0,t.z1)+K(-12,12)),e()<.5&&this.add(`mailbox`,n[1][0]-3,n[1][1]-.8);for(let t=0;t<2;t++)if(e()<.6){let e=q(n);this.add(`trash`,e[0]+K(-3,3),e[1]+K(-.5,.5))}if((t.kind===`downtown`||t.kind===`mid`||t.kind===`plaza`)&&e()<.45&&this.add(`stand`,r(t.x0,t.x1)+K(-8,8),t.z1-3,Math.PI),t.kind===`park`||t.kind===`plaza`)for(let e=0;e<3;e++)this.add(`bench`,t.cx+K(-14,14),t.cz+K(-14,14),K(0,6));if(t.kind===`houses`){for(let e=t.x0+4;e<t.x1-4;e+=2.2)this.add(`fence`,e+1.1,t.z1-4.2,0);for(let e=0;e<3;e++)this.add(`gnome`,t.cx+K(-16,16),t.cz+K(-16,16),K(0,6))}if(t.kind===`lot`){for(let e=0;e<6;e++)this.add(`cone`,t.cx-15+e*6,t.cz+K(-2,2));for(let e=0;e<3;e++)this.add(`crate`,t.cx+14,t.cz-14,0,.6+e*1.2,`static`);this.add(`barrel`,t.cx-14,t.cz-14),this.add(`barrel`,t.cx-12.8,t.cz-14.5)}}for(let e=0;e<8;e++){let e=K(-250,250);this.add(`ball`,e,300+K(4,16),0,void 0,`asleep`)}for(let e=0;e<5;e++)for(let t=0;t<4-Math.floor(e/2);t++)this.add(`crate`,-450+t*1.25+e*.3,-110,0,.6+e*1.2,`static`);for(let e=0;e<8;e++)this.add(`barrel`,-500+e*2,90);for(let e=0;e<12;e++)this.add(`cone`,-380-e*8,-32+e%2*3)}},ld=class{constructor(e){Q(this,`scene`,void 0),Q(this,`tramps`,[]),Q(this,`cannons`,[]),Q(this,`castles`,[]),Q(this,`bounceZones`,[]),this.scene=e;let t=Z([Y(2.4,2.4,.15,16,`#111`,0,0,0),Y(2.6,2.6,.25,16,`#3a86ff`,0,-.05,0).scale(1,1,1),...[0,1,2,3,4,5].map(e=>J(.12,1.1,.12,`#888`,Math.cos(e*1.05)*2.4,-.6,Math.sin(e*1.05)*2.4))]),n=au({roughness:.3}),r=(r,i,a=22)=>{let o=$(r,i)+1.15,s=new W(t,n);s.position.set(r,o,i),s.castShadow=!0,e.add(s),this.tramps.push({x:r,z:i,r:2.5,top:o,power:a,mesh:s,squish:0})};for(let e of Nu)e.kind===`park`&&r(e.cx+K(-8,8),e.cz+K(-8,8));for(let e=0;e<5;e++)r(-200+e*90,310,24);for(let e=0;e<4;e++)r(-430-e*18,80,26+e*4);let i=[[`#ff006e`,`#ffbe0b`],[`#3a86ff`,`#ff70a6`],[`#06d6a0`,`#8338ec`],[`#ff7b00`,`#4cc9f0`]];for(let t of Nu.filter(e=>e.kind===`bounce`)){this.bounceZones.push({x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1});for(let n=0;n<2;n++){let[r,a]=i[(t.i+n)%4],o=t.cx+(n?10:-10),s=t.cz+(n?8:-8),c=new W(Z([J(12,1.6,12,r,0,.8,0),...[[-1,-1],[1,-1],[-1,1],[1,1]].flatMap(([e,t])=>[Y(1.2,1.3,6,10,a,e*12/2,3,t*12/2),X(1.3,r,e*12/2,6.4,t*12/2,1,1,1,1)]),J(12,3.2,.9,a,0,3,-6),J(.9,3.2,12,a,-6,3,0),J(.9,3.2,12,a,6,3,0),J(4,2.4,.95,`#ffffff`,0,2.4,-6.05)]),new Sa({vertexColors:!0,roughness:.25,metalness:.05}));c.position.set(o,0,s),c.castShadow=!0,c.receiveShadow=!0,e.add(c),this.castles.push({x:o,z:s,w:12,mesh:c,t:K(0,6)}),this.tramps.push({x:o,z:s,r:5.5,top:1.6,power:20,squish:0})}let n=Gu(`BOUNCE TOWN`,`#ff8fd8`,`#2b2d42`,20,3.4);n.position.set(t.cx,9,t.z0+1),n.rotation.y=Math.PI,e.add(n)}let a=(t,n,r,i,a)=>{let o=new xn,s=$(t,n);o.add(new W(Z([J(3.4,1.2,4,`#5a189a`,0,.6,0),Y(1.2,1.2,.4,12,`#222`,1.9,1.2,0,0,0,Math.PI/2),Y(1.2,1.2,.4,12,`#222`,-1.9,1.2,0,0,0,Math.PI/2)]),au({roughness:.3,metalness:.4})));let c=new xn;c.position.set(0,1.8,0),c.add(new W(Z([Y(1,1.25,7,14,`#ffd60a`,0,3.2,0),Y(1.15,1.15,.5,14,`#ff006e`,0,6.4,0),Y(.75,.75,.2,14,`#111`,0,6.7,0),J(1.4,.4,1.4,`#ff006e`,0,1.2,0)]),au({roughness:.2,metalness:.5}))),c.rotation.x=Math.PI/2-i,o.add(c),o.position.set(t,s,n),o.rotation.y=r,o.traverse(e=>e.castShadow=!0),e.add(o);let l=Gu(`THE YEETINATOR`,`#5a189a`,`#ffd60a`,9,1.5);l.position.set(0,2.2,-2.1),l.rotation.y=Math.PI,o.add(l),this.cannons.push({x:t,z:n,yaw:r,pitch:i,power:a,mesh:o,barrel:c,fuse:-1,cd:0})};a(-360,60,-Math.PI/2,.75,62),a(-40,314,Math.PI,.8,58),a(-224,120,.4,.9,50)}isBouncy(e,t){for(let n of this.bounceZones)if(e>n.x0&&e<n.x1&&t>n.z0&&t<n.z1)return!0;return!1}trampolineAt(e,t,n,r){if(r>-1)return 0;for(let i of this.tramps){if(Math.abs(n-i.top)>.9)continue;let a=e-i.x,o=t-i.z;if(!(a*a+o*o>i.r*i.r))return i.squish=1,Math.max(i.power,-r*1.05)}return 0}topAt(e,t){for(let n of this.tramps){let r=e-n.x,i=t-n.z;if(r*r+i*i<n.r*n.r)return n.top}return-1/0}update(e,t){for(let t of this.tramps)t.mesh&&t.squish>0&&(t.squish=Math.max(0,t.squish-e*4),t.mesh.scale.set(1+t.squish*.08,1-t.squish*.5,1+t.squish*.08));for(let t of this.castles){t.t+=e;let n=Math.sin(t.t*2.2)*.025;t.mesh.scale.set(1+n,1-n*1.5,1+n)}for(let n of this.cannons)n.cd=Math.max(0,n.cd-e),n.fuse>0?n.barrel.scale.setScalar(1+Math.sin(t*40)*.04):n.barrel.scale.setScalar(1)}launchDir(e){return new V(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch))}muzzle(e){return new V(e.x,$(e.x,e.z)+1.8,e.z).addScaledVector(this.launchDir(e),7)}},ud={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},dd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},fd=new co(-1,1,1,-1,0,1),pd=new class extends wr{constructor(){super(),this.setAttribute(`position`,new fr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new fr([0,2,0,0,2,0],2))}},md=class{constructor(e){this._mesh=new W(pd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},hd=class extends dd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ba?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_a.clone(e.uniforms),this.material=new ba({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new md(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},gd=class extends dd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},_d=class extends dd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},vd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:T}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hd(ud),this.copyPass.material.blending=0,this.timer=new go}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}gd!==void 0&&(r instanceof gd?n=!0:r instanceof _d&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},yd=class extends dd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},bd={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},xd=class e extends dd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(i,a,{type:T,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Ut(i,a,{type:T,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Ut(i,a,{type:T,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=bd;this.highPassUniforms=_a.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ba({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_a.clone(ud.uniforms),this.blendMaterial=new ba({uniforms:this.copyUniforms,vertexShader:ud.vertexShader,fragmentShader:ud.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new ni,this._fsQuad=new md(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ba({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ba({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};xd.BlurDirectionX=new B(1,0),xd.BlurDirectionY=new B(0,1);var Sd={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Cd=class extends dd{constructor(){super(),this.isOutputPass=!0,this.uniforms=_a.clone(Sd.uniforms),this.material=new xa({name:Sd.name,uniforms:this.uniforms,vertexShader:Sd.vertexShader,fragmentShader:Sd.fragmentShader}),this._fsQuad=new md(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},At.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},wd=()=>`ontouchstart`in window&&(matchMedia(`(pointer: coarse)`).matches||/iPhone|iPad|Android/i.test(navigator.userAgent));function Td(){let e=new URLSearchParams(location.search).get(`quality`)||localStorage.getItem(`cc-quality`);return e===`low`||e===`medium`||e===`high`?e:wd()?`low`:`high`}var Ed=class{constructor(e,t,n,r){Q(this,`renderer`,void 0),Q(this,`scene`,void 0),Q(this,`camera`,void 0),Q(this,`sun`,void 0),Q(this,`level`,void 0),Q(this,`composer`,null),Q(this,`bloom`,null),this.renderer=e,this.scene=t,this.camera=n,this.sun=r,this.level=Td(),this.apply(this.level)}apply(e){this.level=e,localStorage.setItem(`cc-quality`,e);let t=this.renderer,n=Math.min(devicePixelRatio,e===`high`?2:e===`medium`?1.5:1);t.setPixelRatio(n),t.shadowMap.enabled=e!==`low`,t.shadowMap.type=1;let r=e===`high`?2048:1024;this.sun.shadow.mapSize.x!==r&&(this.sun.shadow.mapSize.set(r,r),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.sun.castShadow=e!==`low`,this.sun.shadow.radius=e===`high`?3:1,this.scene.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.needsUpdate=!0)}),e===`low`?(this.composer?.dispose(),this.composer=null,this.bloom=null):(this.composer||(this.composer=new vd(t),this.composer.addPass(new yd(this.scene,this.camera)),this.bloom=new xd(new B(innerWidth/2,innerHeight/2),.45,.5,.82),this.composer.addPass(this.bloom),this.composer.addPass(new Cd)),this.composer.setPixelRatio(n),this.composer.setSize(innerWidth,innerHeight),this.bloom.resolution.set(innerWidth/(e===`high`?2:3),innerHeight/(e===`high`?2:3)))}resize(){this.composer?.setSize(innerWidth,innerHeight)}render(e){this.composer&&this.bloom?(this.bloom.strength=.1+e*.12,this.bloom.threshold=1.5-e*.2,this.bloom.radius=.25+e*.05,this.composer.render()):this.renderer.render(this.scene,this.camera)}cycle(){let e=[`low`,`medium`,`high`],t=e[(e.indexOf(this.level)+1)%3];return this.apply(t),t}},Dd=[{id:`dez`,name:`Dez Marlow`,tag:`Bike courier with a personal feud against red lights.`,perkText:`+25% sprint speed`,perk:{speed:1.25},look:{skin:`#8d5a3b`,shirt:`#ff6b35`,pants:`#2b2d42`,shoes:`#f7f7f7`,hair:`#1b1b1b`,hat:`cap`,glasses:`#111`,kit:`courier`,eyes:`#3b2416`}},{id:`gigawatt`,name:`Grandma Gigawatt`,tag:`Retired roller-derby legend. Still undefeated at bingo.`,perkText:`+50% max health`,perk:{health:1.5},look:{skin:`#f1c9a5`,shirt:`#9b5de5`,pants:`#3a0ca3`,shoes:`#ff006e`,hair:`#e9e9e9`,hat:`bun`,glasses:`#ff006e`,scale:.92,kit:`derby`,eyes:`#4a6fa5`}},{id:`brayden`,name:`Brayden Moonshot`,tag:`Crypto bro. Has a podcast. Will tell you about it.`,perkText:`Cash pickups are worth 2x`,perk:{cash:2},look:{skin:`#f3d2b3`,shirt:`#00f5d4`,pants:`#d4c4a8`,shoes:`#ffffff`,hair:`#d4a373`,hat:`bald`,glasses:`#00bbf9`,kit:`vest`}},{id:`fizz`,name:`Dr. Ottoline Fizz`,tag:`Unlicensed physicist. Owns three "do not touch" buttons.`,perkText:`Mod weapons +50% chaos`,perk:{mod:1.5},look:{skin:`#c68e6a`,shirt:`#f8f9fa`,pants:`#6c757d`,shoes:`#343a40`,hair:`#ff4d6d`,hat:`afro`,glasses:`#ffd60a`,kit:`labcoat`,eyes:`#2a9d8f`}},{id:`sal`,name:`Uncle Sal Calzone`,tag:`Completely legitimate olive oil importer. Don't ask.`,perkText:`Wanted level cools off 2x faster`,perk:{heat:2},look:{skin:`#e0b48f`,shirt:`#22223b`,pants:`#22223b`,shoes:`#111`,hair:`#4a4e69`,hat:`fedora`,belly:1.35,scale:1.05,kit:`suit`,stache:`#4a4e69`}},{id:`rex`,name:`Rex Granite`,tag:`Stuntman between gigs. Has been on fire 41 times.`,perkText:`Takes half explosion damage`,perk:{blast:.5},look:{skin:`#b07850`,shirt:`#6a994e`,pants:`#3d405b`,shoes:`#432818`,hair:`#222`,hat:`mohawk`,scale:1.12,kit:`stunt`}},{id:`lag`,name:`Lil' Lag`,tag:`Streamer. Four hours of sleep. Chat said do it.`,perkText:`Vehicles +15% top speed`,perk:{veh:1.15},look:{skin:`#ffdbac`,shirt:`#7209b7`,pants:`#111`,shoes:`#4cc9f0`,hair:`#4cc9f0`,hat:`beanie`,scale:.85,kit:`streamer`,sleepy:!0,eyes:`#7209b7`}},{id:`dee`,name:`Officer Dee Tour`,tag:`Off-duty cop on a very, very long lunch break.`,perkText:`Stealing cars never raises heat`,perk:{noJackHeat:!0},look:{skin:`#6f4e37`,shirt:`#4361ee`,pants:`#1d3557`,shoes:`#111`,hair:`#111`,hat:`police`,glasses:`#222`,kit:`beat`,stache:`#111`}}],Od=[`#f1c9a5`,`#e0ac69`,`#c68642`,`#8d5524`,`#ffdbac`,`#a0673f`,`#5c3a21`],kd=[`#e63946`,`#f1faee`,`#a8dadc`,`#457b9d`,`#ffb703`,`#fb8500`,`#8ecae6`,`#2a9d8f`,`#e9c46a`,`#f4a261`,`#cdb4db`,`#ffafcc`,`#06d6a0`],Ad=[`#264653`,`#3d405b`,`#6b705c`,`#a5a58d`,`#1d3557`,`#5e548e`,`#cb997e`],jd=[`cap`,`bald`,`afro`,`bun`,`beanie`,`bald`,`mohawk`];function Md(){return{skin:q(Od),shirt:q(kd),pants:q(Ad),shoes:q([`#111`,`#eee`,`#7f5539`]),hair:q([`#1b1b1b`,`#6f4518`,`#d4a373`,`#e9e9e9`,`#b23a48`]),hat:q(jd),glasses:Math.random()<.25?`#111`:void 0,belly:Math.random()<.25?1.25:1,scale:.9+Math.random()*.2}}var Nd={skin:`#c68642`,shirt:`#1d4ed8`,pants:`#0f172a`,shoes:`#111`,hair:`#111`,hat:`police`,glasses:`#111`},Pd=au({roughness:.5}),Fd=class{constructor(e){Q(this,`look`,void 0),Q(this,`root`,new xn),Q(this,`body`,new xn),Q(this,`head`,void 0),Q(this,`torso`,void 0),Q(this,`armL`,new xn),Q(this,`armR`,new xn),Q(this,`legL`,new xn),Q(this,`legR`,new xn),Q(this,`weaponSlot`,new xn),Q(this,`phase`,0),Q(this,`expr`,`neutral`),Q(this,`exprLock`,0),Q(this,`headGeo`,{}),this.look=e;let t=e,n=t.belly||1;this.root.add(this.body);let r=t.kit;this.torso=new W(Z([J(.62*n,.7,.36*n,t.shirt,0,0,0),J(.64*n,.12,.38*n,t.pants,0,-.34,0),...t.cape?[J(.6,.9,.05,t.cape,0,-.1,-.22)]:[],...t.hat===`police`?[J(.14,.12,.02,`#ffd60a`,.16,.18,.19*n)]:[],...Id(r,t,n)]),Pd),this.torso.position.y=1.15,this.body.add(this.torso),this.headGeo.neutral=Ld(t,`neutral`),this.head=new W(this.headGeo.neutral,Pd),this.head.position.y=1.5,this.body.add(this.head);let i=(e,i)=>{e.add(new W(Z([J(.18,.62,.18,r===`labcoat`?`#f8f9fa`:t.shirt,0,-.22,0),J(.16,.16,.16,r===`mime`?`#ffffff`:t.skin,0,-.58,0),...r===`derby`?[J(.26,.14,.26,`#ff006e`,0,.02,0)]:r===`stunt`?[J(.3,.2,.3,`#ffbe0b`,0,.02,0)]:r===`courier`?[J(.19,.08,.19,`#ffd60a`,0,-.46,0)]:[]]),Pd)),e.position.set(.4*n*i,1.45,0),this.body.add(e)};i(this.armL,1),i(this.armR,-1),this.armR.add(this.weaponSlot),this.weaponSlot.position.set(0,-.62,.1);let a=(e,n)=>{e.add(new W(Z([J(.22,.72,.24,t.pants,0,-.36,0),J(.24,.12,.34,t.shoes,0,-.76,.05),...r===`derby`?[J(.26,.16,.08,`#ff006e`,0,-.36,.13),Y(.06,.06,.3,8,`#ffd60a`,0,-.86,.15,0,0,Math.PI/2),Y(.06,.06,.3,8,`#ffd60a`,0,-.86,-.07,0,0,Math.PI/2)]:r===`stunt`?[J(.26,.18,.1,`#432818`,0,-.36,.13)]:[]]),Pd)),e.position.set(n*.15,.8,0),this.body.add(e)};a(this.legL,1),a(this.legR,-1);let o=t.scale||1;this.root.scale.setScalar(o),this.root.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}setExpr(e){e!==this.expr&&(this.expr=e,this.head.geometry=this.headGeo[e]||(this.headGeo[e]=Ld(this.look,e)))}setGiantHead(e){this.head.scale.setScalar(e?2.6:1)}emote(e,t=1.5){this.setExpr(e),this.exprLock=t}animate(e,t,n,r=0,i=!1){let a=this.body;if(this.exprLock>0?this.exprLock-=e:this.setExpr(n===`ragdoll`?`shout`:this.look.hat===`police`?`smug`:`neutral`),n===`ragdoll`){this.phase+=e*14,this.armL.rotation.set(Math.sin(this.phase)*1.2,0,1.6),this.armR.rotation.set(Math.cos(this.phase)*1.2,0,-1.6),this.legL.rotation.set(Math.sin(this.phase*.7)*.9,0,.5),this.legR.rotation.set(-Math.sin(this.phase*.7)*.9,0,-.5);return}if(a.rotation.set(0,0,0),a.position.set(0,0,0),this.armL.rotation.z=.08,this.armR.rotation.z=-.08,this.legL.rotation.z=0,this.legR.rotation.z=0,n===`sit`){this.legL.rotation.x=-1.4,this.legR.rotation.x=-1.4,this.armL.rotation.x=-1.1,this.armR.rotation.x=-1.1,a.position.y=-.55;return}if(n===`air`){this.legL.rotation.x=-.6,this.legR.rotation.x=.3,this.armL.rotation.x=-2.6,this.armR.rotation.x=i?-1.5:-2.4;return}if(n===`swim`){this.phase+=e*6,a.rotation.x=1.2,a.position.y=.2,this.armL.rotation.x=-Math.PI+Math.sin(this.phase)*1.4,this.armR.rotation.x=-Math.PI-Math.sin(this.phase)*1.4,this.legL.rotation.x=Math.sin(this.phase*2)*.4,this.legR.rotation.x=-Math.sin(this.phase*2)*.4;return}let o=Math.min(t,12);this.phase+=e*(2+o*1.3);let s=Math.min(1,o/6)*.9,c=Math.sin(this.phase);this.legL.rotation.x=c*s,this.legR.rotation.x=-c*s,this.armL.rotation.x=-c*s*.9,this.armR.rotation.x=c*s*.9,a.position.y=Math.abs(Math.cos(this.phase))*.06*s,a.rotation.x=o>7?.15:0,i&&(this.armR.rotation.x=-1.5),r>0?(this.armR.rotation.x=-1.6*Math.sin(r*Math.PI),this.torso.rotation.y=-.4*Math.sin(r*Math.PI)):this.torso.rotation.y=0}};function Id(e,t,n){let r=n;switch(e){case`courier`:return[J(.56,.52,.3,`#ffd60a`,0,.05,-.34*r),J(.58,.08,.32,`#111`,0,.12,-.34*r),J(.08,.8,.06,`#111`,.12,.05,.2*r,0,0,.6)];case`derby`:return[J(.86,.16,.46,`#ff006e`,0,.36,0),J(.2,.2,.05,`#fff`,0,.05,.19*r)];case`vest`:return[J(.78,.6,.5,`#ff9f1c`,0,.06,0),J(.8,.05,.52,`#e07a00`,0,.12,0),J(.8,.05,.52,`#e07a00`,0,-.06,0),J(.16,.24,.04,`#111`,.2,-.05,.27)];case`labcoat`:return[J(.68,1.15,.42,`#f8f9fa`,0,-.2,-.02),J(.2,.7,.02,t.shirt===`#f8f9fa`?`#ff4d6d`:t.shirt,0,.05,.2),J(.08,.14,.03,`#4cc9f0`,-.2,.15,.22)];case`suit`:return[J(.2,.36,.02,`#fff`,0,.12,.19*r),J(.06,.3,.025,`#b5179e`,0,.1,.2*r),Y(.22*r,.22*r,.04,10,`#ffd60a`,0,.3,.02,.3,0,0)];case`stunt`:return[J(.98,.26,.5,`#ffbe0b`,0,.3,0),J(.3,.16,.3,`#f1faee`,0,.42,0),J(.66,.08,.4,`#e63946`,0,-.05,0)];case`streamer`:return[J(.7,.78,.44,t.shirt,0,-.02,0),J(.44,.24,.12,t.shirt,0,.4,-.22),J(.2,.1,.02,`#4cc9f0`,0,.05,.23)];case`beat`:return[J(.7*r,.12,.44*r,`#3d2b1f`,0,-.24,0),J(.1,.16,.1,`#111`,-.3*r,-.3,.12),J(.08,.2,.08,`#fff`,.26*r,-.32,.16)];case`mime`:return[...[.2,0,-.2].map(e=>J(.64,.08,.38,`#111`,0,e,0)),J(.18,.12,.05,`#e63946`,0,.3,.2)]}return[]}function Ld(e,t){let n=[J(.36,.38,.36,e.kit===`mime`?`#ffffff`:e.skin,0,.19,0)],r=e.glasses&&/^#(1|2)/.test(e.glasses),i=.181,a=t===`shout`?.12:t===`angry`||t===`smug`?.06:e.sleepy?.05:.09;for(let o of[-1,1]){r||(n.push(J(.1,a,.02,`#ffffff`,o*.085,.24,i)),n.push(J(t===`shout`?.035:.045,t===`shout`?.035:Math.min(.05,a),.02,e.eyes||`#1b1b1b`,o*.085+(t===`smug`?.02:0),.235,.187)));let s=t===`shout`?.34:.305,c=t===`angry`?o*.45:t===`smug`?o>0?.3:-.05:t===`shout`?-o*.2:0;n.push(J(.12,.035,.03,e.kit===`mime`?`#111`:e.hair,o*.085,s,.185,0,0,c))}t===`shout`?n.push(J(.13,.12,.02,`#5a0f1a`,0,.09,i),J(.08,.04,.025,`#ff7096`,0,.06,.183)):t===`grin`?n.push(J(.2,.07,.02,`#5a0f1a`,0,.1,i),J(.18,.03,.025,`#ffffff`,0,.115,.183)):t===`angry`?n.push(J(.14,.03,.02,`#5a0f1a`,0,.09,i),J(.03,.03,.02,`#5a0f1a`,-.07,.075,i),J(.03,.03,.02,`#5a0f1a`,.07,.075,i)):t===`smug`?n.push(J(.13,.03,.02,`#5a0f1a`,.02,.1,i,0,0,.18)):n.push(J(.12,.03,.02,`#5a0f1a`,0,.1,i)),e.kit===`mime`&&n.push(J(.03,.08,.02,`#111`,-.085,.17,i),J(.03,.08,.02,`#111`,.085,.17,i)),e.stache&&n.push(J(.2,.05,.04,e.stache,0,.145,.191));let o=e.hat;return o!==`bald`&&o!==`helmet`&&n.push(J(.38,.1,.38,e.hair,0,.4,-.01),J(.38,.22,.08,e.hair,0,.3,-.16)),o===`cap`&&n.push(J(.4,.12,.4,e.shirt,0,.44,0),J(.34,.04,.2,e.shirt,0,.39,.26)),o===`police`&&n.push(J(.42,.14,.42,`#0f172a`,0,.45,0),J(.36,.04,.2,`#0f172a`,0,.39,.26),J(.1,.08,.02,`#ffd60a`,0,.46,.22)),o===`bun`&&n.push(X(.13,e.hair,0,.52,-.08)),o===`mohawk`&&n.push(J(.08,.32,.42,e.hair,0,.54,0)),o===`afro`&&n.push(X(.3,e.hair,0,.42,-.04,1,.85,1,1)),o===`beanie`&&n.push(J(.4,.2,.4,e.hair,0,.44,0),X(.07,`#fff`,0,.58,0)),o===`fedora`&&n.push(J(.6,.04,.6,`#111`,0,.4,0),J(.38,.18,.38,`#111`,0,.5,0),J(.39,.05,.39,`#b5179e`,0,.43,0)),o===`helmet`&&n.push(X(.25,e.hair,0,.3,0,1,.9,1,1)),e.glasses&&(r?n.push(J(.38,.08,.04,e.glasses,0,.24,.19)):n.push(J(.38,.025,.03,e.glasses,0,.29,.195),J(.12,.02,.03,e.glasses,-.085,.19,.195),J(.12,.02,.03,e.glasses,.085,.19,.195),J(.02,.1,.03,e.glasses,-.15,.24,.195),J(.02,.1,.03,e.glasses,.15,.24,.195))),e.kit===`streamer`&&n.push(J(.06,.22,.22,`#111`,-.21,.24,0),J(.06,.22,.22,`#111`,.21,.24,0),J(.46,.05,.08,`#111`,0,.5,0),J(.05,.05,.16,`#4cc9f0`,-.2,.1,.14)),e.kit===`labcoat`&&n.push(J(.4,.1,.06,`#333`,0,.37,.17),J(.12,.08,.04,`#9be7ff`,-.09,.37,.2),J(.12,.08,.04,`#9be7ff`,.09,.37,.2)),e.kit===`stunt`&&n.push(Y(.22,.24,.12,10,`#f1faee`,0,-.04,0)),e.kit===`derby`&&n.push(J(.14,.14,.04,`#ffd60a`,0,.62,-.08)),e.kit===`mime`&&n.push(J(.42,.06,.42,`#111`,0,.41,0),J(.3,.14,.3,`#111`,0,.5,0)),Z(n)}var Rd={sedan:{id:`sedan`,name:`Commuter Deluxe`,kind:`car`,max:36,accel:15,turn:1.9,grip:7,hp:100,radius:2.2,mass:1.2,colors:[`#e63946`,`#457b9d`,`#f1faee`,`#2a9d8f`,`#adb5bd`,`#264653`],blurb:`Beige energy. Surprisingly fast in reverse.`,seat:`inside`,camDist:9,camH:3.2},muscle:{id:`muscle`,name:`Thunderhoof`,kind:`car`,max:48,accel:24,turn:1.75,grip:3.2,hp:120,radius:2.3,mass:1.4,colors:[`#ff6b00`,`#111111`,`#d00000`,`#ffd60a`],blurb:`Drifts sideways whether you asked or not.`,seat:`inside`,camDist:9,camH:3.2},sports:{id:`sports`,name:`Vortessa GT`,kind:`car`,max:62,accel:30,turn:2.2,grip:8,hp:85,radius:2.2,mass:1,colors:[`#ff006e`,`#3a86ff`,`#ffbe0b`,`#06d6a0`,`#ffffff`],blurb:`Zero to regret in 2.9 seconds.`,seat:`inside`,camDist:8.5,camH:2.8},truck:{id:`truck`,name:`Haulmaster 9000`,kind:`car`,max:27,accel:9,turn:1.15,grip:9,hp:260,radius:3.4,mass:4,colors:[`#f4a261`,`#e9c46a`,`#8ecae6`,`#ffffff`],blurb:`Brakes are a rumor.`,seat:`inside`,camDist:14,camH:5},bun:{id:`bun`,name:`Bun Runner`,kind:`car`,max:33,accel:13,turn:1.6,grip:6,hp:140,radius:2.8,mass:2.2,colors:[`#ffe066`],blurb:`A hot dog truck that has seen things.`,seat:`inside`,camDist:11,camH:4},taxi:{id:`taxi`,name:`Cab-ulous`,kind:`car`,max:38,accel:16,turn:1.9,grip:7,hp:100,radius:2.2,mass:1.2,colors:[`#ffd000`],blurb:`Meter is always running. Always.`,seat:`inside`,camDist:9,camH:3.2},police:{id:`police`,name:`Patrol Cruiser`,kind:`car`,max:50,accel:22,turn:2,grip:7.5,hp:150,radius:2.3,mass:1.6,colors:[`#f8f9fa`],blurb:`Comes with free lights and an angry radio.`,seat:`inside`,camDist:9,camH:3.2},motorbike:{id:`motorbike`,name:`Zippity 600`,kind:`bike`,max:58,accel:28,turn:2.6,grip:9,hp:60,radius:1.3,mass:.5,colors:[`#ef233c`,`#2b2d42`,`#80ffdb`,`#ff9f1c`],blurb:`Wheelies are a lifestyle.`,seat:`top`,camDist:7,camH:2.6},bicycle:{id:`bicycle`,name:`Pedal Pal`,kind:`bike`,max:17,accel:8,turn:2.8,grip:9,hp:40,radius:1.1,mass:.2,colors:[`#3a86ff`,`#ff006e`,`#38b000`],blurb:`Carbon-neutral chaos.`,seat:`top`,camDist:6,camH:2.4},heli:{id:`heli`,name:`Whirlybird`,kind:`heli`,max:45,accel:18,turn:1.6,grip:0,hp:160,radius:3.2,mass:2,colors:[`#4cc9f0`,`#f72585`,`#ffffff`],blurb:`Pre-owned by a radio traffic reporter.`,seat:`inside`,camDist:15,camH:5},plane:{id:`plane`,name:`Skyskipper`,kind:`plane`,max:95,accel:20,turn:1.2,grip:0,hp:120,radius:3.6,mass:1.5,colors:[`#ff595e`,`#ffca3a`,`#8ac926`,`#1982c4`],blurb:`Stunt plane. Landing gear sold separately.`,seat:`inside`,camDist:16,camH:4},cart:{id:`cart`,name:`Cart-astrophe`,kind:`car`,max:58,accel:34,turn:2.6,grip:2.2,hp:70,radius:1.3,mass:.4,colors:[`#c0c0c0`],blurb:`A shopping cart with a rocket. Aisle 5 will never recover.`,seat:`top`,camDist:7,camH:2.6},hamster:{id:`hamster`,name:`Hamster Ball XL`,kind:`ball`,max:40,accel:22,turn:2.4,grip:0,hp:9999,radius:2.2,mass:1.2,colors:[`#bdf6ff`,`#ffd6f5`,`#d8ffb8`],blurb:`Human-sized. Hamster-approved. Bounces off everything.`,seat:`top`,camDist:10,camH:3.6},tub:{id:`tub`,name:`Tubby Tugger`,kind:`boat`,max:18,accel:12,turn:1.8,grip:0,hp:120,radius:1.8,mass:.8,colors:[`#ffffff`,`#ffd6e0`,`#c9f2ff`],blurb:`A bathtub with an outboard motor. Bring your own duck.`,seat:`top`,camDist:9,camH:3.2},couch:{id:`couch`,name:`Cloud Nine Couch`,kind:`hover`,max:34,accel:16,turn:2.2,grip:0,hp:200,radius:1.8,mass:1,colors:[`#9d4edd`,`#ff7b00`,`#2ec4b6`],blurb:`Runs on spare change found in the cushions.`,seat:`top`,camDist:8,camH:3}},zd=[`sedan`,`muscle`,`sports`,`truck`,`bun`,`taxi`,`police`,`motorbike`,`bicycle`,`heli`,`plane`,`couch`,`cart`,`hamster`,`tub`],Bd=new Set([`truck`,`bun`,`cart`,`couch`]),Vd=au({roughness:.22,metalness:.4,flatShading:!1}),Hd=au({roughness:.3,metalness:.3}),Ud=au({roughness:.8}),Wd=new Sa({color:`#1a1a1a`,roughness:1}),Gd=new Sa({color:`#ff1133`,emissive:`#ff0022`,emissiveIntensity:2}),Kd=new Sa({color:`#1144ff`,emissive:`#0033ff`,emissiveIntensity:2});function qd(e,t){return Z([Y(e,e,t,10,`#1b1b1b`,0,0,0,0,0,Math.PI/2),Y(e*.55,e*.55,t+.02,8,`#c0c0c0`,0,0,0,0,0,Math.PI/2)])}function Jd(e,t){let n=new xn,r={group:n,wheels:[],front:[],spin:[],sirens:[],body:[],seatY:.6},i=(e,t=Vd)=>{let i=new W(e,t);return i.castShadow=!0,n.add(i),r.body.push(i),i},a=`#1a2a3a`,o=`#fff6c2`,s=`#ff2a2a`,c=`#222`,l=(e,t,i,a=.32)=>{for(let o of t)for(let t of[-1,1]){let s=new xn;s.position.set(t*e,i,o);let c=new W(qd(i,a),Ud);c.castShadow=!0,s.add(c),n.add(s),r.wheels.push(c),o>0&&r.front.push(s)}};switch(e.id){case`sedan`:case`taxi`:case`police`:if(i(Z([J(2,.7,4.4,t,0,.75,0),J(1.8,.62,2.2,a,0,1.4,-.25),J(1.84,.1,2,t,0,1.74,-.3),J(.42,.2,.06,o,.62,.85,2.2),J(.42,.2,.06,o,-.62,.85,2.2),J(.42,.18,.06,s,.62,.88,-2.2),J(.42,.18,.06,s,-.62,.88,-2.2),J(2.04,.18,.2,c,0,.5,2.15),J(2.04,.18,.2,c,0,.5,-2.15),...e.id===`taxi`?[J(.9,.28,.4,`#111`,0,1.92,-.3),J(.86,.22,.42,`#fff`,0,1.92,-.3)]:[],...e.id===`police`?[J(2.02,.5,1.6,`#111`,0,.85,.2),J(1.4,.16,.36,`#222`,0,1.86,-.3)]:[]])),e.id===`police`){let e=new W(new ra(.6,.2,.32),Gd);e.position.set(.36,2.02,-.3);let t=new W(new ra(.6,.2,.32),Kd);t.position.set(-.36,2.02,-.3),n.add(e,t),r.sirens.push(e,t)}l(1,[1.4,-1.4],.42),r.seatY=.6;break;case`muscle`:i(Z([J(2.1,.66,4.8,t,0,.72,0),J(1.8,.5,1.8,a,0,1.28,-.5),J(1.84,.08,1.6,t,0,1.55,-.55),J(.5,.3,1.4,`#222`,0,1.15,1.3),J(.9,.2,.4,`#bbb`,0,1.35,1.2),J(2.12,.1,4.82,`#fff`,0,1.06,0).scale(.3,1,1),J(.42,.2,.06,o,.65,.8,2.4),J(.42,.2,.06,o,-.65,.8,2.4),J(2.2,.1,.5,`#111`,0,1.3,-2.3),J(.1,.4,.1,`#111`,.8,1.1,-2.3),J(.1,.4,.1,`#111`,-.8,1.1,-2.3),Y(.12,.12,.5,6,`#999`,.6,.45,-2.5,Math.PI/2),Y(.12,.12,.5,6,`#999`,-.6,.45,-2.5,Math.PI/2)])),l(1.05,[1.55,-1.55],.46,.42),r.seatY=.5;break;case`sports`:i(Z([J(2.1,.5,4.5,t,0,.6,0),J(2,.3,1.6,t,0,.8,1.3,-.15),J(1.7,.45,1.7,a,0,1.05,-.3,.1),J(2.3,.08,.6,`#111`,0,1.3,-2.1),J(.1,.35,.1,`#111`,.8,1.1,-2.1),J(.1,.35,.1,`#111`,-.8,1.1,-2.1),J(.5,.12,.06,o,.7,.7,2.26),J(.5,.12,.06,o,-.7,.7,2.26),J(1.9,.1,.06,s,0,.75,-2.26)])),l(1.05,[1.45,-1.45],.4,.4),r.seatY=.35;break;case`truck`:case`bun`:{let n=[J(2.4,1.6,2.2,t,0,1.6,2.6),J(2.2,.7,.1,a,0,2,3.71),J(2.42,.6,1.4,a,0,2,2.7),J(2.5,.4,7.6,`#333`,0,.75,0),J(.4,.2,.06,o,.8,1.1,3.72),J(.4,.2,.06,o,-.8,1.1,3.72)];e.id===`truck`?n.push(J(2.5,2.8,5,`#f1f1f1`,0,2.4,-1.2),J(2.52,.4,5.02,t,0,1.4,-1.2)):n.push(J(2.5,2.4,5,`#ff70a6`,0,2.2,-1.2),X(1,`#e9a55f`,0,4.1,-1.2,1,.8,2.6,1),X(.6,`#b5442c`,0,4.4,-1.2,.9,.8,3.6,1),J(.15,.15,3.6,`#ffd60a`,0,4.95,-1.2)),i(Z(n)),l(1.15,[2.6,-2.6],.55,.45),r.seatY=1.2;break}case`motorbike`:case`bicycle`:{let a=e.id===`bicycle`;i(Z(a?[J(.08,.08,1.3,t,0,.75,0,-.3),J(.08,.7,.08,t,0,.7,-.2),J(.3,.08,.3,`#222`,0,1.08,-.25),J(.08,.7,.08,`#888`,0,.85,.6,.3),J(.6,.06,.06,`#222`,0,1.2,.5)]:[J(.5,.5,1.4,t,0,.75,0),J(.45,.2,.9,`#111`,0,1.05,-.35),J(.3,.5,.3,t,0,1,.6,-.4),J(.8,.08,.08,`#222`,0,1.3,.75),J(.25,.18,.06,o,0,1,.86),Y(.09,.09,.6,6,`#aaa`,.25,.5,-.6,Math.PI/2)]));let s=a?.4:.42;for(let e of[.85,-.85]){let t=new xn;t.position.set(0,s,e);let i=new W(qd(s,a?.08:.2),Ud);t.add(i),n.add(t),r.wheels.push(i),e>0&&r.front.push(t)}r.seatY=a?.4:.45;break}case`heli`:{i(Z([X(1.6,t,0,1.9,.4,1,.9,1.5,1),J(2,1,1.4,a,0,2.1,1.3),J(.5,.5,4.5,t,0,2.2,-3.2),J(.1,1.2,.8,t,0,2.8,-5.3),J(.15,.15,3.4,`#333`,.9,.3,.3),J(.15,.15,3.4,`#333`,-.9,.3,.3),J(.1,.7,.1,`#333`,.9,.65,1),J(.1,.7,.1,`#333`,-.9,.65,1),J(.1,.7,.1,`#333`,.9,.65,-.6),J(.1,.7,.1,`#333`,-.9,.65,-.6),Y(.2,.2,.5,6,`#333`,0,3.4,.3)]));let e=new W(Z([J(9,.06,.35,`#222`),J(.35,.06,9,`#222`)]),Hd);e.position.set(0,3.7,.3),n.add(e),r.spin.push(e);let o=new W(Z([J(.06,1.6,.2,`#222`)]),Hd);o.position.set(.15,2.8,-5.3),n.add(o),r.tail=o,r.seatY=1.5;break}case`plane`:{i(Z([J(1.3,1.3,6,t,0,1.8,0),X(.75,`#ddd`,0,1.8,3.1,1,1,.6),J(1,.6,1.3,a,0,2.6,.6),J(10,.15,1.8,t,0,2,.6),J(3.6,.12,1,t,0,2,-2.6),J(.12,1.4,1,`#fff`,0,2.7,-2.6),J(9.2,.16,.5,`#fff`,0,2.06,.3),J(.1,1.2,.1,`#333`,.8,.9,1.2),J(.1,1.2,.1,`#333`,-.8,.9,1.2)]));let e=new W(J(.2,3,.08,`#222`),Hd);e.position.set(0,1.8,3.6),n.add(e),r.spin.push(e);for(let e of[-.85,.85]){let t=new W(qd(.32,.2),Ud);t.position.set(e,.32,1.2),n.add(t),r.wheels.push(t)}let o=new W(qd(.2,.12),Ud);o.position.set(0,.6,-2.6),n.add(o),r.seatY=1.4;break}case`cart`:{i(Z([J(1.4,.08,2,`#9aa0a6`,0,.75,0),J(1.4,.9,.06,`#c0c0c0`,0,1.2,1),J(1.4,.9,.06,`#c0c0c0`,0,1.2,-1),J(.06,.9,2,`#c0c0c0`,.7,1.2,0),J(.06,.9,2,`#c0c0c0`,-.7,1.2,0),J(1.4,.08,.08,`#ff3b30`,0,1.9,-1.25),J(.06,.6,.06,`#888`,.6,1.6,-1.1),J(.06,.6,.06,`#888`,-.6,1.6,-1.1),Y(.35,.4,1.4,10,`#e63946`,0,.75,-1.5,Math.PI/2),Y(.4,.2,.4,10,`#333`,0,.75,-2.3,Math.PI/2),J(.9,.5,.6,`#ffbe0b`,.2,1.05,.4),X(.25,`#34c759`,-.3,.95,.5)]),Hd);let e=new W(new aa(.35,1.8,8),new ni({color:`#ff9f1c`,transparent:!0,opacity:.9}));e.rotation.x=-Math.PI/2,e.position.set(0,.75,-3.2),n.add(e),r.tail=e;for(let[e,t]of[[.6,.85],[-.6,.85],[.6,-.85],[-.6,-.85]]){let i=new xn;i.position.set(e,.2,t);let a=new W(qd(.2,.12),Ud);i.add(a),n.add(i),r.wheels.push(a),t>0&&r.front.push(i)}r.seatY=.8;break}case`hamster`:{let e=new W(new sa(2.2,2),new Sa({color:t,transparent:!0,opacity:.32,roughness:.05,metalness:.1,depthWrite:!1})),i=new da(2.2,.06,6,40),a=new xn,o=new Sa({color:`#ffffff`,roughness:.4});for(let[e,t]of[[0,0],[Math.PI/2,0],[0,Math.PI/2]]){let n=new W(i,o);n.rotation.set(e,t,0),a.add(n)}let s=new xn;s.position.y=2.2,s.add(e,a),n.add(s),r.spin.push(s),r.body.push(e),r.seatY=.05;break}case`tub`:{i(Z([J(1.8,.9,3.2,t,0,.75,0),J(1.5,.3,2.9,`#9be7ff`,0,1.1,0),X(.5,t,0,.75,1.55,1.8,.9,.6),X(.5,t,0,.75,-1.55,1.8,.9,.6),...[[.7,1.2],[-.7,1.2],[.7,-1.2],[-.7,-1.2]].map(([e,t])=>X(.18,`#d4af37`,e,.25,t)),J(.4,.9,.4,`#333`,0,1.2,-1.85),Y(.08,.08,.9,6,`#555`,0,.5,-1.95),J(.08,.6,.08,`#c0c0c0`,.5,1.6,1.4),X(.25,`#ffd60a`,-.4,1.35,1),X(.15,`#ffd60a`,-.4,1.6,1.15),J(.12,.06,.12,`#ff7b00`,-.4,1.58,1.3),X(.35,`#ffffff`,.4,1.3,-.6),X(.3,`#ffffff`,.1,1.35,-.9)]),Hd);let e=new W(J(.06,.9,.2,`#222`),Hd);e.position.set(0,.2,-2),n.add(e),r.spin.push(e),r.seatY=.6;break}case`couch`:{i(Z([J(2.6,.6,1.2,t,0,.7,0),J(2.6,1,.4,t,0,1.3,-.5),J(.4,.8,1.2,t,1.3,1,0),J(.4,.8,1.2,t,-1.3,1,0),J(1.1,.25,.9,`#f1f1f1`,.6,1.1,.1),J(1.1,.25,.9,`#f1f1f1`,-.6,1.1,.1),Y(.12,.08,.35,6,`#6b4a30`,1.1,.25,.45),Y(.12,.08,.35,6,`#6b4a30`,-1.1,.25,.45),Y(.12,.08,.35,6,`#6b4a30`,1.1,.25,-.45),Y(.12,.08,.35,6,`#6b4a30`,-1.1,.25,-.45),Y(.25,.3,.6,8,`#555`,0,.9,-.95,Math.PI/2),J(.5,.06,.4,`#ffd60a`,1.3,1.42,.2)]),au({roughness:.75}));let e=new W(new aa(.25,1.2,8),new ni({color:`#ffb703`,transparent:!0,opacity:.9}));e.rotation.x=-Math.PI/2,e.position.set(0,.9,-1.75),n.add(e),r.tail=e,r.seatY=.75;break}}return r}var Yd=new V,Xd=new V,Zd=new V,Qd=new V,$d=0,ef=class{tumble(e,t){this.rollVel+=e,this.pitchVel+=t}constructor(e,t,n,r=0,i){Q(this,`id`,$d++),Q(this,`def`,void 0),Q(this,`color`,void 0),Q(this,`model`,void 0),Q(this,`mesh`,void 0),Q(this,`pos`,new V),Q(this,`vel`,new V),Q(this,`yaw`,0),Q(this,`pitch`,0),Q(this,`roll`,0),Q(this,`yawRate`,0),Q(this,`hp`,void 0),Q(this,`destroyed`,!1),Q(this,`deadTime`,0),Q(this,`burning`,0),Q(this,`inWaterT`,0),Q(this,`driver`,null),Q(this,`input`,{throttle:0,steer:0,brake:0,up:0,pitch:0}),Q(this,`onGround`,!0),Q(this,`airTime`,0),Q(this,`speedMul`,1),Q(this,`planeSpeed`,0),Q(this,`engine`,0),Q(this,`ai`,null),Q(this,`floatT`,0),Q(this,`held`,!1),Q(this,`lastHitBy`,null),Q(this,`flipRoll`,0),Q(this,`flipPitch`,0),Q(this,`rollVel`,0),Q(this,`pitchVel`,0),Q(this,`flipped`,!1),Q(this,`flippedT`,0),Q(this,`bouncyT`,0),Q(this,`spinOutT`,0),Q(this,`ballQ`,new Ct),Q(this,`drifting`,0),Q(this,`flipSum`,0),Q(this,`sirenT`,0),Q(this,`honk`,0),Q(this,`righting`,0),this.def=Rd[e],this.color=i||q(this.def.colors),this.model=Jd(this.def,this.color),this.mesh=this.model.group,this.pos.set(t,$(t,n),n),this.yaw=r,this.hp=this.def.hp,this.syncMesh()}get speed(){return Math.hypot(this.vel.x,this.vel.z)}get fwdSpeed(){return this.vel.dot(Zl(this.yaw,Yd))}isAir(){return this.def.kind===`heli`||this.def.kind===`plane`||this.def.kind===`hover`}damage(e,t,n=null){this.destroyed||(this.hp-=e,n&&(this.lastHitBy=n),this.hp<=0?this.explode(t):this.hp<this.def.hp*.25&&!this.burning&&(this.burning=.01))}explode(e){this.destroyed||(this.destroyed=!0,this.hp=0,this.burning=0,this.model.body.forEach(e=>e.material=Wd),this.vel.y+=9,this.vel.x+=(Math.random()-.5)*6,this.vel.z+=(Math.random()-.5)*6,e.explosion(this.pos.clone().setY(this.pos.y+1),9,120,this.lastHitBy||`world`,this),e.onVehicleDestroyed?.(this))}update(e,t){let n=this.def,r=this.input,i=t.gravity;if(this.destroyed&&(this.deadTime+=e,r.throttle=r.steer=r.up=0),this.held){this.syncMesh();return}let a=n.kind,o=$(this.pos.x,this.pos.z),s=Math.max(o,a===`car`||a===`bike`?-99:du),c=n.max*this.speedMul*(this.driver===`player`&&t.perk.veh||1);if(Zl(this.yaw,Yd),Ql(this.yaw,Xd),this.floatT>0&&(this.floatT-=e,this.vel.y=Jl(this.vel.y,3,e*2),this.yawRate=1.5),this.bouncyT=Math.max(0,this.bouncyT-e),this.spinOutT=Math.max(0,this.spinOutT-e),a===`ball`){this.updateBall(e,t,c);return}if(a===`boat`){this.updateBoat(e,t,c);return}if(a===`car`||a===`bike`||a===`hover`&&!this.driver){let o=this.vel.dot(Yd),s=this.vel.dot(Xd);if(this.drifting=this.onGround&&Math.abs(s)>4&&this.speed>8?Math.abs(s):0,this.onGround&&this.flipped)o*=1-2.5*e,s*=1-2.5*e,this.yawRate*=1-3*e;else if(this.onGround&&!this.destroyed){let i=r.throttle;i>0?o+=n.accel*i*e*(o<0?2.5:1):i<0&&(o+=(o>1?-n.accel*2.2:-n.accel*.7)*-i*e),o=ql(o,-c*.35,c),o*=1-(i===0?.6:.08)*e;let l=n.grip*(r.brake?.18:1)*(this.spinOutT>0?.05:1),u=(Bd.has(n.id)?9:17)/(t.cheats?.bouncy?.6:1);Math.abs(s)>u&&a===`car`&&(this.rollVel+=Math.sign(s)*(Math.abs(s)-u)*.35,this.vel.y+=2.5,this.onGround=!1),this.spinOutT>0&&(this.yawRate+=9*e*Math.sign(this.yawRate||1)),s*=Math.max(0,1-l*e),r.brake&&(o*=1-1.6*e);let d=ql(Math.abs(o)/8,0,1)*(1-ql(Math.abs(o)/(c*2.2),0,.45)),f=r.steer*n.turn*d*Math.sign(o||1)*(r.brake?1.5:1);this.yawRate=Jl(this.yawRate,f,Math.min(1,e*8))}else this.yawRate*=1-e*.5,!this.destroyed&&this.driver&&(this.yawRate+=r.steer*e*1.5);this.yaw+=this.yawRate*e,Zl(this.yaw,Yd),Ql(this.yaw,Xd);let l=this.vel.y;this.onGround&&this.vel.copy(Yd).multiplyScalar(o).addScaledVector(Xd,s).setY(l),this.vel.y-=i*e,this.pos.addScaledVector(this.vel,e);let u=$(this.pos.x,this.pos.z);if(this.pos.y<=u+.02){let n=-this.vel.y,r=t.trampolineAt?.(this.pos.x,this.pos.z,this.pos.y,this.vel.y),o=t.bouncy||this.bouncyT>0||t.isBouncy?.(this.pos.x,this.pos.z);!this.onGround&&n>16&&!o&&this.damage((n-16)*2,t),this.onGround||this.land(t,n),this.pos.y=u;let s=$(this.pos.x+this.vel.x*.05,this.pos.z+this.vel.z*.05),c=Math.hypot(this.vel.x,this.vel.z),d=(s-u)/.05,f=ql(d,Math.min(0,l)-i*e*2,Math.min(c*.8,30)),p=l>4&&d<l-i*e*3;r?(this.vel.y=r*.9,this.onGround=!1,this.tumble((Math.random()-.5)*3,(Math.random()-.5)*2)):o&&n>4?(this.vel.y=n*.85,this.onGround=!1):p?(this.vel.y=l,this.onGround=!1,this.pos.y=u+.05):(this.vel.y=f,this.onGround=!0,this.airTime=0),f>6&&Math.abs(this.yawRate)>.6&&a===`car`&&(this.rollVel+=this.yawRate*.35)}else{let n=t.trampolineAt?.(this.pos.x,this.pos.z,this.pos.y,this.vel.y);n&&(this.vel.y=n*.9,this.tumble((Math.random()-.5)*3,0)),this.pos.y>u+.6&&(this.onGround=!1,this.airTime+=e)}if(this.updateFlip(e,t),this.onGround){let t=1.8,n=$(this.pos.x+Yd.x*t,this.pos.z+Yd.z*t),r=$(this.pos.x-Yd.x*t,this.pos.z-Yd.z*t);this.pitch=Jl(this.pitch,-Math.atan2(n-r,t*2),Math.min(1,e*10))}else this.pitch=Jl(this.pitch,-ql(this.vel.y*.03,-.5,.5),e*2);let d=a===`bike`?-this.yawRate*Math.min(1,this.speed/10)*.45:this.yawRate*Math.min(1,this.speed/20)*.06;this.roll=Jl(this.roll,d,Math.min(1,e*6)),u<-1.2-.6&&this.pos.y<-1.2?(this.vel.multiplyScalar(1-e*2.5),this.inWaterT+=e,this.pos.y<-2.4&&(this.pos.y=du-1.2,this.vel.y=Math.max(this.vel.y,0)),this.inWaterT>3&&!this.destroyed&&this.damage(e*30,t)):this.inWaterT=0}else if(a===`heli`||a===`hover`){let o=!!this.driver&&!this.destroyed;this.engine=Jl(this.engine,+!!o,e*(o?1.5:.5));let l=this.launchT>0;l&&(this.launchT-=e);let u=l?0:this.engine*(i+r.up*14);this.vel.y+=(u-i)*e,l||(this.vel.y*=1-e*(a===`hover`?1.4:1));let d=r.throttle*.35;this.pitch=Jl(this.pitch,a===`heli`?d:-d*.4,e*3),this.roll=Jl(this.roll,-r.steer*.25*(a===`hover`?-1:1),e*3),o&&this.vel.addScaledVector(Yd,r.throttle*n.accel*e);let f=new B(this.vel.x,this.vel.z);l||(f.length()>c&&f.setLength(c),f.multiplyScalar(1-e*(r.throttle===0?.9:.25))),this.vel.x=f.x,this.vel.z=f.y,this.yawRate=Jl(this.yawRate,r.steer*n.turn*this.engine,e*4),this.yaw+=this.yawRate*e,a===`hover`&&(this.pos.y+=Math.sin(t.elapsed*3+this.id)*.01*this.engine),this.pos.addScaledVector(this.vel,e),o||(this.vel.y-=i*e*.5),this.pos.y<=s?(this.vel.y<-14&&this.damage((-this.vel.y-14)*4,t),this.pos.y=s,this.vel.y=Math.max(0,this.vel.y),this.onGround=!0,this.vel.x*=1-e*3,this.vel.z*=1-e*3):this.onGround=!1,this.pos.y>320&&(this.pos.y=320,this.vel.y=Math.min(0,this.vel.y))}else if(a===`plane`){let a=!!this.driver&&!this.destroyed;a?this.planeSpeed=ql(this.planeSpeed+r.throttle*n.accel*e,0,c):this.planeSpeed*=1-e*.3,this.onGround&&(this.planeSpeed*=1-e*(r.throttle<0?.8:.04));let s=ql((this.planeSpeed-22)/18,0,1),l=ql(this.pitch+r.up*1.1*e*(.3+s),-1.2,1.2);this.pitch=this.onGround?Math.max(0,Math.min(l,s*.35)):l,this.roll=Jl(this.roll,-r.steer*.9*(this.onGround?.1:1),e*2.5),this.yawRate=this.onGround?r.steer*1.2*ql(this.planeSpeed/10,0,1):-this.roll*n.turn,this.yaw+=this.yawRate*e;let u=Math.cos(this.pitch),d=Qd.set(Math.sin(this.yaw)*u,Math.sin(this.pitch),Math.cos(this.yaw)*u),f=(1-s)*i*.9;this.vel.copy(d).multiplyScalar(this.planeSpeed),this.vel.y-=this.onGround?0:f,!a&&!this.onGround&&(this.vel.y-=i),this.pos.addScaledVector(this.vel,e),this.pos.y<=o?(!this.onGround&&(this.vel.y<-9||this.pitch<-.35||Math.abs(this.roll)>.8)&&this.planeSpeed>15&&(this.pos.y=o,this.explode(t)),this.pos.y=o,this.onGround=!0,o<-1.7&&(this.inWaterT+=e,this.inWaterT>2&&this.damage(e*40,t))):this.pos.y>o+.5&&(this.onGround=!1),this.pos.y>420&&(this.pitch=Math.min(this.pitch,0))}Math.abs(this.pos.x)>810&&(this.pos.x=Math.sign(this.pos.x)*810,this.vel.x*=-.5),Math.abs(this.pos.z)>1210&&(this.pos.z=Math.sign(this.pos.z)*1210,this.vel.z*=-.5);let l=Au(this.pos,n.radius,Zd);if(l){let e=-this.vel.dot(l);e>0&&(this.vel.addScaledVector(l,e*1.25),a===`plane`&&(this.planeSpeed*=.3,e>12&&this.explode(t)),e>7&&(this.damage((e-7)*2.2/Math.sqrt(n.mass),t),this.driver===`player`&&t.shake(Math.min(1,e/30)),t.sfx?.(`crash`,e/30,this.pos)),(a===`car`||a===`bike`)&&this.vel.multiplyScalar(.7))}this.burning>0&&!this.destroyed&&(this.burning+=e,Math.random()<e*20&&t.fx.smoke(this.pos.clone().add(new V(0,1.5,0).addScaledVector(Yd,n.radius*.6)),!0),this.burning>6&&this.explode(t)),this.destroyed&&Math.random()<e*8&&t.fx.smoke(this.pos.clone().setY(this.pos.y+1),!1),this.honk=Math.max(0,this.honk-e),this.syncMesh(e)}land(e,t){(this.airTime>1.2||this.flipSum>5)&&this.driver===`player`&&e.onStuntLanding?.(this.airTime,this),this.flipSum=0,t>8&&(e.fx?.dust?.(this.pos.clone(),12),this.driver===`player`&&e.shake(Math.min(.6,t/40)))}updateFlip(e,t){if(this.righting>0){this.righting-=e;let t=Math.min(1,e*9);this.flipRoll+=(0-this.flipRoll)*t,this.flipPitch+=(0-this.flipPitch)*t,this.righting<=0&&(this.flipRoll=0,this.flipPitch=0);return}if(!this.onGround){this.flipSum+=(Math.abs(this.rollVel)+Math.abs(this.pitchVel))*e,this.flipRoll+=this.rollVel*e,this.flipPitch+=this.pitchVel*e,this.rollVel*=1-.2*e,this.pitchVel*=1-.2*e;return}let n=e=>Math.atan2(Math.sin(e),Math.cos(e));if(this.flipRoll=n(this.flipRoll),this.flipPitch=n(this.flipPitch),Math.abs(this.rollVel)>2.5||Math.abs(this.pitchVel)>2.5){this.flipRoll+=this.rollVel*e,this.flipPitch+=this.pitchVel*e,this.rollVel*=1-2.2*e,this.pitchVel*=1-2.2*e,Math.random()<e*8&&(t.fx?.sparks?.(this.pos.clone().setY(this.pos.y+.5),4),t.sfx?.(`crash`,.3,this.pos)),this.speed>3&&(this.vel.y=Math.max(this.vel.y,Math.abs(Math.sin(this.flipRoll*2))*2.5));return}this.rollVel=0,this.pitchVel=0;let r=Math.abs(this.flipRoll)>Math.PI/2||Math.abs(this.flipPitch)>Math.PI/2,i=r&&Math.abs(this.flipRoll)>Math.PI/2?Math.sign(this.flipRoll)*Math.PI:0,a=r&&Math.abs(this.flipPitch)>Math.PI/2?Math.sign(this.flipPitch)*Math.PI:0;this.flipRoll=Jl(this.flipRoll,i,Math.min(1,e*6)),this.flipPitch=Jl(this.flipPitch,a,Math.min(1,e*6)),r&&!this.flipped&&this.def.kind!==`bike`&&(this.flipped=!0,this.flippedT=0,t.onVehicleFlipped?.(this)),r||(this.flipped=!1),this.flipped&&(this.flippedT+=e)}unflip(){return this.flipped?(this.vel.y=7,this.onGround=!1,this.rollVel=0,this.pitchVel=0,this.righting=.65,this.flipped=!1,!0):!1}updateBall(e,t,n){let r=this.input,i=t.gravity,a=t.camYaw,o=Zl(this.driver===`player`?a:this.yaw),s=Ql(this.driver===`player`?a:this.yaw);this.driver&&this.onGround&&this.vel.addScaledVector(o,r.throttle*this.def.accel*e).addScaledVector(s,-r.steer*this.def.accel*.8*e);let c=Math.hypot(this.vel.x,this.vel.z);c>n&&(this.vel.x*=n/c,this.vel.z*=n/c);let l=($(this.pos.x+1,this.pos.z)-$(this.pos.x-1,this.pos.z))/2,u=($(this.pos.x,this.pos.z+1)-$(this.pos.x,this.pos.z-1))/2;this.onGround&&(this.vel.x-=l*i*e*.9,this.vel.z-=u*i*e*.9,this.vel.x*=1-.25*e,this.vel.z*=1-.25*e),this.vel.y-=i*e,this.pos.addScaledVector(this.vel,e);let d=Math.max($(this.pos.x,this.pos.z),du-.6),f=t.trampolineAt?.(this.pos.x,this.pos.z,this.pos.y,this.vel.y);if(f)this.vel.y=f,this.onGround=!1;else if(this.pos.y<=d){let e=-this.vel.y;this.pos.y=d,this.onGround||this.land(t,e),this.vel.y=e>3?e*.55:0,this.onGround=e<=3,this.onGround&&(this.airTime=0);let n=$(this.pos.x+this.vel.x*.05,this.pos.z+this.vel.z*.05);this.onGround&&(this.vel.y=Math.max(0,(n-d)/.05))}else this.onGround=this.pos.y<d+.3,this.onGround||(this.airTime+=e);let p=Au(this.pos,this.def.radius,Zd);if(p){let e=-this.vel.dot(p);e>0&&(this.vel.addScaledVector(p,e*1.85),e>6&&(t.sfx?.(`pop`,.5,this.pos),t.chaos?.(15,`BOING`,this.pos)))}let m=new V(this.vel.x,0,this.vel.z),h=m.length();if(h>.05){let t=new V(0,1,0).cross(m).normalize();this.ballQ.premultiply(new Ct().setFromAxisAngle(t,h/this.def.radius*e))}h>1&&(this.yaw+=Xl(this.yaw,Math.atan2(this.vel.x,this.vel.z))*Math.min(1,e*4)),this.pitch=0,this.roll=0,this.syncMesh(e)}updateBoat(e,t,n){let r=this.input,i=t.gravity,a=this.def,o=$(this.pos.x,this.pos.z)<du-.05,s=o?n:5;Zl(this.yaw,Yd),Ql(this.yaw,Xd);let c=this.vel.dot(Yd),l=this.vel.dot(Xd);this.driver&&!this.destroyed&&(c+=r.throttle*a.accel*e*(o?1:.4)),c=ql(c,-s*.4,s),c*=1-(o?.35:3)*e,l*=1-(o?1.2:6)*e,this.yawRate=Jl(this.yawRate,r.steer*a.turn*ql(Math.abs(c)/5,.2,1),e*3),this.yaw+=this.yawRate*e,Zl(this.yaw,Yd),Ql(this.yaw,Xd);let u=this.vel.y;this.vel.copy(Yd).multiplyScalar(c).addScaledVector(Xd,l).setY(u-i*e),this.pos.addScaledVector(this.vel,e);let d=o?du-.35+Math.sin(t.elapsed*2+this.id)*.12:$(this.pos.x,this.pos.z);if(this.pos.y<d){let e=-this.vel.y;e>6&&(t.fx?.splash?.(this.pos.clone(),20),t.sfx?.(`splash`)),this.onGround||this.land(t,e),this.pos.y=d,this.vel.y=0,this.onGround=!0,this.airTime=0}else this.pos.y>d+.5&&(this.onGround=!1,this.airTime+=e);this.pitch=Jl(this.pitch,o?-ql(c/n,0,1)*.15+Math.sin(t.elapsed*1.7)*.03:0,e*3),this.roll=Jl(this.roll,this.yawRate*.12+(o?Math.sin(t.elapsed*1.3+1)*.04:0),e*3),o&&this.speed>6&&Math.random()<e*25&&t.fx?.add(this.pos.clone().addScaledVector(Yd,-1.8).setY(du+.1),new V((Math.random()-.5)*3,3,(Math.random()-.5)*3),.6,.25,`#e0f7ff`,1),this.engine=+!!this.driver;let f=Au(this.pos,a.radius,Zd);if(f){let e=-this.vel.dot(f);e>0&&this.vel.addScaledVector(f,e*1.3)}this.syncMesh(e)}syncMesh(e=0){this.mesh.position.copy(this.pos),this.mesh.rotation.set(0,0,0),this.mesh.rotation.order=`YXZ`,this.mesh.rotation.set((this.def.kind===`plane`?-this.pitch:this.pitch)+this.flipPitch,this.yaw,this.roll+this.flipRoll),this.def.kind===`ball`&&this.model.spin[0].quaternion.copy(this.ballQ).premultiply(new Ct().setFromAxisAngle(new V(0,1,0),-this.yaw)),(this.flipped||Math.abs(this.flipRoll)>1.5)&&(this.mesh.position.y+=1.2*Math.abs(Math.sin(this.flipRoll))+(Math.abs(this.flipRoll)>2?.8:0));let t=this.fwdSpeed;for(let n of this.model.wheels)n.rotation.x+=t/.42*e;for(let e of this.model.front)e.rotation.y=this.input.steer*.45;let n=this.def.kind===`plane`?10+this.planeSpeed:25*this.engine;if(this.def.kind!==`ball`)for(let t of this.model.spin)this.def.kind===`plane`?t.rotation.z+=n*e:this.def.kind===`boat`?t.rotation.z+=30*this.engine*e:t.rotation.y+=n*e;if(this.model.tail&&(this.def.kind===`heli`?this.model.tail.rotation.x+=30*this.engine*e:this.def.id===`cart`?(this.model.tail.visible=!!this.driver&&this.input.throttle>0,this.model.tail.scale.set(1,.6+Math.random()*.9,1)):(this.model.tail.visible=this.engine>.2,this.model.tail.scale.set(1,.6+Math.random()*.8,1))),this.model.sirens.length){this.sirenT+=e;let t=this.ai?.mode===`police`||this.driver===`player`,n=Math.floor(this.sirenT*6)%2;this.model.sirens[0].visible=!t||n===0,this.model.sirens[1].visible=!t||n===1}}},tf=[{id:`fists`,name:`Knuckle Sandwich`,key:`1`,type:`melee`,rate:2.6,dmg:15,force:7,range:1.8,blurb:`Free with every body.`,icon:`👊`},{id:`bat`,name:`Lumber Persuader`,key:`2`,type:`melee`,rate:1.6,dmg:40,force:16,range:2.6,blurb:`Hits home runs. Mostly on people.`,icon:`🏏`},{id:`pistol`,name:`Pew-Pew 9`,key:`3`,type:`hitscan`,rate:4,dmg:22,force:5,spread:.008,range:160,blurb:`Reliable. Unremarkable. Loud.`,icon:`🔫`},{id:`smg`,name:`Spray 'n' Pray`,key:`4`,type:`hitscan`,rate:12,dmg:10,force:3,spread:.035,auto:!0,range:120,blurb:`Accuracy is a social construct.`,icon:`💥`},{id:`shotgun`,name:`Barn Door`,key:`5`,type:`hitscan`,rate:1.2,dmg:11,force:9,spread:.08,pellets:9,range:60,blurb:`You literally cannot miss it.`,icon:`🚪`},{id:`rocket`,name:`Rocket Mail`,key:`6`,type:`proj`,proj:`rocket`,rate:.9,dmg:120,force:30,blurb:`Express delivery. No signature required.`,icon:`🚀`},{id:`grenade`,name:`Pocket Sunshine`,key:`7`,type:`proj`,proj:`grenade`,rate:1.2,dmg:110,force:28,blurb:`Throw, count to two, regret.`,icon:`☀️`},{id:`ragdoll`,name:`Ragdoll Launcher`,key:`8`,type:`proj`,proj:`dummy`,rate:2.5,dmg:25,force:22,mod:!0,blurb:`Fires crash-test dummies. They have feelings.`,icon:`🧍`},{id:`yoink`,name:`Yoink-o-Tron 3000`,key:`9`,type:`grav`,rate:3,dmg:0,force:55,mod:!0,blurb:`Click to grab cars & people. Click again to yeet.`,icon:`🧲`},{id:`chicken`,name:`Cluckbuster`,key:`0`,type:`proj`,proj:`chicken`,rate:2,dmg:70,force:20,mod:!0,blurb:`Lobs exploding rubber chickens. BAWK.`,icon:`🐔`},{id:`bubble`,name:`Float-o-Matic`,key:``,type:`proj`,proj:`bubble`,rate:3,dmg:0,force:0,mod:!0,blurb:`Gently removes gravity from your problems.`,icon:`🫧`},{id:`hurricane`,name:`Hurricane-in-a-Can`,key:``,type:`blast`,rate:1.6,dmg:4,force:34,range:26,mod:!0,blurb:`Category 5 in a travel size. Shake well.`,icon:`🌪️`},{id:`singularity`,name:`Pocket Singularity`,key:``,type:`proj`,proj:`hole`,rate:.5,dmg:30,force:40,mod:!0,blurb:`Tiny black hole. Do not taunt.`,icon:`🕳️`},{id:`peel`,name:`Peel Dealer`,key:``,type:`proj`,proj:`peel`,rate:4,dmg:0,force:0,mod:!0,blurb:`Slapstick, weaponized. Cars hate this one trick.`,icon:`🍌`},{id:`boing`,name:`Boing Bomb`,key:``,type:`proj`,proj:`boing`,rate:1.2,dmg:0,force:26,mod:!0,blurb:`Makes everything nearby a trampoline. Including physics.`,icon:`🎈`},{id:`confetti`,name:`Party Minigun`,key:``,type:`hitscan`,rate:22,dmg:6,force:2.5,spread:.05,auto:!0,range:90,mod:!0,blurb:`Every shot is a celebration.`,icon:`🎉`,tracer:`#ff4fd8`}],nf=e=>tf.find(t=>t.id===e),rf=au({roughness:.3,metalness:.5});function af(e){let t=null;switch(e){case`bat`:t=Z([Y(.07,.04,1.1,6,`#b5835a`,0,0,.45,Math.PI/2)]);break;case`pistol`:t=Z([J(.1,.14,.4,`#333`,0,.05,.2),J(.09,.2,.1,`#222`,0,-.06,.05)]);break;case`smg`:t=Z([J(.12,.18,.6,`#2b2d42`,0,.05,.25),J(.08,.3,.1,`#111`,0,-.12,.25)]);break;case`shotgun`:t=Z([J(.12,.14,1,`#6b4a30`,0,.05,.35),Y(.05,.05,.8,6,`#333`,0,.12,.5,Math.PI/2)]);break;case`rocket`:t=Z([Y(.14,.14,1.3,8,`#4f772d`,0,.15,.3,Math.PI/2),J(.08,.2,.1,`#222`,0,-.05,.2)]);break;case`grenade`:t=Z([X(.12,`#ffd60a`,0,0,.1)]);break;case`ragdoll`:t=Z([Y(.2,.15,.9,8,`#ff7b00`,0,.1,.3,Math.PI/2),J(.3,.3,.1,`#111`,0,.1,-.15)]);break;case`yoink`:t=Z([J(.2,.2,.7,`#e0e0e0`,0,.08,.25),X(.16,`#4cc9f0`,0,.08,.65),J(.3,.05,.05,`#ff006e`,0,.2,.4)]);break;case`chicken`:t=Z([Y(.18,.18,.8,8,`#ffbe0b`,0,.1,.3,Math.PI/2),X(.14,`#ffffff`,0,.1,.72)]);break;case`bubble`:t=Z([J(.14,.2,.5,`#80ffdb`,0,.05,.2),X(.15,`#c8f7ff`,0,.12,.5)]);break;case`hurricane`:t=Z([Y(.16,.16,.7,8,`#4cc9f0`,0,.1,.25,Math.PI/2),Y(.28,.16,.3,8,`#ffffff`,0,.1,.7,Math.PI/2),J(.36,.06,.2,`#ff006e`,0,.1,.25)]);break;case`singularity`:t=Z([J(.18,.22,.55,`#111`,0,.06,.2),X(.16,`#8338ec`,0,.12,.55)]);break;case`peel`:t=Z([Y(.14,.2,.7,8,`#ffe135`,0,.12,.3,Math.PI/2),J(.1,.25,.1,`#6b4a30`,0,-.05,.1)]);break;case`boing`:t=Z([X(.2,`#ff70a6`,0,.1,.15),J(.02,.3,.02,`#fff`,0,-.1,.15)]);break;case`confetti`:t=Z([Y(.18,.18,.8,6,`#8338ec`,0,.1,.35,Math.PI/2),Y(.05,.05,.9,6,`#ff006e`,.08,.1,.4,Math.PI/2),Y(.05,.05,.9,6,`#ffbe0b`,-.08,.1,.4,Math.PI/2)])}if(!t)return null;let n=new W(t,rf);return n.castShadow=!0,n}var of={};function sf(e){let t;switch(e){case`rocket`:t=Z([Y(.12,.12,.8,6,`#ddd`,0,0,0,Math.PI/2),Y(0,.12,.3,6,`#e63946`,0,0,.55,Math.PI/2)]);break;case`grenade`:t=Z([X(.18,`#ffd60a`)]);break;case`chicken`:t=Z([X(.3,`#ffe66d`,0,0,0,1,.9,1.3),X(.18,`#ffe66d`,0,.25,.35),J(.1,.08,.2,`#ff7b00`,0,.22,.55),J(.06,.15,.15,`#e63946`,0,.45,.35)]);break;case`hole`:t=Z([X(.45,`#0a0010`,0,0,0,1,1,1,1)]);break;case`peel`:t=Z([J(.5,.06,.18,`#ffe135`),J(.18,.06,.5,`#ffe135`),J(.12,.1,.12,`#6b4a30`,0,.04,0)]);break;case`boing`:t=Z([X(.32,`#ff70a6`,0,0,0,1,1.1,1,1),J(.02,.6,.02,`#fff`,0,-.5,0)]);break;default:return of.bubble||(of.bubble=new Sa({color:`#bdf6ff`,transparent:!0,opacity:.45,roughness:.05,metalness:.2,emissive:`#5ee7ff`,emissiveIntensity:.3})),new W(new sa(.6,2),of.bubble)}return new W(t,au({roughness:.4}))}var cf=1500,lf=class{constructor(e){Q(this,`scene`,void 0),Q(this,`parts`,[]),Q(this,`mesh`,void 0),Q(this,`m4`,new Kt),Q(this,`q`,new Ct),Q(this,`s`,new V),Q(this,`p`,new V),Q(this,`c`,new U),Q(this,`booms`,[]),Q(this,`light`,void 0),Q(this,`lightT`,0),Q(this,`tracers`,[]),Q(this,`marks`,void 0),Q(this,`markI`,0),this.scene=e,this.mesh=new Ti(new ra(1,1,1),new ni({color:`#fff`,transparent:!0,opacity:.95}),cf),this.mesh.instanceMatrix.setUsage($e),this.mesh.setColorAt(0,this.c.set(`#fff`)),this.mesh.frustumCulled=!1,this.mesh.count=0,e.add(this.mesh),this.light=new so(`#ffaa55`,0,60,1.5),e.add(this.light);let t=new Mi({color:`#fff3a0`,transparent:!0});for(let n=0;n<40;n++){let n=new Bi(new wr().setFromPoints([new V,new V]),t.clone());n.visible=!1,n.frustumCulled=!1,e.add(n),this.tracers.push({line:n,t:0})}}add(e,t,n,r,i,a=1,o=0,s=.5){this.parts.length>=cf&&this.parts.shift();let c=typeof i==`string`?this.c.set(i):i;this.parts.push({floor:e.y-3<-1.2?-1.2:Math.min(e.y-.2,0),x:e.x,y:e.y,z:e.z,vx:t.x,vy:t.y,vz:t.z,life:n,max:n,size:r,grow:o,grav:a,r:c.r,g:c.g,b:c.b,drag:s})}burst(e,t,n,r,i=.25,a=.8,o=1){let s=new V;for(let c=0;c<t;c++)s.randomDirection().multiplyScalar(n*(.4+Math.random()*.6)),s.y=Math.abs(s.y)*.8+n*.2,this.add(e,s,a*(.6+Math.random()*.6),i*(.6+Math.random()*.8),r[c%r.length],o)}smoke(e,t){let n=new V((Math.random()-.5)*1.2,2.5+Math.random()*2,(Math.random()-.5)*1.2);t&&this.add(e,n,.5,.6,Math.random()<.5?`#ff7b00`:`#ffd000`,-.3,1.2,1),this.add(e,n,1.6,.8,t?`#3a3a3a`:`#777777`,-.2,1.6,1)}hit(e,t=`#ffe066`){this.burst(e,6,6,[t,`#ffffff`],.14,.35,1.5)}confetti(e,t=10){this.burst(e,t,8,[`#ff006e`,`#ffbe0b`,`#3a86ff`,`#8338ec`,`#06d6a0`],.18,1.6,.5)}feathers(e){this.burst(e,30,10,[`#ffffff`,`#f1f1f1`,`#ffd166`],.25,2.2,.25)}boom(e,t){let n=this.booms.find(e=>e.t<=0);if(!n){if(this.booms.length>=8)n=this.booms[0];else{let e=new W(new sa(1,1),new ni({color:`#ffb347`,transparent:!0}));this.scene.add(e),n={mesh:e,t:0,r:1},this.booms.push(n)}}n.t=.6,n.r=t,n.mesh.position.copy(e),n.mesh.visible=!0,this.light.position.copy(e).y+=2,this.light.intensity=140,this.lightT=.5,this.burst(e,40,t*2.6,[`#ff5400`,`#ffbd00`,`#ff0054`,`#ffffff`],.55,1,.8),this.burst(e,16,t*1.4,[`#333`,`#555`],.4,1.8,2);for(let n=0;n<10;n++)this.smoke(e.clone().add(new V((Math.random()-.5)*t,Math.random()*2,(Math.random()-.5)*t)),!1)}sparks(e,t=10){this.burst(e,t,9,[`#ffd166`,`#ffb703`,`#fff3b0`],.09,.45,1.6)}dust(e,t=6){let n=new V;for(let r=0;r<t;r++)n.set((Math.random()-.5)*4,1+Math.random()*2,(Math.random()-.5)*4),this.add(e.clone().setY(e.y+.3),n,1.1,.5,Math.random()<.5?`#d8c3a5`:`#bfae94`,-.05,1.4,1.5)}splash(e,t=16){this.burst(e.clone().setY(Math.max(e.y,-1.1)),t,9,[`#e0f7ff`,`#9be7ff`,`#ffffff`],.22,1,1)}fire(e){let t=new V((Math.random()-.5)*1.5,3+Math.random()*2,(Math.random()-.5)*1.5);this.add(e,t,.45,.55,Math.random()<.4?`#ffd000`:Math.random()<.5?`#ff7b00`:`#ff3d00`,-.5,-.6,1)}driftSmoke(e){this.add(e,new V((Math.random()-.5)*1.5,.8+Math.random(),(Math.random()-.5)*1.5),1.2,.5,`#e9ecef`,-.08,1.8,1.5)}vortex(e,t){for(let n=0;n<4;n++){let r=t*6+n*1.57,i=4+Math.random()*6,a=e.clone().add(new V(Math.cos(r)*i,(Math.random()-.5)*3,Math.sin(r)*i));this.add(a,new V(-Math.cos(r)*i*1.5-Math.sin(r)*8,0,-Math.sin(r)*i*1.5+Math.cos(r)*8),.5,.18,n%2?`#8338ec`:`#c77dff`,0,-.2,0)}}initMarks(){this.marks=new Ti(new ca(1,1).rotateX(-Math.PI/2),new ni({color:`#111`,transparent:!0,opacity:.38,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),1200),this.marks.count=0,this.marks.frustumCulled=!1,this.marks.renderOrder=1,this.scene.add(this.marks)}mark(e,t,n=.32){this.marks||this.initMarks();let r=e.distanceTo(t);if(r<.05||r>4)return;let i=e.clone().add(t).multiplyScalar(.5);i.y+=.04,this.q.setFromAxisAngle(new V(0,1,0),Math.atan2(t.x-e.x,t.z-e.z)),this.m4.compose(i,this.q,this.s.set(n,1,r+.05)),this.marks.setMatrixAt(this.markI,this.m4),this.markI=(this.markI+1)%1200,this.marks.count=Math.max(this.marks.count,this.markI),this.marks.instanceMatrix.needsUpdate=!0}tracer(e,t,n=`#fff3a0`){let r=this.tracers.find(e=>e.t<=0)||this.tracers[0],i=r.line.geometry.attributes.position;i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,r.line.material.color.set(n),r.t=.08,r.line.visible=!0}update(e){let t=this.parts,n=0;for(let r=0;r<t.length;r++){let i=t[r];if(i.life-=e,i.life<=0)continue;i.vy-=20*i.grav*e;let a=1-i.drag*e;i.vx*=a,i.vy*=a,i.vz*=a,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<i.floor&&i.grav>0&&(i.y=i.floor,i.vy*=-.3,i.vx*=.6,i.vz*=.6),i.size+=i.grow*e,t[n++]=i}t.length=n;for(let e=0;e<n;e++){let n=t[e],r=n.size*Math.min(1,n.life/n.max*2);this.q.setFromEuler(new nn(n.life*7,n.life*5,0)),this.m4.compose(this.p.set(n.x,n.y,n.z),this.q,this.s.set(r,r,r)),this.mesh.setMatrixAt(e,this.m4),this.mesh.setColorAt(e,this.c.setRGB(n.r,n.g,n.b))}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(let t of this.booms){if(t.t<=0){t.mesh.visible=!1;continue}t.t-=e;let n=1-t.t/.6;t.mesh.scale.setScalar(t.r*(.3+n*1.1));let r=t.mesh.material;r.opacity=1-n,r.color.setHSL(.1-n*.08,1,.65-n*.3)}this.lightT>0&&(this.lightT-=e,this.light.intensity=Math.max(0,this.lightT/.5)*140);for(let t of this.tracers)t.t>0&&(t.t-=e,t.t<=0&&(t.line.visible=!1))}},uf=0,df={skin:`#ffd60a`,shirt:`#ffd60a`,pants:`#111`,shoes:`#111`,hair:`#ffd60a`,hat:`helmet`,glasses:`#111`},ff=class{constructor(e,t,n,r=`civ`){Q(this,`scene`,void 0),Q(this,`id`,uf++),Q(this,`model`,void 0),Q(this,`pos`,new V),Q(this,`vel`,new V),Q(this,`yaw`,0),Q(this,`hp`,40),Q(this,`state`,`walk`),Q(this,`timer`,0),Q(this,`target`,new V),Q(this,`isCop`,!1),Q(this,`isDummy`,!1),Q(this,`spin`,new V),Q(this,`fleeFrom`,new V),Q(this,`attackCd`,1),Q(this,`block`,null),Q(this,`corner`,0),Q(this,`dropped`,!1),Q(this,`thrown`,!1),Q(this,`speedNow`,0),Q(this,`punchT`,0),Q(this,`life`,0),this.scene=e,this.isCop=r===`cop`,this.isDummy=r===`dummy`,this.model=new Fd(r===`cop`?Nd:r===`dummy`?df:Md()),this.pos.set(t,$(t,n),n),this.hp=this.isCop?70:this.isDummy?9999:40,e.add(this.model.root)}dispose(){this.scene.remove(this.model.root)}get alive(){return this.state!==`dead`}knock(e){this.state===`dead`&&e.lengthSq()<4||(this.hp>0&&this.state!==`ragdoll`&&e.lengthSq()>16&&globalThis.__ccBark?.(this,`ragdoll`),this.state=this.hp<=0?this.state:`ragdoll`,this.vel.copy(e),this.spin.set(K(-6,6),K(-6,6),K(-6,6)).multiplyScalar(Math.min(1.5,e.length()/12)),this.timer=0)}update(e,t){this.life+=e;let n=t.gravity,r=this.model;if(this.state===`held`){this.sync(),r.animate(e,0,`ragdoll`);return}if(this.state===`ragdoll`||this.state===`dead`&&(this.vel.lengthSq()>.5||this.pos.y>$(this.pos.x,this.pos.z)+.1)){this.timer+=e,this.vel.y-=n*e,this.pos.addScaledVector(this.vel,e);let i=Math.max($(this.pos.x,this.pos.z),this.pos.y<-1.2?du-.6:-99),a=t.trampolineAt?.(this.pos.x,this.pos.z,this.pos.y,this.vel.y);if(a)this.vel.y=a*.9,this.spin.set(K(-8,8),K(-4,4),K(-8,8)),this.timer=0,t.chaos?.(5,`BOING`,this.pos);else if(this.pos.y<i+.2){this.pos.y=i+.2;let n=t.bouncy||t.isBouncy?.(this.pos.x,this.pos.z);if(this.vel.y<-3?(this.vel.y*=n?-.85:-.35,this.spin.multiplyScalar(n?1:.6)):this.vel.y=0,this.vel.x*=1-e*4,this.vel.z*=1-e*4,this.spin.multiplyScalar(1-e*3),this.spin.lengthSq()<4&&Math.abs(this.vel.y)<1){let t=r.root.rotation,n=Math.round((t.x-Math.PI/2)/Math.PI)*Math.PI+Math.PI/2;t.x+=(n-t.x)*Math.min(1,e*7),t.z*=1-Math.min(1,e*7),this.spin.multiplyScalar(.8)}}let o=Au(this.pos,.4);if(o){let e=-this.vel.dot(o);e>0&&(this.vel.addScaledVector(o,e*1.4),e>12&&this.hurt(e,t))}r.root.rotation.x+=this.spin.x*e,r.root.rotation.y+=this.spin.y*e,r.root.rotation.z+=this.spin.z*e,r.root.position.copy(this.pos),r.animate(e,0,`ragdoll`),(this.isDummy||this.thrown)&&this.vel.length()>6&&t.bowl(this),this.timer>2&&this.vel.length()<1&&(this.state===`dead`?this.vel.set(0,0,0):this.isDummy?this.state=`dead`:(this.state=this.isCop?`chase`:`flee`,this.timer=6,this.thrown=!1,r.root.rotation.set(0,this.yaw,0),t.pers?.bark(this,`getup`)));return}if(this.state===`dead`){this.timer+=e,r.root.position.copy(this.pos).setY($(this.pos.x,this.pos.z)+.25),r.root.rotation.x=Jl(r.root.rotation.x,-Math.PI/2,e*5),r.root.rotation.z=Jl(r.root.rotation.z,0,e*5);return}if(this.state===`float`){this.timer-=e,this.vel.y=Jl(this.vel.y,2.2,e*2),this.vel.x*=.98,this.vel.z*=.98,this.pos.addScaledVector(this.vel,e),r.root.rotation.y+=e*1.5,r.root.position.copy(this.pos),r.animate(e,0,`ragdoll`),this.timer<=0&&(this.state=`ragdoll`,this.timer=0,this.spin.set(1,2,1));return}let i=0,a=this.target.x,o=this.target.z,s=t.player.pos;if(this.state===`walk`)i=1.6,Math.hypot(a-this.pos.x,o-this.pos.z)<1&&this.nextCorner();else if(this.state===`flee`){i=6.5,this.timer-=e;let n=Math.atan2(this.pos.x-this.fleeFrom.x,this.pos.z-this.fleeFrom.z)+Math.sin(this.life*1.3+this.id)*.5;a=this.pos.x+Math.sin(n)*10,o=this.pos.z+Math.cos(n)*10,this.timer<=0&&(this.state=`walk`,this.nearestCorner()),Math.random()<e*.6&&t.pedScream?.(this)}else if(this.state===`chase`){let n=Math.hypot(s.x-this.pos.x,s.z-this.pos.z);a=s.x,o=s.z,i=n>14?6.8:n>2?4:0,this.attackCd-=e,t.stars===0?(this.state=`walk`,this.nearestCorner()):this.attackCd<=0&&n<30&&(this.attackCd=n<2.2?.9:K(.8,1.6),n<2.2?(this.punchT=.3,t.copAttack(this,`melee`,n)):t.copAttack(this,`shoot`,n))}else this.state===`idle`&&(i=0);let c=a-this.pos.x,l=o-this.pos.z;if(i>0&&c*c+l*l>.01){let t=Math.atan2(c,l);this.yaw+=Xl(this.yaw,t)*Math.min(1,e*8)}this.state===`chase`&&i===0&&(this.yaw+=Xl(this.yaw,Math.atan2(s.x-this.pos.x,s.z-this.pos.z))*Math.min(1,e*8)),this.speedNow=Jl(this.speedNow,i,Math.min(1,e*6)),this.pos.x+=Math.sin(this.yaw)*this.speedNow*e,this.pos.z+=Math.cos(this.yaw)*this.speedNow*e,this.pos.y=$(this.pos.x,this.pos.z),Au(this.pos,.4)&&this.state===`walk`&&this.nextCorner();let u=this.pos.y<du-.9;u&&(this.pos.y=du-1),this.punchT=Math.max(0,this.punchT-e),this.sync(),this.state===`flee`?r.emote(`shout`,.2):this.state===`chase`&&r.emote(`angry`,.2),r.animate(e,this.speedNow,u?`swim`:`ground`,this.punchT>0?1-this.punchT/.3:0,this.state===`chase`&&i<5)}sync(){this.model.root.position.copy(this.pos),this.state!==`held`&&this.model.root.rotation.set(0,this.yaw,0)}hurt(e,t,n=null){this.isDummy||this.state===`dead`||(this.hp-=e,this.hp<=0?(this.state=(this.state===`ragdoll`||this.vel.lengthSq(),`dead`),this.timer=0,t.onPedKilled(this,n)):this.state!==`ragdoll`&&(t.pers?.bark(this,this.isCop?`copHit`:`hit`),this.isCop?this.state=`chase`:(this.state=`flee`,this.timer=8,this.fleeFrom.copy(t.player.pos))))}setBlock(e){this.block=e,this.corner=Math.floor(Math.random()*4),this.setCornerTarget()}setCornerTarget(){let e=this.block,t=this.corner%4,n=t===0||t===3?e.x0+2:e.x1-2,r=t<2?e.z0+2:e.z1-2;this.target.set(n+K(-.8,.8),0,r+K(-.8,.8))}nextCorner(){if(!this.block)this.target.set(this.pos.x+K(-10,10),0,this.pos.z+K(-10,10));else{if(Math.random()<.18){let e=this.block,t=this.corner%4,n=t===0||t===3?-1:1,r=t<2?-1:1,i=Math.random()<.5,a=e.i+(i?n:0),o=e.j+(i?0:r),s=Nu.find(e=>e.i===a&&e.j===o);if(s){this.block=s,this.corner=i?t===0?1:t===1?0:t===2?3:2:3-t,this.setCornerTarget();return}}this.corner=(this.corner+(Math.random()<.5?1:3))%4,this.setCornerTarget()}}nearestCorner(){let e=Nu.reduce((e,t)=>Math.hypot(t.cx-this.pos.x,t.cz-this.pos.z)<Math.hypot(e.cx-this.pos.x,e.cz-this.pos.z)?t:e,Nu[0]);this.setBlock(e)}},pf=(e,t)=>new V(uu[e],0,uu[t]),mf=[[1,0],[-1,0],[0,1],[0,-1]];function hf(e,t){return new V(-t,0,e)}function gf(e,t,n,r){e.ai={mode:`traffic`,ni:t+r[0],nj:n+r[1],dx:r[0],dz:r[1],stage:0,wp:new V,stuck:0,panic:0,honked:0,reverse:0},_f(e)}function _f(e){let t=e.ai,n=pf(t.ni,t.nj),r=hf(t.dx,t.dz);t.wp.copy(n).addScaledVector(new V(t.dx,0,t.dz),-11).addScaledVector(r,4),t.stage=0}function vf(e){let t=e.ai,n=mf.filter(([e,n])=>(e!==-t.dx||n!==-t.dz)&&t.ni+e>=0&&t.ni+e<=9&&t.nj+n>=0&&t.nj+n<=9),r=n.find(([e,n])=>e===t.dx&&n===t.dz),i=r&&Math.random()<.55?r:n.length?q(n):[-t.dx,-t.dz],a=pf(t.ni,t.nj),o=hf(i[0],i[1]);t.dx=i[0],t.dz=i[1],t.wp.copy(a).addScaledVector(new V(i[0],0,i[1]),9).addScaledVector(o,4),t.stage=1,t.ni+=i[0],t.nj+=i[1]}function yf(e,t,n){for(let r=0;r<30;r++){let r=Math.floor(K(0,10)),i=Math.floor(K(0,10)),a=q(mf);if(r+a[0]<0||r+a[0]>9||i+a[1]<0||i+a[1]>9)continue;let o=pf(r,i).addScaledVector(new V(a[0],0,a[1]),K(14,40)).addScaledVector(hf(a[0],a[1]),4),s=o.distanceTo(e);if(!(s<t||s>n))return{p:o,i:r,j:i,d:a,yaw:Math.atan2(a[0],a[1])}}return null}function bf(e,t,n){let r=e.ai,i=e.input;if(!r||e.destroyed||e.driver!==`ai`){i.throttle=0,i.steer=0,i.brake=+!e.driver;return}let a,o,s;if(r.mode===`police`){let t=n.playerFocus(),i=n.player.vehicle?n.player.vehicle.vel:n.player.vel;a=t.x+i.x*.6,o=t.z+i.z*.6;let c=Math.hypot(a-e.pos.x,o-e.pos.z);s=n.player.vehicle?55:c<14?0:30,!n.player.vehicle&&c<16&&!r.deployed&&(r.deployed=!0,n.deployCops(e)),n.stars===0&&(r.mode=`leave`)}else r.mode===`leave`?(a=e.pos.x+Math.sin(e.yaw)*20,o=e.pos.z+Math.cos(e.yaw)*20,s=20):(Math.hypot(r.wp.x-e.pos.x,r.wp.z-e.pos.z)<4&&(r.stage===0?vf(e):_f(e)),a=r.wp.x,o=r.wp.z,s=r.panic>0?34:r.stage===1?9:15,r.panic=Math.max(0,r.panic-t));let c=Xl(e.yaw,Math.atan2(a-e.pos.x,o-e.pos.z)),l=ql(c*2.2,-1,1),u=e.fwdSpeed,d=!1;if(r.mode===`traffic`&&r.panic<=0){let t=Zl(e.yaw),r=6+Math.max(0,u)*.6;for(let i of n.obstacles()){if(i===e)continue;let n=i.pos.x-e.pos.x,a=i.pos.z-e.pos.z,o=n*t.x+a*t.z;if(!(o<0||o>r)&&Math.abs(n*t.z-a*t.x)<2.2){d=!0;break}}}let f=u<s?1:u>s+3?-.6:0;Math.abs(c)>.9&&u>14&&(f=-.5),d?(f=u>.5?-1:0,r.stuck+=t,r.stuck>2.5&&r.honked<=0&&(e.honk=.6,r.honked=4,n.sfx(`horn`,.6,e.pos))):r.stuck=Math.max(0,r.stuck-t),r.honked=Math.max(0,(r.honked||0)-t),!d&&f>0&&Math.abs(u)<1.5?(r.wall=(r.wall||0)+t,r.wall>1.6&&(r.reverse=1.2,r.wall=0)):r.wall=0,r.reverse>0&&(r.reverse-=t,f=-1,l=-l),i.throttle=f,i.steer=l,i.brake=0,i.up=0}function xf(e,t,n){let r=n.playerFocus(),i=n.elapsed*.3+e.id,a=r.x+Math.sin(i)*22,o=r.z+Math.cos(i)*22,s=Math.max(r.y,$(e.pos.x,e.pos.z))+30,c=Xl(e.yaw,Math.atan2(r.x-e.pos.x,r.z-e.pos.z)),l=Math.hypot(a-e.pos.x,o-e.pos.z);e.input.steer=ql(c*2,-1,1);let u=Zl(e.yaw),d=new V(a-e.pos.x,0,o-e.pos.z);e.input.throttle=ql(d.dot(u)/15,-1,1)*+(l>5),e.input.up=ql((s-e.pos.y)/8,-1,1);let f=Ql(e.yaw);e.vel.addScaledVector(f,ql(d.dot(f)/20,-1,1)*10*t),n.stars<4&&(e.input.up=1,e.ai.leaving=(e.ai.leaving||0)+t)}var Sf=[{code:`BUBBLEWRAP`,desc:`God mode (toggle)`,run:e=>(e.cheats.god=!e.cheats.god,e.player.health=e.maxHealth,e.cheats.god?`Bubble-wrapped. Legally invincible. Morally questionable.`:`Bubble wrap popped. You can feel pain again. Congrats.`)},{code:`POCKETARSENAL`,desc:`All weapons`,run:e=>(e.owned=tf.map(e=>e.id),`Every weapon. Your pockets now need a permit.`)},{code:`MOONBOUNCE`,desc:`Low gravity (toggle)`,run:e=>(e.cheats.lowGrav=!e.cheats.lowGrav,e.cheats.lowGrav?`Gravity has left the chat. It was tired of you.`:`Gravity is back. It's not happy about it.`)},{code:`BOBBLEHEAD`,desc:`Giant heads (toggle)`,run:e=>(e.cheats.bigHeads=!e.cheats.bigHeads,e.applyHeads(),e.cheats.bigHeads?`Everyone's ego is now visible from space.`:`Heads deflated. Egos remain.`)},{code:`TOTALLYINNOCENT`,desc:`Clear wanted level`,run:e=>(e.setHeat(0),`The cops decided it was the other guy. There is no other guy.`)},{code:`COMEATMEBRO`,desc:`Max wanted level`,run:e=>(e.setHeat(5.5),`Five stars. Bold. Unwise. Mostly bold.`)},{code:`MOLASSESMODE`,desc:`Slow motion (toggle)`,run:e=>(e.cheats.slowmo=!e.cheats.slowmo,e.cheats.slowmo?`Everything is dramatic now. Even blinking.`:`Back to regular speed. Less drama, same mess.`)},{code:`MAKEITDRIZZLE`,desc:`Rain`,run:e=>(e.sky.weather=`rain`,`Forecast: moist. Sorry.`)},{code:`ANGRYCLOUDS`,desc:`Thunderstorm`,run:e=>(e.sky.weather=`storm`,`The sky is having a tantrum. Relatable.`)},{code:`PEASOUP`,desc:`Thick fog`,run:e=>(e.sky.weather=`fog`,`Visibility: vibes only. Drive by feel.`)},{code:`SUNNYSIDEUP`,desc:`Clear skies`,run:e=>(e.sky.weather=`clear`,`Clear skies. No excuses left.`)},{code:`DISCOINFERNO`,desc:`Disco sky`,run:e=>(e.sky.weather=`disco`,`The sky now takes requests. It will ignore them.`)},{code:`NIGHTOWL`,desc:`Skip to midnight`,run:e=>(e.sky.time=0,`Midnight. The duck is awake.`)},{code:`EARLYBIRD`,desc:`Skip to sunrise`,run:e=>(e.sky.time=6.3,`Sunrise. Nobody asked for this much light.`)},{code:`COUCHPOTATO`,desc:`Spawn the flying couch`,run:e=>(e.spawnVehicleNearPlayer(`couch`),`Your couch achieved liftoff. Your rent did not.`)},{code:`GIMMEWHEELS`,desc:`Spawn a random ride`,run:e=>{let t=zd[Math.floor(Math.random()*zd.length)];return e.spawnVehicleNearPlayer(t),`Delivered: ${Rd[t].name}.`}},{code:`CHOPPERTIME`,desc:`Spawn a helicopter`,run:e=>(e.spawnVehicleNearPlayer(`heli`),`Helicopter delivered. No pilot license required. Or checked.`)},{code:`WINGITTOO`,desc:`Spawn a stunt plane`,run:e=>(e.spawnVehicleNearPlayer(`plane`),`A plane. Find a long road and a short memory.`)},{code:`KANGAROOLEGS`,desc:`Super jump (toggle)`,run:e=>(e.cheats.superJump=!e.cheats.superJump,e.cheats.superJump?`Your calves are now registered weapons.`:`Normal legs restored.`)},{code:`BOINGBOING`,desc:`Bouncy cars (toggle)`,run:e=>(e.cheats.bouncy=!e.cheats.bouncy,e.cheats.bouncy?`All tires replaced with trampolines.`:`Tires are tires again.`)},{code:`TRUSTFUNDBABY`,desc:`+$250,000`,run:e=>(e.addMoney(25e4,!1),`Dad wired you some pocket money. He's "not mad".`)},{code:`FIRSTAIDKIT`,desc:`Full health`,run:e=>(e.player.health=e.maxHealth,`Band-aids applied. Some of them to the right spots.`)},{code:`KABOOMTOWN`,desc:`Explode nearby cars`,run:e=>(e.explodeNearby(),`Oops. All explosions. Insurance just fainted.`)},{code:`PEDPANIC`,desc:`Everyone runs screaming`,run:e=>(e.alarm(e.player.pos,400),`Mass hysteria. Same as usual, but louder.`)},{code:`TURBOTIME`,desc:`Faster time of day`,run:e=>(e.sky.speed=e.sky.speed>.1?24/480:1.2,e.sky.speed>.1?`Time is now speedrunning.`:`Time back to normal pace.`)},{code:`CLIPFARM`,desc:`Streamer seed: flying couch + Yeetinator + wanted chase`,run:e=>e.pers.streamerSeed()},{code:`SPEEDDEMON`,desc:`All vehicles 2x faster (toggle)`,run:e=>(e.cheats.fastCars=!e.cheats.fastCars,e.cheats.fastCars?`Engines now run on espresso.`:`Engines decaffeinated.`)}],Cf=e=>Sf.find(t=>t.code===e.toUpperCase().replace(/\s+/g,``)),wf={hit:[`OW. Rude.`,`I have a podcast about this!`,`My chiropractor will hear of this.`,`That was my good elbow!`,`Not the face, it's rented!`,`I'm telling my landlord!`,`Who raised you?!`,`Ow ow ow okay ow.`],flee:[`NOPE NOPE NOPE`,`Every man for himself!`,`I left the oven on! Forever!`,`Not today, chaos goblin!`,`I was just buying socks!`,`Run! Run like it's a sale!`,`Mommyyyy!`],ragdoll:[`WHEEEE—NO!`,`I CAN SEE MY HOUSE!`,`Gravity, you traitor!`,`AAAAAAA`,`This is fine-ee-eee!`,`My spine has left the group chat!`,`Not again!`],getup:[`I'm okay! Mostly!`,`Walked it off. Barely.`,`Ten out of ten, would not repeat.`,`I meant to do that.`,`Somebody owes me a sandwich.`],nearmiss:[`WATCH IT!`,`SIDEWALK! SIDE! WALK!`,`I felt that breeze!`,`Was that a couch?!`,`Indicate, you maniac!`,`My life flashed by. It was boring.`],cop:[`Stop! Or I'll ask nicely again!`,`Freeze! Or at least chill!`,`You have the right to remain chaotic!`,`Hands where I can judge them!`,`Pull over! Please? Pretty please?`,`Dispatch, I'm gonna need a nap.`],copHit:[`Assaulting an officer's feelings!`,`That's going in my diary!`,`OW! Paperwork!`,`You just made my shift longer!`],jacked:[`MY CAR!`,`I just had it detailed!`,`At least use the turn signal!`,`Bring it back with a full tank!`,`That's a lease!`],driver:[`Learn to drive!`,`HONK HONK, buddy!`,`Lane! Pick one!`,`Is that a bathtub?!`,`My insurance just sighed.`,`Not the bumper!`],emote:[`Uh... nice?`,`*slow clap*`,`Is this a flash mob?`,`Ten points. From the cringe judge.`,`Do that again. Wait, don't.`],mime:[`...`,`(silent screaming)`,`(pretends to be stuck in a box)`,`(mimes calling a lawyer)`,`(invisible rope, pulling you closer)`]},Tf=[{id:`bleep`,freq:`88.1`,name:`BLEEP FM`,host:`DJ Lowbatt`,genre:`Chiptune for criminals`,color:`#4cc9f0`,pitch:.6,rate:1.15},{id:`honk`,freq:`97.3`,name:`K-HONK`,host:`Marge Throttle`,genre:`Polka-punk & car alarms`,color:`#ff7b00`,pitch:1.3,rate:1.25},{id:`smooth`,freq:`104.9`,name:`SMOOTH 104.9`,host:`Velvet Desmond`,genre:`The Lounge of Indifference`,color:`#c77dff`,pitch:.75,rate:.95}],Ef={id:`void`,freq:`0.0`,name:`THE VOID`,host:`???`,genre:`You found the station between stations`,color:`#888`,pitch:.3,rate:.7},Df={bleep:{intro:[`BLEEP FM. Low power, high crimes.`,`Lowbatt here. Ten percent. Talk fast.`],filler:[`Beep. Boop. Bad decisions.`,`Now playing: a sound I made by accident.`,`Battery's low. So are standards.`],stars1:[`One star. Cute.`,`Cops noticed you. Barely.`],stars3:[`Three stars? Charging my excitement.`,`That siren is in the wrong key.`],stars5:[`FIVE STARS. My fan is spinning.`,`Max heat. Even I'm warm.`],cannon:[`Human projectile detected.`,`Yeetinator: one. Dignity: zero.`],combo:[`Combo overflow. Rebooting.`,`Your chaos has a high score.`],bail:[`Nice bail. Sloppy landing.`,`That bail? Unoptimized.`],fail:[`Error 404: skill.`,`Respawn with regret enabled.`,`Lmao. Recorded. Archived.`],rollover:[`Car upside down. Classic.`,`Wheels up. Brain down.`],stunt:[`Airtime logged. Barely legal.`,`Flight mode: accidental.`],clear:[`Heat cleared. Boring again.`,`Cops left. Rude.`],replay:[`Again. In slow motion. Ouch.`,`Watch it fail in 4K.`]},honk:{intro:[`K-HONK! Turn it up, tear it off!`,`Marge Throttle, behind the wheel and the mic!`],filler:[`That song had a car alarm solo!`,`Polka never dies. It just crashes.`,`Accordion check! Still angry!`],stars1:[`One star! Warm-up lap!`,`Cops are sniffing! Floor it!`],stars3:[`Three stars! Now we're dancing!`,`Sirens! That's my backing band!`],stars5:[`FIVE STARS! I'M CRYING!`,`Full heat! Mama's proud!`],cannon:[`YEET! Ten out of ten!`,`Cannon launch! Somebody call a kite!`],combo:[`COMBO! I felt that in my axle!`,`Chain it! Chain it!`],bail:[`BAIL! Tuck and roll, baby!`,`Belly flop on asphalt! Nine!`],fail:[`Oof! Shake it off, kiddo!`,`That's a derby move! Bad derby!`,`Hah! Do it again!`],rollover:[`ROLLOVER! Flip it like a pancake!`,`Roof driving! Bold!`],stunt:[`AIR! Glorious air!`,`You touched a cloud!`],clear:[`Heat's gone! Boo!`,`Cops lost you! Losers!`],replay:[`RUN IT BACK!`,`Replay! Watch that spine!`]},smooth:{intro:[`Smooth one-oh-four-nine. Breathe out.`,`Velvet Desmond. Mildly with you.`],filler:[`That was a saxophone. Allegedly.`,`Ah. Soft chords for hard choices.`,`Close your eyes. Not while driving.`],stars1:[`A single star. How quaint.`,`The authorities are... curious.`],stars3:[`Three stars. Tasteless. Continue.`,`Sirens, darling. So gauche.`],stars5:[`Five stars. I'm switching to decaf.`,`Maximum heat. Hydrate.`],cannon:[`You... launched yourself. Lovely.`,`A human comet. How avant-garde.`],combo:[`A chain of misfortune. Bravo.`,`Your combo is... loud.`],bail:[`The bail. Inelegant. Moving.`,`You fell with such conviction.`],fail:[`And that is why we stretch.`,`A tragedy. In three movements.`,`I've seen worse. Not today.`],rollover:[`Upside down. A new perspective.`,`The car is now a hat.`],stunt:[`Airborne. Like a sad pelican.`,`You soared. Then remembered.`],clear:[`The heat fades. Like my career.`,`They've gone. Let us exhale.`],replay:[`Again, but slower. Savour it.`,`The tragedy. Encore.`]},void:{intro:[`...you're not supposed to be here.`,`...hello, upside-down person.`],filler:[`...the duck knows.`,`...frequency zero. Zero frequency.`,`...have you checked the hills?`]}},Of=[`Lawyers 4 Less: hit by a couch? We'll sue the couch.`,`Donut Panic: glazed, confused, open late.`,`Slurp-O-Matic. One hundred twenty-eight ounces of regret.`,`Nap Station: mattresses so soft, you'll miss work.`,`Discount Helmets: you'll need one. Probably two.`,`Chaos Mutual Insurance: we cover nothing, beautifully.`,`Bail Bonds and Bagels: get out, get carbs.`,`Taco Tsunami. Now with a wave of guac.`,`St. Bandaid's Urgent-ish Care. Take a number. Take two.`],kf={bleep:[`Lowbatt here, broadcasting from a closet inside a closet. Today's weather: mild, with a forty percent chance of somebody yeeting themselves off the mega ramp. Today's traffic: yes. Today's mood: buffering. I made this next track by dropping a calculator down the stairs. Enjoy. Or don't. My battery doesn't care.`,`A listener writes: "Lowbatt, is it legal to drive a bathtub on the highway?" Great question. No. But the cops in Costa Chaos are mostly on lunch break, so: technically yes. Plug your phone in tonight. Plug yourself in, too.`],honk:[`MARGE THROTTLE, BABY! Forty-one years in the demolition derby and I've still got all my teeth, mostly in a jar! People ask me, Marge, what's the secret? I tell them: brake pedals are a suggestion and the accordion is a weapon. Now here's a polka about a man who parked in two spaces. He doesn't anymore.`,`Caller on line two says I'm "too loud for the radio." Sweetheart, this is K-HONK. Loud is the format. If you want quiet, go listen to Velvet Desmond whisper at a candle. Here's a song with no chorus, only revving.`],smooth:[`Good evening. Or morning. Time is a construct, and so is your driving. This is Velvet Desmond, and tonight we explore the space between the notes — mainly because the musician fell asleep. Pour yourself a beverage. Not while operating a flying couch. Let the chords hold you, the way a cop holds a grudge.`,`A listener asks: "Desmond, why do you sound disappointed?" My dear, I am a smooth-jazz host in a city where people fire themselves from cannons for fun. Disappointment is my instrument. I play it beautifully. Here is something with a saxophone. I believe.`]},Af={dez:{entrance:`Package for... everyone. Signature not required.`,taunts:[`Red light? Never met her.`,`I deliver in thirty minutes or less. Usually through a window.`,`My legs are faster than your car insurance.`],bail:[`Delivered. Myself. To the ground.`,`Tip your courier. Preferably in bandages.`,`That was the express route.`],emote:`bell`,emoteName:`Bell Ring`,emoteLine:[`DING DING, MOVE IT!`,`On your left. And your right.`],flourish:`Orange spoke-streak trail when sprinting`,fail:[`Package damaged. So am I.`,`Returned to sender.`]},gigawatt:{entrance:`Bingo night is cancelled. I'm busy.`,taunts:[`I've had hips replaced that were tougher than you.`,`Back in my day we crashed for FREE.`,`Is it nap time? No? Then it's chaos time.`],bail:[`Ooh, my lumbar!`,`That's how we fell in '72!`,`B-14! BINGO! Ow.`],emote:`spin`,emoteName:`Derby Spin`,emoteLine:[`STILL GOT IT!`,`Round and round, sweetie!`],flourish:`Golden BINGO crown on her bun`,fail:[`I'm writing to the mayor.`,`Where are my pills?`]},brayden:{entrance:`Gm. This city is undervalued.`,taunts:[`Have you heard of my newsletter? It's about me.`,`Respectfully, I am the main character.`,`Every crash is a buying opportunity.`],bail:[`Diamond hands. Paper spine.`,`That was a dip. I'm buying the dip.`,`Down bad. Still bullish.`],emote:`moon`,emoteName:`To The Moon`,emoteLine:[`TO THE MOON!`,`Number go up!`],flourish:`Gold coin-sparkle trail`,fail:[`My portfolio did that too.`,`Rug pulled. Literally.`]},fizz:{entrance:`Hypothesis: everything explodes. Let's test it.`,taunts:[`I have three buttons. You've pressed none. Coward.`,`Physics is just a suggestion with math.`,`Do not touch anything. Watch me touch everything.`],bail:[`Data collected. Bones questionable.`,`Variable: me. Result: ow.`,`Peer review: the pavement.`],emote:`eureka`,emoteName:`Eureka!`,emoteLine:[`EUREKA!`,`IT WORKS! Nobody touch it!`],flourish:`Orbiting atom around her head`,fail:[`Experiment failed. Repeat it louder.`,`Note to self: no.`]},sal:{entrance:`I'm just here for the olive oil. Capisce? No? Good.`,taunts:[`You didn't see me. I wasn't here. Nice shoes.`,`My cousin knows a guy who knows your guy.`,`Everything is legitimate. Look at my hat.`],bail:[`I fell. Nobody saw. Right?`,`Somebody's gonna pay for this suit.`,`Ay, the pavement. My knees.`],emote:`kiss`,emoteName:`Chef's Kiss`,emoteLine:[`Perfetto.`,`Magnifico. Now forget you saw it.`],flourish:`Accordion chord whenever he gets in a car`,fail:[`This never happened.`,`I'm calling my cousin.`]},rex:{entrance:`Stunt number four thousand. Let's make it count.`,taunts:[`I've been on fire forty-one times. Forty-two is overdue.`,`Pain is just weakness getting a stunt credit.`,`Neck brace? Fashion.`],bail:[`NAILED IT. The ground, I mean.`,`That's a wrap! On my ribs!`,`Again! From the top! Of the building!`],emote:`flex`,emoteName:`Double Flex`,emoteLine:[`HUAAAH!`,`Insured by nobody!`],flourish:`Flames from his boots when sprinting or flying`,fail:[`Stunt double took the day off.`,`Cut! Print! Hospital!`]},lag:{entrance:`Chat, we're live. Don't clip the bad parts.`,taunts:[`Chat says do a flip. Chat is not my mom.`,`Smash that... everything.`,`If this goes viral, I'm buying a chair.`],bail:[`CLIP IT. CLIP IT!`,`Chat, that was intentional.`,`That's the thumbnail right there.`],emote:`lag`,emoteName:`Lag Spike`,emoteLine:[`B-b-b-buffering...`,`Chat, am I frozen?`],flourish:`Floating red LIVE sign over his head`,fail:[`Chat is spamming L.`,`Stream ending. Brb forever.`]},dee:{entrance:`Officer Dee Tour, on a very long lunch. Carry on.`,taunts:[`I saw nothing. I'm on break.`,`This donut is evidence. I'm processing it.`,`My shift ended three hours ago. Emotionally.`],bail:[`Officer down! Officer stays down!`,`I'll write myself a ticket.`,`Filing that under "accidental".`],emote:`donut`,emoteName:`Donut Break`,emoteLine:[`Mmm. Evidence.`,`Ten-four, sprinkles.`],flourish:`Donut on her cap + police whistle when she bails`,fail:[`That's gonna be a lot of paperwork.`,`Internal affairs will LOVE this.`]}},jf=[`FLATLINED`,`UNALIVED (TEMPORARILY)`,`RAGDOLL RETIREMENT`,`OOPSIE DAISY`,`GAME OVER-ISH`],Mf=[`Skill issue, but make it cinematic.`,`Your health bar filed for divorce.`,`The pavement wins again. Undefeated.`,`You died doing what you loved: that.`,`Respawning… with regrets enabled.`,`The hospital bill is in the mail. The mail is on fire.`,`Bold strategy. Didn't work. Still bold.`],Nf=[`CUFFED`,`DETAINED-ISH`,`BOOKED & BORED`],Pf=[`Your lawyer is a parrot. It said "guilty".`,`One phone call. You ordered a pizza.`,`Officer says you have the right to remain hilarious.`,`You're free on bail. Not the fun kind.`,`Mugshot looked great, honestly.`],Ff=[`Discharged from <b>St. Bandaid's</b>. Walk it off.`,`The doctor said "again?" and left.`,`All bones accounted for. Some are in a bag.`],If=[`Released on a technicality. The technicality is the jail flooded.`,`Out already. The cops got bored.`,`Released. Your mugshot is now a meme.`],Lf=[`Press <b>B</b> mid-air to bail. Style points are awarded for suffering.`,`Press <b>R</b> for an instant replay of the last 15 seconds. Then press it again. Relive it.`,`The Yeetinator does not have a safety. It has a fuse.`,`Press <b>T</b> to emote. Pedestrians will judge you. Out loud.`,`Press <b>N</b> in a car to change radio stations. All three hosts are disappointed in you equally.`,`Banana peels work on cops. Cops do not work on banana peels.`,`Chaos contracts reset daily. Your dignity does not.`,`Failing is worth points. You're welcome.`,`Type <b>CLIPFARM</b> for an instant streamer moment. Hydrate first.`,`There are five secrets in Costa Chaos. One of them quacks.`,`Trampolines are free. Hospital visits are not.`,`Stuck upside down? Press <b>Space</b>. Or just live there now.`,`Hamster ball: excellent for rolling. Terrible for dignity.`],Rf=[`Local pigeon elected mayor; promises "more bread"`,`Weather: sunny with a chance of flying furniture`,`Bounce Town zoning board deflates in protest`,`Mime arrested, remains silent`,`Pizza Fiasco: "late or free-ish" ruled legally binding-ish`,`Scientists confirm the Yeetinator is "probably not a cannon"`,`Traffic report: yes`,`Lawyers 4 Less reports record quarter, thanks you personally`,`Hot tub sales up 400% after bathtub pier incident`],zf=[{key:`bowled`,min:3,fmt:e=>`${e} pedestrians bowled over; local alley demands royalties`},{key:`totaled`,min:2,fmt:e=>`${e} cars totaled today; insurers form support group`},{key:`cannon`,min:1,fmt:e=>`Yeetinator fired ${e} time${e>1?`s`:``}; birds file complaint`},{key:`bestBail`,min:500,fmt:e=>`Bail scored ${e.toLocaleString()} pts; judges "deeply concerned"`},{key:`maxStars`,min:3,fmt:e=>`${e}-star manhunt ends in shrug; police chief takes nap`},{key:`slips`,min:2,fmt:e=>`${e} banana-related slips; fruit stand under investigation`},{key:`rollovers`,min:2,fmt:e=>`${e} rollovers reported; cars now driven roof-first`},{key:`deaths`,min:2,fmt:e=>`Local menace dies ${e} times, keeps coming back; hospital installs revolving door`},{key:`busts`,min:1,fmt:e=>`Arrested ${e} time${e>1?`s`:``}; jail installs welcome mat`},{key:`airtime`,min:8,fmt:e=>`${Math.round(e)}s of total airtime; air traffic control files grievance`},{key:`bigCombo`,min:5,fmt:e=>`×${e} chaos combo recorded; seismologists baffled`},{key:`fails`,min:3,fmt:e=>`${e} challenges failed spectacularly; ratings soar`}],Bf=[`Participation Trophy (Dented)`,`Golden Faceplant`,`Most Committed to the Bit`,`Honorary Speed Bump`,`Certified Oopsie`,`Gravity's Favorite`,`Lifetime Achievement in Falling`],Vf=[`Fine. You did it. Don't get cocky.`,`Success. Boring, but lucrative.`,`Wow. Competence. Gross.`],Hf=(e,t=``,n=``)=>{let r=document.createElement(e);return t&&(r.className=t),n&&(r.innerHTML=n),r},Uf=[`Realistic Pigeon Physics v2.3`,`Flying Couch Framework`,`Cops Are Slightly Dumber`,`Extra Sunny Shaders`,`Rubber Chicken Ballistics`,`Ragdoll Overhaul (Extra Floppy)`,`No Seatbelt Laws`,`Unlimited Pockets`,`Gravity Is Optional`,`Bobblehead Compatibility Patch`,`Hot Dog Truck Expansion`,`Disco Sky Pack`,`Grandma DLC`,`Sarcastic Radio Hosts (Unpaid)`,`Pedestrian Opinions Pack`,`Instant Regret Replay`,`Mime (Do Not Engage)`],Wf=e=>Math.max(0,Math.min(1,e)),Gf=class{constructor(e){Q(this,`game`,void 0),Q(this,`root`,Hf(`div`,`hud`)),Q(this,`money`,Hf(`div`,`money`)),Q(this,`clock`,Hf(`div`,`clock`)),Q(this,`stars`,Hf(`div`,`stars`)),Q(this,`hp`,Hf(`div`,`hpbar`)),Q(this,`hpFill`,Hf(`div`,`hpfill`)),Q(this,`weapon`,Hf(`div`,`weapon`)),Q(this,`toasts`,Hf(`div`,`toasts`)),Q(this,`big`,Hf(`div`,`bigtext`)),Q(this,`popup`,Hf(`div`,`vpopup`)),Q(this,`hintEl`,Hf(`div`,`hint`)),Q(this,`cross`,Hf(`div`,`crosshair`)),Q(this,`speedo`,Hf(`div`,`speedo`)),Q(this,`floats`,Hf(`div`,`floats`)),Q(this,`cheatTag`,Hf(`div`,`cheattag`)),Q(this,`mini`,void 0),Q(this,`mctx`,void 0),Q(this,`mapImg`,void 0),Q(this,`wheel`,Hf(`div`,`wheel hidden`)),Q(this,`wheelSel`,0),Q(this,`wheelSticky`,!1),Q(this,`wheelVec`,new B),Q(this,`consoleEl`,Hf(`div`,`console hidden`)),Q(this,`consoleInput`,void 0),Q(this,`consoleLog`,Hf(`div`,`clog`)),Q(this,`charSel`,Hf(`div`,`overlay charsel hidden`)),Q(this,`controls`,Hf(`div`,`overlay controls hidden`)),Q(this,`pause`,Hf(`div`,`overlay pause hidden`)),Q(this,`title`,Hf(`div`,`overlay title`)),Q(this,`touchUI`,Hf(`div`,`touch hidden`)),Q(this,`floatList`,[]),Q(this,`bigT`,0),Q(this,`popT`,0),Q(this,`comboEl`,Hf(`div`,`combo`)),Q(this,`speedLines`,Hf(`div`,`speedlines`)),Q(this,`flashEl`,Hf(`div`,`flash`)),Q(this,`bailEl`,Hf(`div`,`bailcard`)),this.game=e,document.getElementById(`app`).appendChild(this.root);let t=Hf(`div`,`topright`);this.hp.appendChild(this.hpFill),t.append(this.clock,this.weapon,this.hp,this.money,this.stars),this.mini=document.createElement(`canvas`),this.mini.width=this.mini.height=200,this.mini.className=`minimap`,this.mctx=this.mini.getContext(`2d`),this.mapImg=this.renderMap(),this.root.append(this.speedLines,this.flashEl,this.comboEl,this.bailEl,t,this.mini,this.toasts,this.big,this.popup,this.hintEl,this.cross,this.speedo,this.floats,this.cheatTag,this.wheel,this.consoleEl,this.charSel,this.controls,this.pause,this.title,this.touchUI),this.buildWheel(),this.buildConsole(),this.buildControls(),this.buildPause(),this.buildTouch()}renderMap(){let e=document.createElement(`canvas`);e.width=e.height=820;let t=e.getContext(`2d`),n=820/1640,r=t.createImageData(820,820);for(let e=0;e<820;e++)for(let t=0;t<820;t++){let i=t/n-820,a=e/n-820,o=$(i,a),s=o<-1.4?[42,140,205]:a>294?[236,210,155]:bu(i,a)?[220,174,108]:[124,191,90];o>20&&(s=s.map(e=>e*.8));let c=(e*820+t)*4;r.data[c]=s[0],r.data[c+1]=s[1],r.data[c+2]=s[2],r.data[c+3]=255}t.putImageData(r,0,0);let i=e=>(e+820)*n;t.fillStyle=`#4a4e57`,t.fillRect(i(-296),i(-296),592*n,592*n),t.fillRect(i(290),i(-8),(fu.x1-290)*n,16*n),t.fillStyle=`#2f3238`,t.fillRect(i(fu.x0),i(11),(fu.x1-fu.x0)*n,26*n);for(let e of Nu)t.fillStyle=e.kind===`park`||e.kind===`houses`?`#8fc76f`:`#c9c3b8`,t.fillRect(i(e.x0),i(e.z0),(e.x1-e.x0)*n,(e.z1-e.z0)*n);t.fillStyle=`#e8e2d6`;for(let e of wu)e.maxX-e.minX>3&&t.fillRect(i(e.minX),i(e.minZ),(e.maxX-e.minX)*n,(e.maxZ-e.minZ)*n);t.fillStyle=`#ff3d7f`;let a=Nu.find(e=>e.kind===`garage`);return t.fillRect(i(a.cx-4),i(a.cz-4),8*n,8*n),e}drawMinimap(){let e=this.mctx,t=this.game,n=t.playerFocus(),r=820/1640,i=t.player.vehicle?.isAir()?1.4:2.6;e.clearRect(0,0,200,200),e.save(),e.beginPath(),e.arc(100,100,97,0,Math.PI*2),e.clip(),e.fillStyle=`#2a8ccd`,e.fillRect(0,0,200,200),e.translate(100,100),e.rotate(t.camYaw+Math.PI),e.scale(i,i),e.drawImage(this.mapImg,-(n.x+820)*r,-(n.z+820)*r);let a=(t,a,o,s=2.2)=>{e.fillStyle=o,e.beginPath(),e.arc((t-n.x)*r,(a-n.z)*r,s/i*1.6,0,Math.PI*2),e.fill()};for(let e of t.vehicles)e.destroyed||(e.def.id===`police`&&e.ai?.mode===`police`?a(e.pos.x,e.pos.z,Math.floor(t.elapsed*4)%2?`#ff2244`:`#2255ff`,3):!e.driver&&e!==t.player.vehicle&&a(e.pos.x,e.pos.z,`#ffffff`,1.6));for(let e of t.peds)e.isCop&&e.alive&&a(e.pos.x,e.pos.z,`#3a86ff`,1.8);e.restore(),e.save(),e.translate(100,100);let o=t.player.vehicle?t.player.vehicle.yaw:t.player.yaw;e.rotate(-(o-t.camYaw)),e.fillStyle=`#ffd60a`,e.strokeStyle=`#000`,e.lineWidth=1.5,e.beginPath(),e.moveTo(0,-9),e.lineTo(6,7),e.lineTo(0,3),e.lineTo(-6,7),e.closePath(),e.fill(),e.stroke(),e.restore(),e.strokeStyle=`rgba(255,255,255,.85)`,e.lineWidth=4,e.beginPath(),e.arc(100,100,97,0,Math.PI*2),e.stroke();let s=t.camYaw+Math.PI,c=100+Math.sin(-s+Math.PI)*0,l=-(t.camYaw+Math.PI),u=Math.sin(l+Math.PI)*88;-Math.cos(l+Math.PI)*88,e.fillStyle=`#fff`,e.font=`bold 13px sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`N`,100+(c*0+u)*0+Kf(0,-1,t.camYaw)*88,100+qf(0,-1,t.camYaw)*88)}update(e,t){let n=this.game;this.money.textContent=ou(n.moneyShown);let r=n.sky.time,i=Math.floor(r),a=Math.floor((r-i)*60);this.clock.textContent=`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`;let o=n.player.health/(n.maxHealth||100),s=Number.isFinite(o)?Wf(o):1;this.hpFill.style.width=`${s*100}%`,this.hpFill.style.backgroundColor=s>.6?`#2ecc71`:s>.3?`#ffd60a`:`#e01e37`,this.hp.classList.toggle(`low`,s<=.3),this.hpFill.classList.toggle(`god`,!!n.cheats.god);let c=``,l=n.hiddenT>0&&Math.floor(n.elapsed*3)%2==0;for(let e=0;e<5;e++)c+=`<span class="${e<n.stars?l?`star dim`:`star on`:`star`}">★</span>`;this.stars.innerHTML!==c&&(this.stars.innerHTML=c);let u=n.curWeapon,d=`<span class="wicon">${u.icon}</span><span class="wname">${u.name}</span>${n.yoinked?`<span class="wsub">holding... click to yeet</span>`:``}`;this.weapon.innerHTML!==d&&(this.weapon.innerHTML=d);let f=n.player.vehicle;if(this.speedo.style.display=f?`block`:`none`,f){let e=f.def.kind===`plane`?f.planeSpeed:f.speed;this.speedo.innerHTML=`<b>${Math.round(e*3.6)}</b> km/h${f.isAir()?`<br><small>ALT ${Math.round(f.pos.y-Math.max(0,$(f.pos.x,f.pos.z)))} m</small>`:``}`}let p=Object.entries(n.cheats).filter(([,e])=>e).map(([e])=>e);this.cheatTag.textContent=p.length?`MODS: `+p.join(` · `).toUpperCase():``,this.bigT>0&&(this.bigT-=e,this.bigT<=0&&this.big.classList.remove(`show`)),this.popT>0&&(this.popT-=e,this.popT<=0&&this.popup.classList.remove(`show`));let m=new V;this.floatList=this.floatList.filter(n=>(n.t-=e,n.pos.y+=e*1.5,n.t<=0?(n.el.remove(),!1):(m.copy(n.pos).project(t),m.z>1?(n.el.style.display=`none`,!0):(n.el.style.display=`block`,n.el.style.transform=`translate(${(m.x*.5+.5)*innerWidth}px, ${(-m.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${Math.min(1.2,.6+n.t)})`,n.el.style.opacity=String(Math.min(1,n.t*2)),!0))));let h=n.combo;if(h.count>0){let e=`<div class="cx">×${h.mult}</div><div class="cl">CHAOS COMBO<br><b>${Math.round(h.pts).toLocaleString()}</b> <small>${h.last}</small></div><div class="cb"><i style="width:${Math.max(0,h.t/4)*100}%"></i></div>`;this.comboEl.innerHTML=e,this.comboEl.classList.add(`show`)}else this.comboEl.classList.remove(`show`);let g=f?f.def.kind===`plane`?f.planeSpeed:f.speed:Math.hypot(n.player.vel.x,n.player.vel.y,n.player.vel.z)*(n.player.ragdollT>0?1.3:.5);this.speedLines.style.opacity=String(Math.min(.75,Math.max(0,(g-28)/40))),this.drawMinimap()}flash(e=.6,t=`#fff`){let n=this.flashEl;n.style.transition=`none`,n.style.background=t,n.style.opacity=String(e),n.offsetWidth,n.style.transition=`opacity .35s ease-out`,n.style.opacity=`0`}bailCard(e){this.bailEl.innerHTML=e,this.bailEl.classList.add(`show`),clearTimeout(this._bc),this._bc=setTimeout(()=>this.bailEl.classList.remove(`show`),3200)}toast(e,t=``,n=``){for(let t of Array.from(this.toasts.children))(n&&t.dataset.k===n||t.innerHTML===e)&&t.remove();let r=Hf(`div`,`toast `+t,e);for(n&&(r.dataset.k=n),this.toasts.appendChild(r),setTimeout(()=>r.classList.add(`out`),2600),setTimeout(()=>r.remove(),3200);this.toasts.children.length>4;)this.toasts.firstChild.remove()}bigText(e,t=``,n=2.5,r=``){this.big.className=`bigtext show `+r,this.big.innerHTML=`<div class="bt">${e}</div>${t?`<div class="bs">${t}</div>`:``}`,this.bigT=n}vehiclePopup(e,t){this.popup.innerHTML=`<b>${e}</b><span>${t}</span>`,this.popup.classList.add(`show`),this.popT=3}hint(e){this.game.input.touch.active&&(e=e.replace(`<kbd>E</kbd>`,`tap <kbd>E</kbd> to`)),this.hintEl.innerHTML!==e&&(this.hintEl.innerHTML=e),this.hintEl.style.opacity=e?`1`:`0`}floatText(e,t,n=`#7CFC00`){let r=Hf(`div`,`ftext`,t);r.style.color=n,this.floats.appendChild(r),this.floatList.push({el:r,pos:e.clone(),t:1.4})}buildWheel(){let e=tf.length;tf.forEach((t,n)=>{let r=n/e*Math.PI*2-Math.PI/2,i=Hf(`div`,`wslot`,`<span class="wicon">${t.icon}</span><span class="wn">${t.name}</span>${t.key?`<i>${t.key}</i>`:``}${t.mod?`<em>MOD</em>`:``}`);i.style.left=`${50+Math.cos(r)*38}%`,i.style.top=`${50+Math.sin(r)*38}%`,i.dataset.idx=String(n),i.addEventListener(`click`,()=>{this.wheelSel=n,this.closeWheel(!0)}),this.wheel.appendChild(i)}),this.wheel.appendChild(Hf(`div`,`wcenter`,`WEAPON<br>WHEEL`))}wheelOpen(){return!this.wheel.classList.contains(`hidden`)}openWheel(){this.wheel.classList.remove(`hidden`),this.wheelVec.set(0,0),this.wheelSel=tf.indexOf(this.game.curWeapon),this.refreshWheel()}steerWheel(e,t){if(this.wheelVec.x+=e,this.wheelVec.y+=t,this.wheelVec.length()>40){this.wheelVec.setLength(40);let e=Math.atan2(this.wheelVec.y,this.wheelVec.x)+Math.PI/2,t=tf.length;this.wheelSel=(Math.round(e/(Math.PI*2)*t)%t+t)%t,this.refreshWheel()}}refreshWheel(){[...this.wheel.querySelectorAll(`.wslot`)].forEach((e,t)=>{e.classList.toggle(`sel`,t===this.wheelSel),e.classList.toggle(`locked`,!this.game.owned.includes(tf[t].id))})}closeWheel(e){this.wheelOpen()&&(this.wheel.classList.add(`hidden`),this.wheelSticky=!1,e&&this.game.equip(tf[this.wheelSel].id))}buildConsole(){this.consoleInput=document.createElement(`input`),this.consoleInput.placeholder=`Type a cheat code or HELP…  (Esc to close)`,this.consoleInput.spellcheck=!1,this.consoleInput.autocomplete=`off`,this.consoleEl.append(Hf(`div`,`chead`,`<b>MOD CONSOLE</b> v0.0.1-unstable`),this.consoleLog,this.consoleInput),this.consoleInput.addEventListener(`keydown`,e=>{if(e.stopPropagation(),e.key===`Enter`){let e=this.consoleInput.value.trim();if(this.consoleInput.value=``,!e)return;this.log(`&gt; `+e,`cmd`);for(let t of this.game.runConsole(e))this.log(t)}else(e.key===`Escape`||e.key==="`")&&(e.preventDefault(),this.closeConsole())}),this.log(`Welcome, modder. Type <b>HELP</b> for commands, <b>CHEATS</b> for the code list.`)}log(e,t=``){let n=Hf(`div`,t,e);for(this.consoleLog.appendChild(n),this.consoleLog.scrollTop=1e9;this.consoleLog.children.length>60;)this.consoleLog.firstChild.remove()}consoleOpen(){return!this.consoleEl.classList.contains(`hidden`)}openConsole(){this.consoleEl.classList.remove(`hidden`),this.game.input.blockKeys=!0,this.game.input.keys.clear(),document.exitPointerLock?.(),setTimeout(()=>this.consoleInput.focus(),0)}closeConsole(){this.consoleEl.classList.add(`hidden`),this.game.input.blockKeys=!1,this.consoleInput.blur()}showCharSelect(e,t,n){this.charSel.innerHTML=``,this.charSel.appendChild(Hf(`div`,`ctitle`,`PICK YOUR CHAOS AGENT`));let r=Hf(`div`,`cgrid`);Dd.forEach(i=>{let a=Hf(`div`,`ccard`+(i.id===n?` cur`:``),`<img src="${e[i.id]||``}" alt=""><b>${i.name}</b><span>${i.tag}</span><em>★ ${i.perkText}</em><i class="cq">“${Af[i.id]?.entrance||``}”</i>`);a.dataset.id=i.id,a.addEventListener(`click`,()=>{this.charSel.classList.add(`hidden`),t(i.id)}),r.appendChild(a)}),this.charSel.appendChild(r),this.charSel.classList.remove(`hidden`),document.exitPointerLock?.()}buildControls(){let e=`ontouchstart`in window;this.controls.innerHTML=`<div class="panel"><h2>CONTROLS</h2>
      <div class="cols"><div><h3>On foot</h3>
      <p><kbd>WASD</kbd> move · <kbd>Shift</kbd> run · <kbd>Space</kbd> jump</p>
      <p><kbd>Mouse</kbd> look · <kbd>LMB</kbd> punch / shoot</p>
      <p><kbd>1</kbd>–<kbd>0</kbd> / <kbd>Wheel</kbd> / <kbd>Q</kbd> weapons · hold <kbd>Tab</kbd> weapon wheel</p>
      <p><kbd>E</kbd> enter / exit / steal vehicle</p>
      <p><kbd>B</kbd> <b>BAIL</b> — ragdoll on purpose for style points (works mid-drive too)</p>
      <p><kbd>T</kbd> character emote · <kbd>R</kbd> <b>INSTANT REPLAY</b> (last 15 s, save as video)</p></div>
      <div><h3>Driving</h3>
      <p><kbd>W</kbd>/<kbd>S</kbd> gas / brake-reverse · <kbd>A</kbd>/<kbd>D</kbd> steer</p>
      <p><kbd>Space</kbd> handbrake (drift!) · <kbd>H</kbd> horn · <kbd>N</kbd> radio station · upside-down? <kbd>Space</kbd> to flip back</p>
      <h3>Flying</h3>
      <p>Heli / Couch: <kbd>Space</kbd> up · <kbd>Shift</kbd> down · <kbd>W</kbd>/<kbd>S</kbd> tilt · <kbd>A</kbd>/<kbd>D</kbd> turn</p>
      <p>Plane: <kbd>W</kbd> throttle · <kbd>S</kbd> brake · <kbd>Space</kbd> nose up · <kbd>Shift</kbd> nose down · <kbd>A</kbd>/<kbd>D</kbd> bank</p></div>
      <div><h3>Mods</h3>
      <p><kbd>\`</kbd> or <kbd>Enter</kbd> cheat console (or just type a code while playing)</p>
      <p>Chain smashes, flips and bails within 4s to build the <b>CHAOS COMBO</b> (up to ×10).</p>
      <p><kbd>V</kbd> change character · <kbd>F1</kbd>/<kbd>?</kbd> this screen · <kbd>Esc</kbd> pause (sound toggle lives there)</p>
      <p>Glowing rings = <b>stunt challenges</b> & <b>side gigs</b>. Pause → <b>Contracts</b> for today's chaos contracts.</p>
      <p class="tip">Try typing <b>CLIPFARM</b>. Or don't. We're not your mom.</p></div></div>
      ${e?`<p class="tip">Touch: left stick moves/steers, drag right side to look, buttons for fire / jump / enter.</p>`:``}
      <button type="button" class="btn">LET'S GO</button></div>`,this.controls.querySelector(`button`).addEventListener(`click`,()=>this.toggleControls(!1))}toggleControls(e){let t=e??this.controls.classList.contains(`hidden`);this.controls.classList.toggle(`hidden`,!t),t&&document.exitPointerLock?.()}buildPause(){this.pause.innerHTML=`<div class="panel small"><h2>PAUSED</h2>
      <button type="button" class="btn" data-a="resume">Resume</button>
      <button type="button" class="btn alt" data-a="chars">Change character</button>
      <button type="button" class="btn alt" data-a="controls">Controls</button>
      <button type="button" class="btn alt" data-a="cheats">Cheat list</button>
      <button type="button" class="btn alt" data-a="quality">Graphics: <span class="qv"></span></button>
      <button type="button" class="btn alt" data-a="contracts">📋 Chaos contracts</button>
      <button type="button" class="btn alt" data-a="booth">📻 DJ booth</button>
      <button type="button" class="btn alt" data-a="voice">Radio voices: <span class="vv"></span></button>
      <button type="button" class="btn alt" data-a="secrets">🔍 Secrets</button>
      <button type="button" class="btn alt" data-a="mute">Toggle sound</button><p class="tip ptip"></p></div>`,this.pause.querySelectorAll(`button`).forEach(e=>e.addEventListener(`click`,()=>this.game.pauseAction(e.dataset.a)))}showPause(e){this.pause.classList.toggle(`hidden`,!e);let t=this.pause.querySelector(`.qv`);t&&(t.textContent=String(this.game.quality?.level||``).toUpperCase());let n=this.pause.querySelector(`.vv`);n&&(n.textContent={tts:`SPEECH`,bleep:`BLEEPS`,off:`OFF`}[this.game.radio?.voice]||``);let r=this.pause.querySelector(`.ptip`);r&&e&&(r.innerHTML=`TIP: `+q(Lf)),e||this.game.pers?.panel.classList.add(`hidden`),e&&document.exitPointerLock?.()}menuOpen(){return!this.charSel.classList.contains(`hidden`)||!this.controls.classList.contains(`hidden`)||!this.pause.classList.contains(`hidden`)||!this.title.classList.contains(`hidden`)||!(!this.game.pers||this.game.pers.panel.classList.contains(`hidden`))}clearTransient(){this.toasts.querySelectorAll(`[data-k]`).forEach(e=>e.remove()),this.bailEl.classList.remove(`show`),this.big.classList.remove(`show`),this.bigT=0,this.popup.classList.remove(`show`),this.popT=0;for(let e of this.floatList)e.el.remove();this.floatList.length=0}anyOverlay(){return!this.charSel.classList.contains(`hidden`)||!this.controls.classList.contains(`hidden`)||!this.pause.classList.contains(`hidden`)||!this.title.classList.contains(`hidden`)||this.consoleOpen()}showTitle(e){this.title.innerHTML=`<div class="tlogo"><div class="t1">COSTA</div><div class="t2">CHAOS</div><div class="t3">MODDED EDITION</div></div>
      <div class="modlist"><div class="mh">Loading mods…</div></div><div class="ttip"></div><button type="button" class="btn big" disabled>PRESS PLAY</button>
      <div class="legal">An original sandbox. Not affiliated with any game, studio, or real city.</div>`;let t=this.title.querySelector(`.modlist`),n=this.title.querySelector(`button`);Uf.forEach((e,r)=>setTimeout(()=>{t.appendChild(Hf(`div`,`mod`,`✔ ${e}`)),r===Uf.length-1&&(t.querySelector(`.mh`).textContent=`${Uf.length} mods loaded. 0 tested.`,n.disabled=!1)},90*r));let r=this.title.querySelector(`.ttip`),i=()=>{this.title.classList.contains(`hidden`)||(r.innerHTML=`LOADING TIP: `+q(Lf),setTimeout(i,3500))};i(),n.addEventListener(`click`,t=>{t.preventDefault(),n.disabled||(n.disabled=!0,this.title.classList.add(`hidden`),e())})}buildTouch(){if(!(`ontouchstart`in window))return;this.touchUI.classList.remove(`hidden`);let e=this.game.input.touch,t=Hf(`div`,`stick`),n=Hf(`div`,`knob`);t.appendChild(n);let r=Hf(`div`,`lookpad`),i=(e,t,n,r)=>{let i=Hf(`div`,`tbtn `+t,e);return i.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),n()},{passive:!1}),i.addEventListener(`touchend`,e=>{e.preventDefault(),r?.()},{passive:!1}),i},a=this.game;this.touchUI.append(r,t,i(`FIRE`,`fire`,()=>{e.fire=!0,a.input.mouseClicked=!0},()=>e.fire=!1),i(`▲`,`jump`,()=>e.jump=!0,()=>e.jump=!1),i(`▼`,`down`,()=>e.down=!0,()=>e.down=!1),i(`E`,`enter`,()=>a.input.pressed.add(`KeyE`)),i(`BAIL`,`bail`,()=>a.input.pressed.add(`KeyB`)),i(`🔫`,`wnext`,()=>a.cycleWeapon(1)),i(`◎`,`wheelbtn`,()=>{this.wheelOpen()?this.closeWheel(!1):(this.wheelSticky=!0,this.openWheel())}),i(`☰`,`menu`,()=>a.togglePause()),i(`⌨`,`cheat`,()=>this.openConsole()),i(`⏪`,`replaybtn`,()=>a.input.pressed.add(`KeyR`)),i(`🎭`,`emotebtn`,()=>a.pers.emote()),i(`📻`,`radiobtn`,()=>a.radio.next(!!a.player.vehicle?.flipped)));let o=null,s=0,c=0;t.addEventListener(`touchstart`,e=>{e.preventDefault(),o=e.changedTouches[0].identifier;let n=t.getBoundingClientRect();s=n.left+n.width/2,c=n.top+n.height/2},{passive:!1}),window.addEventListener(`touchmove`,t=>{for(let r of Array.from(t.changedTouches))if(r.identifier===o){let t=(r.clientX-s)/50,i=(r.clientY-c)/50,a=Math.hypot(t,i);a>1&&(t/=a,i/=a),e.mx=t,e.my=-i,e.run=a>.9,n.style.transform=`translate(${t*40}px, ${i*40}px)`}},{passive:!1});let l=t=>{for(let r of Array.from(t.changedTouches))r.identifier===o&&(o=null,e.mx=e.my=0,e.run=!1,n.style.transform=``)};window.addEventListener(`touchend`,l),window.addEventListener(`touchcancel`,l);let u=null,d=0,f=0;r.addEventListener(`touchstart`,e=>{let t=e.changedTouches[0];u=t.identifier,d=t.clientX,f=t.clientY},{passive:!0}),r.addEventListener(`touchmove`,t=>{a.input.lastMouseMove=performance.now();for(let n of Array.from(t.changedTouches))n.identifier===u&&(e.lookX+=(n.clientX-d)*2,e.lookY+=(n.clientY-f)*2,d=n.clientX,f=n.clientY)},{passive:!0}),r.addEventListener(`touchend`,()=>u=null),e.active=!0,document.addEventListener(`touchend`,()=>a.audio.init(),{once:!0})}};function Kf(e,t,n){let r=n+Math.PI;return e*Math.cos(r)-t*Math.sin(r)}function qf(e,t,n){let r=n+Math.PI;return e*Math.sin(r)+t*Math.cos(r)}var Jf=()=>Sf.map(e=>`<b>${e.code}</b> — ${e.desc}`),Yf=class e{typingCheat(){let e=this.typed.join(``);for(let t=Math.min(e.length,24);t>=2;t--)if(this.isCodePrefix(e.slice(-t)))return!0;return!1}flushPending(e=performance.now()){this.pending=this.pending.filter(t=>e-t.t>=160?(e>this.typingUntil&&this.pressed.add(t.code),!1):!0)}constructor(t){Q(this,`el`,void 0),Q(this,`keys`,new Set),Q(this,`pressed`,new Set),Q(this,`mdx`,0),Q(this,`mdy`,0),Q(this,`mouseDown`,!1),Q(this,`mouseClicked`,!1),Q(this,`rmb`,!1),Q(this,`wheel`,0),Q(this,`locked`,!1),Q(this,`lastMouseMove`,0),Q(this,`typed`,[]),Q(this,`blockKeys`,!1),Q(this,`pending`,[]),Q(this,`typingUntil`,0),Q(this,`isCodePrefix`,()=>!1),Q(this,`touch`,{active:!1,mx:0,my:0,lookX:0,lookY:0,fire:!1,jump:!1,down:!1,run:!1}),this.el=t,window.addEventListener(`keydown`,t=>{if(this.blockKeys)return;[`Tab`,`Enter`,`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`F1`].includes(t.code)&&t.preventDefault();let n=!this.keys.has(t.code);this.keys.add(t.code),t.key.length===1&&/[a-z]/i.test(t.key)&&n&&(this.typed.push(t.key.toUpperCase()),this.typed.length>24&&this.typed.shift(),this.typingCheat())?(this.pending.length=0,this.typingUntil=performance.now()+300):n&&(e.ACTION_KEYS.has(t.code)?performance.now()>this.typingUntil&&this.pending.push({code:t.code,t:performance.now()}):this.pressed.add(t.code))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>{this.keys.clear(),this.mouseDown=!1}),t.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0,this.mouseClicked=!0),e.button===2&&(this.rmb=!0)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1),e.button===2&&(this.rmb=!1)}),t.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`mousemove`,e=>{this.locked&&(this.mdx+=e.movementX,this.mdy+=e.movementY,this.lastMouseMove=performance.now())}),window.addEventListener(`wheel`,e=>{this.wheel+=Math.sign(e.deltaY)},{passive:!0}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===t})}lock(){!this.locked&&!(`ontouchstart`in window)&&this.el.requestPointerLock?.()?.catch?.(()=>{})}down(...e){return e.some(e=>this.keys.has(e))}hit(...e){return e.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.mdx=0,this.mdy=0,this.mouseClicked=!1,this.wheel=0,this.touch.lookX=0,this.touch.lookY=0}};Q(Yf,`ACTION_KEYS`,new Set([`KeyE`,`KeyF`,`KeyQ`,`KeyH`,`KeyV`,`KeyB`,`KeyR`,`KeyG`,`KeyT`,`KeyN`]));var Xf=class{constructor(){Q(this,`ctx`,null),Q(this,`master`,void 0),Q(this,`muted`,!1),Q(this,`engine`,null),Q(this,`siren`,null),Q(this,`noiseBuf`,void 0)}init(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(t.destination),this.noiseBuf=t.createBuffer(1,t.sampleRate,t.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;let r=t.createOscillator(),i=t.createOscillator(),a=t.createGain();r.type=`sawtooth`,i.type=`square`,r.frequency.value=50,i.frequency.value=25,a.gain.value=0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=600,r.connect(o),i.connect(o),o.connect(a),a.connect(this.master),r.start(),i.start(),this.engine={osc:r,gain:a,osc2:i};let s=t.createOscillator(),c=t.createGain();s.type=`triangle`,s.frequency.value=700,c.gain.value=0,s.connect(c),c.connect(this.master),s.start(),this.siren={osc:s,gain:c}}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.5)}noise(e,t,n,r=`lowpass`,i){let a=this.ctx;if(!a)return;let o=a.createBufferSource();o.buffer=this.noiseBuf;let s=a.createBiquadFilter();s.type=r,s.frequency.value=t,i&&s.frequency.exponentialRampToValueAtTime(i,a.currentTime+e);let c=a.createGain();c.gain.setValueAtTime(n,a.currentTime),c.gain.exponentialRampToValueAtTime(.001,a.currentTime+e),o.connect(s),s.connect(c),c.connect(this.master),o.start(),o.stop(a.currentTime+e)}tone(e,t,n,r=`square`,i,a=0){let o=this.ctx;if(!o)return;let s=o.currentTime+a,c=o.createOscillator();c.type=r,c.frequency.setValueAtTime(e,s),i&&c.frequency.exponentialRampToValueAtTime(i,s+t);let l=o.createGain();l.gain.setValueAtTime(n,s),l.gain.exponentialRampToValueAtTime(.001,s+t),c.connect(l),l.connect(this.master),c.start(s),c.stop(s+t+.02)}play(e,t=1){if(this.ctx&&!this.muted)switch(t=Math.min(1,Math.max(.05,t)),e){case`pistol`:this.noise(.18,2500,.5*t,`lowpass`,300),this.tone(180,.08,.2*t,`square`,60);break;case`smg`:this.noise(.08,3e3,.35*t,`lowpass`,500);break;case`shotgun`:this.noise(.4,1800,.8*t,`lowpass`,120);break;case`confetti`:this.tone(900+Math.random()*600,.05,.12*t,`triangle`),this.noise(.05,5e3,.12*t,`highpass`);break;case`boom`:this.noise(1.4,900,1*t,`lowpass`,40),this.tone(70,.8,.6*t,`sine`,25);break;case`punch`:this.noise(.1,600,.6*t),this.tone(120,.08,.3*t,`sine`,50);break;case`whoosh`:this.noise(.3,400,.4*t,`bandpass`,2400);break;case`crash`:this.noise(.35,1400,.7*t,`lowpass`,200),this.tone(90,.25,.3*t,`square`,40);break;case`horn`:this.tone(392,.45,.18*t,`square`),this.tone(330,.45,.18*t,`square`);break;case`cash`:this.tone(1318,.08,.2,`square`),this.tone(1760,.18,.2,`square`,void 0,.07);break;case`cheat`:[523,659,784,1047].forEach((e,t)=>this.tone(e,.14,.18,`square`,void 0,t*.08));break;case`bawk`:this.tone(700,.12,.3,`sawtooth`,1400),this.tone(900,.2,.3,`sawtooth`,500,.12);break;case`pop`:this.tone(500,.1,.25,`sine`,1500);break;case`yoink`:this.tone(200,.35,.25,`sine`,1200);break;case`yeet`:this.tone(1200,.3,.25,`sawtooth`,150),this.noise(.3,800,.3,`bandpass`,3e3);break;case`scream`:this.tone(600+Math.random()*400,.35,.08,`sawtooth`,900+Math.random()*300);break;case`hurt`:this.tone(220,.2,.25,`sawtooth`,110);break;case`door`:this.noise(.12,900,.4);break;case`star`:this.tone(880,.1,.2,`square`),this.tone(660,.2,.2,`square`,void 0,.1);break;case`stunt`:[392,523,659,784,1047].forEach((e,t)=>this.tone(e,.1,.15,`triangle`,void 0,t*.06));break;case`ding`:this.tone(1568,.25,.18,`sine`),this.tone(1568,.3,.18,`sine`,void 0,.16);break;case`accordion`:[262,330,392].forEach(e=>{this.tone(e,.5,.07,`sawtooth`),this.tone(e*1.006,.5,.05,`sawtooth`)});break;case`whistle`:this.tone(2600,.12,.12,`sine`,2900),this.tone(2600,.3,.12,`sine`,2400,.14);break;case`squeak`:this.tone(1200,.12,.2,`square`,1800),this.tone(1700,.16,.18,`square`,900,.12);break;case`flush`:this.noise(1.2,3e3,.4,`bandpass`,300);break;case`coin`:this.tone(1976,.06,.12,`square`),this.tone(2637,.15,.12,`square`,void 0,.05);break;case`munch`:for(let e=0;e<3;e++)this.noise(.06,900,.25,`bandpass`,400);break;case`kazoo`:[392,440,523].forEach((e,t)=>this.tone(e,.18,.1,`sawtooth`,e*1.03,t*.15));break;case`babble`:this.tone(180+Math.random()*260,.07,.07*t,`square`,140+Math.random()*300);break;case`sting`:[523,659,784,1046,784].forEach((e,t)=>this.tone(e,.12,.12,t%2?`square`:`triangle`,void 0,t*.07));break;case`trombone`:[392,370,349,262].forEach((e,t)=>this.tone(e,t===3?.7:.28,.12,`sawtooth`,t===3?240:void 0,t*.3));break;case`rewind`:this.tone(1600,.45,.12,`sawtooth`,200),this.noise(.45,2e3,.2,`bandpass`,500);break;case`blip`:this.tone(1200,.05,.1,`square`),this.tone(600,.05,.08,`square`,void 0,.05);break;case`splash`:this.noise(.6,1500,.5,`highpass`,300)}}update(e,t,n,r){if(!this.ctx||!this.engine)return;let i=this.engine,a=this.ctx.currentTime;i.gain.gain.setTargetAtTime(e&&!this.muted?.07:0,a,.1),i.osc.frequency.setTargetAtTime(45+t*160,a,.05),i.osc2.frequency.setTargetAtTime(22+t*80,a,.05),this.siren&&(this.siren.gain.gain.setTargetAtTime(n&&!this.muted?.035:0,a,.2),this.siren.osc.frequency.setTargetAtTime(Math.sin(r*5)>0?960:720,a,.02))}},Zf=e=>440*2**((e-69)/12),Qf=class{constructor(e){Q(this,`game`,void 0),Q(this,`station`,0),Q(this,`on`,!0),Q(this,`secret`,!1),Q(this,`voice`,`tts`),Q(this,`el`,void 0),Q(this,`stEl`,void 0),Q(this,`lnEl`,void 0),Q(this,`bus`,null),Q(this,`nextT`,0),Q(this,`step`,0),Q(this,`bar`,0),Q(this,`lineT`,0),Q(this,`fillerT`,12),Q(this,`pending`,[]),Q(this,`lastKindT`,{}),Q(this,`babbleT`,0),Q(this,`babbleLeft`,0),Q(this,`audible`,!1),Q(this,`wasAudible`,!1),Q(this,`now`,0),Q(this,`vol`,null),Q(this,`patterns`,{bleep:(e,t,n)=>{let r=57+[0,-4,3,-2][n%4];this.note(e,Zf(r+12+[0,3,7,10,12,10,7,3][(t+n)%8]),.09,.022,`square`),t%4==0&&(this.note(e,Zf(r-12),.2,.06,`triangle`),this.kick(e,t%8==0?.25:.12)),t%2==1&&this.hat(e,.03),n%2==1&&(t===6||t===14)&&this.note(e,Zf(r+24+(t===6?7:5)),.15,.015,`square`)},honk:(e,t,n)=>{let r=48+[0,5,7,0][n%4];if(t%8==0&&this.note(e,Zf(r),.16,.08,`square`),t%8==4&&this.note(e,Zf(r+7),.16,.06,`square`),t%4==2){for(let t of[12,16,19])this.note(e,Zf(r+t),.1,.018,`sawtooth`);this.hat(e,.05)}t%2==0&&this.note(e,Zf(r+12+[12,14,16,17,19,17,16,14][((t>>1)+n*3)%8]),.12,.02,`sawtooth`),n%8==7&&t%2==0&&this.note(e,t%4?880:660,.1,.02,`square`),t%4==0&&this.kick(e,.2)},smooth:(e,t,n)=>{let r=50+[0,5,-2,3][n%4];if(t===0)for(let t of[12,16,19,23])this.note(e,Zf(r+t),1.9,.016,`triangle`);t%4==0&&this.note(e,Zf(r+[0,7,9,4][t/4]),.45,.07,`sine`),t%4==2&&this.hat(e,.015),n%2==1&&(t===4||t===7||t===10)&&this.note(e,Zf(r+24+[4,7,11][[4,7,10].indexOf(t)]),.5,.02,`sine`)},void:(e,t,n)=>{t===0&&n%2==0&&this.note(e,55,4,.06,`sine`),Math.random()<.08&&this.note(e,1200+Math.random()*2e3,.3,.01,`sine`)}}),this.game=e;let t=localStorage.getItem(`cc-voice`);(t===`tts`||t===`bleep`||t===`off`)&&(this.voice=t),!(`speechSynthesis`in window)&&this.voice===`tts`&&(this.voice=`bleep`),this.el=document.createElement(`div`),this.el.className=`radio`,this.stEl=document.createElement(`div`),this.stEl.className=`rs`,this.lnEl=document.createElement(`div`),this.lnEl.className=`rl`,this.el.append(this.stEl,this.lnEl)}get host(){return this.secret?Ef:Tf[this.station]}cycleVoice(){return this.voice=this.voice===`tts`?`bleep`:this.voice===`bleep`?`off`:`speechSynthesis`in window?`tts`:`bleep`,localStorage.setItem(`cc-voice`,this.voice),this.voice}next(e=!1){this.stopSpeech(),e&&!this.secret?(this.secret=!0,this.on=!0,this.game.pers?.secret(`void`,`Tuned to <b>0.0 THE VOID</b>. It was listening.`)):this.secret?(this.secret=!1,this.station=0,this.on=!0):this.on?this.station===Tf.length-1?this.on=!1:this.station++:(this.on=!0,this.station=0),this.game.sfx(`blip`),this.on?this.say(q(this.lines(`intro`)),2.6):this.show(`RADIO OFF`,``,1.5)}lines(e){return(Df[this.host.id]||Df.bleep)[e]||Df.bleep[e]||Df.bleep.filler}react(e,t=!1){let n=this.now;(this.lastKindT[e]??-99)>n-8&&!t||(this.lastKindT[e]=n,this.audible||t?(this.lineT<.6||t)&&this.say(q(this.lines(e)),2.8):(this.pending.push({kind:e,t:n}),this.pending.length>3&&this.pending.shift()))}say(e,t=2.8,n=this.host){if(this.show(`📻 ${n.freq} ${n.name} · ${n.host}`,e,t),this.stopSpeech(),this.voice===`tts`&&`speechSynthesis`in window&&!this.game.audio.muted)try{let t=new SpeechSynthesisUtterance(e.replace(/<[^>]+>/g,``));t.pitch=n.pitch,t.rate=n.rate*1.1,t.volume=.9,speechSynthesis.speak(t)}catch{}else this.voice===`bleep`&&(this.babbleLeft=Math.min(28,Math.ceil(e.length/2.5)),this.babbleT=0);this.bus&&this.game.audio.ctx&&this.bus.gain.setTargetAtTime(.25,this.game.audio.ctx.currentTime,.05)}stopSpeech(){try{`speechSynthesis`in window&&speechSynthesis.cancel()}catch{}this.babbleLeft=0}show(e,t,n){this.stEl.innerHTML=e,this.lnEl.textContent=t,this.lineT=n,this.el.classList.add(`show`),this.el.style.setProperty(`--rc`,this.host.color)}update(e,t){if(this.now+=e,this.audible=t&&this.on&&!this.game.audio.muted,this.audible&&!this.wasAudible){let e=this.pending.filter(e=>this.now-e.t<15).pop();this.pending.length=0,e?this.say(q(this.lines(e.kind)),2.8):this.say(q(this.lines(`intro`)),2.4),this.fillerT=14+Math.random()*10}!this.audible&&this.wasAudible&&this.stopSpeech(),this.wasAudible=this.audible,this.lineT>0&&(this.lineT-=e,this.lineT<=0&&(this.lnEl.textContent=``,this.bus&&this.game.audio.ctx&&this.bus.gain.setTargetAtTime(1,this.game.audio.ctx.currentTime,.3))),this.el.classList.toggle(`show`,this.audible||this.lineT>0),this.audible&&this.lineT<=0&&(this.stEl.innerHTML=`📻 ${this.host.freq} ${this.host.name} <small>${this.host.genre}</small>`),this.audible&&(this.fillerT-=e,this.fillerT<=0&&(this.fillerT=20+Math.random()*15,this.say(Math.random()<.45&&!this.secret?`AD: `+q(Of):q(this.lines(`filler`)),3))),this.babbleLeft>0&&(this.babbleT-=e,this.babbleT<=0&&(this.babbleT=.085+Math.random()*.05,this.babbleLeft--,this.game.audio.play(`babble`,this.host.pitch))),this.music()}music(){let e=this.game.audio,t=e.ctx;if(!t)return;if(this.bus||(this.bus=t.createGain(),this.bus.gain.value=1,this.vol=t.createGain(),this.vol.gain.value=0,this.bus.connect(this.vol),this.vol.connect(e.master)),this.vol.gain.setTargetAtTime(+!!this.audible,t.currentTime,.15),!this.audible){this.nextT=t.currentTime+.05;return}let n=this.secret?`void`:Tf[this.station].id,r=60/(n===`honk`?168:n===`smooth`?84:n===`void`?50:140)/4;for(this.nextT<t.currentTime-.2&&(this.nextT=t.currentTime+.05);this.nextT<t.currentTime+.2;)(this.patterns[n]||this.patterns.bleep)(this.nextT,this.step%16,this.bar),this.nextT+=r,this.step++,this.step%16==0&&this.bar++}note(e,t,n,r,i){let a=this.game.audio.ctx,o=a.createOscillator(),s=a.createGain();o.type=i,o.frequency.value=t,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(r,e+.01),s.gain.exponentialRampToValueAtTime(.001,e+n),o.connect(s),s.connect(this.bus),o.start(e),o.stop(e+n+.02)}hat(e,t){let n=this.game.audio,r=n.ctx,i=n.noiseBuf;if(!i)return;let a=r.createBufferSource();a.buffer=i;let o=r.createBiquadFilter();o.type=`highpass`,o.frequency.value=7e3;let s=r.createGain();s.gain.setValueAtTime(t,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),a.connect(o),o.connect(s),s.connect(this.bus),a.start(e,Math.random()*.5),a.stop(e+.06)}kick(e,t){let n=this.game.audio.ctx,r=n.createOscillator(),i=n.createGain();r.frequency.setValueAtTime(140,e),r.frequency.exponentialRampToValueAtTime(40,e+.12),i.gain.setValueAtTime(t,e),i.gain.exponentialRampToValueAtTime(.001,e+.15),r.connect(i),i.connect(this.bus),r.start(e),r.stop(e+.16)}},$f=15,ep=225,tp=17,np=[`boom`,`confetti`,`sparks`,`dust`,`splash`,`feathers`,`hit`],rp=new Ct,ip=new Ct,ap=new V,op=new V,sp=new V,cp=class{constructor(e){Q(this,`game`,void 0),Q(this,`punchKind`,``),Q(this,`frames`,[]),Q(this,`acc`,0),Q(this,`events`,[]),Q(this,`fxLog`,[]),Q(this,`playing`,!1),Q(this,`mode`,`full`),Q(this,`shots`,[]),Q(this,`si`,0),Q(this,`rt`,0),Q(this,`st`,0),Q(this,`live`,new Map),Q(this,`liveVis`,new Map),Q(this,`liveProps`,new Map),Q(this,`union`,[]),Q(this,`propTrack`,new Map),Q(this,`ui`,void 0),Q(this,`label`,void 0),Q(this,`sub`,void 0),Q(this,`saveBtn`,void 0),Q(this,`rec`,null),Q(this,`chunks`,[]),Q(this,`comp`,null),Q(this,`cctx`,null),Q(this,`exporting`,!1),Q(this,`stingText`,``),Q(this,`camAngle`,0),Q(this,`fxCursor`,0),Q(this,`focus`,new V),Q(this,`camPos`,new V),Q(this,`camQ`,new Ct),Q(this,`camFov`,65),this.game=e;let t=e.fx;for(let n of np){let r=t[n].bind(t);t[n]=(...t)=>(this.playing||this.fxLog.push({t:e.elapsed,name:n,args:t.map(e=>e&&e.clone?e.clone():e)}),r(...t))}this.ui=document.createElement(`div`),this.ui.className=`replayui hidden`,this.ui.innerHTML=`<div class="lb top"></div><div class="lb bot"></div><div class="rtag">⏪ INSTANT REPLAY</div><div class="rcam"></div><div class="rsub"></div><div class="rskip">R / Esc / tap to skip</div>`,this.saveBtn=document.createElement(`button`),this.saveBtn.className=`btn rsave`,this.saveBtn.textContent=`⬇ SAVE CLIP`,this.saveBtn.addEventListener(`click`,e=>{e.stopPropagation(),this.exportClip()}),this.saveBtn.addEventListener(`touchstart`,e=>{e.stopPropagation()},{passive:!0}),this.ui.appendChild(this.saveBtn),this.ui.addEventListener(`click`,()=>{this.exporting||this.stop()}),this.label=this.ui.querySelector(`.rcam`),this.sub=this.ui.querySelector(`.rsub`),document.getElementById(`app`).appendChild(this.ui),typeof MediaRecorder<`u`&&HTMLCanvasElement.prototype.captureStream||(this.saveBtn.style.display=`none`)}event(e,t){this.playing||this.events.push({t:this.game.elapsed,kind:e,score:t})}record(e){if(this.playing||(this.acc+=e,this.acc<1/$f))return;this.acc=0;let t=this.game,n=t.playerFocus(),r=t.camera,i=this.frames[this.frames.length-1];i&&i.focus.distanceToSquared(n)>6400&&(this.frames.length=0,this.events=this.events.filter(e=>e.t>t.elapsed));let a=[],o=[];a.push(t.player.model.root),o.push(t.player.model);for(let e of t.vehicles)e.pos.distanceToSquared(n)<19600&&(a.push(e.mesh),o.push(null));for(let e of t.peds)e.pos.distanceToSquared(n)<6400&&(a.push(e.model.root),o.push(e.model));let s=new Float32Array(a.length*tp);a.forEach((e,t)=>{let n=t*tp;s[n]=e.position.x,s[n+1]=e.position.y,s[n+2]=e.position.z,s[n+3]=e.quaternion.x,s[n+4]=e.quaternion.y,s[n+5]=e.quaternion.z,s[n+6]=e.quaternion.w,s[n+7]=+!!e.visible;let r=o[t];r?(s[n+8]=r.armL.rotation.x,s[n+9]=r.armL.rotation.z,s[n+10]=r.armR.rotation.x,s[n+11]=r.armR.rotation.z,s[n+12]=r.legL.rotation.x,s[n+13]=r.legR.rotation.x,s[n+14]=r.body.position.y,s[n+15]=r.body.rotation.x,s[n+16]=[`neutral`,`grin`,`shout`,`angry`,`smug`].indexOf(r.expr)):s[n+16]=-1});let c=[];for(let e of t.props.list)e.state!==`static`&&e.state!==`dead`&&e.pos.distanceToSquared(n)<4900&&c.push(e);let l=new Float32Array(c.length*7);c.forEach((e,t)=>{let n=t*7;l[n]=e.pos.x,l[n+1]=e.pos.y,l[n+2]=e.pos.z,l[n+3]=e.quat.x,l[n+4]=e.quat.y,l[n+5]=e.quat.z,l[n+6]=e.quat.w}),this.frames.push({t:t.elapsed,cam:[r.position.x,r.position.y,r.position.z,r.quaternion.x,r.quaternion.y,r.quaternion.z,r.quaternion.w,r.fov],focus:n.clone(),objs:a,data:s,props:c,pdata:l}),this.frames.length>ep&&this.frames.shift();let u=this.frames[0].t;for(;this.events.length&&this.events[0].t<u;)this.events.shift();for(;this.fxLog.length&&this.fxLog[0].t<u;)this.fxLog.shift();this.fxLog.length>600&&this.fxLog.splice(0,this.fxLog.length-600)}play(e=`full`){if(this.playing)return!1;if(this.frames.length<30)return this.game.hud.toast(`Nothing to replay yet. Go do something regrettable.`),!1;let t=this.frames,n=t[t.length-1].t,r=t[0].t;e===`fail`&&(r=Math.max(r,n-4.5));let i=n-2,a=0;this.punchKind=``;for(let e of this.events)e.t>=r&&e.score>=a&&(a=e.score,i=e.t,this.punchKind=e.kind);this.punchKind===`cannon`&&(i+=.5),i=Math.min(Math.max(i,r+1),n-.5);let o=[];if(e===`fail`?(o.push({name:`FAIL CAM · SLOW-MO`,t0:r,t1:i-.4,speed:1.2,cam:`low`}),o.push({name:`FAIL CAM · SLOW-MO`,t0:i-.4,t1:Math.min(n,i+2),speed:.35,cam:`orbit`,sting:!0})):(i-3>r+.5&&o.push({name:`CAM 1 · AS IT HAPPENED`,t0:r,t1:i-3,speed:1.5,cam:`chase`}),o.push({name:`CAM 2 · LOW ANGLE`,t0:Math.max(r,i-3),t1:i-.6,speed:1,cam:`low`}),o.push({name:`CAM 3 · SLOW-MO`,t0:i-.6,t1:Math.min(n,i+1.8),speed:.3,cam:`orbit`,sting:!0}),n>i+1.9&&o.push({name:`CAM 4 · NEWS CHOPPER`,t0:i+1.8,t1:Math.min(n,i+4.5),speed:1,cam:`heli`})),this.shots=o.filter(e=>e.t1>e.t0+.1),!this.shots.length)return!1;this.mode=e,this.playing=!0,this.si=0,this.rt=this.shots[0].t0,this.st=0,this.camAngle=Math.random()*6,this.fxCursor=this.fxLog.findIndex(e=>e.t>=this.rt),this.fxCursor<0&&(this.fxCursor=this.fxLog.length);let s=this.game;this.live.clear(),this.liveVis.clear(),this.liveProps.clear();let c=new Set;for(let e of t)for(let t of e.objs)c.add(t);this.union=[...c];for(let e of this.union)this.live.set(e,new Float32Array([e.position.x,e.position.y,e.position.z,e.quaternion.x,e.quaternion.y,e.quaternion.z,e.quaternion.w])),this.liveVis.set(e,e.visible);this.propTrack.clear(),t.forEach((e,n)=>e.props.forEach((r,i)=>{let a=this.propTrack.get(r);a||(a=new Float32Array(t.length*8),this.propTrack.set(r,a)),a.set(e.pdata.subarray(i*7,i*7+7),n*8),a[n*8+7]=1}));for(let[e,n]of this.propTrack){this.liveProps.set(e,new Float32Array([e.pos.x,e.pos.y,e.pos.z,e.quat.x,e.quat.y,e.quat.z,e.quat.w]));let r=-1;for(let e=0;e<t.length;e++)if(n[e*8+7]){r=e;break}for(let e=0;e<t.length;e++){if(n[e*8+7])continue;let t=e<r?r:e-1;n.copyWithin(e*8,t*8,t*8+8)}}return s.hud.root.classList.add(`replaying`),this.ui.classList.remove(`hidden`),this.ui.classList.toggle(`fail`,e===`fail`),this.ui.querySelector(`.rtag`).textContent=e===`fail`?`💀 FAIL CAM`:`⏪ INSTANT REPLAY`,this.sub.textContent=``,this.stingText=``,s.sfx(`rewind`),s.radio?.stopSpeech(),!0}stop(){if(this.playing){this.playing=!1;for(let e of this.union){let t=this.live.get(e);e.position.set(t[0],t[1],t[2]),e.quaternion.set(t[3],t[4],t[5],t[6]),e.visible=this.liveVis.get(e)}for(let[e,t]of this.liveProps)e.pos.set(t[0],t[1],t[2]),e.quat.set(t[3],t[4],t[5],t[6]),this.game.props.writeMatrix(e);this.game.hud.root.classList.remove(`replaying`),this.ui.classList.add(`hidden`),this.game.cameraSmooth=!1,this.rec&&this.rec.state!==`inactive`&&this.rec.stop()}}update(e){let t=this.game,n=this.shots[this.si],r=this.rt;if(this.rt+=e*n.speed,this.st+=e,n.sting&&this.st-e<=0){let e=this.mode===`fail`?`fail`:`replay`;this.stingText=t.radio?q(t.radio.lines(e)):``,this.sub.textContent=this.stingText?`📻 ${t.radio.host.host}: “${this.stingText}”`:``,t.sfx(this.mode===`fail`?`trombone`:`sting`),t.radio&&this.stingText&&t.radio.say(this.stingText,2.8)}for(this.label.textContent=n.name;this.fxCursor<this.fxLog.length&&this.fxLog[this.fxCursor].t<=this.rt;){let e=this.fxLog[this.fxCursor++];e.t>r-.001&&t.fx[e.name](...e.args.map(e=>e&&e.clone?e.clone():e))}if(t.fx.update(e*n.speed),this.apply(this.rt),this.camera(n,e),this.rt>=n.t1){if(this.si++,this.st=0,t.cameraSmooth=!1,this.si>=this.shots.length){this.stop();return}this.rt=this.shots[this.si].t0,this.fxCursor=this.fxLog.findIndex(e=>e.t>=this.rt),this.fxCursor<0&&(this.fxCursor=this.fxLog.length)}}frameAt(e){let t=this.frames,n=0,r=t.length-1;if(e<=t[0].t)return{a:0,b:0,k:0};if(e>=t[r].t)return{a:r,b:r,k:0};for(;r-n>1;){let i=n+r>>1;t[i].t<=e?n=i:r=i}return{a:n,b:r,k:(e-t[n].t)/Math.max(1e-4,t[r].t-t[n].t)}}apply(e){let t=this.frames,{a:n,b:r,k:i}=this.frameAt(e),a=t[n],o=t[r];for(let e of this.union)e.visible=!1;let s=new Map;o.objs.forEach((e,t)=>s.set(e,t));let c=[`neutral`,`grin`,`shout`,`angry`,`smug`];a.objs.forEach((e,t)=>{let n=t*tp,r=s.get(e),l=r===void 0?n:r*tp,u=r===void 0?a.data:o.data;e.position.set(a.data[n]+(u[l]-a.data[n])*i,a.data[n+1]+(u[l+1]-a.data[n+1])*i,a.data[n+2]+(u[l+2]-a.data[n+2])*i),rp.set(a.data[n+3],a.data[n+4],a.data[n+5],a.data[n+6]),ip.set(u[l+3],u[l+4],u[l+5],u[l+6]),e.quaternion.copy(rp).slerp(ip,i),e.visible=a.data[n+7]>.5;let d=a.data[n+16];if(d>=0){let t=e.__cm||e.children[0]&&this.modelOf(e);t&&(t.armL.rotation.x=a.data[n+8],t.armL.rotation.z=a.data[n+9],t.armR.rotation.x=a.data[n+10],t.armR.rotation.z=a.data[n+11],t.legL.rotation.x=a.data[n+12],t.legR.rotation.x=a.data[n+13],t.body.position.y=a.data[n+14],t.body.rotation.x=a.data[n+15],t.setExpr(c[d]||`neutral`))}});for(let[e,t]of this.propTrack){let a=n*8,o=r*8;e.pos.set(t[a]+(t[o]-t[a])*i,t[a+1]+(t[o+1]-t[a+1])*i,t[a+2]+(t[o+2]-t[a+2])*i),rp.set(t[a+3],t[a+4],t[a+5],t[a+6]),ip.set(t[o+3],t[o+4],t[o+5],t[o+6]),e.quat.copy(rp).slerp(ip,i),this.game.props.writeMatrix(e)}this.focus.lerpVectors(a.focus,o.focus,i);let l=a.cam,u=o.cam;this.camPos.set(l[0]+(u[0]-l[0])*i,l[1]+(u[1]-l[1])*i,l[2]+(u[2]-l[2])*i),rp.set(l[3],l[4],l[5],l[6]),ip.set(u[3],u[4],u[5],u[6]),this.camQ.copy(rp).slerp(ip,i),this.camFov=l[7]}modelOf(e){let t=this.game;if(t.player.model.root===e)return e.__cm=t.player.model;for(let n of t.peds)if(n.model.root===e)return e.__cm=n.model;return null}camera(e,t){let n=this.game.camera,r=this.focus,i=this.game.cameraSmooth,a=ap,o=op.copy(r).setY(r.y+1);if(e.cam===`chase`)n.position.copy(this.camPos),n.quaternion.copy(this.camQ),n.fov=this.camFov,o=null;else if(e.cam===`low`){let e=this.camAngle;a.set(r.x+Math.sin(e)*7,r.y+.5,r.z+Math.cos(e)*7),n.fov=58}else if(e.cam===`orbit`){this.camAngle+=t*.5;let e=this.camAngle,i=this.punchKind===`cannon`?12:5.5,o=this.punchKind===`cannon`?4:2.2;a.set(r.x+Math.sin(e)*i,r.y+o,r.z+Math.cos(e)*i),n.fov=50}else a.set(r.x+22,r.y+26,r.z+22),n.fov=45;if(o){let e=sp.copy(a).sub(o),r=e.length();if(r>.01){e.divideScalar(r);let t=ju(o,e,r);t<r&&a.copy(o).addScaledVector(e,Math.max(1.5,t-.5))}let s=this.game.groundAt?.(a.x,a.z)??-50;a.y<s+.4&&(a.y=s+.4),i?n.position.lerp(a,Math.min(1,t*6)):n.position.copy(a),n.lookAt(o),this.game.declutterCamera(o,!0)}this.game.cameraSmooth=!0,n.updateProjectionMatrix()}afterRender(){if(!this.exporting||!this.cctx||!this.comp)return;let e=this.cctx,t=this.comp.width,n=this.comp.height,r=this.game.renderer.domElement;e.drawImage(r,0,0,t,n);let i=n*.09;e.fillStyle=`#000`,e.fillRect(0,0,t,i),e.fillRect(0,n-i,t,i),e.font=`900 ${Math.round(i*.5)}px Impact, sans-serif`,e.fillStyle=this.mode===`fail`?`#ff2e4d`:`#ffd60a`,e.textBaseline=`middle`,e.fillText(this.mode===`fail`?`FAIL CAM`:`INSTANT REPLAY`,16,i/2),e.textAlign=`right`,e.fillStyle=`#fff`,e.font=`700 ${Math.round(i*.32)}px sans-serif`,e.fillText(`COSTA CHAOS · `+(this.shots[this.si]?.name||``),t-16,i/2),e.textAlign=`left`,this.sub.textContent&&(e.font=`italic 700 ${Math.round(i*.34)}px sans-serif`,e.textAlign=`center`,e.fillStyle=`#9be7ff`,e.fillText(this.sub.textContent,t/2,n-i/2),e.textAlign=`left`)}exportClip(){if(this.exporting)return;let e=[`video/webm;codecs=vp9`,`video/webm;codecs=vp8`,`video/webm`,`video/mp4`].find(e=>MediaRecorder.isTypeSupported?.(e));if(!e){this.game.hud.toast(`Clip export is not supported in this browser. Screen-record it like it's 2009.`);return}let t=this.game.renderer.domElement,n=Math.min(1,1280/t.width);this.comp=document.createElement(`canvas`),this.comp.width=Math.round(t.width*n/2)*2,this.comp.height=Math.round(t.height*n/2)*2,this.cctx=this.comp.getContext(`2d`);let r=this.comp.captureStream(30),i=this.game.audio;if(i.ctx){let e=i.ctx.createMediaStreamDestination();i.master.connect(e),e.stream.getAudioTracks().forEach(e=>r.addTrack(e)),this._dest=e}this.chunks=[],this.rec=new MediaRecorder(r,{mimeType:e,videoBitsPerSecond:6e6}),this.rec.ondataavailable=e=>{e.data.size&&this.chunks.push(e.data)},this.rec.onstop=()=>{this.exporting=!1;try{i.master.disconnect(this._dest)}catch{}let t=new Blob(this.chunks,{type:e}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`costa-chaos-replay-${Date.now()}.${e.includes(`mp4`)?`mp4`:`webm`}`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),1e4),this.game.hud.toast(`Clip saved (${(t.size/1e6).toFixed(1)} MB). Go be famous. Or infamous. Same thing here.`,`good`)},this.exporting=!0,this.rec.start(250),this.si=0,this.st=0,this.rt=this.shots[0].t0,this.game.cameraSmooth=!1,this.fxCursor=this.fxLog.findIndex(e=>e.t>=this.rt),this.fxCursor<0&&(this.fxCursor=this.fxLog.length),this.saveBtn.textContent=`● RECORDING…`,this.rec.addEventListener(`stop`,()=>this.saveBtn.textContent=`⬇ SAVE CLIP`)}},lp=(e,t=``,n=``)=>{let r=document.createElement(e);return t&&(r.className=t),n&&(r.innerHTML=n),r},up={duck:`The Duck of Destiny`,throne:`The Porcelain Peak`,mime:`Mime Your Business`,void:`The Station Between Stations`,honk:`HONKHONK`},dp=[`HONKHONK`],fp=class{constructor(e){Q(this,`game`,void 0),Q(this,`stats`,{bowled:0,totaled:0,cannon:0,bestBail:0,maxStars:0,slips:0,rollovers:0,deaths:0,busts:0,airtime:0,bigCombo:0,fails:0,emotes:0}),Q(this,`bubbles`,[]),Q(this,`layer`,lp(`div`,`bubbles`)),Q(this,`globalCd`,0),Q(this,`pedCd`,new Map),Q(this,`bag`,{}),Q(this,`ticker`,lp(`div`,`ticker`)),Q(this,`tickerIn`,lp(`span`)),Q(this,`tickerT`,.4),Q(this,`lastHeadline`,``),Q(this,`chalHud`,lp(`div`,`chalhud`)),Q(this,`card`,lp(`div`,`chalcard`)),Q(this,`panel`,lp(`div`,`overlay ppanel hidden`)),Q(this,`emoteT`,0),Q(this,`emoteId`,``),Q(this,`idleT`,0),Q(this,`tauntT`,10),Q(this,`trailT`,0),Q(this,`flourish`,null),Q(this,`secrets`,{}),Q(this,`duck`,void 0),Q(this,`throne`,void 0),Q(this,`mime`,void 0),Q(this,`mimeCd`,0),Q(this,`mimeCopy`,0),Q(this,`markers`,[]),Q(this,`pizzaStand`,new V(-346,0,72)),Q(this,`pizzaRing`,void 0),Q(this,`pizzaBox`,void 0),Q(this,`pizzaTargets`,[]),Q(this,`pins`,[]),Q(this,`pinMesh`,void 0),Q(this,`laneStart`,new V(-384,0,-100)),Q(this,`fraudDesk`,new V),Q(this,`active`,null),Q(this,`chalCd`,0),Q(this,`contracts`,[]),Q(this,`contractKey`,``),Q(this,`failCamCd`,0),Q(this,`failCamFired`,!1),Q(this,`challenges`,mp),this.game=e;let t=e,n=t.hud.root;this.ticker.innerHTML=`<b>COSTA CHAOS NEWS</b>`,this.ticker.appendChild(this.tickerIn),n.append(this.layer,this.ticker,this.chalHud,this.card,this.panel),globalThis.__ccBark=(e,t)=>this.bark(e,t);try{this.secrets=JSON.parse(localStorage.getItem(`cc-secrets`)||`{}`)}catch{this.secrets={}}this.buildWorld(t.scene),this.loadContracts()}line(e){let t=this.bag[e];return t&&t.length||(t=this.bag[e]=[...wf[e]||[`...`]].sort(()=>Math.random()-.5)),t.pop()}bubble(e,t,n=``,r=2.2){this.bubbles.length>=4&&this.bubbles.shift().el.remove();let i=lp(`div`,`bubble `+n,t);this.layer.appendChild(i),this.bubbles.push({el:i,get:e,t:r})}bark(e,t){let n=this.game;if(!e||n.replay?.playing||this.globalCd>0)return;let r=n.elapsed;if((this.pedCd.get(e.id)??-99)>r||e.pos.distanceToSquared(n.camera.position)>2025||e.isDummy)return;let i=e.isCop&&(t===`flee`||t===`getup`)?`cop`:t;this.globalCd=.9,this.pedCd.set(e.id,r+6),this.bubble(()=>e.model.root.parent?e.pos.clone().setY(e.pos.y+2.4*(e.model.root.scale.x||1)):null,this.line(i),e.isCop?`cop`:t===`driver`||t===`jacked`?`driver`:``),e.model.emote(t===`getup`?`angry`:t===`emote`?`grin`:`shout`,1.6)}playerSay(e,t=`player`,n=2.6){let r=this.game.player;for(let e=this.bubbles.length-1;e>=0;e--)this.bubbles[e].el.classList.contains(`player`)&&(this.bubbles[e].el.remove(),this.bubbles.splice(e,1));this.bubble(()=>r.vehicle?r.vehicle.pos.clone().setY(r.vehicle.pos.y+3.2):r.pos.clone().setY(r.pos.y+2.5),e,t,n)}get cl(){return Af[this.game.char.id]}onCharacter(e,t,n){this.flourish=null;let r=Af[e];if(!r)return;let i=t.head;if(e===`gigawatt`){let e=new W(Z([Y(.16,.13,.12,6,`#ffd60a`,0,.68,-.08),...[0,1,2,3,4,5].map(e=>J(.04,.08,.04,`#ffd60a`,Math.cos(e*1.05)*.14,.76,-.08+Math.sin(e*1.05)*.14)),X(.03,`#ff006e`,0,.7,.07)]),au({metalness:.6,roughness:.25}));i.add(e)}if(e===`fizz`){let e=new xn,t=new ni({color:`#7df9ff`});for(let n=0;n<3;n++){let r=new W(new ua(.05,6,4),t);r.userData.k=n,e.add(r)}e.position.y=.6,i.add(e),this.flourish=e}if(e===`lag`){let e=document.createElement(`canvas`);e.width=128,e.height=48;let t=e.getContext(`2d`);t.fillStyle=`#e00`,t.fillRect(0,0,128,48),t.fillStyle=`#fff`,t.font=`900 34px sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`● LIVE`,64,26);let n=new Yr(new Fr({map:new $i(e),depthWrite:!1}));n.scale.set(.6,.22,1),n.position.y=.95,i.add(n),this.flourish=n}e===`dee`&&i.add(new W(new da(.09,.045,6,12).rotateX(Math.PI/2).translate(0,.56,.02),new Sa({color:`#ff8fd8`,roughness:.6}))),n&&(this.playerSay(r.entrance,`player big`,3.2),t.emote(`grin`,2))}emote(){let e=this.game,t=e.player;if(t.vehicle||t.ragdollT>0||e.deadT>0||this.emoteT>0)return;let n=this.cl;this.emoteT=2.2,this.emoteId=n.emote,this.stats.emotes++,this.playerSay(q(n.emoteLine)),t.model.emote(`grin`,2.2),e.sfx({bell:`ding`,spin:`kazoo`,moon:`coin`,eureka:`cheat`,kiss:`accordion`,flex:`punch`,lag:`babble`,donut:`munch`}[n.emote]||`pop`),n.emote===`eureka`&&(e.fx.sparks(t.pos.clone().setY(t.pos.y+2.2),30),e.hud.flash(.25,`#bdf`)),n.emote===`moon`&&e.fx.burst(t.pos.clone().setY(t.pos.y+2),20,7,[`#ffd60a`,`#fff3b0`],.14,1.2,.6);let r=0;for(let n of e.peds)r<2&&n.alive&&!n.isCop&&n.state===`walk`&&n.pos.distanceTo(t.pos)<12&&(n.state=`idle`,n.timer=2,n.yaw=Math.atan2(t.pos.x-n.pos.x,t.pos.z-n.pos.z),setTimeout(()=>this.bark(n,`emote`),500+r*700),r++,setTimeout(()=>{n.state===`idle`&&(n.state=`walk`)},3e3));this.mime&&this.mime.root.position.distanceTo(t.pos)<12&&(this.mimeCopy=2.2,this.secret(`mime`,`The mime copied your emote. You are now in a mime's box. Forever.`)),this.contract(`emotes`,1)}animEmote(e){let t=this.game,n=t.player,r=n.model;if(this.emoteT<=0)return;if(n.vehicle||n.ragdollT>0||Math.hypot(n.vel.x,n.vel.z)>2){this.emoteT=0,r.root.rotation.y=n.yaw;return}this.emoteT-=e;let i=2.2-this.emoteT;pp(r,this.emoteId,i),this.emoteId===`spin`&&(r.root.rotation.y=n.yaw+i*14),this.emoteId===`lag`&&Math.random()<.25&&(r.root.position.x+=K(-.25,.25)),this.emoteId===`donut`&&Math.random()<e*4&&t.fx.add(n.pos.clone().setY(n.pos.y+1.4),new V(K(-1,1),1,K(-1,1)),.6,.06,`#ffb4d9`),this.emoteT<=0&&(r.root.rotation.y=n.yaw)}updateFlair(e){let t=this.game,n=t.player,r=t.char.id;if(this.flourish&&r===`fizz`){let e=t.elapsed*4;this.flourish.children.forEach((t,n)=>t.position.set(Math.cos(e+n*2.1)*.32,Math.sin(e*1.3+n)*.12,Math.sin(e+n*2.1)*.32))}if(this.flourish&&r===`lag`&&(this.flourish.position.y=.95+Math.sin(t.elapsed*3)*.04),n.vehicle)return;let i=Math.hypot(n.vel.x,n.vel.z);if(this.trailT-=e,(i>7.5||n.ragdollT>0&&n.vel.length()>10)&&this.trailT<=0){this.trailT=.03;let e=n.pos.clone().setY(n.pos.y+.3);r===`dez`&&t.fx.add(e,new V(K(-.3,.3),.3,K(-.3,.3)),.35,.12,q([`#ff6b35`,`#ffd60a`]),0),r===`brayden`&&t.fx.add(e.setY(e.y+.6),new V(K(-.5,.5),1.2,K(-.5,.5)),.6,.08,q([`#ffd60a`,`#fff3b0`]),.4),r===`rex`&&t.fx.fire(e)}}event(e,t={}){let n=this.game,r=n.radio,i=this.stats;switch(e){case`stars`:i.maxStars=Math.max(i.maxStars,t),r?.react(t>=5?`stars5`:t>=3?`stars3`:`stars1`),this.contract(`stars`,t,`max`);break;case`clear`:r?.react(`clear`);break;case`cannon`:i.cannon++,r?.react(`cannon`,!0),n.replay?.event(`cannon`,80),this.contract(`cannon`,1),this.active?.def.id===`pizza`&&(this.active.s.launched=!0);break;case`comboBank`:i.bigCombo=Math.max(i.bigCombo,t.mult),t.mult>=4&&r?.react(`combo`);break;case`combo`:this.contract(`combo`,t,`max`),this.active&&(this.active.s.mult=Math.max(this.active.s.mult||0,t));break;case`bail`:{i.bestBail=Math.max(i.bestBail,t.total),r?.react(`bail`),n.replay?.event(`bail`,40+t.total/50),this.contract(`bail`,t.total,`max`);let e=this.cl;e&&this.playerSay(q(e.bail),`player`,2.6),n.char.id===`dee`&&n.sfx(`whistle`),this.active&&(this.active.s.bail=Math.max(this.active.s.bail||0,t.total),this.active.s.bailSum=(this.active.s.bailSum||0)+t.total);break}case`stunt`:i.airtime+=t.air,r?.react(`stunt`),n.replay?.event(`stunt`,t.air*20),this.contract(`air`,t.air),this.active&&(this.active.s.air=Math.max(this.active.s.air||0,t.air));break;case`rollover`:i.rollovers++,r?.react(`rollover`),n.replay?.event(`rollover`,50),this.active&&(this.active.s.rolls=(this.active.s.rolls||0)+1);break;case`totaled`:i.totaled++,n.replay?.event(`boom`,60),this.contract(`totaled`,1);break;case`bowled`:i.bowled++,this.contract(`bowled`,1);break;case`slip`:i.slips++,this.contract(`slips`,1),n.replay?.event(`slip`,35);break;case`death`:i.deaths++,r?.react(`fail`,!0),this.failBonus(`FLATLINED`),this.contract(`fails`,1),this.failCamFired=!1,n.replay?.event(`death`,90),this.active&&this.endChallenge(!1,`You died. Technically a fail. Spiritually a win.`);break;case`busted`:i.busts++,r?.react(`fail`,!0),this.failBonus(`CUFFED`),this.contract(`fails`,1),this.active&&this.endChallenge(!1,`Arrested mid-challenge. The judge laughed.`);break;case`enter`:n.char.id===`sal`&&n.sfx(`accordion`),t.stolen&&t.ped&&setTimeout(()=>this.bark(t.ped,`jacked`),250);break;case`hitByCar`:if(this.active?.def.id===`fraud`){let e=this.active.s;e.hits=(e.hits||0)+1,e.claim+=Math.round(t.speed*60),this.claimFloat(`+${ou(Math.round(t.speed*60))} whiplash`)}n.replay?.event(`splat`,45);break;case`hurt`:this.active?.def.id===`fraud`&&(this.active.s.claim+=Math.round(t*12))}}failBonus(e){let t=this.game,n=t.addMoney(25+Math.floor(Math.random()*50),!1);setTimeout(()=>t.hud.toast(`🏆 <b>${q(Bf)}</b> — ${e.toLowerCase()} bonus +${ou(n)}. Failure is content.`,`good`),1400)}updateTicker(e){if(this.tickerT-=e,this.tickerT>0)return;this.tickerT=24;let t=this.stats,n=zf.filter(e=>(t[e.key]||0)>=e.min).map(e=>e.fmt(Math.round(t[e.key]*10)/10)),r=[];n.length&&r.push(q(n)),n.length>1&&Math.random()<.5&&r.push(q(n)),r.push(q(Rf)),this.game.stars>=3&&r.unshift(`LIVE: ${this.game.stars}-star pursuit in progress; anchors "mildly entertained"`);let i=[...new Set(r)].join(`  ◆  `);i!==this.lastHeadline&&(this.lastHeadline=i,this.tickerIn.textContent=i,this.tickerIn.style.animation=`none`,this.tickerIn.offsetWidth,this.tickerIn.style.animation=``)}secret(e,t){let n=this.game;if(!this.secrets[e]){this.secrets[e]=!0,localStorage.setItem(`cc-secrets`,JSON.stringify(this.secrets));let t=Object.keys(this.secrets).filter(e=>up[e]).length;n.hud.bigText(`SECRET FOUND`,`${up[e]} · ${t}/${Object.keys(up).length}`,2.6,`stunt`),n.addMoney(500,!1),n.sfx(`stunt`)}n.hud.toast(`🔍 `+t,`cheat`)}hiddenCode(e){let t=this.game;if(e===`HONKHONK`){for(let e of t.vehicles)if(e.driver===`ai`&&e.pos.distanceTo(t.playerFocus())<120){let n=Math.random()*1.2;setTimeout(()=>t.sfx(`horn`,.6,e.pos),n*1e3)}for(let e of t.peds)e.alive&&!e.isCop&&e.pos.distanceTo(t.playerFocus())<60&&(e.state=`idle`,e.timer=6,e.dance=6);this.secret(`honk`,`HONKHONK: the whole city honked back. Pedestrians are now dancing. Nobody knows why.`)}}buildWorld(e){let t=new xn;t.add(new W(Z([X(3,`#ffd60a`,0,1.2,0,1.25,.8,1,1),X(1.8,`#ffd60a`,0,4,2.2,1,1,1,1),J(1.6,.6,1.6,`#ff7b00`,0,3.8,4),J(.3,.4,.2,`#111`,.7,4.6,3.6),J(.3,.4,.2,`#111`,-.7,4.6,3.6),X(1.2,`#ffd60a`,0,2.6,-3.4,1,.8,1,0)]),au({roughness:.2}))),t.position.set(20,du-.6,378),t.rotation.y=2.2,t.traverse(e=>e.castShadow=!0),e.add(t),this.duck=t;let n=-452,r=-418,i=new W(Z([J(1.2,.9,1.4,`#ffd60a`,0,.45,0),Y(.75,.6,.35,12,`#ffd60a`,0,1.05,.25),J(1.3,1.6,.5,`#ffd60a`,0,1.6,-.6),J(1.6,.2,.9,`#b5179e`,0,.05,0)]),au({metalness:.8,roughness:.2}));i.position.set(n,$(n,r),r),i.castShadow=!0,e.add(i),this.throne=i;let a=Nu.find(e=>e.kind===`garage`),o={skin:`#ffffff`,shirt:`#ffffff`,pants:`#111`,shoes:`#111`,hair:`#111`,hat:`bald`,kit:`mime`};this.mime=new Fd(o),this.mime.root.position.set(a.cx+9,$(a.cx+9,a.cz+13),a.cz+13),e.add(this.mime.root);let s=this.pizzaStand;s.y=$(s.x,s.z);let c=new W(Z([J(3,1.2,1.6,`#ffbe0b`,0,.6,0),J(3.2,.15,1.8,`#9d0208`,0,1.25,0),Y(.05,.05,2,6,`#888`,-1.4,2.2,0),Y(.05,.05,2,6,`#888`,1.4,2.2,0),J(3.4,.2,2,`#e63946`,0,3.2,0),...[0,1,2].map(e=>J(.8,.1+e*.1,.8,`#f1faee`,-.8+e*.8,1.35+e*.05,0))]),au());c.position.copy(s),c.rotation.y=Math.PI/2,e.add(c);let l=Gu(`PIZZA FIASCO · CANNON DELIVERY`,`#ffbe0b`,`#9d0208`,9,1.2);l.position.set(s.x,s.y+4,s.z),l.rotation.y=Math.PI/2,e.add(l),this.pizzaBox=new W(new ra(.6,.1,.6),new Sa({color:`#f1faee`})),this.pizzaBox.visible=!1,this.pizzaRing=new W(new da(8,.5,6,32).rotateX(Math.PI/2),new ni({color:`#06d6a0`,transparent:!0,opacity:.85})),this.pizzaRing.visible=!1,e.add(this.pizzaRing);let u=this.laneStart;u.y=$(u.x,u.z);let d=new W(Z([J(64,.1,6,`#d4a373`,0,0,0),J(64,.14,.5,`#333`,0,.02,3.2),J(64,.14,.5,`#333`,0,.02,-3.2),...[-24,-16,-8].map(e=>J(.6,.12,.4,`#e63946`,e,.02,0))]),au({roughness:.35}));d.position.set(u.x-32,u.y+.05,u.z),d.receiveShadow=!0,e.add(d);let f=Gu(`GUTTERBALL GULCH · RAGDOLL LANES`,`#3a86ff`,`#fff`,12,1.6);f.position.set(u.x-68,u.y+6,u.z),f.rotation.y=Math.PI/2,e.add(f);let p=Z([Y(.12,.2,.9,8,`#ffffff`,0,.45,0),Y(.2,.12,.25,8,`#ffffff`,0,.95,0),Y(.13,.13,.08,8,`#e63946`,0,.78,0),X(.14,`#ffffff`,0,1.15,0)]);this.pinMesh=new Ti(p,au({roughness:.3}),10),this.pinMesh.castShadow=!0,e.add(this.pinMesh);let m=u.x-60;for(let e=0,t=0;e<4;e++)for(let n=0;n<=e;n++,t++){let t=new V(m-e*1,u.y+.1,u.z+(n-e/2)*1.1);this.pins.push({pos:t.clone(),vel:new V,q:new Ct,down:!1,home:t})}this.resetPins();let h=uu.reduce((e,t)=>Math.abs(t-(a.cx+30))<Math.abs(e-(a.cx+30))?t:e,uu[0]);this.fraudDesk.set(h+8+2.5,0,a.cz+6),this.fraudDesk.y=$(this.fraudDesk.x,this.fraudDesk.z);let g=new W(Z([J(1.6,1.1,.8,`#023047`,0,.55,0),J(1.8,.1,1,`#ffb703`,0,1.12,0),Y(.6,.6,.05,10,`#ffb703`,0,2.6,0),Y(.04,.04,1.5,6,`#888`,0,1.9,0)]),au());g.position.copy(this.fraudDesk),e.add(g);let _=Gu(`CHAOS MUTUAL · CLAIMS`,`#023047`,`#ffb703`,6,1);_.position.set(this.fraudDesk.x,this.fraudDesk.y+3.3,this.fraudDesk.z),_.rotation.y=-Math.PI/2,e.add(_);let v=Nu.find(e=>e.kind===`bounce`);for(let t of mp){t.id===`bailfar`&&v&&(t.at=[v.cx,v.z1+10]),t.id===`combo`&&(t.at=[a.cx-16,a.cz+16]),t.id===`pizza`&&(t.at=[this.pizzaStand.x,this.pizzaStand.z-3]),t.id===`bowling`&&(t.at=[this.laneStart.x+2,this.laneStart.z]),t.id===`fraud`&&(t.at=[this.fraudDesk.x-2.5,this.fraudDesk.z]);let[n,r]=t.at,i=$(n,r),o=new xn,s=new W(new ia(2.2,2.2,7,16,1,!0),new ni({color:t.kind===`activity`?`#ffbe0b`:`#06d6a0`,transparent:!0,opacity:.22,depthWrite:!1,side:2,blending:2}));s.position.y=3.5,o.add(s);let c=document.createElement(`canvas`);c.width=512,c.height=128;let l=c.getContext(`2d`);l.fillStyle=`rgba(0,0,0,.65)`,l.fillRect(0,0,512,128),l.fillStyle=t.kind===`activity`?`#ffbe0b`:`#06d6a0`,l.font=`900 54px Impact, sans-serif`,l.textAlign=`center`,l.fillText(t.name,256,62,490),l.fillStyle=`#fff`,l.font=`700 28px sans-serif`,l.fillText(t.kind===`activity`?`SIDE GIG · step in`:`STUNT CHALLENGE · ${t.time}s`,256,106);let u=new Yr(new Fr({map:new $i(c),depthWrite:!1}));u.scale.set(6,1.5,1),u.position.y=8,o.add(u),o.position.set(n,i,r),e.add(o),this.markers.push({id:t.id,obj:o,x:n,z:r})}}resetPins(){let e=new Kt;this.pins.forEach((t,n)=>{t.pos.copy(t.home),t.vel.set(0,0,0),t.q.identity(),t.down=!1,this.pinMesh.setMatrixAt(n,e.compose(t.pos,t.q,new V(1,1,1)))}),this.pinMesh.instanceMatrix.needsUpdate=!0}updatePins(e){let t=this.game,n=t.player;if(t.playerFocus().distanceTo(this.laneStart)>140)return;let r=[];n.vehicle?r.push({p:n.vehicle.pos,v:n.vehicle.vel,r:n.vehicle.def.radius*.8}):r.push({p:n.pos,v:n.vel,r:.7});for(let e of t.peds)e.state===`ragdoll`&&e.pos.distanceTo(this.laneStart)<90&&r.push({p:e.pos,v:e.vel,r:.6});let i=!1,a=new Kt,o=new V(1,1,1),s=new V(0,1,0);this.pins.forEach((n,c)=>{if(!n.down){for(let e of r){let r=e.p.x-n.pos.x,i=e.p.z-n.pos.z;r*r+i*i<(e.r+.3)**2&&e.p.y<n.pos.y+1.6&&e.v.length()>2&&(n.down=!0,n.vel.copy(e.v).multiplyScalar(.7).setY(3+Math.random()*2),t.sfx(`punch`,.5,n.pos),this.active?.def.id===`bowling`&&!this.active.s.firstHit&&(this.active.s.firstHit=this.active.t))}for(let e of this.pins)e!==n&&e.down&&e.vel.lengthSq()>4&&e.pos.distanceToSquared(n.pos)<.5&&(n.down=!0,n.vel.copy(e.vel).multiplyScalar(.6).setY(2))}if(n.down&&(n.vel.lengthSq()>.01||n.pos.y>n.home.y+.01)){i=!0,n.vel.y-=t.gravity*e,n.pos.addScaledVector(n.vel,e);let r=$(n.pos.x,n.pos.z)+.15;n.pos.y<r&&(n.pos.y=r,n.vel.y=Math.abs(n.vel.y)>2?-n.vel.y*.3:0,n.vel.x*=1-e*2.5,n.vel.z*=1-e*2.5);let l=new V(n.vel.x,0,n.vel.z);if(l.lengthSq()>.04){let t=new V().crossVectors(s,l.normalize()),r=new Ct().setFromAxisAngle(t,Math.PI/2);n.q.slerp(r,Math.min(1,e*6))}n.vel.lengthSq()<.02&&n.vel.set(0,0,0),this.pinMesh.setMatrixAt(c,a.compose(n.pos,n.q,o))}}),i&&(this.pinMesh.instanceMatrix.needsUpdate=!0)}startChallenge(e){let t=this.game;if(!(this.active||this.chalCd>0)){if(this.active={def:e,t:e.time,s:{claim:0,mult:0}},t.hud.bigText(e.name,e.desc,2.6,`stunt`),t.sfx(`cheat`),e.id===`pizza`){let e=this.estimatePizzaTarget(),n=new V(ql(e.x-K(10,60),-628,-540),0,e.z+K(-26,26));this.active.s.target=n,this.pizzaRing.position.copy(n).setY($(n.x,n.z)+.4),this.pizzaRing.visible=!0,t.player.model.armL.add(this.pizzaBox),this.pizzaBox.position.set(0,-.7,.3),this.pizzaBox.visible=!0,this.playerSay(`Hot pie. Cold logic.`,`player`)}e.id===`bowling`&&(this.resetPins(),this.playerSay(`Bowling? I AM the ball.`,`player`)),e.id===`fraud`&&(this.active.s.hp=t.player.health,this.playerSay(`Ow. Ow! I haven't been hit yet. Practising.`,`player`))}}estimatePizzaTarget(){let e=this.game.stunts.cannons[0],t=this.game.stunts.launchDir(e),n=this.game.stunts.muzzle(e).clone(),r=t.clone().multiplyScalar(e.power);for(let e=0;e<600&&(r.y-=22/60,n.addScaledVector(r,1/60),!(r.y<0&&n.y<$(n.x,n.z)));e++);return n.setY($(n.x,n.z))}endChallenge(e,t=``,n){let r=this.game,i=this.active;if(!i)return;this.active=null,this.chalCd=3,r.hud.bigT=0,r.hud.big.classList.remove(`show`),this.pizzaRing.visible=!1,this.pizzaBox.visible=!1,this.pizzaBox.removeFromParent();let a=this.cl;if(e){let e=r.addMoney(n??i.def.reward,!1);this.showCard(`win`,`<h4>${i.def.name}: DONE</h4><p>${t||q(Vf)}</p><b>+${ou(e)}</b>`),r.sfx(`stunt`),this.contract(`challenges`,1)}else{this.stats.fails++,this.contract(`fails`,1);let e=r.addMoney(Math.round((n??i.def.reward)*.15)+20,!1);this.showCard(`fail`,`<h4>MISSION FAILED SUCCESSFULLY</h4><p>${t}</p><p class="aw">🏆 ${q(Bf)}</p><small>${a?`“`+q(a.fail)+`”`:``}</small><b>Pity payout +${ou(e)}</b>`),r.sfx(`trombone`),r.radio?.react(`fail`,!0),r.replay?.event(`fail`,70),a&&this.playerSay(q(a.fail),`player`,2.6),r.chaos(60,`EPIC FAIL`,r.playerFocus())}}showCard(e,t){this.card.className=`chalcard show `+e,this.card.innerHTML=t,clearTimeout(this._ct),this._ct=setTimeout(()=>this.card.classList.remove(`show`),4200)}claimFloat(e){this.game.hud.floatText(this.game.player.pos.clone().setY(this.game.player.pos.y+2.2),e,`#ffb703`)}updateChallenge(e){let t=this.game,n=t.player,r=t.playerFocus();this.chalCd-=e;for(let i of this.markers){let a=Math.hypot(r.x-i.x,r.z-i.z);if(i.obj.visible=a<260&&(!this.active||this.active.def.id===i.id),i.obj.visible&&(i.obj.children[0].rotation.y+=e),!this.active&&this.chalCd<=0&&a<2.6&&r.y<$(i.x,i.z)+4){let r=mp.find(e=>e.id===i.id);if((r.id===`pizza`||r.id===`bowling`||r.id===`fraud`)&&n.vehicle){Math.random()<e*2&&t.hud.hint(`Hop out of the car for this one.`);continue}this.startChallenge(r)}}let i=this.active;if(!i){this.chalHud.classList.remove(`show`);return}i.t-=e;let a=i.s,o=i.def;if(o.id===`fraud`&&n.health<a.hp&&(a.claim+=Math.round((a.hp-n.health)*12),a.hp=n.health),o.id===`fraud`&&(a.hp=Math.max(a.hp,n.health)),o.id===`pizza`&&a.launched&&!n.vehicle&&n.ragdollT>0){let r=t.input,i=r.touch,o=+!!r.down(`KeyD`,`ArrowRight`)-!!r.down(`KeyA`,`ArrowLeft`)+i.mx,s=+!!r.down(`KeyW`,`ArrowUp`)-!!r.down(`KeyS`,`ArrowDown`)+i.my,c=Zl(t.camYaw),l=Ql(t.camYaw);n.vel.x+=(c.x*s+l.x*o)*9*e,n.vel.z+=(c.z*s+l.z*o)*9*e,a.steerHint||(a.steerHint=!0,t.hud.toast(`Steer the pizza mid-air with <b>WASD</b> / the stick!`))}if(o.id===`pizza`&&a.launched){let t=n.vehicle?n.vehicle.onGround:n.onGround&&n.ragdollT<=.2;if(a.flight=(a.flight||0)+e,t&&a.flight>1.2){let e=Math.hypot(r.x-a.target.x,r.z-a.target.z);e<9?this.endChallenge(!0,`Delivered ${e.toFixed(1)} m from the door. The customer screamed. Five stars.`,900):e<25?this.endChallenge(!0,`Landed ${e.toFixed(1)} m off. Pizza is cold, customer is colder. Half tip.`,350):this.endChallenge(!1,`You missed by ${Math.round(e)} m. The pizza landed in a different postcode. Refund issued to a pigeon.`);return}}if(o.id===`bowling`&&a.firstHit&&a.firstHit-i.t>4){let e=this.pins.filter(e=>e.down).length;e===10?this.endChallenge(!0,`STRIKE! All ten pins and most of your spine.`,1200):e>=6?this.endChallenge(!0,`${e} pins. Respectable. Your chiropractor disagrees.`,120*e):this.endChallenge(!1,e?`${e} pin${e>1?`s`:``}. The pins are laughing. Pins can\'t laugh. These ones learned.`:`Zero pins. You bowled a gutter... with your whole body.`),setTimeout(()=>this.resetPins(),2500);return}if(o.kind===`stunt`&&o.check(a)){this.endChallenge(!0);return}if(i.t<=0){if(o.id===`fraud`){let e=a.claim,t=[[`Whiplash (decorative)`,.3],[`Emotional damage to shoes`,.15],[`Spontaneous cartwheel injury`,.25],[`Pain and suffering and more pain`,.3]].map(([t,n])=>`${t} <b>${ou(e*n)}</b>`).join(`<br>`);e>=1500?this.endChallenge(!0,`CLAIM APPROVED<br><small>${t}</small>`,Math.round(e*.5)):this.endChallenge(!1,`CLAIM DENIED: insufficiently injured (${ou(e)}). Try being worse at crossing the road.`,300)}else o.id===`pizza`?this.endChallenge(!1,`Pizza went cold before it got yeeted. Customer now a vegetarian out of spite.`):o.id===`bowling`?this.endChallenge(!1,`You never even touched the pins. The pins win by forfeit.`):this.endChallenge(!1,q([`Out of time. Out of talent. Not out of lives, sadly for the pavement.`,`Timer: 0. Dignity: also 0.`,`You almost did it. That's the saddest kind of didn't.`]));return}this.chalHud.classList.add(`show`);let s=o.id===`fraud`?`Claim so far: <b>${ou(a.claim)}</b> (need $1,500)`:o.id===`pizza`?a.launched?`IN FLIGHT. Land in the green ring!`:`Run to the Yeetinator with the pizza!`:o.id===`bowling`?`Pins down: <b>${this.pins.filter(e=>e.down).length}/10</b> — bail (B) into them`:o.prog(a);this.chalHud.innerHTML=`<i>⏱ ${i.t.toFixed(1)}</i><b>${o.name}</b><span>${s}</span>`}loadContracts(){let e=new Date,t=`${e.getFullYear()}${String(e.getMonth()+1).padStart(2,`0`)}${String(e.getDate()).padStart(2,`0`)}`,n=`${e.getFullYear()}w${Math.floor((e.getTime()/864e5+4)/7)}`;this.contractKey=`cc-contracts-${t}`;let r=(e,t,n)=>{let r=nu(e),i=[...hp],a=[];for(let e=0;e<t&&i.length;e++){let e=i.splice(Math.floor(r()*i.length),1)[0],t=Math.round((e.min+r()*(e.max-e.min))*(n?e.weekMul:1));a.push({id:(n?`w-`:`d-`)+e.key,text:e.text(t),key:e.key,need:t,mode:e.mode,reward:Math.round(e.reward*(n?4:1)*(.8+r()*.4)/10)*10,got:0,done:!1,weekly:n})}return a},i=e=>[...e].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,7);this.contracts=[...r(i(t),3,!1),...r(i(n),1,!0)];try{let e=JSON.parse(localStorage.getItem(this.contractKey)||`{}`),t=JSON.parse(localStorage.getItem(`cc-contracts-${n}`)||`{}`);for(let n of this.contracts){let r=(n.weekly?t:e)[n.id];r&&(n.got=r.got,n.done=r.done)}}catch{}this._weekKey=`cc-contracts-${n}`}saveContracts(){let e={},t={};for(let n of this.contracts)(n.weekly?t:e)[n.id]={got:n.got,done:n.done};localStorage.setItem(this.contractKey,JSON.stringify(e)),localStorage.setItem(this._weekKey,JSON.stringify(t))}contract(e,t,n=`sum`){let r=!1;for(let i of this.contracts)if(!(i.done||i.key!==e)&&(i.got=i.mode===`max`||n===`max`?Math.max(i.got,t):i.got+t,r=!0,i.got>=i.need)){i.done=!0;let e=this.game.addMoney(i.reward,!1);this.game.hud.toast(`📋 <b>CONTRACT DONE</b>${i.weekly?` (weekly)`:``}: ${i.text} → +${ou(e)}`,`good`),this.game.sfx(`cash`)}r&&this.saveContracts()}showPanel(e){let t=this.game,n=``;n=e===`contracts`?`<h2>CHAOS CONTRACTS</h2><p class="tip">Seeded by today\'s date — everyone gets the same ones. Failing counts for some. Obviously.</p><div class="clist">${this.contracts.map(e=>`<div class="ct ${e.done?`done`:``}"><em>${e.weekly?`WEEKLY`:`DAILY`}</em><span>${e.text}</span><b>${e.done?`✔ PAID`:`${Math.min(e.need,Math.round(e.got*10)/10)}/${e.need}`}</b><small>${ou(e.reward)}</small></div>`).join(``)}</div>
        <h3>Stunt challenges & side gigs</h3><p class="tip">${mp.map(e=>`<b>${e.name}</b> — ${e.desc}`).join(`<br>`)}</p>`:e===`booth`?`<h2>📻 DJ BOOTH</h2><p class="tip">The long stuff. In the car you only get the short stings — you're busy.</p>${Tf.map(e=>`<div class="dj"><h3 style="color:${e.color}">${e.freq} ${e.name} — ${e.host}</h3><p>${(kf[e.id]||[]).map((t,n)=>`<button class="btn alt mini" data-s="${e.id}" data-i="${n}">▶ read it to me</button> ${t}`).join(`<br><br>`)}</p></div>`).join(``)}`:`<h2>SECRETS ${Object.keys(up).filter(e=>this.secrets[e]).length}/${Object.keys(up).length}</h2><p class="tip">${Object.entries(up).map(([e,t])=>this.secrets[e]?`✔ <b>${t}</b>`:`🔒 ???`).join(`<br>`)}</p><p class="tip">${q(Lf)}</p>`,this.panel.innerHTML=`<div class="panel">${n}<button class="btn" data-x="1">BACK</button></div>`,this.panel.classList.remove(`hidden`),t.hud.pause.classList.add(`hidden`),this.panel.scrollTop=0,this.panel.firstElementChild.scrollTop=0,this.panel.querySelector(`[data-x]`).addEventListener(`click`,()=>{this.panel.classList.add(`hidden`),t.paused&&t.hud.pause.classList.remove(`hidden`)}),this.panel.querySelectorAll(`[data-s]`).forEach(e=>e.addEventListener(`click`,()=>{let n=Tf.find(t=>t.id===e.dataset.s),r=kf[n.id][+e.dataset.i];t.radio.voice===`off`||t.radio.say(r,12,n)}))}streamerSeed(){let e=this.game,t=e.stunts.cannons[0];e.hud.clearTransient(),e.cameraSmooth=!1,e.player.vehicle&&e.exitVehicle(!0);let n=Zl(t.yaw),r=t.x-n.x*16,i=t.z-n.z*16;e.player.pos.set(r,$(r,i)+1,i),e.player.vel.set(0,0,0),e.player.ragdollT=0;let a=e.addVehicle(new ef(`couch`,r,i,t.yaw));a.pos.y=$(r,i)+.5,e.enterVehicle(a),e.camYaw=t.yaw,e.sky.time=17.2,e.sky.weather=`clear`;for(let a=0;a<2;a++){let o=r-n.x*(60+a*14)+K(-4,4),s=i-n.z*(60+a*14)+K(-4,4),c=e.addVehicle(new ef(`police`,o,s,t.yaw));c.driver=`ai`,c.ai={mode:`police`,stuck:0,reverse:0}}e.setHeat(3.2);let o=Ql(t.yaw);for(let r=0;r<6;r++){let i=r%2?1:-1;e.spawnPedAt?.(t.x+o.x*i*K(9,16)+n.x*K(-6,6),t.z+o.z*i*K(9,16)+n.z*K(-6,6))}return e.radio.on=!0,setTimeout(()=>e.radio.react(`stars3`,!0),600),`Streamer seed planted: you're on the Cloud Nine Couch, the Yeetinator is dead ahead, three stars of cops behind you, golden hour. Drive in. Then press R.`}update(e){let t=this.game,n=t.player;this.globalCd-=e,this.failCamCd-=e;let r=t.camera,i=new V;if(this.bubbles=this.bubbles.filter(t=>{t.t-=e;let n=t.get();return t.t<=0||!n?(t.el.remove(),!1):(i.copy(n).project(r),i.z>1||Math.abs(i.x)>1.2||Math.abs(i.y)>1.2?(t.el.style.display=`none`,!0):(t.el.style.display=`block`,t.el.style.transform=`translate(${(i.x*.5+.5)*innerWidth}px, ${(-i.y*.5+.5)*innerHeight}px) translate(-50%, -100%)`,t.el.style.opacity=String(Math.min(1,t.t*3)),!0))}),Math.random()<e*5){let e=n.vehicle;if(e&&e.speed>12){for(let n of t.peds)if(n.alive&&(n.state===`walk`||n.state===`idle`)&&n.pos.distanceToSquared(e.pos)<16){this.bark(n,`nearmiss`),n.state=`flee`,n.timer=4,n.fleeFrom.copy(e.pos);break}}if(e&&e.speed>8){for(let n of t.vehicles)if(n!==e&&n.driver===`ai`&&n.ai?.mode===`traffic`&&n.pos.distanceToSquared(e.pos)<49){this.vehBark(n,`driver`),t.sfx(`horn`,.5,n.pos);break}}if(t.stars>0){for(let e of t.peds)if(e.isCop&&e.state===`chase`&&e.pos.distanceToSquared(n.pos)<400&&Math.random()<.3){this.bark(e,`cop`);break}}for(let e of t.peds)e.dance>0&&(e.dance-=.2,e.yaw+=1.2,e.model.emote(`grin`,.4))}let a=!n.vehicle&&n.ragdollT<=0&&Math.hypot(n.vel.x,n.vel.z)<.3&&t.deadT<=0;if(this.idleT=a?this.idleT+e:0,this.idleT>7){if(this.tauntT-=e,this.tauntT<=0){this.tauntT=12;let e=this.cl;e&&(this.playerSay(q(e.taunts),`player`,3),n.model.emote(`smug`,2.5))}}else this.tauntT=0;this.animEmote(e),this.updateFlair(e),t.deadT>0&&t.deadT<2.1&&!this.failCamFired&&(this.failCamFired=!0,this.failCamCd<=0&&t.replay?.play(`fail`)&&(this.failCamCd=40));let o=t.playerFocus(),s=this.duck.position.distanceTo(o);this.duck.position.y=du-.6+Math.sin(t.elapsed*1.3)*.3,this.duck.rotation.z=Math.sin(t.elapsed*.9)*.06,s<9&&(!this._duckT||t.elapsed>this._duckT)&&(this._duckT=t.elapsed+2,t.sfx(`squeak`),this.duck.position.y+=1,this.bubble(()=>this.duck.position.clone().setY(this.duck.position.y+7),`QUACK. (menacingly)`,``,2),this.secret(`duck`,`You found the Duck of Destiny. It has seen things.`)),!n.vehicle&&this.throne.position.distanceTo(n.pos)<2.2&&n.ragdollT<=0&&(t.sfx(`flush`),t.startBail(`throne`),t.knockPlayer(new V(K(-3,3),42,K(-3,3))),t.hud.bigText(`ROYAL FLUSH`,`The throne rejects you. Upward.`,2,`stunt`),this.secret(`throne`,`You sat on the Porcelain Peak. It flushed you into orbit.`));let c=this.mime.root,l=c.position.distanceTo(n.pos);if(l<40){if(c.rotation.y=Math.atan2(n.pos.x-c.position.x,n.pos.z-c.position.z),this.mimeCopy>0)this.mimeCopy-=e,pp(this.mime,this.emoteId||`flex`,2.2-this.mimeCopy);else{let n=t.elapsed;this.mime.animate(e,0,`ground`),this.mime.armL.rotation.set(-1.5,0,.3+Math.sin(n*2)*.1),this.mime.armR.rotation.set(-1.5+Math.sin(n*2+1)*.15,0,-.3)}if(this.mimeCd-=e,l<7&&this.mimeCd<=0){this.mimeCd=7;let e=c.position;this.bubble(()=>e.clone().setY(e.y+2.5),this.line(`mime`),`mime`,2.4)}}this.updatePins(e),this.updateChallenge(e),this.updateTicker(e)}vehBark(e,t){if(this.globalCd>0)return;let n=1e6+e.id,r=this.game.elapsed;(this.pedCd.get(n)??-99)>r||(this.globalCd=.9,this.pedCd.set(n,r+8),this.bubble(()=>e.destroyed?null:e.pos.clone().setY(e.pos.y+2.6),this.line(t),`driver`))}};function pp(e,t,n){let r=Math.sin(n*12);switch(t){case`bell`:e.armR.rotation.set(-2.8+r*.3,0,-.2),e.armL.rotation.set(-.3,0,.2);break;case`spin`:e.armL.rotation.set(0,0,1.5),e.armR.rotation.set(0,0,-1.5);break;case`moon`:e.armL.rotation.set(-3,0,.2),e.armR.rotation.set(-3,0,-.2),e.body.position.y=Math.abs(Math.sin(n*8))*.3;break;case`eureka`:e.armL.rotation.set(-2.6,0,.6),e.armR.rotation.set(-2.6,0,-.6),e.body.position.y=n<.3?n:.3*Math.max(0,1-(n-.3)*2);break;case`kiss`:{let t=n%1.1;e.armR.rotation.set(t<.6?-2.2:-2.2+(t-.6)*3,0,t<.6?.6:-.6),e.armL.rotation.set(0,0,.1);break}case`flex`:e.armL.rotation.set(-1.2,0,1.4+r*.1),e.armR.rotation.set(-1.2,0,-1.4-r*.1),e.body.rotation.x=-.1;break;case`lag`:{let t=Math.floor(n*6)%3;e.armL.rotation.set(t===0?-1:.4,0,.6),e.armR.rotation.set(t===1?-2:.3,0,-.6),e.legL.rotation.x=t===2?-.8:0;break}case`donut`:e.armR.rotation.set(-2+Math.abs(r)*.4,0,.5),e.armL.rotation.set(-.6,0,.1)}}var mp=[{id:`hangtime`,name:`HANG TIME`,desc:`Get 2.5 s of airtime in a vehicle.`,time:35,reward:600,kind:`stunt`,at:[-352,-36],check:e=>(e.air||0)>=2.5,prog:e=>`Best air: <b>${(e.air||0).toFixed(1)}s</b> / 2.5s`},{id:`roofrider`,name:`ROOF RIDER`,desc:`Roll a car over twice.`,time:45,reward:500,kind:`stunt`,at:[-352,-92],check:e=>(e.rolls||0)>=2,prog:e=>`Rollovers: <b>${e.rolls||0}</b> / 2`},{id:`bailfar`,name:`FREQUENT FLYER`,desc:`Score a 1,500+ point bail.`,time:40,reward:700,kind:`stunt`,at:[0,0],check:e=>(e.bail||0)>=1500,prog:e=>`Best bail: <b>${e.bail||0}</b> / 1,500`},{id:`combo`,name:`CHAIN REACTION`,desc:`Reach a ×5 chaos combo.`,time:30,reward:650,kind:`stunt`,at:[0,0],check:e=>(e.mult||0)>=5,prog:e=>`Best combo: <b>×${e.mult||0}</b> / ×5`},{id:`pizza`,name:`PIZZA BY CANNON`,desc:`Fire yourself (and a pizza) at the customer. Land in the green ring.`,time:60,reward:900,kind:`activity`,at:[0,0],check:()=>!1,prog:()=>``},{id:`bowling`,name:`RAGDOLL BOWLING`,desc:`You are the ball. Bail into the pins.`,time:30,reward:1200,kind:`activity`,at:[0,0],check:()=>!1,prog:()=>``},{id:`fraud`,name:`INSURANCE FRAUD`,desc:`Get hit by traffic. Bail. Suffer. File a $1,500+ claim in 40 s.`,time:40,reward:800,kind:`activity`,at:[0,0],check:()=>!1,prog:()=>``}],hp=[{key:`bail`,min:800,max:2500,weekMul:2.5,mode:`max`,reward:500,text:e=>`Score a ${e.toLocaleString()}-point bail`},{key:`combo`,min:4,max:7,weekMul:1.5,mode:`max`,reward:450,text:e=>`Hit a ×${e} chaos combo`},{key:`totaled`,min:2,max:6,weekMul:4,mode:`sum`,reward:400,text:e=>`Total ${e} cars`},{key:`cannon`,min:1,max:3,weekMul:4,mode:`sum`,reward:350,text:e=>`Get Yeetinated ${e} time${e>1?`s`:``}`},{key:`air`,min:6,max:18,weekMul:4,mode:`sum`,reward:450,text:e=>`Rack up ${e}s of vehicle airtime`},{key:`slips`,min:2,max:5,weekMul:4,mode:`sum`,reward:300,text:e=>`Banana-slip ${e} times (anyone counts)`},{key:`fails`,min:2,max:4,weekMul:4,mode:`sum`,reward:400,text:e=>`Fail ${e} times (die, get cuffed, flunk a challenge). Commit to it.`},{key:`stars`,min:3,max:5,weekMul:1,mode:`max`,reward:400,text:e=>`Reach ${e} wanted stars`},{key:`bowled`,min:4,max:12,weekMul:4,mode:`sum`,reward:300,text:e=>`Bowl over ${e} pedestrians`},{key:`emotes`,min:3,max:6,weekMul:4,mode:`sum`,reward:200,text:e=>`Emote ${e} times in public. Shamelessly.`},{key:`challenges`,min:1,max:3,weekMul:3,mode:`sum`,reward:500,text:e=>`Beat ${e} challenge${e>1?`s`:``} or side gig${e>1?`s`:``}`}],gp=class{constructor(e){Q(this,`renderer`,void 0),Q(this,`scene`,new An),Q(this,`camera`,void 0),Q(this,`world`,void 0),Q(this,`sky`,void 0),Q(this,`fx`,void 0),Q(this,`hud`,void 0),Q(this,`input`,void 0),Q(this,`audio`,new Xf),Q(this,`vehicles`,[]),Q(this,`peds`,[]),Q(this,`projs`,[]),Q(this,`props`,void 0),Q(this,`stunts`,void 0),Q(this,`quality`,void 0),Q(this,`combo`,{pts:0,mult:1,count:0,t:0,last:``}),Q(this,`bail`,null),Q(this,`hitStop`,0),Q(this,`vortices`,[]),Q(this,`peels`,[]),Q(this,`player`,void 0),Q(this,`char`,Dd[0]),Q(this,`money`,500),Q(this,`moneyShown`,500),Q(this,`heat`,0),Q(this,`hiddenT`,0),Q(this,`lastSeen`,0),Q(this,`owned`,tf.map(e=>e.id)),Q(this,`curWeapon`,tf[0]),Q(this,`fireCd`,0),Q(this,`yoinked`,null),Q(this,`cheats`,{god:!1,lowGrav:!1,bigHeads:!1,slowmo:!1,superJump:!1,bouncy:!1,fastCars:!1}),Q(this,`camYaw`,Math.PI),Q(this,`camPitch`,.22),Q(this,`camDist`,6),Q(this,`shakeAmt`,0),Q(this,`elapsed`,0),Q(this,`started`,!1),Q(this,`paused`,!1),Q(this,`deadT`,0),Q(this,`bustT`,0),Q(this,`portraits`,{}),Q(this,`radio`,void 0),Q(this,`replay`,void 0),Q(this,`pers`,void 0),Q(this,`fps`,60),Q(this,`fpsAcc`,0),Q(this,`fpsN`,0),Q(this,`_pn`,[]),Q(this,`burning`,[]),Q(this,`comboFloatCd`,0),Q(this,`flipHintShown`,!1),Q(this,`spawnCd`,0),Q(this,`trafficCd`,0),Q(this,`copCd`,0),Q(this,`heliShotCd`,0),Q(this,`cameraSmooth`,!1),Q(this,`manual`,!1),Q(this,`lastT`,performance.now()),Q(this,`frame`,()=>{requestAnimationFrame(this.frame);let e=performance.now(),t=(e-this.lastT)/1e3;this.lastT=e,this.fpsAcc+=t,this.fpsN++,this.fpsAcc>1&&(this.fps=this.fpsN/this.fpsAcc,this.fpsAcc=0,this.fpsN=0),this.manual||this.tick(Math.min(.05,t))}),Q(this,`autoFire`,!1);let t=`ontouchstart`in window;this.renderer=new Hl({antialias:!t,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,t?1.5:2)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.camera=new ao(65,innerWidth/innerHeight,.3,2600);let n=new $o(this.renderer);this.scene.environment=n.fromScene(new Ul,.3).texture,this.scene.environmentIntensity=.55,addEventListener(`resize`,()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.quality?.resize()}),this.world=Uu(this.scene),this.sky=new Ku(this.scene),this.quality=new Ed(this.renderer,this.scene,this.camera,this.sky.sun),this.props=new cd(this.scene),this.props.populate(),this.stunts=new ld(this.scene),this.fx=new lf(this.scene),this.input=new Yf(this.renderer.domElement),this.input.isCodePrefix=e=>Sf.some(t=>t.code.startsWith(e))||dp.some(t=>t.startsWith(e)),this.hud=new Gf(this),this.renderer.domElement.addEventListener(`click`,()=>{this.started&&!this.hud.anyOverlay()&&this.input.lock(),this.audio.init()}),this.radio=new Qf(this),this.hud.root.appendChild(this.radio.el),this.pers=new fp(this),this.replay=new cp(this),this.makePlayer(Dd[0]),this.spawnInitialVehicles()}get gravity(){return this.cheats.lowGrav?6:22}get perk(){return this.char.perk}get maxHealth(){return 100*(this.char.perk.health||1)}get stars(){return Math.min(5,Math.floor(this.heat))}get bouncy(){return this.cheats.bouncy}makePlayer(e){let t=this.player;t&&this.scene.remove(t.model.root),this.char=e;let n=new Fd(e.look);this.scene.add(n.root),this.player=t?Object.assign(t,{model:n}):{model:n,pos:new V(0,0,-6),vel:new V,yaw:Math.PI,onGround:!0,vehicle:null,health:100,punchT:0,ragdollT:0,spin:new V,swim:!1,aimT:0},this.player.health=this.maxHealth,this.applyHeads(),this.refreshWeaponModel(),this.pers?.onCharacter(e.id,n,!!t&&this.started),this.player.vehicle&&(this.player.model.root.visible=this.player.vehicle.def.seat===`top`)}selectCharacter(e){this.hud.toasts.querySelectorAll(`.toast.good`).forEach(e=>{e.innerHTML.startsWith(`Now playing as`)&&e.remove()});let t=Dd.find(t=>t.id===e);this.makePlayer(t),this.hud.toast(`Now playing as <b>${t.name}</b> — ${t.perkText}. Emote: <b>T</b> (${Af[t.id]?.emoteName||`wave`})`,`good`)}makePortraits(){let e=new Hl({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(220,220),e.setPixelRatio(1),e.toneMapping=4;let t=new An;t.add(new qa(`#ffffff`,`#886644`,2.2));let n=new uo(`#fff`,2.2);n.position.set(2,3,4),t.add(n);let r=new ao(30,1,.1,50);r.position.set(1.1,1.5,4.2),r.lookAt(0,1.05,0);for(let n of Dd){let i=new Fd(n.look);i.root.rotation.y=.35,i.armR.rotation.x=-.6,i.armL.rotation.z=.5,t.add(i.root),e.render(t,r),this.portraits[n.id]=e.domElement.toDataURL(),t.remove(i.root)}e.dispose(),e.forceContextLoss()}spawnInitialVehicles(){let e=Nu.find(e=>e.kind===`garage`);[`sedan`,`muscle`,`sports`,`truck`,`motorbike`,`bicycle`,`couch`,`bun`].forEach((t,n)=>this.addVehicle(new ef(t,e.cx-17+n*4.9,e.cz-13,0))),this.addVehicle(new ef(`heli`,e.cx+10,e.cz+10,Math.PI)),this.addVehicle(new ef(`police`,e.cx-12,e.cz+12,Math.PI/2)),this.addVehicle(new ef(`plane`,fu.x0+20,24,Math.PI/2)),this.addVehicle(new ef(`plane`,fu.x0+20,0,Math.PI/2)),this.addVehicle(new ef(`heli`,fu.x0+80,-40,0)),this.addVehicle(new ef(`plane`,-270,0,Math.PI/2));for(let e of Pu)Math.random()<.6&&this.addVehicle(new ef(q([`sedan`,`sedan`,`muscle`,`sports`,`taxi`,`motorbike`,`bicycle`,`bun`]),e.x,e.z,e.yaw));this.addVehicle(new ef(`couch`,-100,312,0)),this.addVehicle(new ef(`cart`,e.cx-14,e.cz+4,Math.PI/2)),this.addVehicle(new ef(`hamster`,e.cx+16,e.cz-2,0)),this.addVehicle(new ef(`tub`,90,404,0)),this.addVehicle(new ef(`tub`,70,340,Math.PI));let t=Nu.find(e=>e.kind===`bounce`);t&&(this.addVehicle(new ef(`hamster`,t.cx,t.cz+18,0)),this.addVehicle(new ef(`cart`,t.cx-4,t.z1+4,Math.PI/2)));for(let[e,t,n]of[[`muscle`,-360,-20],[`sports`,-360,-26],[`motorbike`,-360,-14],[`cart`,-366,-20],[`hamster`,-380,20],[`truck`,-372,-40]])this.addVehicle(new ef(e,t,n,-Math.PI/2));this.addVehicle(new ef(`motorbike`,60,306,Math.PI/2))}addVehicle(e){return this.vehicles.push(e),this.scene.add(e.mesh),e}removeVehicle(e){this.scene.remove(e.mesh),this.vehicles.splice(this.vehicles.indexOf(e),1)}spawnVehicleNearPlayer(e){let t=this.playerFocus(),n=Zl(this.camYaw),r=t.x+n.x*8,i=t.z+n.z*8,a=this.addVehicle(new ef(e,r,i,this.camYaw+Math.PI/2));return a.isAir()&&this.player.vehicle?.isAir()&&(a.pos.y=t.y),this.fx.confetti(a.pos.clone().setY(a.pos.y+2),30),this.sfx(`pop`),a}start(e){e&&this.selectCharacter(e),this.started=!0,localStorage.getItem(`cc-seen-controls`)||(this.hud.toggleControls(!0),localStorage.setItem(`cc-seen-controls`,`1`)),this.hud.toast(`Welcome to <b>Costa Chaos</b>. Grab a ride from the <b>MOD GARAGE</b>.`,`good`);let t=this.input.touch.active;setTimeout(()=>this.started&&this.hud.toast(t?`Drag the right side to look. Left stick to run.`:`<b>Click</b> to look around · <b>WASD</b> to run · <b>F1</b> for controls`,``,`cue`),3400),setTimeout(()=>this.started&&this.hud.toast(t?`<b>🎭</b> emote · <b>⏪</b> instant replay · <b>☰</b> menu`:`<b>T</b> emote · <b>R</b> instant replay · <b>N</b> radio station`,``,`cue`),7200)}playerFocus(){return this.player.vehicle?this.player.vehicle.pos:this.player.pos}sfx(e,t=1,n){if(n){let e=n.distanceTo(this.camera.position);if(t*=ql(1-e/140,0,1),t<.05)return}this.audio.play(e,t)}shake(e){this.shakeAmt=Math.max(this.shakeAmt,e)}addMoney(e,t=!0){let n=Math.round(e*(t&&this.perk.cash||1));return this.money+=n,n>0&&this.sfx(`cash`),n}setHeat(e){let t=this.stars;if(this.heat=ql(e,0,5.99),this.stars>t&&(this.sfx(`star`),this.hiddenT=0,this.pers?.event(`stars`,this.stars)),this.heat===0&&t>0&&this.pers?.event(`clear`),this.heat===0)for(let e of this.vehicles)e.ai?.mode===`police`&&(e.ai.mode=`leave`)}crime(e){this.setHeat(Math.max(this.heat,0)+e),this.lastSeen=this.elapsed}applyHeads(){this.player?.model.setGiantHead(this.cheats.bigHeads);for(let e of this.peds)e.model.setGiantHead(this.cheats.bigHeads)}obstacles(){let e=[];for(let t of this.vehicles)e.push(t);for(let t of this.peds)t.state!==`dead`&&t.pos.y<3&&e.push(t);return this.player.vehicle||e.push(this.player),e}alarm(e,t){for(let n of this.peds)!n.isCop&&(n.state===`walk`||n.state===`idle`||n.state===`flee`)&&n.pos.distanceTo(e)<t&&(n.state=`flee`,n.timer=K(6,12),n.fleeFrom.copy(e));for(let n of this.vehicles)n.ai?.mode===`traffic`&&n.pos.distanceTo(e)<t&&(n.ai.panic=8)}pedScream(e){e.pos.distanceTo(this.camera.position)<30&&Math.random()<.3&&this.sfx(`scream`,.6,e.pos)}equip(e){this.owned.includes(e)?(this.dropYoink(!1),this.curWeapon=nf(e),this.refreshWeaponModel()):this.hud.toast(`Locked. Try the console: <b>POCKETARSENAL</b>`)}cycleWeapon(e){let t=tf.filter(e=>this.owned.includes(e.id)),n=t.indexOf(this.curWeapon);this.equip(t[(n+e+t.length)%t.length].id)}refreshWeaponModel(){let e=this.player.model.weaponSlot;e.clear();let t=af(this.curWeapon.id);t&&e.add(t)}aimRay(){let e=this.camera.position.clone(),t=new V;return this.camera.getWorldDirection(t),{o:e,d:t}}muzzle(){let e=this.player;if(e.vehicle)return e.vehicle.pos.clone().add(new V(0,e.vehicle.def.kind===`plane`?2:1.6,0)).addScaledVector(Zl(e.vehicle.yaw),e.vehicle.def.radius+.5);let t=Zl(e.yaw),n=Ql(e.yaw);return e.pos.clone().add(new V(0,1.45,0)).addScaledVector(t,.6).addScaledVector(n,.35)}rayBodies(e,t,n,r){let i=n,a=null,o=new V;for(let n of this.peds)if(n.state!==`held`)for(let r of[.5,1.1,1.55]){o.copy(n.pos).y+=r*(n.state===`dead`?.3:1);let s=o.sub(e),c=s.dot(t);if(c<0||c>i)continue;let l=s.lengthSq()-c*c,u=this.cheats.bigHeads&&r>1.4?.8:.45;l<u*u&&(i=c,a={type:`ped`,ref:n})}for(let n of this.vehicles){if(n===r)continue;let o=yp(e,t,n);o<i&&(i=o,a={type:`veh`,ref:n})}for(let n of this.props.list){if(n.def.pole||n.held||n.kind===`peel`)continue;o.copy(n.pos).sub(e);let r=o.dot(t);if(r<0||r>i)continue;let s=Math.max(n.def.r,n.def.hh)*.9;o.lengthSq()-r*r<s*s&&(i=r,a={type:`prop`,ref:n})}return{t:i,body:a}}fire(){let e=this.curWeapon,t=this.player;if(this.fireCd>0)return;this.fireCd=1/e.rate,t.aimT=1.2,t.vehicle||(t.yaw=this.camYaw);let n=e.mod&&this.perk.mod||1,{o:r,d:i}=this.aimRay(),a=t.vehicle;if(e.type===`melee`){if(t.vehicle)return;t.punchT=.3;let n=Zl(t.yaw),r=t.pos.clone().addScaledVector(n,1.1).setY(t.pos.y+1),i=!1;for(let a of this.peds)a.alive&&a.state!==`held`&&a.pos.distanceTo(r)<e.range&&Math.abs(a.pos.y-t.pos.y)<1.5&&(this.damageBody({type:`ped`,ref:a},e.dmg,n.clone().multiplyScalar(e.force).setY(e.force*.45),r),i=!0);for(let r of this.vehicles)r.pos.distanceTo(t.pos)<r.def.radius+1.2&&(r.damage(e.dmg*.2,this,`player`),r.vel.addScaledVector(n,e.force*.2/r.def.mass),i=!0);this.props.each(r.x,r.z,3,t=>{t.pos.distanceTo(r)<e.range+t.def.r+.4&&(this.props.hit(t,n.clone().multiplyScalar(e.force*.45).setY(e.force*.25),this),i=!0)}),i&&(this.hitStop=Math.max(this.hitStop,e.id===`bat`?.07:.04)),this.sfx(i?`punch`:`whoosh`,i?1:.4);return}if(e.type===`hitscan`){let n=e.pellets||1,o=this.muzzle(),s=ju(r,i,e.range),c=this.rayBodies(r,i,s,a),l=r.clone().addScaledVector(i,c.t);for(let t=0;t<n;t++){let t=l.clone().sub(o).normalize();t.x+=(Math.random()-.5)*e.spread*2,t.y+=(Math.random()-.5)*e.spread*2,t.z+=(Math.random()-.5)*e.spread*2,t.normalize();let n=ju(o,t,e.range),r=this.rayBodies(o,t,n,a),i=o.clone().addScaledVector(t,r.t);this.fx.tracer(o,i,e.tracer||`#fff3a0`),r.body?this.damageBody(r.body,e.dmg,t.clone().multiplyScalar(e.force),i):r.t<e.range-.1&&this.fx.hit(i,`#cccccc`),e.id===`confetti`&&this.fx.confetti(i,3)}this.fx.add(o,new V(0,1,0),.06,.3,`#fff2a8`,0),this.sfx(e.id===`shotgun`?`shotgun`:e.id===`smg`?`smg`:e.id===`confetti`?`confetti`:`pistol`,.7),this.alarm(t.pos,40),this.copsNear(60)&&this.crime(.04);return}if(e.type===`grav`){this.yoinkAction();return}if(e.type===`blast`){this.hurricane(e,n);return}let o=this.muzzle(),s=ju(r,i,300),c=r.clone().addScaledVector(i,Math.min(s,300)).sub(o).normalize(),l=e.proj,u=t.vehicle?t.vehicle.vel.clone():new V;if(l===`dummy`){let e=new ff(this.scene,o.x,o.z,`dummy`);e.pos.copy(o),e.knock(c.clone().multiplyScalar(38*n).add(new V(0,6,0)).add(u)),e.thrown=!0,e.model.setGiantHead(this.cheats.bigHeads),this.peds.push(e),this.sfx(`whoosh`),this.sfx(`pop`,.6);return}let d=l===`rocket`?60:l===`bubble`?16:l===`chicken`?30:l===`hole`?26:l===`peel`?17:22,f=c.clone().multiplyScalar(d).add(u);(l===`grenade`||l===`chicken`||l===`boing`)&&(f.y+=6),l===`peel`&&(f.y+=4,f.x+=K(-1.5,1.5),f.z+=K(-1.5,1.5));let p=sf(l);p.position.copy(o),this.scene.add(p),this.projs.push({kind:l,mesh:p,pos:o.clone(),vel:f,life:l===`grenade`?2.2:l===`bubble`?3.5:l===`hole`?1.1:l===`boing`?2.4:6,bounces:0,dmg:e.dmg*n,force:e.force*n}),this.sfx(l===`chicken`?`bawk`:l===`bubble`||l===`peel`||l===`boing`?`pop`:`whoosh`)}copsNear(e){let t=this.playerFocus();return this.peds.some(n=>n.isCop&&n.alive&&n.pos.distanceTo(t)<e)||this.vehicles.some(n=>n.def.id===`police`&&n.driver===`ai`&&n.pos.distanceTo(t)<e)}damageBody(e,t,n,r){if(e.type===`ped`){let i=e.ref;this.fx.hit(r,i.isDummy?`#ffd60a`:`#ff4d6d`);let a=i.alive;i.hurt(t,this,`player`),(n.length()>6||!i.alive)&&i.knock(n.clone().add(new V(0,Math.min(8,n.length()*.3),0))),a&&!i.isDummy&&this.crime(i.isCop?.8:.15),this.alarm(i.pos,25)}else if(e.type===`prop`){let t=e.ref;this.fx.sparks(r,5),t.kind===`barrel`&&(--t.hp,t.hp<=0&&!this.burning.includes(t)&&(this.burning.push(t),t.burnT=1.4,this.hud.floatText(t.pos.clone().setY(t.pos.y+1.5),`uh oh`,`#ff7b00`))),this.props.hit(t,n.clone().multiplyScalar(.25).setY(1.5+n.length()*.05),this)}else{let i=e.ref;this.fx.hit(r,`#ffcf70`),i.damage(t*.6,this,`player`),i.vel.addScaledVector(n,.15/i.def.mass),i.driver===`ai`&&i.ai?.mode===`traffic`&&(i.ai.panic=8),i.def.id===`police`&&i.driver===`ai`&&this.crime(.3)}}explosion(e,t,n,r,i){this.fx.boom(e,t),this.sfx(`boom`,1,e);let a=e.distanceTo(this.camera.position);this.shake(ql(1.2-a/60,0,1));for(let i of this.peds){let a=i.pos.distanceTo(e);if(a>t*1.6)continue;let o=1-a/(t*1.6),s=i.pos.clone().sub(e).setY(0).normalize().multiplyScalar(22*o).setY(14*o+4),c=i.alive;i.hurt(n*o,this,r),i.knock(s),c&&r===`player`&&!i.isDummy&&this.crime(i.isCop?.6:.2)}for(let a of this.vehicles){if(a===i)continue;let o=a.pos.distanceTo(e);if(o>t*1.5)continue;let s=1-o/(t*1.5);a.vel.add(a.pos.clone().sub(e).setY(0).normalize().multiplyScalar(14*s/a.def.mass).setY(10*s/a.def.mass)),a.onGround=!1,a.tumble(K(-5,5)*s/a.def.mass,K(-3,3)*s/a.def.mass),setTimeout(()=>a.damage(n*s*.8,this,r),120+Math.random()*250),a.ai?.mode===`traffic`&&(a.ai.panic=8)}let o=this.player,s=this.playerFocus().distanceTo(e);if(s<t*1.4){let r=1-s/(t*1.4);o.vehicle?o.vehicle!==i&&o.vehicle.damage(n*r*.5*(this.perk.blast||1),this):(this.hurtPlayer(n*r*.6*(this.perk.blast||1)),this.knockPlayer(o.pos.clone().sub(e).setY(0).normalize().multiplyScalar(18*r).setY(12*r+3)))}this.props.each(e.x,e.z,t*1.6,n=>{let i=n.pos.distanceTo(e);if(i>t*1.6)return;let a=1-i/(t*1.6);n.kind===`barrel`&&a>.25&&!this.burning.includes(n)&&(this.burning.push(n),n.burnT=K(.15,.5)),this.props.hit(n,n.pos.clone().sub(e).setY(0).normalize().multiplyScalar(20*a).setY(12*a+3),this,r)}),a<70&&this.hud.flash(ql(.55-a/120,.08,.5),`#ffd8a8`),r===`player`&&this.chaos(30,`KABLOOEY`,e),this.alarm(e,70),r===`player`&&this.crime(.1)}explodeNearby(){let e=this.playerFocus();this.vehicles.filter(t=>t!==this.player.vehicle&&!t.destroyed&&t.pos.distanceTo(e)<60).forEach((e,t)=>setTimeout(()=>e.explode(this),150*t))}yoinkAction(){if(this.yoinked){this.dropYoink(!0);return}let{o:e,d:t}=this.aimRay(),n=ju(e,t,60),r=this.rayBodies(e,t,n,this.player.vehicle).body;if(!r){let n=.94,i=null,a=new V;for(let r of this.peds){if(r.state===`held`)continue;a.copy(r.pos).y+=1;let o=a.sub(e),s=o.length();if(s>50)continue;let c=o.dot(t)/s;c>n&&(n=c,i={type:`ped`,ref:r})}for(let r of this.vehicles){if(r===this.player.vehicle)continue;a.copy(r.pos);let o=a.sub(e),s=o.length();if(s>50)continue;let c=o.dot(t)/s;c>n&&(n=c,i={type:`veh`,ref:r})}let o=this.playerFocus();for(let r of this.props.near(o.x,o.z,40,[])){if(r.def.pole||r.state===`dead`)continue;a.copy(r.pos);let o=a.sub(e),s=o.length();if(s>40)continue;let c=o.dot(t)/s;c>n&&(n=c,i={type:`prop`,ref:r})}r=i}if(!r)this.sfx(`whoosh`,.3);else{if(r.type===`veh`&&r.ref.driver===`ai`&&this.ejectDriver(r.ref,!1),this.yoinked=r,r.type===`ped`)r.ref.state=`held`;else if(r.type===`prop`){let e=r.ref;if(e.state===`static`&&this.props.breakStatic(e,new V(0,6,0),this),e.state===`dead`)return;e.held=!0,e.state=`awake`,this.props.wakeAbove(e)}else r.ref.held=!0;this.sfx(`yoink`)}}dropYoink(e){let t=this.yoinked;if(!t)return;this.yoinked=null;let{d:n}=this.aimRay(),r=this.curWeapon.force*(this.perk.mod||1),i=n.clone().multiplyScalar(e?r:0).add(new V(0,e?5:0,0));if(t.type===`ped`)t.ref.state=`ragdoll`,t.ref.knock(i),t.ref.thrown=!0,t.ref.isDummy||this.crime(.2);else if(t.type===`prop`){let n=t.ref;n.held=!1,n.state=`awake`,n.sleepT=0,n.lastHitBy=`player`,n.vel.copy(i).multiplyScalar(e?1.1:0),n.ang.set(K(-6,6),K(-6,6),K(-6,6))}else t.ref.held=!1,t.ref.vel.copy(i.multiplyScalar(.8/Math.sqrt(t.ref.def.mass))),t.ref.onGround=!1,t.ref.yawRate=K(-3,3),t.ref.lastHitBy=`player`,t.ref.thrownT=3;e&&(this.sfx(`yeet`),this.hud.floatText(this.bodyPos(t).clone().setY(this.bodyPos(t).y+2),`YEET!`,`#4cc9f0`))}bodyPos(e){return e.ref.pos}updateYoink(e){let t=this.yoinked;if(!t)return;if(this.curWeapon.id!==`yoink`||t.type===`veh`&&t.ref===this.player.vehicle){this.dropYoink(!1);return}let{o:n,d:r}=this.aimRay(),i=t.type===`veh`?9+t.ref.def.radius:6,a=this.playerFocus().clone().add(new V(0,t.type===`veh`?3.5:2.5,0)).addScaledVector(r.clone().setY(Math.max(-.2,r.y)).normalize(),i),o=t.ref.pos;if(o.lerp(a,Math.min(1,e*8)),t.type===`veh`)t.ref.yaw+=e*.8,t.ref.vel.set(0,0,0);else if(t.type===`prop`){let n=t.ref;n.vel.set(0,0,0),n.quat.multiply(new Ct().setFromEuler(new nn(e*2,e*3,0))),this.props.gridMove(n),this.props.writeMatrix(n)}else t.ref.model.root.rotation.y+=e*3,t.ref.model.root.rotation.z=Math.sin(this.elapsed*6)*.4;this.fx.tracer(this.muzzle(),o.clone().setY(o.y+.8),`#4cc9f0`),Math.random()<e*30&&this.fx.add(o.clone().add(new V(K(-1,1),K(0,2),K(-1,1))),new V(0,1,0),.4,.15,`#4cc9f0`,0)}updateProjs(e){let t=this.gravity;for(let n=this.projs.length-1;n>=0;n--){let r=this.projs[n];r.life-=e;let i=!1;r.kind===`rocket`?Math.random()<.8&&this.fx.smoke(r.pos.clone(),!1):r.kind===`hole`?(r.vel.multiplyScalar(1-e*.8),Math.random()<.7&&this.fx.add(r.pos.clone(),new V(K(-1,1),K(-1,1),K(-1,1)),.4,.25,`#c77dff`,0)):r.kind===`bubble`?r.vel.y=Math.sin(r.life*6)*.8:r.vel.y-=t*e,r.pos.addScaledVector(r.vel,e);let a=$(r.pos.x,r.pos.z),o=Au(r.pos,.3);if(r.pos.y<a+.2||o){if(r.kind===`rocket`||r.kind===`hole`||r.kind===`boing`)i=!0;else if(r.kind===`peel`)r.pos.y=a+.1,i=!0;else if(r.kind===`bubble`)this.popBubble(r),r.life=0;else{if(r.bounces++,o){let e=-r.vel.dot(o);r.vel.addScaledVector(o,e*1.6)}else r.pos.y=a+.2,r.vel.y=Math.abs(r.vel.y)*.45,r.vel.x*=.7,r.vel.z*=.7;r.kind===`chicken`&&(this.sfx(`bawk`,.5,r.pos),r.bounces>=2&&(i=!0))}}if(!i&&r.life>0){for(let e of this.peds)if((e.alive||r.kind===`rocket`)&&e.state!==`held`&&Math.hypot(e.pos.x-r.pos.x,e.pos.z-r.pos.z)<(r.kind===`bubble`?1.3:.9)&&r.pos.y>e.pos.y-.3&&r.pos.y<e.pos.y+2.2){r.kind===`bubble`?(e.state=`float`,e.timer=6,e.vel.set(0,1,0),this.sfx(`pop`),this.hud.floatText(e.pos.clone().setY(e.pos.y+2),`wheee~`,`#9be7ff`),r.life=0):r.kind!==`grenade`&&(i=!0);break}}if(!i&&r.life>0&&r.kind!==`grenade`&&r.kind!==`peel`){for(let e of this.props.near(r.pos.x,r.pos.z,3,this._pn))if(!(e.state===`dead`||e.def.pole||e.kind===`peel`||e.kind===`fruit`)&&e.pos.distanceTo(r.pos)<Math.max(e.def.r,e.def.hh)+.3){r.kind===`bubble`?(this.props.hit(e,new V(0,9,0),this),r.life=0):i=!0;break}}if(!i&&r.life>0){for(let t of this.vehicles)if(t!==this.player.vehicle&&yp(r.pos.clone().addScaledVector(r.vel,-e),r.vel.clone().normalize(),t)<r.vel.length()*e+.5){r.kind===`bubble`?(t.floatT=6,t.onGround=!1,this.sfx(`pop`),r.life=0):r.kind===`peel`?(t.spinOutT=1.6,this.hud.floatText(t.pos.clone().setY(t.pos.y+3),`SLIPPERY!`,`#ffe135`),r.life=0):r.kind!==`grenade`&&(i=!0);break}}if((r.kind===`grenade`||r.kind===`hole`||r.kind===`boing`)&&r.life<=0&&(i=!0),i&&r.kind===`hole`)this.vortices.push({pos:r.pos.clone().setY(Math.max(r.pos.y,$(r.pos.x,r.pos.z)+2.5)),t:0,dmg:r.dmg,mesh:this.vortexMesh(r.pos)}),this.sfx(`yoink`),this.hud.floatText(r.pos.clone().setY(r.pos.y+2),`SPAGHETTIFICATION`,`#c77dff`),r.life=0,i=!1;else if(i&&r.kind===`boing`)this.boingBurst(r.pos.clone(),r.force),r.life=0,i=!1;else if(i&&r.kind===`peel`){let e=this.props.add(`peel`,r.pos.x,r.pos.z,K(0,6),Math.max(r.pos.y,$(r.pos.x,r.pos.z)+.06),`awake`);e&&(e.life=90,this.peels.push(e)),r.life=0,i=!1}if(i){let e=r.kind===`chicken`?6:8;this.explosion(r.pos.clone(),e,r.dmg,`player`),r.kind===`chicken`&&(this.fx.feathers(r.pos),this.hud.floatText(r.pos.clone().setY(r.pos.y+2),`BAWK!`,`#ffe66d`)),r.life=0}r.life<=0?(r.kind===`bubble`&&!i&&this.fx.burst(r.pos,8,3,[`#bdf6ff`,`#ffffff`],.1,.5,0),this.scene.remove(r.mesh),this.projs.splice(n,1)):(r.mesh.position.copy(r.pos),r.kind===`rocket`||r.kind===`chicken`?r.mesh.lookAt(r.pos.clone().add(r.vel)):r.kind===`hole`?r.mesh.scale.setScalar(.8+Math.sin(this.elapsed*30)*.2):r.mesh.rotation.x+=e*(r.kind===`peel`?14:5))}}popBubble(e){this.fx.burst(e.pos,8,3,[`#bdf6ff`,`#ffffff`],.1,.5,0),this.sfx(`pop`,.5,e.pos)}bowl(e){for(let t of this.peds)t!==e&&t.alive&&t.state!==`ragdoll`&&t.state!==`held`&&t.pos.distanceTo(e.pos)<1.3&&(t.hurt(12,this,`player`),t.knock(e.vel.clone().multiplyScalar(.7).setY(6)),t.isDummy||this.hud.floatText(t.pos.clone().setY(t.pos.y+2),`STRIKE!`,`#ffd60a`),this.sfx(`punch`,.6,t.pos))}hurtPlayer(e){this.cheats.god||this.deadT>0||(this.player.health-=e,this.hud.root.classList.add(`hurt`),setTimeout(()=>this.hud.root.classList.remove(`hurt`),150),this.player.health<=0&&this.die())}knockPlayer(e){let t=this.player;t.vehicle||(t.vel.copy(e),t.ragdollT=1.6,t.onGround=!1,t.spin.set(K(-5,5),K(-5,5),K(-5,5)))}die(){if(this.deadT>0)return;this.deadT=3.2,this.player.health=0;let e=this.player;e.vehicle&&this.exitVehicle(!0),e.ragdollT=3.2,e.vel.y+=4;let t=Math.min(this.money,Math.max(100,Math.min(2500,Math.floor(this.money*.1))));this.money-=t,this.hud.bigText(q(jf),`${q(Mf)} −${ou(t)}<br><small class="tipline">TIP: ${q(Lf)}</small>`,3.2,`dead`),this.pers?.event(`death`)}bust(){if(this.bustT>0||this.deadT>0)return;this.bustT=3;let e=Math.min(this.money,Math.max(250,Math.min(4e3,Math.floor(this.money*.15))));this.money-=e,this.hud.bigText(q(Nf),`${q(Pf)} Bail: ${ou(e)}.<br><small class="tipline">TIP: ${q(Lf)}</small>`,3,`busted`),this.pers?.event(`busted`)}respawn(e){let t=this.player;this.hud.clearTransient(),t.pos.copy(e),t.pos.y=$(e.x,e.z),t.vel.set(0,0,0),t.ragdollT=0,t.health=this.maxHealth,t.model.root.rotation.set(0,0,0),this.setHeat(0);for(let e of this.peds)e.isCop&&(e.state=`walk`,e.nearestCorner())}tryEnterExit(){let e=this.player;if(e.vehicle){this.exitVehicle(!1);return}let t=null,n=6;for(let r of this.vehicles){if(r.destroyed||r.held)continue;let i=r.pos.distanceTo(e.pos)-r.def.radius;i<n&&(n=i,t=r)}t&&this.enterVehicle(t)}ejectDriver(e,t){if(e.driver!==`ai`)return;let n=Ql(e.yaw),r=new ff(this.scene,e.pos.x+n.x*2,e.pos.z+n.z*2,e.def.id===`police`?`cop`:`civ`);r.model.setGiantHead(this.cheats.bigHeads),t&&r.knock(n.clone().multiplyScalar(6).setY(4)),r.isCop?r.state=`chase`:r.fleeFrom.copy(e.pos),r.nearestCorner(),r.isCop?r.state=`chase`:t||(r.state=`flee`,r.timer=8),this.peds.push(r),e.driver=null,e.ai=null,e._ejected=r,t&&r.isCop?this.crime(1.2):t&&!this.perk.noJackHeat&&this.crime(.35)}enterVehicle(e){let t=this.player,n=e.driver===`ai`;n&&(this.ejectDriver(e,!0),this.hud.floatText(e.pos.clone().setY(e.pos.y+3),`YOINK!`,`#ff9f1c`)),this.pers?.event(`enter`,{v:e,stolen:n,ped:e._ejected}),this.dropYoink(!1),t.vehicle=e,e.driver=`player`,e.ai=null,e.speedMul=this.cheats.fastCars?2:1,t.model.root.visible=e.def.seat===`top`,this.hud.vehiclePopup(e.def.name,e.def.blurb),this.sfx(`door`),this.hud.toasts.querySelectorAll(`[data-k="veh"]`).forEach(e=>e.remove()),e.def.kind===`plane`&&e.onGround&&this.hud.toast(`Plane: hold <b>W</b> to build speed, <b>Space</b> to pull up.`,``,`veh`),(e.def.kind===`heli`||e.def.kind===`hover`)&&this.hud.toast(`${e.def.name}: <b>Space</b> up, <b>Shift</b> down.`,``,`veh`)}exitVehicle(e){let t=this.player,n=t.vehicle;if(!n)return;this.hud.toasts.querySelectorAll(`[data-k="veh"]`).forEach(e=>e.remove()),this.hud.popup.classList.remove(`show`),!e&&n.speed>25&&n.isAir(),t.vehicle=null,n.driver=null,n.input={throttle:0,steer:0,brake:+!n.isAir(),up:0,pitch:0};let r=Ql(n.yaw);t.pos.copy(n.pos).addScaledVector(r,n.def.radius*.6+1.2),t.pos.y=n.pos.y+.5,t.vel.copy(n.vel),t.model.root.visible=!0,t.model.root.rotation.set(0,n.yaw,0),t.yaw=n.yaw,n.speed>14&&(t.ragdollT=1.8,t.spin.set(3,2,4),this.hud.floatText(t.pos.clone().setY(t.pos.y+2),`BAIL!`,`#ff4d6d`)),this.sfx(`door`)}updatePlayer(e){let t=this.player,n=this.input,r=n.touch,i=t.model;if(this.deadT>0&&(this.deadT-=e,this.deadT<=0&&(this.respawn(Iu),this.hud.toast(q(Ff)))),this.bustT>0&&(this.bustT-=e,t.vel.set(0,0,0),this.bustT<=0&&(this.respawn(Fu),this.hud.toast(q(If)))),t.vehicle){let a=t.vehicle,o=+!!r.jump,s=+!!r.down;if(a.input.throttle=+!!n.down(`KeyW`,`ArrowUp`)-!!n.down(`KeyS`,`ArrowDown`)+r.my,a.input.steer=+!!n.down(`KeyA`,`ArrowLeft`)-!!n.down(`KeyD`,`ArrowRight`)-r.mx,a.input.throttle=ql(a.input.throttle,-1,1),a.input.steer=ql(a.input.steer,-1,1),a.input.brake=!a.isAir()&&(n.down(`Space`)||r.jump)?1:0,a.input.up=+!!n.down(`Space`)+o-+!!n.down(`ShiftLeft`,`ShiftRight`,`ControlLeft`)-s,a.speedMul=this.cheats.fastCars?2:1,n.hit(`KeyH`)&&(this.sfx(`horn`),this.alarm(a.pos,15)),a.flipped&&a.flippedT>.5&&(n.down(`Space`)||r.jump)&&(a.unflip(),this.sfx(`whoosh`),this.hud.floatText(a.pos.clone().setY(a.pos.y+3),`HUP!`,`#06d6a0`)),t.pos.copy(a.pos),t.yaw=a.yaw,a.def.seat===`top`&&(i.root.position.copy(a.pos).add(new V(0,a.model.seatY,0).applyEuler(a.mesh.rotation)),i.root.rotation.copy(a.mesh.rotation),i.animate(e,0,`sit`),a.def.kind===`bike`&&(i.legL.rotation.x=-.9,i.legR.rotation.x=-.9,i.armL.rotation.x=-1.2,i.armR.rotation.x=-1.2,i.body.position.y=-.35),a.def.kind===`bike`&&a.def.id===`bicycle`)){let e=this.elapsed*a.speed;i.legL.rotation.x=-.9+Math.sin(e)*.5,i.legR.rotation.x=-.9-Math.sin(e)*.5}a.destroyed&&(this.exitVehicle(!0),this.knockPlayer(new V(K(-6,6),10,K(-6,6))),this.hurtPlayer(25));return}if(t.ragdollT>0){t.ragdollT-=e,t.vel.y-=this.gravity*e,t.pos.addScaledVector(t.vel,e);let n=Math.max($(t.pos.x,t.pos.z),t.pos.y<-1.2?du-.6:-99),r=this.bail,a=!1,o=this.trampolineAt(t.pos.x,t.pos.z,t.pos.y,t.vel.y);if(o)t.vel.y=o,t.spin.set(K(-9,9),K(-4,4),K(-9,9)),r&&r.bounces++,this.chaos(10,`BOING`,t.pos);else if(t.pos.y<n+.2){t.pos.y=n+.2,a=!0;let o=this.cheats.bouncy||this.isBouncy(t.pos.x,t.pos.z);if(t.vel.y<-3?(t.vel.y*=o?-.85:-.3,t.vel.y>4&&r&&r.bounces++,t.vel.y<-12&&this.fx.dust(t.pos,6)):t.vel.y=0,t.vel.x*=1-e*(o?1:4),t.vel.z*=1-e*(o?1:4),t.spin.multiplyScalar(1-e*3),t.spin.lengthSq()<4&&Math.abs(t.vel.y)<1){let t=i.root.rotation,n=Math.round((t.x-Math.PI/2)/Math.PI)*Math.PI+Math.PI/2;t.x+=(n-t.x)*Math.min(1,e*7),t.z*=1-Math.min(1,e*7)}}let s=Au(t.pos,.45);if(s){let e=-t.vel.dot(s);e>0&&(t.vel.addScaledVector(s,e*1.5),e>10&&(this.shake(.3),this.sfx(`punch`,.8),r&&r.bounces++,this.chaos(12,`WALL SPLAT`,t.pos),this.hurtPlayer(Math.max(0,e-16))))}let c=t.vel.length();if(c>7)for(let e of this.peds)e.alive&&e.state!==`ragdoll`&&e.state!==`held`&&e.pos.distanceTo(t.pos)<1.4&&(e.hurt(10,this,`player`),e.knock(t.vel.clone().multiplyScalar(.7).setY(6)),this.chaos(15,`HUMAN BOWLING`,e.pos),r&&r.smashes++);i.root.position.copy(t.pos),i.root.rotation.x+=t.spin.x*e,i.root.rotation.y+=t.spin.y*e*.5,i.root.rotation.z+=t.spin.z*e,i.animate(e,0,`ragdoll`),r&&(r.t+=e,a?r.ground+=e:r.air+=e,r.maxH=Math.max(r.maxH,t.pos.y),r.spins+=(Math.abs(t.spin.x)+Math.abs(t.spin.z))*e/(Math.PI*2)*!a,(!a||c>2.5)&&(t.ragdollT=Math.max(t.ragdollT,.35)),r.t>25&&(t.ragdollT=Math.min(t.ragdollT,.01))),t.ragdollT<=0&&(this.bail&&this.finishBail(),this.deadT<=0&&(i.root.rotation.set(0,t.yaw,0),t.vel.set(0,0,0)));return}if(this.bustT>0){i.animate(e,0,`ground`),i.armL.rotation.x=-2.8,i.armR.rotation.x=-2.8;return}let a=+!!n.down(`KeyD`,`ArrowRight`)-!!n.down(`KeyA`,`ArrowLeft`)+r.mx,o=+!!n.down(`KeyW`,`ArrowUp`)-!!n.down(`KeyS`,`ArrowDown`)+r.my,s=Math.hypot(a,o);s>1&&(a/=s,o/=s);let c=n.down(`ShiftLeft`,`ShiftRight`)||r.run,l=Zl(this.camYaw),u=Ql(this.camYaw),d=new V().addScaledVector(l,o).addScaledVector(u,a),f=t.pos.y<-2&&$(t.pos.x,t.pos.z)<-2.2,p=(f?3:c?8.5*(this.perk.speed||1):4.2)*(this.cheats.superJump?1.3:1),m=d.multiplyScalar(p),h=t.onGround||f?12:3;t.vel.x=Jl(t.vel.x,m.x,Math.min(1,e*h)),t.vel.z=Jl(t.vel.z,m.z,Math.min(1,e*h)),t.aimT=Math.max(0,t.aimT-e);let g=t.aimT>0&&this.curWeapon.type!==`melee`;g||this.yoinked?t.yaw+=Xl(t.yaw,this.camYaw)*Math.min(1,e*15):s>.1&&(t.yaw+=Xl(t.yaw,Math.atan2(m.x,m.z))*Math.min(1,e*10)),(n.hit(`Space`)||r.jump&&t.onGround)&&(t.onGround||f)&&(t.vel.y=this.cheats.superJump?19:7.5,t.onGround=!1),t.vel.y-=this.gravity*e,t.pos.addScaledVector(t.vel,e);let _=$(t.pos.x,t.pos.z);for(let e of this.vehicles)e.def.kind===`plane`||e.held||Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<e.def.radius*.6&&t.pos.y>e.pos.y+1.2&&(_=Math.max(_,e.pos.y+(e.def.id===`truck`||e.def.id===`bun`?3.8:1.75)));f&&t.pos.y<-2.2&&(t.pos.y=du-1,t.vel.y=Math.max(0,t.vel.y));let v=this.stunts.topAt(t.pos.x,t.pos.z);if(v>-1e9&&t.pos.y>v-.7){if(t.pos.y<=v&&t.vel.y<-1){let e=Math.min(48,Math.max(17,-t.vel.y*1.08))*(n.down(`Space`)||r.jump?1.15:1);this.stunts.trampolineAt(t.pos.x,t.pos.z,v,-5),t.pos.y=v+.02,t.vel.y=e,t.onGround=!1,this.sfx(`pop`,.5),e>30&&this.chaos(10,`BIG BOING`,t.pos)}_=Math.max(_,v)}t.pos.y<=_&&t.vel.y<-6&&(this.cheats.bouncy||this.isBouncy(t.pos.x,t.pos.z))&&(t.pos.y=_+.02,t.vel.y=-t.vel.y*.8,t.onGround=!1,this.sfx(`pop`,.3)),t.pos.y<=_?(t.vel.y<-18&&!this.cheats.lowGrav&&!this.isBouncy(t.pos.x,t.pos.z)&&(this.hurtPlayer((-t.vel.y-18)*4),t.vel.y<-22&&this.knockPlayer(new V(t.vel.x,3,t.vel.z))),t.pos.y=_,t.vel.y=0,t.onGround=!0):t.pos.y>_+.3&&(t.onGround=!1),Au(t.pos,.45);for(let e of this.vehicles){if(e.held)continue;let n=t.pos.x-e.pos.x,r=t.pos.z-e.pos.z,i=Math.hypot(n,r),a=e.def.radius*.75+.4;if(i<a&&i>.01&&t.pos.y<e.pos.y+1.6){if(e.speed>6){this.hurtPlayer(e.speed*1.2),this.knockPlayer(e.vel.clone().multiplyScalar(.9).setY(e.speed*.4+3)),this.sfx(`punch`,1),this.pers?.event(`hitByCar`,{speed:e.speed}),e.driver===`ai`&&this.pers?.vehBark(e,`driver`);return}t.pos.x=e.pos.x+n/i*a,t.pos.z=e.pos.z+r/i*a}}t.swim=f,t.punchT=Math.max(0,t.punchT-e),i.root.position.copy(t.pos),i.root.rotation.set(0,t.yaw,0);let y=Math.hypot(t.vel.x,t.vel.z);i.animate(e,y,f?`swim`:t.onGround?`ground`:`air`,t.punchT>0?1-t.punchT/.3:0,g),this.stars>0&&y<2&&(t.cuffT=this.peds.find(e=>e.isCop&&e.alive&&e.state===`chase`&&e.pos.distanceTo(t.pos)<2.2)?(t.cuffT||0)+e:0,t.cuffT>2.2&&(t.cuffT=0,this.bust()))}copAttack(e,t,n){let r=this.player,i=this.playerFocus().clone().setY(this.playerFocus().y+1.2),a=e.pos.clone().setY(e.pos.y+1.45);if(t===`melee`){r.vehicle||(this.hurtPlayer(6),this.sfx(`punch`,.7));return}if(ju(a,i.clone().sub(a).normalize(),n)<n-1)return;let o=r.vehicle?r.vehicle.speed:Math.hypot(r.vel.x,r.vel.z),s=ql(.5-n/60-o/60,.08,.5),c=Math.random()<s,l=c?i:i.clone().add(new V(K(-2,2),K(-1,2),K(-2,2)));this.fx.tracer(a,l,`#9ecbff`),this.sfx(`pistol`,.4,a),c&&(r.vehicle?r.vehicle.damage(4,this):this.hurtPlayer(7))}deployCops(e){for(let t of[-1,1]){let n=Ql(e.yaw),r=new ff(this.scene,e.pos.x+n.x*t*2.4,e.pos.z+n.z*t*2.4,`cop`);r.state=`chase`,r.model.setGiantHead(this.cheats.bigHeads),this.peds.push(r)}}onPedKilled(e,t){if(!(e.dropped||e.isDummy)&&(e.dropped=!0,t===`player`||t===`world`)){let n=this.addMoney(Math.floor(K(5,60)));this.hud.floatText(e.pos.clone().setY(e.pos.y+1.8),`+${ou(n)}`),t===`player`&&this.crime(e.isCop?1:.45)}}onVehicleDestroyed(e){if(e.lastHitBy===`player`||e===this.player.vehicle){let t=this.addMoney(e.def.id===`police`?300:120);this.hud.floatText(e.pos.clone().setY(e.pos.y+3),`KABOOM +${ou(t)}`,`#ffb703`),this.chaos(50,`TOTALED`,e.pos),this.pers?.event(`totaled`),e.lastHitBy===`player`&&this.crime(e.def.id===`police`?1:.35)}if(e.driver===`ai`){let t=new ff(this.scene,e.pos.x,e.pos.z,e.def.id===`police`?`cop`:`civ`);t.pos.y=e.pos.y+1,t.hp=0,t.state=`dead`,t.knock(new V(K(-8,8),12,K(-8,8))),t.dropped=!0,this.peds.push(t),e.driver=null}}onStuntLanding(e,t){let n=this.addMoney(Math.floor(e*e*40),!1),r=t?Math.round(t.flipSum/(Math.PI*2)||0):0,i=t&&!t.flipped;this.hud.bigText(e>3?`ABSOLUTELY SENT IT`:e>2?`MEGA AIR`:`SICK AIR`,`${e.toFixed(1)}s airtime${r?` · ${r} flip${r>1?`s`:``}`:``}${i?``:` · landed on the roof (counts)`} · +${ou(n)}`,1.8,`stunt`),this.chaos(Math.round(e*40+r*100),r?`FLIP x`+r:`AIRTIME`,t?.pos),t===this.player.vehicle&&this.pers?.event(`stunt`,{air:e,flips:r}),t&&(t.flipSum=0,this.fx.dust(t.pos,12),this.shake(Math.min(.6,e*.15))),this.sfx(`stunt`)}chaos(e,t,n){let r=this.combo;r.count++,r.t=4,r.mult=Math.min(10,1+Math.floor(r.count/3));let i=Math.round(e*r.mult);r.pts+=i,r.last=t,this.pers?.event(`combo`,r.mult),t===`HUMAN BOWLING`||t===`ROADKILL`?this.pers?.event(`bowled`):(t===`SLIPPED`||t===`BANANA DRIFT`)&&this.pers?.event(`slip`),n&&this.comboFloatCd<=0&&n.distanceTo(this.camera.position)<70&&(this.comboFloatCd=.12,this.hud.floatText(n.clone().setY(n.y+1.6),`${t} +${i}`,`#ffd166`))}updateCombo(e){this.comboFloatCd-=e;let t=this.combo;if(!(t.t<=0)&&(t.t-=e,t.t<=0)){if(t.pts>0){this.pers?.event(`comboBank`,{count:t.count,mult:t.mult});let e=this.addMoney(Math.round(t.pts/4),!1);t.count>=4&&this.hud.toast(`Chaos combo banked: <b>${t.count} hits ×${t.mult}</b> → +${ou(e)}`,`good`)}t.pts=0,t.count=0,t.mult=1,t.last=``}}isBouncy(e,t){return this.stunts.isBouncy(e,t)}trampolineAt(e,t,n,r){let i=this.stunts.trampolineAt(e,t,n,r);return i&&r<-6&&this.sfx(`pop`,.35),i}geyserPush(e){let t=this.player;!t.vehicle&&Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<1.3&&t.pos.y<e.y+9&&(t.vel.y=Math.max(t.vel.y,15),t.onGround=!1,t.ragdollT<=0&&(this.knockPlayer(new V(K(-2,2),15,K(-2,2))),this.chaos(15,`HYDRO-YEET`,t.pos)));for(let t of this.peds)Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<1.3&&t.pos.y<e.y+9&&t.state!==`held`&&(t.state!==`ragdoll`&&t.state!==`dead`?t.knock(new V(K(-2,2),15,K(-2,2))):t.vel.y=Math.max(t.vel.y,13));for(let t of this.vehicles)!t.isAir()&&Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<t.def.radius*.7&&t.pos.y<e.y+6&&(t.vel.y=Math.max(t.vel.y,11/Math.sqrt(t.def.mass)),t.onGround=!1,t.tumble(K(-1,1),K(-1,1)))}onVehicleFlipped(e){e.driver===`player`?(this.chaos(40,`ROLLOVER`,e.pos),this.shake(.4),this.pers?.event(`rollover`),this.flipHintShown||(this.flipHintShown=!0,this.hud.toast(`Upside down! Press <b>${this.input.touch.active?`▲`:`Space`}</b> to flip back, or <b>B</b> to bail.`))):(e.lastHitBy===`player`&&this.chaos(30,`FLIPPED EM`,e.pos),e.driver===`ai`&&setTimeout(()=>{e.flipped&&e.driver===`ai`&&this.ejectDriver(e,!1)},1200))}hurricane(e,t){let n=this.muzzle(),{d:r}=this.aimRay(),i=r.clone();i.y=Math.max(i.y,-.1),i.normalize();let a=e.range,o=e.force*t,s=new V,c=e=>{s.copy(e).sub(n);let t=s.length();return t>a||t<.01?0:s.dot(i)/t>.72?(1-t/a)*.7+.3:0};for(let t of this.peds){let n=c(t.pos.clone().setY(t.pos.y+1));if(!n||t.state===`held`)continue;let r=t.alive;t.hurt(e.dmg,this,`player`),t.knock(i.clone().multiplyScalar(o*n).setY(8*n+4)),t.thrown=!0,r&&!t.isDummy&&this.crime(.1),this.chaos(8,`AIRMAILED`,t.pos)}for(let e of this.vehicles){if(e===this.player.vehicle)continue;let t=c(e.pos);t&&(e.vel.addScaledVector(i,o*.55*t/e.def.mass),e.vel.y+=7*t/e.def.mass,e.onGround=!1,e.tumble(K(-4,4)*t,K(-2,2)*t),e.lastHitBy=`player`,e.ai?.mode===`traffic`&&(e.ai.panic=8))}let l=n.clone().addScaledVector(i,a/2);this.props.each(l.x,l.z,a/2+2,e=>{let t=c(e.pos);t&&this.props.hit(e,i.clone().multiplyScalar(o*.5*t).setY(6*t),this)});for(let e=0;e<40;e++){let e=i.clone().add(new V(K(-.35,.35),K(-.2,.3),K(-.35,.35))).normalize().multiplyScalar(K(18,34));this.fx.add(n.clone(),e,K(.4,.8),K(.12,.3),Math.random()<.6?`#e0f7ff`:`#9be7ff`,0,1.5,1)}for(let e=0;e<6;e++)this.fx.add(n.clone().addScaledVector(i,K(2,a)),i.clone().multiplyScalar(14).add(new V(0,2,0)),.6,K(.1,.18),`#6b705c`,0,.5,0);this.sfx(`whoosh`,1),this.sfx(`whoosh`,.6),this.shake(.15),this.alarm(n,30)}boingBurst(e,t){this.sfx(`pop`,1),this.sfx(`stunt`,.6),this.fx.burst(e,40,14,[`#ff70a6`,`#ffd6e8`,`#ffffff`,`#ff006e`],.2,1,.5),this.hud.floatText(e.clone().setY(e.y+2),`BOING!`,`#ff70a6`);for(let n of this.peds){let r=n.pos.distanceTo(e);if(r>12||n.state===`held`)continue;let i=1-r/12;n.knock(n.pos.clone().sub(e).setY(0).normalize().multiplyScalar(6*i).setY(t*(.6+i*.6))),this.chaos(6,`BOING`,n.pos)}for(let n of this.vehicles){let r=n.pos.distanceTo(e);if(r>12+n.def.radius)continue;let i=Math.max(.3,1-r/12);n.vel.y+=t*.8*i/Math.sqrt(n.def.mass),n.onGround=!1,n.bouncyT=10,n.tumble(K(-3,3)*i,K(-2,2)*i)}this.props.each(e.x,e.z,12,n=>{let r=n.pos.distanceTo(e);if(r>12)return;let i=1-r/12;n.bouncyT=10,this.props.hit(n,new V(K(-2,2),t*.7*i+4,K(-2,2)),this)});let n=this.player,r=this.playerFocus().distanceTo(e);if(r<12){let i=1-r/12;n.vehicle?n.vehicle.isAir()||(n.vehicle.vel.y+=t*.8*i,n.vehicle.onGround=!1,n.vehicle.bouncyT=10):(this.startBail(`boing`),this.knockPlayer(n.pos.clone().sub(e).setY(0).normalize().multiplyScalar(5).setY(t*(.7+i*.5))))}}updateVortices(e){let t=new V,n=new V,r=(r,i,a,o)=>{t.copy(a).sub(r);let s=t.length();if(s>26||s<.01)return!1;t.divideScalar(s),n.set(-t.z,0,t.x);let c=(1-s/26)*.7+.3;return s>2.2?i.addScaledVector(t,46*c*o*e):i.multiplyScalar(1-e*3),i.addScaledVector(n,30*c*o*e),i.y+=(a.y-r.y)*2*e*o+14*e*o,!0};for(let t=this.vortices.length-1;t>=0;t--){let n=this.vortices[t];n.t+=e;let i=n.pos;if(this.fx.vortex(i,n.t),n.mesh){n.mesh.position.copy(i);let t=Math.min(1,n.t*3)*(n.t>2.9?Math.max(.05,(3.2-n.t)/.3):1);n.mesh.scale.setScalar(t),n.mesh.children[1].rotation.z+=e*9,n.mesh.children[2].rotation.z-=e*5,n.mesh.lookAt(this.camera.position)}Math.random()<e*4&&this.shake(.12);for(let e of this.peds)e.state!==`held`&&(e.pos.distanceTo(i)>26||(e.state!==`ragdoll`&&e.state!==`dead`&&(e.knock(new V(0,4,0)),e.thrown=!0),r(e.pos,e.vel,i,1),e.timer=0));for(let t of this.vehicles){if(t.held||t.pos.distanceTo(i)>26)continue;let n=(t===this.player.vehicle?.35:.9)/Math.sqrt(t.def.mass);r(t.pos,t.vel,i,n)&&(t.onGround=!1,Math.random()<e*2&&t.tumble(K(-2,2),K(-1,1)))}this.props.each(i.x,i.z,26,e=>{e.def.pole?e.state===`static`&&e.pos.distanceTo(i)<12&&this.props.hit(e,i.clone().sub(e.pos).setY(0).normalize().multiplyScalar(8),this):e.held||(e.state!==`awake`&&this.props.hit(e,new V(0,6,0),this),r(e.pos,e.vel,i,1.2))});let a=this.player;if(!a.vehicle&&a.pos.distanceTo(i)<15.6&&(a.ragdollT<=0&&(this.startBail(`vortex`),this.knockPlayer(new V(0,5,0))),r(a.pos,a.vel,i,.6),a.ragdollT=Math.max(a.ragdollT,.5)),n.t>3.2){this.vortices.splice(t,1),n.mesh&&this.scene.remove(n.mesh),this.explosion(i,9,n.dmg,`player`);for(let e of this.peds){let t=e.pos.distanceTo(i);t<26&&e.vel.add(e.pos.clone().sub(i).normalize().multiplyScalar(30*(1-t/26)).setY(14))}this.fx.burst(i,50,22,[`#8338ec`,`#c77dff`,`#ffffff`,`#3a0ca3`],.25,1.2,0),this.hud.flash(.5,`#c77dff`)}}}vortexMesh(e){let t=new xn;t.position.copy(e),t.add(new W(new ua(1.3,20,14),new ni({color:`#05000a`})));let n=(e,t)=>new ni({color:e,transparent:!0,opacity:t,blending:2,depthWrite:!1,side:2});return t.add(new W(new la(1.4,3.6,40,1,0,Math.PI*1.7),n(`#c77dff`,.8))),t.add(new W(new la(1.3,5.2,40,1,0,Math.PI*1.2),n(`#7b2cbf`,.45))),this.scene.add(t),t}updateBurning(e){for(let t=this.burning.length-1;t>=0;t--){let n=this.burning[t];n.state===`dead`?this.burning.splice(t,1):(n.burnT-=e,Math.random()<.7&&this.fx.fire(n.pos.clone().setY(n.pos.y+.7)),n.burnT<=0&&(this.burning.splice(t,1),this.props.explodeBarrel(n,this)))}}updateCannons(e){let t=this.player,n=this.playerFocus();for(let r of this.stunts.cannons){let i=Math.hypot(n.x-r.x,n.z-r.z);if(r.fuse<0&&r.cd<=0&&i<4.2&&n.y<$(r.x,r.z)+4&&(r.fuse=1.3,this.sfx(`cheat`,.7),this.hud.bigText(`FUSE LIT`,`Stay in the barrel. Trust the process.`,1.3,`stunt`)),r.fuse>0){r.fuse-=e;let n=this.stunts.muzzle(r);if(Math.random()<.6&&this.fx.sparks(n.clone().setY(n.y-2),2),i<14){let n=$(r.x,r.z);if(t.vehicle){let i=t.vehicle;i.pos.x+=(r.x-i.pos.x)*Math.min(1,e*10),i.pos.z+=(r.z-i.pos.z)*Math.min(1,e*10),i.vel.set(0,Math.min(0,i.vel.y),0),i.pos.y<n&&(i.pos.y=n)}else t.ragdollT<=0&&(t.pos.x+=(r.x-t.pos.x)*Math.min(1,e*8),t.pos.z+=(r.z-t.pos.z)*Math.min(1,e*8),t.vel.set(0,0,0))}if(r.fuse<=0){r.fuse=-1,r.cd=3;let e=this.stunts.launchDir(r),n=this.stunts.muzzle(r);if(this.fx.boom(n,4),this.fx.confetti(n,50),this.sfx(`boom`,1),this.shake(.9),this.hud.flash(.45,`#fff3b0`),Math.hypot(this.playerFocus().x-r.x,this.playerFocus().z-r.z)<9){if(t.vehicle){let i=t.vehicle;i.pos.copy(n),i.vel.copy(e).multiplyScalar(r.power*.95),i.onGround=!1,i.launchT=3.2,i.tumble(K(-2,2),K(1,3))}else t.pos.copy(n),this.startBail(`cannon`),this.knockPlayer(e.clone().multiplyScalar(r.power));this.hud.bigText(`YEETED`,`${r.power} m/s of pure regret`,1.6,`stunt`),this.chaos(80,`CANNONBALL`,n),this.pers?.event(`cannon`)}for(let t of this.peds)Math.hypot(t.pos.x-r.x,t.pos.z-r.z)<5&&(t.pos.copy(n),t.knock(e.clone().multiplyScalar(r.power*.9)),t.thrown=!0);this.props.each(r.x,r.z,5,t=>{t.def.pole||(t.pos.copy(n),this.props.hit(t,e.clone().multiplyScalar(r.power*Math.max(.3,t.def.mass)),this))})}}}}startBail(e){if(this.bail)return;let t=this.player;this.bail={why:e,t:0,air:0,start:t.pos.clone(),maxH:t.pos.y,spins:0,bounces:0,smashes:0,ground:0}}doBail(){let e=this.player;if(!(this.deadT>0||this.bustT>0||this.bail)){if(e.vehicle){let t=e.vehicle,n=t.vel.clone();this.exitVehicle(!0),e.pos.copy(t.pos).setY(t.pos.y+2.2),this.startBail(`vehicle`),this.knockPlayer(n.multiplyScalar(1.05).add(new V(0,9+n.length()*.12,0))),t.vel.multiplyScalar(.9)}else{this.startBail(`dive`);let t=Zl(this.camYaw),n=Math.hypot(e.vel.x,e.vel.z);this.knockPlayer(t.multiplyScalar(10+n*.8).setY(e.onGround?8:Math.max(e.vel.y,3)))}e.spin.set(K(-9,9),K(-4,4),K(-9,9)),this.sfx(`whoosh`),this.hud.floatText(e.pos.clone().setY(e.pos.y+2),q([`BAIL!`,`NOPE!`,`YOLO`,`EJECT!`]),`#06d6a0`)}}finishBail(){let e=this.bail;if(this.bail=null,!e)return;let t=this.player,n=Math.hypot(t.pos.x-e.start.x,t.pos.z-e.start.z),r=Math.max(0,e.maxH-e.start.y),i=[[`Airtime`,Math.round(e.air*120)],[`Distance`,Math.round(n*4)],[`Height`,Math.round(r*6)],[`Spins`,Math.round(e.spins)*60],[`Bounces`,e.bounces*80],[`Collateral`,e.smashes*50]],a=i.reduce((e,[,t])=>e+t,0);if(a<60)return;let o=a>4e3?`LEGENDARY`:a>2e3?`GLORIOUS`:a>900?`SPICY`:a>300?`DECENT`:`MID`,s=this.addMoney(Math.round(a/5),!1);this.chaos(Math.round(a/10),`BAIL `+o),this.pers?.event(`bail`,{total:a,grade:o,dist:n,why:e.why}),this.hud.bailCard(`<h4>BAIL: ${o}</h4>${i.filter(([,e])=>e>0).map(([e,t])=>`${e} <b>+${t}</b>`).join(`<br>`)}<br><span class="tot">${a.toLocaleString()} pts · +${ou(s)}</span>`),this.sfx(`stunt`)}updateWacky(e){this.stunts.update(e,this.elapsed),this.props.update(e,this),this.updateCombo(e),this.updateVortices(e),this.updateBurning(e),this.updateCannons(e);let t=this.player,n=this._pn,r=this.camera.position;for(let t of this.vehicles){if(t.held)continue;let i=t.pos.distanceTo(r),a=t.def.kind===`plane`?4:t.def.radius*.75;if(t.vel.length()>1&&t.def.kind!==`heli`||t.def.kind===`heli`&&t.pos.y-$(t.pos.x,t.pos.z)<4)for(let e of this.props.near(t.pos.x,t.pos.z,a+3,n)){if(e.state===`dead`||e.held)continue;let n=e.def.pole?.35:e.def.r,r=e.pos.x-t.pos.x,o=e.pos.z-t.pos.z,s=Math.hypot(r,o);if(s>a+n||!e.def.pole&&(e.pos.y<t.pos.y-1.2||e.pos.y>t.pos.y+3))continue;if(e.kind===`peel`){!t.isAir()&&t.spinOutT<=0&&(t.spinOutT=1.6,t.driver===`player`&&(this.hud.floatText(t.pos.clone().setY(t.pos.y+3),`SLIPPERY!`,`#ffe135`),this.chaos(15,`BANANA DRIFT`,t.pos)),this.props.remove(e));continue}let c=Math.max(0,(t.vel.x*r+t.vel.z*o)/(s||1)-(e.vel.x*r+e.vel.z*o)/(s||1)),l=t.driver===`player`||t.thrownT>0||t.lastHitBy===`player`;if(e.state===`static`&&(c*Math.sqrt(t.def.mass)<e.def.breakSpeed||!l)){let e=r/(s||1),i=o/(s||1),c=a+n-s;t.pos.x-=e*c,t.pos.z-=i*c;let l=t.vel.x*e+t.vel.z*i;l>0&&(t.vel.x-=e*l*1.3,t.vel.z-=i*l*1.3);continue}if(c<.5&&e.state!==`static`)continue;let u=t.vel.clone().multiplyScalar(1.15*Math.min(2,t.def.mass)).add(new V(r,0,o).normalize().multiplyScalar(2)).setY(Math.max(2,c*.35)),d=t.driver===`player`||t.thrownT>0?`player`:null;this.props.hit(e,u,this,d),t.vel.multiplyScalar(1-Math.min(.25,e.def.mass*.06/t.def.mass)),c>6&&(this.sfx(`crash`,Math.min(.6,c/40),e.pos),i<60&&this.fx.sparks(e.pos.clone().setY(e.pos.y+.5),4)),d===`player`&&e.state!==`dead`&&this.chaos(4,`BONK`,e.pos),t.driver===`player`&&this.shake(Math.min(.25,c/60))}if(i>90)t._mk=null;else{if((t.def.kind===`car`||t.def.kind===`bike`)&&t.onGround&&!t.flipped&&(t.drifting>0||t.input.brake>0&&t.speed>7||t.spinOutT>0)){let n=Zl(t.yaw),r=Ql(t.yaw),i=t.def.radius*.6,a=(t.def.kind===`bike`?[0]:[-.85,.85]).map(e=>t.pos.clone().addScaledVector(n,-i).addScaledVector(r,e).setY($(t.pos.x,t.pos.z))),o=t._mk;o&&a.forEach((e,n)=>this.fx.mark(o[n],e,t.def.kind===`bike`?.22:.34)),t._mk=a,Math.random()<e*22&&this.fx.driftSmoke(a[Math.floor(Math.random()*a.length)])}else t._mk=null;t.destroyed&&t.deadTime<14&&Math.random()<.5?this.fx.fire(t.pos.clone().add(new V(K(-1,1),1.2,K(-1,1)))):!t.destroyed&&t.burning>0&&Math.random()<.35&&this.fx.fire(t.pos.clone().addScaledVector(Zl(t.yaw),t.def.radius*.6).setY(t.pos.y+1.3)),t.onGround&&t.speed>20&&!t.isAir()&&(Math.abs(t.pos.x)>330||t.pos.z>294)&&Math.random()<e*10&&this.fx.dust(t.pos.clone().addScaledVector(Zl(t.yaw),-t.def.radius),2)}}if(!t.vehicle){let e=Math.hypot(t.vel.x,t.vel.z),r=Math.hypot(e,t.vel.y);for(let i of this.props.near(t.pos.x,t.pos.z,3.5,n)){if(i.state===`dead`||i.held)continue;let n=i.def.pole?.3:i.def.r,a=i.pos.x-t.pos.x,o=i.pos.z-t.pos.z,s=Math.hypot(a,o);if(s>n+.45||!i.def.pole&&(i.pos.y+i.def.hh<t.pos.y+.05||i.pos.y-i.def.hh>t.pos.y+1.8))continue;if(i.kind===`peel`){t.ragdollT<=0&&t.onGround&&e>1&&(this.startBail(`peel`),this.knockPlayer(new V(t.vel.x*1.6,6,t.vel.z*1.6)),t.spin.set(-12,0,K(-2,2)),this.hud.floatText(t.pos.clone().setY(t.pos.y+2),`WHOOPS`,`#ffe135`),this.sfx(`whoosh`),this.chaos(20,`SLIPPED`,t.pos),this.props.hit(i,new V(t.vel.x,2,t.vel.z),this));continue}let c=a/(s||1),l=o/(s||1);if(t.ragdollT>0&&r>5){this.props.hit(i,t.vel.clone().multiplyScalar(.7).setY(Math.max(3,t.vel.y*.3)),this),this.bail&&!i._bh&&(i._bh=1,this.bail.smashes++,setTimeout(()=>i._bh=0,1500));continue}let u=Math.max(0,t.vel.x*c+t.vel.z*l),d=!i.def.pole&&i.def.mass<=.8&&i.kind!==`stand`;if(d&&i.state!==`static`||i.state===`static`&&d&&u>i.def.breakSpeed*.8)this.props.hit(i,new V(c*(u+2),1,l*(u+2)),this);else{let e=n+.45-s;t.pos.x-=c*e,t.pos.z-=l*e}}}if(this.peels.length){this.peels=this.peels.filter(e=>e.state!==`dead`);for(let e of this.peds)if(e.state===`walk`||e.state===`flee`||e.state===`chase`){for(let t of this.peels)if(Math.abs(t.pos.x-e.pos.x)<.7&&Math.abs(t.pos.z-e.pos.z)<.7){e.knock(new V(Math.sin(e.yaw)*5,6,Math.cos(e.yaw)*5)),e.spin.set(-12,0,K(-2,2)),this.chaos(10,`SLIPPED`,e.pos),this.pedScream(e),this.props.hit(t,new V(K(-3,3),2,K(-3,3)),this);break}}}for(let e of this.peds)if(!(e.state!==`ragdoll`&&e.state!==`dead`||e.vel.lengthSq()<49))for(let t of this.props.near(e.pos.x,e.pos.z,2,n))!t.def.pole&&t.state!==`dead`&&t.pos.distanceTo(e.pos)<t.def.r+.6&&this.props.hit(t,e.vel.clone().multiplyScalar(.6),this,e.thrown?`player`:null);let i=this.peds.filter(e=>e.state===`dead`&&!e.isDummy&&this.yoinked?.ref!==e);if(i.length>14){i.sort((e,t)=>t.timer-e.timer);for(let e of i.slice(0,i.length-14))e.dispose(),this.peds.splice(this.peds.indexOf(e),1)}let a=this.peds.filter(e=>e.isDummy&&this.yoinked?.ref!==e);if(a.length>12){a.sort((e,t)=>t.life-e.life);for(let e of a.slice(0,a.length-12))e.dispose(),this.peds.splice(this.peds.indexOf(e),1)}}declutterCamera(e,t=!1){let n=this.camera.position,r=e.clone().sub(n),i=r.lengthSq(),a=new V,o=e=>{a.copy(e).sub(n);let t=ql(a.dot(r)/(i||1),0,1);return{d:a.addScaledVector(r,-t).length(),t}},s=(e,n)=>{t&&n||(e.visible=n)};for(let e of this.peds){if(e.state===`held`){s(e.model.root,!0);continue}let t=e.pos.clone();t.y+=e.state===`ragdoll`||e.state===`dead`?.4:1;let{d:r,t:i}=o(t);s(e.model.root,!(n.distanceTo(t)<3.2||r<.95&&i<.88))}let c=this.player.vehicle;for(let e of this.vehicles){let t=e.def.radius;if(e===c){s(e.mesh,n.distanceTo(e.pos)>t*.75);continue}let r=a.copy(e.pos);r.y+=t*.4;let i=n.distanceTo(r)<t*.95+.8,{d:l,t:u}=o(e.pos.clone().setY(e.pos.y+t*.4));s(e.mesh,!(i||l<t*.8&&u<.85))}let l=e.x,u=e.z,d=n.x,f=n.z,p=l-d,m=u-f,h=p*p+m*m||1;for(let e of xu){let t=e.x-d,n=e.z-f;if(t*t+n*n>900){e.hidden&&Cu(e,!1);continue}let r=ql((t*p+n*m)/h,0,1),i=t-p*r,a=n-m*r,o=e.r+.9;Cu(e,i*i+a*a<o*o&&r<.92||t*t+n*n<(e.r+2.5)*(e.r+2.5))}}updatePopulation(e){let t=this.playerFocus();for(let e=this.peds.length-1;e>=0;e--){let n=this.peds[e];if(n.pos.distanceTo(t)>170||n.state===`dead`&&n.timer>25||n.isDummy&&n.life>15){if(this.yoinked?.ref===n)continue;n.dispose(),this.peds.splice(e,1)}}for(let e=this.vehicles.length-1;e>=0;e--){let n=this.vehicles[e];if(n===this.player.vehicle||this.yoinked?.ref===n)continue;let r=n.pos.distanceTo(t);(n.ai&&r>230||n.ai?.mode===`leave`&&r>120||n.destroyed&&n.deadTime>30&&r>40||n.ai?.leaving>10)&&this.removeVehicle(n)}let n=Math.abs(t.x)<330&&t.z>-330&&t.z<330,r=this.peds.filter(e=>!e.isCop&&!e.isDummy).length;if(n&&r<34&&this.spawnCd<=0){this.spawnCd=.12;let e=Nu.filter(e=>{let n=Math.hypot(e.cx-t.x,e.cz-t.z);return n>40&&n<140});if(e.length){let t=q(e),n=Math.floor(K(0,4)),r=n===0||n===3?t.x0+2:t.x1-2,i=n<2?t.z0+2:t.z1-2,a=new ff(this.scene,r+K(-3,3),i+K(-3,3));a.setBlock(t),a.model.setGiantHead(this.cheats.bigHeads),this.peds.push(a)}}if(t.z>200&&this.peds.length<40&&Math.random()<e*2){let e=t.x+K(-80,80),n=K(302,318);if(Math.abs(e)<400){let t=new ff(this.scene,e,n);t.state=`walk`,t.target.set(e+K(-30,30),0,n),this.peds.push(t)}}this.spawnCd-=e;let i=this.vehicles.filter(e=>e.ai?.mode===`traffic`).length;if(n&&i<16&&this.trafficCd<=0){this.trafficCd=.3;let e=yf(t,70,160);if(e&&!this.vehicles.some(t=>t.pos.distanceTo(e.p)<8)){let t=this.addVehicle(new ef(q([`sedan`,`sedan`,`taxi`,`taxi`,`muscle`,`sports`,`truck`,`bun`,`motorbike`,`sedan`]),e.p.x,e.p.z,e.yaw));t.driver=`ai`,gf(t,e.i,e.j,e.d)}}this.trafficCd-=e;let a=this.stars,o=[0,1,2,3,4,6][a];if(this.vehicles.filter(e=>e.ai?.mode===`police`&&e.def.id===`police`&&!e.destroyed).length<o&&this.copCd<=0){this.copCd=3;let e=yf(t,70,150)||{p:t.clone().add(new V(K(-80,80),0,K(-80,80))),yaw:0},n=this.addVehicle(new ef(`police`,e.p.x,e.p.z,e.yaw));n.driver=`ai`,n.ai={mode:`police`,stuck:0,reverse:0}}this.copCd-=e;let s=this.vehicles.filter(e=>e.ai?.mode===`policeHeli`&&!e.destroyed).length;if(a>=4&&s<1){let e=this.addVehicle(new ef(`heli`,t.x+80,t.z+80,0,`#1d3557`));e.pos.y=t.y+50,e.driver=`ai`,e.ai={mode:`policeHeli`},e.engine=1,this.hud.toast(`🚁 Police chopper inbound. They brought a spotlight and a grudge.`,`bad`)}}updateWanted(e){if(this.heat<=0)this.hiddenT=0;else{if(this.copsNear(this.stars>=3?90:65)||this.vehicles.some(e=>e.ai?.mode===`policeHeli`&&e.pos.distanceTo(this.playerFocus())<100))this.lastSeen=this.elapsed,this.hiddenT=0;else{this.hiddenT+=e*(this.perk.heat||1);let t=6+this.stars*2.5;this.hiddenT>t&&(this.hiddenT=0,this.setHeat(this.stars>0?this.stars-1+(this.stars===1?0:.01):0),this.stars===0&&(this.heat=0,this.hud.toast(`You lost the cops. Act natural.`,`good`)))}this.stars===0&&this.heat>0&&(this.heat=Math.max(0,this.heat-e*.05)),this.heliShotCd-=e;for(let e of this.vehicles)if(e.ai?.mode===`policeHeli`&&this.heliShotCd<=0&&this.stars>=4){this.heliShotCd=1.3;let t={pos:e.pos.clone().setY(e.pos.y-2)};this.copAttack(t,`shoot`,e.pos.distanceTo(this.playerFocus()))}}}updateCollisions(){let e=this.vehicles;for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let r=e[t],i=e[n];if(r.held||i.held)continue;let a=i.pos.x-r.pos.x,o=i.pos.z-r.pos.z,s=i.pos.y-r.pos.y,c=(r.def.radius+i.def.radius)*.72;if(Math.abs(s)>2.5)continue;let l=a*a+o*o;if(l>c*c||l<1e-4)continue;let u=Math.sqrt(l),d=a/u,f=o/u,p=c-u,m=r.def.mass,h=i.def.mass,g=m+h;r.pos.x-=d*p*(h/g),r.pos.z-=f*p*(h/g),i.pos.x+=d*p*(m/g),i.pos.z+=f*p*(m/g);let _=(i.vel.x-r.vel.x)*d+(i.vel.z-r.vel.z)*f;if(_<0){let e=-1.4*_/(1/m+1/h);r.vel.x-=e/m*d,r.vel.z-=e/m*f,i.vel.x+=e/h*d,i.vel.z+=e/h*f;let t=-_;if(t>8&&(r.damage((t-8)*1.6*(h/g)*2,this,i.driver===`player`||i.thrownT?`player`:null),i.damage((t-8)*1.6*(m/g)*2,this,r.driver===`player`||r.thrownT?`player`:null),this.sfx(`crash`,t/25,r.pos),r.driver===`player`||i.driver===`player`)){this.shake(Math.min(.8,t/30));let e=r.driver===`player`?i:r;e.def.id===`police`&&e.driver===`ai`&&this.crime(.3),e.ai?.mode===`traffic`&&(e.ai.panic=6)}}}for(let t of e){let e=t.speed+Math.abs(t.vel.y)*.5;for(let n of this.peds){if(n.state===`held`||n.state===`float`)continue;let r=n.pos.x-t.pos.x,i=n.pos.z-t.pos.z,a=t.def.radius*.8+.4;if(!(r*r+i*i>a*a||Math.abs(n.pos.y+.8-(t.pos.y+.8))>2.2)){if(e>5){if(n.state===`ragdoll`&&n.timer<.3)continue;let r=n.alive;n.hurt(e*2.2,this,t.driver===`player`||t.thrownT?`player`:`world`),n.knock(t.vel.clone().multiplyScalar(1.05).setY(e*.45+3)),this.sfx(`punch`,.8,n.pos),t.driver===`player`&&this.chaos(n.isDummy?5:10,`ROADKILL`,n.pos),t.driver===`player`&&r&&!n.isDummy&&(this.crime(n.isCop?.8:.25),Math.random()<.3&&this.hud.floatText(n.pos.clone().setY(n.pos.y+2),q([`BONK!`,`OOF`,`SORRY!`,`STRIKE!`,`YIKES`]),`#ff4d6d`)),t.driver===`player`&&this.shake(.15)}else if(n.state!==`dead`&&n.state!==`ragdoll`){let e=Math.sqrt(r*r+i*i)||1;n.pos.x=t.pos.x+r/e*a,n.pos.z=t.pos.z+i/e*a,!n.isCop&&n.state===`walk`&&t.driver===`player`&&(n.state=`flee`,n.timer=4,n.fleeFrom.copy(t.pos))}}}t.thrownT>0&&(t.thrownT-=1/60)}let t=this.peds;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let r=t[e],i=t[n];if(!r.alive||!i.alive||r.state===`ragdoll`||i.state===`ragdoll`)continue;let a=i.pos.x-r.pos.x,o=i.pos.z-r.pos.z,s=a*a+o*o;if(s<.49&&s>1e-4){let e=Math.sqrt(s),t=(.7-e)/2;r.pos.x-=a/e*t,r.pos.z-=o/e*t,i.pos.x+=a/e*t,i.pos.z+=o/e*t}}}runConsole(e){let t=e.trim(),[n,...r]=t.split(/\s+/),i=n.toLowerCase(),a=Cf(t);if(a)return[this.activateCheat(a.code)];if(dp.includes(t.toUpperCase()))return this.pers.hiddenCode(t.toUpperCase()),[`...honk.`];switch(i){case`help`:return[`Commands: <b>cheats</b> · <b>spawn &lt;vehicle&gt;</b> · <b>vehicles</b> · <b>tp &lt;garage|beach|airfield|hills|police|hospital|stunts|park|bounce|cannon|desert&gt;</b> · <b>time &lt;0-24&gt;</b> · <b>weather &lt;clear|rain|storm|fog|disco&gt;</b> · <b>money &lt;n&gt;</b> · <b>char &lt;id&gt;</b> · <b>wanted &lt;0-5&gt;</b> · <b>quality &lt;low|medium|high&gt;</b>`,`Or type any cheat code directly.`];case`cheats`:case`codes`:return Jf();case`vehicles`:return[zd.map(e=>`<b>${e}</b> (${Rd[e].name})`).join(`, `)];case`spawn`:{let e=(r[0]||``).toLowerCase(),t=zd.find(t=>t===e||Rd[t].name.toLowerCase().replace(/\W/g,``).startsWith(e.replace(/\W/g,``)));return!t||!e?[`Unknown vehicle. Try: `+zd.join(`, `)]:(this.spawnVehicleNearPlayer(t),[`Spawned ${Rd[t].name}.`])}case`tp`:{let e={garage:[0,-4],beach:[-60,312],airfield:[fu.x0+30,40],hills:[-450,-420],stunts:[-360,-6],park:[-360,-6],bounce:[Nu.find(e=>e.kind===`bounce`)?.cx??0,(Nu.find(e=>e.kind===`bounce`)?.cz??0)+24],cannon:[-352,60],police:[Fu.x,Fu.z],hospital:[Iu.x,Iu.z],desert:[520,-300]},t=e[(r[0]||``).toLowerCase()];return t?(this.player.vehicle&&this.exitVehicle(!0),this.player.pos.set(t[0],$(t[0],t[1])+1,t[1]),this.player.vel.set(0,0,0),this.hud.clearTransient(),this.cameraSmooth=!1,[`Teleported to ${r[0]}.`]):[`Places: `+Object.keys(e).join(`, `)]}case`time`:{let e=parseFloat(r[0]);return isNaN(e)?[`time &lt;0-24&gt;`]:(this.sky.time=ql(e,0,23.99),[`Time set to ${e}:00.`])}case`weather`:{let e=r[0]||``;return[`clear`,`rain`,`storm`,`fog`,`disco`].includes(e)?(this.sky.weather=e,[`Weather: ${e}.`]):[`weather clear|rain|storm|fog|disco`]}case`money`:{let e=parseInt(r[0]);return isNaN(e)?[`money &lt;amount&gt;`]:(this.money=e,[`Money set. The IRS has been notified.`])}case`wanted`:{let e=parseInt(r[0]);return isNaN(e)?[`wanted 0-5`]:(this.setHeat(e===0?0:e+.01),[`Wanted level ${e}.`])}case`quality`:case`gfx`:{let e=(r[0]||``).toLowerCase();return e===`low`||e===`medium`||e===`high`?this.quality.apply(e):this.quality.cycle(),[`Graphics: ${this.quality.level}.`]}case`seed`:case`streamer`:return[this.activateCheat(`CLIPFARM`)];case`replay`:return this.replay.play(),[`Rolling the tape.`];case`char`:{let e=Dd.find(e=>e.id===(r[0]||``).toLowerCase());return e?(this.selectCharacter(e.id),[`Now playing as ${e.name}.`]):[`Characters: `+Dd.map(e=>e.id).join(`, `)]}}return[`Unknown command or code "${t}". Type HELP.`]}activateCheat(e){let t=Sf.find(t=>t.code===e),n=t.run(this);return this.hud.toast(`<b>CHEAT:</b> ${t.code} — ${n}`,`cheat`),this.sfx(`cheat`),`<b>${t.code}</b>: ${n}`}checkTypedCheats(){let e=this.input.typed.join(``);for(let t of Sf)if(e.endsWith(t.code)){this.input.typed.length=0,this.activateCheat(t.code);return}for(let t of dp)if(e.endsWith(t)){this.input.typed.length=0,this.pers.hiddenCode(t);return}}pauseAction(e){if(e===`resume`&&this.togglePause(!1),e===`chars`&&(this.togglePause(!1),this.openCharSelect()),e===`controls`&&(this.togglePause(!1),this.hud.toggleControls(!0)),e===`cheats`){this.togglePause(!1),this.hud.openConsole(),this.hud.log(`<b>Cheat codes</b> (type them here or anytime while playing):`);let e=this.hud.consoleLog.lastElementChild;Jf().forEach(e=>this.hud.log(e)),requestAnimationFrame(()=>e?.scrollIntoView({block:`start`}))}if(e===`quality`&&(this.quality.cycle(),this.hud.showPause(!0),this.hud.toast(`Graphics: <b>${this.quality.level.toUpperCase()}</b>`)),e===`contracts`&&this.pers.showPanel(`contracts`),e===`booth`&&this.pers.showPanel(`booth`),e===`secrets`&&this.pers.showPanel(`secrets`),e===`voice`){let e=this.radio.cycleVoice();this.hud.showPause(!0),this.hud.toast(`Radio voices: <b>${e===`tts`?`SPEECH`:e.toUpperCase()}</b>`)}e===`mute`&&(this.audio.setMuted(!this.audio.muted),this.hud.toast(this.audio.muted?`Sound off`:`Sound on`))}togglePause(e){this.paused=e??!this.paused,this.hud.showPause(this.paused)}openCharSelect(){Object.keys(this.portraits).length||this.makePortraits(),this.hud.showCharSelect(this.portraits,e=>this.selectCharacter(e),this.char.id)}updateCamera(e){let t=this.input,n=this.player,r=n.vehicle,i=.0024;this.hud.wheelOpen()||(this.camYaw-=(t.mdx+t.touch.lookX)*i,this.camPitch+=(t.mdy+t.touch.lookY)*i),this.camPitch=ql(this.camPitch,-.9,1.3);let a=performance.now()-t.lastMouseMove>1400&&Math.abs(t.touch.lookX)<.01,o,s,c;if(r){if(a&&(r.speed>2||r.def.kind===`plane`)){let t=r.vel.lengthSq()>4&&r.def.kind!==`heli`&&r.def.kind!==`hover`?Math.atan2(r.vel.x,r.vel.z):r.yaw,n=r.fwdSpeed<-2?r.yaw:t;this.camYaw+=Xl(this.camYaw,n)*Math.min(1,e*2.5);let i=r.def.kind===`plane`?.18-r.pitch*.6:.22;this.camPitch=Jl(this.camPitch,i,e*2)}let t=r.def.kind===`plane`?r.planeSpeed:r.speed;s=r.def.camDist+t*.04,c=r.def.camH*.4,o=r.pos.clone().add(new V(0,r.def.camH*.6,0)),this.camera.fov=Jl(this.camera.fov,65+Math.min(18,t*.25),e*3)}else s=this.camDist,c=0,o=n.pos.clone().add(new V(0,1.75*(n.model.look.scale||1),0)),n.ragdollT<=0&&o.addScaledVector(Ql(this.camYaw),-.55),this.camera.fov=Jl(this.camera.fov,65,e*3);this.camera.updateProjectionMatrix();let l=Math.cos(this.camPitch),u=Math.sin(this.camPitch),d=new V(-Math.sin(this.camYaw)*l,u,-Math.cos(this.camYaw)*l),f=s,p=ju(o,d,s);p<s&&(f=Math.max(1.2,p-.4));let m=o.clone().addScaledVector(d,f);m.y+=c,r&&f<r.def.radius+2&&(m.y+=(r.def.radius+2-f)*.9);let h=$(m.x,m.z);m.y<h+.5&&(m.y=h+.5),m.y<-1.2+.3&&h<-1.2&&(m.y=du+.3),this.cameraSmooth?this.camera.position.lerp(m,Math.min(1,e*18)):this.camera.position.copy(m),this.cameraSmooth=!0,this.camera.lookAt(o.clone().addScaledVector(d,-10).setY(o.y-d.y*10+c*.3)),this.declutterCamera(o),this.shakeAmt>0&&(this.camera.position.add(new V(K(-1,1),K(-1,1),K(-1,1)).multiplyScalar(this.shakeAmt*.5)),this.shakeAmt=Math.max(0,this.shakeAmt-e*2.5))}step(e=1,t=1/30,n=!0){for(let r=0;r<e;r++)this.tick(t,n&&r===e-1)}tick(e,t=!0){let n=this.input,r=this.hud;if(this.replay.playing){n.hit(`KeyR`)||n.hit(`Escape`)||n.hit(`Space`)?this.replay.stop():(this.replay.update(e),this.radio.update(e,!1),this.sky.update(0,this.playerFocus(),this.elapsed),r.update(0,this.camera)),n.flushPending(),t&&(this.quality.render(this.sky.night),this.replay.afterRender()),n.endFrame();return}this.started&&!r.consoleOpen()&&((n.hit(`Backquote`)||n.hit(`Enter`)||n.hit(`NumpadEnter`))&&(r.openConsole(),n.typed.length=0),(n.hit(`Escape`)||n.hit(`KeyP`))&&(r.anyOverlay()&&!this.paused?(r.toggleControls(!1),r.charSel.classList.add(`hidden`)):this.togglePause()),(n.hit(`F1`)||n.hit(`Slash`))&&r.toggleControls(),n.hit(`KeyV`)&&!this.paused&&this.openCharSelect()),n.flushPending(),r.root.classList.toggle(`menu`,!this.started||this.paused||r.menuOpen());let i=!this.started||this.paused||r.anyOverlay();if(!i){this.cheats.slowmo&&(e*=.35),this.hitStop>0&&(this.hitStop-=e,e*=.08),this.elapsed+=e,this.checkTypedCheats(),n.down(`Tab`)?(r.wheelOpen()||r.openWheel(),r.steerWheel(n.mdx,n.mdy)):r.wheelOpen()&&!r.wheelSticky&&r.closeWheel(!0);for(let e of tf)e.key&&n.hit(`Digit`+e.key)&&this.equip(e.id);n.hit(`KeyQ`)&&this.cycleWeapon(1),n.wheel&&this.cycleWeapon(n.wheel>0?1:-1),(n.hit(`KeyE`)||n.hit(`KeyF`))&&this.tryEnterExit(),n.hit(`KeyB`)&&this.doBail(),n.hit(`KeyR`)&&this.replay.play(),n.hit(`KeyT`)&&this.pers.emote(),n.hit(`KeyN`)&&this.radio.next(!!this.player.vehicle?.flipped),this.fireCd-=e,(this.curWeapon.auto?n.mouseDown||n.touch.fire:n.mouseClicked)&&(n.locked||n.touch.active||this.autoFire)&&!r.wheelOpen()&&this.deadT<=0&&this.player.ragdollT<=0&&this.bustT<=0&&this.fire(),this.updatePlayer(e);for(let t of this.vehicles)t.driver===`ai`&&(t.ai?.mode===`policeHeli`?xf(t,e,this):bf(t,e,this)),t.update(e,this);for(let t of this.peds)t.update(e,this);this.updateCollisions(),this.updateWacky(e),this.updateProjs(e),this.updateYoink(e),this.updatePopulation(e),this.updateWanted(e),this.updateCamera(e),this.pers.update(e),this.radio.update(e,!!this.player.vehicle&&!this.player.vehicle.destroyed),this.replay.record(e),this.moneyShown=Jl(this.moneyShown,this.money,Math.min(1,e*6)),Math.abs(this.moneyShown-this.money)<1&&(this.moneyShown=this.money);let t=``;if(this.player.vehicle)t=`<kbd>E</kbd> exit`;else{let e=null,n=6;for(let t of this.vehicles){if(t.destroyed)continue;let r=t.pos.distanceTo(this.player.pos)-t.def.radius;r<n&&(n=r,e=t)}e&&(t=`<kbd>E</kbd> ${e.driver===`ai`?`steal`:`hop in`} <b>${e.def.name}</b>`)}r.hint(t);let i=this.player.vehicle;this.audio.update(!!i&&!i.destroyed,i?ql((i.def.kind===`plane`?i.planeSpeed:i.speed)/i.def.max,0,1.2):0,this.stars>0&&this.copsNear(80),this.elapsed)}else if(this.started)this.updateCamera(1e-4);else{this.elapsed+=e;let t=this.elapsed*.05;this.camera.position.set(Math.sin(t)*220,90,Math.cos(t)*220+60),this.camera.lookAt(0,10,40)}this.sky.update(this.started&&!i?e:e*.2,this.playerFocus(),this.elapsed),this.scene.environmentIntensity=.12+.43*(1-this.sky.night),this.fx.update(e),r.update(e,this.camera),r.cross.style.display=!this.player.vehicle&&this.curWeapon.type!==`melee`||this.player.vehicle&&this.curWeapon.type!==`melee`?`block`:`none`,t&&this.quality.render(this.sky.night),n.endFrame()}groundAt(e,t){return $(e,t)}spawnPedAt(e,t){let n=new ff(this.scene,e,t,`civ`);return n.model.setGiantHead(this.cheats.bigHeads),n.nearestCorner(),this.peds.push(n),n}},_p=new V,vp=new V;function yp(e,t,n){let r=n.def.kind,i=n.def.radius,a=r===`plane`?4.8:r===`bike`?.5:r===`heli`?1.8:r===`hover`?1.4:Math.min(1.35,i*.55),o=r===`hover`?.8:i,s=n.def.id===`truck`||n.def.id===`bun`?4:r===`heli`?3.2:r===`plane`?3:1.9,c=Math.cos(-n.yaw),l=Math.sin(-n.yaw),u=e.x-n.pos.x,d=e.z-n.pos.z;_p.set(u*c+d*l,e.y-n.pos.y,-u*l+d*c),vp.set(t.x*c+t.z*l,t.y,-t.x*l+t.z*c);let f=0,p=1/0,m=[-a,0,-o],h=[a,s,o],g=[_p.x,_p.y,_p.z],_=[vp.x,vp.y,vp.z];for(let e=0;e<3;e++){if(Math.abs(_[e])<1e-8){if(g[e]<m[e]||g[e]>h[e])return 1/0;continue}let t=(m[e]-g[e])/_[e],n=(h[e]-g[e])/_[e];if(t>n&&([t,n]=[n,t]),f=Math.max(f,t),p=Math.min(p,n),f>p)return 1/0}return f}var bp=new gp(document.getElementById(`app`));window.__cc=bp,window.__chars=Object.fromEntries(Dd.map(e=>[e.id,e.look]));var xp=()=>{try{if(`speechSynthesis`in window){let e=new SpeechSynthesisUtterance(` `);e.volume=0,speechSynthesis.speak(e)}}catch{}};addEventListener(`touchend`,xp,{once:!0}),addEventListener(`click`,xp,{once:!0}),bp.frame();var Sp=new URLSearchParams(location.search),Cp=e=>{if(e){bp.start(e);return}bp.openCharSelect();let t=new MutationObserver(()=>{bp.hud.charSel.classList.contains(`hidden`)&&(t.disconnect(),bp.started||bp.start(),bp.input.lock())});t.observe(bp.hud.charSel,{attributes:!0,attributeFilter:[`class`]})};Sp.has(`autostart`)?(bp.hud.title.classList.add(`hidden`),localStorage.setItem(`cc-seen-controls`,`1`),Cp(Sp.get(`char`)||Dd[0].id)):bp.hud.showTitle(()=>{bp.audio.init(),Cp()});