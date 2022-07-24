import { combineReducers } from 'redux'

import appReducer from './app'

const createRootReducer = combineReducers({
  app: appReducer,
})

export default createRootReducer
