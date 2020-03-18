import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.dagpenger.click')
  window.location = 'https://www.nav.no/soknader/nb/person/arbeid/dagpenger'
}

const SokNa = props => {
  const { Ui } = props
  return (
    <>
      <Ui.Nav.Element className='mb-2'>
        Du bør søke om dagpenger med en gang du har mottatt permitteringsvarselet.
      </Ui.Nav.Element>
      <Ui.Nav.Normaltekst className='mb-2'>
        Som vedlegg til dagpengesøknaden må du ha et permitteringsvarsel som inneholder:
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Normaltekst className='mb-2'>
        Informasjon om permitteringens årsak, varslingsdato, dato for iverksettelse og permitteringens lengde, hvem som blir permittert, og om det er hel eller delvis permittering.
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk} className='mb-2'>
        Søk dagpenger
      </Ui.Nav.Knapp>
    </>
  )
}

const Dagpenger = props => {
  const { Ui } = props

  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        Dagpenger
      </Ui.Nav.Undertittel>
      <SokNa Ui={Ui} />
    </div>
  )
}

export default Dagpenger
