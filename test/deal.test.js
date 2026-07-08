import { freezeTraderBalance, unfreezeTraderBalance } from '../orders-make.js'
import { deal } from '../orders-take.js'
import { logTraders } from '../traders.js'

// freezeTraderBalance('иван_1', 'ХЛЕБ', 5)
// logTraders()
// deal('петр_3', 'иван_1', 5, 500, 'buy')
// logTraders()

logTraders()
freezeTraderBalance('иван_1', 'usdt', 500)
logTraders()
deal('петр_3', 'иван_1', 5, 500, 'sell')
logTraders()
