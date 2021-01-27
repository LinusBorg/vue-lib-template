import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ts from 'rollup-plugin-typescript2'

import path from 'path'
export default defineConfig({
  plugins: [
    vue(),
    ts({
      tsconfig: path.join(process.cwd(), 'tsconfig.build.json'),
      useTsconfigDeclarationDir: true,
    }),
  ],
  esbuild: false,
  build: {
    lib: {
      entry: path.join(__dirname, 'src/index.ts'),
      name: 'VueMonorepoLib',
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
