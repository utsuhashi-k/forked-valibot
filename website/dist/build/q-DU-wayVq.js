import{a as c,s as l,t as n,q as r}from"./q-BMflDIby.js";import{u as o}from"./q--oTrDBLb.js";import{a as i}from"./q-8Dh79Z6H.js";import"./q-DibvOihq.js";import"./q-DFFNPBxC.js";import"./q-ZqxkfwjP.js";import{L as d}from"./q-DWVc9x1E.js";import{P as s}from"./q-CdVP5qAT.js";const a={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"UrlIssue",href:"../UrlIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"UrlAction",href:"../UrlAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},b=[{text:"url",id:"url",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"URL schema",id:"url-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],v={title:"url",meta:[{name:"description",content:"Creates an URL validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/url/url.ts",contributors:["fabian-hiller","depsimon","yslpn"]}},T={title:"url",description:"Creates an URL validation action.",source:"/actions/url/url.ts",contributors:["fabian-hiller","depsimon","yslpn"]};function h(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...t.components};return n(r,{children:[n(e.h1,{id:"url",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#url",children:n(e.span,{class:"icon icon-link"})}),"url"]}),`
`,n(e.p,{children:["Creates an ",n(e.a,{href:"https://en.wikipedia.org/wiki/URL",rel:"noreferrer",target:"_blank",children:"URL"})," validation action."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"url"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"message",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
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
`,n(e.p,{children:["With ",n(e.code,{children:"url"})," you can validate the formatting of a string. If the input is not an URL, you can use ",n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["If you only need to validate an ASCII domain name, consider the ",n(d,{href:"../domain/",children:n(e.code,{children:"domain"})})," action."]}),`
`]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(s,{...a.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"url"})," can be used."]}),`
`,n(e.h3,{id:"url-schema",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#url-schema",children:n(e.span,{class:"icon icon-link"})}),"URL schema"]}),`
`,n(e.p,{children:"Schema to validate an URL."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"UrlSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"nonEmpty"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'Please enter your url.'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"url"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'The url is badly formatted.'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"endsWith"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'.com'"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token string",children:`'Only ".com" domains are allowed.'`}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"url"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(i,{items:["any","custom","string"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(i,{items:["pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(i,{items:["isOfKind","isOfType"]})]})}const M=(t={})=>{const e=c(l,{children:c(h,t,3,null)},3,"AKxVywZS");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{M as default,T as frontmatter,v as head,b as headings};
