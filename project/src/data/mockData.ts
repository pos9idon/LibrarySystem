import { Book, Reservation } from '../types';

// Mock data for books
export const books: Book[] = [
  {
    id: 1,
    title: "Les Misérables",
    author: "Victor Hugo",
    isbn: "9781234567897",
    category: "Roman classique",
    description: "Un chef-d'œuvre de la littérature française qui suit la vie et les luttes de l'ex-forçat Jean Valjean.",
    publisher: "A. Lacroix, Verboeckhoven & Cie",
    publicationYear: 1862,
    language: "Français",
    pages: 1232,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Introduction à l'algorithmique",
    author: "Thomas H. Cormen",
    isbn: "9782100508600",
    category: "Informatique",
    description: "Manuel de référence pour les étudiants en informatique couvrant les concepts fondamentaux des algorithmes.",
    publisher: "Dunod",
    publicationYear: 2009,
    language: "Français",
    pages: 756,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1623018035782-b269248df916?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    isbn: "9782070408504",
    category: "Littérature jeunesse",
    description: "Un récit poétique qui aborde les thèmes de l'amitié, de l'amour et du sens de la vie.",
    publisher: "Gallimard",
    publicationYear: 1943,
    language: "Français",
    pages: 96,
    available: false,
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=690&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Physique Quantique",
    author: "Claude Cohen-Tannoudji",
    isbn: "9782100559527",
    category: "Sciences",
    description: "Un traité complet sur les principes fondamentaux de la physique quantique.",
    publisher: "EDP Sciences",
    publicationYear: 2018,
    language: "Français",
    pages: 1504,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "L'Art de la Guerre",
    author: "Sun Tzu",
    isbn: "9782266158428",
    category: "Philosophie",
    description: "Un traité de stratégie militaire mais aussi un guide de sagesse pour gérer les conflits dans tous les domaines.",
    publisher: "Pocket",
    publicationYear: 2005,
    language: "Français",
    pages: 125,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Deep Learning",
    author: "Ian Goodfellow",
    isbn: "9780262035613",
    category: "Informatique",
    description: "Un livre qui présente les fondements mathématiques et conceptuels de l'apprentissage profond.",
    publisher: "MIT Press",
    publicationYear: 2016,
    language: "Anglais",
    pages: 800,
    available: false,
    coverImage: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    isbn: "9782070406839",
    category: "Roman classique",
    description: "Un roman d'aventures mêlant vengeance, espoir et justice dans la France du XIXe siècle.",
    publisher: "Gallimard",
    publicationYear: 1844,
    language: "Français",
    pages: 1056,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?q=80&w=688&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Principes d'économie moderne",
    author: "Joseph Stiglitz",
    isbn: "9782807319479",
    category: "Économie",
    description: "Un manuel d'économie qui présente les concepts fondamentaux de façon accessible.",
    publisher: "De Boeck Supérieur",
    publicationYear: 2019,
    language: "Français",
    pages: 992,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=1471&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Fables",
    author: "Jean de La Fontaine",
    isbn: "9782070410836",
    category: "Poésie",
    description: "Recueil de 243 fables écrites par Jean de La Fontaine, un incontournable de la littérature française.",
    publisher: "Livre Gratuit",
    publicationYear: 1678,
    language: "Français",
    pages: 380,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Candide",
    author: "Voltaire",
    isbn: "9782070360025",
    category: "Roman classique",
    description: "Un conte philosophique emblématique, critique et ironique, libre de droits.",
    publisher: "Livre Gratuit",
    publicationYear: 1759,
    language: "Français",
    pages: 144,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Le Capital, Livre I",
    author: "Karl Marx",
    isbn: "9782080705192",
    category: "Économie",
    description: "Texte fondateur de la pensée économique critique, aujourd'hui libre de droits.",
    publisher: "Livre Gratuit",
    publicationYear: 1867,
    language: "Français",
    pages: 865,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Du Contrat Social",
    author: "Jean-Jacques Rousseau",
    isbn: "9782070362531",
    category: "Philosophie",
    description: "Un traité politique majeur de Rousseau, accessible gratuitement.",
    publisher: "Livre Gratuit",
    publicationYear: 1762,
    language: "Français",
    pages: 192,
    available: true,
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
  },
];

// Mock data for reservations
export const reservations: Reservation[] = [
  {
    id: 1,
    userId: 1,
    bookId: 3,
    startDate: "2025-04-15",
    endDate: "2025-04-30",
    status: "active",
  },
  {
    id: 2,
    userId: 2,
    bookId: 6,
    startDate: "2025-04-10",
    endDate: "2025-04-25",
    status: "active",
  },
];

// Helper function to get available books
export const getAvailableBooks = (): Book[] => {
  return books.filter((book) => book.available);
};

// Helper function to get a book by id
export const getBookById = (id: number): Book | undefined => {
  return books.find((book) => book.id === id);
};

// Helper function to get a reservation by id
export const getReservationById = (id: number): Reservation | undefined => {
  const reservation = reservations.find((res) => res.id === id);
  if (reservation) {
    reservation.book = getBookById(reservation.bookId);
  }
  return reservation;
};

// Helper function to get reservations by userId
export const getReservationsByUserId = (userId: number): Reservation[] => {
  return reservations
    .filter((res) => res.userId === userId)
    .map((res) => ({
      ...res,
      book: getBookById(res.bookId),
    }));
};

// Mock function to create a reservation
export const createReservation = (
  userId: number,
  bookId: number,
  startDate: string,
  endDate: string
): Reservation => {
  const book = getBookById(bookId);
  if (!book) {
    throw new Error("Book not found");
  }
  if (!book.available) {
    throw new Error("Book is not available");
  }

  // Update book availability
  const bookIndex = books.findIndex((b) => b.id === bookId);
  books[bookIndex].available = false;

  // Create new reservation
  const newReservation: Reservation = {
    id: reservations.length + 1,
    userId,
    bookId,
    book,
    startDate,
    endDate,
    status: "pending",
  };

  reservations.push(newReservation);
  return newReservation;
};
