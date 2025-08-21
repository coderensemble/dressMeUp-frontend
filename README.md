# DressMeUp (Frontend)

**Application de fin de formation**  
Dressing mobile interactif développé avec React Native, stylisé en CSS et déployé avec Expo.

---

##  Table des matières

- [À propos](#à-propos)  
- [Fonctionnalités principales](#fonctionnalités-principales)  
- [Démarrage en local](#démarrage-en-local)  
- [Architecture du projet](#architecture-du-projet)  
- [Design & Prototypes](#design--prototypes)  
- [Tech & Outils utilisés](#tech--outils-utilisés)  
- [Tests](#tests)  
- [Déploiement](#déploiement)  
- [Contribuer](#contribuer)  
- [À venir](#à-venir)  
- [Auteur](#auteur)

---

##  À propos

DressMeUp est une **application mobile de dressing virtuel** pensée comme projet final dans le cadre d’un cursus de formation. Elle permet à l’utilisateur·rice de visualiser différentes tenues, de mixer et matcher vêtements et accessoires de manière ludique.

---

##  Fonctionnalités principales

- Interface mobile fluide via **React Native**  
- Styles modulaires et responsive avec **CSS**  
- Déploiement simplifié et accès instantané grâce à **Expo**  
- Navigation intuitive entre écrans (liste de vêtements, tenue complète, détails, etc.)

---

##  Démarrage en local

1. Cloner ce dépôt :  
   ```bash
   git clone https://github.com/coderensemble/dressMeUp-frontend.git
Se placer dans le dossier du projet :

bash
Copier
Modifier
cd dressMeUp-frontend
Installer les dépendances :

bash
Copier
Modifier
yarn install
Lancer l’application avec Expo :

bash
Copier
Modifier
expo start
Scanner le QR code dans l'app Expo sur mobile ou lancer un simulateur.

Architecture du projet
Le projet est organisé selon la structure suivante :

bash
Copier
Modifier
│
├── Components/        # Composants UI réutilisables
├── screens/           # Écrans principaux (, etc.)
├── reducers/          # Gestion d’état simple (si applicable)
├── assets/            # Images, icônes, illustrations
├── App.js             # Point d’entrée de l’application
├── app.json           # Configuration Expo
├── babel.config.js    # Config Babel
├── package.json       # Dépendances & scripts
└── dressmeup.test.js  # Tests unitaires

Design & Prototypes
Les maquettes de l’application ont été réalisées avec Figma pour le design UI/UX:

https://www.figma.com/design/q5wZamjwiZ0YvOHTT7bwMa/DressMeUp---Maquette?m=auto&t=5fll5PCiEhH2Tmdd-6

Tech & Outils utilisés
Technologie	Rôle
React Native	Développement d’interfaces natives multiplateformes
CSS	Mise en forme et responsive design
Expo	Environnement performant pour lancer, tester et déployer l’application
Figma	Conception des designs et prototypes

Tests
L’application inclut des tests unitaires afin d’assurer la fiabilité et la stabilité des composants.

Déploiement
Exécuter expo build:android ou expo build:ios selon la plateforme visée.

Suivre les instructions Expo pour générer l’APK ou IPA.

Déployer sur un store (Play Store / App Store) ou partager via QR code.

Contribuer
Tu peux soit :

Forker ce projet

Créer une branche dédiée (feat/ajout, fix/…, etc.)

Faire tes modifications (features, bug fixes, optimisation)

Soumettre une Pull Request en expliquant bien les changements et l’objectif

À venir
Ajout d’un système d'achat pour composer ses tenues

Fonctionnalité d’exportation de tenues en tant qu'image avec un partage social

Auteur
Adrien Neyron – Développeur Web & Mobile
Disponible pour missions ou opportunités en développement React Native.

