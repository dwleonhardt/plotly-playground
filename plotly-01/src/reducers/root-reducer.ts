import { USDEXCHANGE } from '../actions/types'

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case USDEXCHANGE:
      return { ...state, rates: action.payload }
    default:
      return state
  }
}