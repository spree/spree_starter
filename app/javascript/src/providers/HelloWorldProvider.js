import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { getStore } from 'providers/Store'

import HelloWorld from 'components/HelloWorld'

const HelloWorldProvider = () => {
  // makes sure store is initialized before component
  if (getStore()) {
    return (
      <Provider store={getStore()}>
        <HelloWorld />
      </Provider>
    )
  } else {
    return <span />
  }
}

export default hot(module)(HelloWorldProvider)
