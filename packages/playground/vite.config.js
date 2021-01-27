import vue from '@vitejs/plugin-vue'

/**
 * @type { import('vite').UserConfig }
 */
export default {
  alias: {
    'vue-monorepo-lib': 'vue-monorepo-lib/src/index.ts',
  },
  plugins: [vue()],
  optimizeDeps: {
    link: ['vue-monorepo-lib'],
    exclude: ['postcss', 'autoprefixer', '@tailwindcss/postcss7-compat'],
  },
}
