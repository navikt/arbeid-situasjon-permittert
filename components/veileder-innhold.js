const VeilederInnhold = (props) => {
  const { Ui } = props
  return (
    <div>
      <Ui.Nav.Normaltekst>
      Her finner du
      </Ui.Nav.Normaltekst>
      <ul>
        <li>
          <Ui.Nav.Normaltekst>Veiviser med dato </Ui.Nav.Normaltekst>
        </li>
        <li><Ui.Nav.Normaltekst>Inngang til søknader </Ui.Nav.Normaltekst></li>
        <li><Ui.Nav.Normaltekst>Inngang til kalkulator </Ui.Nav.Normaltekst></li>
        <li><Ui.Nav.Normaltekst>Kort om muligheten dersom du ikke har nok inntjening </Ui.Nav.Normaltekst></li>
      </ul>
    </div>
  )
}

export default VeilederInnhold
