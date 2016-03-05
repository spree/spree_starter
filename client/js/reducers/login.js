import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from 'constants'

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: null
}

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoggingIn: true,
        isLoggedIn: false
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.error
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, action.login, {
        isLoggingIn: false,
        isLoggedIn: true,
        error: null
      })
    default:
      return state
  }
}
