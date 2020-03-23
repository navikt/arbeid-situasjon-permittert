import { Sidetittel } from 'nav-frontend-typografi'

const Container = ({ title, children }) => (
  <>
    {title ? (
      <div className='banner'>
        <Sidetittel className='m-4'>
          {title}
        </Sidetittel>
      </div>
    ) : null}
    <div className='permittert-container'>
      {children}
    </div>
  </>
)

export default Container
