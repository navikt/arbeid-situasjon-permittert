import Document, { Html, Head, Main, NextScript } from 'next/document'
import NavHead from '../components/nav-dekorator-head'
import NavMenu from '../components/nav-dekorator-menu'
import NavFot from '../components/nav-dekorator-fot'
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
          <NavHead />
        </Head>
        <body>
          <NavMenu />
          <Main />
          <NextScript />
          <style jsx global>{`
            #login.knapp.btn-auth.btn-login,
            #logout.knapp.btn-auth.btn-logout {
              display: initial;
              min-height: 25px !important;
            }
            .vergic-container {
              vertical-align: middle;
            }
          `}
          </style>
          <NavFot />
        </body>
      </Html>
    )
  }
}

export default MyDocument
