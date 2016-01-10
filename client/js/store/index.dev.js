import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'
import DevTools from 'containers/DevTools'

const loggerMiddleware = createLogger()

const finalCreateStore = (props) => {
  const initialState = props
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    DevTools.instrument()
  )
  return composedStore(createStore)(rootReducer, initialState)
}

export default finalCreateStore

// for use with multiple providers in classic rails views
export const createdStore = finalCreateStore()
