import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book } from "@/types";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const {
    id,
    title = "Titre inconnu",
    author = "Auteur inconnu",
    coverImage = "https://via.placeholder.com/200x300?text=Pas+de+couverture",
    category = "Non classé",
    language = "Inconnue",
    description = "",
    available = true,
  } = book;

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pt-[60%] overflow-hidden">
        <img
          src={coverImage}
          alt={`Couverture de ${title}`}
          className="absolute inset-0 object-cover w-full h-full book-cover"
        />
        <div className="book-spine"></div>

        {/* Badge disponibilité */}
        {available ? (
          <Badge className="absolute top-2 right-2 bg-green-600 text-white">
            Disponible
          </Badge>
        ) : (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Indisponible
          </Badge>
        )}
      </div>

      <CardContent className="pt-6 flex-grow">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{author}</p>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">{category}</Badge>
          <Badge variant="outline" className="text-xs">{language}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description || "Aucune description disponible."}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link to={`/livres/${id}`}>Voir détails</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
