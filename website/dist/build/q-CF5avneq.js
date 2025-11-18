import{a as r,s as c,t as e,q as a}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TValue:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TMessage:{type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"SetIssue",href:"../SetIssue/"}]},"undefined"]}},BaseSchema:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:[{type:"custom",name:"InferSetInput",href:"../InferSetInput/",generics:[{type:"custom",name:"TValue"}]},{type:"custom",name:"InferSetOutput",href:"../InferSetOutput/",generics:[{type:"custom",name:"TValue"}]},{type:"union",options:[{type:"custom",name:"SetIssue",href:"../SetIssue/"},{type:"custom",name:"InferIssue",href:"../InferIssue/",generics:[{type:"custom",name:"TValue"}]}]}]}},type:{type:{type:"string",value:"set"}},reference:{type:{type:"custom",modifier:"typeof",name:"set",href:"../set/"}},expects:{type:{type:"string",value:"Set"}},value:{type:{type:"custom",name:"TValue"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"SetSchema",id:"setschema",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],S={title:"SetSchema",meta:[{name:"description",content:"Set schema interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"SetSchema",description:"Set schema interface.",contributors:["fabian-hiller"]};function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...o(),...s.components};return e(a,{children:[e(n.h1,{id:"setschema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#setschema",children:e(n.span,{class:"icon icon-link"})}),"SetSchema"]}),`
`,e(n.p,{children:"Set schema interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TValue"})," ",e(t,{...i.TValue})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"SetSchema"})," ",e(t,{...i.BaseSchema}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"value"})," ",e(t,{...i.value})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const I=(s={})=>{const n=r(c,{children:r(l,s,3,null)},3,"-IJ4GuTk");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{I as default,g as frontmatter,S as head,y as headings};
