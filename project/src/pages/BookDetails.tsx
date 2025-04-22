import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabaseClient";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [alreadyReserved, setAlreadyReserved] = useState(false);

  useEffect(() => {
    async function fetchBook() {
      if (!id) return;

      const { data: bookData, error } = await supabase
        .from("books")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Erreur récupération livre :", error);
        setBook(null);
      } else {
        setBook(bookData);

        // Vérifie s’il y a déjà une réservation active/pending pour ce livre
        const { data: reservations } = await supabase
          .from("reservations")
          .select("id")
          .eq("book_id", bookData.id)
          .in("status", ["pending", "active"]);

        setAlreadyReserved(reservations && reservations.length > 0);
      }

      setLoading(false);
    }

    fetchBook();
  }, [id]);

  const handleReservation = async () => {
    if (!book?.id) return;

    const { error } = await supabase.from("reservations").insert([
      {
        book_id: book.id,
        user_id: 1, // 🔐 à remplacer plus tard par l’utilisateur connecté
        start_date: new Date().toISOString().slice(0, 10),
        end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        status: "pending",
      },
    ]);

    if (error) {
      console.error("Erreur réservation :", error);
      toast({
        title: "Erreur",
        description: "La réservation a échoué.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Réservation réussie !",
        description: "Vous serez redirigé vers vos réservations.",
      });
      setTimeout(() => {
        navigate("/reservations");
      }, 2000);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">Chargement du livre...</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Livre non trouvé</h1>
        <p className="text-muted-foreground mb-6">Le livre que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link to="/livres">Retour au catalogue</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative w-full pt-[150%] rounded overflow-hidden shadow-md">
          <img
            src={book.coverImage}
            alt={`Couverture de ${book.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-muted-foreground text-lg">par {book.author}</p>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">{book.category}</Badge>
            <Badge variant="outline">{book.language}</Badge>
            <Badge className={book.available ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
              {book.available ? "Disponible" : "Indisponible"}
            </Badge>
          </div>

          <p className="text-base mt-4">{book.description}</p>

          {book.fileUrl && (
            <a href={book.fileUrl} target="_blank" rel="noopener noreferrer">
              <Button className="mt-4">📥 Télécharger ce livre</Button>
            </a>
          )}

          {/* ✅ Masquer si indisponible ou déjà réservé */}
          {book.available && !alreadyReserved && (
            <Button className="mt-2" onClick={handleReservation}>
              📆 Réserver ce livre
            </Button>
          )}

          {alreadyReserved && (
            <p className="text-sm text-muted-foreground mt-2">
              Ce livre est déjà réservé ou en cours d'emprunt.
            </p>
          )}

          <div className="mt-6">
            <Button asChild>
              <Link to="/livres">← Retour au catalogue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
