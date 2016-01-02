import ProductsList from 'components/ProductsList'
import HeaderProvider from 'containers/HeaderProvider'
import App from '../ClientApp'

window.App = App

window.ProductsList = ProductsList
window.HeaderProvider = HeaderProvider

if (process.env.NODE_ENV === 'development') {
  window.DevToolsProvider = require('containers/DevToolsProvider').default
}
