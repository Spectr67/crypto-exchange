import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'

// const symbols = ['USDT', 'ХЛЕБ']
// const pairs = [`${symbols[0]}/${symbols[1]}`]
// const pair = {
//   BTC: 'USTD', // BTC / USDT |
//   // sell: продаём бтц за доллар
//   // buy: покупаем бтц за доллар
// }

// createTrader()

export const traders = [
  {
    id: 'иван_1',
    // name: 'Иван',
    // frozen: { usdt: 0, ХЛЕБ: 0 },
    // getFrozen() {
    //   return orders['sell']
    //     .filter(o => o.traderId === 'иван_1')
    //     .reduce((acc, item) => item.volume + acc, 0)
    // },
    balance: { usdt: 1000, ХЛЕБ: 10 },
  },
  {
    id: 'мария_2',
    // name: 'Мария',
    // frozen: { usdt: 0, ХЛЕБ: 0 },
    balance: { usdt: 500, ХЛЕБ: 5 },
  },
  // {
  //   id: 'петр_3',
  //   name: 'Петр',
  //   frozen: { usdt: 0, ХЛЕБ: 0 },
  //   balance: { usdt: 2000, ХЛЕБ: 5 },
  // },
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

export function transferBalancePay(taker, order, volume) {
  if (!checkPositive(volume)) return false
  if (order.volume < volume) return false
  order.volume -= volume
  taker.balance[order.symbol] += volume
  return true
}

export function transferBalancePayback(taker, maker, symbol, volume) {
  if (!checkPositive(volume)) return false
  if (taker.balance[symbol] < volume) return false
  taker.balance[symbol] -= volume
  maker.balance[symbol] += volume
  return true
}

// ?pair?
// вызывается для выполнения каждого ордера, который пришел
// из функции calculateOrdersToTake
export function transferDeal(taker, order) {
  const asset = 'ХЛЕБ'
  const quote = 'usdt'

  if (side === 'buy') {
    swap(makerTraderId, takerTraderId, asset, volume)
    swap(takerTraderId, makerTraderId, quote, cost, true)
  }
  if (side === 'sell') {
    swap(makerTraderId, takerTraderId, quote, cost)
    swap(takerTraderId, makerTraderId, asset, volume, true)
  }
}
