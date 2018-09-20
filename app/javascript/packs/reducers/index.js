import { combineReducers } from 'redux'

import sampleReducer, { initialState as sampleReducerInitialState } from './sampleReducer'

export const initialStates = {
  sampleReducer: sampleReducerInitialState
}

const rootReducer = combineReducers({
  sampleReducer
})

export default rootReducer
