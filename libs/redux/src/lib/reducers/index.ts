import { combineReducers } from 'redux'

import appReducer from '../app/redux'

const createRootReducer = combineReducers({
  app: appReducer,
})

export default createRootReducer
