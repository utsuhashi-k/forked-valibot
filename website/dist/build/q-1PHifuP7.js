import{a as c,s as r,t as n,q as l}from"./q-BMflDIby.js";import{u as d}from"./q--oTrDBLb.js";import{a as t}from"./q-8Dh79Z6H.js";import"./q-DibvOihq.js";import"./q-DFFNPBxC.js";import"./q-ZqxkfwjP.js";import{L as o}from"./q-DWVc9x1E.js";import{P as a}from"./q-CdVP5qAT.js";const i={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"DomainIssue",href:"../DomainIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"DomainAction",href:"../DomainAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},b=[{text:"domain",id:"domain",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Domain schema",id:"domain-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],v={title:"domain",meta:[{name:"description",content:"Creates a domain validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/domain/domain.ts",contributors:["yslpn"]}},I={title:"domain",description:"Creates a domain validation action.",source:"/actions/domain/domain.ts",contributors:["yslpn"]};function h(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...d(),...s.components};return n(l,{children:[n(e.h1,{id:"domain",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#domain",children:n(e.span,{class:"icon icon-link"})}),"domain"]}),`
`,n(e.p,{children:["Creates a ",n(e.a,{href:"https://en.wikipedia.org/wiki/Domain_name",rel:"noreferrer",target:"_blank",children:"domain name"})," validation action."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"domain"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"message",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
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
`,n(e.p,{children:["With ",n(e.code,{children:"domain"}),` you can validate the formatting of a domain string.
If the input is not a valid domain, you can use `,n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["Validates ASCII domains. Limits: 63 chars per label, 253 chars total. ",n(o,{href:"https://en.wikipedia.org/wiki/Internationalized_domain_name",children:"Internationalized domain names"}),` (IDNs) are not supported, including Punycode-encoded labels.
If you need to validate a full URL (including protocol, path, query, etc.), use the `,n(o,{href:"../url/",children:n(e.code,{children:"url"})})," action."]}),`
`]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(a,{...i.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"domain"})," can be used."]}),`
`,n(e.h3,{id:"domain-schema",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#domain-schema",children:n(e.span,{class:"icon icon-link"})}),"Domain schema"]}),`
`,n(e.p,{children:"Schema to validate a domain."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"DomainSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"nonEmpty"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'Please enter your domain.'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"domain"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'The domain is badly formatted.'"}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"domain"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(t,{items:["any","custom","string"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(t,{items:["pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(t,{items:["isOfKind","isOfType"]})]})}const T=(s={})=>{const e=c(r,{children:c(h,s,3,null)},3,"RDnhlh3i");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{T as default,I as frontmatter,v as head,b as headings};
