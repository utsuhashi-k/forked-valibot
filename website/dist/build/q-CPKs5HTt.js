import{a as c,s as o,t as e,q as a}from"./q-dgQLQ9M1.js";import{u as s}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"ValueInput",href:"../ValueInput/"}},TRequirement:{modifier:"extends",type:{type:"custom",name:"TInput"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"ValueIssue",href:"../ValueIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"ValueIssue",href:"../ValueIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"value"}},reference:{type:{type:"custom",modifier:"typeof",name:"value",href:"../value/"}},expects:{type:"string"},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"ValueAction",id:"valueaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"ValueAction",meta:[{name:"description",content:"Value action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","EltonLobo07"]}},T={title:"ValueAction",description:"Value action interface.",contributors:["fabian-hiller","EltonLobo07"]};function l(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...s(),...r.components};return e(a,{children:[e(n.h1,{id:"valueaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#valueaction",children:e(n.span,{class:"icon icon-link"})}),"ValueAction"]}),`
`,e(n.p,{children:"Value action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"ValueAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const V=(r={})=>{const n=c(o,{children:c(l,r,3,null)},3,"ktoI9H6B");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{V as default,T as frontmatter,g as head,y as headings};
