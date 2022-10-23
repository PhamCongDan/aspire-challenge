<script setup lang="ts">
import { computed, ref } from "vue";
import { useCardStore } from '@/stores/card'

type Emit = {
  (event: 'update:dialog', value: boolean): void
}
const props = defineProps<{
  dialog: boolean
}>()

const emit = defineEmits<Emit>();

const cardName = ref('')
const isOpen = computed({
  get() {
    return props.dialog
  },
  set(newValue: boolean) {
    emit('update:dialog', newValue)
  }
})
const { addNewCard } = useCardStore()

const closeModal = () => {
  isOpen.value = false
  cardName.value = ''
}

const createCard = () => {
  if (!cardName.value.trim()) return
  addNewCard(cardName.value.trim())
  closeModal()
}
</script>

<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6 title-modal">Add New Card</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="cardName"
          autofocus
          placeholder="Account Name"
          :rules="[val => val.trim() !== null && val.trim() !== '' || 'Please type your card name',]"
        ></q-input>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" @click="closeModal"></q-btn>
        <q-btn flat label="Add Card" @click="createCard"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.title-modal {
  color: var(--active-color);
}
</style>
