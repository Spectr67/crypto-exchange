// function createNewPair() {
//   const id = randId()
//   const symbols = function()
//   const caption = function()
//   const lastPrice = function()
//   const volume24h = function()
//   const candles = function()
//   const orders = function()
//   const id = function()
//   return bids Pair()
// }

import { computeBids, randId } from './functions.js'
import { make, orders } from './orders-make.js'

export class Pair {
  constructor(symbols) {
    this.id = randId()
    this.symbols = symbols
    this.caption = `${symbols[0]}/${symbols[1]}`
    // this.orders = new Orders(symbols)
    // this.orders = []
    // this.historyDeals =
    // this.candles =
  }

  getOrdersList() {
    return orders.getByCaption(this.caption)
  }

  getBids() {
    return computeBids(this.orders)
  }

  getLastPrice() {
    // const historyDeal = historyDeals.at(-1)
    if ('okay') return historyDeal.getPrice()
    if ('nope') return 0
  }

  getVolume24h() {
    return historyDeals.getVolume24h(['BTC', 'USDT'])
  }

  getDiff24h() {
    return historyDeals.getVolume24h(['BTC', 'USDT'])
  }
}

const pair = new Pair(['BTC', 'USDT'])

console.log(pair.getOrdersList())

make('иван_1', 'sell', 1, 2, ['BTC', 'USDT'])

console.log(pair.getOrdersList())

// console.log(pair.getBids())

// console.log(pair.getBids())
