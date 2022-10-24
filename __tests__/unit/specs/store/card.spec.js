import { describe, it, expect, beforeEach } from 'vitest'
// import { shallowMount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useCardStore } from '@/stores/card'
// import ModalAddCard from '@/components/cards/ModalAddCard.vue'

describe('ModalAddCard', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCardStore()
  })
  it('should execute changeActiveCard correctly', () => {
    store.lstCard = [
      {
        id: 1,
        name: 'Adeel Mckeown',
        cardNumber: '1234567890123456',
        expireDate: '01/23',
        cvv: 111,
        active: true,
      },
      {
        id: 2,
        name: 'Emilie Ridley',
        cardNumber: '1234123412341234',
        expireDate: '01/24',
        cvv: 555,
        active: true,
      }
    ]
    store.changeActiveCard(1)
    expect(store.activeIndexCard).toBe(1)
  })

  it('should execute getListCard correctly', () => {
    store.getLstCard()
    expect(store.lstCard.length).toBe(2)
  })

  it('should execute addNewCard correctly', () => {
    store.addNewCard('testing')
    expect(store.lstCard.length).toBe(1)
  })

  it('should execute removeCard correctly', () => {
    store.lstCard = [
      {
        id: 1,
        name: 'Adeel Mckeown',
        cardNumber: '1234567890123456',
        expireDate: '01/23',
        cvv: 111,
        active: true,
      },
      {
        id: 2,
        name: 'Emilie Ridley',
        cardNumber: '1234123412341234',
        expireDate: '01/24',
        cvv: 555,
        active: true,
      }
    ]
    store.removeCard(1)
    expect(store.lstCard.length).toBe(1)
  })

  it('should execute freezeCard correctly', () => {
    store.lstCard = [
      {
        id: 1,
        name: 'Adeel Mckeown',
        cardNumber: '1234567890123456',
        expireDate: '01/23',
        cvv: 111,
        active: true,
      },
      {
        id: 2,
        name: 'Emilie Ridley',
        cardNumber: '1234123412341234',
        expireDate: '01/24',
        cvv: 555,
        active: true,
      }
    ]
    store.freezeCard(0)
    expect(store.lstCard[0].active).toBe(false)
  })

  it('should execute unfreezeCard correctly', () => {
    store.lstCard = [
      {
        id: 1,
        name: 'Adeel Mckeown',
        cardNumber: '1234567890123456',
        expireDate: '01/23',
        cvv: 111,
        active: false,
      },
      {
        id: 2,
        name: 'Emilie Ridley',
        cardNumber: '1234123412341234',
        expireDate: '01/24',
        cvv: 555,
        active: false,
      }
    ]
    store.unfreezeCard(0)
    expect(store.lstCard[0].active).toBe(true)
  })
  
})
