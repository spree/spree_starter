import React, { Component, PropTypes } from 'react'

export default class ProductsList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  }

  renderProduct(product) {
    return (
      <div key={product.id} className="col-md-3 col-sm-6 product-list-item" data-hook="products_list_item" itemScope="" itemType="https://schema.org/Product">
        <div className="panel panel-default">
          <div className="panel-body text-center product-body">
            <a itemProp="url" href={Routes.spree_product_path(product.slug)}>
              <img itemProp="image" alt={product.name} src={product.imageUrl} />
            </a>
            <br />
            <a className="info" itemProp="name" title={product.name} href={Routes.spree_product_path(product.slug)}>
              {product.name}
            </a>
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

  render() {
    const { products } = this.props
    return (
      <div>
        {products.map((product) => this.renderProduct(product))}
      </div>
    )
  }
}
