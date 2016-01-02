import React from 'react'
import { Provider } from 'react-redux'
import { createdStore } from 'store'
import DevTools from 'containers/DevTools'

export default (props) => {
  return (
    <Provider store={createdStore}>
      <DevTools />
    </Provider>
  )
}
