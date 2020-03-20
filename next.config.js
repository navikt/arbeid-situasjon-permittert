const withLess = require('@zeit/next-less')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = withLess( {
    target: 'server',
    exportTrailingSlash: true,
    assetPrefix: process.env.BASE_PATH || '',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      config.plugins.push(new MomentLocalesPlugin({
        localesToKeep: ['nb', 'pl'],
    }))
      return config
    }
  })

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = (file) => {}
}



