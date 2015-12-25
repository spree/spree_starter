import { FETCH_AUTHENTICITY_TOKEN_REQUEST, FETCH_AUTHENTICITY_TOKEN_SUCCESS, FETCH_AUTHENTICITY_TOKEN_FAILURE } from '../constants'

export function getAuthenticityToken(state) {
  return state.authenticityToken
}

export function authenticityToken(state = {isFetching: false}, action) {
  switch (action.type) {
    case FETCH_AUTHENTICITY_TOKEN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_AUTHENTICITY_TOKEN_FAILURE:
      action.authenticityToken.isFetching = false
      return Object.assign({}, state, action.authenticityToken)
    case FETCH_AUTHENTICITY_TOKEN_SUCCESS:
      action.authenticityToken.isFetching = false
      return Object.assign({}, state, action.authenticityToken)
    default:
      return state
  }
}
