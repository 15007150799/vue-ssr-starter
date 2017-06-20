const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, '..', dir)

const config = {
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].c.js'
  },
  resolve: {
    modules: [resolve('src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        exclude: /\.(html|js|vue|css|json)$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd ? [] : [new FriendlyErrorsPlugin()]
}

module.exports = config
