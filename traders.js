import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'

// createTrader()

export const traders = [
  {
    id: 'иван_1',
    balance: { USDT: 0, BTC: 15 },
  },
  {
    id: 'мария_2',
    balance: { USDT: 1000, BTC: 0 },
  },
]
// export const traders = [
//   {
//     id: 'иван_1',
//     balance: { USDT: 1500, BTC: 0 },
//   },
//   {
//     id: 'мария_2',
//     balance: { USDT: 1000, BTC: 5 },
//   },
// ]

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

// к моменту вызова этой функции ордер уже оплачен из баланса тейкера
export function transferBalancePay(taker, order, symbol, sum) {
  taker.balance[symbol] += sum
  order.volume -= sum
  return true
}

export function transferBalancePayback(taker, maker, symbol, sum) {
  if (!checkPositive(sum)) return false
  if (taker.balance[symbol] < sum) return false
  taker.balance[symbol] -= sum
  maker.balance[symbol] += sum
  return true
}

// вызывается для выполнения каждого ордера, который пришел
// из функции calculateOrdersToTake
// для payback всегда считаем cost
// ВНЕЗАПНО 2 варианта ТЕЙКА!!
// ограничение либо по объёму закупки либо по сумме закупки
export function transferDeal(taker, order, limitVolume, limitCost) {
  if (order.isInvalid) {
    console.log('ERRINVALIDORDER')
    return
  }
  const maker = getTraderById(order.traderId)

  if (order.side === 'sell') {
    if (transferBalancePayback(taker, maker, order.pair[1], order.cost)) {
      return transferBalancePay(taker, order, order.pair[0], order.volume)
    } else {
      console.log('order do not transfer "sell"')
      return false
    }
  }
  if (order.side === 'buy') {
    if (transferBalancePayback(taker, maker, order.pair[0], order.volume)) {
      return transferBalancePay(taker, order, order.pair[1], order.cost)
    } else {
      console.log('order do not transfer "buy"')
      return false
    }
  }
}
