import { addHistoryDeal, getHistoryDeals } from '../historyDeals.js'

addHistoryDeal(1, 2, 3, 4)

const historyDeals = getHistoryDeals()

historyDeals.length = 0

console.log(historyDeals)

const historyDeals2 = getHistoryDeals()

console.log(historyDeals2)

historyDeals2[0].date = 'foo'

console.log(historyDeals2)

const historyDeals3 = getHistoryDeals()

console.log(historyDeals3)
