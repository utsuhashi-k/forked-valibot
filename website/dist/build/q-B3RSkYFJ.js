import{a as c,s as r,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as t}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const s={TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"FunctionIssue",href:"../FunctionIssue/"}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Schema:{type:{type:"custom",name:"FunctionSchema",href:"../FunctionSchema/",generics:[{type:"custom",name:"TMessage"}]}}},x=[{text:"function",id:"function",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Actions",id:"actions",level:3},{text:"Utils",id:"utils",level:3}],b={title:"function",meta:[{name:"description",content:"Creates a function schema."}],styles:[],links:[],scripts:[],frontmatter:{source:"/schemas/function/function.ts",contributors:["fabian-hiller"]}},y={title:"function",description:"Creates a function schema.",source:"/schemas/function/function.ts",contributors:["fabian-hiller"]};function d(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...i.components};return e(l,{children:[e(n.h1,{id:"function",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#function",children:e(n.span,{class:"icon icon-link"})}),"function"]}),`
`,e(n.p,{children:"Creates a function schema."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Schema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"function"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(a,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(a,{...s.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"function"})," you can validate the data type of the input. If the input is not a function, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Schema"})," ",e(a,{...s.Schema})]}),`
`]}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"function"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(t,{items:["array","exactOptional","intersect","lazy","looseObject","looseTuple","map","nonNullable","nonNullish","nonOptional","nullable","nullish","object","objectWithRest","optional","record","set","strictObject","strictTuple","tuple","tupleWithRest","undefinedable","union"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(t,{items:["assert","config","fallback","getDefault","getDefaults","getFallback","getFallbacks","is","message","parse","parser","pipe","safeParse","safeParser"]}),`
`,e(n.h3,{id:"actions",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#actions",children:e(n.span,{class:"icon icon-link"})}),"Actions"]}),`
`,e(t,{items:["check","brand","description","flavor","metadata","rawCheck","rawTransform","readonly","title","transform"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(t,{items:["entriesFromList","isOfKind","isOfType"]})]})}const M=(i={})=>{const n=c(r,{children:c(d,i,3,null)},3,"F3n6JXHf");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{M as default,y as frontmatter,b as head,x as headings};
