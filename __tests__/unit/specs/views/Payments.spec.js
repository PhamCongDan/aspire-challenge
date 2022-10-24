import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Payments from '@/views/Payments.vue'

describe('Payments', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Payments)
    expect(wrapper.exists()).toBe(true)
  })
})
