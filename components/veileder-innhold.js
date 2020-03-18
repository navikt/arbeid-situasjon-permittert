import Dagpenger from './veileder-dagpenger'
import Registrering from './veileder-registrering'
import Cv from './veileder-cv'

import fixDate from '../lib/fix-date'
import prettyPrintDate from '../lib/pretty-print-date'

const VeilederInnhold = props => {
  const { Ui, selectedDay, dagpenger, registrert, cv } = props
  const lastDay = fixDate(selectedDay)

  return (
    <>
      <Ui.Nav.Systemtittel className='mb-2'>
        Veien videre - Du er permittert fra {prettyPrintDate(lastDay)}
      </Ui.Nav.Systemtittel>
      {dagpenger === 'nei' && (<Dagpenger Ui={Ui} lastDay={lastDay} />)}
      {registrert === 'nei' && (<Registrering Ui={Ui} lastDay={lastDay} />)}
      {cv === 'nei' && (<Cv Ui={Ui} />)}
    </>
  )
}

export default VeilederInnhold
