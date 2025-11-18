import{a as r,s as c,t as e,q as s}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"HexColorIssue",href:"../HexColorIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},BaseValidation:{modifier:"extends",type:{type:"custom",name:"BaseValidation",href:"../BaseValidation/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TInput"},{type:"custom",name:"HexColorIssue",href:"../HexColorIssue/",generics:[{type:"custom",name:"TInput"}]}]}},type:{type:{type:"string",value:"hex_color"}},reference:{type:{type:"custom",modifier:"typeof",name:"hexColor",href:"../hexColor/"}},expects:{type:"null"},requirement:{type:{type:"custom",name:"RegExp"}},message:{type:{type:"custom",name:"TMessage"}}},x=[{text:"HexColorAction",id:"hexcoloraction",level:1},{text:"Generics",id:"generics",level:2},{text:"Definition",id:"definition",level:2}],y={title:"HexColorAction",meta:[{name:"description",content:"Hex color action interface."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller"]}},g={title:"HexColorAction",description:"Hex color action interface.",contributors:["fabian-hiller"]};function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",span:"span",ul:"ul",...l(),...o.components};return e(s,{children:[e(n.h1,{id:"hexcoloraction",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#hexcoloraction",children:e(n.span,{class:"icon icon-link"})}),"HexColorAction"]}),`
`,e(n.p,{children:"Hex color action interface."}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"definition",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#definition",children:e(n.span,{class:"icon icon-link"})}),"Definition"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"HexColorAction"})," ",e(i,{...t.BaseValidation}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"type"})," ",e(i,{...t.type})]}),`
`,e(n.li,{children:[e(n.code,{children:"reference"})," ",e(i,{...t.reference})]}),`
`,e(n.li,{children:[e(n.code,{children:"expects"})," ",e(i,{...t.expects})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(i,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`]}),`
`]})]})}const C=(o={})=>{const n=r(c,{children:r(a,o,3,null)},3,"vA5_B2fk");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{C as default,g as frontmatter,y as head,x as headings};
