const Container = ({ title, Ui, children }) => (
  <>
    {title ? (
      <div className='banner'>
        <Ui.Nav.Sidetittel className='m-4'>
          {title}
        </Ui.Nav.Sidetittel>
      </div>
    ) : null}
    <div className='container'>
      {children}
    </div>
  </>
)

export default Container
