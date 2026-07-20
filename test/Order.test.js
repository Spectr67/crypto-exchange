import { Order } from '../orders-make.js'
import { traders } from '../traders.js'

const maker = traders[0]

console.log(maker)

const order = new Order(maker.id, 'buy', 1, 5001)

console.log(order)

console.log(maker)
