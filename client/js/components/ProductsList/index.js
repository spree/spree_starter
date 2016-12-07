import React from 'react'
import Product from 'components/Product'

export default (props) => {
  const { products, currency } = props
  return (
    <div>
      {products.map((product) => <Product key={product.id} product={product} currency={currency} />)}
    </div>
  )
}
