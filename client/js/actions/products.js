import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, CLEAR_PRODUCTS } from 'constants'
import * as api from 'libs/apiHelper'

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

export function fetchProducts(url) {
  return dispatch => {
    dispatch(fetchProductsRequest())
    return fetch(
      url,
      { credentials: 'same-origin' }
    )
      .then(res => res.json())
      .then(json => dispatch(fetchProductsSuccess(json)))
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}

export function clearProducts() {
  return {
    type: CLEAR_PRODUCTS
  }
}
