import{a as r,s as o,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"any"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"CheckIssue",href:"../CheckIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"CheckIssue",href:"../CheckIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"check"}},reference:{type:{type:"custom",modifier:"typeof",name:"check",href:"../check/"}},expects:{type:"null"},requirement:{type:{type:"function",params:[{name:"input",type:{type:"custom",name:"TInput"}}],return:"boolean"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"CheckAction",id:"checkaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],k={title:"CheckAction",meta:[{name:"description",content:"Check action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","EltonLobo07"]}},g={title:"CheckAction",description:"Check action interface.",contributors:["fabian-hiller","EltonLobo07"]};function d(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...c.components};return e(s,{children:[e(n.h1,{id:"checkaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#checkaction",children:e(n.span,{class:"icon icon-link"})}),"CheckAction"]}),`
`,e(n.p,{children:"Check action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"CheckAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(c={})=>{const n=r(o,{children:r(d,c,3,null)},3,"gpw-_6lc");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{x as default,g as frontmatter,k as head,y as headings};
