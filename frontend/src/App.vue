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
    <header>
      <HeaderWidget />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <FooterWidget />
    </footer>
  </div>
</template>
