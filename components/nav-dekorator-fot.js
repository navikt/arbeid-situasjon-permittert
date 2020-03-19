const NavDekoratorFot = () => {
  return (
    <div id="footer">
    <div className="hodefot">
      <footer className="sitefooter no-menu" role="contentinfo">
        <div className="container about-site"><a href="https://www.nav.no" data-ga="Footer/Link til NAV"
            className="decorated">NAV</a>
          <ul className="nav" id="insert-vergic-container">
            <li><a href="https://www.nav.no/person/kontakt-oss" data-ga="Footer">Kontakt oss</a></li>
            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Brukerstotte+nav+no/Tilgjengelighet"
                data-ga="Footer">Tilgjengelighet</a></li>
            <li><a href="https://www.nav.no/personvern" data-ga="Footer">Personvernerklæring - cookies</a></li>
            <li><a href="https://www.nav.no/no/rss" data-ga="Footer">Nyheter som RSS</a></li>
          </ul>
          <div className="copyright">
            <p>Arbeids- og velferdsetaten 2020</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default NavDekoratorFot
