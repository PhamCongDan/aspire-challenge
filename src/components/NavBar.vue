<script setup lang="ts">
  import { useQuasar } from 'quasar'
  import MobileBar from './MobileBar.vue'

  const $q = useQuasar()
  console.log($q.screen.xs)
</script>
<template>
  <div class="navbar">
    <MobileBar v-if="$q.screen.xs" />
    <div v-else>desktop navbar</div>
  </div>
</template>

<style scoped>
</style>
