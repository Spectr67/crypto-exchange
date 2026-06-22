class Order {
  constructor(volume, price, deal) {
    this.id = crypto.randomUUID().split('-')[0]
    this.symbol = 'ХЛЕБ'
    this.capacity = 1
    this.volume = volume
    this.price = price
    this.deal = deal
    this.isFulfilled = false // потому что в будущем order может быть частично закрытым
  }
}

class Bid {
  constructor() {
    this.ordersIds = []
  }
}

const orders = []

const bidPointers = {
  sell: [],
  buy: [],
}

const bid = () => ({
  sell: bidPointers.sell.map(bp => orders.find(o => o.id === bp)),
  buy: bidPointers.buy.map(bp => orders.find(o => o.id === bp)).filter(),
})

function addOrder(order) {
  orders.push(order)
  bidPointers[order.deal].push(order.id)

  // const foundOrder = bid[order.deal].find(ob => ob.price === order.price)
  // if (foundOrder) foundOrder.volume += order.volume
  // else bid[order.deal].push(order)
  // bid['sell'].sort((newVal, oldVal) => oldVal.price - newVal.price)
  // bid['buy'].sort((newVal, oldVal) => newVal.price - oldVal.price)
}

addOrder(new Order(1, 9, 'buy'))
addOrder(new Order(1, 7, 'buy'))
addOrder(new Order(1, 9, 'buy'))
addOrder(new Order(1, 5, 'buy'))
addOrder(new Order(1, 9, 'buy'))
// addOrder(new Order(1, 99, 'sell'))
// addOrder(new Order(1, 77, 'sell'))
// addOrder(new Order(1, 99, 'sell'))

console.log(orders)
console.log(bidPointers)
console.log(bid())
