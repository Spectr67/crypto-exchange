import { wallet } from '../wallet.js'

// console.log(wallet.addPocket('BTC'))
// console.log(wallet.addPocket('BTC'))
// console.log(wallet.addPocket('XXX'))
console.log(wallet.addPocket('LTC'))
// console.log(wallet.addPocket('XXX'))
// console.log(wallet.pockets)

console.log(wallet.putDownBySymbol('LTC', 3))
console.log(wallet.pockets)

console.log(wallet.pickUpBySymbol('LTC', 3))
console.log(wallet.pockets)
