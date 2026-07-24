import { checkTraderBalance } from '../functions.js'
import { traders } from '../traders.js'
const pair = ['BTC', 'USDT']

console.log(traders[0])

const canSellSuccess = checkTraderBalance(traders[0].id, 'sell', 1, 50000, pair)
console.log(canSellSuccess)

const canSellFail = checkTraderBalance(traders[0].id, 'sell', 9999, 50000, pair)
console.log(canSellFail)

const canBuySuccess = checkTraderBalance(traders[0].id, 'buy', 50, 100, pair)
console.log(canBuySuccess)

const canBuyFail = checkTraderBalance(traders[0].id, 'buy', 5000, 1000, pair)
console.log(canBuyFail)
const invalidTrader = checkTraderBalance('non_id', 'buy', 1, 100, pair)
console.log(invalidTrader)

const invalidSide = checkTraderBalance(traders[0].id, 'hold', 1, 100, pair)
console.log(invalidSide)
