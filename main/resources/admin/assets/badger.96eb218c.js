import{_ as M}from"./Duration.ed9babef.js";import{j as u,k as c,p as v,v as a,m as t,y as m,z as i,F as L}from"./@vue.0987707a.js";import"./index.a9860fea.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.38d3ffc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.0057ea16.js";import"./date-fns.e2bf381f.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.6b0f78d1.js";import"./axios.b9f958b0.js";import"./vue-request.6886b8d7.js";/* empty css                    */const la={__name:"badger",props:{data:Object},setup(e){const f=[{label:"FileIO",value:0},{label:"LoadToRAM",value:1},{label:"MemoryMap",value:2}];return(b,l)=>{const V=u("a-input"),d=u("a-form-item"),r=u("a-radio-group"),n=u("a-input-number"),s=u("a-tag"),p=u("a-radio"),g=u("a-switch");return c(),v(L,null,[a(d,{label:"path"},{default:t(()=>[a(V,{class:"w-64",modelValue:e.data.path,"onUpdate:modelValue":l[0]||(l[0]=o=>e.data.path=o)},null,8,["modelValue"])]),_:1}),a(d,{label:"valueLogLoadingMode",help:"default: MemoryMap"},{default:t(()=>[a(r,{modelValue:e.data.valueLogLoadingMode,"onUpdate:modelValue":l[1]||(l[1]=o=>e.data.valueLogLoadingMode=o),options:f},null,8,["modelValue"])]),_:1}),a(d,{label:"tableLoadingMode",help:"default: MemoryMap"},{default:t(()=>[a(r,{modelValue:e.data.tableLoadingMode,"onUpdate:modelValue":l[2]||(l[2]=o=>e.data.tableLoadingMode=o),options:f},null,8,["modelValue"])]),_:1}),a(d,{label:"numMemtables",help:"default: 2"},{default:t(()=>[a(n,{class:"w-64",modelValue:e.data.numMemtables,"onUpdate:modelValue":l[3]||(l[3]=o=>e.data.numMemtables=o),min:1},null,8,["modelValue"])]),_:1}),a(d,{label:"maxTableSize",help:"default: 16"},{default:t(()=>[a(n,{class:"w-64",modelValue:e.data.maxTableSize,"onUpdate:modelValue":l[4]||(l[4]=o=>e.data.maxTableSize=o),min:1},{suffix:t(()=>[m("M")]),_:1},8,["modelValue"]),a(s,{class:"ml-2",color:"blue"},{default:t(()=>[m("RAM: "+i(e.data.numMemtables)+" * "+i(e.data.maxTableSize)+"M \u2248 "+i(e.data.numMemtables*e.data.maxTableSize)+"M",1)]),_:1})]),_:1}),a(d,{label:"valueLogFileSize",help:"default: 256"},{default:t(()=>[a(n,{class:"w-64",modelValue:e.data.valueLogFileSize,"onUpdate:modelValue":l[5]||(l[5]=o=>e.data.valueLogFileSize=o),min:0},{suffix:t(()=>[m("M")]),_:1},8,["modelValue"])]),_:1}),a(d,{label:"numCompactors",help:"default: 2"},{default:t(()=>[a(n,{class:"w-64",modelValue:e.data.numCompactors,"onUpdate:modelValue":l[6]||(l[6]=o=>e.data.numCompactors=o),min:2},null,8,["modelValue"])]),_:1}),a(d,{label:"compression",help:"default: snappy"},{default:t(()=>[a(r,{modelValue:e.data.compression,"onUpdate:modelValue":l[7]||(l[7]=o=>e.data.compression=o)},{default:t(()=>[a(p,{value:0},{default:t(()=>[m("none")]),_:1}),a(p,{value:1},{default:t(()=>[m("snappy")]),_:1}),a(p,{value:2},{default:t(()=>[m("zstd")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{label:"syncWrites",help:"default: close"},{default:t(()=>[a(g,{modelValue:e.data.syncWrites,"onUpdate:modelValue":l[8]||(l[8]=o=>e.data.syncWrites=o),type:"round"},null,8,["modelValue"])]),_:1}),a(d,{label:"gcInterval",help:"default: 10 minutes"},{default:t(()=>[a(M,{data:e.data.gcInterval},null,8,["data"]),a(s,{class:"ml-2",color:"orangered"},{default:t(()=>[m(i(b.$t("needRestartApp")),1)]),_:1})]),_:1}),a(d,{label:"gcDiscardRatio",help:"default: 0.9"},{default:t(()=>[a(n,{class:"w-64",modelValue:e.data.gcDiscardRatio,"onUpdate:modelValue":l[9]||(l[9]=o=>e.data.gcDiscardRatio=o),step:.1,precision:1,min:0,max:1},null,8,["modelValue","step"]),a(s,{class:"ml-2",color:"orangered"},{default:t(()=>[m(i(b.$t("needRestartApp")),1)]),_:1})]),_:1})],64)}}};export{la as default};
