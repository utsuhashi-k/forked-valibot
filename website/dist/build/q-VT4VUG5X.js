import{a as r,s,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"ArrayInput",href:"../ArrayInput/"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"CheckItemsIssue",href:"../CheckItemsIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"CheckItemsIssue",href:"../CheckItemsIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"check_items"}},reference:{type:{type:"custom",modifier:"typeof",name:"checkItems",href:"../checkItems/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"ArrayRequirement",href:"../ArrayRequirement/",generics:[{type:"custom",name:"TInput"}]}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"CheckItemsAction",id:"checkitemsaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"CheckItemsAction",meta:[{name:"description",content:"Check items action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},k={title:"CheckItemsAction",description:"Check items action interface.",contributors:["fabian-hiller"]};function d(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...c.components};return e(o,{children:[e(n.h1,{id:"checkitemsaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#checkitemsaction",children:e(n.span,{class:"icon icon-link"})}),"CheckItemsAction"]}),`
`,e(n.p,{children:"Check items action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"CheckItemsAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const g=(c={})=>{const n=r(s,{children:r(d,c,3,null)},3,"9MhWwMnI");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{g as default,k as frontmatter,I as head,y as headings};
