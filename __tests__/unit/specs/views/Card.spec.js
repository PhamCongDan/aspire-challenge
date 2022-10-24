import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCardStore } from '@/stores/card'
import { shallowMount } from '@vue/test-utils'
import Card from '@/views/Card.vue'

describe('Card', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(Card)
    expect(wrapper.exists()).toBe(true)
  })
})
