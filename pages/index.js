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

  const handleLocaleSet = event => {
    const lang = event.target.dataset.lang
    setLocale(lang)
  }

  const LanguageSelector = props => {
    const { Ui } = props
    return (
      <div className='w-100 d-flex mt-2 pt-2 justify-content-end'>
        <Ui.Nav.Knapp onClick={handleLocaleSet} data-lang="en" mini disabled={locale==='en'} className='mr-2'>English</Ui.Nav.Knapp>
        <Ui.Nav.Knapp onClick={handleLocaleSet} data-lang="no" mini disabled={locale==='no'} className='mr-2'>Norsk</Ui.Nav.Knapp>
      </div>
    )
  }

  if (!mounted || !Ui) return <div />

  return (
    <Container title={t['app-head-title']} Ui={Ui}>
      <Head>
        <title>{t['app-head-title']}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LanguageSelector Ui={Ui} />
        <Veileder Ui={Ui} t={t} />
      </main>
    </Container>
  )
}

export default Home
