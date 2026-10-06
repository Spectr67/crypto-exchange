<script>
import ButtonSubmit from './components/ButtonSubmit.vue'
import FooterWidget from './components/FooterWidget.vue'
import HeaderWidget from './components/HeaderWidget.vue'
export default {
  components: { ButtonSubmit, HeaderWidget, FooterWidget },
}
</script>

<template>
  <header>
    <HeaderWidget></HeaderWidget>
  </header>
  <footer>
    <FooterWidget></FooterWidget>
  </footer>
</template>

<style></style>
