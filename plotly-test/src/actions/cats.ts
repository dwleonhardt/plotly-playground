import { CATS } from './types'

export const Cats = (cats) => {
  return {
    type: CATS,
    payload: {
      catData: {
        x: cats.x,
        y: cats.y
      }
    }
  }
}