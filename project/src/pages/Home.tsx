
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BookMarked, Library, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-library-brown to-library-blue bg-clip-text text-transparent">
          Bienvenue à BiblioSystem
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Système de gestion de bibliothèque moderne et intuitif, 
          permettant aux étudiants et professeurs de consulter, réserver et suivre leurs emprunts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/livres">Parcourir le Catalogue</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/livres/disponibles">Voir les Livres Disponibles</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation du Catalogue</h3>
                <p className="text-muted-foreground">
                  Parcourez notre vaste collection de livres académiques et littéraires.
                </p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/livres">Explorer</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookMarked className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Réservation de Livres</h3>
                <p className="text-muted-foreground">
                  Réservez vos livres à l'avance et récupérez-les quand vous le souhaitez.
                </p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/livres/disponibles">Réserver</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestion des Emprunts</h3>
                <p className="text-muted-foreground">
                  Pour les bibliothécaires: gérez facilement les prêts, retours et l'inventaire.
                </p>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/admin">Administration</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-12 bg-muted rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Comment ça marche</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-card shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Recherchez</h3>
            <p className="text-muted-foreground">
              Explorez notre catalogue pour trouver le livre que vous cherchez.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-card shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Réservez</h3>
            <p className="text-muted-foreground">
              Effectuez une réservation pour une période spécifique.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-card shadow-md rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Empruntez</h3>
            <p className="text-muted-foreground">
              Rendez-vous à la bibliothèque pour récupérer votre livre réservé.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
