import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, CLEAR_PRODUCT } from 'constants'

export function getProduct(state) {
  return state.product
}

const initialState = {
  isFetching: false,
  isFetched: false,
  product: {}
}

export function product(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFetched: false
      })
    case FETCH_PRODUCT_SUCCESS:
      action.product.isFetching = false
      action.product.isFetched = true
      return Object.assign({}, state, action.product)
    case CLEAR_PRODUCT:
      action.product = initialState
      return Object.assign({}, state, action.product)
    default:
      return state
  }
}
