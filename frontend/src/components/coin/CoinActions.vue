<script>
export default {
  props: ['coin'],
}
</script>

<template>
  <button
    class="btn btn-success btn-sm fw-bold pe-2"
    @click="$router.push({ path: '/deposit', query: { symbol: coin.symbol } })"
  >
    Депозит
  </button>

  <button
    class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block ms-1 ps-2"
    @click="$router.push('/withdraw')"
  >
    Вывод
  </button>
</template>
