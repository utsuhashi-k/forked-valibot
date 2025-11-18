import{a as t,s as c,t as n,q as i}from"./q-dgQLQ9M1.js";import{u as o}from"./q-CyNgVds-.js";import{L as s}from"./q-BuauhHiJ.js";const h=[{text:"Issues",id:"issues",level:1},{text:"Issue info",id:"issue-info",level:2},{text:"Required info",id:"required-info",level:3},{text:"Kind",id:"kind",level:4},{text:"Type",id:"type",level:4},{text:"Input",id:"input",level:4},{text:"Expected",id:"expected",level:4},{text:"Received",id:"received",level:4},{text:"Message",id:"message",level:4},{text:"Optional info",id:"optional-info",level:3},{text:"Requirement",id:"requirement",level:4},{text:"Path",id:"path",level:4},{text:"Issues",id:"issues-1",level:4},{text:"Config",id:"config",level:4},{text:"Formatting",id:"formatting",level:2},{text:"Flatten errors",id:"flatten-errors",level:3}],u={title:"Issues",meta:[{name:"description",content:"When validating unknown data against a schema, Valibot collects detailed information about each issue."}],styles:[],links:[],scripts:[],frontmatter:{contributors:["fabian-hiller","EltonLobo07","BastiDood"]}},k={title:"Issues",description:"When validating unknown data against a schema, Valibot collects detailed information about each issue.",contributors:["fabian-hiller","EltonLobo07","BastiDood"]};function l(a){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",span:"span",...o(),...a.components};return n(i,{children:[n(e.h1,{id:"issues",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#issues",children:n(e.span,{class:"icon icon-link"})}),"Issues"]}),`
`,n(e.p,{children:"When validating unknown data against a schema, Valibot collects information about each issue. If there is at least one issue, these are returned in an array. Each issue provides detailed information for you or your users to fix the problem."}),`
`,n(e.h2,{id:"issue-info",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#issue-info",children:n(e.span,{class:"icon icon-link"})}),"Issue info"]}),`
`,n(e.p,{children:"A single issue conforms to the TypeScript type definition below."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"type"})," ",n(e.span,{class:"token class-name",children:n(e.span,{class:"token maybe-class-name",children:"BaseIssue"})})," ",n(e.span,{class:"token operator",children:"="})," ",n(e.span,{class:"token punctuation",children:"{"}),`
  `,n(e.span,{class:"token comment",children:"// Required info"}),`
  kind`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'schema'"})," ",n(e.span,{class:"token operator",children:"|"})," ",n(e.span,{class:"token string",children:"'validation'"})," ",n(e.span,{class:"token operator",children:"|"})," ",n(e.span,{class:"token string",children:"'transformation'"}),n(e.span,{class:"token punctuation",children:";"}),`
  type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"string"}),n(e.span,{class:"token punctuation",children:";"}),`
  input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"unknown"}),n(e.span,{class:"token punctuation",children:";"}),`
  expected`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"string"})," ",n(e.span,{class:"token operator",children:"|"})," ",n(e.span,{class:"token keyword null nil",children:"null"}),n(e.span,{class:"token punctuation",children:";"}),`
  received`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"string"}),n(e.span,{class:"token punctuation",children:";"}),`
  message`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"string"}),n(e.span,{class:"token punctuation",children:";"}),`

  `,n(e.span,{class:"token comment",children:"// Optional info"}),`
  requirement`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"unknown"}),n(e.span,{class:"token punctuation",children:";"}),`
  path`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token maybe-class-name",children:"IssuePath"}),n(e.span,{class:"token punctuation",children:";"}),`
  issues`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token maybe-class-name",children:"Issues"}),n(e.span,{class:"token punctuation",children:";"}),`
  lang`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"string"}),n(e.span,{class:"token punctuation",children:";"}),`
  abortEarly`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"boolean"}),n(e.span,{class:"token punctuation",children:";"}),`
  abortPipeEarly`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"boolean"}),n(e.span,{class:"token punctuation",children:";"}),`
  skipPipe`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"boolean"}),n(e.span,{class:"token punctuation",children:";"}),`
