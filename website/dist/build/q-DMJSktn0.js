import{a as c,s as r,t as n,q as l}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{a}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as t}from"./q-C3XvAjir.js";const i={TInput:{modifier:"extends",type:{type:"custom",name:"LengthInput",href:"../LengthInput/"}},TRequirement:{modifier:"extends",type:"number"},TMessage:{modifier:"extends",type:{type:"union",options:[{type:"custom",name:"ErrorMessage",href:"../ErrorMessage/",generics:[{type:"custom",name:"MinLengthIssue",href:"../MinLengthIssue/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"}]}]},"undefined"]}},requirement:{type:{type:"custom",name:"TRequirement"}},message:{type:{type:"custom",name:"TMessage"}},Action:{type:{type:"custom",name:"MinLengthAction",href:"../MinLengthAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TRequirement"},{type:"custom",name:"TMessage"}]}}},f=[{text:"minLength",id:"minlength",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Minimum string length",id:"minimum-string-length",level:3},{text:"Minimum array length",id:"minimum-array-length",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],x={title:"minLength",meta:[{name:"description",content:"Creates a min length validation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/minLength/minLength.ts",contributors:["fabian-hiller","depsimon"]}},b={title:"minLength",description:"Creates a min length validation action.",source:"/actions/minLength/minLength.ts",contributors:["fabian-hiller","depsimon"]};function h(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...s.components};return n(l,{children:[n(e.h1,{id:"minlength",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#minlength",children:n(e.span,{class:"icon icon-link"})}),"minLength"]}),`
`,n(e.p,{children:"Creates a min length validation action."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"minLength"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TRequirement"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TMessage"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),`
  requirement`,n(e.span,{class:"token punctuation",children:","}),`
  message
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"generics",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:n(e.span,{class:"icon icon-link"})}),"Generics"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"TInput"})," ",n(t,{...i.TInput})]}),`
`,n(e.li,{children:[n(e.code,{children:"TRequirement"})," ",n(t,{...i.TRequirement})]}),`
`,n(e.li,{children:[n(e.code,{children:"TMessage"})," ",n(t,{...i.TMessage})]}),`
`]}),`
`,n(e.h2,{id:"parameters",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:n(e.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"requirement"})," ",n(t,{...i.requirement})]}),`
`,n(e.li,{children:[n(e.code,{children:"message"})," ",n(t,{...i.message})]}),`
`]}),`
`,n(e.h3,{id:"explanation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:n(e.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,n(e.p,{children:["With ",n(e.code,{children:"minLength"})," you can validate the length of a string or array. If the input does not match the ",n(e.code,{children:"requirement"}),", you can use ",n(e.code,{children:"message"})," to customize the error message."]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(t,{...i.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"minLength"})," can be used."]}),`
`,n(e.h3,{id:"minimum-string-length",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#minimum-string-length",children:n(e.span,{class:"icon icon-link"})}),"Minimum string length"]}),`
`,n(e.p,{children:"Schema to validate a string with a minimum length of 3 characters."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"MinStringSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"minLength"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token number",children:"3"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token string",children:"'The string must be 3 or more characters long.'"}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h3,{id:"minimum-array-length",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#minimum-array-length",children:n(e.span,{class:"icon icon-link"})}),"Minimum array length"]}),`
`,n(e.p,{children:"Schema to validate an array with a minimum length of 5 items."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"MinArraySchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"array"}),n(e.span,{class:"token punctuation",children:"("}),"v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"number"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"minLength"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token number",children:"5"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token string",children:"'The array must contain 5 numbers or more.'"}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"minLength"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(a,{items:["any","array","custom","instance","string","tuple","unknown"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(a,{items:["pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(a,{items:["isOfKind","isOfType"]})]})}const v=(s={})=>{const e=c(r,{children:c(h,s,3,null)},3,"nEyOt_Am");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{v as default,b as frontmatter,x as head,f as headings};
