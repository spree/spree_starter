import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCart } from 'actions/cart'
import { getCart } from 'reducers/cart'
import Cart from 'components/Cart'

class CartContainer extends Component {

  componentWillMount() {
    if (!this.props.cart.isFetching) {
      this.props.dispatch(fetchCart())
    }
  }

  render() {
    const { cart } = this.props

    if(!cart.data) {
      return false
    }

    return (
      <Cart {...cart.data.attributes} />
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
