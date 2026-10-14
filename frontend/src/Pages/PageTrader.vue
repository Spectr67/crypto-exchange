<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <div class="row g-4 p-3">
      <div class="col-12 col-md-6">
        <h2 class="h5 mb-3 fw-bold">Профайл:</h2>
        <div class="crypto-card bg-body-tertiary p-4 rounded-3 border border-secondary-subtle">
          <div class="mb-2">
            <span class="text-custom-muted">Имя:</span>
            <span class="fw-semibold ms-2">Петя</span>
          </div>
          <div class="mb-2">
            <span class="text-custom-muted">Фамилия:</span>
            <span class="fw-semibold ms-2">Петров</span>
          </div>
          <div class="mb-2">
            <span class="text-custom-muted">Никнейм:</span>
            <span class="fw-semibold ms-2 text-primary-accent">p_petya</span>
          </div>
          <div class="mb-0">
            <span class="text-custom-muted">Email:</span>
            <span class="fw-semibold ms-2">p.petya@email.com</span>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <h2 class="h5 mb-3 fw-bold">Торговля:</h2>
        <div class="crypto-card bg-body-tertiary p-4 rounded-3 border border-secondary-subtle">
          <div class="mb-3">
            <div class="text-custom-muted small">Эквивалент баланса в USDT:</div>
            <div class="fs-5 fw-bold text-primary-accent">3000 USDT</div>
          </div>

          <div class="mb-3">
            <div class="text-custom-muted small">Открыто ордеров на сумму:</div>
            <div class="fs-5 fw-bold">3000 USDT</div>
          </div>

          <div class="mb-3">
            <div class="text-custom-muted small">Объём торгов за сутки:</div>
            <div class="fs-5 fw-bold" style="color: var(--s-base)">1000 USDT</div>
          </div>

          <div class="mb-0">
            <div class="text-custom-muted small">Объём торгов за неделю:</div>
            <div class="fs-5 fw-bold">7000 USDT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
