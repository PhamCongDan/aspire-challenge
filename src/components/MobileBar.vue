<script setup lang="ts">
import { ref } from "vue";
import { 
  AspireIcon,
  DebitCardIcon,
  PaymentIcon,
  CreditIcon,
  UserIcon,
  BaseIcon
} from '@/components/icons';

  const menu = [
    {
      name: 'Home',
      path: '/',
      icon: AspireIcon
    },
    {
      name: 'Cards',
      path: '/cards',
      icon: DebitCardIcon,
    },
    {
      name: 'Payments',
      path: '/payments',
      icon: PaymentIcon,
    },
    {
      name: 'Credit',
      path: '/credit',
      icon: CreditIcon,
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: UserIcon,
    },
  ];
</script>
<template>
  <div class="mobile fixed-bottom row justify-around q-pa-xs">
    <router-link :to="item.path" v-for="item in menu" :key="item.name" exact-active-class="active">
      <div class="column items-center q-mx-5">
        <BaseIcon>
          <component :is="item.icon" />
        </BaseIcon>
        {{ item.name }}
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.mobile {
  box-shadow: 0 -2px;
  border-top: 1px solid var(--secondary-color);
  font-size: 9px;
  background: var(--vt-c-white-soft);
  a {
    color: var(--secondary-color);
    text-decoration: none;
    &.active {
      color: var(--primary-color)
    }
  }
}
</style>
