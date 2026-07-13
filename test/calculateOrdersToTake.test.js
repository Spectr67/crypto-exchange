import { computeBids } from '../functions.js'
import { make, orders } from '../orders-make.js'
import { take } from '../orders-take.js'
import { logTraders, getTraderById } from '../traders.js'
import { calculateOrdersToTake } from '../orders-take.js'

make('иван_1', 'sell', 300, 1)
make('иван_1', 'sell', 400, 2)
// console.log(computeBids())
// console.log(orders)
let o = calculateOrdersToTake('sell', 2) // подсчитать стоимость
console.log(o)
// logTraders()
// make('петр_3', 'sell', 300, 2)

// хочу купить 3 хлеба. какая будет у них стоимость ? - зависит от текущей ситуации на рынке

// после сделки на конкретный ордер нужно проверять баланс тейкера

// make('иван_1', 'sell', 100, 2)
// make('иван_1', 'sell', 110, 2)
// console.log(orders.sell)
// console.log(getTraderById('иван_1').frozen)

// const volumeToBuy = 3
// console.log()

// const resultOfTake = calculateOrdersToTake('sell', volumeToBuy)

// console.log(resultOfTake, null, 2)

// console.log(orders.sell)

// if (orders.sell.length === 1 && orders.sell[0].volume === 1) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// const ivanFrozenBread = getTraderById('иван_1').frozen['ХЛЕБ']
// console.log(ivanFrozenBread)

// if (ivanFrozenBread === 1) {
//   console.log(true)
// } else {
//   console.log(false)
// }
