import { Any } from 'currency.js'
import { formatToCurrency } from './formatToCurrency'

export const sumAllPrices = (products: any): number =>
  products.reduce(
    (acc: Any, product: { price: number }) =>
      formatToCurrency(product.price).add(acc),
    0
  )
