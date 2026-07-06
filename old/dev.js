// НАМЕРЕНИЕ (ГОТОВНОСТЬ) СОВЕРШИТЬ СДЕЛКУ
const order = {
  symbol: 'ХЛЕБ',
  traderId: 12345,
  capacity: 3,
  volume: 3,
  price: 5,
  deal: 'buy',
  isFulfilled: false,
}

const trader = {
  id: 333,
  balances: {
    ХЛЕБ: 0,
    USD: 111,
  },
}

const traders = []

// ПРЕДЛАГАЕМАЯ ЦЕНА И ОБЪЁМ (ставка)
// ставки производная от orders. (визуальная информация)
const bids = {
  sell: [
    [106, 6000],
    [105, 5000],
    [104, 4000],
  ],
  buy: [
    [103, 3000],
    [102, 2000],
    [101, 1000],
  ],
}

// СПИСОК НАМЕРЕНИЙ (ГОТОВНОСТЕЙ) [источник истины]
const orders = [order]

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
