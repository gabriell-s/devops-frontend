<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true"> Register </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-title class="text-h5"> Register a book </v-card-title>
        <v-card-text>
          <Register v-model="book" type="submitRegister"></Register>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="handleSubmit" color="primary"> Register </v-btn>
          <v-btn @click="dialog = false" color="error"> Cancelar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Register from '@/components/books/RegisterBook.vue'

const book = ref({
  name: '',
  description: '',
  edition: '',
  isbn: '',
  publisherDate: '',
})
const dialog = ref(false)
const emit = defineEmits(['submitRegister'])

function handleSubmit() {
  console.log('📚 Livro registrado:', { ...book.value })
  emit('submitRegister', { ...book.value })
}
</script>
