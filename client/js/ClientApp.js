import React from 'react'
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import createStore from 'store'
import routes from 'routes'
import omit from 'object.omit'

export default (props) => {
  const initialState = omit(props, 'location')
  const reduxRouterMiddleware = syncHistory(browserHistory)
  const store = createStore(initialState, reduxRouterMiddleware)

  if (process.env.NODE_ENV === 'development') {
    // Required for replaying actions from devtools to work
    reduxRouterMiddleware.listenForReplays(store)

    const DevTools = require('containers/DevTools').default
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>
            {routes}
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
