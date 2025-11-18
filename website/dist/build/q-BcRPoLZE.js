import{a as r,s as c,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{modifier:"readonly",type:"array",item:"unknown"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"SomeItemIssue",href:"../SomeItemIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"SomeItemIssue",href:"../SomeItemIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"some_item"}},reference:{type:{type:"custom",modifier:"typeof",name:"someItem",href:"../someItem/"}},expects:{type:"null"},requirement:{type:{type:"function",params:[{name:"item",type:{type:"custom",name:"TInput",indexes:["number"]}},{name:"index",type:"number"},{name:"array",type:{type:"custom",name:"TInput"}}],return:"boolean"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"SomeItemAction",id:"someitemaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"SomeItemAction",meta:[{name:"description",content:"Some action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"SomeItemAction",description:"Some action interface.",contributors:["fabian-hiller"]};function m(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...o.components};return e(s,{children:[e(n.h1,{id:"someitemaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#someitemaction",children:e(n.span,{class:"icon icon-link"})}),"SomeItemAction"]}),`
`,e(n.p,{children:"Some action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"SomeItemAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(o={})=>{const n=r(c,{children:r(m,o,3,null)},3,"qkX8qq6j");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{x as default,g as frontmatter,I as head,y as headings};
