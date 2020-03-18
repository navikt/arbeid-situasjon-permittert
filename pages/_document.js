import Document, { Html, Head, Main, NextScript } from 'next/document'
import '../styles.less'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='no'>
        <Head>
          <link href='images/favicon.ico' rel='icon' type='image/x-icon' />
          <link href='https://www.nav.no/dekoratoren/css/client.css' rel='stylesheet' />
        </Head>
        <body>
          <section id='decorator-header' className='navno-dekorator' role='main' />
          <Main />
          <NextScript />
          <section id='decorator-footer' className='navno-dekorator' role='main' />
          <div id='decorator-env' data-src='https://www.nav.no/dekoratoren/env' />
          <script type='text/javascript' src='https://www.nav.no/dekoratoren/client.js' />
          <style jsx global>{`
            .dekorator-under-arbeid {
              display: none;
            }
          `}
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument
