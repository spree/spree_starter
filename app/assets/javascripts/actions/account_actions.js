import { FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE } from '../constants/account_constants'

function fetchAccountRequest() {
  return {
    type: FETCH_ACCOUNT_REQUEST
  };
}

function fetchAccountSuccess(account) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    account
  }
}

function fetchAccountFailure(error) {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    error
  }
}

export function fetchAccount() {
  return dispatch => {
    dispatch(fetchAccountRequest())
    return fetch(
      Routes.spree_account_link_path({format: 'json'}),
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(json => dispatch(fetchAccountSuccess(json)))
      .catch(error => dispatch(fetchAccountFailure(error)))
  }
}
