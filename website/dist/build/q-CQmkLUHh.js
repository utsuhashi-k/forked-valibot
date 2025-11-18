import{a,s as r,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"any"},TOutput:{modifier:"extends",type:"any"},TIssue:{modifier:"extends",type:{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}},kind:{type:{type:"string",value:"validation"}},type:{type:"string"},expects:{type:{type:"union",options:["string","null"]}},reference:{type:{type:"function",params:[{name:"args",spread:!0,type:{type:"array",item:"any"}}],return:{type:"custom",name:"BaseValidation",generics:["any","any",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}}},async:{type:{type:"boolean",value:!1}},"~run":{type:{type:"function",params:[{name:"dataset",type:{type:"custom",name:"OutputDataset",href:"../OutputDataset/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},{name:"config",type:{type:"custom",name:"Config",href:"../Config/",generics:[{type:"custom",name:"TIssue"}]}}],return:{type:"custom",name:"OutputDataset",href:"../OutputDataset/",generics:[{type:"custom",name:"TOutput"},{type:"union",options:[{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]},{type:"custom",name:"TIssue"}]}]}}},"~types":{type:{type:"union",options:[{type:"object",entries:[{key:"input",value:{type:"custom",name:"TInput"}},{key:"output",value:{type:"custom",name:"TOutput"}},{key:"issue",value:{type:"custom",name:"TIssue"}}]},"undefined"]}}},f=[{text:"BaseValidation",id:"basevalidation",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"BaseValidation",meta:[{name:"description",content:"Base action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},I={title:"BaseValidation",description:"Base action interface.",contributors:["fabian-hiller"]};function u(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...s.components};return e(c,{children:[e(n.h1,{id:"basevalidation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#basevalidation",children:e(n.span,{class:"icon icon-link"})}),"BaseValidation"]}),`
`,e(n.p,{children:"Base action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TOutput"})," ",e(t,{...i.TOutput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TIssue"})," ",e(t,{...i.TIssue})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"BaseValidation"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"kind"})," ",e(t,{...i.kind})]}),`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"async"})," ",e(t,{...i.async})]}),`
`,e(n.li,{children:[e(n.code,{children:"~run"})," ",e(t,{...i["~run"]})]}),`
`,e(n.li,{children:[e(n.code,{children:"~types"})," ",e(t,{...i["~types"]})]}),`
`]}),`
`]}),`
`]})]})}const B=(s={})=>{const n=a(r,{children:a(u,s,3,null)},3,"8L_Tylda");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{B as default,I as frontmatter,g as head,f as headings};
