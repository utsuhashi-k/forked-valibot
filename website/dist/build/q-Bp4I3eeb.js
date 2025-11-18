import{a,s as r,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"PartialInput",href:"../PartialInput/"}},TPaths:{modifier:"extends",type:{type:"custom",name:"Paths",href:"../Paths/"}},TSelection:{modifier:"extends",type:{type:"custom",name:"DeepPickN",href:"../DeepPickN/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TPaths"}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"PartialCheckIssue",href:"../PartialCheckIssue/",generics:[{type:"custom",name:"TSelection"}]}]},"undefined"]}},BaseValidationAsync:{modifier:"extends",type:{type:"custom",name:"BaseValidationAsync",href:"../BaseValidationAsync/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"PartialCheckIssue",href:"../PartialCheckIssue/",generics:[{type:"custom",name:"TSelection"}]}]}},type:{type:{type:"string",value:"partial_check"}},reference:{type:{type:"custom",modifier:"typeof",name:"partialCheckAsync",href:"../partialCheckAsync/"}},expects:{type:"null"},paths:{type:{type:"custom",name:"TPaths"}},requirement:{type:{type:"function",params:[{name:"input",type:{type:"custom",name:"TSelection"}}],return:{type:"custom",name:"MaybePromise",href:"../MaybePromise/",generics:["boolean"]}}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"PartialCheckActionAsync",id:"partialcheckactionasync",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],P={title:"PartialCheckActionAsync",meta:[{name:"description",content:"Partial check action async interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","EltonLobo07"]}},k={title:"PartialCheckActionAsync",description:"Partial check action async interface.",contributors:["fabian-hiller","EltonLobo07"]};function l(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...c.components};return e(s,{children:[e(n.h1,{id:"partialcheckactionasync",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#partialcheckactionasync",children:e(n.span,{class:"icon icon-link"})}),"PartialCheckActionAsync"]}),`
`,e(n.p,{children:"Partial check action async interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TPaths"})," ",e(t,{...i.TPaths})]}),`
`,e(n.li,{children:[e(n.code,{children:"TSelection"})," ",e(t,{...i.TSelection})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"PartialCheckActionAsync"})," ",e(t,{...i.BaseValidationAsync}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"paths"})," ",e(t,{...i.paths})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(c={})=>{const n=a(r,{children:a(l,c,3,null)},3,"DMIWqDhC");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,k as frontmatter,P as head,f as headings};
