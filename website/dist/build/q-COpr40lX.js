import{a as c,s as a,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"LengthInput",href:"../LengthInput/"}},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MaxLengthIssue",href:"../MaxLengthIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MaxLengthIssue",href:"../MaxLengthIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"max_length"}},reference:{type:{type:"custom",modifier:"typeof",name:"maxLength",href:"../maxLength/"}},expects:{type:{type:"template",parts:[{type:"string",value:"<="},{type:"custom",name:"TRequirement"}]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},g=[{text:"MaxLengthAction",id:"maxlengthaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],y={title:"MaxLengthAction",meta:[{name:"description",content:"Max length action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},x={title:"MaxLengthAction",description:"Max length action interface.",contributors:["fabian-hiller"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...r.components};return e(s,{children:[e(n.h1,{id:"maxlengthaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maxlengthaction",children:e(n.span,{class:"icon icon-link"})}),"MaxLengthAction"]}),`
`,e(n.p,{children:"Max length action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MaxLengthAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const M=(r={})=>{const n=c(a,{children:c(d,r,3,null)},3,"adOd_qfw");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{M as default,x as frontmatter,y as head,g as headings};
