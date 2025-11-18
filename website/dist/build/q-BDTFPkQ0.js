import{a as r,s as a,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as s}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"RfcEmailIssue",href:"../RfcEmailIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"RfcEmailIssue",href:"../RfcEmailIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"rfc_email"}},reference:{type:{type:"custom",modifier:"typeof",name:"rfcEmail",href:"../rfcEmail/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"RfcEmailAction",id:"rfcemailaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"RfcEmailAction",meta:[{name:"description",content:"RFC email action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},x={title:"RfcEmailAction",description:"RFC email action interface.",contributors:["fabian-hiller"]};function l(c){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...s(),...c.components};return e(o,{children:[e(n.h1,{id:"rfcemailaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#rfcemailaction",children:e(n.span,{class:"icon icon-link"})}),"RfcEmailAction"]}),`
`,e(n.p,{children:"RFC email action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"EmailAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const E=(c={})=>{const n=r(a,{children:r(l,c,3,null)},3,"i_7I3oX/");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{E as default,x as frontmatter,g as head,y as headings};
