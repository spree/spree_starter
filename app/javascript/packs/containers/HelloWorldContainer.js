import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer, { initialStates } from 'reducers'
import store from 'store'

import HelloWorld from 'components/HelloWorld'

const HelloWorldContainer = (props) => {
  return (
    <Provider store={store(props)}>
      <HelloWorld />
    </Provider>
  )
}

export default HelloWorldContainer
