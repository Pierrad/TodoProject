import { DispatchType } from '@todo-project/models'
import {
  SET_HEADERS,
  SET_HEADER
} from './actions'

const initialState = {
  headers: {},
  token: null,
}

const reducer = (state = initialState, { type, payload }: DispatchType) => {
  switch(type) {
    case SET_HEADERS:
      return {
        ...state,
        headers: payload
      }
    case SET_HEADER:
      return {
        ...state,
        headers: {
          ...state.headers,
          ...payload,
        }
      }
    default:
      return state
  }
}

export default reducer
