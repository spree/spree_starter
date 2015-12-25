import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { cart } from './cart'
import { account } from './account'
import { login } from './login'
import { authenticityToken } from './authenticityToken'

const rootReducer = combineReducers({
  form,
  cart,
  account,
  authenticityToken,
  login
})

export default rootReducer
