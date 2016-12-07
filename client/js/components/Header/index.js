import React from 'react'
import CartPreview from 'components/CartPreview'
import AccountMenu from 'components/AccountMenu'
import UniversalLink from 'components/UniversalLink'

const logoUrl = require('./logo.png')

export default (props) => {
  const { account, cart } = props
  return (
    <header>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <a href="/" className="navbar-brand">
          <img src={logoUrl} />
        </a>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <UniversalLink to={Routes.spree_products_path()}>
                {I18n.t('spree.products')}
              </UniversalLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              {!account.isFetching && <AccountMenu account={account} />}
            </li>
            <li>
              {!cart.isFetching && <CartPreview cart={cart} />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
