import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ItemCard from '@/components/cards/ItemCard.vue'

describe('ItemCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ItemCard)
    expect(wrapper.exists()).toBe(true)
  })
})
