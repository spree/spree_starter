import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CartContainer from '../containers/cart_container'
import store from '../stores'

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
