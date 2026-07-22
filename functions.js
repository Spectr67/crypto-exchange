import { orders } from './orders-make.js'
import { getTraderById } from './traders.js'

export function computeBids() {
  const bids = { sell: [], buy: [] }
  const side = ['buy', 'sell']
  side.forEach(s => {
    orders[s].forEach(ob => {
      const bid = bids[s].find(bid => bid[0] === ob.price)
      if (!bid) bids[s].push([ob.price, ob.volume])
      else bid[1] += ob.volume
    })
  })
  return bids
}

export function checkPositive(...numbers) {
  const result = numbers.every(n => typeof n === 'number' && n > 0)
  if (!result) console.log('ERRINCORRECTNUMBER')
  return result
}

export function checkTraderBalance(traderId, side, volume, price, pair) {
  const trader = getTraderById(traderId)
  if (!trader) return false

  const [asset, quote] = pair

  if (side === 'sell') {
    return trader.balance[asset] >= volume
  }
  if (side === 'buy') {
    const cost = price * volume
    return trader.balance[quote] >= cost
  }

  return false
}
