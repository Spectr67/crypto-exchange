import { checkPositive } from '../functions.js'
import { Order } from '../order.js'
import { orders } from '../orders.js'

export function make(traderId, side, volume, price, symbols) {
  if (!checkPositive(price, volume)) return
  const newOrder = new Order(traderId, side, volume, price, symbols)
  if (newOrder.isInvalid) return false
  orders.appendOrder(newOrder)
}
