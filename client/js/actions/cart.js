import {
  FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE,
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE
} from 'constants'
import * as api from 'libs/apiHelper'
import { addAlert } from 'actions/alert'

function fetchCartRequest() {
  return {
    type: FETCH_CART_REQUEST
  }
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
      Routes.spree_cart_link_path({ format: 'json' }),
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(json => dispatch(fetchCartSuccess(json)))
      .catch(error => dispatch(fetchCartFailure(error)))
  }
}

function addToCartRequest() {
  return {
    type: ADD_TO_CART_REQUEST
  }
}

function addToCartSuccess(cart) {
  return {
    type: ADD_TO_CART_SUCCESS,
    cart
  }
}

function addToCartFailure(error) {
  return {
    type: ADD_TO_CART_FAILURE,
    error
  }
}

export function addToCart(variantId, quantity = 1) {
  return (dispatch, getState) => {
    let formData = new FormData()
    formData.append('variant_id', variantId)
    formData.append('quantity', quantity)

    dispatch(addToCartRequest())
    return fetch(
      Routes.spree_populate_orders_path({ format: 'json' }),
      {
        method: 'post',
        credentials: 'same-origin',
        body: formData
      }
    )
      .then(api.checkStatus)
      .then(res => res.json())
      .then(json => {
        dispatch(addToCartSuccess(json))
        dispatch(fetchCartSuccess(json))
      })
      .catch(error => {
        dispatch(addToCartFailure(error))
        dispatch(addAlert(error))
      })
  }
}
