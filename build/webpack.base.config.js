const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
      '@src': resolve('src'),
      '@root': path.resolve(__dirname, '..'),
      '@public': path.resolve(__dirname, '../public')
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
      },
      {
        test: /\.css$/,
        use: isProd
          ? ExtractTextPlugin.extract({
            use: 'css-loader?minimize',
            fallback: 'vue-style-loader'
          })
          : ['vue-style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      }),
      new ExtractTextPlugin({
        filename: '[name].[contenthash:8].css'
      })
    ]
    : [
      new FriendlyErrorsPlugin()
    ]
}

module.exports = config
