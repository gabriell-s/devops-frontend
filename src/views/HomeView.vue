<template>
  <v-container class="py-10">
    <!-- Título da página -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 font-weight-bold page-title">Acess Books</h1>
        <p class="text-body-1 subtitle">Enter or Register your Book</p>
      </v-col>
    </v-row>

    <!-- Seção de ações -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6" class="text-center">
        <ButtonDialog @submitRegister="push_my_list" />
      </v-col>
    </v-row>

    <!-- Lista de livros -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card elevation="3" class="book-card">
          <v-card-title class="bg-primary text-white">
            <span class="text-h6">Books list</span>
          </v-card-title>
          <v-card-text>
            <!--<MyList :items="my_list" />-->
            <ListBook :items="my_list" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import MyList from '../components/MyList.vue'
import ButtonDialog from '@/components/ButtonDialog.vue'
import ListBook from '@/components/ListBook.vue'

import { ref } from 'vue'

const my_list = ref<{ id: number; book: string; edition: number; isnb: number; publisherDate: number }[]>([])
const a = ref(0)

function push_my_list(formData: {
  book: string
  edition: number
  isbn: number
  description?: string
}) {
  a.value += 1

  my_list.value.push({
    id: a.value,
    book: formData.book,
    edition: formData.edition,
    isnb: formData.isbn,
    publisherDate: new Date().getFullYear()
  })

  console.log('Event triggered!')
  console.log('my_list', my_list.value)
}
</script>

<style scoped>
.page-title {
  color: #2e2e2e;
}

.subtitle {
  color: #6c757d;
  margin-top: 4px;
}

.book-card {
  border-radius: 16px;
  overflow: hidden;
}
</style>
