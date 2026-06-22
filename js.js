console.log(crypto.randomUUID())

const d = [
  {
    id: 'a1dba49b',
    symbol: 'ХЛЕБ',
    volume: 1,
    price: 9,
    deal: 'buy',
    isFulfilled: false,
  },
  {
    id: '898f3fa9',
    symbol: 'ХЛЕБ',
    volume: 1,
    price: 7,
    deal: 'buy',
    isFulfilled: false,
  },
  {
    id: '48613026',
    symbol: 'ХЛЕБ',
    volume: 1,
    price: 9,
    deal: 'buy',
    isFulfilled: false,
  },
  {
    id: '8c167012',
    symbol: 'ХЛЕБ',
    volume: 1,
    price: 5,
    deal: 'buy',
    isFulfilled: false,
  },
  {
    id: '197bdb4c',
    symbol: 'ХЛЕБ',
    volume: 1,
    price: 9,
    deal: 'buy',
    isFulfilled: false,
  },
]

console.log(Object.groupBy(d, o => o.price))
