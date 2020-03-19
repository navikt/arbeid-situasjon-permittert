import React from 'react'
import App from 'next/app'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const lc = {
      en: require('../locale/en/common').default,
      no: require('../locale/no/common').default
    }
    const locale = 'no'
    return (
      <Component {...pageProps} locale={locale} t={lc[locale]} />
    )
  }
}

export default MyApp
