import { unfreezeTraderBalance } from './orders-make.js'
import { getTraderById, logTraders } from './traders.js'
import { make, orders } from './orders-make.js'

export function cancelOrder(order) {
  if (!order || !order.id || !order.traderId) {
    return false
  }

  const trader = getTraderById(order.traderId)
  if (!trader) {
    return false
  }

  const symbol = order.side === 'buy' ? 'usdt' : 'ХЛЕБ'
  const countToUnfreeze =
    order.side === 'buy' ? order.price * order.volume : order.volume

  const isUnfrozen = unfreezeTraderBalance(
    order.traderId,
    symbol,
    countToUnfreeze,
  )

  if (isUnfrozen) {
    const orderList = orders[order.side]
    const orderIndex = orderList.findIndex(o => o.id === order.id)

    if (orderIndex !== -1) {
      orderList.splice(orderIndex, 1)
    }
    return true
  }

  return false
}

make('иван_1', 'sell', 100, 5)

console.log(orders.sell)
console.log(getTraderById('иван_1'))

const testOrder = orders.sell[0]

console.log(getTraderById('иван_1'))

const orderRemoved = orders.sell.findIndex(o => o.id === testOrder.id) === -1
const balanceRestored = getTraderById('иван_1').frozen['ХЛЕБ'] === 0

if (orderRemoved && balanceRestored) {
  console.log(true)
} else {
  console.log(false)
}
