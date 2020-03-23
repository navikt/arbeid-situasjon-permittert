import { Systemtittel } from 'nav-frontend-typografi'
import Dagpenger from './veileder-dagpenger'
import Registrering from './veileder-registrering'
import Cv from './veileder-cv'

import fixDate from '../lib/fix-date'
import prettyPrintDate from '../lib/pretty-print-date'

const VeilederInnhold = props => {
  const { selectedDay, dagpenger, registrert, cv, t } = props
  const lastDay = fixDate(selectedDay)

  return (
    <>
      <Systemtittel className='mb-2'>
        {t['veileder-innhold-title']} {prettyPrintDate(lastDay)}
      </Systemtittel>
      {registrert === 'nei' && (<Registrering lastDay={lastDay} t={t} />)}
      {dagpenger === 'nei' && (<Dagpenger lastDay={lastDay} t={t} />)}
      {cv === 'nei' && (<Cv t={t} />)}
    </>
  )
}

export default VeilederInnhold
