# isRequired

Throws an error when an expected parameter is not defined.

## Installing

```bash
npm i @gabrielrufino/is-required
```

## Arguments

```js
import { isRequired } from '@gabrielrufino/is-required'

function add(
  a = isRequired({ param: 'a' }),
  b = isRequired({ param: 'b' })
) {
  return a + b
}

add(1, 1) // Returns 2

add() // Throws IsRequiredError

add(1) // Throws IsRequiredError
```

## Destructuring assignment

```js
import { isRequired } from '@gabrielrufino/is-required'

const object = {
  a: 1
}

const {
  a = isRequired({ param: 'a' })
} = object

console.log(a) // 1

const {
  b = isRequired({ param: 'b' })
} = object // Throws IsRequiredError
```
