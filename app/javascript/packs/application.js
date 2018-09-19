/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import '../application.scss'

console.log('Hello World from Webpacker')

// Support component names which are placed under components alias folder name
// const componentRequireContext = require.context('components', true)
// const ReactRailsUJS = require('react_ujs')
// ReactRailsUJS.useContext(componentRequireContext)

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from 'reducers'
import HelloWorld from 'components/HelloWorld'

const appContainer = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [thunkMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  const store = () => {
    return createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(...middlewares)
      )
    )
  }

  return (
    <Provider store={store()}>
      <HelloWorld />
    </Provider>
  )
}

render(appContainer(), document.getElementById('root'))
