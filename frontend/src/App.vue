<script>
import FooterWidget from './components/FooterWidget.vue'
import HeaderWidget from './components/HeaderWidget.vue'

export default {
  components: {
    HeaderWidget,
    FooterWidget,
  },
}
</script>

<template>
  <div class="wrapper">
    <HeaderWidget />

    <main>
      <router-view />
    </main>

    <FooterWidget />
  </div>
</template>
