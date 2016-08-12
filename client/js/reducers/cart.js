import {
  FETCH_CART_REQUEST, FETCH_CART_SUCCESS,
  UPDATE_QUANTITY_REQUEST, UPDATE_QUANTITY_FAILURE, UPDATE_QUANTITY_SUCCESS,
  REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS,
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE
} from 'constants/index.js'

import map from 'lodash/map'
import filter from 'lodash/filter'

const defaultState = {
  dismissAfter: 0,
  isAdding: false,
  isFetching: false,
  isFetched: false,
  show: false,
  line_items: [],
  total: 0
}

export function getCart(state) {
  return state.cart
}

// Updates a specific line item in the cart store
function lineItem(item, action) {
  if (action.lineItemId !== item.id) {
    return item
  }

  switch (action.type) {
    case UPDATE_QUANTITY_REQUEST:
      return Object.assign({}, item, { loading: true })
    case UPDATE_QUANTITY_SUCCESS:
      return Object.assign({}, item, action.item, { loading: false })
    case UPDATE_QUANTITY_FAILURE:
      return Object.assign({}, item, { loading: false })
    default:
      return item
  }
}

export function cart(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return Object.assign({}, state, { isAdding: true })
    case ADD_TO_CART_FAILURE:
    case ADD_TO_CART_SUCCESS:
      return Object.assign({}, state, { isAdding: false })
    case FETCH_CART_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFetched: false
      })
    case FETCH_CART_SUCCESS:
      return Object.assign({}, state, action.cart, {
        isFetching: false,
        isFetched: true
      })
    case REMOVE_FROM_CART_REQUEST:
    case REMOVE_FROM_CART_SUCCESS:
      return Object.assign({}, state, {
        line_items: filter(state.line_items, (item) => item.id !== action.lineItemId)
      })
    case UPDATE_QUANTITY_REQUEST:
    case UPDATE_QUANTITY_FAILURE:
    case UPDATE_QUANTITY_SUCCESS:
      return Object.assign({}, state, {
        line_items: map(state.line_items, (item) => lineItem(item, action))
      })
    default:
      return state
  }
}
