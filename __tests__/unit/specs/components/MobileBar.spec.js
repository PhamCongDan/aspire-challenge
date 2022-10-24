import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import MobileBar from '@/components/MobileBar.vue'

describe('MobileBar', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(MobileBar)
    expect(wrapper.exists()).toBe(true)
  })
})
