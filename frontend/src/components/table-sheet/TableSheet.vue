<script>
export default {
  props: ['list', 'styles'],
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(propVal, propKey) of styles" :key="propKey" :class="propVal">
          {{ propKey }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item of list">
        <td v-for="(propVal, propKey) of item" :key="propKey" :class="styles[propKey]">
          {{ propVal }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
