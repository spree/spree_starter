import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'

export default props => {
  const initialState = props
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  )
  return composedStore(createStore)(rootReducer, initialState)
}
