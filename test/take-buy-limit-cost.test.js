import { make, Order, orders } from '../orders-make.js'
import { take } from '../orders-take.js'
import { traders } from '../traders.js'
import { transferBalancePay } from '../transfer.js'

const maker = traders[0]
const taker = traders[1]
console.log(maker)
console.log(taker)

make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 1100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])

console.log(maker)
console.log(taker)
console.log(orders.buy.length)
console.log('orders.buy.length')
console.log(orders.sell.length)
console.log('orders.sell.length')
take('мария_2', 'buy', ['BTC', 'USDT'], Infinity, 1000)

// take('мария_2', 'sell', ['USDT', 'BTC'], Infinity, 229)

console.log(maker)
console.log(taker)
// // console.log(orders)
orders.buy.forEach(order => {
  console.log('volume :>> ', order.volume)
  console.log('price  :>> ', order.price)
})
