!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.3dc35f88.js","./Folder-legacy.960ae779.js","./Layout-legacy.9d4e7ca8.js","./useUtil-legacy.bb46edee.js","./ImageWithError-legacy.6e632054.js","./icon-legacy.935f7c7e.js","./index-legacy.c79f6268.js","./api-legacy.7d7910e2.js","./useTitle-legacy.3c19bc1b.js","./Markdown-legacy.b6e2bc7e.js","./index-legacy.012450a3.js","./FolderTree-legacy.e43b9263.js"],(function(n){"use strict";var t,r,o,i,a,c,u,l,s,f,d,g,b,y,j,h,p,m,v,w,x,$,k,A,M,S;return{setters:[function(e){t=e.f,r=e.a7,o=e.ah,i=e.e,a=e.t,c=e.aF,u=e.W,l=e.aE,s=e.aH,f=e.cl,d=e.ak,g=e.m,b=e.bs,y=e.af,j=e.ag,h=e.v,p=e.o,m=e.bg},function(e){v=e.b},function(e){w=e.a,x=e.M},function(e){$=e.c,k=e.a},function(e){A=e.I},function(e){M=e.O,S=e.g},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=function(n){if((0,$().isHide)(n.obj)||n.obj.type!==M.IMAGE)return null;var h=w().setPathAs,p=t(o,{get color(){return r()},boxSize:"$12",get as(){return S(n.obj)}}),m=e(i(!1),2),E=m[0],I=m[1],C=a((function(){return c()&&(E()||n.obj.selected)})),F=v({id:1}).show,z=k().rawLink;return t(x.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(u,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:"2px solid ".concat(r())}},onMouseEnter:function(){I(!0),h(n.obj.name,n.obj.is_dir,!0)},onMouseLeave:function(){I(!1)},onContextMenu:function(e){l((function(){s(!1),f(n.index,!0,!0)})),F(e,{props:n.obj})},get children(){return t(d,{w:"$full",pos:"relative",get children(){return[t(g,{get when(){return C()},get children(){return t(b,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){f(n.index,e.target.checked)}})}}),t(A,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:p,get src(){return z(n.obj)},loading:"lazy",onClick:function(){j.emit("gallery",n.obj.name)}})]}})}})}})};n("default",(function(){return t(m,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(h,{get each(){return p.objs},children:function(e,n){return t(E,{obj:e,get index(){return n()}})}})}})}))}}}))}();
