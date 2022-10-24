import {
  describe,
  it,
  expect,
  beforeEach
} from 'vitest'
import {
  shallowMount
} from '@vue/test-utils'
import {
  setActivePinia,
  createPinia
} from 'pinia'
import {
  useCardStore
} from '@/stores/card'
import ItemCard from '@/components/cards/ItemCard.vue'

describe('ItemCard', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it('renders properly', () => {
    const wrapper = shallowMount(ItemCard, {
      props: {
        data: {
          id: 1,
          name: 'Adeel Mckeown',
          cardNumber: '1234567890123456',
          expireDate: '01/23',
          cvv: 111,
          active: true,
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})