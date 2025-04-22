import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookCatalog from "./pages/BookCatalog";
import BookDetails from "./pages/BookDetails";
import AvailableBooks from "./pages/AvailableBooks";
import Reservations from "./pages/Reservations";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="livres" element={<BookCatalog />} />
            <Route path="livres/:id" element={<BookDetails />} />
            <Route path="livres/disponibles" element={<AvailableBooks />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="reservations/:id" element={<Reservations />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
