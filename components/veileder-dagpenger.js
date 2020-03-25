import { Undertittel } from 'nav-frontend-typografi'
import { Knapp } from 'nav-frontend-knapper'
import LinkElement from './link-element'
import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.dagpenger.click')
  window.location = 'https://www.nav.no/soknader/nb/person/arbeid/dagpenger'
}

const SokNa = props => {
  const { t } = props
  return (
    <>
      <LinkElement title={t['veileder-dagpenger-now-url-text']} url={t['veileder-dagpenger-now-url']} />
      <Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-dagpenger-now-button']}
      </Knapp>
    </>
  )
}

const Dagpenger = props => {
  const { t } = props

  return (
    <div className='mb-2'>
      <Undertittel className='mb-2'>
        {t['veileder-dagpenger-title']}
      </Undertittel>
      <SokNa t={t} />
    </div>
  )
}

export default Dagpenger
