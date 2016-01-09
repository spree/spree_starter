import React, { Component, PropTypes } from 'react'
import UniversalLink from 'components/UniversalLink'
import renderPrice from 'libs/renderPrice'

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired
  }

  render() {
    const { product, currency } = this.props
    return (
      <div
        key={product.id}
        className="col-md-3 col-sm-4 col-xs-6 product-list-item"
        data-hook="products_list_item"
        itemScope=""
        itemType="https://schema.org/Product"
      >
        <div className="panel panel-default">
          <div className="panel-body text-center product-body">
            <UniversalLink itemProp="url" to={Routes.spree_product_path(product.slug)}>
              <img itemProp="image" alt={product.name} src={product.imageUrl} />
            </UniversalLink>
            <br />
            <UniversalLink
              className="info"
              itemProp="name"
              title={product.name}
              to={Routes.spree_product_path(product.slug)}
            >
              {product.name}
            </UniversalLink>
          </div>
          <div className="panel-footer text-center">
            <span itemProp="offers" itemScope="" itemType="https://schema.org/Offer">
              <span className="price selling lead" itemProp="price">
                {renderPrice(product.master.prices, currency)}
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
