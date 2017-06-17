import { ADD_ALERT, CLEAR_ALERT, REMOVE_ALERT } from 'constants'
import uuidv1 from 'uuid/v1'

export function getAlerts(state) {
  return state.alerts
}

const initialState = {
  alerts: []
}

export function alerts(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT: {
      let message = action.alert.error || action.alert.message

      message = Array.isArray(message) ? message.join('<br/>') : message
      const alert = { message, id: uuidv1(), type: action.alertType }

      return { ...state, alerts: state.alerts.concat(alert) }
    }
    case CLEAR_ALERT:
      return initialState
    case REMOVE_ALERT:
      return { ...state, alerts: state.alerts.filter(alert => alert.id !== action.id) }
    default:
      return state
  }
}
