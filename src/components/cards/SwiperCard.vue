<script setup lang="ts">
import { Pagination } from "swiper";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCardStore } from "@/stores/card";
import ItemCard from "./ItemCard.vue";

const { lstCard } = storeToRefs(useCardStore());
const {  changeActiveCard } = useCardStore();
const modules = ref([Pagination]);

const onSlideChange = (e) => {
  changeActiveCard(e.realIndex)
}

onMounted(() => {
  console.log(123);
  
})
</script>
<template>
  <swiper
    :space-between="50"
    class="swiper-main"
    :modules="modules"
    :pagination="{ clickable: true }"
    @afterInit="(e) => onSlideChange(e)"
    @slideChangeTransitionEnd="(e) => onSlideChange(e)"
  >
    <swiper-slide class="q-pb-xl" v-for="item in lstCard" :key="item.id">
      <ItemCard :data="item" />
    </swiper-slide>
  </swiper>
</template>
<style lang="scss" scoped>
.swiper-main :deep() .swiper-pagination-bullet-active {
  width: 16px;
  border-radius: 500px;
}
</style>