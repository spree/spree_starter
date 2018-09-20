import React from 'react'
import { Provider } from 'react-redux'
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
