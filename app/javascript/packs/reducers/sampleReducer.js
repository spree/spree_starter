import actionTypes from 'constants'

const initialState = {
  name: 'Arsen'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAMPLE_ACTION:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
