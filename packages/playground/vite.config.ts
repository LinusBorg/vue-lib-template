import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
/**
 * @type { import('vite').UserConfig }
 */
export default defineConfig({
	plugins: [vue(), WindiCSS()],
	resolve: {
		alias: {
			'@linusborg/lib': '@linusborg/lib/src/main.ts',
		},
		dedupe: ['vue'],
	},
	optimizeDeps: {
		exclude: ['@linusborg/lib'],
	},
})
