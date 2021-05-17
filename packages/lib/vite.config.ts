import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ts from 'rollup-plugin-typescript2'

export default <UserConfig>{
  plugins: [
    vue(),
    {
      apply: 'build',
      ...ts({
        tsconfig: './tsconfig.build.json',
        useTsconfigDeclarationDir: true,
      }),
    },
  ],
  esbuild: false,
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueLibMonorepo',
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        banner: `
        /**
         *  Copyright ${new Date(Date.now()).getFullYear()} Thorsten Luenborg 
         *  @license MIT
        **/
        `,
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
}
