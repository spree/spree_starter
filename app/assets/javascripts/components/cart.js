import React, { Component, PropTypes } from 'react'

export default class Cart extends Component {
  render() {
    const { total } = this.props

    return (
      <ul className="nav navbar-nav navbar-right">
        <li id="link-to-cart">
          <a className="cart-info empty" href={Routes.spree_cart_path()}>
            <span className="glyphicon glyphicon-shopping-cart"></span>
            Cart: {this.props.total}
          </a>
        </li>
      </ul>
    )
  }
}

Cart.propTypes = {
  total: PropTypes.string,
}
