import{a as i,s as l,t as e,q as r}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a as c}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const t={TInput:{modifier:"extends",type:{type:"custom",name:"ValueInput",href:"../ValueInput/"}},TRequirement:{modifier:"extends",type:{type:"custom",name:"TInput"}},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"GtValueIssue",href:"../GtValueIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"GtValueAction",href:"../GtValueAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},f=[{text:"gtValue",id:"gtvalue",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Number schema",id:"number-schema",level:3},{text:"Date schema",id:"date-schema",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],b={title:"gtValue",meta:[{name:"description",content:"Creates a greater than value validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/gtValue/gtValue.ts",contributors:["EltonLobo07"]}},x={title:"gtValue",description:"Creates a greater than value validation action.",source:"/actions/gtValue/gtValue.ts",contributors:["EltonLobo07"]};function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...s.components};return e(r,{children:[e(n.h1,{id:"gtvalue",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#gtvalue",children:e(n.span,{class:"icon icon-link"})}),"gtValue"]}),`
`,e(n.p,{children:"Creates a greater than value validation action."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"Action"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token generic-function",children:[e(n.span,{class:"token function",children:"gtValue"}),e(n.span,{class:"token generic class-name",children:[e(n.span,{class:"token operator",children:"<"}),e(n.span,{class:"token maybe-class-name",children:"TInput"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TRequirement"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token maybe-class-name",children:"TMessage"}),e(n.span,{class:"token operator",children:">"})]})]}),e(n.span,{class:"token punctuation",children:"("}),"requirement",e(n.span,{class:"token punctuation",children:","})," message",e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"generics",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:e(n.span,{class:"icon icon-link"})}),"Generics"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"TInput"})," ",e(a,{...t.TInput})]}),`
`,e(n.li,{children:[e(n.code,{children:"TRequirement"})," ",e(a,{...t.TRequirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"TMessage"})," ",e(a,{...t.TMessage})]}),`
`]}),`
`,e(n.h2,{id:"parameters",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:e(n.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"requirement"})," ",e(a,{...t.requirement})]}),`
`,e(n.li,{children:[e(n.code,{children:"message"})," ",e(a,{...t.message})]}),`
`]}),`
`,e(n.h3,{id:"explanation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:e(n.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,e(n.p,{children:["With ",e(n.code,{children:"gtValue"})," you can validate the value of a string, number, boolean or date. If the input does not match the ",e(n.code,{children:"requirement"}),", you can use ",e(n.code,{children:"message"})," to customize the error message."]}),`
`,e(n.h2,{id:"returns",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:e(n.span,{class:"icon icon-link"})}),"Returns"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"Action"})," ",e(a,{...t.Action})]}),`
`]}),`
`,e(n.h2,{id:"examples",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:e(n.span,{class:"icon icon-link"})}),"Examples"]}),`
`,e(n.p,{children:["The following examples show how ",e(n.code,{children:"gtValue"})," can be used."]}),`
`,e(n.h3,{id:"number-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#number-schema",children:e(n.span,{class:"icon icon-link"})}),"Number schema"]}),`
`,e(n.p,{children:"Schema to validate a number with a greater than value."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"NumberSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"number"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"gtValue"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token number",children:"100"}),e(n.span,{class:"token punctuation",children:","})," ",e(n.span,{class:"token string",children:"'The number must be greater than 100.'"}),e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h3,{id:"date-schema",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#date-schema",children:e(n.span,{class:"icon icon-link"})}),"Date schema"]}),`
`,e(n.p,{children:"Schema to validate a date with a greater than year."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token keyword",children:"const"})," ",e(n.span,{class:"token maybe-class-name",children:"DateSchema"})," ",e(n.span,{class:"token operator",children:"="})," v",e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"pipe"}),e(n.span,{class:"token punctuation",children:"("}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"date"}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
  v`,e(n.span,{class:"token punctuation",children:"."}),e(n.span,{class:"token method function property-access",children:"gtValue"}),e(n.span,{class:"token punctuation",children:"("}),`
    `,e(n.span,{class:"token keyword",children:"new"})," ",e(n.span,{class:"token class-name",children:e(n.span,{class:"token known-class-name class-name",children:"Date"})}),e(n.span,{class:"token punctuation",children:"("}),e(n.span,{class:"token string",children:"'2000-01-01'"}),e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:","}),`
    `,e(n.span,{class:"token string",children:"'The date must be greater than 1st January 2000.'"}),`
  `,e(n.span,{class:"token punctuation",children:")"}),`
`,e(n.span,{class:"token punctuation",children:")"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"related",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:e(n.span,{class:"icon icon-link"})}),"Related"]}),`
`,e(n.p,{children:["The following APIs can be combined with ",e(n.code,{children:"gtValue"}),"."]}),`
`,e(n.h3,{id:"schemas",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:e(n.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,e(c,{items:["any","bigint","boolean","custom","date","number","string","unknown"]}),`
`,e(n.h3,{id:"methods",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:e(n.span,{class:"icon icon-link"})}),"Methods"]}),`
`,e(c,{items:["pipe"]}),`
`,e(n.h3,{id:"utils",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:e(n.span,{class:"icon icon-link"})}),"Utils"]}),`
`,e(c,{items:["isOfKind","isOfType"]})]})}const v=(s={})=>{const n=i(l,{children:i(d,s,3,null)},3,"iOSnq6SQ");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{v as default,x as frontmatter,b as head,f as headings};
