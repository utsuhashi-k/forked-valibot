import{a as c,s as o,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IntegerIssue",href:"../IntegerIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"IntegerIssue",href:"../IntegerIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"integer"}},reference:{type:{type:"custom",modifier:"typeof",name:"integer",href:"../integer/"}},expects:{type:"null"},requirement:{type:{type:"function",params:[{name:"input",type:"number"}],return:"boolean"}},message:{type:{type:"custom",name:"TMessage"}}},g=[{text:"IntegerAction",id:"integeraction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],y={title:"IntegerAction",meta:[{name:"description",content:"Integer action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},I={title:"IntegerAction",description:"Integer action interface.",contributors:["fabian-hiller"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(s,{children:[e(n.h1,{id:"integeraction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#integeraction",children:e(n.span,{class:"icon icon-link"})}),"IntegerAction"]}),`
`,e(n.p,{children:"Integer action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"IntegerAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(r={})=>{const n=c(o,{children:c(d,r,3,null)},3,"zF4hcd32");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{x as default,I as frontmatter,y as head,g as headings};
