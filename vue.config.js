const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true
  },
  pwa: {
    name: 'Ana&Jose 06.05.2023',
    themeColor: '#305137',
    msTileColor: '#ffffff'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/scss/main.scss')]
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'A&J 06.05.2025'
    }
  }
})
