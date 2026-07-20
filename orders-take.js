import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'
import { getTraderById, traders } from './traders.js'

// ВНЕЗАПНО 2 варианта ТЕЙКА!!
// ограничение либо по объёму закупки либо по сумме закупки
// takeByCost
// takeByVolume
export function take(takerTraderId, side, limitVolume, limitCost, pair) {
  const taker = getTraderById(takerTraderId)
  if (!taker) return

  if (checkPositive(limitVolume)) {
    takeByVolume(taker, side, limitVolume, pair)
  } else if (checkPositive(limitCost)) {
    takeByCost(taker, side, limitCost, pair)
  }
}

function takeByVolume(taker, side, limitVolume, pair) {
  let remainVolume = limitVolume
  const targetPoolName = side === 'buy' ? 'sell' : 'buy'
  const targetPool = orders[targetPoolName]

  for (let i = 0; i < targetPool.length && remainVolume > 0; i++) {
    const order = targetPool[i]

    if (order.traderId !== taker.id) {
      const dealVolume = Math.min(order.volume, remainVolume)
      const dealCost = dealVolume * order.price

      const success = transferDeal(taker, order, dealVolume, dealCost, pair)

      if (success) {
        remainVolume -= dealVolume
      } else {
        remainVolume = 0
      }
    }
  }
  orders[targetPoolName] = targetPool.filter(order => !order.isFulfilled)
}
function takeByCost(taker, side, limitCost, pair) {
  let remainCost = limitCost
  const targetPoolName = side === 'buy' ? 'sell' : 'buy'
  const targetPool = orders[targetPoolName]

  for (let i = 0; i < targetPool.length && remainCost > 0; i++) {
    const order = targetPool[i]

    if (order.traderId !== taker.id) {
      const orderCost = order.volume * order.price
      const dealCost = Math.min(orderCost, remainCost)
      const dealVolume = dealCost / order.price

      const success = transferDeal(taker, order, dealVolume, dealCost, pair)

      if (success) {
        remainCost -= dealCost
      } else {
        remainCost = 0
      }
    }
  }

  orders[targetPoolName] = targetPool.filter(order => !order.isFulfilled)
}
