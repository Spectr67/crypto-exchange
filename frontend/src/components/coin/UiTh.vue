<script>
export default {
  props: ['classes', 'caption', 'object'],

  // data() {
  //   return {
  //     classes: [this.hello],
  //   }
  // },
}
// querySelector('th').classlist.toggle('ps-3')
</script>

<template>
  <th class="py-2 text-body-secondary small" :class="object.classes">
    {{ object.caption }}
  </th>
  <!-- <th class="py-2 text-body-secondary small" :class="classes">
    {{ caption }}
  </th> -->
</template>
