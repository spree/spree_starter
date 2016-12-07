import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import { getProduct } from 'reducers/product'
import { getCurrency } from 'reducers/currency'
import { fetchProduct, clearProduct } from 'actions/product'
import ProductPage from 'pages/Product'

class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { product, dispatch, params } = this.props
    if (!product.isFetched) {
      dispatch(fetchProduct(params.productId))
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, params } = this.props
    if (nextProps.params.productId !== params.productId) {
      dispatch(fetchProduct(nextProps.params.productId))
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearProduct())
  }

  render() {
    const { product, currency } = this.props
    return (
      <div>
        <Loader loaded={product.isFetched} />
        <ProductPage
          product={product}
          currency={currency}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: getProduct(state),
    currency: getCurrency(state)
  }
}

export default connect(mapStateToProps)(Product)
