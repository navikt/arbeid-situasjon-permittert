import prettyPrintDate from '../lib/pretty-print-date'
import daysFromNow from '../lib/days-from-now'
import calculateDate from '../lib/calculate-date'

const handleKnappeKlikk = () => {
  window.location = 'https://www.nav.no/soknader/nb/person/arbeid/dagpenger'
}

const SokNa = props => {
  const { Ui } = props
  return (
    <>
      <Ui.Nav.Normaltekst className='mb-2'>
        Du bør søke om dagpenger nå
      </Ui.Nav.Normaltekst>
      <Ui.Nav.Knapp onClick={handleKnappeKlikk}>
        Søk dagpenger
      </Ui.Nav.Knapp>
    </>
  )
}

const SokSenere = props => {
  const { Ui, lastDay } = props
  const startDate = calculateDate(lastDay, 6)
  return (
    <>
      <Ui.Nav.Normaltekst className='mb-2'>
        Du bør søke om dagpenger i perioden {prettyPrintDate(startDate)} - {prettyPrintDate(lastDay)}
      </Ui.Nav.Normaltekst>
    </>
  )
}

const Dagpenger = props => {
  const { Ui, lastDay } = props
  const startDate = calculateDate(lastDay, 6)
  const daysToStartDate = daysFromNow(startDate)

  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        Dagpenger
      </Ui.Nav.Undertittel>
      { daysToStartDate < 6 ? <SokNa Ui={Ui} lastDay={lastDay} /> : <SokSenere Ui={Ui} lastDay={lastDay}/>}
    </div>
  )
}

export default Dagpenger