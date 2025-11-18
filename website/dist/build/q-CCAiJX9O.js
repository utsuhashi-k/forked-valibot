import{a as s,s as c,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as n}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"DecimalIssue",href:"../DecimalIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"DigitsIssue",href:"../DigitsIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"digits"}},reference:{type:{type:"custom",modifier:"typeof",name:"digits",href:"../digits/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},g=[{text:"DigitsAction",id:"digitsaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],y={title:"DigitsAction",meta:[{name:"description",content:"Digits action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","andrew-3kb"]}},D={title:"DigitsAction",description:"Digits action interface.",contributors:["fabian-hiller","andrew-3kb"]};function d(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(o,{children:[e(i.h1,{id:"digitsaction",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#digitsaction",children:e(i.span,{class:"icon icon-link"})}),"DigitsAction"]}),`
`,e(i.p,{children:"Digits action interface."}),`
`,e(i.h2,{id:"generics",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(i.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.code,{children:"TInput"})," ",e(n,{...t.TInput})]}),`
`,e(i.li,{children:[e(i.code,{children:"TMessage"})," ",e(n,{...t.TMessage})]}),`
`]}),`
`,e(i.h2,{id:"definition",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(i.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.code,{children:"DigitsAction"})," ",e(n,{...t.BaseValidation}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:[e(i.code,{children:"type"})," ",e(n,{...t.type})]}),`
`,e(i.li,{children:[e(i.code,{children:"reference"})," ",e(n,{...t.reference})]}),`
`,e(i.li,{children:[e(i.code,{children:"expects"})," ",e(n,{...t.expects})]}),`
`,e(i.li,{children:[e(i.code,{children:"requirement"})," ",e(n,{...t.requirement})]}),`
`,e(i.li,{children:[e(i.code,{children:"message"})," ",e(n,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(r={})=>{const i=s(c,{children:s(d,r,3,null)},3,"iu-2_XI2");return typeof MDXLayout=="function"?e(MDXLayout,{children:i}):i};export{x as default,D as frontmatter,y as head,g as headings};
