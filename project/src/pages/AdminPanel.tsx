
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, 
  Edit, 
  Trash, 
  Download, 
  Upload,
  BookOpen,
  BookCheck,
  BookX,
  BookMarked,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { books, reservations } from "@/data/mockData";
import { Book, Reservation } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("books");

  // Analytical data (would come from API in a real app)
  const totalBooks = books.length;
  const availableBooks = books.filter(book => book.available).length;
  const activeLoans = 2; // Mock data
  const pendingReservations = 1; // Mock data

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Administration Bibliothèque</h1>
        <p className="text-muted-foreground">
          Panneau de gestion pour les bibliothécaires (Interface SOAP)
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total des Livres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{totalBooks}</div>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Livres Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{availableBooks}</div>
              <BookCheck className="h-5 w-5 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Emprunts Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{activeLoans}</div>
              <BookX className="h-5 w-5 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Réservations En Attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{pendingReservations}</div>
              <BookMarked className="h-5 w-5 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="books" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="books">Livres</TabsTrigger>
          <TabsTrigger value="loans">Emprunts</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          {/* Books Tab */}
          <TabsContent value="books" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des Livres</h2>
              <div className="space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Ajouter un livre
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouveau livre</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Titre</Label>
                        <Input id="title" placeholder="Titre du livre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="author">Auteur</Label>
                        <Input id="author" placeholder="Nom de l'auteur" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="isbn">ISBN</Label>
                        <Input id="isbn" placeholder="ISBN" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Catégorie</Label>
                        <Input id="category" placeholder="Catégorie" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="publisher">Éditeur</Label>
                        <Input id="publisher" placeholder="Maison d'édition" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Année de publication</Label>
                        <Input id="year" type="number" placeholder="Année" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="language">Langue</Label>
                        <Input id="language" placeholder="Langue" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pages">Nombre de pages</Label>
                        <Input id="pages" type="number" placeholder="Nombre de pages" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Description du livre" rows={4} />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="cover">URL de la couverture</Label>
                        <Input id="cover" placeholder="URL de l'image de couverture" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="submit">Ajouter le livre</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exporter
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Titre</TableHead>
                    <TableHead>Auteur</TableHead>
                    <TableHead>Catégorie</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {books.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.id}</TableCell>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.category}</TableCell>
                      <TableCell>
                        {book.available ? (
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            Disponible
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                            Indisponible
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          {/* Loans Tab */}
          <TabsContent value="loans" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des Emprunts</h2>
              <div className="space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Nouveau prêt
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Enregistrer un nouveau prêt</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="user">Utilisateur</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un utilisateur" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Jean Dupont (Étudiant)</SelectItem>
                            <SelectItem value="2">Marie Curie (Professeur)</SelectItem>
                            <SelectItem value="3">Paul Martin (Étudiant)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="book">Livre</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un livre" />
                          </SelectTrigger>
                          <SelectContent>
                            {books
                              .filter((book) => book.available)
                              .map((book) => (
                                <SelectItem key={book.id} value={book.id.toString()}>
                                  {book.title} - {book.author}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="return-date">Date de retour prévue</Label>
                        <Input id="return-date" type="date" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Enregistrer le prêt</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Livre</TableHead>
                    <TableHead>Emprunt</TableHead>
                    <TableHead>Retour prévu</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell className="font-medium">Jean Dupont</TableCell>
                    <TableCell>Le Petit Prince</TableCell>
                    <TableCell>15/04/2025</TableCell>
                    <TableCell>30/04/2025</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        En cours
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Retour</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell className="font-medium">Marie Curie</TableCell>
                    <TableCell>Deep Learning</TableCell>
                    <TableCell>10/04/2025</TableCell>
                    <TableCell>25/04/2025</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        En cours
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Retour</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Réservations en attente</h3>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Utilisateur</TableHead>
                      <TableHead>Livre</TableHead>
                      <TableHead>Début</TableHead>
                      <TableHead>Fin</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reservations.map((reservation) => {
                      const book = books.find((b) => b.id === reservation.bookId);
                      return (
                        <TableRow key={reservation.id}>
                          <TableCell>{reservation.id}</TableCell>
                          <TableCell className="font-medium">
                            {reservation.userId === 1 ? "Jean Dupont" : "Marie Curie"}
                          </TableCell>
                          <TableCell>{book?.title}</TableCell>
                          <TableCell>{reservation.startDate}</TableCell>
                          <TableCell>{reservation.endDate}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                              {reservation.status === "pending" ? "En attente" : "Active"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Valider</Button>
                              <Button variant="ghost" size="sm">Refuser</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des Utilisateurs</h2>
              <div className="space-x-2">
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Nouvel utilisateur
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exporter
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Emprunts</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell className="font-medium">Jean Dupont</TableCell>
                    <TableCell>jean.dupont@example.com</TableCell>
                    <TableCell>Étudiant</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell className="font-medium">Marie Curie</TableCell>
                    <TableCell>marie.curie@example.com</TableCell>
                    <TableCell>Professeur</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell className="font-medium">Paul Martin</TableCell>
                    <TableCell>paul.martin@example.com</TableCell>
                    <TableCell>Étudiant</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
