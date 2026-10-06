<script>
import HeaderSearchForm from './HeaderSearchForm.vue'
import PagesRouterSelect from './PagesRouterSelect.vue'
import PairSelect from './PairSelect.vue'

export default {
  components: { PairSelect, PagesRouterSelect, HeaderSearchForm },
}
</script>
<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <span class="d-none d-sm-inline">Cryptorium</span>
      </a>

      <PairSelect></PairSelect>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body">
          <PagesRouterSelect></PagesRouterSelect>
          <HeaderSearchForm></HeaderSearchForm>
        </div>
      </div>
    </div>
  </nav>
</template>
