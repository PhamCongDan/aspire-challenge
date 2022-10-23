<script setup lang="ts">
import { useQuasar } from 'quasar'
import NavBar from "../components/NavBar.vue";

const $q = useQuasar()

</script>

<template>
  <div class="home-page">
    <NavBar class="home-page__navbar" />
    <main class="home-page__main full-width">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  flex: 1 0 0;
  z-index: 1;
}

.home-page__navbar {
  z-index: 2;
  position: relative;
}


@media (max-width: 600px) {
  .home-page {
    display: block;
  }
}

@media (min-width: 600px) {
  .home-page {
    display: flex;
  }
  .home-page__main {
    background: white;
    padding: 50px;
  }

  .home-page__navbar {
    background: var(--theme-color);
    color: white;
  }
}
</style>
