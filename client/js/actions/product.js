import {
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, CLEAR_PRODUCT
} from 'constants'
import * as api from 'libs/apiHelper'
import generateActionCreator from 'libs/generateActionCreator'

const fetchProductRequest = generateActionCreator(FETCH_PRODUCT_REQUEST)
const fetchProductSuccess = generateActionCreator(FETCH_PRODUCT_SUCCESS, 'product')
const fetchProductFailure = generateActionCreator(FETCH_PRODUCT_FAILURE, 'error')

export function fetchProduct(productId) {
  return dispatch => {
    dispatch(fetchProductRequest())
    return fetch(
      Routes.spree_product_path(productId, { format: 'json' }),
      { credentials: 'same-origin' }
    )
      .then(api.checkStatus)
      .then(api.parseJSON)
      .then(json => dispatch(fetchProductSuccess(json)))
      .catch(error => dispatch(fetchProductFailure(error)))
  }
}

export function clearProduct() {
  return {
    type: CLEAR_PRODUCT
  }
}
