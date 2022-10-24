import {
  describe,
  it,
  expect
} from 'vitest'

import {
  shallowMount
} from '@vue/test-utils'
import ItemTransaction from '@/components/cards/ItemTransaction.vue'

describe('ItemTransaction', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ItemTransaction, {
      props: {
        transactionData: {
          id: 1,
          type: 'storage',
          name: 'Hamleys',
          date: '20 May 2020',
          status: 'Refund on debit card',
          amount: -150,
          currency: '$'
        },
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})