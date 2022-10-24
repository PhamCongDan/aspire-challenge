import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import DesktopBar from '@/components/DesktopBar.vue'

describe('DesktopBar', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(DesktopBar)
    expect(wrapper.exists()).toBe(true)
  })
})
