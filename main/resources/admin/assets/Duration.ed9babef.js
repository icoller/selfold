import{k as a}from"./index.a9860fea.js";import{c as r,j as o,k as i,l as p,m as c,v as l,$ as b}from"./@vue.0987707a.js";const f={__name:"Duration",props:{data:Object},setup(e){const u=r(()=>[{label:a("seconds"),value:"second"},{label:a("minutes"),value:"minute"},{label:a("hours"),value:"hour"},{label:a("days"),value:"day"}]);return(_,t)=>{const s=o("a-input-number"),m=o("a-select"),d=o("a-input-group");return i(),p(d,null,{default:c(()=>[l(s,{style:{width:"150px"},modelValue:e.data.number,"onUpdate:modelValue":t[0]||(t[0]=n=>e.data.number=n)},null,8,["modelValue"]),l(m,{modelValue:e.data.unit,"onUpdate:modelValue":t[1]||(t[1]=n=>e.data.unit=n),options:b(u),style:{width:"106px"}},null,8,["modelValue","options"])]),_:1})}}};export{f as _};
