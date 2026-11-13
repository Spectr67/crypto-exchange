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

function createHistoryDeal(orderId, takerId, volume) {
  return {
    id: randId(),
    date: Date.now(),
    orderId,
    takerId,
    volume,
    // cost, // computed
    getPrice() {
      // const order = {} // getOrderById(this.orderId)
      // console.log(order)
      return order.price
    },
  }
}

export function getLastPrice() {
  //
}

export function addHistoryDeal(orderId, takerId, volume) {
  const historyDeal = createHistoryDeal(orderId, takerId, volume)
  historyDeals.push(historyDeal)
}

export function getHistoryDeals() {
  return [...historyDeals].map(o => structuredClone(o))
}
