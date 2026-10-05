// вызывается для выполнения каждого ордера, который пришел
// если трансфер дил вернул false, то выкуп остальных ордеров по списку прекращаем
// ВНЕЗАПНО 2 варианта ТЕЙКА!!

import { checkPositive } from './functions.js'
import { getTraderById } from './traders.js'

// ограничение либо по объёму закупки либо по сумме закупки
export function transferDeal(taker, order, limitVolume, limitCost) {
  if (order.isInvalid) {
    console.log('ERRINVALIDORDER')
    return { payback: false, pay: false }
  }
  const maker = getTraderById(order.traderId)

  if (order.side === 'sell') {
    // if (limitVolume === 0) return
    if (order.volume > limitVolume) {
      // для упрощения кода
      // если ордер слишком большой, то мы прерываем take
      // по-хорошему в этой ситуации нужно выкупить ордер частично
      return { payback: false, pay: false }
    }
    if (order.cost > limitCost) {
      return { payback: false, pay: false }
    }
    const payback = transferBalancePayback(
      taker,
      maker,
      order.pair[1],
      order.cost,
    )

    if (payback === false) {
      console.log('order do not transfer "sell"')
      return { payback: false, pay: false }
    }

    const pay = transferBalancePay(taker, order, order.pair[0], order.volume)

    return { payback, pay }
  }

  if (order.side === 'buy') {
    if (order.volume > limitVolume) {
      return { payback: false, pay: false }
    }
    if (order.cost > limitCost) {
      return { payback: false, pay: false }
    }
    const payback = transferBalancePayback(
      taker,
      maker,
      order.pair[0],
      order.volume,
    )

    if (payback === false) {
      console.log('order do not transfer "buy"')
      return { payback: false, pay: false }
    }

    // taker получает BTC
    // maker отдаёт BTC
    const pay = transferBalancePay(taker, order, order.pair[1], order.cost)

    return { payback, pay }
  }

  return { payback: false, pay: false }
}

// убрать экспорт
// к моменту вызова этой функции ордер уже оплачен из баланса тейкера
export function transferBalancePay(taker, order, symbol, sum) {
  taker.balance[symbol] += sum
  order.volume = 0 // обнуление не самый лучший ход
  return sum
}

// убрать экспорт
export function transferBalancePayback(taker, maker, symbol, sum) {
  if (!checkPositive(sum)) return false
  if (taker.balance[symbol] < sum) return false
  taker.balance[symbol] -= sum
  maker.balance[symbol] += sum
  return sum
}
