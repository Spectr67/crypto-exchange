import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'

// createTrader()

export const traders = [
  {
    id: 'иван_1',
    // name: 'Иван',
    balance: { USDT: 10000, BTC: 3 },
  },
  {
    id: 'мария_2',
    // name: 'Мария',
    balance: { USDT: 10000, BTC: 3 },
  },
  {
    id: 'петр_3',
    // name: 'Петр',
    balance: { USDT: 10000, BTC: 3 },
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

// к моменту вызова этой функции ордер уже оплачен из баланса тейкера
export function transferBalancePay(taker, order, symbol) {
  taker.balance[symbol] += order.volume
  order.volume = 0
  return true
}

export function transferBalancePayback(taker, maker, symbol, sum) {
  if (!checkPositive(sum)) return false
  // у тейкера не хватает денег для полного выкупа ордера
  if (taker.balance[symbol] < sum) return false
  taker.balance[symbol] -= sum
  maker.balance[symbol] += sum
  return true
}

// ?pair?
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
    console.log('!!!!!')
    transferBalancePayback(taker, maker, order.pair[1], order.cost)
    transferBalancePay(taker, order, order.pair[0])
  }
  if (order.side === 'buy') {
    transferBalancePay(taker, order, order.pair[1])
    transferBalancePayback(taker, maker, order.pair[0], order.volume)
  }
}
