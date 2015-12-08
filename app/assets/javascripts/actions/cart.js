import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from '../constants'

function fetchCartRequest() {
  return {
    type: FETCH_CART_REQUEST
  };
}

function fetchCartSuccess(cart) {
  return {
    type: FETCH_CART_SUCCESS,
    cart
  }
}

function fetchCartFailure(error) {
  return {
    type: FETCH_CART_FAILURE,
    error
  }
}

export function fetchCart() {
  return dispatch => {
    dispatch(fetchCartRequest())
    return fetch(
      Routes.spree_cart_link_path({format: 'json'}),
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(json => dispatch(fetchCartSuccess(json)))
      .catch(error => dispatch(fetchCartFailure(error)))
  }
}
