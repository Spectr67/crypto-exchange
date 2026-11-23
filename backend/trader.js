import { randId } from './functions.js'
import { orders } from './orders.js'
import { Wallet } from './wallet.js'

export class Trader {
  constructor() {
    this.id = randId()
    this.wallet = new Wallet()
    // при создании трейдера заполнить покетами
    this.wallet.addPocket('USDT')
  }

  getOrdersList() {
    return orders.getByTraderId(this.id)
  }

  deposit(symbol, amount) {
    return this.wallet.putDownBySymbol(symbol, amount)
  }

  withdraw(symbol, amount) {
    return this.wallet.pickUpBySymbol(symbol, amount)
  }
}
