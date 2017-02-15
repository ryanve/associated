# associated

```
npm install associated --save
```

## Features
- Get label(s) for a specified input
- Get form control (input, textarea, select, button) for a specified label
- Get associated form
- Get associated radios

## API
```js
var associated = require('associated')
```

- `$form` refers to a jQuery-wrapped form element
- `$root` refers to a jQuery-wrapped `:root` element
- `$control` refers to a jQuery-wrapped form control: `$input`, `$textarea`, `$select`, or `$button`
- `$label` refers to a jQuery-wrapped label element
- `$labels` refers to a jQuery-wrapped label collection
- `$radio` refers to a jQuery-wrapped radio input
- `$radios` refers to a jQuery-wrapped radio input collection

### `associated.control($label)`
- Get `$control` associated with `$label`

### `associated.label($control)`
- Get the `$label` associated with `$control`

### `associated.labels($control)`
- Get all `$labels` associated with `$control`

### `associated.form($control)`
- Get associated `$form` or else `$root`

### `associated.radios($radio)`
- Get `$radios` associated by `[name]`

## Links
- [`associated` npm](https://www.npmjs.com/package/associated)
- [`associated` tests](https://ryanve.github.io/associated/)
