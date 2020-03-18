import fixDate from '../lib/fix-date'
import prettyPrintDate from '../lib/pretty-print-date'
import daysFromNow from '../lib/days-from-now'

const Dagpenger = props => {
  const { Ui, lastDay } = props
  return (
    <div className='mb-2'>
      <Ui.Nav.Normaltekst>
        Du må søke dagpenger {prettyPrintDate(lastDay)}
      </Ui.Nav.Normaltekst>
    </div>
  )
}

export default Dagpenger