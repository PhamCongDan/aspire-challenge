<script setup lang="ts">
import { ref } from "vue";
// import { Pagination } from "swiper";
import { useQuasar } from 'quasar'
import { useCardStore } from "@/stores/card";
import { storeToRefs } from "pinia";
import { BaseIcon, AspireIcon, AddIcon } from "@/components/icons";
import ModalAddCard from "./ModalAddCard.vue";
import SwiperCard from "./SwiperCard.vue";
import ControlBar from "./ControlBar.vue";
import CardDetailsPanel from "./CardDetailsPanel.vue";

const $q = useQuasar()
const { lstCard } = storeToRefs(useCardStore());
const tab = ref("debit-card");
// const modules = ref([Pagination]);
const isOpenAddCardModal = ref(false)

const { addNewCard, changeActiveCard } = useCardStore();

const createCard = () => {
  isOpenAddCardModal.value = true
};


</script>

<template>
  <div :class="$q.screen.xs ? 'fixed' : 'relative-position'">
    <div class="info-card relative-position">
      <div class="row justify-between">
        <div class="text-subtitle2">Account Balance</div>
        <BaseIcon v-if="$q.screen.xs" icon-color="var(--primary-color)">
          <AspireIcon />
        </BaseIcon>
      </div>
      <div class="row justify-between q-mt-sm">
        <div class="info-card__amount">
          <div class="info-card__amount__icon">S$</div>
          <span class="info-card__amount__value">3,000</span>
        </div>
        <div class="info-card__button cursor-pointer" @click="createCard">
          <div class="info-card__button__icon ">
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
              dense
              active-color="primary"
              :align="`left`"
              narrow-indicator
            >
              <q-tab
                name="debit-card"
                class="info-card__tab--title"
                label="My debit cards"
              />
              <q-tab
                name="company-card"
                class="info-card__tab--title"
                label="All company cards"
              />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated class="info-card__tab--panels">
              <q-tab-panel name="debit-card" class="q-px-none">
                <q-card class="info-card__tab--panels__wrapper" v-if="!$q.screen.xs">
                  <div class="row q-pa-xl">
                    <div class="col-6 q-pr-md">
                      <SwiperCard />
                      <ControlBar />
                    </div>
                    <div class="col-6 q-pl-md">
                      <CardDetailsPanel />
                    </div>
                  </div>
                </q-card>
                <SwiperCard v-else />
              </q-tab-panel>

              <q-tab-panel name="company-card"> coming soon! </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
    <ModalAddCard v-model:isOpen="isOpenAddCardModal" />
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

@media (min-width: 600px) {
  .info-card__button {
    background: var(--theme-color);
    padding: 10px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
  }
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

.info-card__tab--panels__wrapper {
  border: 2px solid rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: none;
}

.swiper-main {
  min-width: 200px;
  max-width: 400px;
}

</style>
