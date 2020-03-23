import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import { Knapp } from 'nav-frontend-knapper'
import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.arbeidsplassen.click')
  window.location = 'https://arbeidsplassen.nav.no'
}

const CV = props => {
  const { t } = props
  return (
    <div className='mb-2'>
      <Undertittel className='mb-2'>
        {t['veileder-cv-title']}
      </Undertittel>
      <Normaltekst className='mb-2'>
        {t['veileder-cv-description']}
      </Normaltekst>
      <Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-cv-button']}
      </Knapp>
    </div>
  )
}

export default CV
