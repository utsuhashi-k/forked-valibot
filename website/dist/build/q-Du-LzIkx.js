import{a as c,s as r,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import{a as i}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const a={TInput:{modifier:"extends",type:"string"},TLocales:{modifier:"extends",type:{type:"custom",name:"Intl.LocalesArgument"}},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MaxWordsIssue",href:"../MaxWordsIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},locales:{type:{type:"custom",name:"TLocales"}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"MaxWordsAction",href:"../MaxWordsAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TLocales"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},g=[{text:"maxWords",id:"maxwords",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Max words schema",id:"max-words-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],y={title:"maxWords",meta:[{name:"description",content:"Creates a max words validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/maxWords/maxWords.ts",contributors:["fabian-hiller"]}},T={title:"maxWords",description:"Creates a max words validation action.",source:"/actions/maxWords/maxWords.ts",contributors:["fabian-hiller"]};function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...t.components};return e(o,{children:[e(n.h1,{id:"maxwords",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maxwords",children:e(n.span,{class:"icon icon-link"})}),"maxWords"]}),`
`,e(n.p,{children:["Creates a max ",e(n.a,{href:"https://en.wikipedia.org/wiki/Word",rel:"noreferrer",target:"_blank",children:"words"})," validation action."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"maxWords"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TLocales"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TRequirement"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),`
  locales`,e(n.span,{class:"token punctuation",children:","}),`
  requirement`,e(n.span,{class:"token punctuation",children:","}),`
  message
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(s,{...a.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TLocales"})," ",e(s,{...a.TLocales})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(s,{...a.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(s,{...a.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"locales"})," ",e(s,{...a.locales})]}),`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(s,{...a.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(s,{...a.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"maxWords"})," you can validate the words of a string based on the specified ",e(n.code,{children:"locales"}),". If the input does not match the ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(s,{...a.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"maxWords"})," can be used."]}),`
`,e(n.h3,{id:"max-words-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#max-words-schema",children:e(n.span,{class:"icon icon-link"})}),"Max words schema"]}),`
`,e(n.p,{children:"Schema to validate a string with a maximum of 300 words."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"MaxWordsSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"maxWords"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'en'"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token number",children:"300"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'The string must not exceed 300 words.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"maxWords"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(i,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(i,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(i,{items:["isOfKind","isOfType"]})]})}const b=(t={})=>{const n=c(r,{children:c(d,t,3,null)},3,"msM72QCc");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{b as default,T as frontmatter,y as head,g as headings};
