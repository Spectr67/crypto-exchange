// const coins = [
//   {
//     symbol: 'BTC',
//     coinName: 'Bitcoin',
//   },
//   {
//     symbol: 'ETH',
//     coinName: 'Ethereum',
//   },
//   {
//     symbol: 'LTC',
//     coinName: 'Lightcoin',
//   },
// ]

// пара символ и название
// symbol: coinName

export const coins = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  LTC: 'Litecoin',

  findBySymbol(symbol) {
    return this[symbol] || false
  },

  add(symbol, name) {
    if (this[symbol]) return false

    this[symbol] = name
    return true
  },

  remove(symbol) {
    if (!this[symbol]) return false

    delete this[symbol]
    return true
  },

  update(symbol, name) {
    if (!this[symbol]) return false

    this[symbol] = name
    return true
  },

  getAll() {
    return Object.keys(this)
      .filter(key => typeof this[key] === 'string')
      .reduce((result, key) => {
        result[key] = this[key]
        return result
      }, {})
  },

  getCount() {
    return Object.keys(this).filter(key => typeof this[key] === 'string').length
  },

  symbolCheck(symbol) {
    return Object.hasOwn(this, symbol) && typeof this[symbol] === 'string'
  },
}
