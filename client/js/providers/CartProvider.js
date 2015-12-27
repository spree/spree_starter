import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CartContainer from 'containers/CartContainer'
import store from 'store'

class CartProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <CartContainer />
      </Provider>
    )
  }
}

export default CartProvider
