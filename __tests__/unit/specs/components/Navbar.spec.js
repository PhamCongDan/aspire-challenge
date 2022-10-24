import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.exists()).toBe(true)
  })
})
