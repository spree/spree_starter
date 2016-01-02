import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from 'constants'

export function getProducts(state) {
  return state.products
}

export function products(state = { isFetching: false, isFetched: false }, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFetched: false
      })
    case FETCH_PRODUCTS_SUCCESS:
      action.products.isFetching = false
      action.products.isFetched = true
      return Object.assign({}, state, action.products)
    default:
      return state
  }
}
