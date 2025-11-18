import{a as o,s,t as e,q as t}from"./q-dgQLQ9M1.js";import{u as l}from"./q-CyNgVds-.js";const d=[{text:"Installation",id:"installation",level:1},{text:"General",id:"general",level:2},{text:"From npm",id:"from-npm",level:2},{text:"From JSR",id:"from-jsr",level:2},{text:"From Deno",id:"from-deno",level:2}],p={title:"Installation",meta:[{name:"description",content:"Valibot is currently available for Node, Bun and Deno. Below you will learn how to add the library to your project."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","Shyam-Chen","jojojojojoj5564656465465"]}},h={title:"Installation",description:"Valibot is currently available for Node, Bun and Deno. Below you will learn how to add the library to your project.",contributors:["fabian-hiller","Shyam-Chen","jojojojojoj5564656465465"]};function i(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...l(),...a.components};return e(t,{children:[e(n.h1,{id:"installation",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#installation",children:e(n.span,{class:"icon icon-link"})}),"Installation"]}),`
`,e(n.p,{children:"Valibot is currently available for Node, Bun and Deno. Below you will learn how to add the library to your project."}),`
`,e(n.h2,{id:"general",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#general",children:e(n.span,{class:"icon icon-link"})}),"General"]}),`
`,e(n.p,{children:"Except for this guide, the rest of this documentation assumes that you are using npm for the import statements in the code examples."}),`
`,e(n.p,{children:"It should make no difference whether you use individual imports or a wildcard import. Tree shaking and code splitting should work in both cases."}),`
`,e(n.p,{children:["If you are using TypeScript, we recommend that you enable strict mode in your ",e(n.code,{children:"tsconfig.json"})," so that all types are calculated correctly."]}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"The minimum required TypeScript version is v5.0.2."}),`
`]}),`
`,e(n.pre,{class:"language-js",children:e(n.code,{class:"language-js",children:[e(n.span,{class:"token punctuation",children:"{"}),`
  `,e(n.span,{class:"token string-property property",children:'"compilerOptions"'}),e(n.span,{class:"token operator",children:":"})," ",e(n.span,{class:"token punctuation",children:"{"}),`
    `,e(n.span,{class:"token string-property property",children:'"strict"'}),e(n.span,{class:"token operator",children:":"})," ",e(n.span,{class:"token boolean",children:"true"}),e(n.span,{class:"token punctuation",children:","}),`
    `,e(n.span,{class:"token comment",children:"// ..."}),`
  `,e(n.span,{class:"token punctuation",children:"}"}),`
`,e(n.span,{class:"token punctuation",children:"}"}),`
`]})}),`
`,e(n.h2,{id:"from-npm",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#from-npm",children:e(n.span,{class:"icon icon-link"})}),"From npm"]}),`
`,e(n.p,{children:"For Node and Bun, you can add the library to your project with a single command using your favorite package manager."}),`
`,e(n.pre,{class:"language-bash",children:e(n.code,{class:"language-bash",children:[e(n.span,{class:"token function",children:"npm"})," ",e(n.span,{class:"token function",children:"install"})," valibot     ",e(n.span,{class:"token comment",children:"# npm"}),`
`,e(n.span,{class:"token function",children:"yarn"})," ",e(n.span,{class:"token function",children:"add"})," valibot        ",e(n.span,{class:"token comment",children:"# yarn"}),`
`,e(n.span,{class:"token function",children:"pnpm"})," ",e(n.span,{class:"token function",children:"add"})," valibot        ",e(n.span,{class:"token comment",children:"# pnpm"}),`
bun `,e(n.span,{class:"token function",children:"add"})," valibot         ",e(n.span,{class:"token comment",children:"# bun"}),`
`]})}),`
`,e(n.p,{children:"Then you can import it into any JavaScript or TypeScript file."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token comment",children:"// With individual imports"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token punctuation",children:"{"})," … ",e(n.span,{class:"token punctuation",children:"}"})]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'valibot'"}),e(n.span,{class:"token punctuation",children:";"}),`

`,e(n.span,{class:"token comment",children:"// With a wildcard import"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token operator",children:"*"})," ",e(n.span,{class:"token keyword module",children:"as"})," v"]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'valibot'"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"from-jsr",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#from-jsr",children:e(n.span,{class:"icon icon-link"})}),"From JSR"]}),`
`,e(n.p,{children:"For Node, Deno and Bun, you can add the library to your project with a single command using your favorite package manager."}),`
`,e(n.pre,{class:"language-bash",children:e(n.code,{class:"language-bash",children:["deno ",e(n.span,{class:"token function",children:"add"})," jsr:@valibot/valibot      ",e(n.span,{class:"token comment",children:"# deno"}),`
npx jsr `,e(n.span,{class:"token function",children:"add"})," @valibot/valibot       ",e(n.span,{class:"token comment",children:"# npm"}),`
`,e(n.span,{class:"token function",children:"yarn"})," dlx jsr ",e(n.span,{class:"token function",children:"add"})," @valibot/valibot  ",e(n.span,{class:"token comment",children:"# yarn"}),`
`,e(n.span,{class:"token function",children:"pnpm"})," dlx jsr ",e(n.span,{class:"token function",children:"add"})," @valibot/valibot  ",e(n.span,{class:"token comment",children:"# pnpm"}),`
bunx jsr `,e(n.span,{class:"token function",children:"add"})," @valibot/valibot      ",e(n.span,{class:"token comment",children:"# bun"}),`
`]})}),`
`,e(n.p,{children:"Then you can import it into any JavaScript or TypeScript file."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token comment",children:"// With individual imports"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token punctuation",children:"{"})," … ",e(n.span,{class:"token punctuation",children:"}"})]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'@valibot/valibot'"}),e(n.span,{class:"token punctuation",children:";"}),`

`,e(n.span,{class:"token comment",children:"// With a wildcard import"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token operator",children:"*"})," ",e(n.span,{class:"token keyword module",children:"as"})," v"]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'@valibot/valibot'"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:["In Deno, you can also directly reference me using ",e(n.code,{children:"jsr:"})," specifiers."]}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token comment",children:"// With individual imports"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token punctuation",children:"{"})," … ",e(n.span,{class:"token punctuation",children:"}"})]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'jsr:@valibot/valibot'"}),e(n.span,{class:"token punctuation",children:";"}),`

`,e(n.span,{class:"token comment",children:"// With a wildcard import"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token operator",children:"*"})," ",e(n.span,{class:"token keyword module",children:"as"})," v"]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'jsr:@valibot/valibot'"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"from-deno",children:[e(n.a,{"aria-hidden":"true",tabindex:"-1",href:"#from-deno",children:e(n.span,{class:"icon icon-link"})}),"From Deno"]}),`
`,e(n.p,{children:"With Deno, you can reference the library directly through our deno.land/x URL."}),`
`,e(n.pre,{class:"language-ts",children:e(n.code,{class:"language-ts",children:[e(n.span,{class:"token comment",children:"// With individual imports"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token punctuation",children:"{"})," … ",e(n.span,{class:"token punctuation",children:"}"})]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'https://deno.land/x/valibot/mod.ts'"}),e(n.span,{class:"token punctuation",children:";"}),`

`,e(n.span,{class:"token comment",children:"// With a wildcard import"}),`
`,e(n.span,{class:"token keyword module",children:"import"})," ",e(n.span,{class:"token imports",children:[e(n.span,{class:"token operator",children:"*"})," ",e(n.span,{class:"token keyword module",children:"as"})," v"]})," ",e(n.span,{class:"token keyword module",children:"from"})," ",e(n.span,{class:"token string",children:"'https://deno.land/x/valibot/mod.ts'"}),e(n.span,{class:"token punctuation",children:";"}),`
`]})})]})}const u=(a={})=>{const n=o(s,{children:o(i,a,3,null)},3,"OzCZGZlR");return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{u as default,h as frontmatter,p as head,d as headings};
