import{a,s,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as r}from"./q-C3XvAjir.js";const t={TItem:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"ArrayIssue",href:"../ArrayIssue/"}]},"undefined"]}},BaseSchema:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:[{type:"array",item:{type:"custom",name:"InferInput",href:"../InferInput/",generics:[{type:"custom",name:"TItem"}]}},{type:"array",item:{type:"custom",name:"InferOutput",href:"../InferOutput/",generics:[{type:"custom",name:"TItem"}]}},{type:"union",options:[{type:"custom",name:"ArrayIssue",href:"../ArrayIssue/"},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TItem"}]}]}]}},type:{type:{type:"string",value:"array"}},reference:{type:{type:"custom",modifier:"typeof",name:"array",href:"../array/"}},expects:{type:{type:"string",value:"Array"}},item:{type:{type:"custom",name:"TItem"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"ArraySchema",id:"arrayschema",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"ArraySchema",meta:[{name:"description",content:"Array schema interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","kazizi55"]}},g={title:"ArraySchema",description:"Array schema interface.",contributors:["fabian-hiller","kazizi55"]};function m(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...i.components};return e(c,{children:[e(n.h1,{id:"arrayschema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#arrayschema",children:e(n.span,{class:"icon icon-link"})}),"ArraySchema"]}),`
`,e(n.p,{children:"Array schema interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TItem"})," ",e(r,{...t.TItem})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(r,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"ArraySchema"})," ",e(r,{...t.BaseSchema}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(r,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(r,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(r,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"item"})," ",e(r,{...t.item})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(r,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const x=(i={})=>{const n=a(s,{children:a(m,i,3,null)},3,"tbfLZPti");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{x as default,g as frontmatter,I as head,f as headings};
