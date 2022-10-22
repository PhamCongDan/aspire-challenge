<script setup lang="ts">
  import { useQuasar } from 'quasar'
  import MobileBar from './MobileBar.vue'
import DesktopBar from './DesktopBar.vue'

  const $q = useQuasar()
  console.log($q.screen.xs)
</script>
<template>
  <div class="navbar relative-position">
    <MobileBar v-if="$q.screen.xs" class="" />
    <DesktopBar v-else />
  </div>
</template>

<style scoped>
.navbar {
  z-index: 1;
}
</style>