`,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h3,{id:"required-info",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#required-info",children:n(e.span,{class:"icon icon-link"})}),"Required info"]}),`
`,n(e.p,{children:"Each issue contains the following required information."}),`
`,n(e.h4,{id:"kind",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#kind",children:n(e.span,{class:"icon icon-link"})}),"Kind"]}),`
`,n(e.p,{children:[n(e.code,{children:"kind"})," describes the kind of the problem. If an input does not match the data type, for example a number was passed instead of a string, ",n(e.code,{children:"kind"})," has the value ",n(e.code,{children:"'schema'"}),". In all other cases, the reason is not the data type but the actual content of the data. For example, if a string is invalid because it does not match a regex, ",n(e.code,{children:"kind"})," has the value ",n(e.code,{children:"'validation'"}),"."]}),`
`,n(e.h4,{id:"type",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#type",children:n(e.span,{class:"icon icon-link"})}),"Type"]}),`
`,n(e.p,{children:[n(e.code,{children:"type"})," describes which function did the validation. If the schema function ",n(s,{href:"/api/array/",children:n(e.code,{children:"array"})})," detects that the input is not an array, ",n(e.code,{children:"type"})," has the value ",n(e.code,{children:"'array'"}),". If the ",n(s,{href:"/api/minLength/",children:n(e.code,{children:"minLength"})})," validation function detects that an array is too short, ",n(e.code,{children:"type"})," has the value ",n(e.code,{children:"'min_length'"}),"."]}),`
`,n(e.h4,{id:"input",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#input",children:n(e.span,{class:"icon icon-link"})}),"Input"]}),`
`,n(e.p,{children:[n(e.code,{children:"input"})," contains the input data where the issue was found. For complex data, for example objects, ",n(e.code,{children:"input"})," contains the value of the respective key that does not match the schema."]}),`
`,n(e.h4,{id:"expected",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#expected",children:n(e.span,{class:"icon icon-link"})}),"Expected"]}),`
`,n(e.p,{children:[n(e.code,{children:"expected"})," is a language-neutral string that describes the data property that was expected. It can be used to create useful error messages. If your users aren't developers, you can replace the language-neutral symbols with language-specific words."]}),`
`,n(e.h4,{id:"received",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#received",children:n(e.span,{class:"icon icon-link"})}),"Received"]}),`
`,n(e.p,{children:[n(e.code,{children:"received"})," is a language-neutral string that describes the data property that was received. It can be used to create useful error messages. If your users aren't developers, you can replace the language-neutral symbols with language-specific words."]}),`
`,n(e.h4,{id:"message",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#message",children:n(e.span,{class:"icon icon-link"})}),"Message"]}),`
`,n(e.p,{children:[n(e.code,{children:"message"})," contains a human-understandable error message that can be fully customized as described in our ",n(s,{href:"/guides/quick-start/#error-messages",children:"quick start"})," and ",n(s,{href:"/guides/internationalization/",children:"internationalization"})," guide."]}),`
`,n(e.h3,{id:"optional-info",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#optional-info",children:n(e.span,{class:"icon icon-link"})}),"Optional info"]}),`
`,n(e.p,{children:"Some issues contain further optional information."}),`
`,n(e.h4,{id:"requirement",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#requirement",children:n(e.span,{class:"icon icon-link"})}),"Requirement"]}),`
`,n(e.p,{children:[n(e.code,{children:"requirement"})," can contain further validation information. For example, if the ",n(s,{href:"/api/minLength/",children:n(e.code,{children:"minLength"})})," validation function detects that a string is too short, ",n(e.code,{children:"requirement"})," contains the minimum length that the string should have."]}),`
`,n(e.h4,{id:"path",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#path",children:n(e.span,{class:"icon icon-link"})}),"Path"]}),`
`,n(e.p,{children:[n(e.code,{children:"path"})," is an array of objects that describes where an issue is located within complex data. Each path item contains the following information."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:["The ",n(e.code,{children:"input"})," of a path item may differ from the ",n(e.code,{children:"input"})," of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account."]}),`
`]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword",children:"type"})," ",n(e.span,{class:"token class-name",children:n(e.span,{class:"token maybe-class-name",children:"PathItem"})})," ",n(e.span,{class:"token operator",children:"="})," ",n(e.span,{class:"token punctuation",children:"{"}),`
  type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"string"}),n(e.span,{class:"token punctuation",children:";"}),`
  origin`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'key'"})," ",n(e.span,{class:"token operator",children:"|"})," ",n(e.span,{class:"token string",children:"'value'"}),n(e.span,{class:"token punctuation",children:";"}),`
  input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"unknown"}),n(e.span,{class:"token punctuation",children:";"}),`
  key`,n(e.span,{class:"token operator",children:"?"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"unknown"}),n(e.span,{class:"token punctuation",children:";"}),`
  value`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token builtin",children:"unknown"}),n(e.span,{class:"token punctuation",children:";"}),`
