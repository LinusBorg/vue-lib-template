import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@linusborg/vue-teleport-plus':
        '@linusborg/vue-teleport-plus/src/index.ts',
    },
    dedupe: ['vue'],
  },
  optimizeDeps: {
    exclude: [
      '@linusborg/vue-teleport-plus',
      'postcss',
      'autoprefixer',
      '@tailwindcss/postcss7-compat',
    ],
    link: ['@linusborg/vue-teleport-plus'],
  },
}
