import{a as c,s as a,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as s}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:{type:"custom",name:"ValueInput",href:"../ValueInput/"}},TRequirement:{modifier:"extends",type:{type:"custom",name:"TInput"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MinValueIssue",href:"../MinValueAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"MinValueIssue",href:"../MinValueAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]}},type:{type:{type:"string",value:"min_value"}},reference:{type:{type:"custom",modifier:"typeof",name:"minValue",href:"../minValue/"}},expects:{type:{type:"template",parts:[{type:"string",value:">="},"string"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"MinValueAction",id:"minvalueaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],M={title:"MinValueAction",meta:[{name:"description",content:"Min value action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"MinValueAction",description:"Min value action interface.",contributors:["fabian-hiller"]};function l(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...s(),...r.components};return e(o,{children:[e(n.h1,{id:"minvalueaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#minvalueaction",children:e(n.span,{class:"icon icon-link"})}),"MinValueAction"]}),`
`,e(n.p,{children:"Min value action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(i,{...t.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"MinValueAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const T=(r={})=>{const n=c(a,{children:c(l,r,3,null)},3,"vf3pGgYZ");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,g as frontmatter,M as head,y as headings};
