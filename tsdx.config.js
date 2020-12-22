const autoprefixer = require('autoprefixer')
const postcss = require('rollup-plugin-postcss')
const vue = require('rollup-plugin-vue')

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
      })
    )
    config.plugins.push(vue())

    // console.log(config.plugins.map(plugin => plugin.name).join(','))
    return config // always return a config.
  },
}
