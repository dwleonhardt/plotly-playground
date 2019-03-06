import { CATS, DOGS } from './types'

export const Cats = (cats: any) => {
  return {
    type: CATS,
    payload: {
      catData: {
        dates: cats.dates,
        qty: cats.qty
      }
    }
  }
}

export const Dogs = (dogs: any) => {
  return {
    type: DOGS,
    payload: {
      catData: {
        dates: dogs.dates,
        qty: dogs.qty
      }
    }
  }
}