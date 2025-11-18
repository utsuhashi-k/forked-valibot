import{a as r,s as c,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as t}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const a={TInput:{modifier:"extends",type:"string"},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"GraphemesIssue",href:"../GraphemesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"GraphemesAction",href:"../GraphemesAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},x=[{text:"graphemes",id:"graphemes",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Graphemes schema",id:"graphemes-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],y={title:"graphemes",meta:[{name:"description",content:"Creates a graphemes validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/graphemes/graphemes.ts",contributors:["fabian-hiller"]}},b={title:"graphemes",description:"Creates a graphemes validation action.",source:"/actions/graphemes/graphemes.ts",contributors:["fabian-hiller"]};function h(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...i.components};return e(l,{children:[e(n.h1,{id:"graphemes",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#graphemes",children:e(n.span,{class:"icon icon-link"})}),"graphemes"]}),`
`,e(n.p,{children:["Creates a ",e(n.a,{href:"https://en.wikipedia.org/wiki/Grapheme",rel:"noreferrer",target:"_blank",children:"graphemes"})," validation action."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"graphemes"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TRequirement"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),`
  requirement`,e(n.span,{class:"token punctuation",children:","}),`
  message
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(s,{...a.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(s,{...a.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(s,{...a.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(s,{...a.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(s,{...a.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"graphemes"})," you can validate the graphemes of a string. If the input does not match the ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(s,{...a.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"graphemes"})," can be used."]}),`
`,e(n.h3,{id:"graphemes-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#graphemes-schema",children:e(n.span,{class:"icon icon-link"})}),"Graphemes schema"]}),`
`,e(n.p,{children:"Schema to validate a string with 8 graphemes."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"GraphemesSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"graphemes"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token number",children:"8"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'Exactly 8 graphemes are required.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"graphemes"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(t,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(t,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(t,{items:["isOfKind","isOfType"]})]})}const T=(i={})=>{const n=r(c,{children:r(h,i,3,null)},3,"7htr_aLW");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,b as frontmatter,y as head,x as headings};
