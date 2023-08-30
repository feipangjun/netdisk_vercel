import{d as m,u as C,bt as _,a as u,b6 as c,f as e,W as k,bf as v,m as F,a2 as g,b0 as a,a_ as l,I as p,bg as S,v as q,ao as D,bs as f,B as L,bd as h,n as T,Z as U}from"./index.8bddcd24.js";import{F as E}from"./FolderTree.2f3e1d45.js";import"./index.b8821340.js";import"./api.9726b76d.js";const B=r=>{const d=m();return e(a,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(l,{mb:"0",get children(){return d(`users.permissions.${r.name}`)}}),e(f,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},H=()=>{const r=m(),{params:d,back:b}=C(),{id:i}=d,[n,s]=_({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,github_id:0}),[w,$]=u(()=>c.get(`/admin/user/get?id=${i}`));i&&(async()=>{const t=await $();h(t,s)})();const[x,y]=u(()=>c.post(`/admin/user/${i?"update":"create"}`,n));return e(U,{get loading(){return w()},get children(){return e(k,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(v,{get children(){return r(`global.${i?"edit":"add"}`)}}),e(F,{get when(){return!g.is_guest(n)},get children(){return[e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(p,{id:"username",get value(){return n.username},onInput:t=>s("username",t.currentTarget.value)})]}}),e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(p,{id:"password",type:"password",placeholder:"********",get value(){return n.password},onInput:t=>s("password",t.currentTarget.value)})]}})]}}),e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(E,{id:"base_path",get value(){return n.base_path},onChange:t=>s("base_path",t),onlyFolder:!0})]}}),e(a,{w:"$full",required:!0,get children(){return[e(l,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(S,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(q,{each:D,children:(t,o)=>e(B,{name:t,get can(){return g.can(n,o())},onChange:I=>{I?s("permission",n.permission|=1<<o()):s("permission",n.permission&=~(1<<o()))}})})}})]}}),e(a,{w:"fit-content",display:"flex",get children(){return e(f,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:t=>s("disabled",t.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.disabled},get children(){return r("users.disabled")}})}}),e(L,{get loading(){return x()},onClick:async()=>{const t=await y();h(t,()=>{T.success(r("global.save_success")),b()})},get children(){return r(`global.${i?"save":"add"}`)}})]}})}})};export{H as default};
