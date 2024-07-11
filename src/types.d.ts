import type antfu from '@antfu/eslint-config'

/**
 * Based on {@link https://github.com/antfu/eslint-config | antfu/eslint-config}
 * @example
 * ```ts
 *  import linter from '@antfu/eslint-config'
 *  import xiodone from '@xiodone/eslint-config'
 *
 *  export default linter(...xiodone())
 * ```
 */
declare global {
  type expose = Parameters<typeof antfu>
}

declare const _default: () => expose

export { _default as default }
