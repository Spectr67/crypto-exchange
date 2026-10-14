<script>
export default {
  props: {
    coin: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <button class="btn btn-success btn-sm fw-bold pe-2" @click="$router.push('/deposit')">
    Депозит
  </button>

  <button
    class="btn btn-outline-secondary btn-sm d-none d-sm-inline-block ms-1 ps-2"
    @click="$router.push('/withdraw')"
  >
    Вывод
  </button>
</template>
