import { Head } from 'next/document'

const NavDekoratorHeader = () => {
  return (
    <Head>
      <script id="navnoScr" loginurl="https://tjenester.nav.no/dittnav/oversikt"
      logouturl="https://loginservice.nav.no/slo" authserviceurl="https://tjenester.nav.no/innloggingslinje-api/auth"
      src="https://appres.nav.no/_public/beta.nav.no/built-navno/js/navno/navno-url.js?_ts=165c8b6dd00" />
    <script
      src="https://appres.nav.no/_public/appressurser/built-appres-v4/js/innloggingslinjen.min.js?_ts=165c88499d0" />
    <script type="text/javascript" id="google-tag-manager-props" innholdsvisningssider="" seksjonssider=""
      subseksjonssider=""
      src="https://appres.nav.no/_public/beta.nav.no/built-navno/js/navno/google-tag-manager.js?_ts=1695848b5d0" />
      <script
      src="https://appres.nav.no/_public/appressurser/built-appres-v4/js/feature-detection-bundle.min.js?_ts=165c8849db8" />
    <script src="https://appres.nav.no/_public/appressurser/built-appres-v4/js/app.min.js?_ts=165c88499d0" />
    <link
      href="https://appres.nav.no/_public/appressurser/built-appres-v4/styles/css/varselmenu-decorator-v4.css?_ts=165c884a970"
      rel="stylesheet" />
      <link href="https://appres.nav.no/_public/shared/bilder/favicon.ico?_ts=151292348c8" rel="icon" type="image/x-icon" />
      <link href="https://appres.nav.no/_public/shared/bilder/favicon.ico?_ts=151292348c8" rel="shortcut icon"
      type="image/x-icon" />
    <link
      href="https://appres.nav.no/_public/appressurser/built-appres-v4/styles/css/app-decorator-v4.css?_ts=16b31863740"
      rel="stylesheet" />
    </Head>
  )
}

export default NavDekoratorHeader