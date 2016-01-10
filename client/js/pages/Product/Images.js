import React, { Component, PropTypes } from 'react'
import { renderImage } from 'libs/productHelper'

const initialState = {
  activeImageIndex: 0
}

export default class Images extends Component {
  static propTypes = {
    productOrVariant: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productOrVariant !== this.props.productOrVariant) {
      this.setState(initialState)
    }
  }

  handleMouseOver(index) {
    this.setState({
      activeImageIndex: index
    })
  }

  render() {
    const { productOrVariant } = this.props
    const { activeImageIndex } = this.state

    return (
      <div id="product-images" data-hook="product_images">
        <div id="main-image" className="panel panel-default" data-hook="">
          <div className="panel-body text-center">
            {renderImage(productOrVariant, 'product', activeImageIndex)}
          </div>
        </div>
        <div id="thumbnails" data-hook="">
          <ul id="product-thumbnails" className="thumbnails list-inline" data-hook="">
            {productOrVariant.images.map((image, index) => {
              return (
                <li key={image.id} onMouseOver={this.handleMouseOver.bind(this, index)}>
                  {renderImage(productOrVariant, 'mini', index)}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
