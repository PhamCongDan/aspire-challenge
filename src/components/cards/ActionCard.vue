
<script setup lang="ts">
import ControlBar from "./ControlBar.vue";
import CardDetailsPanel from "./CardDetailsPanel.vue";

</script>
<template>
  <div class="action-card">
    <ControlBar />
    <div class="q-pa-md">
      <CardDetailsPanel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.action-card {
  height: 1000px;
  background: white;
  border-radius: 30px 30px 0 0;
}
</style>
