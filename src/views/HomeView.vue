<template>
  <v-container class="py-10">
    <v-overlay v-model="loading" class="d-flex justify-center align-center" absolute>
      <v-progress-circular indeterminate color="primary" size="64" />
    </v-overlay>

    <!-- Título da página -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 font-weight-bold page-title">📚 Acess Books</h1>
        <p class="text-body-1 subtitle">Enter or Register your Book</p>
      </v-col>
    </v-row>

    <!-- Seção de ações -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6" class="text-center">
        <DialogBook @submitRegister="add_book" />
      </v-col>
    </v-row>

    <!-- Lista de livros -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card elevation="4" class="book-card">
          <v-card-title class="bg-primary text-white d-flex align-center">
            <v-icon class="mr-2">mdi-book-multiple</v-icon>
            <span class="text-h6">Books List</span>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-refresh" variant="text" @click="fetchBooks"> </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-card-text
              ><v-card-text>
                <div v-if="bookStore.books.length">
                  <ListBook :items="bookStore.books" />
                </div>
                <div v-else class="text-center text-grey py-6">
                  <v-icon size="40" class="mb-2" color="grey">mdi-book-open-variant</v-icon>
                  <div>Nenhum livro cadastrado.</div>
                </div>
              </v-card-text>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DialogBook from '@/components/books/DialogBook.vue'
import ListBook from '@/components/books/ListBook.vue'
import { useBookStore } from '@/stores/bookStore'
import { onMounted } from 'vue'
import type { Book } from '@/models/Book'
import { extractBackendError } from '@/utils/errorHandler'

onMounted(async () => {
  await fetchBooks()
})
const loading = ref(false)

const bookStore = useBookStore()

import { useNotificationStore } from '@/stores/notificationStore'

const notification = useNotificationStore()

const fetchBooks = async () => {
  loading.value = true
  try {
    await bookStore.fetchBooks()
  } catch (err: any) {
    notification.showError(err)
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }
}

const add_book = async (book: Omit<Book, 'id'>) => {
  loading.value = true
  try {
    await bookStore.addBook(book)
    notification.showSuccess('Livro adicionado com sucesso!')
  } catch (err: any) {
    const parsed = extractBackendError(err)
    notification.showError(parsed.message)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.page-title {
  color: #2e2e2e;
  letter-spacing: 0.5px;
}

.subtitle {
  color: #6c757d;
  margin-top: 4px;
}

.book-card {
  border-radius: 16px;
  overflow: hidden;
  background-color: #fafafa;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
