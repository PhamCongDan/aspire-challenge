import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import SwiperCard from '@/components/cards/SwiperCard.vue'

describe('SwiperCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SwiperCard)
    expect(wrapper.exists()).toBe(true)
  })
})
