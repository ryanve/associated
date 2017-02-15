# associated

```
npm install associated --save
```

## Features
- Get label(s) for a specified input
- Get form control (input, textarea, select, button) for a specified label

## API
```js
var associated = require('associated')
```

- `$control` refers to a jQuery-wrapped form control: `$input`, `$textarea`, `$select`, or `$button`
- `$label` refers to a jQuery-wrapped single label element
- `$labels` refers to a jQuery-wrapped label collection

### `associated.control($label)`
- Get `$control` associated with `$label`

### `associated.label($control)`
- Get the `$label` associated with `$control`

### `associated.labels($control)`
- Get all `$labels` associated with `$control`

## Links
- [`associated` npm](https://www.npmjs.com/package/associated)
- [`associated` tests](https://ryanve.github.io/associated/)
