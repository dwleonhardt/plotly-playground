import {CATS, DOGS} from '../actions/types'

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case CATS:
      return { ...state, userName: action.payload }
    case DOGS:
      return { ...state, userName: action.payload }
    default:
      return state
  }
}