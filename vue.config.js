const defaultSetting = require('./src/settings.js')
const name = defaultSetting.title || 'Vue3 Demo'

const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: name,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: process.env.NODE_ENV === 'production' ? false : 'default',
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: process.env.NODE_ENV !== 'production',
  crossorigin: '',
  integrity: false,
  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': resolve('src'),
        cmp: resolve('src/components')
      }
    }
  },

  chainWebpack (config) {},
  css: {
    // requireModuleExtension: true,
    extract: process.env.NODE_ENV === 'production',
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      css: {},
      sass: {}
    }
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    // disableHostCheck: true,
    /* proxy: {
      [process.env.BASE_API]: {
        target: 'http://some_server_host.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }, */
    compress: true,
    open: true
  }
}
