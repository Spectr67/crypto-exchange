import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'

// createTrader()

export const traders = [
  {
    id: 'иван_1',
    balance: { USDT: 0, BTC: 15 },
  },
  {
    id: 'мария_2',
    balance: { USDT: 1000, BTC: 0 },
  },
]
// export const traders = [
//   {
//     id: 'иван_1',
//     balance: { USDT: 1500, BTC: 0 },
//   },
//   {
//     id: 'мария_2',
//     balance: { USDT: 0, BTC: 5 },
//   },
// ]

export function getTraderById(id) {
  const trader = traders.find(u => u.id === id)
  if (!trader) {
    console.log('ERRTRADERNOTEXIST')
    return false
  }
  return trader
}
