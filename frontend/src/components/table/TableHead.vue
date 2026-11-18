<script>
export default {
  props: ['styles'],
}
</script>

<template>
  <thead>
    <tr>
      <th v-for="(propVal, propKey) of styles" :key="propKey" :class="propVal">
        {{ propKey }}
      </th>
    </tr>
  </thead>
</template>
