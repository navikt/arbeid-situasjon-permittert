import { amplitudeLogger } from '../lib/amplitude-utils'

const handleClick = event => {
  const url = event.target.href
  amplitudeLogger('link.click', { url })
}

const LinkElement = props => {
  const { Ui, title, url } = props
  return (
    <li className='li-unstyled mb-2'>
      <Ui.Nav.Lenke href={url} onClick={handleClick}>
        {title}
      </Ui.Nav.Lenke>
    </li>
  )
}

export default LinkElement
