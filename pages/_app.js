import React from 'react'
import App from 'next/app'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const lc = {
      en: require('../locale/en/common').default,
      nb: require('../locale/nb/common').default
    }
    const locale = 'nb'
    return (
      <Component {...pageProps} locale={locale} t={lc[locale]} />
    )
  }
}

export default MyApp
