!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(u.push(t.value),!n||u.length!==n);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.3dc35f88.js","./useUtil-legacy.bb46edee.js","./icon-legacy.935f7c7e.js","./index-legacy.c79f6268.js"],(function(n,r){"use strict";var o,u,i,c,a,l,f,d,p,s,g,m,b,h,y,v,j,w,O,_,x,S,k,P,$,A,E,I,T,D,M,z,L,C,B,H,U,W;return{setters:[function(e){o=e.f,u=e.ah,i=e.a7,c=e.o,a=e.W,l=e.bf,f=e.bc,d=e.ai,p=e.bv,s=e.bH,g=e.d,m=e.t,b=e.bI,h=e.ad,y=e.a5,v=e.B,j=e.a9,w=e.v,O=e.aa,_=e.bJ,x=e.m,S=e.a0,k=e.bK,P=e.bL,$=e.G,A=e.H,E=e.bF,I=e.bM,T=e.e,D=e.aP,M=e.P,z=e.Q,L=e.ab},function(e){C=e.a,B=e.b},function(e){H=e.g,U=e.O},function(e){W=e.S}],execute:function(){var F=n("F",(function(e){return o(a,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(u,{get color(){return i()},boxSize:"$20",get as(){return H(c.obj)}}),o(a,{spacing:"$2",get children(){return[o(l,{size:"lg",css:{wordBreak:"break-all"},get children(){return c.obj.name}}),o(f,{color:"$neutral10",size:"sm",get children(){return[d((function(){return p(c.obj.size)}))," · ",d((function(){return s(c.obj.modified)}))]}})]}}),o(a,{spacing:"$2",get children(){return e.children}})]}})})),G=function(){var e=g(),n=m((function(){return b(c.obj.name)})),r=C().currentObjLink;return o(x,{get when(){return n().length},get children(){return o(h,{get children(){return[o(y,{as:v,colorScheme:"success",get rightIcon(){return o(u,{as:W})},get children(){return e("home.preview.open_with")}}),o(j,{get children(){return o(w,{get each(){return n()},children:function(e){return o(O,{as:"a",target:"_blank",get href(){return _(e.value,{raw_url:c.raw_url,name:c.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},V=function(e){var n=g(),r=B().copyCurrentRawLink;return o(F,{get children(){return[o(S,{spacing:"$2",get children(){return[o(v,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(v,{as:"a",get href(){return c.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(x,{get when(){return e.openWith},get children(){return o(G,{})}})]}})},X=Object.freeze(Object.defineProperty({__proto__:null,Download:V,default:V},Symbol.toStringTag,{value:"Module"})),J=function(e){var n=C().currentObjLink;return o(P,{w:"$full",h:"70vh",get children(){return o(k.iframe,{w:"$full",h:"$full",get src(){return _(e.scheme,{raw_url:c.raw_url,name:c.obj.name,d_url:n(!0)})}})}})},K=[{name:"Markdown",type:U.TEXT,component:$((function(){return A((function(){return r.import("./markdown-legacy.49f2f9de.js")}),void 0)}))},{name:"Text Editor",type:U.TEXT,component:$((function(){return A((function(){return r.import("./text-editor-legacy.fd412a88.js")}),void 0)}))},{name:"HTML render",exts:["html"],component:$((function(){return A((function(){return r.import("./html-legacy.277bbd07.js")}),void 0)}))},{name:"Image",type:U.IMAGE,component:$((function(){return A((function(){return r.import("./image-legacy.d1d0ccbc.js")}),void 0)}))},{name:"Video",type:U.VIDEO,component:$((function(){return A((function(){return r.import("./video-legacy.81cbc0ad.js")}),void 0)}))},{name:"Audio",type:U.AUDIO,component:$((function(){return A((function(){return r.import("./audio-legacy.4eea9d07.js")}),void 0)}))},{name:"Ipa",exts:["ipa"],component:$((function(){return A((function(){return r.import("./ipa-legacy.9d0edc35.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:$((function(){return A((function(){return r.import("./plist-legacy.002f91b3.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:$((function(){return A((function(){return r.import("./aliyun_office-legacy.cf1dfdb7.js")}),void 0)}))}],Q=function(e){var n=[];return K.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(E(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),I(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(J,{scheme:r})})})})),n.push({name:"Download",component:$((function(){return A((function(){return Promise.resolve().then((function(){return X}))}),void 0)}))}),n},R=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=m((function(){return Q(t(t({},c.obj),{},{provider:c.provider}))})),r=e(T(n()[0]),2),u=r[0],i=r[1];return o(x,{get when(){return n().length>1},get fallback(){return o(V,{openWith:!0})},get children(){return o(a,{w:"$full",spacing:"$2",get children(){return[o(S,{w:"$full",spacing:"$2",get children(){return[o(D,{alwaysShowBorder:!0,get value(){return u().name},onChange:function(e){i(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(G,{})]}}),o(M,{get fallback(){return o(z,{})},get children(){return o(L,{get component(){return u().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",R)}}}))}();
