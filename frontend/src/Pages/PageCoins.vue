<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <div class="container-fluid container-md p-0">
      <div
        class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 mb-3"
      >
        <h4 class="mb-3 text-light">Доступные активы</h4>
        <span
          class="badge bg-body-tertiary text-secondary border border-secondary align-self-start align-self-sm-auto"
        >
          Всего монет: 6
        </span>
      </div>

      <div class="row g-2 mb-3">
        <div class="col-12 col-md-5">
          <input
            type="text"
            class="form-control form-control-sm bg-body-tertiary text-light border-secondary"
            placeholder="🔍 Поиск (BTC, USDT)..."
          />
        </div>
        <div class="col-12 col-md-7 d-flex flex-wrap gap-1 align-items-center">
          <button class="btn btn-sm btn-success font-monospace flex-fill flex-sm-grow-0">
            Все
          </button>
          <button class="btn btn-sm btn-outline-secondary font-monospace flex-fill flex-sm-grow-0">
            Популярные
          </button>
          <button class="btn btn-sm btn-outline-secondary font-monospace flex-fill flex-sm-grow-0">
            Layer 1
          </button>
          <button class="btn btn-sm btn-outline-secondary font-monospace flex-fill flex-sm-grow-0">
            DeFi
          </button>
          <button class="btn btn-sm btn-outline-secondary font-monospace flex-fill flex-sm-grow-0">
            Meme
          </button>
        </div>
      </div>

      <div class="border border-secondary rounded bg-body-tertiary">
        <div>
          <table class="table table-dark table-striped table-hover table-sm align-middle mb-0">
            <thead>
              <tr class="border-bottom border-secondary">
                <th class="py-2 ps-3 text-body-secondary small">Монета</th>
                <th class="py-2 text-body-secondary small d-none d-sm-table-cell">Название</th>
                <th class="py-2 text-body-secondary small">Курс (USDT)</th>
                <th class="py-2 text-body-secondary small">24ч</th>
                <th class="py-2 text-body-secondary small d-none d-md-table-cell">Баланс</th>
                <th class="py-2 text-end pe-3 text-body-secondary small">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ps-2 ps-sm-3 fw-bold">
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="badge rounded-circle bg-warning text-dark p-2 d-inline-flex align-items-center justify-content-center"
                    >
                      ₿
                    </span>
                    <span>BTC</span>
                  </div>
                </td>

                <td class="text-body-secondary d-none d-sm-table-cell">Bitcoin</td>

                <td class="text-nowrap">65 100.00</td>

                <td class="text-success text-nowrap">+2.45%</td>

                <td class="d-none d-md-table-cell text-nowrap">0.0450 BTC</td>

                <td class="text-end pe-2 pe-sm-3">
                  <button class="btn btn-success btn-sm fw-bold">Депозит</button>

                  <button class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block">
                    Вывод
                  </button>
                </td>
              </tr>
              \
              <tr>
                <td class="ps-2 ps-sm-3 fw-bold">
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="badge rounded-circle bg-primary text-white p-2 d-inline-flex align-items-center justify-content-center"
                    >
                      Ξ
                    </span>
                    <span>ETH</span>
                  </div>
                </td>

                <td class="text-body-secondary d-none d-sm-table-cell">Ethereum</td>

                <td class="text-nowrap">3 450.20</td>

                <td class="text-danger text-nowrap">-1.12%</td>

                <td class="d-none d-md-table-cell text-nowrap">1.2500 ETH</td>

                <td class="text-end pe-2 pe-sm-3">
                  <button class="btn btn-success btn-sm fw-bold">Депозит</button>

                  <button class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block">
                    Вывод
                  </button>
                </td>
              </tr>

              <tr>
                <td class="ps-2 ps-sm-3 fw-bold">
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="badge rounded-circle bg-success text-white p-2 d-inline-flex align-items-center justify-content-center"
                    >
                      ₮
                    </span>
                    <span>USDT</span>
                  </div>
                </td>

                <td class="text-body-secondary d-none d-sm-table-cell">Tether USD</td>

                <td class="text-nowrap">1.00</td>

                <td class="text-body-secondary text-nowrap">0.00%</td>

                <td class="d-none d-md-table-cell text-nowrap">1,250.00 USDT</td>

                <td class="text-end pe-2 pe-sm-3">
                  <button class="btn btn-success btn-sm fw-bold">Депозит</button>

                  <button class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block">
                    Вывод
                  </button>
                </td>
              </tr>

              <tr>
                <td class="ps-2 ps-sm-3 fw-bold">
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="badge rounded-circle bg-info text-dark p-2 d-inline-flex align-items-center justify-content-center"
                    >
                      S
                    </span>
                    <span>SOL</span>
                  </div>
                </td>

                <td class="text-body-secondary d-none d-sm-table-cell">Solana</td>

                <td class="text-nowrap">148.80</td>

                <td class="text-success text-nowrap">+5.80%</td>

                <td class="d-none d-md-table-cell text-nowrap">0.0000 SOL</td>

                <td class="text-end pe-2 pe-sm-3">
                  <button class="btn btn-success btn-sm fw-bold">Депозит</button>

                  <button class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block">
                    Вывод
                  </button>
                </td>
              </tr>
              <tr>
                <td class="ps-2 ps-sm-3 fw-bold">
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="badge rounded-circle bg-info text-white p-2 d-inline-flex align-items-center justify-content-center"
                    >
                      💎
                    </span>
                    <span>TON</span>
                  </div>
                </td>

                <td class="text-body-secondary d-none d-sm-table-cell">Toncoin</td>

                <td class="text-nowrap">6.75</td>

                <td class="text-success text-nowrap">+0.95%</td>

                <td class="d-none d-md-table-cell text-nowrap">150.0000 TON</td>

                <td class="text-end pe-2 pe-sm-3">
                  <button class="btn btn-success btn-sm fw-bold">Депозит</button>

                  <button class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block">
                    Вывод
                  </button>
                </td>
              </tr>

              <tr>
                <td class="ps-2 ps-sm-3 fw-bold">
                  <div class="d-flex align-items-center gap-2">
                    <span
                      class="badge rounded-circle bg-warning text-dark p-2 d-inline-flex align-items-center justify-content-center"
                    >
                      Ð
                    </span>
                    <span>DOGE</span>
                  </div>
                </td>

                <td class="text-body-secondary d-none d-sm-table-cell">Dogecoin</td>

                <td class="text-nowrap">0.125</td>

                <td class="text-danger text-nowrap">-3.40%</td>

                <td class="d-none d-md-table-cell text-nowrap">0.0000 DOGE</td>

                <td class="text-end pe-2 pe-sm-3">
                  <button class="btn btn-success btn-sm fw-bold">Депозит</button>

                  <button class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block">
                    Вывод
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-custom-action {
  padding: 0.35rem 0.75rem !important;
  font-size: 0.85rem !important;
}
</style>
