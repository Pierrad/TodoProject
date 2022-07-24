import {
  SET_THEME
} from '../actions/app'

const initialState = {
  theme: 'light'
}

type ReducerType = {
  type: string
  payload: any
}

const reducer = (state = initialState, { type, payload }: ReducerType) => {
  switch(type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload
      }
    default:
      return state
  }
}

export default reducer
