import { make, Order, orders } from '../orders-make.js'
import { take } from '../orders-take.js'
import { traders } from '../traders.js'
import { transferBalancePay } from '../transfer.js'

const maker = traders[0]
const taker = traders[1]
console.log(maker)
console.log(taker)

make('иван_1', 'sell', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 100, ['BTC', 'USDT'])

console.log(maker)
console.log(taker)
console.log(orders)

take('мария_2', 'sell', ['BTC', 'USDT'], 1)

console.log(maker)
console.log(taker)
console.log(orders)
