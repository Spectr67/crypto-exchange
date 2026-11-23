import { getTraderById } from '../traders.js'
import { transferDeal } from '../transfer.js'

export function take(traderId, side, caption, limitVolume, limitCost) {
  const taker = getTraderById(traderId)
  if (!taker) return
  if (side === 'buy') {
    if (limitCost !== Infinity) {
      // if limitByCost
      console.log('BUY limitByCost')
      let currentLimitCost = limitCost
      // заменить orders[side] на orders.getByCaption(caption).filter(order => order.side === side)
      // const ordersSide = . . .
      for (const order of orders[side]) {
        const dealResult = transferDeal(
          taker,
          order,
          Infinity,
          currentLimitCost,
        )
        const dealResultPay = dealResult.pay
        // dealResult.pay может быть 0, поэтому такой странный if
        if (dealResultPay === false) {
          return
        } else {
          currentLimitCost -= dealResultPay
          // добавляем transaction history
        }
      }
    } else {
      // if limitByVolume
      console.log('BUY limitByVolume')
      let currentLimitVolume = limitVolume
      // const ordersSide = . . .
      for (const order of orders[side]) {
        console.log(currentLimitVolume)
        const dealResult = transferDeal(
          taker,
          order,
          currentLimitVolume,
          Infinity,
        )
        const dealResultPay = dealResult.pay
        if (!dealResultPay) {
          return
        } else {
          currentLimitVolume -= dealResultPay
          // добавляем transaction history
        }
      }
    }
  }
  if (side === 'sell') {
    if (limitCost !== Infinity) {
      // if limitByCost
      console.log('SELL limitByCost')
      let currentLimitCost = limitCost
      // const ordersSide = . . .
      for (const order of orders[side]) {
        console.log(currentLimitCost)
        const dealResult = transferDeal(
          taker,
          order,
          Infinity,
          currentLimitCost,
        )
        const dealResultPayback = dealResult.payback
        // dealResult.pay может быть 0, поэтому такой странный if
        if (dealResultPayback === false) {
          return
        } else {
          currentLimitCost -= dealResultPayback
          // добавляем transaction history
        }
      }
    } else {
      // if limitByVolume
      console.log('SELL limitByVolume')
      let currentLimitVolume = limitVolume
      // const ordersSide = . . .
      for (const order of orders[side]) {
        console.log(currentLimitVolume)
        const dealResult = transferDeal(
          taker,
          order,
          currentLimitVolume,
          Infinity,
        )
        const dealResultPay = dealResult.pay
        if (!dealResultPay) {
          return
        } else {
          currentLimitVolume -= dealResultPay
          // добавляем transaction history
        }
      }
    }
  }
}

function takeByVolume() {
  // делаем что-то
  take(traderId, side, symbol, limitVolume, limitCost)
  // делаем что-то
}

function takeByCost() {
  // делаем что-то
  take(traderId, side, symbol, limitVolume, limitCost)
  // делаем что-то
}
