import { getCoins, getCount, isExistsCoinBySymbol } from '../coins.js'

const coins = getCoins()
console.log(coins)

const count = getCount()
console.log(count)

const isExists = isExistsCoinBySymbol('ETH')
console.log(isExists)
