// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
import ReactRailsUJS from 'react_ujs'
const componentRequireContext = require.context('providers', true)

ReactRailsUJS.useContext(componentRequireContext)
