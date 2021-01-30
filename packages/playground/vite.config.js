import vue from '@vitejs/plugin-vue'

const useAliases = !process.env.VITE_SKIP_WS_ALIAS

/**
 * @type { import('vite').UserConfig }
 */
export default {
  alias: useAliases
    ? {
        'vue-monorepo-lib': 'vue-monorepo-lib/src/index.ts',
      }
    : undefined,
  plugins: [vue()],
  optimizeDeps: {
    link: ['vue-monorepo-lib'],
    exclude: ['postcss', 'autoprefixer', '@tailwindcss/postcss7-compat'],
  },
}
