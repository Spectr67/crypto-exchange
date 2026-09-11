import { Order } from '../orders-make.js'
import { traders } from '../traders.js'
import { transferDeal } from '../transfer.js'

const maker = traders[0]
const taker = traders[1]

console.log(maker)
console.log(taker)
const order = new Order(maker.id, 'sell', 3, 300, ['BTC', 'USDT'])
console.log(maker)
console.log(taker)
console.log(order)

transferDeal(taker, order, ['BTC', 'USDT'])
console.log(maker)
console.log(taker)
console.log(order)

//  работает
