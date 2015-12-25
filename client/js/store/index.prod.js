import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)

const store = finalCreateStore(rootReducer)

export default store
