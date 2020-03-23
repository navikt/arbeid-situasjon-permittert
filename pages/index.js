import { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Container from '../components/container'
import '../styles.less'

const lc = {
  en: require('../locale/en/common').default,
  nb: require('../locale/nb/common').default,
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
  const [locale, setLocale] = useState('nb')
  const t = lc[locale]

  return (
    <Container title={t['app-head-title']}>
      <Head>
        <title>{t['app-head-title']}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LanguageSelector locale={locale} setLocale={setLocale} />
        <Veileder t={t} locale={locale} />
      </main>
    </Container>
  )
}

export default Home
