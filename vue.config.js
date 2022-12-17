const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true
  },
  pwa: {
    name: 'Ana&Jose',
    themeColor: '#305137',
    msTileColor: '#ffffff'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/scss/main.scss')]
    }
  }
})
