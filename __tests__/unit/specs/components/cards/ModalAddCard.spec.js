import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useCardStore } from '@/stores/card'
import ModalAddCard from '@/components/cards/ModalAddCard.vue'

describe('ModalAddCard', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it(' ModalAddCard component renders properly', () => {
    const wrapper = shallowMount(ModalAddCard, {
      props: { dialog: true },
    })
    expect(wrapper.exists()).toBe(true)
  })

  // it('should execute onclick cancel button correctly', () => {
  //   const wrapper = shallowMount(ModalAddCard, { props: { dialog: true } })
  //   wrapper.vm.closeModal()
  //   console.log(wrapper.vm.isOpen);
  //   expect(wrapper.vm.isOpen).toBe(false)
  // })
})
