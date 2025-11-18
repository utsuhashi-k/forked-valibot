import{a as c,s as o,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import{a as t}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as s}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IsoTimestampIssue",href:"../IsoTimestampIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"IsoTimestampAction",href:"../IsoTimestampAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},g=[{text:"isoTimestamp",id:"isotimestamp",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"ISO timestamp schema",id:"iso-timestamp-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],x={title:"isoTimestamp",meta:[{name:"description",content:"Creates an ISO timestamp validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/isoTimestamp/isoTimestamp.ts",contributors:["fabian-hiller"]}},T={title:"isoTimestamp",description:"Creates an ISO timestamp validation action.",source:"/actions/isoTimestamp/isoTimestamp.ts",contributors:["fabian-hiller"]};function d(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...a.components};return e(r,{children:[e(n.h1,{id:"isotimestamp",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#isotimestamp",children:e(n.span,{class:"icon icon-link"})}),"isoTimestamp"]}),`
`,e(n.p,{children:["Creates an ",e(n.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",rel:"noreferrer",target:"_blank",children:"ISO timestamp"})," validation action."]}),`
`,e(n.p,{children:["Formats: ",e(n.code,{children:"yyyy-mm-ddThh:mm:ss.sssZ"}),", ",e(n.code,{children:"yyyy-mm-ddThh:mm:ss.sss±hh:mm"}),", ",e(n.code,{children:"yyyy-mm-ddThh:mm:ss.sss±hhmm"})]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"To support timestamps with lower or higher accuracy, the millisecond specification can be removed or contain up to 9 digits."}),`
`]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:'The regex used cannot validate the maximum number of days based on year and month. For example, "2023-06-31T00:00:00.000Z" is valid although June has only 30 days.'}),`
`]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:'The regex also allows a space as a separator between the date and time parts instead of the "T" character.'}),`
`]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"isoTimestamp"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(s,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(s,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(s,{...i.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"isoTimestamp"})," you can validate the formatting of a string. If the input is not an ISO timestamp, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(s,{...i.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"isoTimestamp"})," can be used."]}),`
`,e(n.h3,{id:"iso-timestamp-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#iso-timestamp-schema",children:e(n.span,{class:"icon icon-link"})}),"ISO timestamp schema"]}),`
`,e(n.p,{children:"Schema to validate an ISO timestamp."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"IsoTimestampSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"isoTimestamp"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'The timestamp is badly formatted.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"isoTimestamp"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(t,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(t,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(t,{items:["isOfKind","isOfType"]})]})}const b=(a={})=>{const n=c(o,{children:c(d,a,3,null)},3,"BuiYg57U");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{b as default,T as frontmatter,x as head,g as headings};
