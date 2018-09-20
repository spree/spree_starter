import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer, { initialStates } from 'reducers'

const store = (props) => {
  // merging server data to initial state
  const initialState = {
    sampleReducer: {...initialStates.sampleReducer, name: props.name }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [thunkMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  const store = () => {
    const composedStore = composeEnhancers(
      applyMiddleware(...middlewares)
    )

    return createStore(rootReducer, initialState, composedStore)
  }

  return store()
}

export default store
