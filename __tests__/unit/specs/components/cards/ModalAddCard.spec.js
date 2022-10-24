import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ModalAddCard from '@/components/cards/ModalAddCard.vue'

describe('ModalAddCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ModalAddCard, { props: { dialog: true } })
    expect(wrapper.exists()).toBe(true)
  })
})
