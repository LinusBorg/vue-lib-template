import vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'
import viteWsAlias from '../../config/rollup-plugin-vite-workspaces'

export default <UserConfig>{
  // alias: useAliases
  //   ? {
  //       'vue-monorepo-lib': 'vue-monorepo-lib/src/index.ts',
  //     }
  //   : undefined,
  plugins: [viteWsAlias(), vue()],
  optimizeDeps: {
    exclude: ['postcss', 'autoprefixer', '@tailwindcss/postcss7-compat'],
  },
}
