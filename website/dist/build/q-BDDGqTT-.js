import{a as c,s,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"RegexIssue",href:"../RegexIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"RegexIssue",href:"../RegexIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"regex"}},reference:{type:{type:"custom",modifier:"typeof",name:"regex",href:"../regex/"}},expects:{type:"string"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},f=[{text:"RegexAction",id:"regexaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],x={title:"RegexAction",meta:[{name:"description",content:"Regex action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},y={title:"RegexAction",description:"Regex action interface.",contributors:["fabian-hiller"]};function d(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...r.components};return e(o,{children:[e(n.h1,{id:"regexaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#regexaction",children:e(n.span,{class:"icon icon-link"})}),"RegexAction"]}),`
`,e(n.p,{children:"Regex action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"RegexAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const R=(r={})=>{const n=c(s,{children:c(d,r,3,null)},3,"ys5yngfe");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{R as default,y as frontmatter,x as head,f as headings};
