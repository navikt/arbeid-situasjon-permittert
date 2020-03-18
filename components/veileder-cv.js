import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.arbeidsplassen.click')
  window.location = 'https://arbeidsplassen.nav.no'
}

const CV = props => {
  const { Ui } = props
  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        CV og jobbprofil
      </Ui.Nav.Undertittel>
      <Ui.Nav.Normaltekst className='mb-2'>
        Du bør opprette CV og jobbprofil på arbeidsplassen slik at du kan ta på deg oppdrag i perioden du er permittert.
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk} className='mb-2'>
        Opprett CV og jobbprofil
      </Ui.Nav.Knapp>
    </div>
  )
}

export default CV
