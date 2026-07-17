import { traders, transferBalancePayback } from '../traders.js'

const maker = traders[0]
const taker = traders[1]

console.log(maker)
console.log(taker)

// transferBalancePayback(taker, maker, 'usdt', 300)
// console.log(maker)
// console.log(taker)

// transferBalancePayback(taker, maker, 'usdt', 501)
// console.log(maker)
// console.log(taker)

// transferBalancePayback(taker, maker, 'usdt', '300')
// console.log(maker)
// console.log(taker)

// transferBalancePayback(taker, maker, 'usdt', -300)
// console.log(maker)
// console.log(taker)

transferBalancePayback(taker, maker, 'ХЛЕБ', 2)
console.log(maker)
console.log(taker)

function testUsdt300ResultOk() {
  console.assert(
    maker.balance.usdt === 1000 &&
      maker.balance['ХЛЕБ'] === 10 &&
      taker.balance.usdt === 500 &&
      taker.balance['ХЛЕБ'] === 5,
  )

  let result = transferBalancePayback(taker, maker, 'usdt', 300)
  console.assert(result === true)

  console.assert(
    maker.balance.usdt === 1300 &&
      maker.balance['ХЛЕБ'] === 10 &&
      taker.balance.usdt === 200 &&
      taker.balance['ХЛЕБ'] === 5,
  )
}

testUsdt300ResultOk()
