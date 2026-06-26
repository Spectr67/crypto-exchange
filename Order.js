class Order {
  constructor(deal, price, volume) {
    this.id = crypto.randomUUID().split('-')[0]
    this.symbol = 'ХЛЕБ'
    this.capacity = volume
    this.volume = volume
    this.price = price
    this.deal = deal
  }

  // потому что в будущем order может быть частично закрытым
  get isFulfilled() {
    return this.capacity === 0
  }
}

const orders = {
  sell: [],
  buy: [],
}

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

function takeOrder(deal, volume, symbol) {
  // body
}

makeOrder(new Order('buy', 9, 1))
makeOrder(new Order('buy', 5, 1))
makeOrder(new Order('buy', 9, 1))
makeOrder(new Order('buy', 7, 5))
makeOrder(new Order('buy', 9, 1))
makeOrder(new Order('sell', 11, 1))
makeOrder(new Order('sell', 13, 5))
makeOrder(new Order('sell', 11, 1))

console.log(computeBids())

// console.log(orders)
