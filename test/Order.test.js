import { make, orders } from '../orders-make.js'
import { take } from '../orders-take.js'
import { traders, logTraders } from '../traders.js'
logTraders()

make('иван_1', 'sell', 0.5, 40000)

make('мария_2', 'sell', 0.5, 50000)
console.log(orders.sell)
logTraders()

take('петр_3', 'buy', 0.3, null)

console.log(orders.sell[0]?.volume)
logTraders()

take('петр_3', 'buy', null, 20000)

console.log(orders.sell)

logTraders()
