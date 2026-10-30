<script>
import FooterWidget from './components/FooterWidget.vue'
import HeaderWidget from './components/HeaderWidget.vue'
import TableSheet from './components/table-sheet/TableSheet.vue'

export default {
  components: { HeaderWidget, FooterWidget },

  data() {
    return {
      cars: [
        {
          id: 1,
          brand: 'Audi',
          price: 10000,
          engine: 'V8',
        },
      ],

      students: [
        {
          id: 1,
          firstName: 'Audi',
          lastName: 10000,
        },
      ],

      carStyles: {
        id: 'color-grey',
        brand: 'color-grey',
        price: 'color-green',
        engine: 'color-red',
      },

      studentStyles: {
        id: 'color-grey',
        firstName: 'color-grey',
        lastName: 'color-red',
      },
    }
  },
}
</script>

<template>
  <TableSheet :list="cars" :styles="carStyles" />

  <TableSheet :list="students" :styles="studentStyles" />

  <div class="wrapper">
    <HeaderWidget />

    <main>
      <router-view />
    </main>

    <FooterWidget />
  </div>
</template>
