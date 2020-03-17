const VeilederInnhold = props => {
  const { Ui, selectedDay, dagpenger, registrert, cv } = props
  return (
    <>
      <Ui.Nav.Systemtittel>
        Veien videre
      </Ui.Nav.Systemtittel>
      <ul>
        { dagpenger === 'nei' && (<li><Ui.Nav.Normaltekst>Du må søke dagpenger</Ui.Nav.Normaltekst></li>) }
        { registrert === 'nei' && (<li><Ui.Nav.Normaltekst>Du må registrere deg</Ui.Nav.Normaltekst></li>) }
        { cv === 'nei' && (<li><Ui.Nav.Normaltekst>Du må opprette cv</Ui.Nav.Normaltekst></li>) }
        { selectedDay && (<li><Ui.Nav.Normaltekst>{selectedDay.toString()}</Ui.Nav.Normaltekst></li>)}
      </ul>
    </>
  )
}

export default VeilederInnhold
