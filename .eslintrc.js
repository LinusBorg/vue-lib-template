module.exports = {
  root: true,
  extends: ['@linusborg'],
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
      },
    },
  ],
}
