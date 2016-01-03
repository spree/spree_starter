import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProducts } from 'reducers/products'
import { fetchProducts, clearProducts } from 'actions/products'
import ProductsList from 'components/ProductsList'
import Pagination from 'components/Pagination'

function fullPath(location) {
  return location.pathname + '.json' + location.search
}

class Products extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
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
    if (nextProps.location !== location) {
      dispatch(fetchProducts(fullPath(nextProps.location)))
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearProducts())
  }

  render() {
    const { products, location, history, dispatch } = this.props

    if (!products.products) {
      return false
    }

    return (
      <div>
        <ProductsList products={products.products} />
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
    products: getProducts(state)
  }
}

export default connect(mapStateToProps)(Products)
