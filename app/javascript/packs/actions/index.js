import actionTypes from 'constants'

export const sampleSubmit = (name) => (
  { type: actionTypes.CHANGE_NAME, payload: name }
)
