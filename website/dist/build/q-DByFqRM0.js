import{a as o,s,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TLocales:{modifier:"extends",type:{type:"custom",name:"Intl.LocalesArgument"}},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MaxWordsIssue",href:"../MaxWordsIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MaxWordsIssue",href:"../MaxWordsIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"max_words"}},reference:{type:{type:"custom",modifier:"typeof",name:"maxWords",href:"../maxWords/"}},expects:{type:{type:"template",parts:[{type:"string",value:"<="},{type:"custom",name:"TRequirement"}]}},locales:{type:{type:"custom",name:"TLocales"}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"MaxWordsAction",id:"maxwordsaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],x={title:"MaxWordsAction",meta:[{name:"description",content:"Max words action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},M={title:"MaxWordsAction",description:"Max words action interface.",contributors:["fabian-hiller"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(c,{children:[e(n.h1,{id:"maxwordsaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maxwordsaction",children:e(n.span,{class:"icon icon-link"})}),"MaxWordsAction"]}),`
`,e(n.p,{children:"Max words action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TLocales"})," ",e(t,{...i.TLocales})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MaxWordsAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"locales"})," ",e(t,{...i.locales})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(r={})=>{const n=o(s,{children:o(d,r,3,null)},3,"cFFKrY21");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,M as frontmatter,x as head,f as headings};
