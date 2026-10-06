<script></script>
<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <button
            class="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <span class="d-none d-sm-inline">Cryptorium</span>
        </a>

        <select
          class="form-select bg-dark text-light border-secondary font-monospace"
          style="max-width: 150px"
          id="coinSelect"
        >
          <option value="BTCUSDT" selected>BTC / USDT — $65,100.00</option>
          <option value="ETHUSDT">ETH / USDT — $3,450.50</option>
          <option value="SOLUSDT">SOL / USDT — $145.20</option>
          <option value="BNBUSDT">BNB / USDT — $580.00</option>
          <option value="XRPUSDT">XRP / USDT — $0.5820</option>
          <option value="ADAUSDT">ADA / USDT — $0.3950</option>
          <option value="DOGEUSDT">DOGE / USDT — $0.1240</option>
          <option value="AVAXUSDT">AVAX / USDT — $26.80</option>
          <option value="LINKUSDT">LINK / USDT — $14.10</option>
          <option value="DOTUSDT">DOT / USDT — $6.75</option>
        </select>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="d-flex flex-column gap-2 pe-3">
              <a href="./bids.html" class="btn btn-outline-success text-start">Bids</a>
              <a href="./candles.html" class="btn btn-outline-success text-start">Candles</a>
              <a href="./chart.html" class="btn btn-outline-success text-start">Chart</a>
              <a href="./coins.html" class="btn btn-outline-success text-start">Coins</a>
              <a href="./deposit.html" class="btn btn-outline-success text-start">Deposit</a>
              <a href="./history.html" class="btn btn-outline-success text-start">History</a>
              <a href="./maker.html" class="btn btn-outline-success text-start">Maker</a>
              <a href="./orders.html" class="btn btn-outline-success text-start">Orders</a>
              <a href="./pairs.html" class="btn btn-outline-success text-start">Pairs</a>
              <a href="./taker.html" class="btn btn-outline-success text-start">Taker</a>
              <a href="./trader.html" class="btn btn-outline-success text-start">Trader</a>
              <a href="./wallet.html" class="btn btn-outline-success text-start">Wallet</a>
              <a href="./withdraw.html" class="btn btn-outline-success text-start">Withdraw</a>
            </div>

            <form class="d-flex mt-4" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
