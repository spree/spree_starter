import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import createStore from 'store'
import routes from 'routes'
import omit from 'object.omit'

export default (props) => {
  const initialState = omit(props, 'location')

  const middleware = routerMiddleware(browserHistory)
  const store = createStore(initialState, middleware)
  const history = syncHistoryWithStore(browserHistory, store)

  if (process.env.NODE_ENV === 'development') {
    const DevTools = require('containers/DevTools').default
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {routes}
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
}
