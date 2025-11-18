import{a as c,s as r,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import{a as t}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TLocales:{modifier:"extends",type:{type:"custom",name:"Intl.LocalesArgument"}},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MinWordsIssue",href:"../MinWordsIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},locales:{type:{type:"custom",name:"TLocales"}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"MinWordsAction",href:"../MinWordsAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TLocales"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},y=[{text:"minWords",id:"minwords",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Min words schema",id:"min-words-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],x={title:"minWords",meta:[{name:"description",content:"Creates a min words validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/minWords/minWords.ts",contributors:["fabian-hiller"]}},T={title:"minWords",description:"Creates a min words validation action.",source:"/actions/minWords/minWords.ts",contributors:["fabian-hiller"]};function d(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...a.components};return e(o,{children:[e(n.h1,{id:"minwords",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#minwords",children:e(n.span,{class:"icon icon-link"})}),"minWords"]}),`
`,e(n.p,{children:["Creates a min ",e(n.a,{href:"https://en.wikipedia.org/wiki/Word",rel:"noreferrer",target:"_blank",children:"words"})," validation action."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"minWords"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TLocales"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TRequirement"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),`
  locales`,e(n.span,{class:"token punctuation",children:","}),`
  requirement`,e(n.span,{class:"token punctuation",children:","}),`
  message
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(s,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TLocales"})," ",e(s,{...i.TLocales})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(s,{...i.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(s,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"locales"})," ",e(s,{...i.locales})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(s,{...i.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(s,{...i.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"minWords"})," you can validate the words of a string based on the specified ",e(n.code,{children:"locales"}),". If the input does not match the ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(s,{...i.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"minWords"})," can be used."]}),`
`,e(n.h3,{id:"min-words-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#min-words-schema",children:e(n.span,{class:"icon icon-link"})}),"Min words schema"]}),`
`,e(n.p,{children:"Schema to validate a string with a minimum of 50 words."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"MinWordsSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"minWords"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'en'"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token number",children:"50"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'The string must contain at least 50 words.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"minWords"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(t,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(t,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(t,{items:["isOfKind","isOfType"]})]})}const b=(a={})=>{const n=c(r,{children:c(d,a,3,null)},3,"9VYVvpWx");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{b as default,T as frontmatter,x as head,y as headings};
