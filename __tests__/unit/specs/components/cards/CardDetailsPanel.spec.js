import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import CardDetailsPanel from '@/components/cards/CardDetailsPanel.vue'

describe('CardDetailsPanel', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(CardDetailsPanel)
    expect(wrapper.exists()).toBe(true)
  })
})
