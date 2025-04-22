
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message === "User already registered"
        ? "Ce compte existe déjà."
        : error.message
      );
    } else {
      setSuccess("Compte créé, vérifiez votre email!");
      setTimeout(() => navigate("/login"), 1700);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-library-cream via-white to-library-light-blue">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md border">
        <h1 className="text-2xl font-bold text-center mb-4 text-primary">
          Création compte étudiant
        </h1>
        <form onSubmit={handleRegister} className="space-y-4">
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
                minLength={6}
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium mb-1">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10"
                type="password"
                id="confirm"
                required
                placeholder="Retapez votre mot de passe"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                minLength={6}
              />
            </div>
          </div>
          {error && (
            <div className="text-sm text-red-600 bg-red-50 rounded p-2">{error}</div>
          )}
          {success && (
            <div className="text-sm text-green-600 bg-green-50 rounded p-2">{success}</div>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Création..." : "Créer mon compte"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Déjà inscrit ?{" "}
          <Link
            to="/login"
            className="text-primary hover:underline transition-all"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
