import { FETCH_AUTHENTICITY_TOKEN_REQUEST, FETCH_AUTHENTICITY_TOKEN_SUCCESS, FETCH_AUTHENTICITY_TOKEN_FAILURE } from 'constants'

export function getAuthenticityToken(state) {
  return state.authenticityToken
}

export function authenticityToken(state = { isFetching: false }, action) {
  switch (action.type) {
    case FETCH_AUTHENTICITY_TOKEN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_AUTHENTICITY_TOKEN_FAILURE:
      return Object.assign({}, state, action.authenticityToken, {
        isFetching: false
      })
    case FETCH_AUTHENTICITY_TOKEN_SUCCESS:
      return Object.assign({}, state, action.authenticityToken, {
        isFetching: false
      })
    default:
      return state
  }
}
