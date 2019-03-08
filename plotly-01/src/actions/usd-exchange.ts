import { USDEXCHANGE } from './types'

export const UsdExchange = (currency: String) => {
  return {
    type: USDEXCHANGE,
    payload: {
      currency: currency
    }
  }
}