`,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.p,{children:"For example, you can use the following code to create a dot path."}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword module",children:"import"})," ",n(e.span,{class:"token imports",children:[n(e.span,{class:"token operator",children:"*"})," ",n(e.span,{class:"token keyword module",children:"as"})," v"]})," ",n(e.span,{class:"token keyword module",children:"from"})," ",n(e.span,{class:"token string",children:"'valibot'"}),n(e.span,{class:"token punctuation",children:";"}),`

`,n(e.span,{class:"token keyword",children:"const"})," dotPath ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"getDotPath"}),n(e.span,{class:"token punctuation",children:"("}),"issue",n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h4,{id:"issues-1",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#issues-1",children:n(e.span,{class:"icon icon-link"})}),"Issues"]}),`
`,n(e.p,{children:[n(e.code,{children:"issues"})," currently only occur when using ",n(s,{href:"/api/union/",children:n(e.code,{children:"union"})})," and contains all issues of the schemas of an union type."]}),`
`,n(e.h4,{id:"config",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#config",children:n(e.span,{class:"icon icon-link"})}),"Config"]}),`
`,n(e.p,{children:[n(e.code,{children:"lang"})," can be used as part of our ",n(s,{href:"/guides/internationalization/",children:"i18n feature"})," to define the required language. ",n(e.code,{children:"abortEarly"})," and ",n(e.code,{children:"abortPipeEarly"})," gives you an info that the validation was aborted prematurely. You can find more info about this in the ",n(s,{href:"/guides/parse-data/#configuration",children:"parse data"})," guide. These are all configurations that you can control yourself."]}),`
`,n(e.h2,{id:"formatting",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#formatting",children:n(e.span,{class:"icon icon-link"})}),"Formatting"]}),`
`,n(e.p,{children:"For common use cases such as form validation, Valibot includes small built-in functions for formatting issues. However, once you understand how they work, you can easily format them yourself and put them in the right form for your use case."}),`
`,n(e.h3,{id:"flatten-errors",children:[n(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#flatten-errors",children:n(e.span,{class:"icon icon-link"})}),"Flatten errors"]}),`
`,n(e.p,{children:["If you are only interested in the error messages of each issue to show them to your users, you can convert an array of issues to a flat object with ",n(s,{href:"/api/flatten/",children:n(e.code,{children:"flatten"})}),". Below is an example."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token keyword module",children:"import"})," ",n(e.span,{class:"token imports",children:[n(e.span,{class:"token operator",children:"*"})," ",n(e.span,{class:"token keyword module",children:"as"})," v"]})," ",n(e.span,{class:"token keyword module",children:"from"})," ",n(e.span,{class:"token string",children:"'valibot'"}),n(e.span,{class:"token punctuation",children:";"}),`

