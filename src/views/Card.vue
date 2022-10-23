
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useQuasar } from 'quasar'
import { useCardStore } from '@/stores/card'
import InfoCard from "../components/cards/InfoCard.vue";
import ActionCard from "../components/cards/ActionCard.vue";

const $q = useQuasar()
const { getLstCard } = useCardStore()

const heightEle = ref(0)

onMounted(async () => {
  await getLstCard();
  if ($q.screen.xs) {
    const infoEl = document.getElementsByClassName('info-section') as HTMLCollectionOf<HTMLDivElement>  
    heightEle.value = infoEl[0]['offsetHeight']
  }
});

</script>
<template>
  <div class="relative-position overflow-hidden">
    <InfoCard class="info-section" />
    <ActionCard v-if="$q.screen.xs" class="action-section" :style="{ 'margin-top': `${heightEle}px` }"/>
  </div>
</template>

<style lang="scss" scoped>

@media (max-width: 600px) {
  .info-section {
    top: 16px;
    right: 16px;
    left: 16px;
  }
}

.action-section {
  position: relative;
  z-index: 1;
  background: white;
}

</style>