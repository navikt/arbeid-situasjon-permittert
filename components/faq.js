const FaqElement = props => {
  const { question, answer } = props
  return (
    <div>
      <strong>{question}</strong><br />
      {answer}
    </div>
  )
}

const Faq = props => {
  const { Ui, Faq } = props
  const { title, description, qnas } = Faq

  return (
    <>
      <Ui.Nav.Panel className='w-100'>
        <Ui.Nav.Systemtittel>
          {title}
        </Ui.Nav.Systemtittel>
        <Ui.Nav.Ingress>
          {description}
        </Ui.Nav.Ingress>
        <Ui.Nav.Normaltekst>
          {qnas.map((props, i) => <FaqElement key={i} {...props} />)}
        </Ui.Nav.Normaltekst>
      </Ui.Nav.Panel>
    </>
  )
}

export default Faq