`,n(e.span,{class:"token keyword",children:"const"})," ",n(e.span,{class:"token maybe-class-name",children:"ObjectSchema"})," ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"object"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:"{"}),`
  foo`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:`'Value of "foo" is missing.'`}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  bar`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"object"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token punctuation",children:"{"}),`
    baz`,n(e.span,{class:"token operator",children:":"})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"string"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token string",children:`'Value of "bar.baz" is missing.'`}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:","}),`
`,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`

`,n(e.span,{class:"token keyword",children:"const"})," result ",n(e.span,{class:"token operator",children:"="})," v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"safeParse"}),n(e.span,{class:"token punctuation",children:"("}),n(e.span,{class:"token maybe-class-name",children:"ObjectSchema"}),n(e.span,{class:"token punctuation",children:","})," ",n(e.span,{class:"token punctuation",children:"{"})," bar",n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),n(e.span,{class:"token punctuation",children:"}"})," ",n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`

`,n(e.span,{class:"token keyword control-flow",children:"if"})," ",n(e.span,{class:"token punctuation",children:"("}),"result",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"issues"}),n(e.span,{class:"token punctuation",children:")"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
  `,n(e.span,{class:"token console class-name",children:"console"}),n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token method function property-access",children:"log"}),n(e.span,{class:"token punctuation",children:"("}),"v",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token generic-function",children:[n(e.span,{class:"token function",children:"flatten"}),n(e.span,{class:"token generic class-name",children:[n(e.span,{class:"token operator",children:"<"}),n(e.span,{class:"token keyword",children:"typeof"})," ",n(e.span,{class:"token maybe-class-name",children:"ObjectSchema"}),n(e.span,{class:"token operator",children:">"})]})]}),n(e.span,{class:"token punctuation",children:"("}),"result",n(e.span,{class:"token punctuation",children:"."}),n(e.span,{class:"token property-access",children:"issues"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:")"}),n(e.span,{class:"token punctuation",children:";"}),`
`,n(e.span,{class:"token punctuation",children:"}"}),`
`]})}),`
`,n(e.p,{children:["The ",n(e.code,{children:"result"})," returned in the code sample above this text contains the following issues."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token punctuation",children:"["}),`
  `,n(e.span,{class:"token punctuation",children:"{"}),`
    kind`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'schema'"}),n(e.span,{class:"token punctuation",children:","}),`
    type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'string'"}),n(e.span,{class:"token punctuation",children:","}),`
    input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token keyword nil",children:"undefined"}),n(e.span,{class:"token punctuation",children:","}),`
    expected`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'string'"}),n(e.span,{class:"token punctuation",children:","}),`
    received`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'undefined'"}),n(e.span,{class:"token punctuation",children:","}),`
    message`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:`'Value of "foo" is missing.'`}),n(e.span,{class:"token punctuation",children:","}),`
    path`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"["}),`
      `,n(e.span,{class:"token punctuation",children:"{"}),`
        type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'object'"}),n(e.span,{class:"token punctuation",children:","}),`
        origin`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'value'"}),n(e.span,{class:"token punctuation",children:","}),`
        input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
          bar`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
        `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
        key`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'foo'"}),n(e.span,{class:"token punctuation",children:","}),`
        value`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token keyword nil",children:"undefined"}),n(e.span,{class:"token punctuation",children:","}),`
      `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
    `,n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"{"}),`
    kind`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'schema'"}),n(e.span,{class:"token punctuation",children:","}),`
    type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'string'"}),n(e.span,{class:"token punctuation",children:","}),`
    input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token keyword nil",children:"undefined"}),n(e.span,{class:"token punctuation",children:","}),`
    expected`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'string'"}),n(e.span,{class:"token punctuation",children:","}),`
    received`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'undefined'"}),n(e.span,{class:"token punctuation",children:","}),`
    message`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:`'Value of "bar.baz" is missing.'`}),n(e.span,{class:"token punctuation",children:","}),`
    path`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"["}),`
      `,n(e.span,{class:"token punctuation",children:"{"}),`
        type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'object'"}),n(e.span,{class:"token punctuation",children:","}),`
        origin`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'value'"}),n(e.span,{class:"token punctuation",children:","}),`
        input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
          bar`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
        `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
        key`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'bar'"}),n(e.span,{class:"token punctuation",children:","}),`
        value`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
      `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
      `,n(e.span,{class:"token punctuation",children:"{"}),`
        type`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'object'"}),n(e.span,{class:"token punctuation",children:","}),`
        origin`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'value'"}),n(e.span,{class:"token punctuation",children:","}),`
        input`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
        key`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token string",children:"'baz'"}),n(e.span,{class:"token punctuation",children:","}),`
        value`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token keyword nil",children:"undefined"}),n(e.span,{class:"token punctuation",children:","}),`
      `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
    `,n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
`,n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})}),`
`,n(e.p,{children:["However, with the help of ",n(s,{href:"/api/flatten/",children:n(e.code,{children:"flatten"})})," the issues were converted to the following object."]}),`
`,n(e.pre,{class:"language-ts",children:n(e.code,{class:"language-ts",children:[n(e.span,{class:"token punctuation",children:"{"}),`
  nested`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"{"}),`
    foo`,n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"["}),n(e.span,{class:"token string",children:`'Value of "foo" is missing.'`}),n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:","}),`
    `,n(e.span,{class:"token string-property property",children:"'bar.baz'"}),n(e.span,{class:"token operator",children:":"})," ",n(e.span,{class:"token punctuation",children:"["}),n(e.span,{class:"token string",children:`'Value of "bar.baz" is missing.'`}),n(e.span,{class:"token punctuation",children:"]"}),n(e.span,{class:"token punctuation",children:","}),`
  `,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:","}),`
`,n(e.span,{class:"token punctuation",children:"}"}),n(e.span,{class:"token punctuation",children:";"}),`
`]})})]})}const f=(a={})=>{const e=t(c,{children:t(l,a,3,null)},3,"DPzPMbfE");return typeof MDXLayout=="function"?n(MDXLayout,{children:e}):e};export{f as default,k as frontmatter,u as head,h as headings};
