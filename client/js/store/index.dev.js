import { compose, createStore, applyMiddleware } from 'redux'
import { persistState } from 'redux-devtools'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const loggerMiddleware = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  DevTools.instrument()
)(createStore)


const store = finalCreateStore(rootReducer)

export default store
