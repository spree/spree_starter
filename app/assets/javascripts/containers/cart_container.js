import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
      <Cart cart={this.props.cart} />
    )
  }
}

CartContainer.propTypes = {
  cart: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    cart: getCart(state)
  }
}

export default connect(mapStateToProps)(CartContainer)
