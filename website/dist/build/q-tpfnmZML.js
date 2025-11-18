import{a as i,s as o,t as n,q as r}from"./q-dgQLQ9M1.js";import{u as d}from"./q-CyNgVds-.js";import{L as l}from"./q-BuauhHiJ.js";import{a}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const t={TEntries:{modifier:"extends",type:{type:"custom",name:"ObjectEntries",href:"../ObjectEntries/"}},TRest:{modifier:"extends",type:{type:"custom",name:"BaseSchema",href:"../BaseSchema/",generics:["unknown","unknown",{type:"custom",name:"BaseIssue",href:"../BaseIssue/",generics:["unknown"]}]}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"ObjectWithRestIssue",href:"../ObjectWithRestIssue/"}]},"undefined"]}},entries:{type:{type:"custom",name:"TEntries"}},rest:{type:{type:"custom",name:"TRest"}},message:{type:{type:"custom",name:"TMessage"}},Schema:{type:{type:"custom",name:"ObjectWithRestSchema",href:"../ObjectWithRestSchema/",generics:[{type:"custom",name:"TEntries"},{type:"custom",name:"TRest"},{type:"custom",name:"TMessage"}]}}},j=[{text:"objectWithRest",id:"objectwithrest",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Object schema with rest",id:"object-schema-with-rest",level:3},{text:"Merge several objects",id:"merge-several-objects",level:3},{text:"Mark keys as optional",id:"mark-keys-as-optional",level:3},{text:"Object with selected entries",id:"object-with-selected-entries",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Actions",id:"actions",level:3},{text:"Utils",id:"utils",level:3}],x={title:"objectWithRest",meta:[{name:"description",content:"Creates an object with rest schema."}],styles:[],links:[],scripts:[],frontmatter:{source:"/schemas/object/object.ts",contributors:["fabian-hiller","muningis","kazizi55"]}},w={title:"objectWithRest",description:"Creates an object with rest schema.",source:"/schemas/object/object.ts",contributors:["fabian-hiller","muningis","kazizi55"]};function h(c){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...d(),...c.components};return n(r,{children:[n(e.h1,{id:"objectwithrest",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#objectwithrest",children:n(e.span,{class:"icon icon-link"})}),"objectWithRest"]}),`
`,n(e.p,{children:"Creates an object with rest schema."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Schema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"objectWithRest"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TEntries"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TRest"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),`
  entries`,n(e.span,{class:"token punctuation",children:","}),`
  rest`,n(e.span,{class:"token punctuation",children:","}),`
  message
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"generics",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:n(e.span,{class:"icon icon-link"})}),"Generics"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"TEntries"})," ",n(s,{...t.TEntries})]}),`
`,n(e.li,{children:[n(e.code,{children:"TRest"})," ",n(s,{...t.TRest})]}),`
`,n(e.li,{children:[n(e.code,{children:"TMessage"})," ",n(s,{...t.TMessage})]}),`
`]}),`
`,n(e.h2,{id:"parameters",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:n(e.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"entries"})," ",n(s,{...t.entries})]}),`
`,n(e.li,{children:[n(e.code,{children:"rest"})," ",n(s,{...t.rest})]}),`
`,n(e.li,{children:[n(e.code,{children:"message"})," ",n(s,{...t.message})]}),`
`]}),`
`,n(e.h3,{id:"explanation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:n(e.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,n(e.p,{children:["With ",n(e.code,{children:"objectWithRest"})," you can validate the data type of the input and whether the content matches ",n(e.code,{children:"entries"})," and ",n(e.code,{children:"rest"}),". If the input is not an object, you can use ",n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["The difference to ",n(l,{href:"../object/",children:n(e.code,{children:"object"})})," is that this schema includes unknown entries in the output. In addition, this schema filters certain entries from the unknown entries for security reasons."]}),`
`]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Schema"})," ",n(s,{...t.Schema})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"objectWithRest"})," can be used. Please see the ",n(l,{href:"/guides/objects/",children:"object guide"})," for more examples and explanations."]}),`
`,n(e.h3,{id:"object-schema-with-rest",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#object-schema-with-rest",children:n(e.span,{class:"icon icon-link"})}),"Object schema with rest"]}),`
`,n(e.p,{children:"Schema to validate an object with generic rest entries."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"ObjectSchemaWithRest"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"objectWithRest"}),n(e.span,{class:"token punctuation",children:"("}),`
  `,n(e.span,{class:"token punctuation",children:"{"}),`
    key1`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
    key2`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"number"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"boolean"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h3,{id:"merge-several-objects",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#merge-several-objects",children:n(e.span,{class:"icon icon-link"})}),"Merge several objects"]}),`
`,n(e.p,{children:"Schema that merges the entries of two object schemas."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"MergedObjectSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"objectWithRest"}),n(e.span,{class:"token punctuation",children:"("}),`
  `,n(e.span,{class:"token punctuation",children:"{"}),`
    `,n(e.span,{class:"token spread operator",children:"..."}),n(e.span,{class:"token maybe-class-name",children:"ObjectSchema1"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"entries"}),n(e.span,{class:"token punctuation",children:","}),`
    `,n(e.span,{class:"token spread operator",children:"..."}),n(e.span,{class:"token maybe-class-name",children:"ObjectSchema2"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"entries"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token keyword null nil",children:"null"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h3,{id:"mark-keys-as-optional",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#mark-keys-as-optional",children:n(e.span,{class:"icon icon-link"})}),"Mark keys as optional"]}),`
`,n(e.p,{children:"Schema to validate an object with partial entries."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"PartialObjectSchema"})," ",n(e.span,{class:"token operator",children:"="})," ",n(e.span,{class:"token function",children:"partial"}),n(e.span,{class:"token punctuation",children:"("}),`
  `,n(e.span,{class:"token function",children:"objectWithRest"}),n(e.span,{class:"token punctuation",children:"("}),`
    `,n(e.span,{class:"token punctuation",children:"{"}),`
      key1`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token function",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
      key2`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token function",children:"number"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
    `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
    v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token keyword nil",children:"undefined"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),`
  `,n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h3,{id:"object-with-selected-entries",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#object-with-selected-entries",children:n(e.span,{class:"icon icon-link"})}),"Object with selected entries"]}),`
`,n(e.p,{children:"Schema to validate only selected entries of an object."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"PickObjectSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pick"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"objectWithRest"}),n(e.span,{class:"token punctuation",children:"("}),`
    `,n(e.span,{class:"token punctuation",children:"{"}),`
      key1`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
      key2`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"number"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
      key3`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"boolean"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
    `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
    v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token keyword null nil",children:"null"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),`
  `,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"["}),n(e.span,{class:"token string",children:"'key1'"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token string",children:"'key3'"}),n(e.span,{class:"token punctuation",children:"]"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"objectWithRest"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(a,{items:["any","array","bigint","blob","boolean","custom","date","enum","exactOptional","file","function","instance","intersect","lazy","literal","looseObject","looseTuple","map","nan","never","nonNullable","nonNullish","nonOptional","null","nullable","nullish","number","object","optional","picklist","promise","record","set","strictObject","strictTuple","string","symbol","tuple","tupleWithRest","undefined","undefinedable","union","unknown","variant","void"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(a,{items:["assert","config","fallback","forward","getDefault","getDefaults","getFallback","getFallbacks","is","keyof","message","omit","parse","parser","partial","pick","pipe","required","safeParse","safeParser"]}),`
`,n(e.h3,{id:"actions",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#actions",children:n(e.span,{class:"icon icon-link"})}),"Actions"]}),`
`,n(a,{items:["check","brand","description","entries","flavor","maxEntries","metadata","minEntries","notEntries","partialCheck","rawCheck","rawTransform","readonly","title","transform"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(a,{items:["entriesFromList","isOfKind","isOfType"]})]})}const v=(c={})=>{const e=i(o,{children:i(h,c,3,null)},3,"BBwROOM2");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{v as default,w as frontmatter,x as head,j as headings};
