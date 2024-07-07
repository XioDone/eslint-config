/**
 * 
 * History file
 * 
 */

module.exports = {
  extends: '@antfu',
  rules: {
    'no-console': 'off',
    'curly': ['error', 'all'],
    'arrow-parens': ['error', 'as-needed'],
    'array-callback-return': 0,
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    // typescript
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }], // 单引号，允许反义
    // vue
    'vue/attribute-hyphenation': ['warn', 'never', { ignore: ['custom-prop'] }], // props attrs
    'vue/v-on-event-hyphenation': ['warn', 'never', { ignore: ['custom - event'] }], // v-on
  },
}

// {
// "@typescript-eslint/comma-dangle": [
//   "error",
//   "only-multiline"
// ],
// }
