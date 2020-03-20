import { amplitudeLogger } from '../lib/amplitude-utils'

const LanguageSelector = props => {
  const { Ui, locale, setLocale } = props

  const handleLocaleSet = event => {
    const lang = event.target.dataset.lang
    amplitudeLogger('veileder.language', { lang })
    setLocale(lang)
  }

  return (
    <div className='w-100 d-flex mt-2 pt-2 justify-content-end'>
      <Ui.Nav.Knapp onClick={handleLocaleSet} data-lang="en" mini disabled={locale==='en'} className='mr-2'>English</Ui.Nav.Knapp>
      <Ui.Nav.Knapp onClick={handleLocaleSet} data-lang="nb" mini disabled={locale==='nb'} className='mr-2'>Norsk</Ui.Nav.Knapp>
      <Ui.Nav.Knapp onClick={handleLocaleSet} data-lang="pl" mini disabled={locale==='pl'} className='mr-2'>Polski</Ui.Nav.Knapp>
    </div>
  )
}

export default LanguageSelector
