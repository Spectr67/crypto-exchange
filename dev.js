// НАМЕРЕНИЕ (ГОТОВНОСТЬ) СОВЕРШИТЬ СДЕЛКУ
const order = {
  symbol: 'ХЛЕБ',
  volume: 1,
  price: 10,
  deal: 'buy',
  isFulfilled: false,
}

// ПРЕДЛАГАЕМАЯ ЦЕНА И ОБЪЁМ
const bid = {
  sell: [],
  buy: [],
}

// СПИСОК НАМЕРЕНИЙ (ГОТОВНОСТЕЙ)
const orderBook = [order]

// ТЕКУЩИЙ ОБЪЕМ ОТКРЫТЫХ ОРДЕРОВ НА ПОКУПКУ
const currentBuyVolume = 0

// ТЕКУЩИЙ ОБЪЕМ ОТКРЫТЫХ ОРДЕРОВ НА ПРОДАЖУ
const currentSellVolume = 0

//

// ??
const transaction = {
  //
}

// ОБЪЕМ ЗАКРЫТИЯ ПОСЛЕДНЕЙ СДЕЛКИ (когда тейкер забрал ордер мейкера)
let lastTransactionPrice = 0

// ЦЕНА ЗАКРЫТИЯ ПОСЛЕДНЕЙ СДЕЛКИ (когда тейкер забрал ордер мейкера)
let lastTransactionPrice = 0

// ОТОБРАЖЕНИЕ ТОГО, КАК МЕНЯЛАСЬ ЦЕНА В КОНКРЕТНОМ ВРЕМЕННОМ ОТРЕЗКЕ
const candle = {
  o: 0,
  h: 0,
  l: 0,
  c: 0,
}
