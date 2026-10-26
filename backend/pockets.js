// function updatePocketById(id) {
//   const pocket = pockets.find(p => p.id === id)
// }
// function deposit() {
//   // body
// }

import { randId } from './functions.js'

const pocket = {
  symbol: 'BTC',
  balance: 1500,
  available: 1000,
  freezed: 500,
}

const pockets = []

function createPocket(symbol) {
  return {
    id: randId(),
    total: 0,
    freezed: 0,
    available: 0,
    symbol,
  }
}

function addPocket(symbol) {
  const pocket = createPocket(symbol)
  pockets.push(pocket)
}

function putDown(symbol, incomeValue) {
  if (incomeValue > 100) return false
  const pocket = pockets.find(p => p.symbol === symbol)
  if (!pocket) return false
  pocket.total += incomeValue
  return true
}

function pickUp() {
  // body
}

addPocket('BTC')

console.log(pockets)

console.log(putDown('BTC', 101))

console.log(pockets)
