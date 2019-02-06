const path = require('path')

module.exports = {
  resolve: {
    alias: {
      actions: path.join(process.cwd(), 'app/javascript/src', 'actions'),
      icons: path.join(process.cwd(), 'app/assets', 'icons'),
      fonts: path.join(process.cwd(), 'app/assets', 'fonts'),
      components: path.join(process.cwd(), 'app/javascript/src', 'components'),
      constants: path.join(process.cwd(), 'app/javascript/src', 'constants'),
      containers: path.join(process.cwd(), 'app/javascript/src', 'containers'),
      reducers: path.join(process.cwd(), 'app/javascript/src', 'reducers'),
      src: path.join(process.cwd(), 'app/javascript/src', 'src'),
      store: path.join(process.cwd(), 'app/javascript/src', 'store'),
      providers: path.join(process.cwd(), 'app/javascript/src', 'providers'),
      libs: path.join(process.cwd(), 'app/javascript/src', 'libs')
    }
  }
}
