import { Orders } from '../orders-make.js'

const orders = new Orders()

console.log(orders.orders)

orders.make('иван_1', 'sell', 1, 400, ['BTC', 'USDT'])
orders.make('иван_1', 'sell', 1, 300, ['BTC', 'USDT'])
orders.make('иван_1', 'buy', 1, 100, ['BTC', 'USDT'])
orders.make('иван_1', 'buy', 1, 200, ['BTC', 'USDT'])

orders.make('иван_1', 'sell', 1, 400, ['ETH', 'USDT'])
orders.make('иван_1', 'sell', 1, 300, ['ETH', 'USDT'])
orders.make('иван_1', 'buy', 1, 100, ['ETH', 'USDT'])
orders.make('иван_1', 'buy', 1, 200, ['ETH', 'USDT'])

console.log(orders.orders)
