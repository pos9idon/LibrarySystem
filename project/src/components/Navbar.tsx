
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, User, BookMarked } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const routes = [
    { name: "Accueil", path: "/" },
    { name: "Catalogue", path: "/livres" },
    { name: "Livres Disponibles", path: "/livres/disponibles" },
    { name: "Mes Réservations", path: "/reservations" },
  ];

  return (
    <nav className="bg-card shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">BiblioSystem</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(route.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {route.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
              aria-label="Connexion étudiant"
            >
              Connexion étudiant
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/admin" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Administration</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(route.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Connexion étudiant"
            >
              Connexion étudiant
            </Link>
            <Link
              to="/admin"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4" />
              <span>Administration</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
