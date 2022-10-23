
<script setup lang="ts">
import ControlBar from "./ControlBar.vue";
import CardDetailsPanel from "./CardDetailsPanel.vue";
import RecentTransactionPanel from "./RecentTransactionPanel.vue";

</script>
<template>
  <div class="action-card">
    <ControlBar />
    <div class="q-pa-md">
      <CardDetailsPanel />
      <RecentTransactionPanel class="q-mt-lg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.action-card {
  padding-bottom: 75px;
  height: auto;
  background: white;
  border-radius: 30px 30px 0 0;
}
</style>
