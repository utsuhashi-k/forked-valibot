import{a as r,s as c,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const s={TWrapped:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"NonNullishIssue",href:"../NonNullishIssue/"}]},"undefined"]}},BaseSchema:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:[{type:"custom",name:"InferNonNullishInput",href:"../InferNonNullishInput/",generics:[{type:"custom",name:"TWrapped"}]},{type:"custom",name:"InferNonNullishOutput",href:"../InferNonNullishOutput/",generics:[{type:"custom",name:"TWrapped"}]},{type:"union",options:[{type:"custom",name:"NonNullishIssue",href:"../NonNullishIssue/"},{type:"custom",name:"InferNonNullishIssue",href:"../InferNonNullishIssue/",generics:[{type:"custom",name:"TWrapped"}]}]}]}},type:{type:{type:"string",value:"non_nullish"}},reference:{type:{type:"custom",modifier:"typeof",name:"nonNullish",href:"../nonNullish/"}},expects:{type:{type:"string",value:"(!null & !undefined)"}},wrapped:{type:{type:"custom",name:"TWrapped"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"NonNullishSchema",id:"nonnullishschema",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],N={title:"NonNullishSchema",meta:[{name:"description",content:"Non nullish schema interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"NonNullishSchema",description:"Non nullish schema interface.",contributors:["fabian-hiller"]};function a(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...t.components};return e(l,{children:[e(n.h1,{id:"nonnullishschema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#nonnullishschema",children:e(n.span,{class:"icon icon-link"})}),"NonNullishSchema"]}),`
`,e(n.p,{children:"Non nullish schema interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TWrapped"})," ",e(i,{...s.TWrapped})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"NonNullishSchema"})," ",e(i,{...s.BaseSchema}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...s.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...s.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...s.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"wrapped"})," ",e(i,{...s.wrapped})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...s.message})]}),`
`]}),`
`]}),`
`]})]})}const I=(t={})=>{const n=r(c,{children:r(a,t,3,null)},3,"pS97aX3P");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{I as default,g as frontmatter,N as head,y as headings};
