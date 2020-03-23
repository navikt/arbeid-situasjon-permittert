import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi'
import { Knapp } from 'nav-frontend-knapper'
import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.registrering.click')
  window.location = 'https://arbeidssokerregistrering.nav.no'
}

const RegistrerDegNa = props => {
  const { t } = props
  return (
    <>
      <Element className='mb-2'>
        {t['veileder-registrering-now-title']}
      </Element>
      <Normaltekst className='mb-2'>
        {t['veileder-registrering-now-description']}
      </Normaltekst>
      <Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-registrering-now-button']}
      </Knapp>
    </>
  )
}

const Registrering = props => {
  const { t } = props

  return (
    <div className='mb-2'>
      <Undertittel className='mb-2'>
        {t['veileder-registrering-title']}
      </Undertittel>
      <RegistrerDegNa t={t} />
    </div>
  )
}

export default Registrering
