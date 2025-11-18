import{a as i,s as c,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const s={TKey:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TValue:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MapIssue",href:"../MapIssue/"}]},"undefined"]}},BaseSchema:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:[{type:"custom",name:"InferMapInput",href:"../InferMapInput/",generics:[{type:"custom",name:"TKey"},{type:"custom",name:"TValue"}]},{type:"custom",name:"InferMapOutput",href:"../InferMapOutput/",generics:[{type:"custom",name:"TKey"},{type:"custom",name:"TValue"}]},{type:"union",options:[{type:"custom",name:"MapIssue",href:"../MapIssue/"},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TKey"}]},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TValue"}]}]}]}},type:{type:{type:"string",value:"map"}},reference:{type:{type:"custom",modifier:"typeof",name:"map",href:"../map/"}},expects:{type:{type:"string",value:"Map"}},key:{type:{type:"custom",name:"TKey"}},value:{type:{type:"custom",name:"TValue"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"MapSchema",id:"mapschema",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],M={title:"MapSchema",meta:[{name:"description",content:"Map schema interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"MapSchema",description:"Map schema interface.",contributors:["fabian-hiller"]};function p(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...a.components};return e(r,{children:[e(n.h1,{id:"mapschema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#mapschema",children:e(n.span,{class:"icon icon-link"})}),"MapSchema"]}),`
`,e(n.p,{children:"Map schema interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TKey"})," ",e(t,{...s.TKey})]}),`
`,e(n.li,{children:[e(n.code,{children:"TValue"})," ",e(t,{...s.TValue})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MapSchema"})," ",e(t,{...s.BaseSchema}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...s.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...s.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...s.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"key"})," ",e(t,{...s.key})]}),`
`,e(n.li,{children:[e(n.code,{children:"value"})," ",e(t,{...s.value})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...s.message})]}),`
`]}),`
`]}),`
`]})]})}const I=(a={})=>{const n=i(c,{children:i(p,a,3,null)},3,"Co7tcUh3");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{I as default,g as frontmatter,M as head,f as headings};
