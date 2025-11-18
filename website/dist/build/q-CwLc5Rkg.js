import{a as c,s as r,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as i}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:"string"},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MaxBytesIssue",href:"../MaxBytesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"MaxBytesAction",href:"../MaxBytesAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},f=[{text:"maxBytes",id:"maxbytes",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Max bytes schema",id:"max-bytes-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],g={title:"maxBytes",meta:[{name:"description",content:"Creates a max bytes validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/maxBytes/maxBytes.ts",contributors:["fabian-hiller"]}},b={title:"maxBytes",description:"Creates a max bytes validation action.",source:"/actions/maxBytes/maxBytes.ts",contributors:["fabian-hiller"]};function d(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...a.components};return e(l,{children:[e(n.h1,{id:"maxbytes",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maxbytes",children:e(n.span,{class:"icon icon-link"})}),"maxBytes"]}),`
`,e(n.p,{children:["Creates a max ",e(n.a,{href:"https://en.wikipedia.org/wiki/Byte",rel:"noreferrer",target:"_blank",children:"bytes"})," validation action."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"maxBytes"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TRequirement"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"requirement",e(n.span,{class:"token punctuation",children:","})," message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(s,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(s,{...t.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(s,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(s,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(s,{...t.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"maxBytes"})," you can validate the bytes of a string. If the input does not match the ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(s,{...t.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"maxBytes"})," can be used."]}),`
`,e(n.h3,{id:"max-bytes-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#max-bytes-schema",children:e(n.span,{class:"icon icon-link"})}),"Max bytes schema"]}),`
`,e(n.p,{children:"Schema to validate a string with a maximum of 64 bytes."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"MaxBytesSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"maxBytes"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token number",children:"64"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'The string must not exceed 64 bytes.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"maxBytes"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(i,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(i,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(i,{items:["isOfKind","isOfType"]})]})}const T=(a={})=>{const n=c(r,{children:c(d,a,3,null)},3,"ayeWOX5k");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,b as frontmatter,g as head,f as headings};
