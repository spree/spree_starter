import CartProvider from 'providers/CartProvider'
import AccountProvider from 'providers/AccountProvider'
import Dummy from 'components/Dummy'

window.CartProvider = CartProvider
window.AccountProvider = AccountProvider
window.Dummy = Dummy

if (process.env.NODE_ENV === 'development') {
  window.DevTools = require('providers/DevToolsProvider').default
}
