import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ActionCard from '@/components/cards/ActionCard.vue'

describe('ActionCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ActionCard)
    expect(wrapper.exists()).toBe(true)
  })
})
