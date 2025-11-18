import{a as s,s as c,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:{type:"custom",name:"EntriesInput",href:"../EntriesInput/"}},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MinEntriesIssue",href:"../MinEntriesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MinEntriesIssue",href:"../MinEntriesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"min_entries"}},reference:{type:{type:"custom",modifier:"typeof",name:"minEntries",href:"../minEntries/"}},expects:{type:{type:"template",parts:[{type:"string",value:">="},{type:"custom",name:"TRequirement"}]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"MinEntriesAction",id:"minentriesaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],M={title:"MinEntriesAction",meta:[{name:"description",content:"Min entries action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["EltonLobo07","fabian-hiller","muningis"]}},g={title:"MinEntriesAction",description:"Min entries action interface.",contributors:["EltonLobo07","fabian-hiller","muningis"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(o,{children:[e(n.h1,{id:"minentriesaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#minentriesaction",children:e(n.span,{class:"icon icon-link"})}),"MinEntriesAction"]}),`
`,e(n.p,{children:"Min entries action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(i,{...t.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MinEntriesAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(r={})=>{const n=s(c,{children:s(d,r,3,null)},3,"lK2RjBZe");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,g as frontmatter,M as head,y as headings};
