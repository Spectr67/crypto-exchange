class Orders {
  constructor() {
    this.list = []
  }

  // в идеале делать сортировку не при добавлении ордера, а при чтении
  // и в супер идеале еще и прокешировать
  appendOrder(order) {
    this.list.push(order)
    this.list.sort((newVal, oldVal) => newVal.price - oldVal.price)
    // this.sell.sort((newVal, oldVal) => newVal.price - oldVal.price)
    // this.buy.sort((newVal, oldVal) => newVal.price - oldVal.price)
  }

  getByCaption(caption) {
    return this.list.filter(order => order.caption === caption)
  }

  getByTraderId(traderId) {
    return this.list.filter(order => order.traderId === traderId)
  }
}

export const orders = new Orders()
