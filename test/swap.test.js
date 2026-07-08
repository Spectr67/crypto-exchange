import { freezeTraderBalance } from '../orders-make.js'
import { swap } from '../orders-take.js'
import { getTraderById, logTraders } from '../traders.js'

// logTraders()
// freezeTraderBalance('иван_1', 'ХЛЕБ', 5)
// logTraders()
// swap('иван_1', 'петр_3', 'ХЛЕБ', 5)
// logTraders()

// logTraders()
// swap('петр_3', 'иван_1', 'usdt', 500, true)
// logTraders()

logTraders()
freezeTraderBalance('иван_1', 'ХЛЕБ', 5)
logTraders()
swap('иван_1', 'петр_3', 'ХЛЕБ', 5)
logTraders()
swap('петр_3', 'иван_1', 'usdt', 500, true)
logTraders()
