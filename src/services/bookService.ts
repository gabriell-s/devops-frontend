import api from './api'
import type { Book } from '../models/Book.ts'

let bookId = 0
export const bookService = {
  // Add a new book
  async addBook(book: Omit<Book, 'id'>): Promise<Book> {
    return new Promise((resolve) => {
      setTimeout(() => {
        bookId++
        resolve({ id: bookId, ...book })
      }, 500)
    })
    // const response = await api.post<Book>('/books', book)
    // return response.data
  },

  // Fetch all books
  async getBooks(): Promise<Book[]> {
    const response = await api.get<Book[]>('/api/core/books')
    return response.data
  },

  // Delete a book by ID
  async deleteBook(bookId: number): Promise<void> {
    await api.delete(`/api/core/books/${bookId}`)
  },
}
