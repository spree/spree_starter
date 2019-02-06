import actionTypes from 'constants/index'

export const nameSubmit = name => ({
  type: actionTypes.CHANGE_NAME,
  payload: name
})
