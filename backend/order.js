import { checkPositive, checkTraderBalance, randId } from './functions.js'
import { getTraderById } from './traders-old.js'

export class Order {
  constructor(traderId, side, volume, price, symbols) {
    this.id = randId()
    this.symbols = symbols
    this.caption = `${symbols[0]}/${symbols[1]}`
    this.side = side
    this.capacity = volume // read only
    this.volume = volume
    this.price = price
    this.cost = this.price * this.volume
    this.traderId = traderId
    this.isInvalid = false
    const isCorrectNumbers = checkPositive(price) && checkPositive(volume)
    const isTraderHasBalance = this.checkTraderBalance()
    if (isCorrectNumbers && isTraderHasBalance) {
      this.#freezeBalance()
    } else {
      if (!isCorrectNumbers) {
        console.log('ERRORDCRTNOPOS')
      }
      if (!isTraderHasBalance) {
        console.log('ERRORDCRTTRDNOBAL')
      }
      this.isInvalid = true
      this.capacity = 0
      this.volume = 0
      this.price = 0
      this.cost = 0
    }
  }

  checkTraderBalance() {
    const { traderId, side, volume, price, symbols } = this
    return checkTraderBalance(traderId, side, volume, price, symbols)
  }

  #freezeBalance() {
    const trader = getTraderById(this.traderId)
    if (this.side === 'sell') {
      const symbol = this.symbols[0]
      trader.balance[symbol] -= this.volume
    }
    if (this.side === 'buy') {
      const symbol = this.symbols[1]
      trader.balance[symbol] -= this.cost
    }
  }

  #unfreezeBalance() {
    const trader = getTraderById(this.traderId)
    if (this.side === 'sell') {
      const symbol = this.symbols[0]
      trader.balance[symbol] += this.volume
    }
    if (this.side === 'buy') {
      const symbol = this.symbols[1]
      trader.balance[symbol] += this.volume
    }
  }

  cancel() {
    this.#unfreezeBalance()
  }

  get isFulfilled() {
    return this.volume === 0
  }
}
