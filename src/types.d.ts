import type antfu from '@antfu/eslint-config'

declare global {
  type expose = Parameters<typeof antfu>
}
