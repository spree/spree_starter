import 'babel-polyfill'
import ReactDOMServer from 'react-dom/server'
import Dummy from '../components/Dummy'

require('es6-promise').polyfill()

global.ReactDOMServer = ReactDOMServer
global.Dummy = Dummy
