import { Panel } from 'nav-frontend-paneler'
import { Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import LinkElement from './link-element'

const Links = props => {
  const { Links } = props
  const { title, description, links } = Links

  return (
    <>
      <Panel className='w-100'>
        <Systemtittel className='mb-2'>
          {title}
        </Systemtittel>
        <Ingress>
          {description}
        </Ingress>
        <Normaltekst>
          {links.map((props, i) => <LinkElement key={i} {...props} />)}
        </Normaltekst>
      </Panel>
    </>
  )
}

export default Links
