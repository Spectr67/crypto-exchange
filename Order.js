class Order {
  constructor(traderId, deal, price, volume) {
    this.id = crypto.randomUUID().split('-')[0]
    this.symbol = 'ХЛЕБ'
    this.capacity = volume
    this.volume = volume
    this.price = price
    this.deal = deal
    this.traderId = traderId
    this.takersIds = []
  }

  get isFulfilled() {
    return this.volume === 0
  }
}

const orders = {
  sell: [],
  buy: [],
}

const users = [
  { id: 'иван_1', name: 'Иван', balance: { usdt: 1000, ХЛЕБ: 10 } },
  { id: 'мария_2', name: 'Мария', balance: { usdt: 500, ХЛЕБ: 5 } },
  { id: 'петр_3', name: 'Петр', balance: { usdt: 2000, ХЛЕБ: 0 } },
]

function computeBids() {
  const bids = { sell: [], buy: [] }
  const deal = ['buy', 'sell']
  deal.forEach(d => {
    orders[d].forEach(ob => {
      const bid = bids[d].find(bid => bid[0] === ob.price)
      if (!bid) bids[d].push([ob.price, ob.volume])
      else bid[1] += ob.volume
    })
  })
  return bids
}

function makeOrder(order) {
  orders[order.deal].push(order)
  orders['sell'].sort((newVal, oldVal) => oldVal.price - newVal.price)
  orders['buy'].sort((newVal, oldVal) => newVal.price - oldVal.price)
}

function takeOrder(takerId, deal, volume, symbol) {
  const targetPool = deal === 'buy' ? 'sell' : 'buy'
  let remainingVolume = volume
  const closedOrders = []

  while (remainingVolume > 0 && orders[targetPool].length > 0) {
    const bestOrder = orders[targetPool][orders[targetPool].length - 1]

    if (!bestOrder.takersIds.includes(takerId)) {
      bestOrder.takersIds.push(takerId)
    }

    if (bestOrder.volume <= remainingVolume) {
      remainingVolume -= bestOrder.volume
      bestOrder.volume = 0

      orders[targetPool].pop()
      closedOrders.push(bestOrder)
    } else {
      bestOrder.volume -= remainingVolume
      bestOrder.capacity = remainingVolume
      remainingVolume = 0
    }
  }

  closedOrders.forEach(order => closeOrder(order))
  return remainingVolume
}

function closeOrder(order) {
  const trader = users.find(u => u.id === order.traderId)
  const takers = users.filter(u => order.takersIds.includes(u.id))
  const totalVolume = order.capacity
  const totalPrice = totalVolume * order.price

  if (!trader || takers.length === 0) return

  const volumePerTaker = totalVolume / takers.length
  const pricePerTaker = totalPrice / takers.length

  if (order.deal === 'sell') {
    trader.balance.ХЛЕБ -= totalVolume
    trader.balance.usdt += totalPrice

    takers.forEach(taker => {
      taker.balance.usdt -= pricePerTaker
      taker.balance.ХЛЕБ += volumePerTaker
    })
  } else {
    trader.balance.usdt -= totalPrice
    trader.balance.ХЛЕБ += totalVolume

    takers.forEach(taker => {
      taker.balance.ХЛЕБ -= volumePerTaker
      taker.balance.usdt += pricePerTaker
    })
  }
  console.log(`\n=== order ${order.id} closed ===`)
  console.log(`Maker: ${trader.name}`)
  console.log(`Takers: ${takers.map(t => t.name).join(', ')}`)
  console.log(
    `deal ${order.deal === 'sell' ? 'SELL' : 'BUY'} PRICE ${order.price} VOLUME ${totalVolume}`,
  )

  console.log('new balanses:')
  console.log(`${trader.name}:`, trader.balance)
  takers.forEach(t => console.log(`${t.name}:`, t.balance))
}

makeOrder(new Order('иван_1', 'buy', 9, 1))
makeOrder(new Order('иван_1', 'buy', 5, 1))
makeOrder(new Order('иван_1', 'buy', 9, 1))
makeOrder(new Order('иван_1', 'buy', 7, 5))
makeOrder(new Order('иван_1', 'buy', 9, 1))

makeOrder(new Order('мария_2', 'sell', 11, 1))
makeOrder(new Order('мария_2', 'sell', 13, 5))
makeOrder(new Order('мария_2', 'sell', 15, 1))
makeOrder(new Order('мария_2', 'sell', 9, 1))
makeOrder(new Order('мария_2', 'sell', 100, 10))

console.log('before', computeBids())

takeOrder('петр_3', 'buy', 2, 'ХЛЕБ')
console.log(users[2].balance)

console.log('\nafter', computeBids())
