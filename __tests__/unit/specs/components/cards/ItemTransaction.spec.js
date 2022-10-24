import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ItemTransaction from '@/components/cards/ItemTransaction.vue'

describe('ItemTransaction', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ItemTransaction)
    expect(wrapper.exists()).toBe(true)
  })
})
