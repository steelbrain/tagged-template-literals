Tagged Template Literals
=====================
Tagged Template Literals is a base library to make your packages simpler. See the usage for example usage.

## Installation

```sh
npm install --save tagged-template-literals
```

## API

```js
function taggedTemplateLiterals(
  values: Array<string>,
  strings: Array<string>,
  callback: ?((param: string) => string)
): string

module.exports = taggedTemplateLiterals
```

## Examples
```js
import escape from 'escape-html'
import taggedTemplate from 'tagged-template-literals'

function escapeHTML(strings, ...values) {
  if (!strings && !strings.raw) {
    throw new Error('Only template strings are supported')
  }
  return taggedTemplate(strings, values, escape)
}

const dangerous = '<script></script>'
const escaped = escapeHTML`
  Hello there <div>
    ${dangerous}
  </div>
`)
console.log(escaped === `
  Hello there <div>
    &lt;script&gt;&lt;/script&gt;
  </div>
`) // true
```

## License

This project is licensed under the terms of MIT License, see the LICENSE file for more info
