import { defineStore } from 'pinia'
import { ref } from 'vue'
import { bookService } from '@/services/bookService'
import type { Book } from '../models/Book.ts'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref<Book[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null) // opcional

  // Fetch all books from the backend
  async function fetchBooks() {
    loading.value = true
    error.value = null

    try {
      books.value = await bookService.getBooks()
    } catch (err) {
      error.value = 'Erro ao buscar livros.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  // Add a new book
  async function addBook(book: Omit<Book, 'id'>) {
    loading.value = true
    error.value = null

    try {
      const newBook = await bookService.addBook(book)
      books.value.push(newBook)
    } catch (err) {
      error.value = 'Erro ao adicionar livro.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  // Delete a book by ID
  async function deleteBook(bookId: number) {
    loading.value = true
    error.value = null

    try {
      await bookService.deleteBook(bookId)
      books.value = books.value.filter((book) => book.id !== bookId)
    } catch (err) {
      error.value = 'Erro ao deletar livro.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    books,
    loading,
    error,
    fetchBooks,
    addBook,
    deleteBook,
  }
})
