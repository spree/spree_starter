import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProducts } from 'reducers/products'
import { fetchProducts } from 'actions/products'
import ProductsList from 'components/ProductsList'

class Products extends Component {
  static propTypes = {
    products: PropTypes.object
  }

  componentWillMount() {
    if (!this.props.products.isFetched) {
      this.props.dispatch(fetchProducts())
    }
  }

  render() {
    const { products } = this.props

    if (!products.products) {
      return false
    }

    return (
      <ProductsList products={products.products} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: getProducts(state)
  }
}

export default connect(mapStateToProps)(Products)
