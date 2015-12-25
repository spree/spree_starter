import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants'

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: null
}

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoggingIn: true
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggingIn: false,
        error: action.error
      })
    case LOGIN_SUCCESS:
      action.login.isLoggingIn = false
      action.login.isLoggedIn = true
      action.login.error = null
      return Object.assign({}, state, action.login)
    default:
      return state
  }
}
