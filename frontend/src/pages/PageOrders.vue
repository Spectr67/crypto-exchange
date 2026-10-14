<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <h4 class="mb-3 text-light">Мои активные ордера</h4>
    <div class="container p-0 col-12 col-md-8 col-lg-6 pt-3">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <a href="#history-section" class="btn btn-outline-warning btn-sm py-0 fs-7">
          История ордеров ↓
        </a>
      </div>

      <div class="card bg-dark border-secondary overflow-hidden mb-4">
        <div class="table-responsive" style="max-height: 300px">
          <table class="table table-dark table-striped table-hover table-sm align-middle mb-0">
            <thead class="sticky-top table-dark border-bottom border-secondary">
              <tr>
                <th scope="col">Цена (USDT)</th>
                <th scope="col">Количество (BTC)</th>
                <th scope="col">Сумма (USDT)</th>
                <th scope="col" class="text-end">Действие</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-success fw-bold">64 850.00</td>
                <td>0.0120</td>
                <td>778.20</td>
                <td class="text-end">
                  <button class="btn btn-outline-danger btn-sm py-0 fs-7">Отмена</button>
                </td>
              </tr>
              <tr>
                <td class="text-success fw-bold">64 500.00</td>
                <td>0.0050</td>
                <td>322.50</td>
                <td class="text-end">
                  <button class="btn btn-outline-danger btn-sm py-0 fs-7">Отмена</button>
                </td>
              </tr>
              <tr>
                <td class="text-danger fw-bold">65 100.00</td>
                <td>0.0150</td>
                <td>976.50</td>
                <td class="text-end">
                  <button class="btn btn-outline-danger btn-sm py-0 fs-7">Отмена</button>
                </td>
              </tr>
              <tr>
                <td class="text-success fw-bold">64 850.00</td>
                <td>0.0120</td>
                <td>778.20</td>
                <td class="text-end">
                  <button class="btn btn-outline-danger btn-sm py-0 fs-7">Отмена</button>
                </td>
              </tr>
              <tr>
                <td class="text-success fw-bold">64 500.00</td>
                <td>0.0050</td>
                <td>322.50</td>
                <td class="text-end">
                  <button class="btn btn-outline-danger btn-sm py-0 fs-7">Отмена</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
