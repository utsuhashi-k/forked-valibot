import{a as o,s as r,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IsoWeekIssue",href:"../IsoWeekIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"IsoWeekIssue",href:"../IsoWeekIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"iso_week"}},reference:{type:{type:"custom",modifier:"typeof",name:"isoWeek",href:"../isoWeek/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"IsoWeekAction",id:"isoweekaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],I={title:"IsoWeekAction",meta:[{name:"description",content:"ISO week action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},k={title:"IsoWeekAction",description:"ISO week action interface.",contributors:["fabian-hiller"]};function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...s.components};return e(c,{children:[e(n.h1,{id:"isoweekaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#isoweekaction",children:e(n.span,{class:"icon icon-link"})}),"IsoWeekAction"]}),`
`,e(n.p,{children:"ISO week action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"IsoWeekAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const g=(s={})=>{const n=o(r,{children:o(d,s,3,null)},3,"utIGW2HG");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{g as default,k as frontmatter,I as head,y as headings};
