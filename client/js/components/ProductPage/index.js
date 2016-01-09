import React from 'react'
import Thumbnails from './Thumbnails'
import Properties from './Properties'

export default (props) => {
  const { product } = props

  return (
    <div>
      <div className="col-md-4" data-hook="product_left_part">
        <div data-hook="product_left_part_wrap">
          <div id="product-images" data-hook="product_images">
            <div id="main-image" className="panel panel-default" data-hook="">
              <div className="panel-body text-center">
                <img itemProp="image" alt={product.name} src={product.imageUrl} />
              </div>
            </div>
            <Thumbnails {...props} />
          </div>
          <Properties {...props} />
        </div>
      </div>
      <div className="col-md-8" data-hook="product_right_part">
        <div data-hook="product_right_part_wrap">
          <div id="product-description" data-hook="product_description">
            <h1 className="product-title" itemProp="name">{product.name}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
