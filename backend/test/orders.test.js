import { Orders } from '../orders-make.js'

const orders = new Orders()

console.log(orders.list)

orders.make('иван_1', 'sell', 1, 400, ['BTC', 'USDT'])
orders.make('иван_1', 'sell', 1, 300, ['BTC', 'USDT'])
orders.make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
orders.make('иван_1', 'buy', 1, 200, ['BTC', 'USDT'])

orders.make('иван_1', 'sell', 1, 400, ['ETH', 'USDT'])
orders.make('иван_1', 'sell', 1, 300, ['ETH', 'USDT'])
orders.make('иван_1', 'buy', 1, 100, ['ETH', 'USDT'])
orders.make('иван_1', 'buy', 1, 200, ['ETH', 'USDT'])

orders.make('мария_2', 'sell', 1, 400, ['BTC', 'USDT'])
orders.make('мария_2', 'sell', 1, 300, ['BTC', 'USDT'])
orders.make('мария_2', 'buy', 1, 100, ['BTC', 'USDT'])
orders.make('мария_2', 'buy', 1, 200, ['BTC', 'USDT'])

orders.make('мария_2', 'sell', 1, 400, ['ETH', 'USDT'])
orders.make('мария_2', 'sell', 1, 300, ['ETH', 'USDT'])
orders.make('мария_2', 'buy', 1, 100, ['ETH', 'USDT'])
orders.make('мария_2', 'buy', 1, 200, ['ETH', 'USDT'])

// console.log(orders.orders)

console.log(orders.getByCaption('BTC/USDT'))
