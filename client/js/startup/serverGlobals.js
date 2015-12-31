import 'babel-polyfill'
import ReactDOMServer from 'react-dom/server'
import ProductsList from '../components/ProductsList'

require('es6-promise').polyfill()

global.ReactDOMServer = ReactDOMServer
global.ProductsList = ProductsList
