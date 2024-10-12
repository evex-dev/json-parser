# json-parser

<center>
  <h2>‼‼ Do not use this in Server-Side ‼‼</h2>
  <p>(If you try to use it by mistake, not works, but it works in a sandboxed worker.)</p>
</center>
<center>
  <h2>‼ Please use this in Client-Side ‼</h2>
</center>

Fastest JSON Parser in JavaScript
Don't use it in a important project.

- faster x5 than `JSON.parse`
- faster x10 than `parse-json`

```bash
npx jsr add @evex/json-parser
pnpx jsr add @evex/json-parser
yarn dlx jsr add @evex/json-parser
bunx jsr add @evex/json-parser
deno add @evex/json-parser
```

```ts
import { JSONParser } from "@evex/json-parser";
console.log(JSONParser(`{ "name": "evex", "age": 11, "likes": ["apple", "banana"], "isMan": true }`));
```
