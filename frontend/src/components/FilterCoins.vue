<script>
export default {
  props: {
    categories: {},
  },
}
</script>

<template>
  <div class="col-12 col-md-7 d-flex flex-wrap gap-1 align-items-center">
    <button
      v-for="item in categories"
      :key="item"
      class="btn btn-sm btn-outline-secondary font-monospace flex-fill flex-sm-grow-0"
      type="button"
    >
      {{ item }}
    </button>
  </div>
</template>
