import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, CLEAR_PRODUCT } from 'constants'

export function getProduct(state) {
  return state.product
}

const initialState = {
  isFetching: false,
  isFetched: false
}

export function product(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFetched: false
      })
    case FETCH_PRODUCT_SUCCESS:
      return Object.assign({}, state, action.product, {
        isFetching: false,
        isFetched: true
      })
    case CLEAR_PRODUCT:
      return initialState
    default:
      return state
  }
}
