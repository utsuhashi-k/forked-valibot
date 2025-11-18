import{a as i,s as r,t as e,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as c}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const s={TInput:{modifier:"extends",type:{type:"custom",name:"ArrayInput",href:"../ArrayInput/"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"CheckItemsIssue",href:"../CheckItemsIssue/",generics:[{type:"custom",name:"TInput"}]}]},"undefined"]}},requirement:{type:{type:"custom",name:"ArrayRequirement",href:"../ArrayRequirement/",generics:[{type:"custom",name:"TInput"}]}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"CheckItemsAction",href:"../CheckItemsAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TMessage"}]}}},x=[{text:"checkItems",id:"checkitems",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"No duplicate items",id:"no-duplicate-items",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],g={title:"checkItems",meta:[{name:"description",content:"Creates a check items validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/checkItems/checkItems.ts",contributors:["fabian-hiller"]}},I={title:"checkItems",description:"Creates a check items validation action.",source:"/actions/checkItems/checkItems.ts",contributors:["fabian-hiller"]};function d(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...a.components};return e(l,{children:[e(n.h1,{id:"checkitems",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#checkitems",children:e(n.span,{class:"icon icon-link"})}),"checkItems"]}),`
`,e(n.p,{children:"Creates a check items validation action."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"checkItems"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"requirement",e(n.span,{class:"token punctuation",children:","})," message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(t,{...s.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(t,{...s.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(t,{...s.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(t,{...s.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"checkItems"})," you can freely validate the items of an array and return ",e(n.code,{children:"true"})," if they are valid or ",e(n.code,{children:"false"})," otherwise. If an item does not match your ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:["The special thing about ",e(n.code,{children:"checkItems"})," is that it automatically forwards each issue to the appropriate item."]}),`
`]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(t,{...s.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"checkItems"})," can be used."]}),`
`,e(n.h3,{id:"no-duplicate-items",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#no-duplicate-items",children:e(n.span,{class:"icon icon-link"})}),"No duplicate items"]}),`
`,e(n.p,{children:"Schema to validate that an array has no duplicate items."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"ArraySchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"array"}),e(n.span,{class:"token punctuation",children:"("}),"v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"string"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"checkItems"}),e(n.span,{class:"token punctuation",children:"("}),`
    `,e(n.span,{class:"token punctuation",children:"("}),"item",e(n.span,{class:"token punctuation",children:","})," index",e(n.span,{class:"token punctuation",children:","})," array",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token arrow operator",children:"=>"})," array",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"indexOf"}),e(n.span,{class:"token punctuation",children:"("}),"item",e(n.span,{class:"token punctuation",children:")"})," ",e(n.span,{class:"token operator",children:"==="})," index",e(n.span,{class:"token punctuation",children:","}),`
    `,e(n.span,{class:"token string",children:"'Duplicate items are not allowed.'"}),`
  `,e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"checkItems"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(c,{items:["any","array","custom","instance","tuple","unknown"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(c,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(c,{items:["isOfKind","isOfType"]})]})}const b=(a={})=>{const n=i(r,{children:i(d,a,3,null)},3,"Rz1YS5vo");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{b as default,I as frontmatter,g as head,x as headings};
