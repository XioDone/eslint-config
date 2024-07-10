import antfu from '@antfu/eslint-config'
import xiodone from './src'

const config = antfu(
  ...xiodone(),
)

export default config
