export const traders = [
  {
    id: 'иван_1',
    name: 'Иван',
    frozen: { usdt: 0, ХЛЕБ: 0 },
    balance: { usdt: 1000, ХЛЕБ: 10 },
  },
  // {
  //   id: 'мария_2',
  //   name: 'Мария',
  //   frozen: { usdt: 0, ХЛЕБ: 0 },
  //   balance: { usdt: 500, ХЛЕБ: 5 },
  // },
  {
    id: 'петр_3',
    name: 'Петр',
    frozen: { usdt: 0, ХЛЕБ: 0 },
    balance: { usdt: 2000, ХЛЕБ: 5 },
  },
]

export function getTraderById(id) {
  const trader = traders.find(u => u.id === id)
  if (!trader) {
    console.log('trader not exist')
    return false
  }
  return trader
}

export function logTraders() {
  traders.forEach(t => {
    console.log(`${t.name} -> `)
    console.log(`Balance:`, t.balance)
    console.log(`Frozen:`, t.frozen)
  })
  console.log('')
}
