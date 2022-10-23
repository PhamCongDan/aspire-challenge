<script setup lang="ts">
import {
  BaseIcon,
  TransactionIcon
} from "@/components/icons";
import { ref } from "vue";
import ItemTransaction from "./ItemTransaction.vue";

const expaned = ref(true)

const transactions = ref([
  {
    id: 1,
    type: 'storage',
    name: 'Hamleys',
    date: '20 May 2020',
    status: 'Refund on debit card',
    amount: -150,
    currency: '$'
  },
  {
    id: 2,
    icon: '',
    type: 'flight',
    name: 'Hamleys',
    date: '20 May 2020',
    status: 'Refund on debit card',
    amount: +150,
    currency: '$'
  },
  {
    id: 3,
    icon: '',
    type: 'megaphone',
    name: 'Hamleys',
    date: '20 May 2020',
    status: 'Refund on debit card',
    amount: -150,
    currency: '$'
  },
  {
    id: 3,
    icon: '',
    type: 'storage',
    name: 'Hamleys',
    date: '20 May 2020',
    status: 'Refund on debit card',
    amount: -150,
    currency: '$'
  },
  {
    id: 4,
    icon: '',
    type: 'storage',
    name: 'Hamleys',
    date: '20 May 2020',
    status: 'Refund on debit card',
    amount: -150,
    currency: '$'
  },
])
</script>

<template>
  <div class="detail-panel">
    <q-expansion-item expand-icon="img:DownArrow.svg" v-model="expaned" header-class="detail-panel__header">
      <template v-slot:header>
        <q-item-section avatar class="detail-panel__header--avatar">
          <BaseIcon >
            <TransactionIcon />
          </BaseIcon>
        </q-item-section>
        <q-item-section class="detail-panel__header--title">Recent transactions</q-item-section>
      </template>
      <q-card class="detail-panel__expaned">
        <q-card-section class="q-pa-none">
          <template v-for="item in transactions" :key="item.id">
            <ItemTransaction :transactionData="item" />
          </template>
          <div class="detail-panel__expaned__view-all">View all card transactions</div>
        </q-card-section>
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

.detail-panel__expaned {
  border: 1px solid #f0f0f0;
}

.detail-panel__expaned__view-all {
  background: #EDFFF5;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: bold;
  margin-top: -8px;
}

</style>
