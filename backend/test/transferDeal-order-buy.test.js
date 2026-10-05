import { Order } from '../orders-make.js'
import { traders } from '../traders.js'
import { transferDeal } from '../transfer.js'

const maker = traders[1]
const taker = traders[0]

console.log(maker)
console.log(taker)
const order = new Order(maker.id, 'buy', 3, 300, ['BTC', 'USDT'])
console.log(maker)
console.log(taker)
console.log(order)

transferDeal(taker, order)
console.log(maker)
console.log(taker)
console.log(order)

//  работает
