import{a as r,s as a,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as c}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"any"},TOutput:{modifier:"extends",type:"any"},TIssue:{modifier:"extends",type:{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}},kind:{type:{type:"string",value:"transformation"}},type:{type:"string"},reference:{type:{type:"function",params:[{name:"args",spread:!0,type:{type:"array",item:"any"}}],return:{type:"custom",name:"BaseTransformation",generics:["any","any",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}}},async:{type:{type:"boolean",value:!1}},"~run":{type:{type:"function",params:[{name:"dataset",type:{type:"custom",name:"SuccessDataset",href:"../SuccessDataset/",generics:[{type:"custom",name:"TInput"}]}},{name:"config",type:{type:"custom",name:"Config",href:"../Config/",generics:[{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}}],return:{type:"custom",name:"OutputDataset",href:"../OutputDataset/",generics:[{type:"custom",name:"TOutput"},{type:"union",options:[{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]},{type:"custom",name:"TIssue"}]}]}}},"~types":{type:{type:"union",options:[{type:"object",entries:[{key:"input",value:{type:"custom",name:"TInput"}},{key:"output",value:{type:"custom",name:"TOutput"}},{key:"issue",value:{type:"custom",name:"TIssue"}}]},"undefined"]}}},f=[{text:"BaseTransformation",id:"basetransformation",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],T={title:"BaseTransformation",meta:[{name:"description",content:"Base transformation interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"BaseTransformation",description:"Base transformation interface.",contributors:["fabian-hiller"]};function u(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...c(),...s.components};return e(o,{children:[e(n.h1,{id:"basetransformation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#basetransformation",children:e(n.span,{class:"icon icon-link"})}),"BaseTransformation"]}),`
`,e(n.p,{children:"Base transformation interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TOutput"})," ",e(t,{...i.TOutput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TIssue"})," ",e(t,{...i.TIssue})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"BaseTransformation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"kind"})," ",e(t,{...i.kind})]}),`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"async"})," ",e(t,{...i.async})]}),`
`,e(n.li,{children:[e(n.code,{children:"~run"})," ",e(t,{...i["~run"]})]}),`
`,e(n.li,{children:[e(n.code,{children:"~types"})," ",e(t,{...i["~types"]})]}),`
`]}),`
`]}),`
`]})]})}const I=(s={})=>{const n=r(a,{children:r(u,s,3,null)},3,"KH17M_uT");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{I as default,g as frontmatter,T as head,f as headings};
