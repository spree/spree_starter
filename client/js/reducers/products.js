import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, CLEAR_PRODUCTS } from 'constants'

export function getProducts(state) {
  return state.products
}

const initialState = {
  isFetching: false,
  isFetched: false,
  products: [],
  meta: []
}

export function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFetched: false
      })
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, action.products, {
        isFetching: false,
        isFetched: true
      })
    case CLEAR_PRODUCTS:
      return initialState
    default:
      return state
  }
}
