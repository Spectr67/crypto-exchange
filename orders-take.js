import { checkPositive } from './functions.js'
import { orders } from './orders-make.js'
import { getTraderById, traders } from './traders.js'

export function take(takerTraderId, side, volume) {
  if (!checkPositive(volume)) return
  const targetPool = side === 'buy' ? 'sell' : 'buy'
  const currentOrders = calculateOrdersToTake(targetPool, volume)
  if (currentOrders.length === 0) {
    return
  }

  currentOrders.forEach(co => {
    co.order.takersIds.push(takerTraderId)
    deal(takerTraderId, co.order.traderId, co.volume, co.cost, side)
    if (co.order.isFulfilled) {
      closeOrder(co.order)
    }
  })
}
export function calculateOrdersToTake(targetPool, volume) {
  let remainingVolume = volume
  const ordersToTake = []

  while (remainingVolume > 0 && orders[targetPool].length > 0) {
    const bestOrder = orders[targetPool].at(-1)

    const volumeToTake = Math.min(remainingVolume, bestOrder.volume)
    const costToTake = volumeToTake * bestOrder.price

    ordersToTake.push({
      order: bestOrder,
      volume: volumeToTake,
      cost: costToTake,
    })

    remainingVolume -= volumeToTake
    bestOrder.volume -= volumeToTake

    const maker = getTraderById(bestOrder.traderId)
    if (maker) {
      if (bestOrder.side === 'sell') {
        maker.frozen['ХЛЕБ'] = Math.max(0, maker.frozen['ХЛЕБ'] - volumeToTake)
      } else if (bestOrder.side === 'buy') {
        maker.frozen['usdt'] = Math.max(0, maker.frozen['usdt'] - costToTake)
      }
    }

    if (bestOrder.volume === 0) {
      orders[targetPool].pop()
    }
  }

  return ordersToTake
}
// тейкер гарантированно не выкупит больше ордеров чем вернёт эта функция
// export function calculateOrdersToTake(targetPool, volume) {
//   let remainingVolume = volume
//   const ordersToTake = []

//   while (remainingVolume > 0 && orders[targetPool].length > 0) {
//     const bestOrder = orders[targetPool].at(-1)
//     const volumeToTake = Math.min(remainingVolume, bestOrder.volume)

//     ordersToTake.push({
//       order: bestOrder,
//       volume: volumeToTake,
//       cost: volumeToTake * bestOrder.price,
//     })

//     remainingVolume -= volumeToTake
//     bestOrder.volume -= volumeToTake

//     // unfreezeVolume(traderId, orderId, volume)

//     if (bestOrder.volume === 0) {
//       orders[targetPool].pop()
//     }
//   }

//   return ordersToTake
// }

export function swap(fromTraderId, toTraderId, symbol, count, payback = false) {
  // при удачном свапе возвращаем true, при неудачном свапе - false
  const fromTrader = getTraderById(fromTraderId)
  const toTrader = getTraderById(toTraderId)

  if (!fromTrader || !toTrader) {
    return false
  }

  const source = payback ? 'balance' : 'frozen'

  if (fromTrader[source][symbol] >= count) {
    fromTrader[source][symbol] -= count
    toTrader.balance[symbol] += count
    return true
  } else {
    console.log('не хватает замороженных средств')
    return false
  }
}

export function deal(takerTraderId, makerTraderId, volume, cost, side) {
  // при удачной сделке возвращаем true, при неудачной - false
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

// ? убрать!
function closeOrder(order) {
  const trader = traders.find(u => u.id === order.traderId)
  const takers = traders.filter(u => order.takersIds.includes(u.id))
  const totalVolume = order.capacity
  const totalPrice = totalVolume * order.price

  if (!trader || takers.length === 0) return

  const volumePerTaker = totalVolume / takers.length
  const pricePerTaker = totalPrice / takers.length

  if (order.side === 'sell') {
    trader.balance.ХЛЕБ -= totalVolume
    trader.balance.usdt += totalPrice

    takers.forEach(taker => {
      taker.balance.usdt -= pricePerTaker
      taker.balance.ХЛЕБ += volumePerTaker
    })
  } else {
    trader.balance.usdt -= totalPrice
    trader.balance.ХЛЕБ += totalVolume

    takers.forEach(taker => {
      taker.balance.ХЛЕБ -= volumePerTaker
      taker.balance.usdt += pricePerTaker
    })
  }
  console.log(`\n=== order ${order.id} closed ===`)
  console.log(`Maker: ${trader.name}`)
  console.log(`Takers: ${takers.map(t => t.name).join(', ')}`)
  console.log(
    `deal ${order.side === 'sell' ? 'SELL' : 'BUY'} PRICE ${order.price} VOLUME ${totalVolume}`,
  )

  // console.log('new balances:')
  // console.log(`${trader.name}:`, trader.balance)
  // takers.forEach(t => console.log(`${t.name}:`, t.balance))
}
