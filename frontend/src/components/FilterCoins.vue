<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <div class="col-12 col-md-7 d-flex flex-wrap gap-1 align-items-center">
    <button
      v-for="(item, index) in categories"
      :key="item"
      :class="[
        'btn btn-sm font-monospace flex-fill flex-sm-grow-0',
        index === 0 ? 'btn-success' : 'btn-outline-secondary',
      ]"
      type="button"
    >
      {{ item }}
    </button>
  </div>
</template>
