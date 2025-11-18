import{a as c,s as o,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:{type:"custom",name:"Blob"}},TRequirement:{modifier:"extends",type:{type:"array",item:"string"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MimeTypeIssue",href:"../MimeTypeAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MimeTypeIssue",href:"../MimeTypeIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"mime_type"}},reference:{type:{type:"custom",modifier:"typeof",name:"mimeType",href:"../mimeType/"}},expects:{type:"string"},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"MimeTypeAction",id:"mimetypeaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],T={title:"MimeTypeAction",meta:[{name:"description",content:"MIME type action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},M={title:"MimeTypeAction",description:"MIME type action interface.",contributors:["fabian-hiller"]};function p(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(s,{children:[e(n.h1,{id:"mimetypeaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#mimetypeaction",children:e(n.span,{class:"icon icon-link"})}),"MimeTypeAction"]}),`
`,e(n.p,{children:"MIME type action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(i,{...t.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MimeTypeAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const g=(r={})=>{const n=c(o,{children:c(p,r,3,null)},3,"lmw2aGps");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{g as default,M as frontmatter,T as head,f as headings};
