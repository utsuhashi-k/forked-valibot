import{a as s,s as i,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as r}from"./q-C3XvAjir.js";const c={TKey:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["string",{type:"union",options:["string","number","symbol"]},{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TValue:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"RecordIssue",href:"../RecordIssue/"}]},"undefined"]}},BaseSchema:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:[{type:"custom",name:"InferRecordInput",href:"../InferRecordInput/",generics:[{type:"custom",name:"TKey"},{type:"custom",name:"TValue"}]},{type:"custom",name:"InferRecordOutput",href:"../InferRecordOutput/",generics:[{type:"custom",name:"TKey"},{type:"custom",name:"TValue"}]},{type:"union",options:[{type:"custom",name:"RecordIssue",href:"../RecordIssue/"},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TKey"}]},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TValue"}]}]}]}},type:{type:{type:"string",value:"record"}},reference:{type:{type:"custom",modifier:"typeof",name:"record",href:"../record/"}},expects:{type:{type:"string",value:"Object"}},key:{type:{type:"custom",name:"TKey"}},value:{type:{type:"custom",name:"TValue"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"RecordSchema",id:"recordschema",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"RecordSchema",meta:[{name:"description",content:"Record schema interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},I={title:"RecordSchema",description:"Record schema interface.",contributors:["fabian-hiller"]};function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...t.components};return e(o,{children:[e(n.h1,{id:"recordschema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#recordschema",children:e(n.span,{class:"icon icon-link"})}),"RecordSchema"]}),`
`,e(n.p,{children:"Record schema interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TKey"})," ",e(r,{...c.TKey})]}),`
`,e(n.li,{children:[e(n.code,{children:"TValue"})," ",e(r,{...c.TValue})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(r,{...c.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"RecordSchema"})," ",e(r,{...c.BaseSchema}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(r,{...c.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(r,{...c.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(r,{...c.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"key"})," ",e(r,{...c.key})]}),`
`,e(n.li,{children:[e(n.code,{children:"value"})," ",e(r,{...c.value})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(r,{...c.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(t={})=>{const n=s(i,{children:s(d,t,3,null)},3,"mFPPMhLz");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,I as frontmatter,g as head,f as headings};
