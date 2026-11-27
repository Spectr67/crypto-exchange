import { randId } from './functions.js'
import { orders } from './orders.js'
import { Wallet } from './wallet.js'

export class Trader {
  constructor() {
    this.id = randId()
    this.wallet = new Wallet()
    // при создании трейдера заполнить покетами
    this.wallet.addPocket('USDT')
    this.wallet.addPocket('BTC')
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

  checkWalletAmount(side, volume, price, pairCaption) {
    const [asset, quote] = pairCaption
    if (side === 'sell') {
      return this.wallet.hasAvailableAmountBySymbol(asset, volume)
    }
    if (side === 'buy') {
      const cost = price * volume
      return this.wallet.hasAvailableAmountBySymbol(quote, cost)
    }
    return false
  }
}
