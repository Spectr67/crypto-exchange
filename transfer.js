// вызывается для выполнения каждого ордера, который пришел
// если трансфер дил вернул false, то выкуп остальных ордеров по списку прекращаем
// ВНЕЗАПНО 2 варианта ТЕЙКА!!

import { checkPositive } from './functions.js'
import { getTraderById } from './traders.js'

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

// убрать экспорт
// к моменту вызова этой функции ордер уже оплачен из баланса тейкера
export function transferBalancePay(taker, order, symbol, sum) {
  taker.balance[symbol] += sum
  order.volume = 0 // обнуление не самый лучший ход
  return true
}

// убрать экспорт
export function transferBalancePayback(taker, maker, symbol, sum) {
  if (!checkPositive(sum)) return false
  if (taker.balance[symbol] < sum) return false
  taker.balance[symbol] -= sum
  maker.balance[symbol] += sum
  return true
}
