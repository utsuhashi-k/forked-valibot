import{a as s,s as a,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as n}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TRequirement:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"StartsWithIssue",href:"../StartsWithIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"StartsWithIssue",href:"../StartsWithIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"starts_with"}},reference:{type:{type:"custom",modifier:"typeof",name:"startsWith",href:"../startsWith/"}},expects:{type:{type:"template",parts:[{type:"string",value:'"'},{type:"custom",name:"TRequirement"},{type:"string",value:'"'}]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"StartsWithAction",id:"startswithaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"StartsWithAction",meta:[{name:"description",content:"Starts with action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},T={title:"StartsWithAction",description:"Starts with action interface.",contributors:["fabian-hiller"]};function d(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...r.components};return e(c,{children:[e(t.h1,{id:"startswithaction",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#startswithaction",children:e(t.span,{class:"icon icon-link"})}),"StartsWithAction"]}),`
`,e(t.p,{children:"Starts with action interface."}),`
`,e(t.h2,{id:"generics",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(t.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:[e(t.code,{children:"TInput"})," ",e(n,{...i.TInput})]}),`
`,e(t.li,{children:[e(t.code,{children:"TRequirement"})," ",e(n,{...i.TRequirement})]}),`
`,e(t.li,{children:[e(t.code,{children:"TMessage"})," ",e(n,{...i.TMessage})]}),`
`]}),`
`,e(t.h2,{id:"definition",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(t.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:[e(t.code,{children:"StartsWithAction"})," ",e(n,{...i.BaseValidation}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:[e(t.code,{children:"type"})," ",e(n,{...i.type})]}),`
`,e(t.li,{children:[e(t.code,{children:"reference"})," ",e(n,{...i.reference})]}),`
`,e(t.li,{children:[e(t.code,{children:"expects"})," ",e(n,{...i.expects})]}),`
`,e(t.li,{children:[e(t.code,{children:"requirement"})," ",e(n,{...i.requirement})]}),`
`,e(t.li,{children:[e(t.code,{children:"message"})," ",e(n,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(r={})=>{const t=s(a,{children:s(d,r,3,null)},3,"-eaF3xrt");return typeof MDXLayout=="function"?e(MDXLayout,{children:t}):t};export{x as default,T as frontmatter,g as head,y as headings};
