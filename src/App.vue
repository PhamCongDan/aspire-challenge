<script setup lang="ts">
import PaymentIcon from './components/icons/PaymentIcon.vue'
</script>

<template>
  <div class="main-theme window-height window-width">
    <router-view />
  </div>
</template>

<style scoped>

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}


.main-theme {
  /* background: var(--theme-color); */
}
</style>
