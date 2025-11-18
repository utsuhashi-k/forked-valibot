import{a as o,s as r,t as e,q as c}from"./q-dgQLQ9M1.js";import{u as a}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TConfig:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ParseJsonConfig",href:"../ParseJsonConfig/"},"undefined"]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"ParseJsonIssue",href:"../ParseJsonIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseTransformation:{modifier:"extends",type:{type:"custom",name:"BaseTransformation",href:"../BaseTransformation/",generics:[{type:"custom",name:"TInput"},"unknown",{type:"custom",name:"ParseJsonIssue",href:"../ParseJsonIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"parse_json"}},reference:{type:{type:"custom",modifier:"typeof",name:"parseJson",href:"../parseJson/"}},config:{type:{type:"custom",name:"TConfig"}},message:{type:{type:"custom",name:"TMessage"}}},y=[{text:"ParseJsonAction",id:"parsejsonaction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],g={title:"ParseJsonAction",meta:[{name:"description",content:"JSON parse action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["EskiMojo14"]}},T={title:"ParseJsonAction",description:"JSON parse action interface.",contributors:["EskiMojo14"]};function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...a(),...s.components};return e(c,{children:[e(n.h1,{id:"parsejsonaction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parsejsonaction",children:e(n.span,{class:"icon icon-link"})}),"ParseJsonAction"]}),`
`,e(n.p,{children:"JSON parse action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TConfig"})," ",e(i,{...t.TConfig})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"ParseJsonAction"})," ",e(i,{...t.BaseTransformation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"config"})," ",e(i,{...t.config})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const J=(s={})=>{const n=o(r,{children:o(d,s,3,null)},3,"M343QTo9");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{J as default,T as frontmatter,g as head,y as headings};
