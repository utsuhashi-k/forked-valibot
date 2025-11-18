import{a,s as c,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"SafeIntegerIssue",href:"../SafeIntegerIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"SafeIntegerIssue",href:"../SafeIntegerIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"safe_integer"}},reference:{type:{type:"custom",modifier:"typeof",name:"safeInteger",href:"../safeInteger/"}},expects:{type:"null"},requirement:{type:{type:"function",params:[{name:"input",type:"number"}],return:"boolean"}},message:{type:{type:"custom",name:"TMessage"}}},g=[{text:"SafeIntegerAction",id:"safeintegeraction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],y={title:"SafeIntegerAction",meta:[{name:"description",content:"Safe integer action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},I={title:"SafeIntegerAction",description:"Safe integer action interface.",contributors:["fabian-hiller"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...r.components};return e(s,{children:[e(n.h1,{id:"safeintegeraction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#safeintegeraction",children:e(n.span,{class:"icon icon-link"})}),"SafeIntegerAction"]}),`
`,e(n.p,{children:"Safe integer action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"SafeIntegerAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(r={})=>{const n=a(c,{children:a(d,r,3,null)},3,"eV-AGOAm");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{x as default,I as frontmatter,y as head,g as headings};
