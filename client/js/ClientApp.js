import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'
import createStore from 'store'
import routes from 'routes'
import omit from 'object.omit'

export default (props) => {
  const initialState = omit(props, 'location')
  const store = createStore(initialState)
  syncReduxAndRouter(browserHistory, store)

  if (process.env.NODE_ENV === 'development') {
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
