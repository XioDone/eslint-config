/**
 * Based on {@link https://github.com/antfu/eslint-config | antfu/eslint-config}
 * @example
 * ```ts
 *  import antfu from '@antfu/eslint-config'
 *  import xiodone from '@xiodone/eslint-config'
 *
 *  export default antfu(...xiodone())
 * ```
 */

export default (): expose => [
  {
    unocss: true,
    ignores: [],
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'no-console': 'off',
      'array-callback-return': 0,
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    },
  },
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'style/quotes': ['error', 'single', { avoidEscape: true }],
      'style/arrow-parens': ['error', 'as-needed'],
    },
  },
  {
    rules: {
      'ts/no-unsafe-function-type': 0,
    },
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
    },
  },
  {
    rules: {
      'jsdoc/no-defaults': 'off',
      'jsdoc/require-returns-description': 'off',
    },
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
]
