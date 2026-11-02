import { randId } from './functions.js'

export default class Pocket {
  constructor(symbol) {
    this.id = randId()
    this.total = 0
    this.freezed = 0
    this.available = 0
    this.symbol = symbol
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

// export function createPocket(symbol) {
//   return {
//     id: randId(),

//     total: 0,

//     freezed: 0,

//     available: 0,

//     symbol,

//     putDown(incomeValue) {
//       this.available += incomeValue
//       return true
//     },

//     pickUp(expenseValue) {
//       if (this.available < expenseValue) return false
//       this.available -= expenseValue
//       return true
//     },
//   }
// }

// export function getPockets() {
//   return [...pockets].map(p => structuredClone(p))
// }

// export function addPocket(symbol) {
//   const pocket = createPocket(symbol)
//   pockets.push(pocket)
// }

// const pocket = pockets.find(p => p.symbol === symbol)
// if (!pocket) return false
