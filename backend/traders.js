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
}
