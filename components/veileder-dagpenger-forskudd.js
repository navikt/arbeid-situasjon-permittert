import { Undertittel, Normaltekst } from 'nav-frontend-typografi'
import { Knapp } from 'nav-frontend-knapper'
import { amplitudeLogger } from '../lib/amplitude-utils'

const handleKnappeKlikk = () => {
  amplitudeLogger('veileder.dagpenger.forskudd.click')
  window.location = 'https://www.nav.no/dagpenger/forskudd'
}

const Forskudd = props => {
  const { t } = props
  return (
    <>
      <Normaltekst className='mb-2'>
        {t['veileder-dagpenger-forskudd-description']}
      </Normaltekst>
      <Knapp onClick={handleKnappeKlikk} className='mb-2'>
        {t['veileder-dagpenger-forskudd-button']}
      </Knapp>
    </>
  )
}

const Dagpenger = props => {
  const { t } = props

  return (
    <div className='mb-2'>
      <Undertittel className='mb-2'>
        {t['veileder-dagpenger-forskudd-title']}
      </Undertittel>
      <Forskudd t={t} />
    </div>
  )
}

export default Dagpenger
