module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ],
  cssModules: {
    localIdentName: isProd ? '[hash:base64]' : '[path][name]---[local]---[hash:base64:5]',
    camelCase: true
  }
}
