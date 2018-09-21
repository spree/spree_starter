import React from 'react'
import { Provider } from 'react-redux'
import { getStore } from 'providers/Store'
import store from 'providers/Store'

import HelloWorld from 'components/HelloWorld'

const HelloWorldProvider = (props) => {
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

export default HelloWorldProvider
