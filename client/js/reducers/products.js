import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, CLEAR_PRODUCTS } from 'constants'

export function getProducts(state) {
  return state.products
}

const initialState = {
  isFetching: false,
  isFetched: false,
  products: []
}

export function products(state = initialState, action) {
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
    case CLEAR_PRODUCTS:
      action.products = initialState
      return Object.assign({}, state, action.products)
    default:
      return state
  }
}
