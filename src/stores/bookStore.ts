import { defineStore } from 'pinia'
import { ref } from 'vue'
import { bookService } from '@/services/bookService'
import type { Book } from '@/services/bookService'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref<Book[]>([])

  async function addBook(book: Omit<Book, 'id'>) {
    const newBook = await bookService.addBook(book)
    books.value.push(newBook)
  }

  return {
    books,
    addBook,
  }
})
