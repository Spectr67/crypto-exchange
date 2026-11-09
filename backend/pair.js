// function createNewPair() {
//   const id = randId()
//   const symbols = function()
//   const caption = function()
//   const lastPrice = function()
//   const volume24h = function()
//   const candles = function()
//   const orders = function()
//   const id = function()
//   return bids Pair()
// }

import { randId } from './functions.js'

export class Pair {
  constructor(
    id,
    symbols,
    caption,
    lastPrice = 0,
    volume24h = 0,
    diff24h = 0,
    candles = [],
    orders = [],
    bids = [],
  ) {
    this.id = randId()
    this.symbols = symbols
    this.caption = `${symbols[0]}/${symbols[1]}`
    this.lastPrice = lastPrice
    this.volume24h = volume24h
    this.diff24h = diff24h
    this.candles = candles
    this.orders = orders
    this.bids = bids
  }

  foo() {
    console.log('bar')
  }

  findCandleByTime(time) {
    return this.candles.find(candle => candle.openTime === time)
  }

  findOrderById(id) {
    return this.orders.find(order => order.id === id)
  }

  findBidById(id) {
    return this.bids.find(bid => bid.id === id)
  }

  addCandle(candle) {
    this.candles.push(candle)
  }

  addOrder(order) {
    this.orders.push(order)
  }

  addBid(bid) {
    this.bids.push(bid)
  }

  removeOrderById(id) {
    const index = this.orders.findIndex(order => order.id === id)

    if (index === -1) return false

    this.orders.splice(index, 1)
    return true
  }

  removeBidById(id) {
    const index = this.bids.findIndex(bid => bid.id === id)

    if (index === -1) return false

    this.bids.splice(index, 1)
    return true
  }

  getOrders() {
    return this.orders
  }

  getBids() {
    return this.bids
  }

  getCandles() {
    return this.candles
  }

  updatePrice(price) {
    this.lastPrice = price
  }

  updateVolume(volume) {
    this.volume24h = volume
  }
  updateDiff(diff) {
    this.diff24h = diff
  }
}
