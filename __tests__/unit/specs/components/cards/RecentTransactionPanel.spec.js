import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import RecentTransactionPanel from '@/components/cards/RecentTransactionPanel.vue'

describe('RecentTransactionPanel', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(RecentTransactionPanel)
    expect(wrapper.exists()).toBe(true)
  })
})
