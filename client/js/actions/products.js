import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from 'constants'
import * as api from 'libs/api'

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  }
}

function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    error
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsRequest())
    return fetch(
      Routes.spree_products_path({format: 'json'}),
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(json => dispatch(fetchProductsSuccess(json)))
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}
