import { defineStore } from 'pinia'
import type { CardInfo } from '@/@types/CardInfo'
import { ref, reactive } from 'vue'

interface ModuleCard {
  lstCard: CardInfo[],
  activeIndexCard: number,
}

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      lstCard: [],
      activeIndexCard: 0,
    } as ModuleCard;
  },
  actions: {
    changeActiveCard(index: number) {
      this.activeIndexCard = index
    },
    async getLstCard() {      
      this.lstCard = [
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
    },
    addNewCard(name: string) {
      const randomDate = new Date(Date.now() + Math.random() * 100000000000);      
      this.lstCard.push({
        id: Math.floor(Math.random() * 100),
        name: name,
        cardNumber: `${Math.floor(Math.random()*1E16)}`,
        expireDate: `${`${randomDate.getMonth() + 1}`.padStart(1, '0')}/${`${randomDate.getFullYear()}`.slice(-2)}`,
        cvv: Math.floor(Math.random() * 100),
        active: true,
      })      
    },
    removeCard(index: number) {
      if (index > -1) {
        this.lstCard.splice(index, 1)
      }
    },
    freezeCard(index: number) {
      this.lstCard[index].active = false
    },
    unfreezeCard(index: number) {
      this.lstCard[index].active = true
    }
  }
}
)
