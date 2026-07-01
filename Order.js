class Order {
  constructor(traderId, side, price, volume) {
    this.id = crypto.randomUUID().split('-')[0]
    this.symbol = 'ХЛЕБ'
    this.capacity = volume // read only
    this.volume = volume
    this.price = price
    this.side = side
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

function swap(fromTraderId, toTraderId, symbol, count) {
  // body
}

function deal(takerTraderId, makerTraderId, symbol, volume, cost, side) {
  if (order.side === 'sell') {
    swap(takerTraderId, makerTraderId, symbol, cost)
    swap(makerTraderId, takerTraderId, symbol, volume)
  }
  if (order.side === 'buy') {
    swap(makerTraderId, takerTraderId, symbol, cost)
    swap(takerTraderId, makerTraderId, symbol, volume)
  }
}

function computeBids() {
  const bids = { sell: [], buy: [] }
  const side = ['buy', 'sell']
  side.forEach(s => {
    orders[s].forEach(ob => {
      const bid = bids[s].find(bid => bid[0] === ob.price)
      if (!bid) bids[s].push([ob.price, ob.volume])
      else bid[1] += ob.volume
    })
  })
  return bids
}

function appendOrder(order) {
  orders[order.side].push(order)
  orders['sell'].sort((newVal, oldVal) => oldVal.price - newVal.price)
  orders['buy'].sort((newVal, oldVal) => newVal.price - oldVal.price)
}

function takeOrder(takerId, side, volume, symbol) {
  const targetPool = side === 'buy' ? 'sell' : 'buy'
  let remainingVolume = volume
  const ordersToClose = []
  const bestOrder = orders[targetPool].at(-1)
  if (bestOrder.volume >= volume) {
    bestOrder.volume -= volume
    ordersToClose.push(bestOrder)
    if (bestOrder.volume === 0) ordersToClose.push(bestOrder)
  } else {
    while (remainingVolume > 0 && orders[targetPool].length > 0) {
      const bestOrder = orders[targetPool].at(-1)
      if (bestOrder.volume <= remainingVolume) {
        remainingVolume -= bestOrder.volume
        bestOrder.volume = 0
        orders[targetPool].pop()
        ordersToClose.push(bestOrder)
      }
    }
  }

  ordersToClose.forEach(order => closeOrder(order))
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

  if (order.side === 'sell') {
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
    `deal ${order.side === 'sell' ? 'SELL' : 'BUY'} PRICE ${order.price} VOLUME ${totalVolume}`,
  )

  console.log('new balanses:')
  console.log(`${trader.name}:`, trader.balance)
  takers.forEach(t => console.log(`${t.name}:`, t.balance))
}

function make(traderId, side, price, volume) {
  // TODO: проверить есть ли баланс
  appendOrder(new Order(traderId, side, price, volume))
}

make('иван_1', 'buy', 9, 1)
make('иван_1', 'buy', 9, 1)
make('иван_1', 'buy', 5, 1)
make('иван_1', 'buy', 9, 1)
make('иван_1', 'buy', 7, 5)
make('иван_1', 'buy', 9, 1)

make('мария_2', 'sell', 11, 1)
make('мария_2', 'sell', 13, 5)
make('мария_2', 'sell', 15, 1)
make('мария_2', 'sell', 9, 2)

console.log(orders)
console.log('before', computeBids())

console.log(users[1].balance)
console.log(users[2].balance)

takeOrder('петр_3', 'buy', 1, 'ХЛЕБ')

// console.log(users[1].balance)
// console.log(users[2].balance)

// takeOrder('петр_3', 'buy', 1, 'ХЛЕБ')

console.log(users[1].balance)
console.log(users[2].balance)

console.log('after', computeBids())

console.log(orders)
