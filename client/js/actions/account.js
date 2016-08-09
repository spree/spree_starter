import { FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE } from 'constants'
import * as api from 'libs/apiHelper'
import generateActionCreator from 'libs/generateActionCreator'

const fetchAccountRequest = generateActionCreator(FETCH_ACCOUNT_REQUEST)
const fetchAccountSuccess = generateActionCreator(FETCH_ACCOUNT_SUCCESS, 'account')
const fetchAccountFailure = generateActionCreator(FETCH_ACCOUNT_FAILURE, 'error')

export function fetchAccount() {
  return dispatch => {
    dispatch(fetchAccountRequest())
    return fetch(
      Routes.spree_account_link_path({ format: 'json' }),
      { credentials: 'same-origin' }
    )
      .then(api.checkStatus)
      .then(res => res.json())
      .then(json => dispatch(fetchAccountSuccess(json)))
      .catch(error => dispatch(fetchAccountFailure(error)))
  }
}
