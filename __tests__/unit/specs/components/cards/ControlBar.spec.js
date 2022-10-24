import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCardStore } from '@/stores/card'
import { shallowMount } from '@vue/test-utils'
import ControlBar from '@/components/cards/ControlBar.vue'

describe('ControlBar', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(ControlBar)
    expect(wrapper.exists()).toBe(true)
  })
})
