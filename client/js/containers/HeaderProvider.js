import React from 'react'
import { Provider } from 'react-redux'
import { createdStore } from 'store/static'
import HeaderContainer from './HeaderContainer'

export default (props) => {
  return (
    <Provider store={createdStore}>
      <HeaderContainer />
    </Provider>
  )
}
