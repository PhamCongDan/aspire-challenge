import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Card from '@/views/Card.vue'

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Card)
    expect(wrapper.exists()).toBe(true)
  })
})
