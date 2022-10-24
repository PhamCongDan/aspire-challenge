import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ControlBar from '@/components/cards/ControlBar.vue'

describe('ControlBar', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ControlBar)
    expect(wrapper.exists()).toBe(true)
  })
})
