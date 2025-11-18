import{a as c,s as l,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as s}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"any"},TTitle:{modifier:"extends",type:"string"},title_:{type:{type:"custom",name:"TTitle"}},Action:{type:{type:"custom",name:"TitleAction",href:"../TitleAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TTitle"}]}}},b=[{text:"title",id:"title",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Username schema",id:"username-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],g={title:"title",meta:[{name:"description",content:"Creates a title metadata action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/title/title.ts",contributors:["fabian-hiller"]}},y={title:"title",description:"Creates a title metadata action.",source:"/actions/title/title.ts",contributors:["fabian-hiller"]};function d(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...a.components};return e(r,{children:[e(n.h1,{id:"title",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#title",children:e(n.span,{class:"icon icon-link"})}),"title"]}),`
`,e(n.p,{children:"Creates a title metadata action."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"title"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TTitle"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"title_",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TTitle"})," ",e(t,{...i.TTitle})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"title_"})," ",e(t,{...i.title_})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"title"})," you can give a title to a schema. This can be useful when working with AI tools or for documentation purposes."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(t,{...i.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"title"})," can be used."]}),`
`,e(n.h3,{id:"username-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#username-schema",children:e(n.span,{class:"icon icon-link"})}),"Username schema"]}),`
`,e(n.p,{children:"Schema to validate a user name."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"UsernameSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"regex"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token regex",children:[e(n.span,{class:"token regex-delimiter",children:"/"}),e(n.span,{class:"token regex-source language-regex",children:"^[a-z0-9_-]{4,16}$"}),e(n.span,{class:"token regex-delimiter",children:"/"}),e(n.span,{class:"token regex-flags",children:"iu"})]}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"title"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'Username'"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"description"}),e(n.span,{class:"token punctuation",children:"("}),`
    `,e(n.span,{class:"token string",children:"'A username must be between 4 and 16 characters long and can only contain letters, numbers, underscores and hyphens.'"}),`
  `,e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"title"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(s,{items:["any","array","bigint","blob","boolean","custom","date","enum","exactOptional","file","function","instance","intersect","lazy","literal","looseObject","looseTuple","map","nan","never","nonNullable","nonNullish","nonOptional","null","nullable","nullish","number","object","objectWithRest","optional","picklist","promise","record","set","strictObject","strictTuple","string","symbol","tuple","tupleWithRest","undefined","undefinedable","union","unknown","variant","void"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(s,{items:["getTitle","pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(s,{items:["isOfKind","isOfType"]})]})}const T=(a={})=>{const n=c(l,{children:c(d,a,3,null)},3,"eq4GM7nT");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{T as default,y as frontmatter,g as head,b as headings};
