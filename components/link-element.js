const LinkElement = props => {
  const { Ui, title, url } = props
  return (
    <li className='li-unstyled mb-1'>
      <Ui.Nav.Lenke href={url}>
        {title}
      </Ui.Nav.Lenke>
    </li>
  )
}

export default LinkElement
