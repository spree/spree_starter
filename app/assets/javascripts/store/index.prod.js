import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)

const store = finalCreateStore(rootReducer)

export default store
