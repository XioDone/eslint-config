import { copyFile } from 'node:fs/promises'
import path from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    entries: ['src/index'],
    rollup: {
      inlineDependencies: true,
      output: {
        format: 'es',
        entryFileNames: '[name].js',
      },
      resolve: {
        exportConditions: ['node'],
      },
      esbuild: {
        minify: true,
      },
    },
    declaration: false,
    failOnWarn: false,
    hooks: {
      'build:done': generateTypes,
    },
    externals: [
      'fsevents',
      'node:url',
      'node:buffer',
      'node:path',
      'node:child_process',
      'node:process',
      'node:path',
      'node:os',
      'clipboardy',
      'consola',
      'vite',
      'unocss',
    ],
  },
  {
    entries: ['src/index'],
    rollup: {
      inlineDependencies: true,
      output: {
        format: 'cjs',
        entryFileNames: '[name].cjs',
      },
      resolve: {
        exportConditions: ['node'],
      },
      esbuild: {
        minify: true,
      },
    },
    declaration: false,
    failOnWarn: false,
    externals: [
      'fsevents',
      'node:url',
      'node:buffer',
      'node:path',
      'node:child_process',
      'node:process',
      'node:path',
      'node:os',
      'clipboardy',
      'consola',
      'vite',
      'unocss',
    ],
  },
])

function generateTypes() {
  const source = path.join('src', 'types.d.ts')
  const destination = path.join('dist', 'index.d.ts')
  copyFile(source, destination)
}
