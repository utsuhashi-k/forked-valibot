import{a as c,s,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"Ipv4Issue",href:"../Ipv4Issue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"Ipv4Issue",href:"../Ipv4Issue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"ipv4"}},reference:{type:{type:"custom",modifier:"typeof",name:"ipv4",href:"../ipv4/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"Ipv4Action",id:"ipv4action",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"Ipv4Action",meta:[{name:"description",content:"IPv4 action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},v={title:"Ipv4Action",description:"IPv4 action interface.",contributors:["fabian-hiller"]};function p(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(o,{children:[e(n.h1,{id:"ipv4action",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#ipv4action",children:e(n.span,{class:"icon icon-link"})}),"Ipv4Action"]}),`
`,e(n.p,{children:"IPv4 action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Ipv4Action"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const g=(r={})=>{const n=c(s,{children:c(p,r,3,null)},3,"nQpjz16P");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{g as default,v as frontmatter,I as head,y as headings};
