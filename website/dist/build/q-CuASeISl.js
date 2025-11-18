import{a as s,s as r,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IsoTimeIssue",href:"../IsoTimeIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"IsoTimeIssue",href:"../IsoTimeIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"iso_time"}},reference:{type:{type:"custom",modifier:"typeof",name:"isoTime",href:"../IsoTimeAction/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"IsoTimeAction",id:"isotimeaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"IsoTimeAction",meta:[{name:"description",content:"ISO time action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},T={title:"IsoTimeAction",description:"ISO time action interface.",contributors:["fabian-hiller"]};function d(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...o.components};return e(c,{children:[e(n.h1,{id:"isotimeaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#isotimeaction",children:e(n.span,{class:"icon icon-link"})}),"IsoTimeAction"]}),`
`,e(n.p,{children:"ISO time action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"IsoTimeAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const g=(o={})=>{const n=s(r,{children:s(d,o,3,null)},3,"QF6PDMiJ");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{g as default,T as frontmatter,I as head,y as headings};
