import{S as g}from"./subMenu.2cc167d5.js";import{a as w,u as C}from"./vue-router.0ed66d6f.js";import{a as x}from"./@vueuse.d5398ce4.js";import{b as S}from"./index.a9860fea.js";import{r as b,w as I,j as m,k as s,l as p,m as o,v as l,p as h,Q as B,F as L,$ as _,s as N,y as V,z as q}from"./@vue.0987707a.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.38d3ffc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.0057ea16.js";import"./date-fns.e2bf381f.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.6b0f78d1.js";import"./axios.b9f958b0.js";import"./vue-request.6886b8d7.js";/* empty css                    */const F={__name:"layout",setup(M){const t=w(),c=C(),r=b(),i=x("log_page_current","app");function n(){r.value=[t.params.id]}n(),I(()=>t.name,a=>{n()}),t.params.id||(c.push({name:"logs-item",params:{id:i.value}}),r.value=[i.value]);function d(a){i.value=a}return(a,u)=>{const f=m("a-menu-item"),v=m("router-link"),y=m("a-menu"),k=m("router-view");return s(),p(g,{width:120},{sider:o(()=>[l(y,{class:"menu","selected-keys":r.value,"onUpdate:selectedKeys":u[0]||(u[0]=e=>r.value=e),onMenuItemClick:d},{default:o(()=>[(s(),h(L,null,B(["app","sql","slow_sql","visitor","spider"],e=>l(v,{to:{name:"logs-item",params:{id:e}}},{default:o(()=>[(s(),p(f,{key:e},{default:o(()=>[V(q(a.$t(e)),1)]),_:2},1024))]),_:2},1032,["to"])),64))]),_:1},8,["selected-keys"])]),default:o(()=>[_(t).params.id?(s(),p(k,{key:_(t).params.id.toString()})):N("",!0)]),_:1})}}},ft=S(F,[["__scopeId","data-v-880a974b"]]);export{ft as default};
