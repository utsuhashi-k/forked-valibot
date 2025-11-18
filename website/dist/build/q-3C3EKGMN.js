import{a as c,s as l,t as n,q as r}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as i}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const a={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"SlugIssue",href:"../SlugIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"SlugAction",href:"../SlugAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},x=[{text:"slug",id:"slug",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Slug schema",id:"slug-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],y={title:"slug",meta:[{name:"description",content:"Creates a slug validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/slug/slug.ts",contributors:["fabian-hiller"]}},b={title:"slug",description:"Creates a slug validation action.",source:"/actions/slug/slug.ts",contributors:["fabian-hiller"]};function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...t.components};return n(r,{children:[n(e.h1,{id:"slug",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#slug",children:n(e.span,{class:"icon icon-link"})}),"slug"]}),`
`,n(e.p,{children:["Creates an ",n(e.a,{href:"https://en.wikipedia.org/wiki/Clean_URL#Slug",rel:"noreferrer",target:"_blank",children:"slug"})," validation action."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"slug"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"message",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
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
`,n(e.p,{children:["With ",n(e.code,{children:"slug"})," you can validate the formatting of a string. If the input is not a URL slug, you can use ",n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(s,{...a.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"slug"})," can be used."]}),`
`,n(e.h3,{id:"slug-schema",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#slug-schema",children:n(e.span,{class:"icon icon-link"})}),"Slug schema"]}),`
`,n(e.p,{children:"Schema to validate a slug."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"SlugSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"nonEmpty"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'Please provide a slug.'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"slug"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:"'The slug is badly formatted.'"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"maxLength"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token number",children:"100"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token string",children:"'Your slug is too long.'"}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"slug"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(i,{items:["any","custom","string"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(i,{items:["pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(i,{items:["isOfKind","isOfType"]})]})}const v=(t={})=>{const e=c(l,{children:c(d,t,3,null)},3,"-eg+Gjgn");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{v as default,b as frontmatter,y as head,x as headings};
