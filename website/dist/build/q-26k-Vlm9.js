import{a as s,s as c,t as e,q as d}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";import{a as r}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:"string"},TMessage:{type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"CreditCardIssue",href:"../CreditCardIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"CreditCardAction",href:"../CreditCardAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},x=[{text:"creditCard",id:"creditcard",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Credit Card schema",id:"credit-card-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],C={title:"creditCard",meta:[{name:"description",content:"Creates a credit card validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/creditCard/creditCard.ts",contributors:["fabian-hiller","ariskemper"]}},y={title:"creditCard",description:"Creates a credit card validation action.",source:"/actions/creditCard/creditCard.ts",contributors:["fabian-hiller","ariskemper"]};function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l(),...t.components};return e(d,{children:[e(n.h1,{id:"creditcard",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#creditcard",children:e(n.span,{class:"icon icon-link"})}),"creditCard"]}),`
`,e(n.p,{children:["Creates a ",e(n.a,{href:"https://en.wikipedia.org/wiki/Payment_card_number",rel:"noreferrer",target:"_blank",children:"credit card"})," validation action."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"creditCard"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
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
`,e(n.p,{children:["With ",e(n.code,{children:"creditCard"})," you can validate the formatting of a string. If the input is not a credit card, you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"The following credit card providers are currently supported: American Express, Diners Card, Discover, JCB, Union Pay, Master Card, and Visa."}),`
`]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(a,{...i.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"creditCard"})," can be used."]}),`
`,e(n.h3,{id:"credit-card-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#credit-card-schema",children:e(n.span,{class:"icon icon-link"})}),"Credit Card schema"]}),`
`,e(n.p,{children:"Schema to validate a credit card."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"CreditCardSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"creditCard"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'The credit card is badly formatted.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"creditCard"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(r,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(r,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(r,{items:["isOfKind","isOfType"]})]})}const b=(t={})=>{const n=s(c,{children:s(o,t,3,null)},3,"wB5sIuHa");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{b as default,y as frontmatter,C as head,x as headings};
