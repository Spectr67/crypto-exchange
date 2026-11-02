import Pocket from '../pocket.js'

// addPocket('BTC')
// addPocket('USDT')

// console.log(putDown('BTC', 1))
// console.log(putDown('USDT', 50000))
// console.log(getPockets())

const pocketBTC = new Pocket('BTC')

console.log(pocketBTC.putDown(33))
console.log(pocketBTC)

console.log(pocketBTC.pickUp(42))
console.log(pocketBTC)

// пишешь class Wallet
// пишешь тесты для класса Wallet
