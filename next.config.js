const withLess = require('@zeit/next-less')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const NavFrontendModuler = [
  'nav-frontend-core',
  'nav-frontend-js-utils',
  'nav-frontend-knapper',
  'nav-frontend-knapper-style',
  'nav-frontend-lenker',
  'nav-frontend-lenker-style',
  'nav-frontend-paneler',
  'nav-frontend-paneler-style',
  'nav-frontend-skjema',
  'nav-frontend-skjema-style',
  'nav-frontend-stegindikator',
  'nav-frontend-stegindikator-style',
  'nav-frontend-typografi',
  'nav-frontend-typografi-style'
]
const withTranspileModules = require('next-transpile-modules')(NavFrontendModuler)

module.exports = withTranspileModules(withLess( {
    target: 'server',
    exportTrailingSlash: true,
    assetPrefix: process.env.BASE_PATH || '',
    webpack: (config, { webpack }) => {
      config.plugins.push(new MomentLocalesPlugin({
        localesToKeep: ['nb', 'pl'],
    }))
      return config
    }
  }))
