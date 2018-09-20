import React from 'react'
import { Provider } from 'react-redux'
import { getStore } from 'providers/Store'
import store from 'providers/Store'

import HelloWorld from 'components/HelloWorld'

const HelloWorldProvider = (props) => {
  return (
    <Provider store={getStore()}>
      <HelloWorld />
    </Provider>
  )
}

export default HelloWorldProvider
