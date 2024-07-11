<h2>@xiodone/eslint-config</h2>

This package is not an ESLint plugin, it is a rule set for configuring [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Install

```bash
  pnpm i eslint @antfu/eslint-config @xiodone/eslint-config -D
```

## Usage

Create eslint.config.js in your project root, for more details of @antfu/eslint-config, please refer to the [documentation](https://github.com/antfu/eslint-config/blob/main/README.md).

```ts
// eslint.config.js
import linter from '@antfu/eslint-config'
import xiodone from '@xiodone/eslint-config'

export default linter(
  ...xiodone(),
  {
    // Your custom rules
  }
)
```
