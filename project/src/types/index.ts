
export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  description: string;
  publisher: string;
  publicationYear: number;
  language: string;
  pages: number;
  available: boolean;
  coverImage: string;
}

export interface Reservation {
  id: number;
  userId: number;
  bookId: number;
  book?: Book;
  startDate: string;
  endDate: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'librarian';
}
