<script setup lang="ts">

const expandUrlImage = 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=5b8ee2a3-7da0-450f-a089-c4698eada4aa&api_key=CometServer1&access_token=1666496499_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_c17e070e49ea68b9bd444bade1415fca9664dae4';
const iconUrl = 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=38612958-1e7c-4a95-82fb-a4fbf0312b72&api_key=CometServer1&access_token=1666496499_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_c17e070e49ea68b9bd444bade1415fca9664dae4'
</script>

<template>
  <q-expansion-item
    bordered
    caption="Card Details"
    :expand-icon="`img:${expandUrlImage}`"
    :icon="`img:${iconUrl}`"
    header-class="card-panel"
    :style="{
       'border': '2px solid #F5F5F5',
       'border-radius': '2px',
       'font-size': '18px'
    }"
  >
    <q-card class="card-panel__expanded">
      <q-card-section>
        coming soon
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style lang="scss" scoped>
.card-panel {
  background-color: var(--background-theme-color);
  border: 2px solid #F5F5F5;
  border-radius: 3px;
  color: var(--theme-color);
  font-size: 18px;
  font-weight: bold;
}
.card-panel__expanded {
  background: var(--background-theme-color);
  color: black;
}
</style>
