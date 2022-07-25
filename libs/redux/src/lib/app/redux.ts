import { DispatchType } from '@todo-project/models'
import {
  SET_LANGUAGE,
  SET_THEME
} from './actions'

const initialState = {
  theme: 'light',
  language: 'fr'
}

const reducer = (state = initialState, { type, payload }: DispatchType) => {
  switch(type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload
      }
    case SET_LANGUAGE:
      return {
        ...state,
        language: payload
      }
    default:
      return state
  }
}

export default reducer
