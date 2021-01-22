import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
//import commonjs from '@rollup/plugin-commonjs'

const cwd = process.cwd()

/**
 * @type [import('rollup').RollupOptions]
 */
export default [
  {
    input: './src/index.ts',
    output: {
      file: './types/index.js',
      format: 'es',
    },

    external: ['vue'],
    plugins: [
      // commonjs(),
      vue(),
      ts({
        tsconfig: './tsconfig.build.json',
      }),
      postcss(),
    ],
  },
  {
    input: './types/index.d.ts',
    plugins: [dts()],
    output: {
      file: './dist/index.d.ts',
      format: 'es',
    },
  },
]
