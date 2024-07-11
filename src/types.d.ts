import type antfu from '@antfu/eslint-config'

declare global {
  type Expose = Parameters<typeof antfu>
}

/**
 * Based on {@link https://github.com/antfu/eslint-config | antfu/eslint-config}
 * @example
 * ```ts
 *  import linter from '@antfu/eslint-config'
 *  import xiodone from '@xiodone/eslint-config'
 *
 *  export default linter(
 *    ...xiodone(),
 *    {
 *      // Your custom rules
 *    }
 *  )
 * ```
 */
declare const _default: () => Expose

export { _default as default }
