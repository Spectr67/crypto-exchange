const coins = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  LTC: 'Litecoin',
}

export function getAllCoins() {
  const copyCoins = { ...coins }
  Object.setPrototypeOf(copyCoins, Object.getPrototypeOf(coins))

  return copyCoins
}

export function getCount() {
  return Object.keys(coins).length
}

export function isExistsCoinBySymbol(symbol) {
  return Object.hasOwn(coins, symbol)
}

export function addCoin(symbol, coinName) {
  if (isExistsCoinBySymbol(symbol)) return false

  coins[symbol] = coinName
  return true
}

export function removeCoinBySymbol(symbol) {
  if (!isExistsCoinBySymbol(symbol)) return false

  delete coins[symbol]
  return true
}

export function updateCoinBySymbol(symbol, coinName) {
  if (!isExistsCoinBySymbol(symbol)) return false

  coins[symbol] = coinName
  return true
}
