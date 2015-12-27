import React, { Component } from 'react'
import { Provider } from 'react-redux'
import DevTools from 'containers/DevTools'
import store from 'store'

class DevToolsProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <DevTools />
      </Provider>
    )
  }
}

export default DevToolsProvider
