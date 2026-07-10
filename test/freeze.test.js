import { freezeTraderBalance, unfreezeTraderBalance } from '../orders-make.js'
import { logTraders, getTraderById } from '../traders.js'

logTraders()

const traderId = 'иван_1'
const symbol = 'usdt'

console.log(`freeze ${symbol} у ${traderId} `)
const freezeSuccess = freezeTraderBalance(traderId, symbol, 500)
console.log(`result: ${freezeSuccess}`)
logTraders()
console.log(`freeze ${symbol} у ${traderId} `)
const freezeFail = freezeTraderBalance(traderId, symbol, 10000)
console.log(`result ${freezeFail}`)
console.log(`unfreeze 200 ${symbol} `)
const unfreezeSuccess = unfreezeTraderBalance(traderId, symbol, 200)
console.log(`result: ${unfreezeSuccess}`)
logTraders()

console.log(`unfreeze${symbol} `)
const unfreezeFail = unfreezeTraderBalance(traderId, symbol, 9999)
console.log(`result: ${unfreezeFail}`)
