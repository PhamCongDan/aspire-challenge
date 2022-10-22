<script setup lang="ts">
import { ref } from "vue";
import { Pagination } from 'swiper'
import { BaseIcon, AspireIcon, AddIcon } from "../icons";
import ItemCard from "./ItemCard.vue";

const tab = ref('debit-card')
const modules = ref([Pagination])
</script>

<template>
  <div class="fixed">
    <div class="info-card relative-position">
      <div class="row justify-between">
        <div class="text-subtitle2">Account Balance</div>
        <BaseIcon icon-color="var(--primary-color)">
          <AspireIcon />
        </BaseIcon>
      </div>
      <div class="row justify-between q-mt-sm">
        <div class="info-card__amount">
          <div class="info-card__amount__icon">S$</div>
          <span class="info-card__amount__value">3,000</span>
        </div>
        <div class="info-card__button">
          <div class="info-card__button__icon">
            <BaseIcon :width="16" :height="16">
              <AddIcon />
            </BaseIcon>
          </div>
          <span class="info-card__button__label">New card</span>
        </div>
      </div>
      <!-- tab -->
      <div class="q-pt-md">
        <div class="">
          <q-card class="info-card__tab">
            <q-tabs
              v-model="tab"
              class=""
              dense
              active-color="primary"
              indicator-color="primary"
              :align="`left`"
              narrow-indicator
            >
              <q-tab name="debit-card" class="info-card__tab--title" label="My debit cards" />
              <q-tab name="company-card" class="info-card__tab--title" label="All company cards" />
            </q-tabs>
  
            <q-separator />
  
            <q-tab-panels v-model="tab" animated class="info-card__tab--panels">
              <q-tab-panel name="debit-card" class="q-px-none">
                <!-- swiper START -->
                <swiper :space-between="50" class="swiper-main" :modules="modules" :pagination="{ clickable: true }">
                  <swiper-slide class="q-pb-xl">
                    <ItemCard />
                  </swiper-slide >
                  <swiper-slide class="q-pb-xl">
                    <ItemCard />
                  </swiper-slide>
                  <swiper-slide class="q-pb-xl">
                    <ItemCard />
                  </swiper-slide>
                </swiper>
                <!-- swiper END -->
              </q-tab-panel>
  
              <q-tab-panel name="company-card">
                coming soon!
              </q-tab-panel>
  
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-card__amount {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}

.info-card__amount__icon {
  width: 50px;
  height: 24px;
  border-radius: 8px;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-card__amount__value {
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
}

.info-card__button {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--active-color);
}

.info-card__button__icon {
  line-height: 0;
}

.info-card__button__label {
  font-size: 11px;
  font-weight: bold;
}

.info-card__tab {
  background: inherit;
  box-shadow: none;
}

.info-card__tab--title {
  text-transform: none !important;
}

.info-card__tab--panels {
  background: inherit !important;
}



.info-card {
  &__tab {
    background: inherit;
    box-shadow: none;
    &--title {
      text-transform: none !important;
    }
    &--panels {
      background: inherit !important;
    }
  }
  
}

.swiper-main {
  min-width: 200px;
  max-width: 400px;
}
.swiper-main :deep() .swiper-pagination-bullet-active {
 width: 16px;
 border-radius: 500px;
}
</style>
