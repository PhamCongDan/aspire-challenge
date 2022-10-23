<script setup lang="ts">
import {
  BaseIcon,
} from "@/components/icons";
import { ref } from "vue";
import CardDetailIcon from "../icons/CardDetailIcon.vue";

const expaned = ref(false)
</script>

<template>
  <div class="detail-panel">
    <q-expansion-item expand-icon="img:DownArrow.svg" v-model="expaned" header-class="detail-panel__header">
      <template v-slot:header>
        <q-item-section avatar class="detail-panel__header--avatar">
          <BaseIcon >
            <CardDetailIcon />
          </BaseIcon>
        </q-item-section>
        <q-item-section class="detail-panel__header--title">Card details</q-item-section>
      </template>
      <q-card class="">
        <q-card-section> coming soon </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<style lang="scss" scoped>
.detail-panel :deep() .detail-panel__header {
  background: #F5F9FF;
  font-weight: bold;
  color: var(--vt-c-black);
  border-radius: 8px;
  padding: 16px
}
.detail-panel__header--avatar {
  min-width: 32px;
  padding-right: 10px;
}

</style>
