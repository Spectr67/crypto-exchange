import { randId } from './functions.js'

const historyDeal = {
  takerId: 0,
  volume: 0,
  cost: 0,
  orderId: 0,
  date: Date.now(),
  // makerId: 0,
  // pairCaption: 'BTC/USDT',
  // side: 'sell',
  // price: 0,
}

const historyDeals = []

function createHistoryDeal(orderId, takerId, volume, cost) {
  return {
    id: randId(),
    date: Date.now(),
    orderId,
    takerId,
    volume,
    cost,
  }
}

export function addHistoryDeal(orderId, takerId, volume, cost) {
  const historyDeal = createHistoryDeal(orderId, takerId, volume, cost)
  historyDeals.push(historyDeal)
}

export function getHistoryDeals() {
  return [...historyDeals].map(o => structuredClone(o))
}
