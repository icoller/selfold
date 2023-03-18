import{B as y,u as R,k as v,T as I,e as D,U as P}from"./index.a9860fea.js";import{S as q}from"./url.27fc90d6.js";import{i as k,j as d,k as w,p as C,v as e,m as l,$ as t,y as a,n as r,z as h,F as U,c as S,l as T,s as F}from"./@vue.0987707a.js";import{_ as N}from"./MakeRandString.ea8fb67e.js";import{u as W}from"./vue-request.6886b8d7.js";import{M as A}from"./@arco-design.38d3ffc1.js";import"./vue-router.0ed66d6f.js";import"./vue-i18n.e3137642.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.5c5bb0aa.js";import"./@vueuse.d5398ce4.js";import"./pinia.2e07300c.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.0057ea16.js";import"./date-fns.e2bf381f.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.6ced7bf3.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.3f61458b.js";import"./vueuc.5f5811a3.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.6b0f78d1.js";import"./axios.b9f958b0.js";/* empty css                    */import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";const E={style:{"max-width":"527px"}},L={__name:"rules",setup(z){const o=k("data");return(b,c)=>{const g=d("a-input"),m=d("a-tag"),n=d("a-space"),p=d("a-popover"),u=d("a-form-item"),i=d("a-alert"),_=d("a-divider");return w(),C(U,null,[e(u,{label:b.$t("article")},{default:l(()=>[e(p,{position:"rt",title:"examples:"},{content:l(()=>[e(n,{direction:"vertical"},{default:l(()=>[e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/article/{slug}")]),_:1},8,["onClick"]),e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/archives/{slug}.html")]),_:1},8,["onClick"]),e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/post-{slug}")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[e(g,{class:"w-64",modelValue:t(o).article_rule,"onUpdate:modelValue":c[0]||(c[0]=f=>t(o).article_rule=f),placeholder:"/article/{slug}"},null,8,["modelValue"])]),_:1})]),_:1},8,["label"]),e(u,{label:b.$t("category")},{default:l(()=>[e(n,{class:"w-full",direction:"vertical"},{default:l(()=>[e(p,{position:"rt",title:"examples:"},{content:l(()=>[e(n,{direction:"vertical"},{default:l(()=>[e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/category/{slug}")]),_:1},8,["onClick"]),e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/{slug}.html")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[e(g,{class:"w-64",modelValue:t(o).category_rule,"onUpdate:modelValue":c[1]||(c[1]=f=>t(o).category_rule=f),placeholder:"/category/{slug}"},null,8,["modelValue"])]),_:1}),e(p,{position:"rt",title:"examples:"},{content:l(()=>[e(n,{direction:"vertical"},{default:l(()=>[e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/category/{slug}/{page}")]),_:1},8,["onClick"]),e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/{slug}/{page}.html")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[e(g,{class:"w-64",modelValue:t(o).category_page_rule,"onUpdate:modelValue":c[2]||(c[2]=f=>t(o).category_page_rule=f),placeholder:"/category/{slug}/{page}"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["label"]),e(u,{label:b.$t("tag")},{default:l(()=>[e(n,{class:"w-full",direction:"vertical"},{default:l(()=>[e(p,{position:"rt",title:"examples:"},{content:l(()=>[e(n,{direction:"vertical"},{default:l(()=>[e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/tag/{slug}")]),_:1},8,["onClick"]),e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/{slug}.html")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[e(g,{class:"w-64",modelValue:t(o).tag_rule,"onUpdate:modelValue":c[3]||(c[3]=f=>t(o).tag_rule=f),placeholder:"/tag/{slug}"},null,8,["modelValue"])]),_:1}),e(p,{position:"rt",title:"examples:"},{content:l(()=>[e(n,{direction:"vertical"},{default:l(()=>[e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/tag/{slug}/{page}")]),_:1},8,["onClick"]),e(m,{size:"small",class:"cursor-pointer",onClick:t(y)},{default:l(()=>[a("/tag-{slug}/page-{page}.html")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[e(g,{class:"w-64",modelValue:t(o).tag_page_rule,"onUpdate:modelValue":c[4]||(c[4]=f=>t(o).tag_page_rule=f),placeholder:"/tag/{slug}/{page}"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["label"]),r("div",E,[e(i,{class:"mb-2"},{default:l(()=>[e(n,null,{default:l(()=>[r("span",null,h(b.$t("delimiter"))+":",1),e(m,null,{default:l(()=>[a("/")]),_:1}),e(m,null,{default:l(()=>[a("-")]),_:1}),e(m,null,{default:l(()=>[a(".")]),_:1}),e(m,null,{default:l(()=>[a(":")]),_:1})]),_:1})]),_:1}),e(i,{style:{"max-width":"700px"},type:"warning"},{default:l(()=>[a(" \u5982\u679C\u522B\u540D\u4E2D\u53EF\u80FD\u5305\u542B\u67D0\u4E2A\u5206\u9694\u7B26\uFF0C\u5219\u8DEF\u7531\u4E2D\u907F\u514D\u4F7F\u7528\u6B64\u5206\u9694\u7B26\uFF0C\u5426\u5219\u65E0\u6CD5\u5339\u914D\u8DEF\u7531\u3002\u5EFA\u8BAE\u4F7F\u7528"),e(m,{class:"ml-2"},{default:l(()=>[a("/")]),_:1})]),_:1})]),e(_,{type:"double"}),e(u,{label:b.$t("adminPath")},{default:l(()=>[e(g,{class:"w-64",modelValue:t(o).admin_path,"onUpdate:modelValue":c[5]||(c[5]=f=>t(o).admin_path=f),placeholder:"/admin"},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:b.$t("sitemap")},{default:l(()=>[e(p,{position:"rt"},{content:l(()=>[e(q,{sitemap_path:t(o).sitemap_path},null,8,["sitemap_path"])]),default:l(()=>[e(g,{class:"w-64",modelValue:t(o).sitemap_path,"onUpdate:modelValue":c[6]||(c[6]=f=>t(o).sitemap_path=f),placeholder:"/sitemap"},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])],64)}}},M=r("br",null,null,-1),O=r("br",null,null,-1),G=r("br",null,null,-1),H=r("br",null,null,-1),K=r("br",null,null,-1),j=r("br",null,null,-1),X=r("br",null,null,-1),J=r("br",null,null,-1),Y=r("br",null,null,-1),Q=r("br",null,null,-1),Z=r("br",null,null,-1),ee=r("br",null,null,-1),le=r("br",null,null,-1),te=r("br",null,null,-1),oe=r("br",null,null,-1),ae=r("br",null,null,-1),ne=r("br",null,null,-1),se=r("br",null,null,-1),ue=r("br",null,null,-1),ie=r("br",null,null,-1),re=r("br",null,null,-1),de=r("br",null,null,-1),pe=r("br",null,null,-1),me={__name:"options",setup(z){const o=k("data");R();const b=S(()=>[{label:"tcp",value:"tcp"},{label:"tcp4 (IPv4-only)",value:"tcp4"},{label:"tcp6 (IPv6-only) "+v("warning")+"!!",value:"tcp6"}]),c=[{label:"X-Forwarded-For",value:"X-Forwarded-For"},{label:"CF-Connecting-IP",value:"CF-Connecting-IP"},{label:"Ali-Cdn-Real-Ip",value:"Ali-Cdn-Real-Ip"}],g=S(()=>[{label:v("disable"),value:-1},{label:v("default"),value:0},{label:v("bestSpeed"),value:1},{label:v("bestCompression"),value:2}]);return(m,n)=>{const p=d("a-switch"),u=d("a-form-item"),i=d("icon-question-circle"),_=d("a-tooltip"),f=d("a-select"),x=d("a-divider"),V=d("a-input-number"),B=d("a-input"),$=d("a-alert");return w(),C(U,null,[e(u,{label:"Etag"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).etag,"onUpdate:modelValue":n[0]||(n[0]=s=>t(o).etag=s)},null,8,["modelValue"])]),_:1}),e(u,{label:"Minify code"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).minify_code,"onUpdate:modelValue":n[1]||(n[1]=s=>t(o).minify_code=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a("Minify HTML/CSS/JS code. Remove blank lines.")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:m.$t("compress")},{default:l(()=>[e(f,{class:"w-64",modelValue:t(o).compress_level,"onUpdate:modelValue":n[2]||(n[2]=s=>t(o).compress_level=s),options:t(g)},null,8,["modelValue","options"]),e(_,null,{content:l(()=>[a("Gzip,Brotli compress")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1},8,["label"]),e(u,{label:"Proxy header"},{default:l(()=>[e(f,{class:"w-64",modelValue:t(o).proxy_header,"onUpdate:modelValue":n[3]||(n[3]=s=>t(o).proxy_header=s),multiple:"","allow-clear":"","allow-create":"",options:c},null,8,["modelValue"]),e(_,null,{content:l(()=>[a("If the request from some sort of proxy, like a load balancer. set to get the correct ip.")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(x),e(u,{label:"Body limit"},{default:l(()=>[e(V,{class:"w-64",modelValue:t(o).options.body_limit,"onUpdate:modelValue":n[4]||(n[4]=s=>t(o).options.body_limit=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends 413 - Request Entity Too Large response. "),M,a("-1 will decline any body size "),O,a("0 Default: 4 * 1024 * 1024 ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Concurrency"},{default:l(()=>[e(V,{class:"w-64",modelValue:t(o).options.concurrency,"onUpdate:modelValue":n[5]||(n[5]=s=>t(o).options.concurrency=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a("Maximum number of concurrent connections."),G,a("0 Default: 256 * 1024")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Read buffer size"},{default:l(()=>[e(V,{class:"w-64",modelValue:t(o).options.read_buffer_size,"onUpdate:modelValue":n[6]||(n[6]=s=>t(o).options.read_buffer_size=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" Per-connection buffer size for requests' reading. This also limits the maximum header size. "),H,a("Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies). "),K,a("0 Default: 4096 ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Write buffer size"},{default:l(()=>[e(V,{class:"w-64",modelValue:t(o).options.write_buffer_size,"onUpdate:modelValue":n[7]||(n[7]=s=>t(o).options.write_buffer_size=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a("Per-connection buffer size for responses' writing."),j,a("0 Default: 4096")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Server header"},{default:l(()=>[e(B,{modelValue:t(o).options.server_header,"onUpdate:modelValue":n[8]||(n[8]=s=>t(o).options.server_header=s),class:"w-64",placeholder:""},null,8,["modelValue"]),e(_,null,{content:l(()=>[a('Enables the "Server: value" HTTP header.'),X,a('Default: ""')]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Network"},{default:l(()=>[e(f,{class:"w-64",modelValue:t(o).options.Network,"onUpdate:modelValue":n[9]||(n[9]=s=>t(o).options.Network=s),options:t(b)},null,8,["modelValue","options"]),e(_,null,{content:l(()=>[a(' Known networks are "tcp", "tcp4" (IPv4-only), "tcp6" (IPv6-only) '),J,a('WARNING: When prefork is set to true, only "tcp4" and "tcp6" can be chose. '),Y,a("Default: tcp4 ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Strict routing"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.strict_routing,"onUpdate:modelValue":n[10]||(n[10]=s=>t(o).options.strict_routing=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(' When set to true, the router treats "/foo" and "/foo/" as different.'),Q,a(' By default this is disabled and both "/foo" and "/foo/" will execute the same handler.'),Z,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Case sensitive"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.case_sensitive,"onUpdate:modelValue":n[11]||(n[11]=s=>t(o).options.case_sensitive=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" When set to true, enables case sensitive routing."),ee,a(' E.g. "/FoO" and "/foo" are treated as different routes.'),le,a(' By default this is disabled and both "/FoO" and "/foo" will execute the same handler.'),te,a(" Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Disable keepalive"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.disable_keepalive,"onUpdate:modelValue":n[12]||(n[12]=s=>t(o).options.disable_keepalive=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" Disable keep-alive connections, the server will close incoming connections after sending the first response to the client "),oe,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Disable default date"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.disable_default_date,"onUpdate:modelValue":n[13]||(n[13]=s=>t(o).options.disable_default_date=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" When set to true, causes the default date header to be excluded from the response. "),ae,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Disable default content type"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.disable_default_content_type,"onUpdate:modelValue":n[14]||(n[14]=s=>t(o).options.disable_default_content_type=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" When set to true, causes the default Content-Type header to be excluded from the response. "),ne,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Disable header normalizing"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.disable_header_normalizing,"onUpdate:modelValue":n[15]||(n[15]=s=>t(o).options.disable_header_normalizing=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" When set to true, disables header normalization. "),se,a("By default all header names are normalized: conteNT-tYPE -> Content-Type. "),ue,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Disable startup message"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.disable_startup_message,"onUpdate:modelValue":n[16]||(n[16]=s=>t(o).options.disable_startup_message=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" When set to true, it will not print out the \xABFiber\xBB ASCII art and listening address. "),ie,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Stream request body"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.StreamRequestBody,"onUpdate:modelValue":n[17]||(n[17]=s=>t(o).options.StreamRequestBody=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" StreamRequestBody enables request body streaming, and calls the handler sooner when given body is larger then the current limit. "),re,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e(u,{label:"Reduce memory usage"},{default:l(()=>[e(p,{type:"round",modelValue:t(o).options.reduce_memory_usage,"onUpdate:modelValue":n[18]||(n[18]=s=>t(o).options.reduce_memory_usage=s)},null,8,["modelValue"]),e(_,null,{content:l(()=>[a(" Aggressively reduces memory usage at the cost of higher CPU usage if set to true. "),de,a("Try enabling this option only if the server consumes too much memory serving mostly idle keep-alive connections. This may reduce memory usage by more than 50%. "),pe,a("Default: false ")]),default:l(()=>[e(i,{class:"ml-2 opacity-60"})]),_:1})]),_:1}),e($,{type:"warning"},{default:l(()=>[a(h(m.$t("needRestartApp")),1)]),_:1})],64)}}},ce={__name:"pprof",setup(z){const o=k("data"),b=R(),c=I(b),g=S(()=>o.value.prof_secret?"/"+o.value.prof_secret:"");return(m,n)=>{const p=d("a-input"),u=d("icon-exclamation-circle-fill"),i=d("a-tag"),_=d("a-form-item"),f=d("a-descriptions-item"),x=d("a-descriptions");return w(),C(U,null,[e(_,{label:"secret"},{default:l(()=>[e(p,{class:"w-64",modelValue:t(o).prof_secret,"onUpdate:modelValue":n[1]||(n[1]=V=>t(o).prof_secret=V)},{suffix:l(()=>[e(N,{modelValue:t(o).prof_secret,"onUpdate:modelValue":n[0]||(n[0]=V=>t(o).prof_secret=V),length:10},null,8,["modelValue"])]),_:1},8,["modelValue"]),t(o).prof_secret===""?(w(),T(i,{key:0,color:"red",class:"ml-1"},{icon:l(()=>[e(u)]),default:l(()=>[a("unsafe")]),_:1})):F("",!0)]),_:1}),e(x,{title:"Usage",bordered:"",column:1,size:"large"},{default:l(()=>[e(f,{label:"web"},{default:l(()=>[r("span",{onClick:n[2]||(n[2]=(...V)=>t(D)&&t(D)(...V)),class:"inline-block cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-blue-500"},h(t(c))+h(t(g))+"/debug/pprof ",1)]),_:1}),e(f,{label:"heap"},{default:l(()=>[e(i,{onClick:t(y),class:"cursor-pointer"},{default:l(()=>[a("go tool pprof -http=:9090 "+h(t(c))+h(t(g))+"/debug/pprof/heap",1)]),_:1},8,["onClick"])]),_:1}),e(f,{label:"goroutine"},{default:l(()=>[e(i,{onClick:t(y),class:"cursor-pointer"},{default:l(()=>[a("go tool pprof -http=:9090 "+h(t(c))+h(t(g))+"/debug/pprof/goroutine",1)]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}},Je={__name:"router",setup(z){const o=k("useSaveSuccess"),b=k("data"),c=b.value.admin_path;o.value.push(()=>{g()});const{run:g}=W(P,{manual:!0,onSuccess:()=>{c!==b.value.admin_path&&(A.loading({content:"loading...",duration:3e3}),setTimeout(()=>{self.location=b.value.admin_path.indexOf("/")===0?b.value.admin_path:"/"+b.value.admin_dir},3e3))}});return(m,n)=>{const p=d("a-tab-pane"),u=d("a-tabs"),i=d("a-divider");return w(),C(U,null,[e(u,{type:"rounded","lazy-load":"","destroy-on-hide":""},{default:l(()=>[e(p,{key:"rules",title:m.$t("rules")},{default:l(()=>[e(L)]),_:1},8,["title"]),e(p,{key:"options",title:m.$t("options")},{default:l(()=>[e(me)]),_:1},8,["title"]),e(p,{key:"pprof",title:"pprof"},{default:l(()=>[e(ce)]),_:1})]),_:1}),e(i)],64)}}};export{Je as default};
