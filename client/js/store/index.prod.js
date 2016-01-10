import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'reducers'

const finalCreateStore = (props) => {
  const initialState = props
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  )
  return composedStore(createStore)(rootReducer, initialState)
}

export default finalCreateStore

// for use with multiple providers in classic rails views
export const createdStore = finalCreateStore()
