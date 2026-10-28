<script></script>

<template>
  <div class="container pt-3">
    <h4 class="mb-3 text-light">Your Deposit successfully confirmed</h4>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="bg-body-tertiary p-4 rounded-3 border border-secondary-subtle">
          <form @submit.prevent="makeDeposit">
            <div class="d-grid mb-3">
              <button
                type="button"
                class="btn btn-outline-secondary py-2"
                @click="$router.push('/transactions')"
              >
                История транзакций
              </button>
            </div>

            <div class="d-grid">
              <button
                type="button"
                class="btn btn-success py-2 text-white"
                @click="$router.push('/wallet')"
              >
                Перейти к Кошельку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
