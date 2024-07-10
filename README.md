<h2>
@xiodone/eslint-config
</h2>

## Usage

```bash
  pnpm i @antfu/eslint-config @xiodone/eslint-config -D
```

```ts
// eslint.config.js
import antfu from '@antfu/eslint-config'
import xiodone from '@xiodone/eslint-config'

export default antfu(
  ...xiodone(),
  {
    // Your custom rules
  }
)
```
