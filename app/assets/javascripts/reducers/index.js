import { combineReducers } from 'redux'
import { cart } from './cart_reducers'
import { account } from './account_reducers'

const rootReducer = combineReducers({
  cart,
  account
})

export default rootReducer
