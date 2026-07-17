import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'
import { getTraderById, traders } from './traders.js'

// ВНЕЗАПНО 2 варианта ТЕЙКА!!
// ограничение либо по объёму закупки либо по сумме закупки
// takeByCost
// takeByVolume
export function take(takerTraderId, side, limitVolume, limitCost) {
  if (!checkPositive(volume)) return
  const taker = getTraderById(takerTraderId)
  if (!taker) return

  const targetPool = side === 'buy' ? 'sell' : 'buy'
}
