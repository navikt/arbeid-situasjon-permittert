import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.arbeidsplassen.click')
  window.location = 'https://arbeidsplassen.nav.no'
}

const CV = props => {
  const { Ui, t } = props
  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        {t['veileder-cv-title']}
      </Ui.Nav.Undertittel>
      <Ui.Nav.Normaltekst className='mb-2'>
        {t['veileder-cv-description']}
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-cv-button']}
      </Ui.Nav.Knapp>
    </div>
  )
}

export default CV
