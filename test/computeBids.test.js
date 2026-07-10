import { computeBids } from '../functions.js'
import { make } from '../orders-make.js'
import { take } from '../orders-take.js'
import { logTraders, getTraderById } from '../traders.js'

// logTraders()
// make('иван_1', 'sell', 300, 1)
// make('петр_3', 'sell', 300, 2)
logTraders()
console.log(computeBids())
take('мария_2', 'buy', 1)
logTraders()
console.log(computeBids())

// при take почему то затронут balance мейкера
// а должен быть затронут только frozen

// при take у тейкера при нулевом балансе списываются balance и уходит в отрицательные числа
