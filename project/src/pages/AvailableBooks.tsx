
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BookCard from "@/components/BookCard";
import { getAvailableBooks } from "@/data/mockData";

const AvailableBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const availableBooks = getAvailableBooks();
  
  // Filter books based on search term
  const filteredBooks = availableBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Livres Disponibles</h1>
        <p className="text-muted-foreground">
          Consultez la liste des livres actuellement disponibles pour l'emprunt ou la réservation.
        </p>
      </div>
      
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher par titre, auteur, catégorie..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Books Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          {filteredBooks.length} {filteredBooks.length === 1 ? "Livre disponible" : "Livres disponibles"}
        </h2>
        
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/50 rounded-lg">
            <p className="text-lg font-medium">Aucun livre disponible ne correspond à votre recherche.</p>
            <p className="text-muted-foreground mt-2">Essayez de modifier vos critères de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableBooks;
