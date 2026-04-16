import{a,s as o,t as e,q as c}from"./q-BMflDIby.js";import{u as s}from"./q--oTrDBLb.js";import"./q-DibvOihq.js";import"./q-DFFNPBxC.js";import"./q-ZqxkfwjP.js";import{P as t}from"./q-CdVP5qAT.js";const r={TInput:{modifier:"extends",type:"any"},TGuard:{modifier:"extends",type:{type:"custom",name:"GuardFunction",href:"../GuardFunction/",generics:[{type:"custom",name:"TInput"}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"GuardIssue",href:"../GuardIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TGuard"}]}]},"undefined"]}},BaseTransformation:{modifier:"extends",type:{type:"custom",name:"BaseTransformation",href:"../BaseTransformation/",generics:[{type:"custom",name:"TInput"},{type:"intersect",options:[{type:"custom",name:"TInput"},{type:"custom",name:"InferGuardOutput",href:"../InferGuardOutput/",generics:[{type:"custom",name:"TGuard"}]}]},{type:"custom",name:"GuardIssue",href:"../GuardIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TGuard"}]}]}},type:{type:{type:"string",value:"guard"}},reference:{type:{type:"custom",modifier:"typeof",name:"guard",href:"../guard/"}},requirement:{type:{type:"custom",name:"TGuard"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"GuardAction",id:"guardaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"GuardAction",meta:[{name:"description",content:"Guard action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["EskiMojo14"]}},G={title:"GuardAction",description:"Guard action interface.",contributors:["EskiMojo14"]};function d(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...s(),...i.components};return e(c,{children:[e(n.h1,{id:"guardaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#guardaction",children:e(n.span,{class:"icon icon-link"})}),"GuardAction"]}),`
`,e(n.p,{children:"Guard action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...r.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TGuard"})," ",e(t,{...r.TGuard})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...r.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"GuardAction"})," ",e(t,{...r.BaseTransformation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...r.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...r.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...r.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...r.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(i={})=>{const n=a(o,{children:a(d,i,3,null)},3,"U3u7rZhF");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,G as frontmatter,g as head,y as headings};
