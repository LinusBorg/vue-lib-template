import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
process.env.NODE_ENV
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// we alias to the lib's source files in dev
			// so we don't need to rebuild the lib over and over again
			'@linusborg/lib':
				process.env.NODE_ENV === 'production'
					? '@linusborg/lib'
					: '@linusborg/lib/src/index.ts',
		},
		dedupe: ['vue'],
	},
	build: {
		// we don't minify so we can look at the bundle ouput. Change if you wanna deploy the playground
		minify: false,
		rollupOptions: {
			// Comment in to move vue out of the bundle - easier to look at the app's bundle content that way.
			// external: ['vue'],
		},
	},
	optimizeDeps: {
		exclude: ['@linusborg/lib'],
	},
})
