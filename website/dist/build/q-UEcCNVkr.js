import{a as r,s as l,t as e,q as o}from"./q-dgQLQ9M1.js";import{u as h}from"./q-CyNgVds-.js";import{L as c}from"./q-BuauhHiJ.js";import{a as i}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const s={TInput:{modifier:"extends",type:"string"},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MaxGraphemesIssue",href:"../MaxGraphemesIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"MaxGraphemesAction",href:"../MaxGraphemesAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},b=[{text:"maxGraphemes",id:"maxgraphemes",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Max graphemes schema",id:"max-graphemes-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],T={title:"maxGraphemes",meta:[{name:"description",content:"Creates a max graphemes validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/maxGraphemes/maxGraphemes.ts",contributors:["fabian-hiller","tats-u"]}},G={title:"maxGraphemes",description:"Creates a max graphemes validation action.",source:"/actions/maxGraphemes/maxGraphemes.ts",contributors:["fabian-hiller","tats-u"]};function d(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...h(),...t.components};return e(o,{children:[e(n.h1,{id:"maxgraphemes",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#maxgraphemes",children:e(n.span,{class:"icon icon-link"})}),"maxGraphemes"]}),`
`,e(n.p,{children:["Creates a max ",e(n.a,{href:"https://en.wikipedia.org/wiki/Grapheme",rel:"noreferrer",target:"_blank",children:"graphemes"})," validation action."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"maxGraphemes"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TRequirement"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),`
  requirement`,e(n.span,{class:"token punctuation",children:","}),`
  message
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(a,{...s.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(a,{...s.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(a,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(a,{...s.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(a,{...s.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"maxGraphemes"})," you can validate the graphemes of a string. If the input does not match the ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["Hint: The number of characters per grapheme is not limited. You may want to consider combining ",e(n.code,{children:"maxGraphemes"})," with ",e(c,{href:"../maxLength/",children:e(n.code,{children:"maxLength"})})," or ",e(c,{href:"../maxBytes/",children:e(n.code,{children:"maxBytes"})})," to set a stricter limit."]}),`
`]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(a,{...s.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"maxGraphemes"})," can be used."]}),`
`,e(n.h3,{id:"max-graphemes-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#max-graphemes-schema",children:e(n.span,{class:"icon icon-link"})}),"Max graphemes schema"]}),`
`,e(n.p,{children:"Schema to validate a string with a maximum of 8 graphemes."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"MaxGraphemesSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"maxGraphemes"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token number",children:"8"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'The string must not exceed 8 graphemes.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"maxGraphemes"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(i,{items:["any","custom","string"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(i,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(i,{items:["isOfKind","isOfType"]})]})}const M=(t={})=>{const n=r(l,{children:r(d,t,3,null)},3,"9bDaxUo3");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{M as default,G as frontmatter,T as head,b as headings};
