# Breathe - Application d'Exercices de Respiration

## Vue d'ensemble du projet

**Breathe** est une application web frontend moderne conçue pour aider les utilisateurs à pratiquer des exercices de respiration guidés. L'application vise à promouvoir le bien-être mental et la relaxation à travers des techniques de respiration structurées.

## Stack Technique

- **Frontend**: React 19.1.0 avec TypeScript
- **Build Tool**: Vite 7.0.4
- **Bundler**: SWC pour un hot reload rapide
- **Linting**: ESLint avec configuration TypeScript
- **Styling**: CSS modules ou CSS classique (à définir)

## Structure du Projet

```
breathe/
├── public/              # Assets statiques
├── src/
│   ├── assets/          # Images, icônes, etc.
│   ├── components/      # Composants React réutilisables
│   ├── pages/           # Pages de l'application
│   ├── hooks/           # Hooks personnalisés
│   ├── utils/           # Fonctions utilitaires
│   ├── types/           # Types TypeScript
│   └── styles/          # Styles globaux et thèmes
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Fonctionnalités Principales à Développer

### 1. Exercices de Respiration
- **4-7-8 Technique**: Inspirez 4s, retenez 7s, expirez 8s
- **Box Breathing**: 4-4-4-4 (inspirez, retenez, expirez, retenez)
- **Respiration Cohérente**: 5s inspiration, 5s expiration
- **Respiration Triangulaire**: 4-4-4 (inspirez, retenez, expirez)

### 2. Interface Utilisateur
- **Timer Visuel**: Cercle ou animation pour guider la respiration
- **Instructions Audio/Visuelles**: Guidance claire pour chaque phase
- **Personnalisation**: Durées ajustables selon les préférences
- **Sessions**: Suivi des sessions terminées

### 3. Expérience Utilisateur
- **Design Minimaliste**: Interface apaisante et non distrayante
- **Responsive**: Fonctionnel sur mobile, tablette et desktop
- **Accessibilité**: Support des lecteurs d'écran et navigation clavier
- **Mode Sombre/Clair**: Adaptation aux préférences utilisateur

## Architecture des Composants

### Composants Principaux à Créer
- `BreathingExercise`: Composant principal d'exercice
- `Timer`: Composant de minuteur avec animation
- `ExerciseSelector`: Sélecteur de type d'exercice
- `Settings`: Configuration des exercices
- `SessionHistory`: Historique des sessions

### Hooks Personnalisés
- `useBreathingTimer`: Gestion du timer et des phases
- `useAudioGuide`: Gestion des instructions audio
- `useLocalStorage`: Persistance des préférences utilisateur

## État de Développement Actuel

Le projet est actuellement dans sa phase initiale avec :
- ✅ Configuration Vite + React + TypeScript
- ✅ Structure de base du projet
- ❌ Composants de respiration (à développer)
- ❌ Interface utilisateur (à concevoir)
- ❌ Logique de timing (à implémenter)

## Objectifs Immédiats

1. **Nettoyer le template**: Supprimer le code de démo Vite/React
2. **Créer la structure**: Mettre en place les dossiers et composants de base
3. **Implémenter le timer**: Développer la logique de timing pour les exercices
4. **Design de base**: Créer une interface simple et fonctionnelle
5. **Premier exercice**: Implémenter la technique 4-7-8 comme MVP

## Instructions pour l'Assistant

Quand vous travaillez sur ce projet :
- Respectez les bonnes pratiques React avec TypeScript
- Utilisez des hooks pour la gestion d'état
- Privilégiez la lisibilité et la maintenabilité du code
- Assurez-vous que l'interface soit intuitive et apaisante
- Testez la responsivité sur différents écrans
- Implémentez les fonctionnalités de manière progressive

## Description de l'interface
2 pages : 
- page principale contenant un formulaire permettant de saisir les information de l'exercie
- page de renseignement "about" expliquant l'application

## Prochaines Étapes

1. Créer la structure de dossiers recommandée
2. créer les 2 pages