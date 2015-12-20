import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants'
import { getAuthenticityToken } from '../reducers/authenticityToken'
import * as api from '../api'
import { fetchAccount } from './account'

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginSuccess(login) {
  return {
    type: LOGIN_SUCCESS,
    login
  }
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function login(email, password) {
  return (dispatch, getState) => {
    dispatch(loginRequest())

    const authenticityToken = getAuthenticityToken(getState()).authenticityToken

    let formData = new FormData()
    formData.append('spree_user[email]', email)
    formData.append('spree_user[password]', password)

    return fetch(
      Routes.spree_create_new_session_path({format: 'js'}),
      {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'X-CSRF-Token': authenticityToken
        },
        body: formData
      }
    )
      .then(api.checkStatus)
      .then(api.parseJSON)
      .then(json => {
        dispatch(loginSuccess(json))
        dispatch(fetchAccount())
      })
      .catch(error => dispatch(loginFailure(error)))
  }
}
