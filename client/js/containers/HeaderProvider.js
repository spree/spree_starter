import React from 'react'
import { Provider } from 'react-redux'
import { createdStore } from 'store'
import HeaderContainer from './HeaderContainer'

export default (props) => {
  return (
    <Provider store={createdStore}>
      <HeaderContainer />
    </Provider>
  )
}
