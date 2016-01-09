import React from 'react'

export default (props) => {
  const { product } = props

  return (
    <div id="thumbnails" data-hook="">
      <ul id="product-thumbnails" className="thumbnails list-inline" data-hook="">
        <li className="tmb-all tmb-1 selected">
          <a href="/spree/products/21/product/ror_tote.jpeg?1449426867">
            <img className="thumbnail" src="/spree/products/21/mini/ror_tote.jpeg?1449426867" alt="Ror tote" />
          </a>
        </li>
        <li className="tmb-all tmb-1">
          <a href="/spree/products/22/product/ror_tote_back.jpeg?1449426867">
            <img className="thumbnail" src="/spree/products/22/mini/ror_tote_back.jpeg?1449426867" alt="Ror tote back" />
          </a>
        </li>
      </ul>
    </div>
  )
}
