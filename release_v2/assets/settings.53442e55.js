var v=Object.defineProperty,h=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,e,a)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))x.call(e,a)&&g(t,a,e[a]);if(m)for(var a of m(e))C.call(e,a)&&g(t,a,e[a]);return t},i=(t,e)=>h(t,k(e));import{u as S,h as j,r as y,R as n,l as E,at as F,F as B,G}from"./vendor.36e124e7.js";import{b as p}from"./index.esm.875bdfba.js";import{F as I}from"./form-item.e48716c8.js";import{u as P}from"./usePath.dec5b771.js";import"./index.2c144d5b.js";const W=()=>{const t=S(),{t:e}=j(),[a,c]=y.exports.useState([]);let{pathname:b}=P();const d=()=>{p.get("settings",{params:{group:parseInt(b.split("/").pop()||"0")}}).then(s=>{const r=s.data;r.code!==200?t({title:e(r.message),status:"error",duration:3e3,isClosable:!0}):c(r.data)})};return y.exports.useEffect(()=>{d()},[]),n.createElement(E,{w:"full"},n.createElement(F,{minChildWidth:"400px",spacing:"2"},a.map(s=>{var r,f;return n.createElement(I,{key:s.key,type:s.type,label:s.key,value:s.type==="bool"?s.value==="true":s.value,readOnly:s.group===2,values:(r=s.values)==null?void 0:r.split(","),description:`${e(s.description)}(${e(s.group===0?"public":s.group===1?"private":"readonly")})`,onChange:l=>{c(a.map(o=>o.key===s.key?s.type==="number"?i(u({},o),{value:l.toString()}):s.type!=="bool"?i(u({},o),{value:l}):i(u({},o),{value:s.value==="true"?"false":"true"}):o))},onDelete:s.version===((f=a.find(l=>l.key==="version"))==null?void 0:f.value)?void 0:()=>{p.delete("setting",{params:{key:s.key}}).then(l=>{const o=l.data;o.code!==200?t({title:e(o.message),status:"error",duration:3e3,isClosable:!0}):(t({title:e(o.message),status:"success",duration:3e3,isClosable:!0}),d())})}})})),n.createElement(B,{mt:"2",justify:"end"},n.createElement(G,{onClick:()=>{p.post("settings",a).then(s=>{const r=s.data;r.code!==200?t({title:e(r.message),status:"error",duration:3e3,isClosable:!0}):t({title:e(r.message),status:"success",duration:3e3,isClosable:!0})})}},e("Save"))))};export{W as default};
