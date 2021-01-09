import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const isEs5 = process.env.VITE_ES5_BUILD === '1'

import path from 'path'
module.exports = defineConfig({
  plugins: [vue()],
  build: {
    // target: isEs5 ? 'es2016' : 'modules',
    // outDir: isEs5 ? 'dist/es5' : 'dist/',
    lib: {
      entry: path.join(__dirname, 'src/index.ts'),
      name: 'VueMonorepoLib',
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
    },
  },
})
