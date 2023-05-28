import{c as Q,d as P,e as x,f as T,g as W,h as Z,j as ee,k as oe}from"./element-plus.a660ad05.js";import"./axios.451cdb92.js";import{s as le,a as te,g as X,b as ae,c as ne,o as se,p as de}from"./api.52d2d845.js";import"./qs.cb2714fe.js";import{_ as K}from"./index.01f8b512.js";import{b as ie,a as g,l as f,m as I,W as o,Q as d,p as a,U as h,F as L,a5 as O,u as V,E as A,aw as N,ax as j,P as G,I as ue,V as S,R as M,X as H,D as ce,af as re,T as pe}from"./@vue.a82e9935.js";import{_ as _e}from"./lodash.02dd5408.js";import"./randomcolor.586e56a3.js";import"./lodash-es.39464d94.js";import"./@vueuse.370d0333.js";import"./@popperjs.fd04dfd6.js";import"./@ctrl.5f67d428.js";import"./dayjs.38009a6e.js";import"./async-validator.73a10b83.js";import"./memoize-one.c87f6fc8.js";import"./escape-html.86960cf8.js";import"./normalize-wheel-es.e2b4fa49.js";import"./@floating-ui.cac404ee.js";import"./side-channel.0f31c79c.js";import"./get-intrinsic.0f3ed0a2.js";import"./has-symbols.6b764405.js";import"./function-bind.c99feded.js";import"./has.38a7880d.js";import"./call-bind.00b5229b.js";import"./object-inspect.d900f9c3.js";import"./vue-router.4f0e1aa5.js";import"./pinia.b147f849.js";import"./vue-demi.6e7a88e9.js";import"./default-passive-events.a10ec130.js";function F(p){p.target.value=p.target.value.match(/^\d*(\.?\d{0,2})/g)[0]||null}const me=p=>(N("data-v-3d62579a"),p=p(),j(),p),ve={class:"room-dialog"},fe={class:"room-container"},he=me(()=>a("div",{class:"title"},[a("span",null,"\u623F\u95F4\u540D"),a("span",null,"\u5355\u4EF7(\u5143)"),a("span",null,"\u5957\u9910\u4EF7(\u5143)"),a("span")],-1)),ge={class:"content"},ye={class:"item add-item"},Ve={class:"dialog-footer"},be={__name:"RoomSet",props:{data:{type:Array}},emits:["reloadList"],setup(p,{expose:E,emit:B}){const _=p;ie(()=>_.data,s=>{});const u=g([]);let m=g(""),i=g(""),y=g("");function D(){if(m.value)if(i.value){if(!y){x.error("\u8BF7\u5148\u586B\u5165\u5957\u9910\u4EF7");return}}else{x.error("\u8BF7\u5148\u586B\u5165\u4EF7\u683C");return}else{x.error("\u8BF7\u5148\u586B\u5165\u623F\u95F4\u540D");return}const s={id:"",name:m.value,price:i.value,base_price:y.value};u.value.push(s),m.value="",i.value="",y.value=""}function $(s){let t=u.value.findIndex(c=>c.name==s.name);u.value.splice(t,1)}let b=g(!1);function U(){b.value=!0,u.value=[],_.data.forEach(s=>{u.value.push({id:s.id,name:s.name,price:s.price,base_price:s.base_price})})}function r(){b.value=!1}async function v(){m.value&&i&&y&&D();const s=await le(u.value);console.log(s),s.code==200?(x.success("\u7F16\u8F91\u6210\u529F"),B("reloadList"),r()):x.error(s.msg)}return E({show:U}),(s,t)=>{const c=Q,w=T,e=P;return f(),I("div",ve,[o(e,{modelValue:V(b),"onUpdate:modelValue":t[4]||(t[4]=l=>A(b)?b.value=l:b=l),title:"\u623F\u95F4\u8BBE\u7F6E",width:"600",center:""},{footer:d(()=>[a("span",Ve,[o(w,{onClick:t[3]||(t[3]=l=>r())},{default:d(()=>[h("\u53D6\u6D88")]),_:1}),o(w,{type:"primary",onClick:v},{default:d(()=>[h(" \u786E\u8BA4 ")]),_:1})])]),default:d(()=>[a("div",fe,[he,a("div",ge,[(f(!0),I(L,null,O(u.value,l=>(f(),I("div",{class:"item del-items",key:l.id},[o(c,{placeholder:"\u8BF7\u8F93\u5165\u623F\u95F4\u540D",modelValue:l.name,"onUpdate:modelValue":n=>l.name=n},null,8,["modelValue","onUpdate:modelValue"]),o(c,{placeholder:"\u8BF7\u8F93\u5165\u5355\u4EF7",onKeyup:V(F),modelValue:l.price,"onUpdate:modelValue":n=>l.price=n},null,8,["onKeyup","modelValue","onUpdate:modelValue"]),o(c,{placeholder:"\u8BF7\u8F93\u5165\u5957\u9910\u4EF7",onKeyup:V(F),modelValue:l.base_price,"onUpdate:modelValue":n=>l.base_price=n},null,8,["onKeyup","modelValue","onUpdate:modelValue"]),o(w,{type:"danger",onClick:n=>$(l)},{default:d(()=>[h("\u5220\u9664")]),_:2},1032,["onClick"])]))),128)),a("div",ye,[o(c,{modelValue:V(m),"onUpdate:modelValue":t[0]||(t[0]=l=>A(m)?m.value=l:m=l),placeholder:"\u8BF7\u8F93\u5165\u623F\u95F4\u540D"},null,8,["modelValue"]),o(c,{modelValue:V(i),"onUpdate:modelValue":t[1]||(t[1]=l=>A(i)?i.value=l:i=l),onKeyup:V(F),placeholder:"\u8BF7\u8F93\u5165\u5355\u4EF7"},null,8,["modelValue","onKeyup"]),o(c,{modelValue:V(y),"onUpdate:modelValue":t[2]||(t[2]=l=>A(y)?y.value=l:y=l),onKeyup:V(F),placeholder:"\u8BF7\u8F93\u5165\u5957\u9910\u4EF7"},null,8,["modelValue","onKeyup"]),o(w,{type:"primary",onClick:D},{default:d(()=>[h("\u6DFB\u52A0")]),_:1})])])])]),_:1},8,["modelValue"])])}}},ke=K(be,[["__scopeId","data-v-3d62579a"]]);const Ce=p=>(N("data-v-a968bc60"),p=p(),j(),p),xe={class:"room-container"},Ie=Ce(()=>a("div",{class:"title"},[a("span",null,"\u5546\u54C1\u540D\u79F0"),a("span",null,"\u5355\u4EF7(\u5143)"),a("span")],-1)),$e={class:"content"},we={class:"item add-item"},Se={class:"dialog-footer"},Ue={__name:"GoodsSet",props:{data:{type:Array}},emits:["reloadList"],setup(p,{expose:E,emit:B}){async function _(){u.value=[];const v=await X();console.log(v),v.code==200&&v.data.forEach(s=>{u.value.push(s)})}const u=g([]);let m=g(""),i=g("");function y(){if(m.value){if(!i.value){x.error("\u8BF7\u5148\u586B\u5165\u4EF7\u683C");return}}else{x.error("\u8BF7\u5148\u586B\u5165\u5546\u54C1\u540D\u79F0");return}const v={id:"",name:m.value,price:i.value};u.value.push(v),m.value="",i.value=""}function D(v){let s=u.value.findIndex(t=>t.name==v.name);u.value.splice(s,1)}let $=g(!1);function b(){$.value=!0,_()}function U(){$.value=!1}async function r(){m.value&&i&&y();const v=await te(u.value);v.code==200?(x.success("\u7F16\u8F91\u6210\u529F"),B("reloadList"),U()):x.error(v.msg)}return E({show:b}),(v,s)=>{const t=Q,c=T,w=P;return f(),G(w,{modelValue:V($),"onUpdate:modelValue":s[3]||(s[3]=e=>A($)?$.value=e:$=e),title:"\u5546\u54C1\u8BBE\u7F6E",width:"600",center:""},{footer:d(()=>[a("span",Se,[o(c,{onClick:s[2]||(s[2]=e=>U())},{default:d(()=>[h("\u53D6\u6D88")]),_:1}),o(c,{type:"primary",onClick:r},{default:d(()=>[h(" \u786E\u8BA4 ")]),_:1})])]),default:d(()=>[a("div",xe,[Ie,a("div",$e,[(f(!0),I(L,null,O(u.value,e=>(f(),I("div",{class:"item del-items",key:e.name},[o(t,{placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"]),o(t,{placeholder:"\u8BF7\u8F93\u5165\u5355\u4EF7",modelValue:e.price,"onUpdate:modelValue":l=>e.price=l},null,8,["modelValue","onUpdate:modelValue"]),o(c,{type:"danger",onClick:l=>D(e)},{default:d(()=>[h("\u5220\u9664")]),_:2},1032,["onClick"])]))),128)),a("div",we,[o(t,{modelValue:V(m),"onUpdate:modelValue":s[0]||(s[0]=e=>A(m)?m.value=e:m=e),placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0"},null,8,["modelValue"]),o(t,{modelValue:V(i),"onUpdate:modelValue":s[1]||(s[1]=e=>A(i)?i.value=e:i=e),modelModifiers:{number:!0},placeholder:"\u8BF7\u8F93\u5165\u5355\u4EF7"},null,8,["modelValue"]),o(c,{type:"primary",onClick:y},{default:d(()=>[h("\u6DFB\u52A0")]),_:1})])])])]),_:1},8,["modelValue"])}}},De=K(Ue,[["__scopeId","data-v-a968bc60"]]);const q=p=>(N("data-v-5e0ecc86"),p=p(),j(),p),Re={class:"order-container"},Ee={class:"yidian"},Be=q(()=>a("div",{class:"desc"},"\u5DF2\u70B9",-1)),Ae={class:"box"},Ge={class:"goods-wrap"},Le=q(()=>a("div",{class:"desc"},"\u5546\u54C1",-1)),Oe={class:"goods-box"},Fe={class:"name"},Te={class:"price"},Ke={class:"choose-wrap"},Ne={class:"choose-item"},je={class:"handle-box"},ze=ue({__name:"Order",emits:["reloadList"],setup(p,{expose:E,emit:B}){const _=g([]),u=g([]);async function m(){u.value=[];const n=await X();n.code==200&&n.data.forEach(k=>{u.value.push(k)})}const i=g("");let y;function D(n){i.value=n.name,y=_.value.findIndex(k=>k.order_content===n.name)}function $(n){console.log(n),i.value=n.name,y=_.value.findIndex(k=>k.order_content===n.name),U()}function b(n){console.log(n),W.confirm("\u786E\u8BA4\u5220\u9664?","\u6CE8\u610F",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{_.value.splice(n,1),console.log(_.value),_.value=_.value}).catch(()=>{})}function U(){if(!i.value)return;let n={order_content:i.value,count:r.value};y===-1?_.value.push(n):_.value[y]=n,r.value=1,i.value=""}const r=g(1),v=n=>{console.log(n)};async function s(){console.log("click"),_.value.forEach(R=>{R!=null&&R.order_id||(R.order_id="")});let n={id:w.value,data:_.value};console.log(n);const k=await ae(n);k.code==200?(x.success("\u7F16\u8F91\u6210\u529F"),B("reloadList"),l()):x.error(k.msg)}const t=g("");let c=g(!1),w=g("");function e(n){c.value=!0,w.value=n.id,t.value=n.name+"\u70B9\u5355",m(),_.value=_e.cloneDeep(n.order_info)}function l(){c.value=!1}return E({show:e}),(n,k)=>{const R=T,J=Z,Y=P;return f(),G(Y,{modelValue:V(c),"onUpdate:modelValue":k[1]||(k[1]=C=>A(c)?c.value=C:c=C),title:t.value,width:"900",center:""},{default:d(()=>[a("div",Re,[a("div",Ee,[Be,a("div",Ae,[(f(!0),I(L,null,O(_.value,(C,z)=>(f(),I("div",{class:"item",key:C.order_id},[h(S(C.order_content)+" x "+S(C.count)+" ",1),o(R,{size:"small",link:"",type:"danger",onClick:eo=>b(z)},{default:d(()=>[h("\u5220\u9664")]),_:2},1032,["onClick"])]))),128))])]),a("div",Ge,[Le,a("div",Oe,[(f(!0),I(L,null,O(u.value,C=>(f(),G(R,{class:"item",onClick:z=>D(C),onDblclick:z=>$(C)},{default:d(()=>[a("span",Fe,S(C.name),1),a("span",Te,S(C.price)+"\u5143",1)]),_:2},1032,["onClick","onDblclick"]))),256))])]),a("div",Ke,[a("div",Ne,S(i.value),1),a("div",je,[M(o(J,{modelValue:r.value,"onUpdate:modelValue":k[0]||(k[0]=C=>r.value=C),min:1,max:999,onChange:v},null,8,["modelValue"]),[[H,i.value]]),M(o(R,{type:"primary",onClick:U},{default:d(()=>[h("\u786E\u5B9A")]),_:1},512),[[H,i.value]]),o(R,{type:"primary",onClick:s},{default:d(()=>[h("\u4FDD\u5B58")]),_:1})])])])]),_:1},8,["modelValue","title"])}}}),Pe=K(ze,[["__scopeId","data-v-5e0ecc86"]]);const Me=p=>(N("data-v-3b576cdc"),p=p(),j(),p),He={class:"dashborad-container"},Qe={class:"left-nav"},We=Me(()=>a("div",{class:"nav-item"}," \u5386\u53F2\u8BA2\u5355 ",-1)),Xe={class:"content"},qe=["onClick"],Je={class:"g-item"},Ye=["onClick"],Ze={__name:"index",setup(p){function E(r){console.log("click"),W.confirm(`\u786E\u8BA4${r.order_status=="ending"?"\u5F00\u59CB":"\u7ED3\u675F"}\u5F53\u524D\u8BA2\u5355\uFF1F`,"\u6CE8\u610F",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{const v=await se({id:r.id,action:r.order_status==="ending"?"open":"end"});u(),console.log(v)}).catch(()=>{})}async function B(r){console.log(r.pause_status);const v=await de({id:r.id,action:r.pause_status==="running"?"pause":"run"});v.code==200?(x.success("\u64CD\u4F5C\u6210\u529F"),u()):x.success(v.msg)}const _=g([]);async function u(){const r=await ne();console.log(r),r.code==200&&(_.value=r.data)}ce(()=>{clearInterval(m)});var m=setInterval(()=>{u()},5e3);u();let i=g(null);function y(){console.log("123"),i.value.show()}let D=g(null);function $(){D.value.show()}let b=g(null);function U(r){b.value.show(r)}return(r,v)=>{const s=re("router-link"),t=ee,c=T,w=oe;return f(),I(L,null,[a("div",He,[a("div",Qe,[a("div",{class:"nav-item",onClick:y}," \u623F\u95F4\u8BBE\u7F6E "),a("div",{class:"nav-item",onClick:$}," \u5546\u54C1\u8BBE\u7F6E "),o(s,{to:"/history"},{default:d(()=>[We]),_:1})]),a("div",Xe,[o(w,{data:V(_),border:"",style:{width:"100%"}},{default:d(()=>[o(t,{align:"center",prop:"name",label:"\u623F\u95F4\u540D",width:"150"}),o(t,{align:"center",prop:"price",label:"\u5355\u4EF7",width:"120"},{default:d(({row:e})=>[h(S(e.price)+" \u5143 ",1)]),_:1}),o(t,{align:"center",prop:"start_time",label:"\u5F00\u59CB\u65F6\u95F4"}),o(t,{align:"center",prop:"end_time",label:"\u7ED3\u675F\u65F6\u95F4"}),o(t,{align:"center",prop:"total_time",label:"\u5F53\u524D\u65F6\u957F"}),o(t,{align:"center",prop:"pause_time",label:"\u6682\u505C\u65F6\u957F"}),o(t,{align:"center",prop:"base_cost",label:"\u5957\u9910\u8D39\u7528"},{default:d(({row:e})=>[h(S(e.base_cost)+" \u5143 ",1)]),_:1}),o(t,{align:"center",prop:"add_time_cost",label:"\u52A0\u65F6\u8D39\u7528"},{default:d(({row:e})=>[h(S(e.add_time_cost)+" \u5143 ",1)]),_:1}),o(t,{align:"center",prop:"cost",label:"\u603B\u8D39\u7528"},{default:d(({row:e})=>[h(S(e.cost)+" \u5143 ",1)]),_:1}),o(t,{align:"center",prop:"order_info",label:"\u8BA2\u5355","min-width":"200"},{default:d(({row:e})=>[e.order_info.length>0?(f(),I("div",{key:0,class:"order-box",onClick:l=>U(e)},[pe(' {{ row.order_info.join(",") }} '),(f(!0),I(L,null,O(e.order_info,l=>(f(),I("span",Je,S(l.order_content)+" x "+S(l.count),1))),256))],8,qe)):(f(),I("a",{key:1,class:"no-data-link c-p",onClick:l=>U(e)},"\u53BB\u6DFB\u52A0\u5546\u54C1",8,Ye))]),_:1}),o(t,{align:"center",fixed:"right",prop:"zip",label:"\u6682\u505C/\u6062\u590D",width:"120"},{default:d(({row:e})=>[e.pause_status==="running"?(f(),G(c,{key:0,size:"small",type:"primary",onClick:l=>B(e)},{default:d(()=>[h("\u6682\u505C")]),_:2},1032,["onClick"])):(f(),G(c,{key:1,type:"danger",size:"small",onClick:l=>B(e)},{default:d(()=>[h("\u6062\u590D")]),_:2},1032,["onClick"]))]),_:1}),o(t,{align:"center",fixed:"right",label:"\u5F00\u5355/\u7ED3\u5355",width:"120"},{default:d(({row:e})=>[e.order_status==="ending"?(f(),G(c,{key:0,type:"primary",size:"small",onClick:l=>E(e)},{default:d(()=>[h("\u5F00\u5355")]),_:2},1032,["onClick"])):(f(),G(c,{key:1,type:"danger",size:"small",onClick:l=>E(e)},{default:d(()=>[h("\u7ED3\u5355")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])])]),o(ke,{data:V(_),onReloadList:u,ref_key:"RoomSetRef",ref:i},null,8,["data"]),o(De,{onReloadList:u,ref_key:"GoodsSetRef",ref:D},null,512),o(Pe,{ref_key:"OrderRef",ref:b,onReloadList:u},null,512)],64)}}},Ro=K(Ze,[["__scopeId","data-v-3b576cdc"]]);export{Ro as default};