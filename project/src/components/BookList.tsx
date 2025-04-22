import { useEffect, useState } from 'react'
import { getBooks } from '@/services/bookService'

export function BookList() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBooks()
      .then(data => setBooks(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Chargement...</div>

  return (
    <div className="p-4 space-y-4">
      {books.map((book: any) => (
        <div key={book.id} className="p-4 border rounded-xl shadow-sm">
          <h3 className="text-xl font-bold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
        </div>
      ))}
    </div>
  )
}