import { Trader } from './trader.js'

const traders = []

export function addTrader() {
  const trader = new Trader()
  traders.push(trader)
}

export function getTraderById(id) {
  const trader = traders.find(t => t.id === id)
  if (!trader) {
    console.log('ERRTRADERNOTEXIST')
    return null
  }
  return trader
}

export function getTradersAll() {
  return traders
  // return [...traders].map(trader => structuredClone(trader))
}

export function checkWalletByTraderId(id, side, volume, price, pairCaption) {
  const trader = getTraderById(id)
  if (!trader) return false
  return trader.checkWalletAmount(side, volume, price, pairCaption)
}
