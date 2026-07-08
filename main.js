import { computeBids } from './functions.js'
import { getTraderById, logTraders, traders } from './traders.js'
import { make, orders } from './orders-make.js'
import { take } from './orders-take.js'

logTraders()
console.log(computeBids(), '\n')

make('иван_1', 'sell', 100, 5)
// make('мария_2', 'buy', 50, 2)

logTraders()
console.log(computeBids(), '\n')

take('петр_3', 'buy', 5) // ??? ошибка

logTraders()
console.log(computeBids(), '\n')

// make('иван_1', 'buy', 9, 1)
// make('иван_1', 'buy', 9, 1)
// make('иван_1', 'buy', 5, 1)
// make('иван_1', 'buy', 9, 1)
// make('иван_1', 'buy', 7, 5)
// make('иван_1', 'buy', 9, 1)

// make('мария_2', 'sell', 11, 1)
// make('мария_2', 'sell', 13, 5)
// make('мария_2', 'sell', 15, 1)

// make('мария_2', 'sell', 9, 5)

// console.log(orders)
// console.log('after', computeBids())

// console.log(orders)
// console.log('before', computeBids())

// console.log(users[1].balance)
// console.log(users[2].balance)

// console.log(users[1].balance)
// console.log(users[2].balance)

// console.log(users[1].balance)
// console.log(users[2].balance)

// console.log('after', computeBids())

// console.log(orders)

// swap(takerTraderId, makerTraderId, quote, cost)
