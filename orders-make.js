import { checkPositive } from './functions.js'
import { getTraderById } from './traders.js'

class Order {
  constructor(traderId, side, price, volume) {
    this.id = crypto.randomUUID().split('-')[0]
    this.symbol = 'ХЛЕБ'
    this.capacity = volume // read only
    this.volume = volume
    this.price = price
    this.side = side
    this.traderId = traderId
    this.takersIds = []
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
export function make(traderId, side, price, volume) {
  if (!checkPositive(price, volume)) return
  if (!checkBalanceByTraderId(traderId, side, price, volume)) return
  const newOrder = new Order(traderId, side, price, volume)
  appendOrder(newOrder)
}

function checkBalanceByTraderId(traderId, side, price, volume) {
  const trader = getTraderById(traderId)
  if (!trader) return
  const symbol = 'ХЛЕБ'
  const cost = price * volume
  if (side === 'sell') return compareBalance(trader, symbol, volume)
  if (side === 'buy') return compareBalance(trader, 'usdt', cost)
}

function compareBalance(trader, symbol, requireBalance) {
  if (trader.balance[symbol] < requireBalance) {
    console.log(`DENIED: ${trader.name} NOT ENOUGH ${symbol}`)
    return false
  }
  freezeTraderBalance(trader.id, symbol, requireBalance)
  console.log(`GRANTED: ${trader.name} FREEZED ${symbol} : ${requireBalance}`)
  return true
}

function freezeTraderBalance(traderId, symbol, count) {
  getTraderById(traderId).balance[symbol] -= count
  getTraderById(traderId).frozen[symbol] += count
}
function unfreezeTraderBalance(traderId, symbol, count) {
  getTraderById(traderId).frozen[symbol] -= count
  getTraderById(traderId).balance[symbol] += count
}
