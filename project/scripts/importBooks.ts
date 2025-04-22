import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

type BookDoc = {
  title: string;
  author_name?: string[];
  language?: string[];
  first_sentence?: string[];
  subject?: string[];
  cover_i?: number;
  ia?: string;
};

type OpenLibraryResponse = {
  docs: BookDoc[];
};

async function fetchBooksFromOpenLibrary(query: string, fallbackCategory: string, total = 1000, perPage = 100) {
  let allBooks: any[] = [];
  const totalPages = Math.ceil(total / perPage);

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${perPage}&page=${page}`;
    console.log(`📖 Fetching page ${page} for '${query}'...`);
    const res = await fetch(url);
    const data = (await res.json()) as OpenLibraryResponse;

    const books = data.docs.map((doc) => ({
      title: doc.title ?? "Titre inconnu",
      author: doc.author_name?.[0] ?? "Auteur inconnu",
      coverImage: doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
        : "https://via.placeholder.com/200x300?text=Pas+de+couverture",
      category: doc.subject?.[0] ?? fallbackCategory,
      language: doc.language?.[0] ?? "Inconnue",
      description: doc.first_sentence?.[0] ?? "Pas de description disponible.",
      available: Math.random() < 0.8,
      fileUrl: doc.ia
        ? `https://archive.org/download/${doc.ia}/${doc.ia}.pdf`
        : null,
    }));

    allBooks = [...allBooks, ...books];
  }

  return allBooks;
}

async function insertBooksToSupabase(books: any[]) {
  const chunkSize = 500;
  for (let i = 0; i < books.length; i += chunkSize) {
    const chunk = books.slice(i, i + chunkSize);
    const { error } = await supabase.from('books').insert(chunk);

    if (error) {
      console.error(`❌ Erreur à l'insertion du lot ${i / chunkSize + 1} :`, error);
    } else {
      console.log(`✅ Lot ${i / chunkSize + 1} inséré (${chunk.length} livres)`);
    }
  }
}

async function run() {
  const sciFiBooks = await fetchBooksFromOpenLibrary("science fiction", "Science-fiction", 500);
  const africanBooks = await fetchBooksFromOpenLibrary("littérature africaine", "Littérature africaine", 500);
  const allBooks = [...sciFiBooks, ...africanBooks];
  console.log(`📦 Total à insérer : ${allBooks.length} livres...`);
  await insertBooksToSupabase(allBooks);
}

run();
