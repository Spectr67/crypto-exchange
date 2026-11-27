import { make } from '../functions/make.js'
import { Trader } from '../trader.js'

const trader = new Trader()
console.log(trader)
console.log(trader.getOrdersList())

console.log(trader.deposit('BTC', 1))
console.log(trader.wallet.pockets)

console.log(trader.deposit('USDT', 999))
console.log(trader.wallet.pockets)

console.log(trader.withdraw('USDT', 990))
console.log(trader.wallet.pockets)

console.log(trader.checkWalletAmount('buy', 1, 9, ['BTC', 'USDT']))

console.log(trader.checkWalletAmount('buy', 1, 10, ['BTC', 'USDT']))

console.log(trader.checkWalletAmount('sell', 1, 9, ['BTC', 'USDT']))

console.log(trader.checkWalletAmount('sell', 2, 9, ['BTC', 'USDT']))

// make(trader.id, 'buy', 1, 2, ['BTC', 'USDT'])
// console.log(trader.getOrdersList())

//

// trader.make() // ?
// trader.take() // ?
