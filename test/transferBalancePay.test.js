import { Order } from '../orders-make.js'
import { traders } from '../traders.js'
import { transferBalancePay } from '../transfer.js'

const maker = traders[0]
const taker = traders[1]

console.log(maker)
const pair = ['BTC', 'USDT']
const order = new Order('иван_1', 'sell', 3, 100, pair)
console.log(maker)
console.log(taker)
console.log(order)
transferBalancePay(taker, order, 'BTC', 3)
console.log('===')
console.log(maker)
console.log(taker)
console.log(order)

// transferBalancePay(taker, maker, pair[1], 501)
// console.log(maker)
// console.log(taker)

// transferBalancePay(taker, maker, 'pair[1]', '300')
// console.log(maker)
// console.log(taker)

// transferBalancePay(taker, maker, 'pair[1]', -300)
// console.log(maker)
// console.log(taker)

// transferBalancePay(taker, order, 30)
// console.log(order)
// console.log(taker)
