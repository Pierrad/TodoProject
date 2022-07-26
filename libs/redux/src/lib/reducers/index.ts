import { combineReducers } from 'redux'

import appReducer from '../app/redux'
import apiReducer from '../api/redux'

const createRootReducer = combineReducers({
  app: appReducer,
  api: apiReducer,
})

export default createRootReducer
