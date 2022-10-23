<script setup lang="ts">
import BaseIcon from "../icons/BaseIcon.vue";
import type { CardInfo } from '@/@types/CardInfo'
import AspireIcon from "../icons/AspireIcon.vue";
import VisaLogo from "../icons/VisaLogo.vue";
import { computed, ref } from "vue";
import RemovedEyeIcon from "../icons/RemovedEyeIcon.vue";

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const { data } = props
const isShowInfo = ref(false)

const hiddenCardNumber = computed(() => {
  const last4Digits = data.cardNumber.slice(-4);
  const result = last4Digits.padStart(data.cardNumber.length, '•');
  return result;
})

const formatCardNumber = (cardNumber: string) => {
  let result = ''
  if (cardNumber.length !== 16) return '•••• •••• •••• ••••';
  if (cardNumber.length > 4) result += cardNumber.slice(0, 4);
  if (cardNumber.length > 8) result += ` ${cardNumber.slice(4, 8)}`
  if (cardNumber.length > 12) result += ` ${cardNumber.slice(8, 12)}`
  result += ` ${cardNumber.slice(12, 16)}`
  return result;
}

</script>

<template>
  <div class="row justify-end">
    <div class="show-info" @click="isShowInfo = !isShowInfo">
      <BaseIcon :height="16" :width="16">
        <RemovedEyeIcon />
      </BaseIcon>
      <div class="q-pl-xs">Show card number</div>
    </div>
  </div>
  <div class="payment-card" :class="{ 'payment-card--disabled': !data.active }">
    <div class="payment-card__name">
      <BaseIcon >
        <AspireIcon />
      </BaseIcon>
      aspire
    </div>

    <div class="payment-card__info text-weight-bolder">
      <div class="payment-card__info--name">{{ data.name }}</div>
      <div class="payment-card__info--number q-pt-md">{{ !isShowInfo ? formatCardNumber(hiddenCardNumber) : formatCardNumber(data.cardNumber) }}</div>
      <div class="payment-card__info--date row q-pt-sm">
        <span>Thru: {{ data.expireDate }}</span>
        <span class="q-ml-xl">CVV: ***</span>
      </div>
    </div>

    <div class="payment-card__logo">
      <BaseIcon icon-color="#fff" :width="60" :height="60">
        <VisaLogo />
      </BaseIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.show-info {
  display: flex;
  justify-content: end;
  align-items: center;
  color: var(--primary-color);
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  background: white;
  border-radius: 4px;
  padding: 8px;
  padding-bottom: 14px;
  margin-bottom: -14px;
}
.payment-card {
  max-width: 400px;
  max-height: 250px;
  min-height: 220px;
  border-radius: 15px;
  position: relative;
  color: white;
  background: var(--primary-color);
}

.payment-card--disabled {
  background: var(--disabled-color);
  opacity: .7;
}

.payment-card__name {
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: bold;
}

.payment-card__info {
  position: absolute;
  top: 70px;
  bottom: 50px;
  left: 24px
}

.payment-card__info--name {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
}

.payment-card__info--number {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 4px;
}

.payment-card__info--date {
  font-weight: bold;
  letter-spacing: 1px;
}

.payment-card__logo {
  position: absolute;
  bottom: 8px;
  right: 24px;
  display: flex;
  align-items: center;
}
</style>