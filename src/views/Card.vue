
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCardStore } from '@/stores/card'
import InfoCard from "../components/cards/InfoCard.vue";
import ActionCard from "../components/cards/ActionCard.vue";

const { getLstCard } = useCardStore()

const heightEle = ref(0)

onMounted(async () => {
  await getLstCard();
  const infoEl = document.getElementsByClassName('info-section') as HTMLCollectionOf<HTMLDivElement>  
  heightEle.value = infoEl[0]['offsetHeight']
});

</script>
<template>
  <div class="relative-position">
    <InfoCard class="info-section" />
    <ActionCard class="action-section" :style="{ 'margin-top': `${heightEle}px` }"/>
  </div>
</template>

<style lang="scss" scoped>

.info-section {
  top: 16px;
  right: 16px;
  left: 16px;
}
.action-section {
  height: 1000px;
  position: relative;
  z-index: 1;
  background: white;
}

</style>