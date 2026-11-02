const trader = {
  id: 'иван_1',

  login: 'ivan_trader',
  email: 'ivan@example.com',
  password: 'password123',

  profile: {
    firstName: 'Иван',
    lastName: 'Петров',
    phone: '+380991234567',
  },

  role: 'user',
  isActive: true,
  isVerified: true,

  balance: {
    USDT: 10000,
    BTC: 15,
    ETH: 5,
  },

  orders: [],

  favoritePairs: ['BTC/USDT', 'ETH/USDT'],

  settings: {
    currency: 'USDT',
    theme: 'dark',
    notifications: {
      email: true,
      orders: true,
      priceAlerts: true,
    },
  },

  statistics: {
    totalOrders: 0,
    completedOrders: 0,
    canceledOrders: 0,
    totalTrades: 0,
    totalVolume: 0,
    totalCost: 0,
  },

  createdAt: new Date(),
  updatedAt: new Date(),
  lastLoginAt: null,
}

trader.balance.USDT += 999

trader.addDeposit('USDT', 999)

trader.addWithdraw('USDT', 999)

trader.make() // ?

trader.take() // ?
