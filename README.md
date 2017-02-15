# associated

```
npm install associated --save
```

```js
var associated = require('associated')
```

## API

- `$control` refers to a jQuery-wrapped form control: `$input`, `$textarea`, `$select`, or `$button`
- `$label` refers to a jQuery-wrapped single label element
- `$labels` refers to a jQuery-wrapped label collection

### `associated.control($label)`
- Get `$control` associated with `$label`

### `associated.label($control)`
- Get the `$label` associated with `$control`

### `associated.labels($control)`
- Get an `$labels` associated with `$control`

## Links
- [`associated` npm](https://www.npmjs.com/package/associated)
- [`associated` tests](https://ryanve.github.io/associated/)
