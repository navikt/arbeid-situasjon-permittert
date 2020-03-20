import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Container from '../components/container'
import '../styles.less'

const lc = {
  en: require('../locale/en/common').default,
  no: require('../locale/no/common').default,
  pl: require('../locale/pl/common').default
}

const Veileder = dynamic(
  () => import('../components/veileder'),
  { ssr: false }
)

const LanguageSelector = dynamic(
  () => import('../components/language-selector'),
  { ssr: false }
)

const Home = (props) => {
  const [mounted, setMounted] = useState(false)
  const [Ui, setUi] = useState(undefined)
  const [locale, setLocale] = useState('no')
  let t = lc[locale]

  useEffect(() => {
    if (!mounted) {
      const Ui = require('eessi-pensjon-ui').default
      setUi(Ui)
      setMounted(true)
    }
  }, [])

  if (!mounted || !Ui) return <div />

  return (
    <Container title={t['app-head-title']} Ui={Ui}>
      <Head>
        <title>{t['app-head-title']}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LanguageSelector Ui={Ui} locale={locale} setLocale={setLocale} />
        <Veileder Ui={Ui} t={t} />
      </main>
    </Container>
  )
}

export default Home
