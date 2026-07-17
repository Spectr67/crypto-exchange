import { Order } from '../orders-make.js'
import { traders, transferBalancePay } from '../traders.js'

// const maker = traders[0]
const taker = traders[1]
const order = new Order('иван_1', 'sell', 3, 100, 'usdt')

// console.log(maker)
// console.log(maker)
console.log(order)
console.log(taker)

transferBalancePay(taker, order)
console.log(order)
console.log(taker)

// transferBalancePay(taker, maker, 'usdt', 501)
// console.log(maker)
// console.log(taker)

// transferBalancePay(taker, maker, 'usdt', '300')
// console.log(maker)
// console.log(taker)

// transferBalancePay(taker, maker, 'usdt', -300)
// console.log(maker)
// console.log(taker)

// transferBalancePay(taker, order, 30)
// console.log(order)
// console.log(taker)
