<template>
  <v-container class="py-10">
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
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <div v-if="bookStore.books.length">
              <transition-group name="fade" tag="div">
                <ListBook :items="bookStore.books" :key="bookStore.books.length" />
              </transition-group>
            </div>
            <div v-else class="text-center text-grey py-6">
              <v-icon size="40" class="mb-2" color="grey">mdi-book-open-variant</v-icon>
              <div>No books registered yet. Click "Register" to get started.</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import DialogBook from '@/components/books/DialogBook.vue'
import ListBook from '@/components/books/ListBook.vue'
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()

async function add_book(formData: {
  name: string
  edition: number
  isbn: number
  description?: string
  publisherDate?: string
}) {
  console.log('📥 Dados recebidos:', formData)

  await bookStore.addBook({
    name: formData.name,
    edition: formData.edition,
    isbn: formData.isbn,
    description: formData.description,
    publisherDate: Number(formData.publisherDate) || new Date().getFullYear(),
  })

  console.log('✅ Livro adicionado!', bookStore.books)
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
