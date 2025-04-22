import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import BookCard from "@/components/BookCard";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const BookCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data, error } = await supabase.from("books").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  });

  const categories = [...new Set(books.map((book) => book.category).filter(Boolean))];
  const languages = [...new Set(books.map((book) => book.language).filter(Boolean))];

  const finalCategoryFilter = categoryFilter === "all-categories" ? "" : categoryFilter;
  const finalLanguageFilter = languageFilter === "all-languages" ? "" : languageFilter;

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = finalCategoryFilter === "" || book.category === finalCategoryFilter;
    const matchesLanguage = finalLanguageFilter === "" || book.language === finalLanguageFilter;

    return matchesSearch && matchesCategory && matchesLanguage;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Catalogue des Livres</h1>
        <p className="text-muted-foreground">
          Explorez notre collection complète de {books.length} livres. Utilisez les filtres pour affiner votre recherche.
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par titre, auteur..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">Toutes les catégories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={languageFilter} onValueChange={setLanguageFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Langue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-languages">Toutes les langues</SelectItem>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setCategoryFilter("");
              setLanguageFilter("");
            }}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          {filteredBooks.length} {filteredBooks.length === 1 ? "Livre trouvé" : "Livres trouvés"}
        </h2>

        {isLoading ? (
          <p>Chargement des livres...</p>
        ) : filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/50 rounded-lg">
            <p className="text-lg font-medium">Aucun livre ne correspond à votre recherche.</p>
            <p className="text-muted-foreground mt-2">Essayez de modifier vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCatalog;
