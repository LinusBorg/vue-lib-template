module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
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
