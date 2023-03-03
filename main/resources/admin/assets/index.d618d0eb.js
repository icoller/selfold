import{j as c,k as n,l as d,m as e,v as i,$ as r,y as s,z as l,p as I,F as V,Q as X,s as v,n as b,r as L,c as A,Y as Z,V as ee}from"./@vue.0987707a.js";import{a as te}from"./vue-router.0ed66d6f.js";import{f as O,e as N,u as ae,z as le}from"./index.eb1d2227.js";import{a as ie}from"./@vueuse.d5398ce4.js";import{a as oe}from"./vue-request.6886b8d7.js";import{o as $}from"./naive-ui.0057ea16.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@arco-design.38d3ffc1.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./axios.b9f958b0.js";/* empty css                    */import"./date-fns.e2bf381f.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.6b0f78d1.js";const se=[{width:30,slotName:"detail"},{title:"time",dataIndex:"time",slotName:"time",width:120},{title:"level",dataIndex:"level",slotName:"level",width:100},{title:"file",dataIndex:"file",ellipsis:!0,width:200},{title:"message",dataIndex:"msg",ellipsis:!0,width:200},{title:"more",dataIndex:"more",slotName:"more",ellipsis:!0,width:300}],D=[{width:30,slotName:"detail"},{title:"time",dataIndex:"time",slotName:"time",width:120},{title:"take",dataIndex:"take",slotName:"take",width:100},{title:"file",dataIndex:"file",ellipsis:!0,width:170},{title:"rows",dataIndex:"rows",slotName:"rows",width:80},{title:"sql",dataIndex:"sql",ellipsis:!0,width:400}],R=[{width:30,slotName:"detail"},{title:"time",dataIndex:"time",slotName:"time",width:120},{title:"take",dataIndex:"take",slotName:"take",width:100},{title:"status",dataIndex:"status",slotName:"status",width:80},{title:"depth",dataIndex:"depth",width:70},{title:"ip",dataIndex:"ip",width:140,ellipsis:!0,tooltip:!0},{title:"region",dataIndex:"region",width:220,ellipsis:!0,tooltip:!0},{title:"method",dataIndex:"method",width:80},{title:"url",dataIndex:"url",width:300,ellipsis:!0,tooltip:!0,slotName:"url"},{title:"referer",dataIndex:"referer",width:300,ellipsis:!0,tooltip:!0,slotName:"url"},{title:"userAgent",dataIndex:"userAgent",width:1e3,ellipsis:!0,tooltip:!0}];function ne(){let o=O(R);return o.splice(2,0,{title:"feature",dataIndex:"feature",width:130,ellipsis:!0,tooltip:!0}),o}const re={class:"font-mono text-gray-500 whitespace-pre"},de={__name:"app",props:{data:Object},setup(o){return(x,k)=>{const a=c("a-descriptions-item"),p=c("a-descriptions");return n(),d(p,{column:1,bordered:""},{default:e(()=>[i(a,{label:"time"},{default:e(()=>[i(r($),{time:o.data.time},null,8,["time"])]),_:1}),i(a,{label:"level"},{default:e(()=>[s(l(o.data.level),1)]),_:1}),i(a,{label:"file"},{default:e(()=>[s(l(o.data.file),1)]),_:1}),i(a,{label:"msg"},{default:e(()=>[s(l(o.data.msg),1)]),_:1}),(n(!0),I(V,null,X(o.data.more,(u,f)=>(n(),I(V,null,[f!=="buf"?(n(),d(a,{key:0,label:f},{default:e(()=>[s(l(u),1)]),_:2},1032,["label"])):v("",!0)],64))),256)),o.data.buf?(n(),d(a,{key:0,label:"buf"},{default:e(()=>[b("code",re,l(o.data.buf),1)]),_:1})):v("",!0)]),_:1})}}},ue={class:"whitespace-normal"},me={class:"font-mono text-gray-500 whitespace-pre-line"},ce={__name:"http",props:{data:Object},setup(o){return(x,k)=>{const a=c("a-descriptions-item"),p=c("a-descriptions");return n(),d(p,{column:1,bordered:""},{default:e(()=>[i(a,{label:"time"},{default:e(()=>[i(r($),{time:o.data.time},null,8,["time"])]),_:1}),i(a,{label:"take"},{default:e(()=>[s(l(o.data.take)+" ms",1)]),_:1}),i(a,{label:"status"},{default:e(()=>[s(l(o.data.status),1)]),_:1}),i(a,{label:"depth"},{default:e(()=>[s(l(o.data.depth),1)]),_:1}),i(a,{label:"method"},{default:e(()=>[s(l(o.data.method),1)]),_:1}),i(a,{label:"ip"},{default:e(()=>[s(l(o.data.ip),1)]),_:1}),o.data.feature?(n(),d(a,{key:0,label:"feature"},{default:e(()=>[s(l(o.data.feature),1)]),_:1})):v("",!0),i(a,{label:"url"},{default:e(()=>[b("a",{class:"hover:underline cursor-pointer hover:text-blue-400",onClick:k[0]||(k[0]=(...u)=>r(N)&&r(N)(...u))},l(o.data.url),1)]),_:1}),i(a,{label:"referer"},{default:e(()=>[b("a",{class:"hover:underline cursor-pointer hover:text-blue-400",onClick:k[1]||(k[1]=(...u)=>r(N)&&r(N)(...u))},l(o.data.referer),1)]),_:1}),i(a,{label:"user-agent"},{default:e(()=>[b("span",ue,l(o.data.userAgent),1)]),_:1}),i(a,{label:"headers"},{default:e(()=>[b("code",me,l(o.data.headers),1)]),_:1})]),_:1})}}};const pe={class:"py-2 my-2"},fe=["innerHTML"],_e={__name:"sql",props:{data:Object},setup(o){let x=["select ","from ","distinct"," where "," order by "," group by "," insert into"," inner join"," left join"," and ","having","values","on conflict","do update set"," create table"," limit "," as "," update "," offset "," set ","do nothing","alter table ","alter column ","type ","default ","in "];function k(a){if(!a)return a;for(let p=0;p<x.length;p++){let u=x[p],f=u.toUpperCase();a=a.replaceAll(u,f),a=a.replaceAll(f,"<b>"+f+"</b>")}return a.replace(/"([^"]*)"/g,'"<i>$1</i>"').replace(/'([^']*)'/g,"'<i>$1</i>'")}return(a,p)=>{const u=c("a-descriptions-item"),f=c("a-descriptions");return n(),d(f,{column:1,bordered:""},{default:e(()=>[i(u,{label:"time"},{default:e(()=>[i(r($),{time:o.data.time},null,8,["time"])]),_:1}),i(u,{label:"level"},{default:e(()=>[s(l(o.data.level),1)]),_:1}),i(u,{label:"take"},{default:e(()=>[s(l(o.data.take)+" ms",1)]),_:1}),i(u,{label:"file"},{default:e(()=>[s(l(o.data.file),1)]),_:1}),i(u,{label:"rows"},{default:e(()=>[s(l(o.data.rows),1)]),_:1}),i(u,{label:"msg"},{default:e(()=>[s(l(o.data.msg),1)]),_:1}),i(u,{label:"sql"},{default:e(()=>[b("div",pe,[b("code",{class:"sql font-mono whitespace-pre-line",innerHTML:k(o.data.sql)},null,8,fe)])]),_:1})]),_:1})}}},he=b("th",{style:{color:"var(--color-text-1)","background-color":"var(--color-fill-2)"}},null,-1),be=b("td",{style:{color:"var(--color-text-1)"}},null,-1),ye={class:"flex items-center"},ge=["onClick"],ke={key:0},we={key:1},ve={key:0},lt={__name:"index",setup(o){const x=ae(),a=te().params.id.toString(),p=ie("log_limit",100),u=L(),f=A(()=>x.mainHeight-66),C=L(!1),z=L({}),T=A(()=>{switch(a){case"app":return se;case"sql":return D;case"slow_sql":return D;case"visitor":return R;case"spider":return ne()}});async function H(m){const y=m!=null&&m.page?m.page+1:1,g=await le(a,{page:y,limit:p.value});return{list:P(g),page:y}}const{loading:M,loadingMore:B,dataList:j,loadMore:F,refresh:K}=oe(H,{});function q(){K()}function P(m){if(m=m.reverse(),a!=="app")return m;for(let y in m){let g=O(m[y]);delete g.level,delete g.time,delete g.file,delete g.msg,m[y].more=g}return m}return(m,y)=>{const g=c("a-input-number"),S=c("a-button"),U=c("a-space"),Q=c("icon-eye"),W=c("a-link"),_=c("a-tag"),E=c("a-table"),J=c("a-card"),Y=c("a-modal");return n(),I(V,null,[i(J,{class:"w-full",size:"small",title:m.$t(r(a)),bordered:!1,"body-style":{padding:"0"},"header-style":{border:"none",padding:"8px 0"}},{extra:e(()=>[i(U,null,{default:e(()=>[i(g,{size:"small",modelValue:r(p),"onUpdate:modelValue":y[0]||(y[0]=t=>Z(p)?p.value=t:null),style:{width:"80px"},min:1,onKeyup:ee(q,["enter"])},null,8,["modelValue","onKeyup"]),i(S,{size:"small",onClick:q,type:"outline"},{default:e(()=>[s(l(m.$t("refresh")),1)]),_:1}),i(S,{size:"small",onClick:r(F),type:"outline"},{default:e(()=>[s(l(m.$t("more")),1)]),_:1},8,["onClick"])]),_:1})]),default:e(()=>[i(E,{size:"mini",ref_key:"tableRef",ref:u,bordered:!1,columns:r(T),data:r(j),pagination:!1,scroll:{y:r(f)},"virtual-list-props":r(j).length>1?{height:r(f),buffer:30}:void 0,loading:r(M)||r(B),style:{"--border-radius-medium":"0"}},{th:e(()=>[he]),td:e(()=>[be]),detail:e(({record:t,rowIndex:w,column:h})=>[b("div",ye,[i(W,{onClick:G=>{C.value=!0,z.value=t}},{default:e(()=>[i(Q,{style:{color:"#6b7f94"}})]),_:2},1032,["onClick"])])]),time:e(({record:t,rowIndex:w,column:h})=>[i(r($),{time:t.time,to:Date.now(),type:"relative"},null,8,["time","to"])]),take:e(({record:t,rowIndex:w,column:h})=>[t.take<100?(n(),d(_,{key:0,size:"mini",color:"blue"},{default:e(()=>[s(l(t.take.toFixed(2))+" ms",1)]),_:2},1024)):t.take<200?(n(),d(_,{key:1,size:"mini",color:"orange"},{default:e(()=>[s(l(parseInt(t.take))+" ms",1)]),_:2},1024)):t.take<500?(n(),d(_,{key:2,size:"mini",color:"purple"},{default:e(()=>[s(l(parseInt(t.take))+" ms",1)]),_:2},1024)):(n(),d(_,{key:3,size:"mini",color:"red"},{default:e(()=>[s(l(parseInt(t.take))+" ms",1)]),_:2},1024))]),status:e(({record:t,rowIndex:w,column:h})=>[t.status>=500?(n(),d(_,{key:0,size:"mini",color:"red"},{default:e(()=>[s(l(t.status),1)]),_:2},1024)):t.status>=400?(n(),d(_,{key:1,size:"mini",color:"orange"},{default:e(()=>[s(l(t.status),1)]),_:2},1024)):t.status>=300?(n(),d(_,{key:2,size:"mini",color:"blue"},{default:e(()=>[s(l(t.status),1)]),_:2},1024)):(n(),d(_,{key:3,size:"mini",color:"green"},{default:e(()=>[s(l(t.status),1)]),_:2},1024))]),url:e(({record:t,rowIndex:w,column:h})=>[b("a",{class:"hover:underline cursor-pointer hover:text-blue-400",onClick:G=>r(N)(t[h.dataIndex])},l(t[h.dataIndex]),9,ge)]),level:e(({record:t,rowIndex:w,column:h})=>[t.level==="info"?(n(),d(_,{key:0,size:"mini",color:"blue"},{default:e(()=>[s(l(t.level),1)]),_:2},1024)):t.level==="debug"?(n(),d(_,{key:1,size:"mini",color:"cyan"},{default:e(()=>[s(l(t.level),1)]),_:2},1024)):(n(),d(_,{key:2,size:"mini",color:"red"},{default:e(()=>[s(l(t.level),1)]),_:2},1024))]),rows:e(({record:t,rowIndex:w,column:h})=>[t.rows>-1?(n(),I("span",ke,l(t.rows),1)):(n(),I("span",we," - "))]),more:e(({record:t,rowIndex:w,column:h})=>[Object.keys(t[h.dataIndex]).length>0?(n(),I("div",ve,l(JSON.stringify(t[h.dataIndex]).substring(0,130)),1)):v("",!0)]),_:1},8,["columns","data","scroll","virtual-list-props","loading"])]),_:1},8,["title"]),i(Y,{visible:C.value,"onUpdate:visible":y[1]||(y[1]=t=>C.value=t),title:"Log detail","title-align":"start","modal-style":{width:"auto",height:"92%",minWidth:"600px",maxWidth:"80%"},"body-style":{height:"calc(100% - 52px)"},footer:!1},{default:e(()=>[r(a)==="app"?(n(),d(de,{key:0,data:z.value},null,8,["data"])):v("",!0),r(a)==="sql"||r(a)==="slow_sql"?(n(),d(_e,{key:1,data:z.value},null,8,["data"])):v("",!0),r(a)==="visitor"||r(a)==="spider"?(n(),d(ce,{key:2,data:z.value},null,8,["data"])):v("",!0)]),_:1},8,["visible","body-style"])],64)}}};export{lt as default};
