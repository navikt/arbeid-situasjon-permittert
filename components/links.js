const LinkElement = props => {
  const { Ui, url, title } = props
  return (
    <li className='li-unstyled mb-1'>
      <Ui.Nav.Lenke href={url}>
        {title}
      </Ui.Nav.Lenke>
    </li>
  )
}

const Links = props => {
  const { Ui, Links } = props
  const { title, description, links } = Links

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
          {links.map((props, i) => <LinkElement key={i} Ui={Ui} {...props} />)}
        </Ui.Nav.Normaltekst>
      </Ui.Nav.Panel>
    </>
  )
}

export default Links
