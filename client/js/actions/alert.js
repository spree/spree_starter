import { ADD_ALERT, CLEAR_ALERT, REMOVE_ALERT } from 'constants'

function clearAlert() {
  return {
    type: CLEAR_ALERT
  }
}

export function addAlert(alert, alertType = 'danger') {
  return {
    type: ADD_ALERT,
    alertType,
    alert
  }
}

export function removeAlert(id) {
  return {
    type: REMOVE_ALERT,
    id
  }
}
