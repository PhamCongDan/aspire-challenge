import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import InfoCard from '@/components/cards/InfoCard.vue'

describe('InfoCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(InfoCard)
    expect(wrapper.exists()).toBe(true)
  })
})
