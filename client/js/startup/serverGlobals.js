import 'babel-polyfill'
import ReactDOMServer from 'react-dom/server'
import ProductsList from 'components/ProductsList'
import App from '../ServerApp'
import HeaderProvider from 'containers/HeaderProvider'

require('es6-promise').polyfill()

global.ReactDOMServer = ReactDOMServer
global.App = App
global.ProductsList = ProductsList
global.HeaderProvider = HeaderProvider
