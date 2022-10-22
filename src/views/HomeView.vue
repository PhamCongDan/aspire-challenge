<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home-page">
    <NavBar />
    <main class="q-pa-md">
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>
