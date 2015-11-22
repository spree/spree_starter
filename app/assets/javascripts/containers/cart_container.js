import React, { Component, PropTypes } from 'react'
import { connect, Provider } from 'react-redux'
import { fetchCart } from '../actions/cart_actions'
import { getCart } from '../reducers/cart_reducers'
import Cart from '../components/cart'

class CartContainer extends Component {

  componentDidMount() {
    if(!this.props.cart.isFetching) {
      this.props.dispatch(fetchCart())
    }
  }

  render() {
    return (
      <Cart total={this.props.cart.total} />
    )
  }
}

CartContainer.propTypes = {
  total: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    cart: getCart(state)
  }
}

export default connect(mapStateToProps)(CartContainer)
