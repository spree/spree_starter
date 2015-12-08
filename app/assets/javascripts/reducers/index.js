import { combineReducers } from 'redux'
import { cart } from './cart'
import { account } from './account'

const rootReducer = combineReducers({
  cart,
  account
})

export default rootReducer
