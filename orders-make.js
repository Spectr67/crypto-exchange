import { checkPositive } from './functions.js'
import { getTraderById } from './traders.js'

// а какая торговая пара ?
export class Order {
  constructor(traderId, side, price, volume, symbol = 'ХЛЕБ') {
    this.id = crypto.randomUUID().split('-')[0]
    this.symbol = symbol
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

// плохое название. это не проверка. это что-то другое
// ХЛЕБ и usdt зашиты в этой функции
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
  console.log(`GRANTED: ${trader.name} FREEZED ${symbol} : ${requireBalance}`)
  return true
}
