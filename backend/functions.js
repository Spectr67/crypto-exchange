// import { orders } from './orders-make.js'
import { orders } from './orders.js'
import { getTraderById } from './traders-old.js'

export const randId = () => crypto.randomUUID().split('-')[0]

export function computeBids2(pairCaption) {
  const bids = { sell: [], buy: [] }
  const side = ['buy', 'sell']
  side.forEach(s => {
    orders[s].forEach(ob => {
      const bid = bids[s].find(bid => bid[0] === ob.price)
      if (!bid) bids[s].push([ob.volume, ob.price])
      else bid[1] += ob.volume
    })
  })
  return bids
}

export function computeBids(orders) {
  const bids = { sell: [], buy: [] }
  const side = ['buy', 'sell']
  side.forEach(s => {
    orders[s].forEach(ob => {
      const bid = bids[s].find(bid => bid[0] === ob.price)
      if (!bid) bids[s].push([ob.volume, ob.price])
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

export function checkTraderBalance(traderId, side, volume, price, pairCaption) {
  // console.log(pairCaption)
  const trader = getTraderById(traderId)
  if (!trader) return false

  const [asset, quote] = pairCaption
  // console.log(asset, quote)

  if (side === 'sell') {
    return trader.balance[asset] >= volume
  }
  if (side === 'buy') {
    const cost = price * volume
    return trader.balance[quote] >= cost
  }

  return false
}
