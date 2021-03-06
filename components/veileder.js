import { useState, useEffect } from 'react'
import Panel from 'nav-frontend-paneler'
import { RadioPanelGruppe } from 'nav-frontend-skjema'
import Stegindikator from 'nav-frontend-stegindikator'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import DayPicker from 'react-day-picker'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment'
import 'moment/locale/nb'
import 'moment/locale/en-gb'
import 'moment/locale/pl'
import VeilederInnhold from './veileder-innhold'
import Faq from './faq'
import Links from './links'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import prettyPrintDate from '../lib/pretty-print-date'
import { LAST_UPDATED } from '../config'
import '../styles.less'

const Veileder = (props) => {
  const [selectedDay, setSelectedDay] = useState('')
  const [registrert, setRegistrert] = useState(false)
  const [dagpenger, setDagpenger] = useState(false)
  const [cv, setCv] = useState(false)
  const [step, setStep] = useState(1)
  const [maxStep, setMaxStep] = useState(1)
  const { t, locale } = props
  const FaqData = t['permittering-faq']
  const LinksData = t['permittering-links']

  const handleDateChange = date => {
    amplitudeLogger('veileder.dato', { dager: daysFromNow(date) })
    setSelectedDay(date)
    setStep(2)
    if (maxStep < 2) {
      setMaxStep(2)
    }
  }

  const handleRegistrert = event => {
    const choice = event.target.value
    amplitudeLogger('veileder.choices', { registrering: choice })
    setRegistrert(choice)
    setStep(3)
    if (maxStep < 3) {
      setMaxStep(3)
    }
  }

  const handleDagpenger = event => {
    const choice = event.target.value
    amplitudeLogger('veileder.choices', { dagpenger: choice })
    setDagpenger(choice)
    setStep(4)
    if (maxStep < 4) {
      setMaxStep(4)
    }
  }

  const handleCv = event => {
    const choice = event.target.value
    amplitudeLogger('veileder.choices', { cv: choice })
    setCv(choice)
    setStep(5)
    if (maxStep < 5) {
      setMaxStep(5)
    }
  }

  const Kalender = props => {
    const { locale } = props
    return (
      <div className='d-flex flex-column align-items-center'>
        <Undertittel className='mt-4 mb-4'>
          {t['veileder-questions-choose-date']}
        </Undertittel>
        <div style={{ border: '1px solid #78706A', borderRadius: '4px' }}>
          <DayPicker localeUtils={MomentLocaleUtils} locale={locale} onDayClick={handleDateChange} />
        </div>
      </div>
    )
  }

  const Registrering = () => {
    return (
      <div className='d-flex flex-column align-items-center'>
        <RadioPanelGruppe
          className='w-50'
          name='arbeidssøker'
          legend={t['veileder-questions-choose-unemployed']}
          radios={[
            { label: t['ui-yes'], value: 'ja', id: 'arbeidssøker-ja' },
            { label: t['ui-no'], value: 'nei', id: 'arbeidssøker-nei' }
          ]}
          onChange={handleRegistrert}
        />
      </div>
    )
  }

  const Dagpenger = () => {
    return (
      <div className='d-flex flex-column align-items-center'>
        <RadioPanelGruppe
          className='w-50'
          name='arbeidssøker'
          legend={t['veileder-questions-choose-dagpenger']}
          radios={[
            { label: t['ui-yes'], value: 'ja', id: 'dagpenger-ja' },
            { label: t['ui-no'], value: 'nei', id: 'dagpenger-nei' }
          ]}
          onChange={handleDagpenger}
        />
      </div>
    )
  }

  const Cv = () => {
    return (
      <div className='d-flex flex-column align-items-center'>
        <RadioPanelGruppe
          className='w-50'
          name='arbeidssøker'
          legend={t['veileder-questions-choose-cv']}
          radios={[
            { label: t['ui-yes'], value: 'ja', id: 'cv-ja' },
            { label: t['ui-no'], value: 'nei', id: 'cv-nei' }
          ]}
          onChange={handleCv}
        />
      </div>
    )
  }

  const onStegChange = (index) => {
    if (index + 1 <= 4) {
      setCv(undefined)
    }
    if (index + 1 <= 3) {
      setDagpenger(undefined)
    }
    if (index + 1 <= 2) {
      setRegistrert(undefined)
    }
    if (index + 1 <= 1) {
      setSelectedDay(undefined)
    }
    setStep(index + 1)
    setMaxStep(index + 11)
  }

  useEffect(() => {
    amplitudeLogger('visning')
  }, [])

  return (
    <>
      <Panel className='w-100'>
        <Normaltekst className='timestamp'>{t['app-sist-oppdatert']}: {prettyPrintDate(LAST_UPDATED)}</Normaltekst>
        <Stegindikator
          className='mt-4 mb-4'
          aktivtSteg={step - 1}
          steg={[
            { label: '' },
            { label: '', disabled: maxStep < 2 },
            { label: '', disabled: maxStep < 3 },
            { label: '', disabled: maxStep < 4 },
            { label: '', disabled: maxStep < 5 }
          ]}
          onChange={onStegChange}
          autoResponsiv
        />
        {step === 1 && (<Kalender locale={locale} />)}
        {step === 2 && (<Registrering />)}
        {step === 3 && (<Dagpenger />)}
        {step === 4 && (<Cv />)}
        {step === 5 && (<VeilederInnhold
          selectedDay={selectedDay}
          registrert={registrert}
          dagpenger={dagpenger}
          cv={cv}
          t={t}
        />)}
      </Panel>
      {step === 5 && (<Faq Faq={FaqData} />)}
      {step === 5 && (<Links Links={LinksData} />)}
    </>
  )
}

export default Veileder
