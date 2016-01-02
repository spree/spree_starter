import React from 'react'

export default (props) => {
  const { cart } = props
  return (
    <a href={Routes.spree_cart_path()}>
      <span className="glyphicon glyphicon-shopping-cart" />
      &nbsp;
      {I18n.t('spree.cart')}: {cart.total}
    </a>
  )
}
