import { computeBids } from '../functions.js'
import { make } from '../orders-make.js'
import { logTraders, getTraderById } from '../traders.js'

const traderId = 'иван_1'
const symbol = 'usdt'

logTraders()
make(traderId, 'sell', 300, 11)
logTraders()
console.log(computeBids())
