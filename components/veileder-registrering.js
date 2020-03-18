import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.registrering.click')
  window.location = 'https://arbeidssokerregistrering.nav.no'
}

const RegistrerDegNa = props => {
  const { Ui } = props
  return (
    <>
      <Ui.Nav.Element className='mb-2'>
        Du må registrere deg som arbeidssøker samtidig som du søker om dagpenger.
      </Ui.Nav.Element>
      <Ui.Nav.Normaltekst className='mb-2'>
        Dette gjelder også når du er permittert.
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk} className='mb-2'>
        Registrer deg som arbeidssøker.
      </Ui.Nav.Knapp>
    </>
  )
}

const Registrering = props => {
  const { Ui } = props

  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        Arbeidssøkerregistrering
      </Ui.Nav.Undertittel>
      <RegistrerDegNa Ui={Ui} />
    </div>
  )
}

export default Registrering
