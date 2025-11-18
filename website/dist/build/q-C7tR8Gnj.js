import{a as c,s as o,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import{a as s}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"IsoDateTimeIssue",href:"../IsoDateTimeIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"IsoDateTimeAction",href:"../IsoDateTimeAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},x=[{text:"isoDateTime",id:"isodatetime",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"ISO date time schema",id:"iso-date-time-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],y={title:"isoDateTime",meta:[{name:"description",content:"Creates an ISO date time validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/isoDateTime/isoDateTime.ts",contributors:["fabian-hiller"]}},T={title:"isoDateTime",description:"Creates an ISO date time validation action.",source:"/actions/isoDateTime/isoDateTime.ts",contributors:["fabian-hiller"]};function d(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...t.components};return e(r,{children:[e(n.h1,{id:"isodatetime",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#isodatetime",children:e(n.span,{class:"icon icon-link"})}),"isoDateTime"]}),`
`,e(n.p,{children:["Creates an ",e(n.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",rel:"noreferrer",target:"_blank",children:"ISO date time"})," validation action."]}),`
`,e(n.p,{children:["Format: ",e(n.code,{children:"yyyy-mm-ddThh:mm"})]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:'The regex used cannot validate the maximum number of days based on year and month. For example, "2023-06-31T00:00" is valid although June has only 30 days.'}),`
`]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:'The regex also allows a space as a separator between the date and time parts instead of the "T" character.'}),`
`]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"isoDateTime"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(a,{...i.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(a,{...i.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(a,{...i.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"isoDateTime"})," you can validate the formatting of a string. If the input is not an ISO date time, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(a,{...i.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"isoDateTime"})," can be used."]}),`
`,e(n.h3,{id:"iso-date-time-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#iso-date-time-schema",children:e(n.span,{class:"icon icon-link"})}),"ISO date time schema"]}),`
`,e(n.p,{children:"Schema to validate an ISO date time."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"IsoDateTimeSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"isoDateTime"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'The date is badly formatted.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"isoDateTime"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(s,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(s,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(s,{items:["isOfKind","isOfType"]})]})}const b=(t={})=>{const n=c(o,{children:c(d,t,3,null)},3,"-g4we3ti");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{b as default,T as frontmatter,y as head,x as headings};
