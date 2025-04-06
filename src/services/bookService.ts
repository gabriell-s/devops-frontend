import api from './api'
import type { Book } from '../models/Book.ts'

export const bookService = {
  // Add a new book
  async addBook(book: Omit<Book, 'id'>): Promise<Book> {
    const response = await api.post<Book>('/api/core/books/', book)
    return response.data
  },

  // Fetch all books
  async getBooks(): Promise<Book[]> {
    const response = await api.get<Book[]>('/api/core/books/')
    return response.data
  },

  // Delete a book by ID
  async deleteBook(bookId: number): Promise<void> {
    await api.delete(`/api/core/books/${bookId}/`)
  },
}
