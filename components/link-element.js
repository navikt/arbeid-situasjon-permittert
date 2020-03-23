import Lenke from 'nav-frontend-lenker'
import { amplitudeLogger } from '../lib/amplitude-utils'

const handleClick = event => {
  const url = event.target.href
  amplitudeLogger('link.click', { url })
}

const LinkElement = props => {
  const { title, url } = props
  return (
    <li className='li-unstyled mb-2'>
      <Lenke href={url} onClick={handleClick} target='_blank'>
        {title}
      </Lenke>
    </li>
  )
}

export default LinkElement
