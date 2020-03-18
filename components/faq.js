import LinkElement from './link-element'

const FaqElement = props => {
  const { Ui, question, answer, links } = props
  return (
    <div className='mb-2'>
      <Ui.Nav.Element className='mb-1'>
        { question }
      </Ui.Nav.Element>
      <Ui.Nav.Normaltekst className='mb-1'>
        { answer }
      </Ui.Nav.Normaltekst>
      { links && (links.map((props, i) => <LinkElement key={i} {...props} Ui={Ui} />)) }
    </div>
  )
}

const Faq = props => {
  const { Ui, Faq } = props
  const { title, description, qnas } = Faq

  return (
    <>
      <Ui.Nav.Panel className='w-100'>
        <Ui.Nav.Systemtittel className="mb-1">
          {title}
        </Ui.Nav.Systemtittel>
        <Ui.Nav.Ingress className="mb-1">
          {description}
        </Ui.Nav.Ingress>
        <Ui.Nav.Normaltekst>
          {qnas.map((props, i) => <FaqElement key={i} {...props} Ui={ Ui } />)}
        </Ui.Nav.Normaltekst>
      </Ui.Nav.Panel>
    </>
  )
}

export default Faq
