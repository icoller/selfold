import{i as x,j as o,k as h,p as _,v as e,m as i,$ as t,F as f}from"./@vue.0987707a.js";const k={__name:"GenerateSlug",setup(y){const a=x("options"),s=["snowflake","hashSnowflake","idgenerator","hashIdgenerator","xid","uuid","nanoid",{value:"nanoid8",label:"nanoid-8"}],r=[{title:"Name",dataIndex:"name",width:145},{title:"Length",dataIndex:"length",width:60,sortable:{sortDirections:["ascend","descend"]}},{title:"Example",dataIndex:"example",width:200},{title:"Anti-collision",dataIndex:"collision",width:100,slotName:"collision"}],u=[{name:"snowflake",example:"446936490811851011",length:18,collision:4},{name:"hashSnowflake",example:"VwXWDylVL88P",length:12,collision:4},{name:"idgenerator",example:"384165655576645",length:15,collision:3.5},{name:"hashIdgenerator",example:"drnKy1WxkP",length:10,collision:3.5},{name:"xid",example:"cfi9d5bu93k0im7ck2hg",length:20,collision:3.5},{name:"uuid",example:"1f8cfe73-887f-4823-ba54-bc8a640803f6",length:36,collision:5},{name:"nanoid",example:"ENqY9KshxBb_PYD5oHY9q",length:21,collision:5},{name:"nanoid-8",example:"j2KPn-xk",length:8,collision:2}];return(d,n)=>{const m=o("a-select"),c=o("a-form-item"),p=o("a-rate"),g=o("a-table");return h(),_(f,null,[e(c,{label:d.$t("article")},{default:i(()=>[e(m,{modelValue:t(a).article.style,"onUpdate:modelValue":n[0]||(n[0]=l=>t(a).article.style=l),options:s,style:{width:"180px"}},null,8,["modelValue"])]),_:1},8,["label"]),e(c,{label:d.$t("category")},{default:i(()=>[e(m,{modelValue:t(a).category.style,"onUpdate:modelValue":n[1]||(n[1]=l=>t(a).category.style=l),options:s,style:{width:"180px"}},null,8,["modelValue"])]),_:1},8,["label"]),e(c,{label:d.$t("tag")},{default:i(()=>[e(m,{modelValue:t(a).tag.style,"onUpdate:modelValue":n[2]||(n[2]=l=>t(a).tag.style=l),options:s,style:{width:"180px"}},null,8,["modelValue"])]),_:1},8,["label"]),e(g,{columns:r,data:u,pagination:!1,size:"small"},{collision:i(({record:l,rowIndex:w,column:b})=>[e(p,{"default-value":l.collision,readonly:"","allow-half":"",class:"collision"},null,8,["default-value"])]),_:1})],64)}}};export{k as default};
