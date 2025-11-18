import{a as c,s as l,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as i}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const s={TEnum:{modifier:"extends",type:{type:"custom",name:"Enum",href:"../Enum/"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"EnumIssue",href:"../EnumIssue/"}]},"undefined"]}},enum:{type:{type:"custom",name:"TEnum"}},message:{type:{type:"custom",name:"TMessage"}},Schema:{type:{type:"custom",name:"EnumSchema",href:"../EnumSchema/",generics:[{type:"custom",name:"TEnum"},{type:"custom",name:"TMessage"}]}}},g=[{text:"enum",id:"enum",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Direction enum",id:"direction-enum",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Actions",id:"actions",level:3},{text:"Utils",id:"utils",level:3}],b={title:"enum",meta:[{name:"description",content:"Creates an enum schema."}],styles:[],links:[],scripts:[],frontmatter:{source:"/schemas/enum/enum.ts",contributors:["fabian-hiller"]}},y={title:"enum",description:"Creates an enum schema.",source:"/schemas/enum/enum.ts",contributors:["fabian-hiller"]};function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...t.components};return e(r,{children:[e(n.h1,{id:"enum",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#enum",children:e(n.span,{class:"icon icon-link"})}),"enum"]}),`
`,e(n.p,{children:"Creates an enum schema."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Schema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"enum"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TEnum"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token keyword",children:"enum"}),e(n.span,{class:"token punctuation",children:","})," message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TEnum"})," ",e(a,{...s.TEnum})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(a,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"enum"})," ",e(a,{...s.enum})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(a,{...s.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"enum"})," you can validate that the input corresponds to an enum option. If the input is invalid, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Schema"})," ",e(a,{...s.Schema})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"enum"})," can be used."]}),`
`,e(n.h3,{id:"direction-enum",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#direction-enum",children:e(n.span,{class:"icon icon-link"})}),"Direction enum"]}),`
`,e(n.p,{children:"Schema to validate a direction enum option."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"enum"})," ",e(n.span,{class:"token maybe-class-name",children:"Direction"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
  `,e(n.span,{class:"token maybe-class-name",children:"Left"}),e(n.span,{class:"token punctuation",children:","}),`
  `,e(n.span,{class:"token maybe-class-name",children:"Right"}),e(n.span,{class:"token punctuation",children:","}),`
`,e(n.span,{class:"token punctuation",children:"}"}),`

`,e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"DirectionSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"enum"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token maybe-class-name",children:"Direction"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'Invalid direction'"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"enum"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(i,{items:["array","exactOptional","intersect","lazy","looseObject","looseTuple","map","nonNullable","nonNullish","nonOptional","nullable","nullish","object","objectWithRest","optional","record","set","strictObject","strictTuple","tuple","tupleWithRest","undefinedable","union"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(i,{items:["assert","config","fallback","getDefault","getDefaults","getFallback","getFallbacks","is","message","parse","parser","pipe","safeParse","safeParser"]}),`
`,e(n.h3,{id:"actions",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#actions",children:e(n.span,{class:"icon icon-link"})}),"Actions"]}),`
`,e(i,{items:["check","brand","description","flavor","metadata","rawCheck","rawTransform","readonly","title","transform"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(i,{items:["entriesFromList","isOfKind","isOfType"]})]})}const v=(t={})=>{const n=c(l,{children:c(d,t,3,null)},3,"J_piWLPe");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{v as default,y as frontmatter,b as head,g as headings};
