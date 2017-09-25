import {
  FETCH_AUTHENTICITY_TOKEN_REQUEST, FETCH_AUTHENTICITY_TOKEN_SUCCESS,
  FETCH_AUTHENTICITY_TOKEN_FAILURE
} from 'constants'
import * as api from 'libs/apiHelper'
import generateActionCreator from 'libs/generateActionCreator'

const fetchAuthenticityTokenRequest = generateActionCreator(FETCH_AUTHENTICITY_TOKEN_REQUEST)
const fetchAuthenticityTokenSuccess = generateActionCreator(FETCH_AUTHENTICITY_TOKEN_SUCCESS, 'authenticityToken')
const fetchAuthenticityTokenFailure = generateActionCreator(FETCH_AUTHENTICITY_TOKEN_FAILURE, 'error')


export function fetchAuthenticityToken() {
  return dispatch => {
    dispatch(fetchAuthenticityTokenRequest())
    return fetch(
      Routes.spree_authenticity_token_path({ format: 'json', time: Date.now() }),
      { credentials: 'same-origin' },
      { cache: 'no-store' }
    )
      .then(api.checkStatus)
      .then(res => res.json())
      .then(res => dispatch(fetchAuthenticityTokenSuccess(res)))
      .catch(error => dispatch(fetchAuthenticityTokenFailure(error)))
  }
}
