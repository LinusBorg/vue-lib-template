import dts from 'rollup-plugin-dts'

/**
 * @type [import('rollup').RollupOptions]
 */
export default {
  input: './types/main.d.ts',
  plugins: [dts()],
  output: {
    file: './dist/index.d.ts',
    format: 'es',
  },
}
