import CartProvider from 'providers/CartProvider'
import AccountProvider from 'providers/AccountProvider'
import ProductsList from 'components/ProductsList'

window.CartProvider = CartProvider
window.AccountProvider = AccountProvider

window.ProductsList = ProductsList

if (process.env.NODE_ENV === 'development') {
  window.DevTools = require('providers/DevToolsProvider').default
}
