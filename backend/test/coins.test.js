import {
  getAllCoins,
  getCount,
  isExistsCoinBySymbol,
  addCoin,
  removeCoinBySymbol,
  updateCoinBySymbol,
} from '../coins.js'

const copyCoins = getAllCoins()
console.log(copyCoins)

const count = getCount()
console.log(count)

const isExists = isExistsCoinBySymbol('ETH')
console.log(isExists)

const isAdded = addCoin('SOL', 'Solana')
console.log(isAdded)

console.log(getAllCoins())

const isUpdated = updateCoinBySymbol('BTC', 'Bitcoin Updated')
console.log(isUpdated)

console.log(getAllCoins())

const isRemoved = removeCoinBySymbol('LTC')
console.log(isRemoved)

console.log(getAllCoins())
console.log(getCount())

console.log(
  Object.getPrototypeOf(copyCoins) === Object.getPrototypeOf(getAllCoins()),
)
