<script setup lang="ts">
import BaseIcon from "../icons/BaseIcon.vue";
import AspireIcon from "../icons/AspireIcon.vue";
import VisaLogo from "../icons/VisaLogo.vue";

</script>

<template>
  <div class="payment-card">
    <div class="payment-card__name">
      <BaseIcon >
        <AspireIcon />
      </BaseIcon>
      aspire
    </div>

    <div class="payment-card__info text-weight-bolder">
      <div class="payment-card__info--name">pham cong dan</div>
      <div class="payment-card__info--number q-pt-md">**** **** **** 1237</div>
      <div class="payment-card__info--date row q-pt-sm justify-between">
        <span>Thru: 01/02</span>
        <span>CVV: ***</span>
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
.payment-card {
  max-width: 400px;
  max-height: 250px;
  min-height: 220px;
  background: var(--primary-color);
  border-radius: 15px;
  position: relative;
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
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
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