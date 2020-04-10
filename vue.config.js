// vue.config.js file to be place in the root of your repository
module.exports = {
  // https://cli.vuejs.org/guide/deployment.html#github-pages
  publicPath: process.env.NODE_ENV === 'production' ?
    '/portfolio/' : '',

  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        loader: "raw-loader"
      }]
    }
  },
  // https://github.com/vuejs-templates/webpack/issues/1205
  // allow remote raspberry pi access
  devServer: {
    disableHostCheck: true
  }
}