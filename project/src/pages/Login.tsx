import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message === "Invalid login credentials"
        ? "Identifiants incorrects"
        : error.message
      );
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-library-cream via-white to-library-light-blue">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md border">
        <h1 className="text-2xl font-bold text-center mb-6 text-primary">Connexion Étudiant</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Adresse email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10"
                type="email"
                id="email"
                autoFocus
                required
                placeholder="votre.email@exemple.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10"
                type="password"
                id="password"
                required
                placeholder="Votre mot de passe"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className="text-sm text-red-600 bg-red-50 rounded p-2">{error}</div>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Pas de compte ?{" "}
          <Link to="/register" className="text-primary hover:underline transition-all">
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
