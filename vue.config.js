// vue.config.js file to be place in the root of your repository
module.exports = {
  // https://cli.vuejs.org/guide/deployment.html#github-pages
  publicPath: process.env.NODE_ENV === 'production' ?
    '/portfolio/' : ''
}