import React, { useState } from 'react'
import DayPicker from 'react-day-picker'
import VeilederInnhold from './veileder-innhold'
import Faq from './faq'
import Links from './links'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment'
import 'moment/locale/nb'
import 'moment/locale/en-gb'
import '../styles.less'
import FaqData from '../lib/faq-data.json'
import LinksData from '../lib/links-data.json'

const Permittering = (props) => {
  const [selectedDay, setSelectedDay] = useState('')
  const [registrert, setRegistrert] = useState(false)
  const [dagpenger, setDagpenger] = useState(false)
  const [cv, setCv] = useState(false)
  const [step, setStep] = useState(1)
  const [maxStep, setMaxStep] = useState(1)
  const { locale, Ui, t } = props

  const handleDateChange = date => {
    setSelectedDay(date)
    setStep(2)
    if (maxStep < 2) {
      setMaxStep(2)
    }
  }

  const handleRegistrert = event => {
    setRegistrert(event.target.value)
    setStep(3)
    if (maxStep < 3) {
      setMaxStep(3)
    }
  }

  const handleDagpenger = event => {
    setDagpenger(event.target.value)
    setStep(4)
    if (maxStep < 4) {
      setMaxStep(4)
    }
  }

  const handleCv = event => {
    setCv(event.target.value)
    setStep(5)
    if (maxStep < 5) {
      setMaxStep(5)
    }
  }

  const Kalender = () => {
    return (
      <div className='d-flex flex-column align-items-center'>
        <Ui.Nav.Undertittel className='mt-4 mb-4'>
          {t['permittering-page-choose-date']}
        </Ui.Nav.Undertittel>
        <div style={{ border: '1px solid #78706A', borderRadius: '4px' }}>
          <DayPicker localeUtils={MomentLocaleUtils} locale={locale} onDayClick={handleDateChange} />
        </div>
      </div>
    )
  }

  const Registrering = () => {
    return (
      <div className='d-flex flex-column align-items-center'>
        <Ui.Nav.RadioPanelGruppe
          className='w-50'
          name='arbeidssøker'
          legend={t['permittering-page-choose-unemployed']}
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
        <Ui.Nav.RadioPanelGruppe
          className='w-50'
          name='arbeidssøker'
          legend={t['permittering-page-choose-dagpenger']}
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
        <Ui.Nav.RadioPanelGruppe
          className='w-50'
          name='arbeidssøker'
          legend={t['permittering-page-choose-cv']}
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

  return (
    <>
      <Ui.Nav.Panel className='w-100'>
        <Ui.Nav.Stegindikator
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
        {step === 1 && (<Kalender />)}
        {step === 2 && (<Registrering />)}
        {step === 3 && (<Dagpenger />)}
        {step === 4 && (<Cv />)}
        {step === 5 && (<VeilederInnhold
                          Ui={Ui}
                          selectedDay={selectedDay}
                          registrert={registrert}
                          dagpenger={dagpenger}
                          cv={cv} />)}
      </Ui.Nav.Panel>
      {step === 5 && (<Faq Ui={Ui} Faq={FaqData} />)}
      {step === 5 && (<Links Ui={Ui} Links={LinksData} />)}
    </>
  )
}

export default Permittering
