// пара символ и название
// symbol: coinName

const coins = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  LTC: 'Litecoin',
}

export function getCoins() {
  return { ...coins }
}

export function getCount() {
  return Object.keys(coins).length
}

export function isExistsCoinBySymbol(symbol) {
  return Object.hasOwn(coins, symbol)
}

export function addCoin(symbol, coinName) {
  if (coins[symbol]) return false
  coins[symbol] = coinName
  return true
}

export function removeCoinBySymbol(symbol) {
  if (!coins[symbol]) return false
  delete coins[symbol]
  return true
}

export function updateCoinBySymbol(symbol, coinName) {
  if (!coins[symbol]) return false
  coins[symbol] = coinName
  return true
}
