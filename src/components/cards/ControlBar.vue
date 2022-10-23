
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import {
  BaseIcon,
  FreezeIcon,
  LimitIcon,
  GPayIcon,
  ReplaceCardIcon,
  DeactivateCardIcon,
} from "@/components/icons";
import { useCardStore } from '@/stores/card'

const { activeIndexCard, lstCard } = storeToRefs(useCardStore())
const { freezeCard, unfreezeCard, removeCard } = useCardStore()

const changeStatusCard = () => {
  if (lstCard.value[activeIndexCard.value].active) {
    freezeCard(activeIndexCard.value)
  } else {
    unfreezeCard(activeIndexCard.value)
  }
}

const actions = [
  {
    icon: FreezeIcon,
    name: 'Freeze card',
    type: 'freeze',
    action: () => changeStatusCard()
  },
  {
    icon: LimitIcon,
    name: 'Set spend limit',
    type: 'set_spend_limit',
    action: () => console.log('spend method'),
  },
  {
    icon: GPayIcon,
    name: 'Add to GPay',
    type: 'add_gpay',
    action: () => console.log('add gpay method')
  },
  {
    icon: ReplaceCardIcon,
    name: 'Replace card',
    type: 'replace',
    action: () => console.log('replace method')
  },
  {
    icon: DeactivateCardIcon,
    name: 'Cancel card',
    type: 'cancel',
    action: () => removeCard(activeIndexCard.value)
  },
]
</script>

<template>
  <div class="control-bar q-pa-lg row justify-between">
    <div v-for="item in actions" :key="item.name" class="col">
      <div class="column items-center q-px-xs" @click="item.action">
        <BaseIcon :width="32" :height="32">
          <component :is="item.icon" />
        </BaseIcon>
        <div v-if="item.type === 'freeze'" class="control-bar__name">{{ lstCard[activeIndexCard]?.active ? 'Freeze card' : 'Unfreeze card' }}</div>
        <div v-else class="control-bar__name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.control-bar {
  border-radius: 30px 30px 0 0;
  color: #000;
  background: #EDF3FF;
}

.control-bar__name {
  white-space: break-spaces;
  text-align: center;
  color: var(--theme-color);
  font-size: 12px;
}

@media (min-width: 600px) {
  .control-bar {
    border-radius: 15px;
  }

  .control-bar__name {
    font-size: 14px;
  }
}

</style>