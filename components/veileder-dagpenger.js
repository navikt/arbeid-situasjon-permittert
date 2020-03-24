import { Undertittel } from 'nav-frontend-typografi'
import LinkElement from './link-element'

const SokNa = props => {
  const { t } = props
  return (
    <>
      <LinkElement title={t['veileder-dagpenger-now-url-text']} url={t['veileder-dagpenger-now-url']} />
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
