import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from '../constants'

export function getCart(state) {
  return state.cart
}

export function cart(state = {isFetching: false}, action) {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_CART_SUCCESS:
      action.cart.isFetching = false
      return Object.assign({}, state, action.cart)
    default:
      return state
  }
}
