import React, { Component, PropTypes } from 'react'

export default class Cart extends Component {
  static propTypes = {
    total: PropTypes.string
  }

  render() {
    return (
      <a href={Routes.spree_cart_path()}>
        <span className="glyphicon glyphicon-shopping-cart" />
        &nbsp;
        {I18n.t('spree.cart')}: {this.props.total}
      </a>
    )
  }
}
