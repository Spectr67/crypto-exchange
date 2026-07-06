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

const traders = [
  {
    id: 'иван_1',
    name: 'Иван',
    frozen: { usdt: 0, ХЛЕБ: 0 },
    balance: { usdt: 1000, ХЛЕБ: 10 },
  },
  {
    id: 'мария_2',
    name: 'Мария',
    frozen: { usdt: 0, ХЛЕБ: 0 },
    balance: { usdt: 500, ХЛЕБ: 5 },
  },
  {
    id: 'петр_3',
    name: 'Петр',
    frozen: { usdt: 0, ХЛЕБ: 0 },
    balance: { usdt: 2000, ХЛЕБ: 0 },
  },
]

function take(takerTraderId, side, volume) {
  if (!checkPositive(volume)) return
  const targetPool = side === 'buy' ? 'sell' : 'buy'
  const currentOrders = calculateOrdersToTake(takerTraderId, targetPool, volume)
  if (currentOrders.length === 0) {
    return
  }

  currentOrders.forEach(co => {
    co.order.takersIds.push(takerTraderId)
    deal(takerTraderId, co.order.traderId, co.volume, co.cost, side)
    if (co.order.isFulfilled) {
      closeOrder(co.order)
    }
  })
}

function calculateOrdersToTake(takerId, targetPool, volume) {
  let remainingVolume = volume
  const ordersToTake = []

  while (remainingVolume > 0 && orders[targetPool].length > 0) {
    const bestOrder = orders[targetPool].at(-1)
    const volumeToTake = Math.min(remainingVolume, bestOrder.volume)

    ordersToTake.push({
      order: bestOrder,
      volume: volumeToTake,
      cost: volumeToTake * bestOrder.price,
    })

    remainingVolume -= volumeToTake
    bestOrder.volume -= volumeToTake

    if (bestOrder.volume === 0) {
      orders[targetPool].pop()
    }
  }

  return ordersToTake
}

function swap(fromTraderId, toTraderId, symbol, count) {
  const fromTrader = getTraderById(fromTraderId)
  const toTrader = getTraderById(toTraderId)

  if (!fromTrader || !toTrader) return
  if (fromTrader.frozen[symbol] >= count) {
    fromTrader.frozen[symbol] -= count
  } else {
    fromTrader.balance[symbol] -= count
  }

  toTrader.balance[symbol] += count
}

function deal(takerTraderId, makerTraderId, volume, cost, side) {
  const asset = 'ХЛЕБ'
  const quote = 'usdt'

  if (side === 'buy') {
    swap(takerTraderId, makerTraderId, quote, cost)
    swap(makerTraderId, takerTraderId, asset, volume)
  } else if (side === 'sell') {
    swap(takerTraderId, makerTraderId, asset, volume)
    swap(makerTraderId, takerTraderId, quote, cost)
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
  const trader = traders.find(u => u.id === order.traderId)
  const takers = traders.filter(u => order.takersIds.includes(u.id))
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
  if (!checkPositive(price, volume)) return
  if (!checkBalanceByTraderId(traderId, side, price, volume)) return
  const newOrder = new Order(traderId, side, price, volume)
  appendOrder(newOrder)
}

function checkBalanceByTraderId(traderId, side, price, volume) {
  const trader = getTraderById(traderId)
  if (!trader) return
  const symbol = 'ХЛЕБ'
  const cost = price * volume
  if (side === 'sell') return compareBalance(trader, symbol, volume)
  if (side === 'buy') return compareBalance(trader, 'usdt', cost)
}

function freezeTraderBalance(traderId, symbol, count) {
  getTraderById(traderId).balance[symbol] -= count
  getTraderById(traderId).frozen[symbol] += count
}
function unfreezeTraderBalance(traderId, symbol, count) {
  getTraderById(traderId).frozen[symbol] -= count
  getTraderById(traderId).balance[symbol] += count
}
function getTraderById(id) {
  const trader = traders.find(u => u.id === id)
  if (!trader) {
    console.log('trader not exist')
    return false
  }
  return trader
}
function checkPositive(...numbers) {
  const result = numbers.every(n => typeof n === 'number' && n > 0)
  if (!result) console.log('error: has negative number...')
  return result
}
function compareBalance(trader, symbol, requireBalance) {
  if (trader.balance[symbol] < requireBalance) {
    console.log(`DENIED: ${trader.name} NOT ENOUGH ${symbol}`)
    return false
  }
  freezeTraderBalance(trader.id, symbol, requireBalance)
  console.log(`GRANTED: ${trader.name} FREEZED ${symbol} : ${requireBalance}`)
  return true
}

traders.forEach(t => {
  console.log(`${t.name} -> Balance:`, t.balance, '| Frozen:', t.frozen)
})
console.log('Bids:', computeBids())

make('иван_1', 'sell', 100, 5)
make('мария_2', 'buy', 50, 2)

traders.forEach(t => {
  console.log(`${t.name} -> Balance:`, t.balance, '| Frozen:', t.frozen)
})
console.log('Bids:', computeBids())

take('петр_3', 'buy', 33)

traders.forEach(t => {
  console.log(`${t.name} -> Balance:`, t.balance, '| Frozen:', t.frozen)
})
console.log('Bids:', computeBids())

// make('иван_1', 'buy', 9, 1)
// make('иван_1', 'buy', 9, 1)
// make('иван_1', 'buy', 5, 1)
// make('иван_1', 'buy', 9, 1)
// make('иван_1', 'buy', 7, 5)
// make('иван_1', 'buy', 9, 1)

// make('мария_2', 'sell', 11, 1)
// make('мария_2', 'sell', 13, 5)
// make('мария_2', 'sell', 15, 1)

// make('мария_2', 'sell', 9, 5)

// console.log(orders)
// console.log('after', computeBids())

// console.log(orders)
// console.log('before', computeBids())

// console.log(users[1].balance)
// console.log(users[2].balance)

// takeOrder('петр_3', 'buy', 1, 'ХЛЕБ')

// console.log(users[1].balance)
// console.log(users[2].balance)

// takeOrder('петр_3', 'buy', 1, 'ХЛЕБ')

// console.log(users[1].balance)
// console.log(users[2].balance)

// console.log('after', computeBids())

// console.log(orders)

// swap(takerTraderId, makerTraderId, quote, cost)
