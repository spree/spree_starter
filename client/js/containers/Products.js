import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import { getProducts } from 'reducers/products'
import { getCurrency } from 'reducers/currency'
import { fetchProducts, clearProducts } from 'actions/products'
import ProductsList from 'components/ProductsList'
import Pagination from 'components/Pagination'
import { fullPath, isPathEqual } from 'libs/urlHelper'

class Products extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { products, location, dispatch } = this.props
    if (!products.isFetched) {
      dispatch(fetchProducts(fullPath(location)))
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location, dispatch } = this.props
    // location has changed so we need to get proper products list
    if (!isPathEqual(nextProps.location, location)) {
      dispatch(fetchProducts(fullPath(nextProps.location)))
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearProducts())
  }

  render() {
    const { products, currency, location, history, dispatch } = this.props

    return (
      <div>
        <Loader loaded={products.isFetched} />
        <ProductsList products={products.products} currency={currency} />
        <Pagination
          location={location}
          history={history}
          pagination={products.meta}
          dispatch={dispatch}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    currency: getCurrency(state)
  }
}

export default connect(mapStateToProps)(Products)
