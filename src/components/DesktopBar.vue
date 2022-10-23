<script setup lang="ts">
import { 
  AspireIcon,
  DebitCardIcon,
  PaymentIcon,
  CreditIcon,
  UserIcon,
  BaseIcon,
} from '@/components/icons';

const menu = [
    {
      name: 'Home',
      path: '/home',
      icon: AspireIcon
    },
    {
      name: 'Cards',
      path: '/',
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
  <div class="desktop-sidebar q-pa-xl">
    <div class="desktop-sidebar__title">
      <BaseIcon :width="35" :height="35">
        <AspireIcon />
      </BaseIcon>
      <div>aspire</div>
    </div>
    <div class="q-my-lg">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
    <router-link class="q-ma-lg" v-for="item in menu" :key="item.name" :to="item.path" exact-active-class="active">
      <div class="row">
        <BaseIcon>
          <component :is="item.icon" />
        </BaseIcon>
        <div class="q-pl-md">{{ item.name }}</div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.desktop-sidebar {
  width: 340px;
  height: 100%;
}

.desktop-sidebar__title {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  gap: 5px;
  letter-spacing: 2px;
}

.desktop-sidebar {
  a {
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 16px;
    &.active {
      color: var(--primary-color)
    }
  }
}
</style>
