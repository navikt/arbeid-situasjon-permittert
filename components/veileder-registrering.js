import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.registrering.click')
  window.location = 'https://arbeidssokerregistrering.nav.no'
}

const RegistrerDegNa = props => {
  const { Ui, t } = props
  return (
    <>
      <Ui.Nav.Element className='mb-2'>
        {t['veileder-registrering-now-title']}
      </Ui.Nav.Element>
      <Ui.Nav.Normaltekst className='mb-2'>
        {t['veileder-registrering-now-description']}
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-registrering-now-button']}
      </Ui.Nav.Knapp>
    </>
  )
}

const Registrering = props => {
  const { Ui, t } = props

  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        {t['veileder-registrering-title']}
      </Ui.Nav.Undertittel>
      <RegistrerDegNa Ui={Ui} t={t} />
    </div>
  )
}

export default Registrering
