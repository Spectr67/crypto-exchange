import { make } from '../orders.js'
import { Pair } from '../pair.js'

const pair = new Pair(['BTC', 'USDT'])

console.log(pair.getOrdersList())

make('иван_1', 'sell', 1, 2, ['BTC', 'USDT'])

make('иван_1', 'sell', 1, 2, ['ETH', 'USDT'])

const pair2 = new Pair(['ETH', 'USDT'])

console.log(pair.getOrdersList())

console.log(pair2.getOrdersList())

// console.log(pair.getBids())

// console.log(pair.getBids())
