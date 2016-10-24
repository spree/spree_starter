import { ADD_ALERT, CLEAR_ALERT, REMOVE_ALERT } from 'constants'

import cloneDeep from 'lodash/cloneDeep'
import unset from 'lodash/unset'

export function getAlerts(state) {
  return state.alerts
}

const initialState = {
  alerts: {},
  lastId: 0
}

export function alerts(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT: {
      const alerts = cloneDeep(state.alerts)
      const lastId = state.lastId
      let message = action.alert.error || action.alert.message

      message = Array.isArray(message) ? message.join('<br/>') : message
      alerts[lastId] = { message, type: action.alertType }

      return Object.assign({}, state, { alerts, lastId: lastId + 1 })
    }
    case CLEAR_ALERT:
      return initialState
    case REMOVE_ALERT: {
      const alerts = cloneDeep(state.alerts)
      unset(alerts, action.id)

      return Object.assign({}, state, { alerts })
    }
    default:
      return state
  }
}
