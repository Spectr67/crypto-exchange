import { computeBids, randId } from './functions.js'
import { make, orders } from './orders.js'

export class Pair {
  constructor(symbols) {
    this.id = randId()
    this.symbols = symbols
    this.caption = `${symbols[0]}/${symbols[1]}`
    // this.historyDeals =
    // this.candles =
  }

  getOrdersList() {
    return orders.getByCaption(this.caption)
  }

  getBids() {
    return computeBids2(this.caption)
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
