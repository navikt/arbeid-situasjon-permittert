const NavDekoratorMenu = () => {
  return (
    <div id="header-withmenu">
    <div className="hodefot">
      <header className="siteheader" role="banner">
        <div className="site-coltrols-toolbar site-controls-toolbar">
          <div className="container">
            <div className="row navbar">
              <div className="col-md-12">
                <div className="settings">
                  <ul className="nav">
                    <li id="text-size-accessibility" tabindex="0"><span className="link-btn"
                        aria-label="Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk samtidig på + for å forstørre eller - for å forminske.">Skriftstørrelse</span>
                      <div className="text-size-tooltip">
                        <p>Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk samtidig på + for å forstørre eller - for å
                          forminske.</p><span className="arrow"></span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="login-container">
                  <div id="login-details" className="hidden"><span id="name-container"><img id="idporten-ikon-innlogging"
                        alt="Innlogget via ID-porten"
                        src="https://appres.nav.no/_public/beta.nav.no/built-navno/img/navno/gfx/icons/idporten_ikon.png?_ts=164657e6e70" /><span
                        id="name"></span></span>
                    <div className="logout-tooltip hidden"><a href="javascript:void(0)" className="lukk hidden"
                        aria-label="Lukk informasjon om logg ut"> × </a>
                      <p>Du er logget inn på alle offentlige tjenester med ID-porten.</p>
                      <p> Husk å <strong>logge ut</strong> når du er ferdig.</p><span className="arrow"></span>
                    </div>
                  </div>
                  <div id="auth-btns"><a id="login" className="hidden knapp mini btn-auth btn-login"
                      href="https://tjenester.nav.no/dittnav/oversikt">Logg inn</a><a id="logout" data-ga="Header"
                      className="hidden btn-auth knapp mini hoved btn-logout" href="https://loginservice.nav.no/slo">Logg
                      ut</a></div>
                  <div className="login-tooltip hidden">
                    <p>Logg inn på Ditt NAV</p><span className="arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sitelogo sitelogo-large">
          <div className="container"><a href="https://www.nav.no" title="Hjem" data-ga="Header/Logo"><img
                src="https://appres.nav.no/_public/beta.nav.no/images/logo.png?_ts=1512923c9b0" alt="NAV-logo" /></a>
          </div>
        </div>
        <div className="topnavsection-wrapper">
          <div className="topnavsection">
            <nav className="topnav container" role="navigation" id="mainmenu" aria-labelledby="header-nav-heading"
              tabindex="-1">
              <h1 className="visuallyhidden" id="header-nav-heading">Hovedmeny</h1><input id="no-js-toggle-mobile-mainmenu"
                type="checkbox" className="visuallyhidden mobile-toggler" /><label for="no-js-toggle-mobile-mainmenu"
                className="mobile-toggler toggle-mainmenu">Meny</label><button type="button" id="toggle-mobile-mainmenu"
                className="link-btn mobile-toggler toggle-mainmenu">Meny</button>
              <ul className="accessible-megamenu" id="accessible-megamenu">
                <li className="topnavitem has-children"><a href="https://www.nav.no/no/Person" role="button"
                    data-ga="Meny">Person</a>
                  <div className="panel-wrapper">
                    <div className="accessible-megamenu-panel">
                      <p>
                        <div className="tilbaketilgruppe typo-normal"><a className="home-link"
                            href="https://www.nav.no/no/Person" data-ga="Meny/Person"><span
                              onclick="window.location='https://www.nav.no/no/Person'"
                              className="lenke-fremhevet tilbaketilforsidelink">Gå til forside</span></a><span
                            className="tilbaketittel">Person</span></div>
                      </p>
                      <ul className="subnavitems">
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Arbeid</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://tjenester.nav.no/veiledearbeidssoker/?sprak=nb"
                                data-ga="Meny">Arbeidsledig og jobbsøker</a></li>
                            <li><a
                                href="https://www.nav.no/no/Person/Arbeid/Dagpenger+ved+arbeidsloshet+og+permittering"
                                data-ga="Meny">Dagpenger når du er arbeidsledig eller permittert</a></li>
                            <li><a
                                href="https://www.nav.no/no/Person/Arbeid/Sykmeldt%2C+arbeidsavklaringspenger+og+yrkesskade"
                                data-ga="Meny">Sykmelding og sykepenger</a></li>
                            <li><a href="https://www.nav.no/no/Person/Arbeid/Arbeidsavklaringspenger"
                                data-ga="Meny">Arbeidsavklaringspenger </a></li>
                            <li><a href="https://www.nav.no/no/Person/Arbeid/Oppfolging+og+tiltak+for+a+komme+i+jobb"
                                data-ga="Meny">Oppfølging og tiltak for å komme i jobb</a></li>
                            <li><a href="https://www.nav.no/no/Person/Arbeid/yrkesskade-og-yrkessykdom"
                                data-ga="Meny">Yrkesskade og yrkessykdom</a></li>
                            <li><a href="https://tjenester.nav.no/veiledearbeidssoker/ung-lite-erfaring?sprak=nb"
                                data-ga="Meny">Ungdom</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Familie</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="http://familie.nav.no/" data-ga="Meny">Foreldrepenger, svangerskapspenger og
                                engangsstønad</a></li>
                            <li><a href="https://www.nav.no/no/Person/Familie/Barnetrygd+og+kontantstotte"
                                data-ga="Meny">Barnetrygd og kontantstøtte</a></li>
                            <li><a href="https://www.nav.no/no/Person/Familie/Enslig+mor+eller+far"
                                data-ga="Meny">Enslig mor eller far</a></li>
                            <li><a href="https://www.nav.no/no/Person/Familie/Farskap+og+morskap" data-ga="Meny">Farskap
                                og morskap</a></li>
                            <li><a href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag"
                                data-ga="Meny">Barnebidrag</a></li>
                            <li><a href="https://www.nav.no/familie/sykdom-i-familien/nb/" data-ga="Meny">Sykdom i
                                familien</a></li>
                            <li><a href="https://www.nav.no/no/Person/Familie/Grunn+og+hjelpestonad"
                                data-ga="Meny">Grunn- og hjelpestønad</a></li>
                            <li><a href="https://www.nav.no/no/Person/Familie/Ytelser+ved+dodsfall"
                                data-ga="Meny">Ytelser ved dødsfall</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Pensjon</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/Person/Pensjon/Alderspensjon"
                                data-ga="Meny">Alderspensjon</a></li>
                            <li><a href="https://www.nav.no/no/Person/Pensjon/Hva+kan+jeg+fa+i+pensjon"
                                data-ga="Meny">Din pensjon<span className="visuallyhidden"> - Pensjon</span></a></li>
                            <li><a href="https://www.nav.no/no/Person/Pensjon/Avtalefestet+pensjon+AFP"
                                data-ga="Meny">Avtalefestet pensjon (AFP)</a></li>
                            <li><a href="https://www.nav.no/no/Person/Pensjon/Omsorgsopptjening"
                                data-ga="Meny">Pensjonsopptjening for omsorgsarbeid (omsorgsopptjening)</a></li>
                            <li><a href="https://www.nav.no/no/Person/Pensjon/Uforetrygd" data-ga="Meny">Uføretrygd</a>
                            </li>
                            <li><a href="https://www.nav.no/no/Person/Pensjon/Andre+pensjonsordninger"
                                data-ga="Meny">Andre pensjonsordninger</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Hjelpemidler</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/Person/Hjelpemidler/Hva+har+du+vansker+med"
                                data-ga="Meny">Hva har du vansker med?</a></li>
                            <li><a href="https://www.nav.no/no/Person/Hjelpemidler/Hvor+trenger+du+hjelp"
                                data-ga="Meny">Hvor trenger du hjelp?</a></li>
                            <li><a href="https://www.nav.no/no/Person/Hjelpemidler/Tjenester+og+produkter"
                                data-ga="Meny">Tjenester og produkter</a></li>
                            <li><a href="https://www.nav.no/no/Person/Hjelpemidler/Hvordan+soke" data-ga="Meny">Hvordan
                                søke om hjelpemidler?</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Flere tema</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester"
                                data-ga="Meny">Sosiale tjenester og økonomisk sosialhjelp</a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Arbeid+og+opphold+i+utlandet"
                                data-ga="Meny">Arbeid og opphold i utlandet</a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Arbeid+og+opphold+i+Norge"
                                data-ga="Meny">Arbeid og opphold i Norge</a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Kurs+fra+NAV" data-ga="Meny">Kurs fra
                                NAV<span className="visuallyhidden"> - Flere tema</span></a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Klage%2C+ris+og+ros"
                                data-ga="Meny">Klage, anke og ros</a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Utbetalinger"
                                data-ga="Meny">Utbetalinger<span className="visuallyhidden"> - Flere tema</span></a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/saksbehandlingstider-i-nav"
                                data-ga="Meny">Saksbehandlingstider i NAV<span className="visuallyhidden"> - Flere
                                  tema</span></a></li>
                            <li><a href="https://www.nav.no/no/Person/Flere+tema/Innkreving+og+innbetaling"
                                data-ga="Meny">Innkreving og innbetaling<span className="visuallyhidden"> - Flere
                                  tema</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="topnavitem has-children"><a href="https://www.nav.no/no/Bedrift" role="button"
                    data-ga="Meny">Bedrift</a>
                  <div className="panel-wrapper">
                    <div className="accessible-megamenu-panel">
                      <p>
                        <div className="tilbaketilgruppe typo-normal"><a className="home-link"
                            href="https://www.nav.no/no/Bedrift" data-ga="Meny/Bedrift"><span
                              onclick="window.location='https://www.nav.no/no/Bedrift'"
                              className="lenke-fremhevet tilbaketilforsidelink">Gå til forside</span></a><span
                            className="tilbaketittel">Bedrift</span></div>
                      </p>
                      <ul className="subnavitems">
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Tjenester og
                            skjemaer</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://arbeidsgiver.nav.no/min-side-arbeidsgiver/" data-ga="Meny">Min side –
                                arbeidsgiver</a></li>
                            <li><a href="https://www.nav.no/soknader/nb/bedrift" data-ga="Meny">Skjemaer for
                                arbeidsgivere og tiltaksarrangører</a></li>
                            <li><a href="https://www.nav.no/no/bedrift/tjenester-og-skjemaer/nav-og-altinn-tjenester"
                                data-ga="Meny">Altinn - refusjoner, søknader, rapporter, foreldre-, omsorgs- og
                                pleiepenger m.m.</a></li>
                            <li><a
                                href="https://www.nav.no/no/Bedrift/Tjenester+og+skjemaer/Aa-registeret+og+a-meldingen"
                                data-ga="Meny">Aa-registeret </a></li>
                            <li><a
                                href="https://www.nav.no/no/Bedrift/Tjenester+og+skjemaer/Meld+yrkesskade+og+yrkessykdom"
                                data-ga="Meny">Meld yrkesskade og yrkessykdom</a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Tjenester+og+skjemaer/Innkreving+og+innbetaling"
                                data-ga="Meny">Innkreving og innbetaling<span className="visuallyhidden"> - Tjenester og
                                  skjemaer</span></a></li>
                            <li><a
                                href="https://www.nav.no/no/Bedrift/Tjenester+og+skjemaer/selvstendig-naringsdrivende-med-flere"
                                data-ga="Meny">Selvstendig næringsdrivende og andre grupper</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Rekruttering</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://arbeidsgiver.nav.no/kontakt-oss/" data-ga="Meny">Kontakt NAV –
                                arbeidsgiver</a></li>
                            <li><a href="https://arbeidsplassen.nav.no/bedrift" data-ga="Meny">Annonser stilling eller
                                finn kandidater i CV-basen</a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Rekruttering/Rekruttere+-+hjelp+og+selvhjelp"
                                data-ga="Meny">Ønsker du hjelp fra NAV til å rekruttere?</a></li>
                            <li><a href="https://tjenester.nav.no/veiviserarbeidsgiver/rekruttere-og-inkludere/ansette"
                                data-ga="Meny">Tilby jobb til en person som trenger tilrettelegging</a></li>
                            <li><a
                                href="https://tjenester.nav.no/veiviserarbeidsgiver/rekruttere-og-inkludere/arbeidstrening"
                                data-ga="Meny">Tilby arbeidstrening med hjelp fra NAV</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Oppfølging</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/Bedrift/Oppfolging/Sykmeldt+arbeidstaker"
                                data-ga="Meny">Sykmeldt arbeidstaker</a></li>
                            <li><a href="https://tjenester.nav.no/veiviserarbeidsgiver/tilrettelegge"
                                data-ga="Meny">Tilrettelegge for ansatte med helseutfordringer</a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Oppfolging/har-du-ansatte-som-sliter-psykisk"
                                data-ga="Meny">Har du ansatte som sliter psykisk</a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Oppfolging/Permittering+og+omstilling"
                                data-ga="Meny">Permittering og omstilling</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Inkluderende
                            arbeidsliv</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://tjenester.nav.no/veiviserarbeidsgiver/samleside"
                                data-ga="Meny">Veiviser for inkludering</a></li>
                            <li><a
                                href="https://www.nav.no/no/Bedrift/Inkluderende+arbeidsliv/Kontakt+NAV+Arbeidslivssenter"
                                data-ga="Meny">Inkluderende arbeidsliv<span className="visuallyhidden"> - Inkluderende
                                  arbeidsliv</span></a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Inkluderende+arbeidsliv/Webinar"
                                data-ga="Meny">Webinar</a></li>
                            <li><a href="http://www.idebanken.org/" data-ga="Meny">Idébanken - for et arbeidsliv som
                                inkluderer</a></li>
                            <li><a
                                href="https://www.altinn.no/no/Skjema-og-tjenester/Etater/NAV/Sykefravarsstatistikk-for-IA-virksomheter/"
                                data-ga="Meny">Sykefraværsstatistikk fra NAV (Altinn)</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Hjelpemidler</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/Bedrift/Hjelpemidler/Kartlegging+og+radgivning"
                                data-ga="Meny">Tilrettelegging i arbeid</a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Hjelpemidler/Tolking+pa+arbeidsplassen"
                                data-ga="Meny">Tolking på arbeidsplassen</a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Hjelpemidler/Funksjonsassistanse"
                                data-ga="Meny">Funksjonsassistanse i arbeidslivet </a></li>
                            <li><a href="https://www.nav.no/no/Bedrift/Hjelpemidler/Lese-+og+sekretarhjelp"
                                data-ga="Meny">Lese- og sekretærhjelp</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="topnavitem has-children"><a href="https://www.nav.no/no/NAV+og+samfunn" role="button"
                    data-ga="Meny">NAV og samfunn</a>
                  <div className="panel-wrapper">
                    <div className="accessible-megamenu-panel">
                      <p>
                        <div className="tilbaketilgruppe typo-normal"><a className="home-link"
                            href="https://www.nav.no/no/NAV+og+samfunn" data-ga="Meny/NAV og samfunn"><span
                              onclick="window.location='https://www.nav.no/no/NAV+og+samfunn'"
                              className="lenke-fremhevet tilbaketilforsidelink">Gå til forside</span></a><span
                            className="tilbaketittel">NAV og samfunn</span></div>
                      </p>
                      <ul className="subnavitems">
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Statistikk</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/Arbeidssokere+og+stillinger+-+statistikk"
                                data-ga="Meny">Arbeidssøkere og stillinger - statistikk</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/Sykefravar+-+statistikk"
                                data-ga="Meny">Sykefravær - statistikk</a></li>
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/AAP+nedsatt+arbeidsevne+og+uforetrygd+-+statistikk"
                                data-ga="Meny">AAP, nedsatt arbeidsevne og uføretrygd - statistikk</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/Familie+-+statistikk"
                                data-ga="Meny">Familie - statistikk</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/Pensjon+-+statistikk"
                                data-ga="Meny">Pensjon - statistikk</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/Flere+statistikkomrader"
                                data-ga="Meny">Flere statistikkområder</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Statistikk/Publiseringskalender"
                                data-ga="Meny">Publiseringskalender</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Kunnskap</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/Analyser+fra+NAV"
                                data-ga="Meny">Analyser fra NAV</a></li>
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/Forskningsrapporter+og+evalueringer+finansiert+av+NAV"
                                data-ga="Meny">Forskningsrapporter og evalueringer finansiert av NAV</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/FoU-midler"
                                data-ga="Meny">FoU-midler</a></li>
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/Samarbeid+med+universitet+og+hoyskoler"
                                data-ga="Meny">Samarbeid med universitet og høyskoler</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/Forsok+i+regi+av+NAV"
                                data-ga="Meny">Pågående forsøk</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/arrangementer"
                                data-ga="Meny">Arrangementer</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kunnskap/infografikk-fra-nav"
                                data-ga="Meny">Infografikk fra NAV</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Samarbeid</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/Leger+og+andre+behandlere"
                                data-ga="Meny">Leger og andre behandlere</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/Hjelpemidler"
                                data-ga="Meny">Hjelpemidler - for samhandlere</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/Tilskudd+gjennom+NAV"
                                data-ga="Meny">Tilskudd gjennom NAV</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/Arbeid+og+psykisk+helse"
                                data-ga="Meny">Arbeid, psykisk helse og samhandlere</a></li>
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/Samarbeidsavtaler+p%C3%A5+utdanningsomr%C3%A5det"
                                data-ga="Meny">Samarbeidsavtaler på utdanningsområdet</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/For+kommunen" data-ga="Meny">For
                                kommunen</a></li>
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Samarbeid/arbeidslivskriminalitet-og-trygdesvindel"
                                data-ga="Meny">Arbeidslivskriminalitet og trygdesvindel</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Om NAV</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://lovdata.no/nav/" data-ga="Meny">Lover og regler</a></li>
                            <li><a
                                href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/personvern-i-arbeids-og-velferdsetaten"
                                data-ga="Meny">Personvern i Arbeids- og velferdsetaten</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Fakta+om+NAV" data-ga="Meny">Fakta
                                om NAV</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/%C3%A5rsrapport"
                                data-ga="Meny">Årsrapport</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Sok+jobb+i+NAV" data-ga="Meny">Søk
                                jobb i NAV</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Brukermedvirkning"
                                data-ga="Meny">Brukermedvirkning<span className="visuallyhidden"> - Om NAV</span></a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Saksbehandlingstider+i+NAV"
                                data-ga="Meny">Saksbehandlingstider i NAV<span className="visuallyhidden"> - Om
                                  NAV</span></a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Innkjop+og+faktura"
                                data-ga="Meny">Innkjøp og faktura</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Kontakt NAV</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://www.nav.no/person/kontakt-oss/" data-ga="Meny">Kontakt oss</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/NAV+i+ditt+fylke"
                                data-ga="Meny">NAV i ditt fylke</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Utbetalinger"
                                data-ga="Meny">Utbetalinger<span className="visuallyhidden"> - Kontakt NAV</span></a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Presse"
                                data-ga="Meny">Presse</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Teknisk+brukerstotte"
                                data-ga="Meny">Teknisk brukerstøtte</a></li>
                            <li><a href="https://www.nav.no/person/kontakt-oss/tilbakemeldinger" data-ga="Meny">Klage,
                                anke og tilbakemeldinger</a></li>
                            <li><a href="https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Kurs+fra+NAV"
                                data-ga="Meny">Kurs fra NAV<span className="visuallyhidden"> - Kontakt NAV</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="topnavitem selected-topnavitem has-children"><a href="https://tjenester.nav.no/dittnav"
                    role="button" data-ga="Meny">Ditt NAV</a>
                  <div className="panel-wrapper">
                    <div className="accessible-megamenu-panel">
                      <div className="submenu-logg-inn hidden">
                        <h2 className="typo-etikett-stor decorated">Innloggede tjenester</h2>
                        <p className="typo-normal">Du kan logge på NAVs tjenester med ulikt sikkerhetsnivå. Med MinID kan du
                          sende meldekort, bruke arbeidstjenestene, sjekke utbetalinger m.m. Med BankID, BankID på
                          mobil, Buypass eller Commfides kan du i tillegg søke om ytelser, skrive til NAV og motta
                          meldinger fra NAV.</p>
                        <p className="typo-normal">Du kan bruke <a className="lenke-fremhevet"
                            href="https://stillingsok.nav.no">ledige stillinger</a> uten å logge inn.</p><a
                          href="https://tjenester.nav.no/dittnav/oversikt" className="knapp hoved knapp-hoved"
                          data-ga="Meny/logginn">Logg inn</a>
                      </div>
                      <p>
                        <div className="tilbaketilgruppe typo-normal"><a className="home-link dittnav"
                            href="https://tjenester.nav.no/dittnav" data-ga="Meny/Ditt NAV"><span
                              onclick="window.location='https://tjenester.nav.no/dittnav'"
                              className="lenke-fremhevet tilbaketilforsidelink">Gå til forside</span></a><span
                            className="tilbaketittel">Ditt NAV</span></div>
                      </p>
                      <ul className="subnavitems">
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Din oversikt</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a
                                href=" https://tjenester.nav.no/esso/saml2/jsp/spSSOInit.jsp?metaAlias=/sp&amp;idpEntityID=idporten.difi.no-v4&amp;NameIDFormat=transient&amp;goto=https://tjenester.nav.no/saksoversikt/&amp;AuthLevel=4"
                                data-ga="Meny" data-sec-level="4">Dine saker</a></li>
                            <li><a
                                href="https://tjenester.nav.no/esso/saml2/jsp/spSSOInit.jsp?metaAlias=/sp&amp;idpEntityID=idporten.difi.no-v4&amp;NameIDFormat=transient&amp;goto=https://tjenester.nav.no/mininnboks/&amp;AuthLevel=4"
                                data-ga="Meny" data-sec-level="4">Din innboks</a></li>
                            <li><a href="https://tjenester.nav.no/utbetalingsoversikt/" data-ga="Meny"
                                data-sec-level="3">Dine utbetalinger</a></li>
                            <li><a href="https://www.nav.no/person/personopplysninger/#adresser" data-ga="Meny"
                                data-sec-level="4">Endre kontonummer/adresse</a></li>
                            <li><a href="https://www.nav.no/soknader" data-ga="Meny" data-sec-level="4">Send ny
                                søknad</a></li>
                            <li><a href="https://www.nav.no/ettersendelse" data-ga="Meny" data-sec-level="4">Ettersend
                                vedlegg</a></li>
                            <li><a href="https://www.nav.no/person/kontakt-oss/" data-ga="Meny">Send beskjed til NAV</a>
                            </li>
                            <li><a href="https://www.nav.no/person/personopplysninger" data-ga="Meny"
                                data-sec-level="4">Personopplysninger</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Arbeid</h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://arbeidssokerregistrering.nav.no/start" data-ga="Meny"
                                data-sec-level="4">Registrer deg som arbeidssøker</a></li>
                            <li><a href="https://www.nav.no/meldekort/" data-ga="Meny" data-sec-level="3">Send
                                meldekort</a></li>
                            <li><a href="https://arbeidsplassen.nav.no/stillinger" data-ga="Meny">Finn ledige
                                stillinger</a></li>
                            <li><a href="https://arbeidsplassen.nav.no/minside" data-ga="Meny" data-sec-level="3">Din
                                CV</a></li>
                            <li><a href="https://arbeidsplassen.nav.no/stillinger/lagrede-sok" data-ga="Meny"
                                data-sec-level="2">Dine lagrede søk</a></li>
                            <li><a href="https://tjenester.nav.no/aktivitetsplan/" data-ga="Meny" data-sec-level="4">Din
                                aktivitetsplan</a></li>
                          </ul>
                        </li>
                        <li className="accessible-megamenu-panel-group">
                          <h2 className="h4 mobile-submenu-expander typo-etikett-stor globalmenu-tittel">Flere tjenester
                          </h2>
                          <ul className="menu-link-list mobile-submenu">
                            <li><a href="https://tjenester.nav.no/pselv/publisering/dinpensjon.jsf?context=pensjon"
                                data-ga="Meny" data-sec-level="1">Din pensjon<span className="visuallyhidden"> - Flere
                                  tjenester</span></a></li>
                            <li><a href="https://tjenester.nav.no/pselv/publisering/uforetrygd.jsf?context=ut"
                                data-ga="Meny" data-sec-level="1">Din uføretrygd</a></li>
                            <li><a href="https://tjenester.nav.no/sykefravaer/" data-ga="Meny" data-sec-level="4">Ditt
                                sykefravær</a></li>
                            <li><a href="https://foreldrepenger.nav.no" data-ga="Meny">Dine foreldrepenger</a></li>
                          </ul>
                        </li>
                      </ul>
                      <div className="secLevelUpgradeInfo hidden">
                        <div className="secLevel2Info hidden" aria-hidden="true"><span>Tjenester markert med hengelås krever
                            innlogging med ID-porten</span></div>
                        <div className="secLevel3Info hidden" aria-hidden="true"><span>Tjenester markert med hengelås krever
                            BankID, Buypass eller Commfides</span></div><button type="button" aria-hidden="true"
                          onclick="javascript:$('#globalmenu-upgrade-info-tooltip').removeClass('hidden');"
                          id="globalmenu-upgrade-info-button" className="logginninfo"></button><span className="vekk">Tjenester
                          med hengelås krever et høyere sikkerhetsnivå enn du er innlogget med.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="topnavitem mobile-only">
                  <div id="auth-btns-mobil" className="login-container"><a id="login-mobil"
                      className="hidden knapp liten btn-auth btn-login"
                      href="https://tjenester.nav.no/dittnav/oversikt">Logg inn</a><a id="logout-mobil"
                      className="hidden knapp liten hoved btn-auth btn-logout" href="https://loginservice.nav.no/slo">Logg
                      ut</a></div>
                </li>
              </ul><button type="button" id="toggle-varsler-mobile"
                className="toggle-varsler-mobile link-btn mobile-toggler invisible" aria-label="Varsler"
                title="Varsler"></button><input id="no-js-toggle-mobile-search" type="checkbox"
                className="visuallyhidden mobile-toggler" /><label for="no-js-toggle-mobile-search"
                className="mobile-toggler toggle-search">Søk</label><button type="button" id="toggle-mobile-search"
                className="link-btn mobile-toggler toggle-search"><span>Søk</span></button>
              <form action="https://www.nav.no/sok" method="get" className="sitesearch" id="sitesearch" role="search">
                <div className="inputwrapper">
                  <div><label className="visuallyhidden" for="site-search-input">Søk</label><input type="hidden"
                      name="language" value="no" /><input type="search" id="site-search-input" name="ord"
                      className="input-sitesearch" placeholder="Søk på nav.no" /><input type="submit" className="btn-sitesearch"
                      value="Søk" /></div>
                </div>
              </form>
              <div id="toggle-varsler-container" className="toggle-varsler-container"><button type="button"
                  id="toggle-varsler" className="toggle-varsler invisible" aria-controls="varsler-display"
                  aria-label="Varsler" title="Varsler" aria-expanded="false" data-base-url="https://www.nav.no/person"
                  data-tekst-varselurl-lenketekst="Gå til meldingen"
                  data-tekst-ingenvarsler="Du har ingen varsler å vise"
                  data-tekst-error="Det oppstod et problem under henting av varslene dine"
                  data-tekst-visalle="Vis alle dine varsler" data-tekst-visalle-nye-flertall="nye"
                  data-tekst-visalle-nye-entall="ny"></button></div>
              <div role="tooltip" id="globalmenu-upgrade-info-tooltip" className="panel-negativ hidden" aria-hidden="true">
                <div className="lukk"><button id="globalmenu-upgrade-info-close"
                    onclick="javascript:document.querySelector('#globalmenu-upgrade-info-tooltip').classNameList.add('hidden');"><span
                      className="vekk">Lukk</span></button></div>
                <h3 className="decorated hjelpetekst-tittel js-tittel">Info</h3>
                <p className="hjelpetekst-tekst js-tekst">Tjenester med hengelås krever et høyere sikkerhetsnivå enn du er
                  innlogget med.</p>
              </div>
            </nav>
          </div>
        </div>
        <div id="varsler-display" className="varsler-display" aria-expanded="false"></div>
        <div className="sitelogo sitelogo-small"><a href="https://www.nav.no" title="Hjem"><img
              src="https://appres.nav.no/_public/beta.nav.no/images/logo.png?_ts=1512923c9b0" alt="NAV-logo" /></a></div>
        <script type="text/javascript"
          src="https://appres.nav.no/_public/beta.nav.no/built-navno/js/navno/shinnloggingslinjen.js?_ts=165c8b84460"></script>
      </header>
    </div>
  </div>
  )
}

export default NavDekoratorMenu
