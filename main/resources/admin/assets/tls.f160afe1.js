import"./index.a9860fea.js";import{i as x,j as m,k as i,p as f,v as o,m as r,$ as t,F as V,l as v,y as s,s as c,z as U}from"./@vue.0987707a.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.38d3ffc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.0057ea16.js";import"./date-fns.e2bf381f.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.6b0f78d1.js";import"./axios.b9f958b0.js";import"./vue-request.6886b8d7.js";/* empty css                    */const me={__name:"tls",setup(R){const e=x("data");return(n,a)=>{const u=m("a-switch"),p=m("a-form-item"),d=m("a-textarea"),y=m("a-input-number"),_=m("a-radio"),b=m("a-radio-group"),w=m("a-space"),k=m("a-divider"),g=m("a-alert");return i(),f(V,null,[o(p,{label:n.$t("enable")},{default:r(()=>[o(u,{type:"round",modelValue:t(e).enable,"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).enable=l)},null,8,["modelValue"])]),_:1},8,["label"]),t(e).enable?(i(),f(V,{key:0},[o(p,{label:"Key",field:"key_pem",rules:[{required:t(e).enable,message:n.$t("message.required",["key"])}]},{default:r(()=>[o(d,{modelValue:t(e).key_pem,"onUpdate:modelValue":a[1]||(a[1]=l=>t(e).key_pem=l),style:{width:"650px"},"auto-size":{minRows:10,maxRows:10}},null,8,["modelValue"])]),_:1},8,["rules"]),o(p,{label:"Cert(pem)",field:"cert_pem",rules:[{required:t(e).enable,message:n.$t("message.required",["cert"])}]},{default:r(()=>[o(d,{modelValue:t(e).cert_pem,"onUpdate:modelValue":a[2]||(a[2]=l=>t(e).cert_pem=l),style:{width:"650px"},"auto-size":{minRows:10,maxRows:10}},null,8,["modelValue"])]),_:1},8,["rules"]),o(p,{label:"Port",help:"default 443"},{default:r(()=>[o(y,{modelValue:t(e).port,"onUpdate:modelValue":a[3]||(a[3]=l=>t(e).port=l),style:{width:"140px"},min:0},null,8,["modelValue"])]),_:1}),o(p,{label:"Force Https"},{default:r(()=>[o(w,null,{default:r(()=>[o(u,{type:"round",modelValue:t(e).force_https,"onUpdate:modelValue":a[4]||(a[4]=l=>t(e).force_https=l)},null,8,["modelValue"]),t(e).force_https?(i(),v(b,{key:0,modelValue:t(e).redirect_status,"onUpdate:modelValue":a[5]||(a[5]=l=>t(e).redirect_status=l)},{default:r(()=>[o(_,{value:301},{default:r(()=>[s("301")]),_:1}),o(_,{value:302},{default:r(()=>[s("302")]),_:1})]),_:1},8,["modelValue"])):c("",!0)]),_:1})]),_:1})],64)):c("",!0),o(k),o(g,{type:"warning"},{default:r(()=>[s(U(n.$t("needRestartApp")),1)]),_:1})],64)}}};export{me as default};
