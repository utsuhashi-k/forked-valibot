import{a as c,s as l,t as e,q as d}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{L as r}from"./q-BuauhHiJ.js";import{a}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const s={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"DigitsIssue",href:"../DigitsIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"DigitsAction",href:"../DigitsAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},b=[{text:"digits",id:"digits",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Digits schema",id:"digits-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],v={title:"digits",meta:[{name:"description",content:"Creates a digits validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/digits/digits.ts",contributors:["fabian-hiller","andrew-3kb"]}},T={title:"digits",description:"Creates a digits validation action.",source:"/actions/digits/digits.ts",contributors:["fabian-hiller","andrew-3kb"]};function h(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...t.components};return e(d,{children:[e(n.h1,{id:"digits",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#digits",children:e(n.span,{class:"icon icon-link"})}),"digits"]}),`
`,e(n.p,{children:["Creates a ",e(n.a,{href:"https://en.wikipedia.org/wiki/Numerical_digit",rel:"noreferrer",target:"_blank",children:"digits"})," validation action."]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["The difference between ",e(n.code,{children:"digits"})," and ",e(r,{href:"../decimal/",children:e(n.code,{children:"decimal"})})," is that ",e(n.code,{children:"digits"})," accepts only the digits 0-9, while ",e(r,{href:"../decimal/",children:e(n.code,{children:"decimal"})})," accepts floating point numbers and negative numbers."]}),`
`]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"digits"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(i,{...s.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...s.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"digits"})," you can validate the formatting of a string. If the input does not soley consist of numerical digits, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(i,{...s.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"digits"})," can be used."]}),`
`,e(n.h3,{id:"digits-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#digits-schema",children:e(n.span,{class:"icon icon-link"})}),"Digits schema"]}),`
`,e(n.p,{children:"Schema to validate a digits."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"DigitsSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"digits"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'The string contains something other than digits.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"digits"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(a,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(a,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(a,{items:["isOfKind","isOfType"]})]})}const M=(t={})=>{const n=c(l,{children:c(h,t,3,null)},3,"YuPD5CQa");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{M as default,T as frontmatter,v as head,b as headings};
