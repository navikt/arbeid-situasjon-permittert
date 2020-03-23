import { Knapp } from 'nav-frontend-knapper'
import { amplitudeLogger } from '../lib/amplitude-utils'

const LanguageSelector = props => {
  const { locale, setLocale } = props

  const handleLocaleSet = event => {
    const lang = event.target.dataset.lang
    amplitudeLogger('veileder.language', { lang })
    setLocale(lang)
  }

  return (
    <div className='w-100 d-flex mt-2 pt-2 justify-content-end'>
      <Knapp onClick={handleLocaleSet} data-lang="en" mini disabled={locale==='en'} className='mr-2'>English</Knapp>
      <Knapp onClick={handleLocaleSet} data-lang="nb" mini disabled={locale==='nb'} className='mr-2'>Norsk</Knapp>
      <Knapp onClick={handleLocaleSet} data-lang="pl" mini disabled={locale==='pl'} className='mr-2'>Polski</Knapp>
    </div>
  )
}

export default LanguageSelector
