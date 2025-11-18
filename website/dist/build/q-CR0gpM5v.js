import{a as i,s as r,t as e,q as a}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const s={TValue:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]},{type:"custom",name:"BaseSchemaAsync",href:"../BaseSchemaAsync/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}]}},TMessage:{type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"SetIssue",href:"../SetIssue/"}]},"undefined"]}},BaseSchemaAsync:{modifier:"extends",type:{type:"custom",name:"BaseSchemaAsync",href:"../BaseSchemaAsync/",generics:[{type:"custom",name:"InferSetInput",href:"../InferSetInput/",generics:[{type:"custom",name:"TValue"}]},{type:"custom",name:"InferSetOutput",href:"../InferSetOutput/",generics:[{type:"custom",name:"TValue"}]},{type:"union",options:[{type:"custom",name:"SetIssue",href:"../SetIssue/"},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TValue"}]}]}]}},type:{type:{type:"string",value:"set"}},reference:{type:{type:"union",options:[{type:"custom",modifier:"typeof",name:"set",href:"../set/"},{type:"custom",modifier:"typeof",name:"setAsync",href:"../setAsync/"}]}},expects:{type:{type:"string",value:"Set"}},value:{type:{type:"custom",name:"TValue"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"SetSchemaAsync",id:"setschemaasync",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],S={title:"SetSchemaAsync",meta:[{name:"description",content:"Set schema async interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","EltonLobo07"]}},g={title:"SetSchemaAsync",description:"Set schema async interface.",contributors:["fabian-hiller","EltonLobo07"]};function l(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...c.components};return e(a,{children:[e(n.h1,{id:"setschemaasync",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#setschemaasync",children:e(n.span,{class:"icon icon-link"})}),"SetSchemaAsync"]}),`
`,e(n.p,{children:"Set schema async interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TValue"})," ",e(t,{...s.TValue})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"SetSchemaAsync"})," ",e(t,{...s.BaseSchemaAsync}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...s.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...s.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...s.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"value"})," ",e(t,{...s.value})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...s.message})]}),`
`]}),`
`]}),`
`]})]})}const I=(c={})=>{const n=i(r,{children:i(l,c,3,null)},3,"q4M2dVXa");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{I as default,g as frontmatter,S as head,f as headings};
