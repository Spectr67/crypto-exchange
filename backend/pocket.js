import { getAllCoins } from './coins.js'
import { randId } from './functions.js'

export default class Pocket {
  constructor(symbol) {
    const coins = getAllCoins()
    if (!coins[symbol]) throw new Error(`not valid symbol ${symbol}`)
    this.id = randId()
    this.total = 0 // производная от this.freezed + this.available
    this.freezed = 0 // производная от orders
    this.available = 0
    this.symbol = symbol
  }

  hasAvailableAmount(amount) {
    return this.available >= amount
  }

  putDown(incomeValue) {
    this.available += incomeValue
    return true
  }

  pickUp(expenseValue) {
    if (this.available < expenseValue) return false
    this.available -= expenseValue
    return true
  }
}

// export function getPockets() {
//   return [...pockets].map(p => structuredClone(p))
// }

// export function addPocket(symbol) {
//   const pocket = createPocket(symbol)
//   pockets.push(pocket)
// }

// const pocket = pockets.find(p => p.symbol === symbol)
// if (!pocket) return false
