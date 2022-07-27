import { DispatchType } from '@todo-project/models'
import {
  SET_USER,
} from './actions'

const initialState = {
  user: null,
}

const reducer = (state = initialState, { type, payload }: DispatchType) => {
  switch(type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      }
    default:
      return state
  }
}

export default reducer
