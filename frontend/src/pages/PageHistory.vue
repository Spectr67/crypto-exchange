<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <h4 class="mb-3 text-light">История Сделок</h4>

    <div class="accordion" id="ordersAccordion" data-bs-theme="dark">
      <div
        class="accordion-item mb-2 border-0 bg-body-secondary text-light rounded overflow-hidden"
      >
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed py-2 px-3 bg-body-tertiary text-light shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <div class="w-100 d-flex justify-content-between align-items-center me-3">
              <div style="flex-basis: 200px">
                <span class="badge bg-success text-center me-2" style="width: 75px">BUY</span>
                <strong class="text-white">BTC/USDT</strong>
              </div>
              <div style="flex-basis: 200px" class="small d-none d-md-block">
                Цена: <span class="text-info fw-semibold">$65,420.00</span>
              </div>
              <div>
                <span class="badge bg-success bg-opacity-25 text-success border border-success"
                  >Filled</span
                >
              </div>
              <div class="text-secondary small d-none d-lg-block">15.08.2026 18:30</div>
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#ordersAccordion"
        >
          <div
            class="accordion-body bg-body-secondary border-top border-secondary border-opacity-25 small text-light"
          >
            <div class="row g-2">
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Количество</span>
                <strong class="text-white">0.15000000 BTC</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Общая сумма</span>
                <strong class="text-white">$9,813.00 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Комиссия</span>
                <strong class="text-white">0.00015 BTC</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Тип сделки</span>
                <strong class="text-white">maker</strong>
              </div>
              <div
                class="col-12 border-top border-secondary border-opacity-25 pt-2 mt-2 d-flex justify-content-between align-items-center text-secondary"
              >
                <span>Order ID: <code class="text-light">#948201954</code></span>
                <span>Дата: <strong class="text-white">15.08.2026 18:30</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="accordion-item mb-2 border-0 bg-body-secondary text-light rounded overflow-hidden"
      >
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed py-2 px-3 bg-body-tertiary text-light shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div class="w-100 d-flex justify-content-between align-items-center me-3">
              <div style="flex-basis: 200px">
                <span class="badge bg-danger text-center me-2" style="width: 75px">SELL</span>
                <strong class="text-white pe-1">ETH/USDT</strong>
              </div>
              <div style="flex-basis: 200px" class="small d-none d-md-block">
                Цена: <span class="text-info fw-semibold">$3,450.50</span>
              </div>
              <div>
                <span class="badge bg-success bg-opacity-25 text-success border border-success"
                  >Filled</span
                >
              </div>
              <div class="text-secondary small d-none d-lg-block">15.08.2026 16:12</div>
            </div>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#ordersAccordion"
        >
          <div
            class="accordion-body bg-body-secondary border-top border-secondary border-opacity-25 small text-light"
          >
            <div class="row g-2">
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Количество</span>
                <strong class="text-white">1.25000000 ETH</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Общая сумма</span>
                <strong class="text-white">$4,313.125 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Комиссия</span>
                <strong class="text-white">4.31 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Тип сделки</span>
                <strong class="text-white">taker</strong>
              </div>
              <div
                class="col-12 border-top border-secondary border-opacity-25 pt-2 mt-2 d-flex justify-content-between align-items-center text-secondary"
              >
                <span>Order ID: <code class="text-light">#948195412</code></span>
                <span>Дата: <strong class="text-white">15.08.2026 16:12</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="accordion-item mb-2 border-0 bg-body-secondary text-light rounded overflow-hidden"
      >
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed py-2 px-3 bg-body-tertiary text-light shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <div class="w-100 d-flex justify-content-between align-items-center me-3">
              <div style="flex-basis: 200px">
                <span class="badge bg-success text-center me-2" style="width: 75px">BUY</span>
                <strong class="text-white">SOL/USDT</strong>
              </div>
              <div style="flex-basis: 200px" class="small d-none d-md-block">
                Цена: <span class="text-info fw-semibold">$142.80</span>
              </div>
              <div>
                <span class="badge bg-success bg-opacity-25 text-success border border-success"
                  >Filled</span
                >
              </div>
              <div class="text-secondary small d-none d-lg-block">15.08.2026 14:05</div>
            </div>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#ordersAccordion"
        >
          <div
            class="accordion-body bg-body-secondary border-top border-secondary border-opacity-25 small text-light"
          >
            <div class="row g-2">
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Количество</span>
                <strong class="text-white">10.50000000 SOL</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Общая сумма</span>
                <strong class="text-white">$1,499.40 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Комиссия</span>
                <strong class="text-white">0.0105 SOL</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Тип сделки</span>
                <strong class="text-white">maker</strong>
              </div>
              <div
                class="col-12 border-top border-secondary border-opacity-25 pt-2 mt-2 d-flex justify-content-between align-items-center text-secondary"
              >
                <span>Order ID: <code class="text-light">#948154109</code></span>
                <span>Дата: <strong class="text-white">15.08.2026 14:05</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="accordion-item mb-2 border-0 bg-body-secondary text-light rounded overflow-hidden"
      >
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed py-2 px-3 bg-body-tertiary text-light shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            <div class="w-100 d-flex justify-content-between align-items-center me-3">
              <div style="flex-basis: 200px">
                <span class="badge bg-danger text-center me-2" style="width: 75px">SELL</span>
                <strong class="text-white">XRP/USDT</strong>
              </div>
              <div style="flex-basis: 200px" class="small d-none d-md-block">
                Цена: <span class="text-info fw-semibold">$0.5840</span>
              </div>
              <div>
                <span class="badge bg-success bg-opacity-25 text-success border border-success"
                  >Filled</span
                >
              </div>
              <div class="text-secondary small d-none d-lg-block">15.08.2026 11:20</div>
            </div>
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#ordersAccordion"
        >
          <div
            class="accordion-body bg-body-secondary border-top border-secondary border-opacity-25 small text-light"
          >
            <div class="row g-2">
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Количество</span>
                <strong class="text-white">2500.00000000 XRP</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Общая сумма</span>
                <strong class="text-white">$1,460.00 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Комиссия</span>
                <strong class="text-white">1.46 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Тип сделки</span>
                <strong class="text-white">taker</strong>
              </div>
              <div
                class="col-12 border-top border-secondary border-opacity-25 pt-2 mt-2 d-flex justify-content-between align-items-center text-secondary"
              >
                <span>Order ID: <code class="text-light">#948102341</code></span>
                <span>Дата: <strong class="text-white">15.08.2026 11:20</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="accordion-item mb-2 border-0 bg-body-secondary text-light rounded overflow-hidden"
      >
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed py-2 px-3 bg-body-tertiary text-light shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            <div class="w-100 d-flex justify-content-between align-items-center me-3">
              <div style="flex-basis: 200px">
                <span class="badge bg-success text-center me-2" style="width: 75px">BUY</span>
                <strong class="text-white">BNB/USDT</strong>
              </div>
              <div style="flex-basis: 200px" class="small d-none d-md-block">
                Цена: <span class="text-info fw-semibold">$560.20</span>
              </div>
              <div>
                <span class="badge bg-success bg-opacity-25 text-success border border-success"
                  >Filled</span
                >
              </div>
              <div class="text-secondary small d-none d-lg-block">15.08.2026 09:15</div>
            </div>
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#ordersAccordion"
        >
          <div
            class="accordion-body bg-body-secondary border-top border-secondary border-opacity-25 small text-light"
          >
            <div class="row g-2">
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Количество</span>
                <strong class="text-white">3.00000000 BNB</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Общая сумма</span>
                <strong class="text-white">$1,680.60 USDT</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Комиссия</span>
                <strong class="text-white">0.003 BNB</strong>
              </div>
              <div class="col-6 col-md-3">
                <span class="text-secondary d-block">Тип сделки</span>
                <strong class="text-white">maker</strong>
              </div>
              <div
                class="col-12 border-top border-secondary border-opacity-25 pt-2 mt-2 d-flex justify-content-between align-items-center text-secondary"
              >
                <span>Order ID: <code class="text-light">#948056218</code></span>
                <span>Дата: <strong class="text-white">15.08.2026 09:15</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
