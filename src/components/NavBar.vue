<script setup lang="ts">
import { useQuasar } from 'quasar'
import MobileBar from './MobileBar.vue'
import DesktopBar from './DesktopBar.vue'

const $q = useQuasar()
console.log($q.screen.xs)
</script>
<template>
  <div class="navbar">
    <MobileBar v-if="$q.screen.xs" />
    <DesktopBar v-else />
  </div>
</template>

<style scoped>
.navbar {
  z-index: 1;
}
</style>
