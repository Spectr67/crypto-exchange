<script>
import ButtonSubmit from './components/ButtonSubmit.vue'
import HeaderWidget from './components/HeaderWidget.vue'
export default {
  components: { ButtonSubmit, HeaderWidget },
}
</script>

<template>
  <h1>You did it!</h1>
  <ButtonSubmit></ButtonSubmit>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <header>
    <HeaderWidget></HeaderWidget>
  </header>
</template>

<style scoped></style>
