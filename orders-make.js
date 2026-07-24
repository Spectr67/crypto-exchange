import { checkPositive, checkTraderBalance } from './functions.js'
import { getTraderById } from './traders.js'

export class Order {
  // ['BTC', 'USDT'] BTC/USDT
  // pair состоит из двух symbol
  constructor(traderId, side, volume, price, pair = ['BTC', 'USDT']) {
    this.id = crypto.randomUUID().split('-')[0]
    this.pair = pair
    this.side = side
    this.capacity = volume // read only
    this.volume = volume
    this.price = price
    this.cost = this.price * this.volume
    this.traderId = traderId
    this.isInvalid = false
    const isCorrectNumbers = checkPositive(price) && checkPositive(volume)
    if (isCorrectNumbers && this.checkTraderBalance()) {
      this.#freezeBalance()
    } else {
      console.log('ERRORDERCREATE')
      this.isInvalid = true
      this.capacity = 0
      this.volume = 0
      this.price = 0
      this.cost = 0
    }
  }

  // TODO:
  checkTraderBalance() {
    const { traderId, side, volume, price, pair } = this
    return checkTraderBalance(traderId, side, volume, price, pair)
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
    // FIXME: this.pair вместо this.symbol
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
export function make(traderId, side, volume, price, pair = ['BTC', 'USDT']) {
  if (!checkPositive(price, volume)) return
  const newOrder = new Order(traderId, side, volume, price, pair)
  if (newOrder.isInvalid) return false
  appendOrder(newOrder)
}
