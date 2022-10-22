
<script setup lang="ts">
import {
  BaseIcon,
  FreezeIcon,
  LimitIcon,
  GPayIcon,
  ReplaceCardIcon,
  DeactivateCardIcon,
} from "@/components/icons";
const actions = [
  {
    icon: FreezeIcon,
    name: 'Freeze card',
    action: () => console.log('freeze method')
  },
  {
    icon: LimitIcon,
    name: 'Set spend limit',
    action: () => console.log('spend method'),
  },
  {
    icon: GPayIcon,
    name: 'Add to GPay',
    action: () => console.log('add gpay method')
  },
  {
    icon: ReplaceCardIcon,
    name: 'Replace card',
    action: () => console.log('replace method')
  },
  {
    icon: DeactivateCardIcon,
    name: 'Cancel card',
    action: () => console.log('cancel method')
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
        <div class="control-bar__name">{{ item.name }}</div>
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
</style>