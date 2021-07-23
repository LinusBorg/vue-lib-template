import type { Config } from '@jest/types'

const esModules = ['lodash-es'].join('|')

const config: Config.InitialOptions = {
  rootDir: process.cwd(),
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\js$': 'esbuild-jest',
    '^.+\\ts$': 'esbuild-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`,
    '\\.pnp\\.[^\\/]+$',
  ],
}

export default config
