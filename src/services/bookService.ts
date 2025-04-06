export interface Book {
  id: number
  name: string
  edition: number
  isbn: number
  publisherDate: number
  description?: string
}

let bookId = 0

export const bookService = {
  async addBook(book: Omit<Book, 'id'>): Promise<Book> {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        bookId++
        resolve({ id: bookId, ...book })
      }, 500)
    })
  },
}
