import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Credit from '@/views/Credit.vue'

describe('Credit', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Credit)
    expect(wrapper.exists()).toBe(true)
  })
})
