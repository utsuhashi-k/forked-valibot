import{a as r,s,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as d}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"ContentInput",href:"../ContentInput/"}},TRequirement:{modifier:"extends",type:{type:"custom",name:"ContentRequirement",href:"../ContentRequirement/",generics:[{type:"custom",name:"TInput"}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"ExcludesIssue",href:"../ExcludesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"ExcludesIssue",href:"../ExcludesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"excludes"}},reference:{type:{type:"custom",modifier:"typeof",name:"excludes",href:"../excludes/"}},expects:{type:"string"},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"ExcludesAction",id:"excludesaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],x={title:"ExcludesAction",meta:[{name:"description",content:"Excludes action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"ExcludesAction",description:"Excludes action interface.",contributors:["fabian-hiller"]};function l(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...d(),...c.components};return e(o,{children:[e(n.h1,{id:"excludesaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#excludesaction",children:e(n.span,{class:"icon icon-link"})}),"ExcludesAction"]}),`
`,e(n.p,{children:"Excludes action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"ExcludesAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"referece"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(c={})=>{const n=r(s,{children:r(l,c,3,null)},3,"GzH1Z_KY");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,g as frontmatter,x as head,y as headings};
