import { checkPositive } from './functions.js'
import { getTraderById } from './traders.js'

export class Order {
  // ['BTC', 'USDT'] BTC/USDT
  // pair состоит из двух symbol
  constructor(traderId, side, volume, price, pair = ['BTC', 'USDT']) {
    if (!checkPositive(price)) return null
    if (!checkPositive(volume)) return null
    this.id = crypto.randomUUID().split('-')[0]
    this.pair = pair
    this.side = side
    this.capacity = volume // read only
    this.volume = volume
    this.price = price
    this.cost = this.price * this.volume
    this.traderId = traderId
    this.#freezeBalance()
  }

  // TODO:
  checkTraderBalance() {
    const trader = getTraderById(this.traderId)
    if (trader.balance[symbol] < requireBalance) {
      return false
    }
    return true
  }

  #freezeBalance() {
    const trader = getTraderById(this.traderId)
    if (this.side === 'sell') {
      const symbol = this.pair[0]
      trader.balance[symbol] -= this.volume
    }
    if (this.side === 'buy') {
      const symbol = this.pair[1]
      trader.balance[symbol] -= this.cost
    }
  }

  #unfreezeBalance() {
    const trader = getTraderById(this.traderId)
    trader.balance[this.symbol] += this.volume
  }

  cancel() {
    this.#unfreezeBalance()
  }

  get isFulfilled() {
    return this.volume === 0
  }
}

export const orders = {
  sell: [],
  buy: [],
}

function appendOrder(order) {
  orders[order.side].push(order)
  orders['sell'].sort((newVal, oldVal) => oldVal.price - newVal.price)
  orders['buy'].sort((newVal, oldVal) => newVal.price - oldVal.price)
}

// бизнес логика открытия ордера
export function make(traderId, side, volume, price, pair) {
  // if (!checkPositive(price, volume)) return
  // if (!checkBalanceByTraderId(traderId, side, price, volume)) return
  const newOrder = new Order(traderId, side, volume, price)
  appendOrder(newOrder)
}

// плохое название. это не проверка. это что-то другое
// ХЛЕБ и usdt зашиты в этой функции
// function checkBalanceByTraderId(traderId, side, price, volume) {
//   const trader = getTraderById(traderId)
//   if (!trader) return
//   const symbol = 'ХЛЕБ'
//   const cost = price * volume
//   if (side === 'sell') return compareBalance(trader, symbol, volume)
//   if (side === 'buy') return compareBalance(trader, 'usdt', cost)
// }

// function compareBalance(trader, symbol, requireBalance) {
//   if (trader.balance[symbol] < requireBalance) {
//     console.log(`DENIED: ${trader.name} NOT ENOUGH ${symbol}`)
//     return false
//   }
//   console.log(`GRANTED: ${trader.name} FREEZED ${symbol} : ${requireBalance}`)
//   return true
// }
