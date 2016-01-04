import React from 'react'
import UniversalLink from 'components/UniversalLink'

export default (props) => {
  const { product } = props

  return (
    <div key={product.id} className="col-md-3 col-sm-4 col-xs-6 product-list-item" data-hook="products_list_item" itemScope="" itemType="https://schema.org/Product">
      <div className="panel panel-default">
        <div className="panel-body text-center product-body">
          <UniversalLink itemProp="url" to={Routes.spree_product_path(product.slug)}>
            <img itemProp="image" alt={product.name} src={product.imageUrl} />
          </UniversalLink>
          <br />
          <UniversalLink className="info" itemProp="name" title={product.name} to={Routes.spree_product_path(product.slug)}>
            {product.name}
          </UniversalLink>
        </div>
        <div className="panel-footer text-center">
          <span itemProp="offers" itemScope="" itemType="https://schema.org/Offer">
            <span className="price selling lead" itemProp="price">
              {I18n.toCurrency(product.price)}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
