process.env.NODE_ENV = process.env.NODE_ENV || 'test'

const merge = require('webpack-merge')
const environment = require('./environment')
const customConfig = require('./custom')

module.exports = merge(environment.toWebpackConfig(), customConfig)
