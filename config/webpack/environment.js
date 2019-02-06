const { environment } = require('@rails/webpacker')

const babelLoader = environment.loaders.get('babel')

environment.loaders.insert(
  'svg',
  {
    test: /\.svg$/,
    use: babelLoader.use.concat([
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true
        }
      }
    ])
  },
  { after: 'file' }
)

const fileLoader = environment.loaders.get('file')
fileLoader.exclude = /\.(svg)$/i

environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader'
})

module.exports = environment
