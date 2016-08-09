import {
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, CLEAR_PRODUCTS
} from 'constants'
import * as api from 'libs/apiHelper'
import generateActionCreator from 'libs/generateActionCreator'

const fetchProductsRequest = generateActionCreator(FETCH_PRODUCTS_REQUEST)
const fetchProductsSuccess = generateActionCreator(FETCH_PRODUCTS_SUCCESS, 'products')
const fetchProductsFailure = generateActionCreator(FETCH_PRODUCTS_FAILURE, 'error')


export function fetchProducts(url) {
  return dispatch => {
    dispatch(fetchProductsRequest())
    return fetch(
      url,
      { credentials: 'same-origin' }
    )
      .then(api.checkStatus)
      .then(api.parseJSON)
      .then(json => dispatch(fetchProductsSuccess(json)))
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}

export function clearProducts() {
  return {
    type: CLEAR_PRODUCTS
  }
}
