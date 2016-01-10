import React from 'react'

const defaultStyle = 'product'

export function getImageUrl(imageUrl, style = defaultStyle) {
  if (style === defaultStyle) {
    return imageUrl
  } else {
    return imageUrl.replace(defaultStyle + '/', style + '/')
  }
}

export function renderImage(product, style = defaultStyle, number = 0) {
  let imageUrl = ''
  if (product.images && product.images.length > 0) {
    imageUrl = getImageUrl(product.images[number].url, style)
  } else {
    imageUrl = require(`../../img/noimage/${style}.png`)
  }
  return <img itemProp="image" alt={product.name} src={imageUrl} />
}

export function renderPrice(prices = [], currency) {
  let priceInCurrency = null
  prices.map((price) => {
    if (price.currency === currency) priceInCurrency = price.amount
  })
  return I18n.toCurrency(priceInCurrency)
}
