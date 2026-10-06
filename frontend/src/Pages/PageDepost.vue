<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <h4 class="mb-3 text-light">Пополнение баланса</h4>

    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="bg-body-tertiary p-4 rounded-3 border border-secondary-subtle">
          <form>
            <div class="mb-3">
              <label for="depositCoin" class="form-label text-white-50 small">
                Выберите монету
              </label>

              <select class="form-select bg-dark text-light border-secondary" id="depositCoin">
                <option value="USDT" selected>USDT — Tether USD</option>
                <option value="BTC">BTC — Bitcoin</option>
                <option value="ETH">ETH — Ethereum</option>
                <option value="SOL">SOL — Solana</option>
              </select>
            </div>

            <div class="mb-3">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <label for="depositAmount" class="form-label text-white-50 small mb-0">
                  Сумма
                </label>

                <span class="text-white-50 small">
                  Доступно:
                  <strong class="text-light">1,250.00 USDT</strong>
                </span>
              </div>

              <div class="input-group">
                <input
                  type="number"
                  class="form-control bg-dark text-light border-secondary"
                  id="depositAmount"
                  placeholder="Мин. 10"
                  step="any"
                />

                <button type="button" class="btn btn-outline-secondary text-warning">ВСЕ</button>
              </div>
            </div>

            <div class="d-grid mb-3">
              <button type="button" class="btn btn-outline-secondary py-2">
                История транзакций
              </button>
            </div>

            <div class="d-grid">
              <button type="submit" class="btn btn-success py-2 text-white">Пополнить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
