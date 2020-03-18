const CV = props => {
  const { Ui } = props
  return (
    <div className='mb-2'>
      <Ui.Nav.Undertittel className='mb-2'>
        CV og jobbprofil
      </Ui.Nav.Undertittel>
      <Ui.Nav.Normaltekst>
        Du bør opprette CV og jobbprofil på arbeidsplassen slik at du kan ta på deg kortvarige oppdrag også når du er permittert.
      </Ui.Nav.Normaltekst>
    </div>
  )
}

export default CV
