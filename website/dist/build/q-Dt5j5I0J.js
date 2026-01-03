import{a as c,s as r,t as n,q as l}from"./q-BMflDIby.js";import{u as o}from"./q-BvIa5wyO.js";import{a as t}from"./q-DW55uFL8.js";import"./q-BNycJR7_.js";import"./q-DpopbfXP.js";import"./q-B17lXceh.js";import{P as s}from"./q-B9EJ-z4P.js";const a={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IsbnIssue",href:"../IsbnIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"IsbnAction",href:"../IsbnAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},g=[{text:"isbn",id:"isbn",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"ISBN schema",id:"isbn-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],x={title:"isbn",meta:[{name:"description",content:"Creates an ISBN validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/isbn/isbn.ts",contributors:["ysknsid25","fabian-hiller"]}},y={title:"isbn",description:"Creates an ISBN validation action.",source:"/actions/isbn/isbn.ts",contributors:["ysknsid25","fabian-hiller"]};function d(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...i.components};return n(l,{children:[n(e.h1,{id:"isbn",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#isbn",children:n(e.span,{class:"icon icon-link"})}),"isbn"]}),`
`,n(e.p,{children:["Creates an ",n(e.a,{href:"https://en.wikipedia.org/wiki/ISBN",rel:"noreferrer",target:"_blank",children:"ISBN"})," validation action."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"isbn"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"message",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"generics",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:n(e.span,{class:"icon icon-link"})}),"Generics"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"TInput"})," ",n(s,{...a.TInput})]}),`
`,n(e.li,{children:[n(e.code,{children:"TMessage"})," ",n(s,{...a.TMessage})]}),`
`]}),`
`,n(e.h2,{id:"parameters",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:n(e.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"message"})," ",n(s,{...a.message})]}),`
`]}),`
`,n(e.h3,{id:"explanation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:n(e.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,n(e.p,{children:["With ",n(e.code,{children:"isbn"})," you can validate the formatting of a string. If the input is not an ISBN, you can use ",n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.p,{children:"This action supports both ISBN-10 and ISBN-13 formats and accepts hyphens and spaces as separators."}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(s,{...a.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"isbn"})," can be used."]}),`
`,n(e.h3,{id:"isbn-schema",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#isbn-schema",children:n(e.span,{class:"icon icon-link"})}),"ISBN schema"]}),`
`,n(e.p,{children:"Schema to validate an ISBN."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"IsbnSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),"v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"isbn"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'The ISBN is badly formatted'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`

`,n(e.span,{class:"token comment",children:"// Valid ISBN-10 formats:"}),`
`,n(e.span,{class:"token comment",children:"// '0-306-40615-2'"}),`
`,n(e.span,{class:"token comment",children:"// '0306406152'"}),`
`,n(e.span,{class:"token comment",children:"// '0 306 40615 2'"}),`

`,n(e.span,{class:"token comment",children:"// Valid ISBN-13 formats:"}),`
`,n(e.span,{class:"token comment",children:"// '978-0-306-40615-7'"}),`
`,n(e.span,{class:"token comment",children:"// '9780306406157'"}),`
`,n(e.span,{class:"token comment",children:"// '978 0 306 40615 7'"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"isbn"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(t,{items:["any","custom","string"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(t,{items:["pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(t,{items:["isOfKind","isOfType"]})]})}const I=(i={})=>{const e=c(r,{children:c(d,i,3,null)},3,"doX4YsYt");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{I as default,y as frontmatter,x as head,g as headings};
