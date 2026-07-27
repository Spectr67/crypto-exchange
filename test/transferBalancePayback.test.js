import { traders, transferBalancePayback } from '../traders.js'

const maker = traders[0]
const taker = traders[1]
let result

console.log(maker)
console.log(taker)

// result = transferBalancePayback(taker, maker, 'USDT', 300)
// console.log(result)
// console.log(maker)
// console.log(taker)
// console.log('===')

// result = transferBalancePayback(taker, maker, 'USDT', 10001)
// console.log(result)
// console.log(maker)
// console.log(taker)

// result = transferBalancePayback(taker, maker, 'USDT', '300')
// console.log(result)
// console.log(maker)
// console.log(taker)
// console.log('===')

// result = transferBalancePayback(taker, maker, 'USDT', -300)
// console.log(result)
// console.log(maker)
// console.log(taker)
// console.log('===')

// result = transferBalancePayback(taker, maker, 'BTC', 2)
// console.log(result)
// console.log(maker)
// console.log(taker)
// console.log('===')

result = transferBalancePayback(taker, maker, 'BTC', 4)
console.log(result)
console.log(maker)
console.log(taker)
console.log('===')
