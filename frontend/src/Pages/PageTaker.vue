<script>
import FooterWidget from '@/components/FooterWidget.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  components: { HeaderWidget, FooterWidget },
}
</script>

<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col">
        <h3>Выкупить</h3>

        <ul
          class="nav nav-tabs bg-body-tertiary p-1 rounded-top border-bottom-0"
          id="elOrderSideTabNav"
          role="tablist"
        >
          <li class="nav-item flex-grow-1" role="presentation">
            <button
              class="nav-link active w-100 bg-body-tertiary"
              id="elOrderBuyTab"
              data-bs-toggle="tab"
              data-bs-target="#elOrderBuyBlock"
              type="button"
            >
              На покупку
            </button>
          </li>
          <li class="nav-item flex-grow-1" role="presentation">
            <button
              class="nav-link w-100 bg-body-tertiary"
              id="elOrderSellTab"
              data-bs-toggle="tab"
              data-bs-target="#elOrderSellBlock"
              type="button"
            >
              На продажу
            </button>
          </li>
        </ul>
        <div class="tab-content p-3 bg-body-secondary rounded-bottom">
          <div
            class="tab-pane fade show active"
            id="elOrderBuyBlock"
            aria-labelledby="elOrderBuyTab"
            tabindex="0"
          >
            <form class="mb-4">
              <div class="mb-3">
                <label class="form-label">Количество</label>
                <div class="input-group">
                  <input type="number" class="form-control" placeholder="0.01" step="0.001" />
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">На сумму</label>
                <div class="input-group">
                  <input type="number" class="form-control" placeholder="650" />
                  <span class="input-group-text">USDT</span>
                </div>
              </div>
              <button type="button" class="btn btn-success w-100">Купить</button>
            </form>
          </div>

          <div
            class="tab-pane fade"
            id="elOrderSellBlock"
            aria-labelledby="elOrderSellTab"
            tabindex="0"
          >
            <form class="mb-4">
              <div class="mb-3">
                <label class="form-label">Количество</label>
                <div class="input-group">
                  <input type="number" class="form-control" placeholder="0.01" step="0.001" />
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">На сумму</label>
                <div class="input-group">
                  <input type="number" class="form-control" placeholder="655" />
                  <span class="input-group-text">USDT</span>
                </div>
              </div>
              <button type="button" class="btn btn-danger w-100">Продать</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
