import React from 'react'

export default (props) => {
  const { product } = props

  if (!product.product_properties.length) {
    return <div />
  }

  return (
    <div data-hook="product_properties">
      <h3 className="product-section-title">{I18n.t('spree.properties')}</h3>
      <table id="product-properties" className="table table-striped" data-hook="">
        <tbody>
          {product.product_properties.map((property, index) => {
            return (
              <tr key={property.id} className={index % 2 && 'even' || 'odd'}>
                <td><strong>{property.name}</strong></td>
                <td>{property.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
