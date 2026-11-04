import { coins } from './coins.js'
import Pocket from './pocket.js'

export const wallet = {
  pockets: [],

  pocketsCounter: 0,

  equivalentUSDT: 0,

  getPocketsAll() {
    //
  },

  getPocketsNotEmpty() {
    //
  },

  getPocketBySymbol(symbol) {
    return this.pockets.find(p => p.symbol === symbol)
  },

  addPocket(symbol) {
    if (this.getPocketBySymbol(symbol)) return false
    try {
      const pocket = new Pocket(symbol)
      this.pockets.push(pocket)
      return true
    } catch (e) {
      console.error(e.message)
      return false
    }
  },

  putDownBySymbol(symbol, incomeValue) {
    const pocket = this.getPocketBySymbol(symbol)
    if (!pocket) return false
    return pocket.putDown(incomeValue)
  },

  pickUpBySymbol(symbol, expenseValue) {
    const pocket = this.getPocketBySymbol(symbol)
    if (!pocket) return false
    return pocket.pickUp(expenseValue)
  },
}
