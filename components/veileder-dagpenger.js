import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.dagpenger.click')
  window.location = 'https://www.nav.no/soknader/nb/person/arbeid/dagpenger'
}

const SokNa = props => {
  const { Ui, t } = props
  return (
    <>
      <Ui.Nav.Element className='mb-2'>
        {t['veileder-dagpenger-now-title']}
      </Ui.Nav.Element>
      <Ui.Nav.Normaltekst className='mb-2'>
        {t['veileder-dagpenger-now-attachements-title']}
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Normaltekst className='mb-2'>
        {t['veileder-dagpenger-now-attachements-description']}
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-dagpenger-now-button']}
      </Ui.Nav.Knapp>
    </>
  )
}

const Dagpenger = props => {
  const { Ui, t } = props

  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        {t['veileder-dagpenger-title']}
      </Ui.Nav.Undertittel>
      <SokNa Ui={Ui} t={t} />
    </div>
  )
}

export default Dagpenger
