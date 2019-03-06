import { CATS } from '../actions/types'

const INITIAL_STATE = {
  CATS: 1
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CATS:
      return { ...state, userName: action.payload }
    default:
      return state
  }
}