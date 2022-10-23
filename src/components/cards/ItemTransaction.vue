<script setup lang="ts">
import {
  BaseIcon,
  FileStorageIcon,
  FlightIcon,
  NextArrowIcon,
  MegaPhoneIcon,
  CardSmallIcon
} from "@/components/icons";

const props = defineProps({
  transactionData: {
    type: Object,
    default: null,
  },
});

const iconType: any = {
  storage: {
    color: "#009DFF1A",
    icon: FileStorageIcon,
  },
  flight: {
    color: "#00D6B51A",
    icon: FlightIcon,
  },
  megaphone: {
    color: "#F251951A",
    icon: MegaPhoneIcon,
  },
};

const { transactionData } = props;
</script>
<template>
  <div class="transaction-item q-pa-sm">
    <div class="row justify-between items-start q-px-sm">
      <div class="row">
        <div
          class="transaction-item__circle"
          :style="{ background: `${iconType[transactionData.type].color}` }"
        >
          <div class="transaction-item__circle-content">
            <BaseIcon :width="16" :height="16">
              <component :is="iconType[transactionData.type].icon" />
            </BaseIcon>
          </div>
        </div>
        <div class="q-pl-sm">
          <div class="text-bold">{{ transactionData.name }}</div>
          <div class="transaction-item--date q-pt-xs">{{ transactionData.date }}</div>
          <div class="row q-pt-xs">
            <div class="transaction-item__circle-small">
              <div class="transaction-item__circle-small-content">
                <BaseIcon :width="10" :height="10">
                  <CardSmallIcon />
                </BaseIcon>
              </div>
            </div>
            <div class="transaction-item--status q-pl-xs">{{ transactionData.status }}</div>
          </div>
        </div>
      </div>
      <div class="row items-center">
        <div
          class="transaction-item--value q-pr-xs"
          :class="{
            'transaction-item--value--bigger-0': transactionData.amount > 0,
          }"
        >
          {{ transactionData.amount > 0 ? "+" : "-" }}S{{
            transactionData.currency
          }}
          {{ Math.abs(transactionData.amount) }}
        </div>
        <BaseIcon :width="12" :height="12">
          <NextArrowIcon />
        </BaseIcon>
      </div>
    </div>
    <q-separator class="q-mt-md" />
  </div>
</template>

<style lang="scss" scoped>
.transaction-item__circle {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.transaction-item__circle-content {
  width: max-content;
  height: min-content;
}

.transaction-item--value {
  font-weight: bold;
}
.transaction-item--value--bigger-0 {
  color: var(--primary-color);
}

.transaction-item--date {
  color: #AAAAAA
}

.transaction-item--status {
  font-weight: bold;
  color: #325BAF;
  font-size: 12px;
}
.transaction-item__circle-small {
  width: 24px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #325BAF;
}

.transaction-item__circle-small-content {
  width: max-content;
  height: min-content;
}
</style>
