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
