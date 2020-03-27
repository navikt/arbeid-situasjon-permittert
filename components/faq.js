import Panel from 'nav-frontend-paneler'
import { Element, Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import LinkElement from './link-element'

const FaqElement = props => {
  const { question, answer, links } = props
  return (
    <div className='mb-2'>
      <Element className='mb-1'>
        {question}
      </Element>
      <Normaltekst className='mb-1'>
        {answer}
      </Normaltekst>
      {links && (links.map((props, i) => <LinkElement key={i} {...props} />))}
    </div>
  )
}

const Faq = props => {
  const { Faq } = props
  const { title, description, qnas } = Faq

  return (
    <>
      <Panel className='w-100'>
        <Systemtittel className='mb-1'>
          {title}
        </Systemtittel>
        <Ingress className='mb-1'>
          {description}
        </Ingress>
        <Normaltekst>
          {qnas.map((props, i) => <FaqElement key={i} {...props} />)}
        </Normaltekst>
      </Panel>
    </>
  )
}

export default Faq
