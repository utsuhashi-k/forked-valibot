import{a as c,s as o,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"FiniteIssue",href:"../FiniteIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"FiniteIssue",href:"../FiniteIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"finite"}},reference:{type:{type:"custom",modifier:"typeof",name:"finite",href:"../finite/"}},expects:{type:"null"},requirement:{type:{type:"function",params:[{name:"input",type:"number"}],return:"boolean"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"FiniteAction",id:"finiteaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"FiniteAction",meta:[{name:"description",content:"Finite action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},x={title:"FiniteAction",description:"Finite action interface.",contributors:["fabian-hiller"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(s,{children:[e(n.h1,{id:"finiteaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#finiteaction",children:e(n.span,{class:"icon icon-link"})}),"FiniteAction"]}),`
`,e(n.p,{children:"Finite action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"FiniteAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const F=(r={})=>{const n=c(o,{children:c(d,r,3,null)},3,"KDzJ7Lgx");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{F as default,x as frontmatter,g as head,y as headings};
