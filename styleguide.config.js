propsParser: require('react-docgen-typescript').withDefaultConfig([parserOptions]).parse

module.exports = {
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev')
  }

const { createConfig, babel, postcss } = require('webpack-blocks')
module.exports = {
  webpackConfig: createConfig([babel(), postcss()])
}

  