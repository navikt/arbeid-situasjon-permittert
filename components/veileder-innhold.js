import fixDate from '../lib/fix-date'
import prettyPrintDate from '../lib/pretty-print-date'

const Dagpenger = props => {
  const { Ui, lastDay } = props
  return (
    <div className='mb-1'>
      <Ui.Nav.Normaltekst>
        Du må søke dagpenger {prettyPrintDate(lastDay)}
      </Ui.Nav.Normaltekst>
    </div>
  )
}

const Registrering = props => {
  const { Ui, lastDay } = props
  return (
    <div className='mb-1'>
      <Ui.Nav.Normaltekst>
        Du må registrere deg {prettyPrintDate(lastDay)}
      </Ui.Nav.Normaltekst>
    </div>
  )
}

const Cv = props => {
  const { Ui } = props
  return (
    <div className='mb-1'>
      <Ui.Nav.Normaltekst>
        Du må opprette Cv på arbeidsplassen
      </Ui.Nav.Normaltekst>
    </div>
  )
}

const VeilederInnhold = props => {
  const { Ui, selectedDay, dagpenger, registrert, cv } = props
  const lastDay = fixDate(selectedDay)

  return (
    <>
      <Ui.Nav.Systemtittel>
        Veien videre
      </Ui.Nav.Systemtittel>
      { dagpenger === 'nei' && (<Dagpenger Ui={Ui} lastDay={lastDay} />) }
      { registrert === 'nei' && (<Registrering Ui={Ui} lastDay={lastDay} />) }
      { cv === 'nei' && (<Cv Ui={Ui} />) }
    </>
  )
}

export default VeilederInnhold
