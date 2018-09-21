import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from 'reducers'

let store = null
export const getStore = () => store

const Store = (props) => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const middlewares = [thunkMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  const composedStore = composeEnhancers(
    applyMiddleware(...middlewares)
  )

  // in order to be merged to the initialState props from server need to have
  // corresponding reducer key with the same name as reducer
  store = createStore(rootReducer, props, composedStore)

  return <noscript />
}

export default Store
