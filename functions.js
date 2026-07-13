import { orders } from './orders-make.js'

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
  if (!result) console.log('error: invalid number...')
  return result
}
