import { make, orders } from '../orders-make.js'
import { getTraderById, logTraders } from '../traders.js'

make('иван_1', 'sell', 300, 2)
make('иван_1', 'sell', 300, 3)
logTraders()
console.log(orders)
// getTraderById('иван_1').frozen['ХЛЕБ'] = 1
console.log('>', getTraderById('иван_1').frozen['ХЛЕБ'])
console.log('>>', getTraderById('иван_1').getFrozen())
logTraders()
console.log(orders)

// frozen['ХЛЕБ'] болтается сам по себе
// order.volume болтается сам по себе
// хотя они должны быть неразрывно связаны
