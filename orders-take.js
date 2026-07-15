import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'
import { getTraderById, traders } from './traders.js'

export function take(takerTraderId, side, volume) {
  if (!checkPositive(volume)) return
  const taker = getTraderById(takerTraderId)
  if (!taker) return

  const targetPool = side === 'buy' ? 'sell' : 'buy'
}
