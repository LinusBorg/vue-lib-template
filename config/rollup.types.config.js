import dts from 'rollup-plugin-dts'

/**
 * @type [import('rollup').RollupOptions]
 */
export default {
  input: './types/index.d.ts',
  plugins: [dts()],
  output: {
    file: './dist/index.d.ts',
    format: 'es',
  },
}
