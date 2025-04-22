#   Système de Gestion de Bibliothèque Numérique

Ce projet est une application complète de gestion de bibliothèque permettant aux utilisateurs de consulter, réserver et télécharger des livres, tout en fournissant une interface d'administration pour les bibliothécaires.

---

##     Objectifs

- Consulter un catalogue de livres réels depuis l'API **Open Library**
- Rechercher par titre, auteur, catégorie ou langue
- Vérifier la disponibilité d'un livre
- Réserver un livre à une date précise
- Télécharger le fichier PDF d'un livre si disponible
- Gérer les stocks, prêts et retours via un service **SOAP**

---

##     Architecture

### Frontend

- **Framework** : React.js + Vite
- **Style** : Tailwind CSS
- **Routage** : React Router DOM
- **Données** : Supabase SDK (API REST)

### Backend

- **REST** : Java + Spring Boot
- **SOAP** : Java + Spring WS
- **Base de données** : PostgreSQL (via Supabase)
- **Stockage de fichiers** : Supabase Storage

### Tests

- Postman pour REST
- SoapUI pour SOAP

---

##     Fonctionnalités principales

### REST (Utilisateurs finaux)

- `GET /livres` : Liste de tous les livres
- `GET /livres/:id` : Détails d'un livre
- `GET /livres/disponibles` : Livres disponibles
- `POST /reservations` : Création d'une réservation
- `GET /reservations/:id` : Suivi d'une réservation

### SOAP (Bibliothécaires)

- `ajouterLivre(livre)`
- `modifierLivre(id, livre)`
- `supprimerLivre(id)`
- `preterLivre(userId, livreId)`
- `retournerLivre(userId, livreId)`

---

##    Technologies utilisées

| Catégorie       | Stack                 |
| --------------- | --------------------- |
| Frontend        | React, Tailwind, Vite |
| Backend REST    | Spring Boot           |
| Backend SOAP    | Spring WS             |
| Base de données | Supabase (PostgreSQL) |
| Tests API       | Postman, SoapUI       |

---

##       Projet réalisé dans le cadre du cours :

- **Matière** : Webservices (REST, SOAP)
- **Filière / Niveau** : Master 1 MICDA
- **Université** : UNCHK
- **Enseignant** : M. Djiga Sène

---

##  Auteur:

-  Babacar Ndour

---

##    Remarques

> Ce projet a été l'occasion de découvrir les difficultés réelles de l'intégration d'une API, la gestion de base de données, et les problèmes courants de déploiement et d'erreurs à runtime. Des solutions ont été trouvées grâce à la documentation, l'entraide et la persévérance.

N'hésitez pas à explorer le code, l'améliorer ou le réutiliser !
#   Système de Gestion de Bibliothèque Numérique

Ce projet est une application complète de gestion de bibliothèque permettant aux utilisateurs de consulter, réserver et télécharger des livres, tout en fournissant une interface d'administration pour les bibliothécaires.

---

##     Objectifs

- Consulter un catalogue de livres réels depuis l'API **Open Library**
- Rechercher par titre, auteur, catégorie ou langue
- Vérifier la disponibilité d'un livre
- Réserver un livre à une date précise
- Télécharger le fichier PDF d'un livre si disponible
- Gérer les stocks, prêts et retours via un service **SOAP**

---

##     Architecture

### Frontend

- **Framework** : React.js + Vite
- **Style** : Tailwind CSS
- **Routage** : React Router DOM
- **Données** : Supabase SDK (API REST)

### Backend

- **REST** : Java + Spring Boot
- **SOAP** : Java + Spring WS
- **Base de données** : PostgreSQL (via Supabase)
- **Stockage de fichiers** : Supabase Storage

### Tests

- Postman pour REST
- SoapUI pour SOAP

---

##     Fonctionnalités principales

### REST (Utilisateurs finaux)

- `GET /livres` : Liste de tous les livres
- `GET /livres/:id` : Détails d'un livre
- `GET /livres/disponibles` : Livres disponibles
- `POST /reservations` : Création d'une réservation
- `GET /reservations/:id` : Suivi d'une réservation

### SOAP (Bibliothécaires)

- `ajouterLivre(livre)`
- `modifierLivre(id, livre)`
- `supprimerLivre(id)`
- `preterLivre(userId, livreId)`
- `retournerLivre(userId, livreId)`

---

##    Technologies utilisées

| Catégorie       | Stack                 |
| --------------- | --------------------- |
| Frontend        | React, Tailwind, Vite |
| Backend REST    | Spring Boot           |
| Backend SOAP    | Spring WS             |
| Base de données | Supabase (PostgreSQL) |
| Tests API       | Postman, SoapUI       |

---

##       Projet réalisé dans le cadre du cours :

- **Matière** : Webservices (REST, SOAP)
- **Filière / Niveau** : Master 1 MICDA
- **Université** : UNCHK
- **Enseignant** : M. Djiga Sène

---

##  Auteur:

-  Babacar Ndour

---

##    Remarques

> Ce projet a été l'occasion de découvrir les difficultés réelles de l'intégration d'une API, la gestion de base de données, et les problèmes courants de déploiement et d'erreurs à runtime. Des solutions ont été trouvées grâce à la documentation, l'entraide et la persévérance.

N'hésitez pas à explorer le code, l'améliorer ou le réutiliser !
