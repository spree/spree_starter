import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from 'actions/cart'
import { ButtonInput, Row, Input } from 'react-bootstrap'

class CartForm extends Component {
  static propTypes = {
    master: PropTypes.object.isRequired,
    variants: PropTypes.array.isRequired,
    selectedVariant: PropTypes.object,
    handleChange: PropTypes.func,
    dispatch: PropTypes.func.isRequired
  }

  handleSubmit() {
    const { variantId, quantity } = this.refs
    this.props.dispatch(addToCart(variantId.value, quantity.getValue()))
  }

  handleChange(variantId) {
    this.props.handleChange(variantId)
  }

  renderVariant(variant) {
    return (
      <div key={variant.id}>
        <label>
          <input
            type="radio"
            name="variantId"
            value={variant.id}
            onChange={this.handleChange.bind(this, variant.id)}
            defaultChecked={this.props.selectedVariant.id === variant.id}
          />
          &nbsp;
          {variant.options_text}
        </label>
      </div>
    )
  }

  renderVariants() {
    return this.props.variants.map((variant) => this.renderVariant(variant))
  }

  render() {
    const { master, variants, selectedVariant } = this.props
    const handleSubmit = this.handleSubmit.bind(this)
    return (
      <form onSubmit={handleSubmit}>
        <Row>
          {variants && variants.length > 0 && this.renderVariants()}
          <input type="hidden" ref="variantId" value={selectedVariant && selectedVariant.id || master.id} />
          <Input type="number" ref="quantity" defaultValue={1} />
          <ButtonInput onClick={handleSubmit}>
            {I18n.t('spree.add_to_cart')}
          </ButtonInput>
        </Row>
      </form>
    )
  }
}

export default connect()(CartForm)
