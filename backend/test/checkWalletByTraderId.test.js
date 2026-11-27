import { getTradersAll, addTrader, checkWalletByTraderId } from '../traders.js'

const symbols = ['BTC', 'USDT']
const traders = getTradersAll()

addTrader()

traders[0].deposit('USDT', 10000)
traders[0].deposit('BTC', 15)

console.log(traders[0])

const canSellSuccess = checkWalletByTraderId(
  traders[0].id,
  'sell',
  15,
  50000,
  symbols,
)
console.log(canSellSuccess)

const canSellFail = checkWalletByTraderId(
  traders[0].id,
  'sell',
  16,
  50000,
  symbols,
)
console.log(canSellFail)

const canBuySuccess = checkWalletByTraderId(
  traders[0].id,
  'buy',
  1,
  10000,
  symbols,
)
console.log(canBuySuccess)

const canBuyFail = checkWalletByTraderId(
  traders[0].id,
  'buy',
  1,
  10001,
  symbols,
)
console.log(canBuyFail)
const invalidTrader = checkWalletByTraderId('non_id', 'buy', 1, 100, symbols)
console.log(invalidTrader)

const invalidSide = checkWalletByTraderId(
  traders[0].id,
  'hold',
  1,
  100,
  symbols,
)
console.log(invalidSide)
