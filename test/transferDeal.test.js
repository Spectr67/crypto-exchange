import { Order } from '../orders-make.js'
import { traders, transferDeal } from '../traders.js'

const maker = traders[0]
const taker = traders[1]

console.log(maker)
console.log(taker)
const order = new Order(maker.id, 'sell', 50, 3, 'ХЛЕБ')

console.log(maker)
console.log(taker)
console.log(order)
transferDeal(taker, order)
console.log(maker)
console.log(taker)
console.log(order)
