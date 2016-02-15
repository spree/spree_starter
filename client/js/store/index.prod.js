import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'

const finalCreateStore = (initialState = {}, reduxRouterMiddleware) => {
  let composedStore
  if (reduxRouterMiddleware) {
    composedStore = compose(
      applyMiddleware(thunkMiddleware, reduxRouterMiddleware)
    )
  } else {
    composedStore = compose(
      applyMiddleware(thunkMiddleware)
    )
  }
  return composedStore(createStore)(rootReducer, initialState)
}

export default finalCreateStore
