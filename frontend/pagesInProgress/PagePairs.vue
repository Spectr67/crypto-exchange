<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <h4 class="mb-3 text-light">Все Пары</h4>
    <div class="bg-body-tertiary p-3 rounded-3 w-100">
      <div class="overflow-y-auto" style="max-height: 360px">
        <table class="table table-borderless table-sm mb-0 table-hover">
          <thead class="sticky-top bg-body-tertiary">
            <tr>
              <th class="pb-2 bg-transparent text-white-50">Пара</th>
              <th class="pb-2 bg-transparent text-end text-white-50">Цена</th>
              <th class="pb-2 bg-transparent text-end text-white-50">24h Объем</th>
              <th class="pb-2 bg-transparent text-end text-white-50">Тек. Объем</th>
            </tr>
          </thead>
          <tbody>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">BTC/USDT</td>
              <td class="py-2 bg-transparent text-end text-success">65 100.00</td>
              <td class="py-2 bg-transparent text-end text-white-50">1.24B$</td>
              <td class="py-2 bg-transparent text-end text-light">18.450</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">ETH/USDT</td>
              <td class="py-2 bg-transparent text-end text-danger">3 450.50</td>
              <td class="py-2 bg-transparent text-end text-white-50">840.2M$</td>
              <td class="py-2 bg-transparent text-end text-light">142.100</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">SOL/USDT</td>
              <td class="py-2 bg-transparent text-end text-success">145.20</td>
              <td class="py-2 bg-transparent text-end text-white-50">410.5M$</td>
              <td class="py-2 bg-transparent text-end text-light">980.500</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">BNB/USDT</td>
              <td class="py-2 bg-transparent text-end text-success">580.00</td>
              <td class="py-2 bg-transparent text-end text-white-50">195.0M$</td>
              <td class="py-2 bg-transparent text-end text-light">45.120</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">XRP/USDT</td>
              <td class="py-2 bg-transparent text-end text-danger">0.5820</td>
              <td class="py-2 bg-transparent text-end text-white-50">310.8M$</td>
              <td class="py-2 bg-transparent text-end text-light">12 450.000</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">ADA/USDT</td>
              <td class="py-2 bg-transparent text-end text-success">0.3950</td>
              <td class="py-2 bg-transparent text-end text-white-50">88.4M$</td>
              <td class="py-2 bg-transparent text-end text-light">8 900.000</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">DOGE/USDT</td>
              <td class="py-2 bg-transparent text-end text-danger">0.1240</td>
              <td class="py-2 bg-transparent text-end text-white-50">150.3M$</td>
              <td class="py-2 bg-transparent text-end text-light">35 120.000</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">AVAX/USDT</td>
              <td class="py-2 bg-transparent text-end text-success">26.80</td>
              <td class="py-2 bg-transparent text-end text-white-50">72.1M$</td>
              <td class="py-2 bg-transparent text-end text-light">310.450</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">LINK/USDT</td>
              <td class="py-2 bg-transparent text-end text-danger">14.10</td>
              <td class="py-2 bg-transparent text-end text-white-50">95.6M$</td>
              <td class="py-2 bg-transparent text-end text-light">540.000</td>
            </tr>
            <tr role="button">
              <td class="py-2 bg-transparent fw-bold text-light">DOT/USDT</td>
              <td class="py-2 bg-transparent text-end text-success">6.75</td>
              <td class="py-2 bg-transparent text-end text-white-50">44.8M$</td>
              <td class="py-2 bg-transparent text-end text-light">1 120.800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
