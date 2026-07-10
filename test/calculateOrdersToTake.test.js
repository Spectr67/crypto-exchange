import { computeBids } from '../functions.js'
import { make, orders } from '../orders-make.js'
import { take } from '../orders-take.js'
import { logTraders, getTraderById } from '../traders.js'
import { calculateOrdersToTake } from '../orders-take.js'

make('иван_1', 'sell', 300, 1)
console.log(computeBids())
console.log(orders)
let o = calculateOrdersToTake('sell', 1) // подсчитать стоимость
console.log(o)
// logTraders()
// make('петр_3', 'sell', 300, 2)

// хочу купить 3 хлеба. какая будет у них стоимость ? - зависит от текущей ситуации на рынке

// после сделки на конкретный ордер нужно проверять баланс тейкера
//
