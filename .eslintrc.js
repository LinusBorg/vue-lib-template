module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.js'],
      env: {
        jest: true,
        browser: true,
      },
    },
  ],
}
