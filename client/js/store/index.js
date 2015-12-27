if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  module.exports = require('./index.prod')
} else {
  module.exports = require('./index.dev')
}
