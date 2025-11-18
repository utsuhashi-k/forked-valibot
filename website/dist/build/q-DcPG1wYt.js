import{a as r,s as c,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"ValueInput",href:"../ValueInput/"}},TRequirement:{modifier:"extends",type:{type:"custom",name:"TInput"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MaxValueIssue",href:"../MaxValueIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MaxValueIssue",href:"../MaxValueIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"max_value"}},reference:{type:{type:"custom",modifier:"typeof",name:"maxValue",href:"../maxValue/"}},expects:{type:{type:"template",parts:[{type:"string",value:"<="},"string"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"MaxValueAction",id:"maxvalueaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],x={title:"MaxValueAction",meta:[{name:"description",content:"Max value action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},M={title:"MaxValueAction",description:"Max value action interface.",contributors:["fabian-hiller"]};function l(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...a.components};return e(s,{children:[e(n.h1,{id:"maxvalueaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maxvalueaction",children:e(n.span,{class:"icon icon-link"})}),"MaxValueAction"]}),`
`,e(n.p,{children:"Max value action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MaxValueAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const g=(a={})=>{const n=r(c,{children:r(l,a,3,null)},3,"3EA9UVDk");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{g as default,M as frontmatter,x as head,y as headings};
