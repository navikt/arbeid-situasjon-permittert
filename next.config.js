const withLess = require('@zeit/next-less')

module.exports = withLess( {
    target: 'server',
    exportTrailingSlash: true,
    assetPrefix: process.env.BASE_PATH || ''
  })

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = (file) => {}
}



