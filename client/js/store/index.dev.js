import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'
import DevTools from 'containers/DevTools'

const loggerMiddleware = createLogger()
const devTooling = window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()

const finalCreateStore = (initialState = {}, reduxRouterMiddleware = undefined) => {
  let composedStore
  if (reduxRouterMiddleware) {
    composedStore = compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware, reduxRouterMiddleware),
      devTooling
    )
  } else {
    composedStore = compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      devTooling
    )
  }
  return composedStore(createStore)(rootReducer, initialState)
}

export default finalCreateStore
