import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routeReducer } from 'react-router-redux'
import { currency } from './currency'
import { cart } from './cart'
import { account } from './account'
import { alerts } from './alerts'
import { login } from './login'
import { authenticityToken } from './authenticityToken'
import { products } from './products'
import { product } from './product'

const routing = routeReducer

const rootReducer = combineReducers({
  form,
  routing,
  currency,
  cart,
  account,
  alerts,
  authenticityToken,
  login,
  products,
  product
})

export default rootReducer
