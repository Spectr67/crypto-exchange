import { randId } from './functions.js'
import { Wallet } from './wallet.js'

class Trader {
  constructor() {
    this.id = randId()
    this.wallet = new Wallet()
    this.orders = new Orders(symbols)
  }

  getMyOrders() {
    return pairs
      .map(pair => pair.orders.filter(order => order.traderId === this.id))
      .flat()
  }
}

// console.log([[{}], [{}]].flat())

trader.balance.USDT += 999

trader.addDeposit('USDT', 999)

trader.addWithdraw('USDT', 999)

trader.make() // ?

trader.take() // ?
