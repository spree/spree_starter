import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AccountContainer from '../containers/AccountContainer'
import store from '../store'

class AccountProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <AccountContainer />
      </Provider>
    )
  }
}

export default AccountProvider
