import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchAccount } from 'actions/account'
import { getAccount } from 'reducers/account'
import { fetchCart } from 'actions/cart'
import { getCart } from 'reducers/cart'
import { fetchAuthenticityToken } from 'actions/authenticityToken'
import { getAuthenticityToken } from 'reducers/authenticityToken'
import Header from 'components/Header'

class HeaderContainer extends Component {
  static propTypes = {
    account: PropTypes.object,
    authenticityToken: PropTypes.object,
    cart: PropTypes.object
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      if (!this.props.account.isFetching) {
        this.props.dispatch(fetchAccount())
      }
      if (!this.props.authenticityToken.isFetching) {
        this.props.dispatch(fetchAuthenticityToken())
      }
      if (!this.props.cart.isFetching) {
        this.props.dispatch(fetchCart())
      }
    }
  }

  render() {
    const { account, cart, authenticityToken } = this.props

    if(!account || !cart) {
      return false
    }

    return (
      <Header account={account} cart={cart} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: getAccount(state),
    cart: getCart(state),
    authenticityToken: getAuthenticityToken(state)
  }
}

export default connect(mapStateToProps)(HeaderContainer)
