import prettyPrintDate from '../lib/pretty-print-date'
import daysFromNow from '../lib/days-from-now'
import calculateDate from '../lib/calculate-date'

const handleKnappeKlikk = () => {
  window.location = 'https://arbeidssokerregistrering.nav.no'
}

const RegistrerDegNa = props => {
  const { Ui } = props
  return (
    <>
      <Ui.Nav.Normaltekst className='mb-2'>
        Du bør registrere deg som arbeidssøker nå
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk}>
        Registrer deg
      </Ui.Nav.Knapp>
    </>
  )
}

const RegistrerDegSenere = props => {
  const { Ui, lastDay } = props
  const startDate = calculateDate(lastDay, 6)
  return (
    <>
      <Ui.Nav.Normaltekst className='mb-2'>
        Du bør registrere deg som arbeidssøker i perioden {prettyPrintDate(startDate)} - {prettyPrintDate(lastDay)}
      </Ui.Nav.Normaltekst>
    </>
  )
}

const Registrering = props => {
  const { Ui, lastDay } = props
  const startDate = calculateDate(lastDay, 6)
  const daysToStartDate = daysFromNow(startDate)

  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        Arbeidssøkerregistrering
      </Ui.Nav.Undertittel>
      { daysToStartDate < 6 ? <RegistrerDegNa Ui={Ui} lastDay={lastDay} /> : <RegistrerDegSenere Ui={Ui} lastDay={lastDay}/>}
    </div>
  )
}

export default Registrering
