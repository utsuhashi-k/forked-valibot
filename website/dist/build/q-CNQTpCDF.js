import{a as r,s,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"ValueInput",href:"../ValueInput/"}},TRequirement:{modifier:"extends",type:{modifier:"readonly",type:"array",item:{type:"custom",name:"TInput"}}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"NotValuesIssue",href:"../NotValuesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"NotValuesIssue",href:"../NotValuesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"not_values"}},reference:{type:{type:"custom",modifier:"typeof",name:"notValues",href:"../notValues/"}},expects:{type:{type:"template",parts:[{type:"string",value:"!"},"string"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"NotValuesAction",id:"notvaluesaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"NotValuesAction",meta:[{name:"description",content:"Not values action type."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["EltonLobo07"]}},T={title:"NotValuesAction",description:"Not values action type.",contributors:["EltonLobo07"]};function l(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...o.components};return e(c,{children:[e(n.h1,{id:"notvaluesaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#notvaluesaction",children:e(n.span,{class:"icon icon-link"})}),"NotValuesAction"]}),`
`,e(n.p,{children:"Not values action type."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"NotValuesAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const V=(o={})=>{const n=r(s,{children:r(l,o,3,null)},3,"HJYud9k5");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{V as default,T as frontmatter,g as head,f as headings};
