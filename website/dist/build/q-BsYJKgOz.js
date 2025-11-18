import{a as o,s as l,t as n,q as i}from"./q-dgQLQ9M1.js";import{u as r}from"./q-CyNgVds-.js";import{a as c}from"./q-B70ZX59b.js";import"./q-JtBsCz9c.js";import"./q-CWbD2QRg.js";import"./q-B_zTzlEV.js";import{P as a}from"./q-C3XvAjir.js";const s={TInput:{modifier:"extends",type:"any"},TOutput:{modifier:"extends",type:"any"},action:{type:{type:"function",params:[{name:"context",type:{type:"custom",name:"Context",href:"./Context/",generics:[{type:"custom",name:"TInput"}]}}],return:{type:"custom",name:"TOutput"}}},Action:{type:{type:"custom",name:"RawTransformAction",href:"../RawTransformAction/",generics:[{type:"custom",name:"TInput"},{type:"custom",name:"TOutput"}]}}},x=[{text:"rawTransform",id:"rawtransform",level:1},{text:"Generics",id:"generics",level:2},{text:"Parameters",id:"parameters",level:2},{text:"Explanation",id:"explanation",level:3},{text:"Returns",id:"returns",level:2},{text:"Examples",id:"examples",level:2},{text:"Calculate game result",id:"calculate-game-result",level:3},{text:"Related",id:"related",level:2},{text:"Schemas",id:"schemas",level:3},{text:"Methods",id:"methods",level:3},{text:"Utils",id:"utils",level:3}],b={title:"rawTransform",meta:[{name:"description",content:"Creates a raw transformation action."}],styles:[],links:[],scripts:[],frontmatter:{source:"/actions/rawTransform/rawTransform.ts",contributors:["fabian-hiller"]}},w={title:"rawTransform",description:"Creates a raw transformation action.",source:"/actions/rawTransform/rawTransform.ts",contributors:["fabian-hiller"]};function p(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...t.components};return n(i,{children:[n(e.h1,{id:"rawtransform",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#rawtransform",children:n(e.span,{class:"icon icon-link"})}),"rawTransform"]}),`
`,n(e.p,{children:"Creates a raw transformation action."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"Action"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"rawTransform"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token maybe-class-name",children:"TInput"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token maybe-class-name",children:"TOutput"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"action",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"generics",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#generics",children:n(e.span,{class:"icon icon-link"})}),"Generics"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"TInput"})," ",n(a,{...s.TInput})]}),`
`,n(e.li,{children:[n(e.code,{children:"TOutput"})," ",n(a,{...s.TOutput})]}),`
`]}),`
`,n(e.h2,{id:"parameters",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#parameters",children:n(e.span,{class:"icon icon-link"})}),"Parameters"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"action"})," ",n(a,{...s.action})]}),`
`]}),`
`,n(e.h3,{id:"explanation",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#explanation",children:n(e.span,{class:"icon icon-link"})}),"Explanation"]}),`
`,n(e.p,{children:["With ",n(e.code,{children:"rawTransform"})," you can freely transform and validate the input with a custom ",n(e.code,{children:"action"})," and add issues if necessary."]}),`
`,n(e.h2,{id:"returns",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#returns",children:n(e.span,{class:"icon icon-link"})}),"Returns"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"Action"})," ",n(a,{...s.Action})]}),`
`]}),`
`,n(e.h2,{id:"examples",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#examples",children:n(e.span,{class:"icon icon-link"})}),"Examples"]}),`
`,n(e.p,{children:["The following examples show how ",n(e.code,{children:"rawTransform"})," can be used."]}),`
`,n(e.h3,{id:"calculate-game-result",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#calculate-game-result",children:n(e.span,{class:"icon icon-link"})}),"Calculate game result"]}),`
`,n(e.p,{children:"Schema that calculates the total score of a game based on the scores and a multiplier."}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["This ",n(e.code,{children:"rawTransform"})," validation action adds an issue for points that exceed a certain maximum and forwards it via ",n(e.code,{children:"path"})," to the appropriate nested score."]}),`
`]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"GameResultSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"object"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:"{"}),`
    scores`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"array"}),n(e.span,{class:"token punctuation",children:"("}),"v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"pipe"}),n(e.span,{class:"token punctuation",children:"("}),"v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"number"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"integer"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
    multiplier`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"number"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  v`,n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"rawTransform"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:"{"})," dataset",n(e.span,{class:"token punctuation",children:","})," addIssue",n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token constant",children:"NEVER"})," ",n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"})," ",n(e.span,{class:"token arrow operator",children:"=>"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
    `,n(e.span,{class:"token comment",children:"// Create total variable"}),`
    `,n(e.span,{class:"token keyword",children:"let"})," total ",n(e.span,{class:"token operator",children:"="})," ",n(e.span,{class:"token number",children:"0"}),n(e.span,{class:"token punctuation",children:";"}),`

    `,n(e.span,{class:"token comment",children:"// Iterate over scores and check points"}),`
    `,n(e.span,{class:"token keyword control-flow",children:"for"})," ",n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token keyword",children:"let"})," index ",n(e.span,{class:"token operator",children:"="})," ",n(e.span,{class:"token number",children:"0"}),n(e.span,{class:"token punctuation",children:";"})," index ",n(e.span,{class:"token operator",children:"<"})," dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"scores"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"length"}),n(e.span,{class:"token punctuation",children:";"})," index",n(e.span,{class:"token operator",children:"++"}),n(e.span,{class:"token punctuation",children:")"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
      `,n(e.span,{class:"token comment",children:"// Calculate points by multiplying score with multiplier"}),`
      `,n(e.span,{class:"token keyword",children:"const"})," score ",n(e.span,{class:"token operator",children:"="})," dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"scores"}),n(e.span,{class:"token punctuation",children:"["}),"index",n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:";"}),`
      `,n(e.span,{class:"token keyword",children:"const"})," points ",n(e.span,{class:"token operator",children:"="})," score ",n(e.span,{class:"token operator",children:"*"})," dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"multiplier"}),n(e.span,{class:"token punctuation",children:";"}),`

      `,n(e.span,{class:"token comment",children:"// Add issue if points exceed maximum of 1,000 points"}),`
      `,n(e.span,{class:"token keyword control-flow",children:"if"})," ",n(e.span,{class:"token punctuation",children:"("}),"points ",n(e.span,{class:"token operator",children:">"})," ",n(e.span,{class:"token number",children:"1_000"}),n(e.span,{class:"token punctuation",children:")"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
        `,n(e.span,{class:"token function",children:"addIssue"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:"{"}),`
          message`,n(e.span,{class:"token operator",children:":"}),`
            `,n(e.span,{class:"token string",children:"'The score exceeds the maximum allowed value of 1,000 points.'"}),n(e.span,{class:"token punctuation",children:","}),`
          path`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"["}),`
            `,n(e.span,{class:"token punctuation",children:"{"}),`
              type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'object'"}),n(e.span,{class:"token punctuation",children:","}),`
              origin`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'value'"}),n(e.span,{class:"token punctuation",children:","}),`
              input`,n(e.span,{class:"token operator",children:":"})," dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:","}),`
              key`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'scores'"}),n(e.span,{class:"token punctuation",children:","}),`
              value`,n(e.span,{class:"token operator",children:":"})," dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"scores"}),n(e.span,{class:"token punctuation",children:","}),`
            `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
            `,n(e.span,{class:"token punctuation",children:"{"}),`
              type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'array'"}),n(e.span,{class:"token punctuation",children:","}),`
              origin`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'value'"}),n(e.span,{class:"token punctuation",children:","}),`
              input`,n(e.span,{class:"token operator",children:":"})," dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"scores"}),n(e.span,{class:"token punctuation",children:","}),`
              key`,n(e.span,{class:"token operator",children:":"})," index",n(e.span,{class:"token punctuation",children:","}),`
              value`,n(e.span,{class:"token operator",children:":"})," score",n(e.span,{class:"token punctuation",children:","}),`
            `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
          `,n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:","}),`
        `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`

        `,n(e.span,{class:"token comment",children:"// Abort transformation"}),`
        `,n(e.span,{class:"token keyword control-flow",children:"return"})," ",n(e.span,{class:"token constant",children:"NEVER"}),n(e.span,{class:"token punctuation",children:";"}),`
      `,n(e.span,{class:"token punctuation",children:"}"}),`

      `,n(e.span,{class:"token comment",children:"// Add points to total"}),`
      total `,n(e.span,{class:"token operator",children:"+="})," points",n(e.span,{class:"token punctuation",children:";"}),`
    `,n(e.span,{class:"token punctuation",children:"}"}),`

    `,n(e.span,{class:"token comment",children:"// Add calculated total to dataset"}),`
    `,n(e.span,{class:"token keyword control-flow",children:"return"})," ",n(e.span,{class:"token punctuation",children:"{"})," ",n(e.span,{class:"token spread operator",children:"..."}),"dataset",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"value"}),n(e.span,{class:"token punctuation",children:","})," total ",n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:";"}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"}),`
