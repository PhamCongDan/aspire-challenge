import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { shallowMount } from '@vue/test-utils'
import SwiperCard from '@/components/cards/SwiperCard.vue'
import { useCardStore } from '@/stores/card'

describe('SwiperCard', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(SwiperCard)
    expect(wrapper.exists()).toBe(true)
  })
})
