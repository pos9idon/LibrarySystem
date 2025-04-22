
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, BookOpen, Calendar, CheckCircle, XCircle, Clock } from "lucide-react";
import { getReservationById, getReservationsByUserId } from "@/data/mockData";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

const ReservationDetail = ({ id }: { id: number }) => {
  const reservation = getReservationById(id);

  if (!reservation) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Réservation non trouvée</h1>
        <p className="text-muted-foreground mb-6">La réservation que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link to="/reservations">Voir toutes mes réservations</Link>
        </Button>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">En attente</Badge>;
      case "active":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Terminée</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Annulée</Badge>;
      default:
        return <Badge variant="outline">Inconnue</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/reservations" className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          Toutes mes réservations
        </Link>
      </Button>

      <div>
        <h1 className="text-3xl font-bold mb-4">
          Détails de la réservation #{reservation.id}
        </h1>
        <div className="flex items-center gap-2 mb-6">
          {getStatusBadge(reservation.status)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Book info */}
        <div className="md:col-span-1">
          {reservation.book && (
            <Card>
              <div className="relative aspect-[2/3] rounded-t-lg overflow-hidden">
                <img
                  src={reservation.book.coverImage}
                  alt={`Couverture de ${reservation.book.title}`}
                  className="object-cover w-full h-full"
                />
                <div className="book-spine"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{reservation.book.title}</h3>
                <p className="text-muted-foreground">{reservation.book.author}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Reservation details */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Informations de réservation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Livre</p>
                      <p className="text-muted-foreground">
                        {reservation.book?.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Période</p>
                      <p className="text-muted-foreground">
                        Du {format(parseISO(reservation.startDate), "dd MMM yyyy", { locale: fr })} au{" "}
                        {format(parseISO(reservation.endDate), "dd MMM yyyy", { locale: fr })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-3">Statut de la réservation</h3>
                <div className="bg-muted p-4 rounded-md">
                  {reservation.status === "pending" && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium">En attente de confirmation</p>
                        <p className="text-sm text-muted-foreground">
                          Votre réservation est en cours de traitement par la bibliothèque.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {reservation.status === "active" && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Réservation confirmée</p>
                        <p className="text-sm text-muted-foreground">
                          Vous pouvez récupérer le livre à la bibliothèque.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {reservation.status === "completed" && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Réservation terminée</p>
                        <p className="text-sm text-muted-foreground">
                          Le livre a été retourné à la bibliothèque.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {reservation.status === "cancelled" && (
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-medium">Réservation annulée</p>
                        <p className="text-sm text-muted-foreground">
                          Cette réservation a été annulée.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {reservation.status === "active" && (
                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-3">Instructions</h3>
                  <div className="bg-secondary/10 p-4 rounded-md">
                    <p className="text-sm">
                      Veuillez présenter votre carte d'étudiant ou de personnel au comptoir de la bibliothèque pour récupérer votre livre.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-4">
                {reservation.status === "pending" && (
                  <Button variant="destructive">
                    Annuler la réservation
                  </Button>
                )}
                
                {reservation.status === "active" && (
                  <Button variant="outline" asChild>
                    <Link to={`/livres/${reservation.bookId}`}>
                      Voir détails du livre
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ReservationsList = () => {
  // In a real app, we would get the user ID from authentication
  const userId = 1;
  const userReservations = getReservationsByUserId(userId);

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending": return "En attente";
      case "active": return "Active";
      case "completed": return "Terminée";
      case "cancelled": return "Annulée";
      default: return "Inconnue";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-5 w-5 text-amber-600" />;
      case "active": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "completed": return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case "cancelled": return <XCircle className="h-5 w-5 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Mes Réservations</h1>
        <p className="text-muted-foreground">
          Consultez l'historique et le statut de vos réservations.
        </p>
      </div>

      {userReservations.length > 0 ? (
        <div className="space-y-4">
          {userReservations.map((reservation) => (
            <Card key={reservation.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Book cover */}
                {reservation.book && (
                  <div className="md:w-1/4 lg:w-1/6">
                    <div className="relative aspect-[2/3] md:aspect-square lg:aspect-[2/3] overflow-hidden">
                      <img
                        src={reservation.book.coverImage}
                        alt={`Couverture de ${reservation.book.title}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="book-spine"></div>
                    </div>
                  </div>
                )}
                
                {/* Reservation details */}
                <div className="flex-grow p-4 md:p-6 flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {reservation.book?.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {reservation.book?.author}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(reservation.status)}
                        <span className="text-sm font-medium">
                          {getStatusLabel(reservation.status)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">
                        Du {format(parseISO(reservation.startDate), "dd/MM/yyyy")} au {format(parseISO(reservation.endDate), "dd/MM/yyyy")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline" asChild>
                      <Link to={`/reservations/${reservation.id}`}>
                        Voir détails
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Aucune réservation</h2>
          <p className="text-muted-foreground mb-6">
            Vous n'avez pas encore effectué de réservation.
          </p>
          <Button asChild>
            <Link to="/livres">Parcourir le catalogue</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

const Reservations = () => {
  const { id } = useParams();
  
  return id ? <ReservationDetail id={Number(id)} /> : <ReservationsList />;
};

export default Reservations;
