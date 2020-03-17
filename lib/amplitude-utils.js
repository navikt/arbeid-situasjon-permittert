import amplitude from 'amplitude-js'
import {
  AMPLITUDE_ENDPOINT,
  AMPLITUDE_API_KEY_TEST,
  AMPLITUDE_API_KEY_PROD,
  AMPLITUDE_BASE_NAME
} from '../config'
import isProduction from './is-production'
const apiKey = isProduction() ? AMPLITUDE_API_KEY_PROD : AMPLITUDE_API_KEY_TEST

const config = {
  apiEndpoint: AMPLITUDE_ENDPOINT,
  saveEvents: true,
  includeUtm: true,
  includeReferrer: true,
  trackingOptions: {
    city: false,
    ip_address: false
  }
}

amplitude.getInstance().init(apiKey, undefined, config)

export function amplitudeLogger (name, values) {
  const key = `${AMPLITUDE_BASE_NAME}.${name}`
  amplitude.logEvent(key, values)
}
