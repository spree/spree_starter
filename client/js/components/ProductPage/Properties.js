import React from 'react'

export default (props) => {
  const { product } = props

  return (
    <div data-hook="product_properties">
      <h3 className="product-section-title">Properties</h3>
      <table id="product-properties" className="table table-striped" data-hook="">
        <tbody>
          <tr className="even">
            <td><strong>Type</strong></td>
            <td>Tote</td>
          </tr>
          <tr className="odd">
            <td><strong>Size</strong></td>
            <td>15" x 18" x 6"</td>
          </tr>
          <tr className="even">
            <td><strong>Material</strong></td>
            <td>Canvas</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
