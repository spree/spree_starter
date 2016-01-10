import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, CLEAR_PRODUCT } from 'constants'
import * as api from 'libs/apiHelper'

function fetchProductRequest() {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}

function fetchProductSuccess(product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    product
  }
}

function fetchProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    error
  }
}

export function fetchProduct(productId) {
  return dispatch => {
    dispatch(fetchProductRequest())
    return fetch(
      Routes.spree_product_path(productId, {format: 'json'}),
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(json => dispatch(fetchProductSuccess(json)))
      .catch(error => dispatch(fetchProductFailure(error)))
  }
}

export function clearProduct() {
  return {
    type: CLEAR_PRODUCT
  }
}
