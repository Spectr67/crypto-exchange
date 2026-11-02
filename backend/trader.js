const trader = {
  id: 1,

  // wallet

  orders: [],
}

trader.balance.USDT += 999

trader.addDeposit('USDT', 999)

trader.addWithdraw('USDT', 999)

trader.make() // ?

trader.take() // ?
