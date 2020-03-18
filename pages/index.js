import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Container from '../components/container'
import '../styles.less'

const Veileder = dynamic(
  () => import('../components/veileder'),
  { ssr: false }
)

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
      <main>
        <Veileder Ui={Ui} t={t} locale={locale} />
      </main>
    </Container>
  )
}

export default Home
