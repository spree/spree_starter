import React from 'react'
import { Provider } from 'react-redux'
import { createdStore } from 'store/static'
import DevTools from 'containers/DevTools'

export default (props) => {
  return (
    <Provider store={createdStore}>
      <DevTools />
    </Provider>
  )
}
