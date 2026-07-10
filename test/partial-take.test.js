import { computeBids } from '../functions.js'
import { make, orders } from '../orders-make.js'
import { take } from '../orders-take.js'
import { logTraders, getTraderById } from '../traders.js'
import { calculateOrdersToTake } from '../orders-take.js'

console.log(logTraders())
make('иван_1', 'sell', 300, 2)
take('мария_2', 'buy', 300, 1)
console.log(logTraders())
// console.log(computeBids())
// console.log(orders)
let o = calculateOrdersToTake('sell', 1) // подсчитать стоимость
console.log(o)