`,n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"related",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#related",children:n(e.span,{class:"icon icon-link"})}),"Related"]}),`
`,n(e.p,{children:["The following APIs can be combined with ",n(e.code,{children:"rawTransform"}),"."]}),`
`,n(e.h3,{id:"schemas",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#schemas",children:n(e.span,{class:"icon icon-link"})}),"Schemas"]}),`
`,n(c,{items:["any","array","bigint","blob","boolean","custom","date","enum","exactOptional","file","function","instance","intersect","lazy","literal","looseObject","looseTuple","map","nan","never","nonNullable","nonNullish","nonOptional","null","nullable","nullish","number","object","objectWithRest","optional","picklist","promise","record","set","strictObject","strictTuple","string","symbol","tuple","tupleWithRest","undefined","undefinedable","union","unknown","variant","void"]}),`
`,n(e.h3,{id:"methods",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#methods",children:n(e.span,{class:"icon icon-link"})}),"Methods"]}),`
`,n(c,{items:["forward","pipe"]}),`
`,n(e.h3,{id:"utils",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#utils",children:n(e.span,{class:"icon icon-link"})}),"Utils"]}),`
`,n(c,{items:["isOfKind","isOfType"]})]})}const v=(t={})=>{const e=o(l,{children:o(p,t,3,null)},3,"0CAFbqS1");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{v as default,w as frontmatter,b as head,x as headings};
