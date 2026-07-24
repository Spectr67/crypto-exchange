import { computeBids } from './functions.js'
import { getTraderById, logTraders, traders } from './traders.js'
import { make, orders } from './orders-make.js'
import { take } from './orders-take.js'

// make('мария_2', 'buy', 50, 2)

console.log(computeBids(), '\n')

console.log(traders[0])
console.log(traders[1])
console.log(computeBids(), '\n')
make('иван_1', 'sell', 1, 300)
make('иван_1', 'sell', 1, 400)
make('иван_1', 'sell', 1, 200)
make('иван_1', 'sell', 1, 500)
make('иван_1', 'sell', 1, 100)
console.log(traders[0])
console.log(traders[1])
console.log(computeBids(), '\n')
take('мария_2', 'sell')
console.log('===')
console.log(traders[0])
console.log(traders[1])
console.log(computeBids(), '\n')
