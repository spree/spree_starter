import React from 'react'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import routes from 'routes'
import createStore from 'store'
import omit from 'object.omit'

export default (props) => {
  const location = props.location
  const initialState = omit(props, 'location')
  const store = createStore(initialState)
  let error
  let redirectLocation
  let routeProps

  // See https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ServerRendering.md
  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error
    redirectLocation = _redirectLocation
    routeProps = _routeProps
  })

  // This tell react_on_rails to skip server rendering any HTML. Note, client rendering
  // will handle the redirect. What's key is that we don't try to render.
  // Critical to return the Object properties to match this { error, redirectLocation }
  if (error || redirectLocation) {
    return { error, redirectLocation }
  }

  // Important that you don't do this if you are redirecting or have an error.
  return (
    <Provider store={store}>
      <RouterContext {...routeProps} />
    </Provider>
  )
}
