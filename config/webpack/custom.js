const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.join(process.cwd(), 'app/javascript/packs', 'actions'),
      components: path.join(process.cwd(), 'app/javascript/packs', 'components'),
      constants: path.join(process.cwd(), 'app/javascript/packs', 'constants'),
      reducers: path.join(process.cwd(), 'app/javascript/packs', 'reducers'),
      src: path.join(process.cwd(), 'app/javascript/packs', 'src'),
      store: path.join(process.cwd(), 'app/javascript/packs', 'store'),
      providers: path.join(process.cwd(), 'app/javascript/packs', 'providers')
    }
  }
}
