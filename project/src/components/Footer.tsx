
import { Link } from "react-router-dom";
import { BookOpen, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">BiblioSystem</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Système de gestion de bibliothèque moderne et intuitif, intégrant REST API et SOAP.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/livres" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/livres/disponibles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Livres Disponibles
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mes Réservations
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Administration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <a 
                href="mailto:contact@bibliosystem.fr" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@bibliosystem.fr</span>
              </a>
              <a 
                href="https://github.com/bibliosystem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-muted">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BiblioSystem. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
