!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.3dc35f88.js","./Folder-legacy.960ae779.js","./Layout-legacy.9d4e7ca8.js","./useUtil-legacy.bb46edee.js","./index-legacy.c79f6268.js","./ImageWithError-legacy.6e632054.js","./icon-legacy.935f7c7e.js","./api-legacy.7d7910e2.js","./useTitle-legacy.3c19bc1b.js","./Markdown-legacy.b6e2bc7e.js","./index-legacy.012450a3.js","./FolderTree-legacy.e43b9263.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,s,f,g,d,b,h,y,m,p,j,v,w,$,x,k,A,S,M,E,I;return{setters:[function(e){n=e.f,r=e.a7,o=e.ah,a=e.e,i=e.t,l=e.aF,u=e.W,c=e.z,s=e.aE,f=e.aH,g=e.cl,d=e.ak,b=e.ag,h=e.m,y=e.bs,m=e.af,p=e.bc,j=e.v,v=e.o,w=e.b$},function(e){$=e.b},function(e){x=e.a,k=e.M},function(e){A=e.c},function(e){S=e.V},function(e){M=e.I},function(e){E=e.g,I=e.O},function(){},function(){},function(){},function(){},function(){}],execute:function(){var z=function(t){if((0,A().isHide)(t.obj))return null;var j=x().setPathAs,v=n(o,{get color(){return r()},boxSize:"$12",get as(){return E(t.obj)}}),w=e(a(!1),2),z=w[0],C=w[1],O=i((function(){return l()&&(z()||t.obj.selected)})),F=$({id:1}).show;return n(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:S,get href(){return t.obj.name},onMouseEnter:function(){C(!0),j(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){C(!1)},onContextMenu:function(e){s((function(){f(!1),g(t.index,!0,!0)})),F(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===I.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(h,{get when(){return O()},get children(){return n(y,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(h,{get when(){return t.obj.thumb},fallback:v,get children(){return n(M,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:v,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})};t("default",(function(){return n(w,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(j,{get each(){return v.objs},children:function(e,t){return n(z,{obj:e,get index(){return t()}})}})}})}))}}}))}();
