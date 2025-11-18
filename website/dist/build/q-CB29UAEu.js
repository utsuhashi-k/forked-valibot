import{a as c,s as r,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as s}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"PromiseIssue",href:"../PromiseIssue/"}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Schema:{type:{type:"custom",name:"PromiseSchema",href:"../PromiseSchema/",generics:[{type:"custom",name:"TMessage"}]}}},x=[{text:"promise",id:"promise",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Number promise",id:"number-promise",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Actions",id:"actions",level:3},{text:"Utils",id:"utils",level:3}],g={title:"promise",meta:[{name:"description",content:"Creates a promise schema."}],styles:[],links:[],scripts:[],frontmatter:{source:"/schemas/promise/promise.ts",contributors:["fabian-hiller"]}},y={title:"promise",description:"Creates a promise schema.",source:"/schemas/promise/promise.ts",contributors:["fabian-hiller"]};function d(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...a.components};return e(l,{children:[e(n.h1,{id:"promise",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#promise",children:e(n.span,{class:"icon icon-link"})}),"promise"]}),`
`,e(n.p,{children:"Creates a promise schema."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Schema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"promise"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(i,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(i,{...t.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"promise"})," you can validate the data type of the input. If the input is not a promise, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Schema"})," ",e(i,{...t.Schema})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"promise"})," can be used."]}),`
`,e(n.h3,{id:"number-promise",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#number-promise",children:e(n.span,{class:"icon icon-link"})}),"Number promise"]}),`
`,e(n.p,{children:"Schema to validate a promise that resolves to a number."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"NumberPromiseSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipeAsync"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"promise"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"awaitAsync"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"number"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"promise"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(s,{items:["array","exactOptional","intersect","lazy","looseObject","looseTuple","map","nonNullable","nonNullish","nonOptional","nullable","nullish","object","objectWithRest","optional","record","set","strictObject","strictTuple","tuple","tupleWithRest","undefinedable","union"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(s,{items:["assert","config","fallback","getDefault","getDefaults","getFallback","getFallbacks","is","message","parse","parser","pipe","safeParse","safeParser"]}),`
`,e(n.h3,{id:"actions",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#actions",children:e(n.span,{class:"icon icon-link"})}),"Actions"]}),`
`,e(s,{items:["awaitAsync","check","brand","description","flavor","metadata","rawCheck","rawTransform","readonly","title","transform"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(s,{items:["entriesFromList","isOfKind","isOfType"]})]})}const v=(a={})=>{const n=c(r,{children:c(d,a,3,null)},3,"vx0kPIBh");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{v as default,y as frontmatter,g as head,x as headings};
