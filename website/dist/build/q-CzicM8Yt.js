import{a as c,s as o,t as n,q as r}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import{L as d}from"./q-BuauhHiJ.js";import{a as t}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"NanoIdIssue",href:"../NanoIdIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"NanoIdAction",href:"../NanoIdAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},b=[{text:"nanoid",id:"nanoid",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Nano ID schema",id:"nano-id-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],I={title:"nanoid",meta:[{name:"description",content:"Creates a Nano ID validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/nanoid/nanoid.ts",contributors:["jasperteo","fabian-hiller"]}},v={title:"nanoid",description:"Creates a Nano ID validation action.",source:"/actions/nanoid/nanoid.ts",contributors:["jasperteo","fabian-hiller"]};function h(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...s.components};return n(r,{children:[n(e.h1,{id:"nanoid",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#nanoid",children:n(e.span,{class:"icon icon-link"})}),"nanoid"]}),`
`,n(e.p,{children:["Creates a ",n(e.a,{href:"https://github.com/ai/nanoid",rel:"noreferrer",target:"_blank",children:"Nano ID"})," validation action."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"nanoid"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"message",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"generics",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:n(e.span,{class:"icon icon-link"})}),"Generics"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"TInput"})," ",n(a,{...i.TInput})]}),`
`,n(e.li,{children:[n(e.code,{children:"TMessage"})," ",n(a,{...i.TMessage})]}),`
`]}),`
`,n(e.h2,{id:"parameters",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:n(e.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"message"})," ",n(a,{...i.message})]}),`
`]}),`
`,n(e.h3,{id:"explanation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:n(e.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,n(e.p,{children:["With ",n(e.code,{children:"nanoid"})," you can validate the formatting of a string. If the input is not an Nano ID, you can use ",n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(a,{...i.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"nanoid"})," can be used."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["Since Nano IDs are not limited to a fixed length, it is recommended to combine ",n(e.code,{children:"nanoid"})," with ",n(d,{href:"../length/",children:n(e.code,{children:"length"})})," to ensure the correct length."]}),`
`]}),`
`,n(e.h3,{id:"nano-id-schema",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#nano-id-schema",children:n(e.span,{class:"icon icon-link"})}),"Nano ID schema"]}),`
`,n(e.p,{children:"Schema to validate a Nano ID."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"NanoIdSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"nanoid"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'The Nano ID is badly formatted.'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"length"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token number",children:"21"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token string",children:"'The Nano ID must be 21 characters long.'"}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"nanoid"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(t,{items:["any","string","unknown"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(t,{items:["pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(t,{items:["isOfKind","isOfType"]})]})}const T=(s={})=>{const e=c(o,{children:c(h,s,3,null)},3,"Yur1yTAj");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{T as default,v as frontmatter,I as head,b as headings};
