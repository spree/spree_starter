import actionTypes from 'constants'

export const nameSubmit = (name) => (
  { type: actionTypes.CHANGE_NAME, payload: name }
)
