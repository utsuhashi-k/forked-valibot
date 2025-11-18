import{a as l,s as c,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as d}from"./q-CyNgVds-.js";import{L as o}from"./q-BuauhHiJ.js";import{a}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as i}from"./q-C3XvAjir.js";const t={TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"BooleanIssue",href:"../BooleanIssue/"}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Schema:{type:{type:"custom",name:"BooleanSchema",href:"../BooleanSchema/",generics:[{type:"custom",name:"TMessage"}]}}},y=[{text:"boolean",id:"boolean",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Custom message",id:"custom-message",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Actions",id:"actions",level:3},{text:"Utils",id:"utils",level:3}],v={title:"boolean",meta:[{name:"description",content:"Creates a boolean schema."}],styles:[],links:[],scripts:[],frontmatter:{source:"/schemas/boolean/boolean.ts",contributors:["fabian-hiller","EltonLobo07","wout-junius"]}},M={title:"boolean",description:"Creates a boolean schema.",source:"/schemas/boolean/boolean.ts",contributors:["fabian-hiller","EltonLobo07","wout-junius"]};function h(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...d(),...s.components};return e(r,{children:[e(n.h1,{id:"boolean",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#boolean",children:e(n.span,{class:"icon icon-link"})}),"boolean"]}),`
`,e(n.p,{children:"Creates a boolean schema."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Schema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"boolean"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
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
`,e(n.p,{children:["With ",e(n.code,{children:"boolean"})," you can validate the data type of the input. If the input is not a boolean, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["Instead of using a ",e(o,{href:"../pipe/",children:e(n.code,{children:"pipe"})})," to force ",e(n.code,{children:"true"})," or ",e(n.code,{children:"false"})," as a value, in most cases it makes more sense to use ",e(o,{href:"../literal/",children:e(n.code,{children:"literal"})})," for better typing."]}),`
`]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Schema"})," ",e(i,{...t.Schema})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"boolean"})," can be used."]}),`
`,e(n.h3,{id:"custom-message",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#custom-message",children:e(n.span,{class:"icon icon-link"})}),"Custom message"]}),`
`,e(n.p,{children:"Boolean schema with a custom error message."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"BooleanSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"boolean"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'A boolean is required'"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"boolean"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(a,{items:["array","exactOptional","intersect","lazy","looseObject","looseTuple","map","nonNullable","nonNullish","nonOptional","nullable","nullish","object","objectWithRest","optional","record","set","strictObject","strictTuple","tuple","tupleWithRest","undefinedable","union"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(a,{items:["assert","config","fallback","getDefault","getDefaults","getFallback","getFallbacks","is","message","parse","parser","pipe","safeParse","safeParser"]}),`
`,e(n.h3,{id:"actions",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#actions",children:e(n.span,{class:"icon icon-link"})}),"Actions"]}),`
`,e(a,{items:["check","brand","description","flavor","gtValue","ltValue","maxValue","maxWords","metadata","minValue","notValue","notValues","rawCheck","rawTransform","readonly","title","toMaxValue","toMinValue","transform","value","values"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(a,{items:["entriesFromList","isOfKind","isOfType"]})]})}const w=(s={})=>{const n=l(c,{children:l(h,s,3,null)},3,"OR7F66Dv");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{w as default,M as frontmatter,v as head,y as headings};
