import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Profile from '@/views/Profile.vue'

describe('Profile', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Profile)
    expect(wrapper.exists()).toBe(true)
  })
})
