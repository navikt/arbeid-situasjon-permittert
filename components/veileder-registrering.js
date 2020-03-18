import fixDate from '../lib/fix-date'
import prettyPrintDate from '../lib/pretty-print-date'
import daysFromNow from '../lib/days-from-now'

const Registrering = props => {
  const { Ui, lastDay } = props
  return (
    <div className='mb-2'>
      <Ui.Nav.Normaltekst>
        Du må registrere deg {prettyPrintDate(lastDay)}. Det er { daysFromNow(lastDay) } dager til
      </Ui.Nav.Normaltekst>
    </div>
  )
}

export default Registrering
