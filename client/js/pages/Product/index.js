import React, { Component, PropTypes } from 'react'
import Images from './Images'
import Properties from './Properties'
import CartForm from './CartForm'

export default class ProductPage extends Component {
  static propTypes ={
    product: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = { selectedVariant: null }
  }

  selectedVariant() {
    const variants = this.props.product.variants

    if (this.state.selectedVariant) {
      return this.state.selectedVariant
    } else {
      if (variants && variants.length > 0) {
        return variants[0]
      }
    }
  }

  productOrVariant() {
    if (this.selectedVariant()) {
      return this.selectedVariant()
    } else {
      return this.props.product
    }
  }

  changeVariant(selectedVariantId) {
    const variants = this.props.product.variants
    this.setState({
      selectedVariant: variants.find((variant) => variant.id === selectedVariantId)
    })
  }

  render() {
    const { product, currency } = this.props

    const productOrVariant = this.productOrVariant()

    if (!product.id) return <div />

    return (
      <div>
        <div className="col-md-4" data-hook="product_left_part">
          <div data-hook="product_left_part_wrap">
            <Images productOrVariant={productOrVariant} />
            <Properties product={product} />
          </div>
        </div>
        <div className="col-md-8" data-hook="product_right_part">
          <div data-hook="product_right_part_wrap">
            <div id="product-description" data-hook="product_description">
              <h1 className="product-title" itemProp="name">{product.name}</h1>
            </div>
          </div>
          <CartForm
            master={product.master}
            variants={product.variants}
            currency={currency}
            handleChange={this.changeVariant.bind(this)}
            selectedVariant={this.selectedVariant()}
          />
        </div>
      </div>
    )
  }
}
