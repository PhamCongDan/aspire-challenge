import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { shallowMount } from '@vue/test-utils'
import InfoCard from '@/components/cards/InfoCard.vue'
import { useCardStore } from '@/stores/card'
import Quasar from 'quasar'

describe('InfoCard', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(InfoCard, {
      mocks: {
        $q: {
          screen: {
            xs: true
          }
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
