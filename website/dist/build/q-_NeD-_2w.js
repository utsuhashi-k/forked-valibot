import{a as c,s as d,t as e,q as a}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",generics:[{type:"custom",name:"CreditCardIssue",href:"../CreditCardIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"CreditCardIssue",href:"../CreditCardIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"credit_card"}},reference:{type:{type:"custom",modifier:"typeof",name:"creditCard",href:"../creditCard/"}},expects:{type:"null"},requirement:{type:{type:"function",params:[{name:"input",type:"string"}],return:"boolean"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"CreditCardAction",id:"creditcardaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],C={title:"CreditCardAction",meta:[{name:"description",content:"Credit card action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"CreditCardAction",description:"Credit card action interface.",contributors:["fabian-hiller"]};function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...r.components};return e(a,{children:[e(n.h1,{id:"creditcardaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#creditcardaction",children:e(n.span,{class:"icon icon-link"})}),"CreditCardAction"]}),`
`,e(n.p,{children:"Credit card action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"CreditCardAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(r={})=>{const n=c(d,{children:c(s,r,3,null)},3,"cd7o2l78");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{x as default,g as frontmatter,C as head,y as headings};
