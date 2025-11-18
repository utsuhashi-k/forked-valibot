import{a as o,s as r,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IsoDateIssue",href:"../IsoDateIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"IsoDateIssue",href:"../IsoDateIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"iso_date"}},reference:{type:{type:"custom",modifier:"typeof",name:"isoDate",href:"../isoDate/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"IsoDateAction",id:"isodateaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"IsoDateAction",meta:[{name:"description",content:"ISO date action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"IsoDateAction",description:"ISO date action interface.",contributors:["fabian-hiller"]};function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...s.components};return e(c,{children:[e(n.h1,{id:"isodateaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#isodateaction",children:e(n.span,{class:"icon icon-link"})}),"IsoDateAction"]}),`
`,e(n.p,{children:"ISO date action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"IsoDateAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const D=(s={})=>{const n=o(r,{children:o(d,s,3,null)},3,"vJuAKbT2");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{D as default,g as frontmatter,I as head,y as headings};
