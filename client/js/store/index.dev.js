import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'
import DevTools from 'containers/DevTools'

const loggerMiddleware = createLogger()

const finalCreateStore = (initialState = {}, reduxRouterMiddleware = undefined) => {
  let composedStore
  if (reduxRouterMiddleware) {
    composedStore = compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware, reduxRouterMiddleware),
      DevTools.instrument()
    )
  } else {
    composedStore = compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      DevTools.instrument()
    )
  }
  return composedStore(createStore)(rootReducer, initialState)
}

export default finalCreateStore
