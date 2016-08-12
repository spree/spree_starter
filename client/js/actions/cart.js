import {
  FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE,
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
  UPDATE_QUANTITY_REQUEST, UPDATE_QUANTITY_SUCCESS, UPDATE_QUANTITY_FAILURE,
  REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_CART_FAILURE
} from 'constants'
import * as api from 'libs/apiHelper'
import generateActionCreator from 'libs/generateActionCreator'
import { addAlert } from 'actions/alert'

/* fetch cart */

const fetchCartRequest = generateActionCreator(FETCH_CART_REQUEST)
const fetchCartSuccess = generateActionCreator(FETCH_CART_SUCCESS, 'cart')
const fetchCartFailure = generateActionCreator(FETCH_CART_FAILURE, 'error')

export function fetchCart() {
  return dispatch => {
    dispatch(fetchCartRequest())
    return fetch(
      Routes.spree_cart_link_path({ format: 'json' }),
      { credentials: 'same-origin' }
    )
      .then(api.checkStatus)
      .then(res => res.json())
      .then(json => dispatch(fetchCartSuccess(json)))
      .catch(error => dispatch(fetchCartFailure(error)))
  }
}

/* add to cart */

const addToCartRequest = generateActionCreator(ADD_TO_CART_REQUEST)
const addToCartSuccess = generateActionCreator(ADD_TO_CART_SUCCESS, 'cart')
const addToCartFailure = generateActionCreator(ADD_TO_CART_FAILURE, 'error')

export function addToCart(variantId, quantity = 1) {
  return (dispatch, getState) => {
    const formData = new FormData()
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

/* update line item quantity */

export const updateQuantityRequest = generateActionCreator(
  UPDATE_QUANTITY_REQUEST, 'lineItemId', 'quantity'
)
export const updateQuantitySuccess = generateActionCreator(UPDATE_QUANTITY_SUCCESS, 'item')
export const updateQuantityFailure = generateActionCreator(UPDATE_QUANTITY_FAILURE, 'error')

export function updateQuantity(orderNumber, lineItemId, quantity, sendRequest = true) {
  return (dispatch, getState) => {
    const formData = new FormData()
    const state = getState()
    const orderToken = state.cart.token

    formData.append('line_item[quantity]', quantity)

    if (sendRequest) {
      dispatch(updateQuantityRequest(lineItemId, quantity))
    }

    return fetch(
      Routes.spree_api_v1_order_line_item_path(orderNumber, lineItemId, { format: 'json' }), {
        method: 'PUT',
        body: formData,
        headers: {
          'X-Spree-Order-Token': orderToken
        }
      })
      .then(api.checkStatus)
      .then(api.parseJSON)
      .then(json => {
        dispatch(updateQuantitySuccess(json))
        dispatch(fetchCart())
      })
      .catch(error => {
        dispatch(updateQuantityFailure(error))
        dispatch(addAlert(error))
      })
  }
}

/* remove from cart */

const removeFromCartRequest = generateActionCreator(REMOVE_FROM_CART_REQUEST, 'lineItemId')
const removeFromCartSuccess = generateActionCreator(REMOVE_FROM_CART_SUCCESS, 'lineItemId')
const removeFromCartFailure = generateActionCreator(REMOVE_FROM_CART_FAILURE, 'error')

export function removeFromCart(lineItemId) {
  return (dispatch, getState) => {
    const state = getState()
    const cart = state.cart
    const orderToken = cart.token

    // immediately remove item
    dispatch(removeFromCartRequest(lineItemId))

    // remove item on backend
    return fetch(
      Routes.spree_api_v1_order_line_item_path(cart.number, lineItemId, { format: 'json' }), {
        method: 'DELETE',
        headers: {
          'X-Spree-Order-Token': orderToken
        }
      }
    )
      .then(api.checkStatus)
      .then(res => {
        if (res.ok) {
          dispatch(removeFromCartSuccess(lineItemId))
          dispatch(fetchCart())
        }
      })
      .catch(error => {
        dispatch(removeFromCartFailure(error))
        dispatch(addAlert(error))
      })
  }
}
