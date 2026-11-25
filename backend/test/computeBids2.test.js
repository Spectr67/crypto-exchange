import { computeBids2 } from '../functions.js'
import { make } from '../functions/make.js'
import { orders } from '../orders.js'

console.log(orders.list)

make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 200, ['ETH', 'USDT'])

console.log(computeBids2('BTC/USDT'))

make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('мария_2', 'buy', 2, 100, ['BTC', 'USDT'])

make('иван_1', 'sell', 1, 400, ['BTC', 'USDT'])
make('мария_2', 'sell', 3, 400, ['BTC', 'USDT'])

console.log(computeBids2('BTC/USDT'))

make('иван_1', 'buy', 1, 300, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 200, ['BTC', 'USDT'])

console.log(computeBids2('BTC/USDT').buy)

make('иван_1', 'sell', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 300, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 200, ['BTC', 'USDT'])

console.log(computeBids2('BTC/USDT').sell)
make('иван_1', 'buy', 2, 100, ['BTC', 'USDT'])
make('мария_2', 'buy', 3, 100, ['BTC', 'USDT'])

console.log(computeBids2('BTC/USDT'))

make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 2, 200, ['ETH', 'USDT'])

console.log(computeBids2('BTC/USDT'))

console.log(computeBids2('ETH/USDT'))
