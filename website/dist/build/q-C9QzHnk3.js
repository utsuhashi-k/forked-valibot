import{a as c,s,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"SlugIssue",href:"../SlugIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"SlugIssue",href:"../SlugIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"slug"}},reference:{type:{type:"custom",modifier:"typeof",name:"slug",href:"../slug/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},g=[{text:"SlugAction",id:"slugaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],y={title:"SlugAction",meta:[{name:"description",content:"Slug action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},x={title:"SlugAction",description:"Slug action interface.",contributors:["fabian-hiller"]};function a(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...l(),...r.components};return e(o,{children:[e(n.h1,{id:"slugaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#slugaction",children:e(n.span,{class:"icon icon-link"})}),"SlugAction"]}),`
`,e(n.p,{children:"Slug action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"SlugAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const S=(r={})=>{const n=c(s,{children:c(a,r,3,null)},3,"-CJv2f3O");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{S as default,x as frontmatter,y as head,g as headings};
