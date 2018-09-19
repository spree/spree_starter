import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer, { initialStates } from 'reducers'
import HelloWorld from 'components/HelloWorld'

const HelloWorldContainer = (props) => {

  console.log(initialStates, 'INITIAL STATES')
  console.log(props, 'PROPS')

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

  return (
    <Provider store={store()}>
      <HelloWorld />
    </Provider>
  )
}

export default HelloWorldContainer
