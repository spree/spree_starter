import actionTypes from 'constants/index'

export const initialState = {
  name: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
