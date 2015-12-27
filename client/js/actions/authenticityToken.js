import { FETCH_AUTHENTICITY_TOKEN_REQUEST, FETCH_AUTHENTICITY_TOKEN_SUCCESS, FETCH_AUTHENTICITY_TOKEN_FAILURE } from 'constants'
import * as api from 'libs/api'

function fetchAuthenticityTokenRequest() {
  return {
    type: FETCH_AUTHENTICITY_TOKEN_REQUEST
  };
}

function fetchAuthenticityTokenSuccess(authenticityToken) {
  return {
    type: FETCH_AUTHENTICITY_TOKEN_SUCCESS,
    authenticityToken
  }
}

function fetchAuthenticityTokenFailure(error) {
  return {
    type: FETCH_AUTHENTICITY_TOKEN_FAILURE,
    error
  }
}

export function fetchAuthenticityToken() {
  return dispatch => {
    dispatch(fetchAuthenticityTokenRequest())
    return fetch(
      Routes.spree_authenticity_token_path({format: 'json'}),
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(res => dispatch(fetchAuthenticityTokenSuccess(res)))
      .catch(error => dispatch(fetchAuthenticityTokenFailure(error)))
  }
}
