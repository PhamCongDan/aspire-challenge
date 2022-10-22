<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home-page">
    <main class="">
      <router-view />
    </main>
    <NavBar />
  </div>
</template>

<style scoped>

</style>
