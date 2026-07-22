import { Order } from '../orders-make.js'
import { traders, transferDeal } from '../traders.js'

const maker = traders[0]
const taker = traders[1]

console.log(maker)
console.log(taker)
const order = new Order(maker.id, 'buy', 3, 50, ['BTC', 'USDT'])
// то что отнялось 150 это норма, потому что это обычная заморозка
console.log(maker)
console.log(taker)
console.log(order)
transferDeal(taker, order)
console.log(maker)
console.log(taker)
console.log(order)

order.cancel()

console.log(maker)
