import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from 'actions/product'
import { Button, Row, Input } from 'react-bootstrap'

class CartForm extends Component {
  static propTypes = {
    master: PropTypes.object.isRequired,
    variants: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  handleSubmit() {
    const { variantId, quantity } = this.refs
    this.props.dispatch(addToCart(variantId, quantity))
  }

  render() {
    const { master } = this.props

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Row>
          <input type="hidden" ref="variantId" value={master.id} />
          <Input type="number" ref="quantity" defaultValue={1} />
          <Button>{I18n.t('spree.add_to_cart')}</Button>
        </Row>
      </form>
    )
  }
}

export default connect()(CartForm)
