import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Veileder from '../components/veileder'
import '../styles.less'

const Home = (props) => {
  const [mounted, setMounted] = useState(false)
  const [Ui, setUi] = useState(undefined)
  const { locale, t } = props

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
      <Ui.Nav.Panel>
        <main>
          <Veileder Ui={Ui} t={t} locale={locale} />
        </main>
      </Ui.Nav.Panel>
    </Container>
  )
}

export default Home
