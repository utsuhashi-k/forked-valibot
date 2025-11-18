import{a as o,s as c,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as s}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"union",options:["number","bigint"]}},TRequirement:{modifier:"extends",type:{type:"union",options:["number","bigint"]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MultipleOfIssue",href:"../MultipleOfAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MultipleOfIssue",href:"../MultipleOfAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"multiple_of"}},reference:{type:{type:"custom",modifier:"typeof",name:"multipleOf",href:"../multipleOf/"}},expects:{type:{type:"template",parts:[{type:"string",value:"%"},{type:"custom",name:"TRequirement"}]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"MultipleOfAction",id:"multipleofaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],M={title:"MultipleOfAction",meta:[{name:"description",content:"Multiple of action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"MultipleOfAction",description:"Multiple of action interface.",contributors:["fabian-hiller"]};function a(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...s(),...r.components};return e(l,{children:[e(n.h1,{id:"multipleofaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#multipleofaction",children:e(n.span,{class:"icon icon-link"})}),"MultipleOfAction"]}),`
`,e(n.p,{children:"Multiple of action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(t,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MultipleOfAction"})," ",e(t,{...i.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(t,{...i.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(t,{...i.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(t,{...i.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...i.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(r={})=>{const n=o(c,{children:o(a,r,3,null)},3,"U4X2ig3V");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,g as frontmatter,M as head,y as headings};
