import{i as r}from"./vue-demi.6e7a88e9.js";import{am as l,a as p,al as u}from"./@vue.a82e9935.js";/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const f=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function _(){const t=l(!0),s=t.run(()=>p({}));let c=[],i=[];const a=u({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,i.forEach(n=>c.push(n)),i=[]},use(e){return!this._a&&!r?i.push(e):c.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:s});return a}export{_ as c};
