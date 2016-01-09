export default (prices = [], currency) => {
  let priceInCurrency = null
  prices.map((price) => {
    if (price.currency === currency) priceInCurrency = price.amount
  })
  return I18n.toCurrency(priceInCurrency)
}
