import { make } from '../functions/make.js'
import { orders } from '../orders.js'

console.log(orders.list)

make('иван_1', 'sell', 1, 400, ['BTC', 'USDT'])
make('иван_1', 'sell', 1, 300, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
make('иван_1', 'buy', 1, 200, ['BTC', 'USDT'])

make('иван_1', 'sell', 1, 400, ['ETH', 'USDT'])
make('иван_1', 'sell', 1, 300, ['ETH', 'USDT'])
make('иван_1', 'buy', 1, 100, ['ETH', 'USDT'])
make('иван_1', 'buy', 1, 200, ['ETH', 'USDT'])

make('мария_2', 'sell', 1, 400, ['BTC', 'USDT'])
make('мария_2', 'sell', 1, 300, ['BTC', 'USDT'])
make('мария_2', 'buy', 1, 100, ['BTC', 'USDT'])
make('мария_2', 'buy', 1, 200, ['BTC', 'USDT'])

make('мария_2', 'sell', 1, 400, ['ETH', 'USDT'])
make('мария_2', 'sell', 1, 300, ['ETH', 'USDT'])
make('мария_2', 'buy', 1, 100, ['ETH', 'USDT'])
make('мария_2', 'buy', 1, 200, ['ETH', 'USDT'])

// console.log(orders.list)

console.log(orders.getByCaption('BTC/USDT'))
