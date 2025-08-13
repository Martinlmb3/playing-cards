# Playing-Cards: Créateur de Cartes Pokémon

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## À propos du projet

Playing-Cards est une application web qui permet aux utilisateurs de créer et personnaliser leurs propres cartes Pokémon. Les utilisateurs peuvent:
- Créer des monstres personnalisés
- Définir leurs caractéristiques (points de vie, attaques, type)
- Importer des images personnalisées
- Sauvegarder leur collection de cartes

## Technologies utilisées

- **Frontend**: Angular 20, TypeScript, HTML5, CSS3
- **State Management**: Signal API d'Angular
- **Styling**: CSS personnalisé
- **Formulaires**: Angular Reactive Forms
- **Stockage**: LocalStorage (persistence côté client)

## Développement

Pour démarrer le serveur de développement:

```bash
ng serve
```

Une fois le serveur en cours d'exécution, ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement chaque fois que vous modifiez l'un des fichiers source.

## Génération de code

Angular CLI comprend des outils puissants de génération de code. Pour générer un nouveau composant, exécutez:

```bash
ng generate component nom-du-composant
```

Pour une liste complète des schémas disponibles (tels que `components`, `directives` ou `pipes`), exécutez:

```bash
ng generate --help
```

## Construction

Pour construire le projet, exécutez:

```bash
ng build
```

Cela compilera votre projet et stockera les artefacts de construction dans le répertoire `dist/`. Par défaut, la construction en production optimise votre application pour la performance et la vitesse.

## Exécution des tests unitaires

Pour exécuter des tests unitaires avec le framework de test [Karma](https://karma-runner.github.io), utilisez la commande suivante:

```bash
ng test
```

## Exécution des tests de bout en bout

Pour les tests de bout en bout (e2e), exécutez:

```bash
ng e2e
```

Angular CLI ne fournit pas de framework de test de bout en bout par défaut. Vous pouvez en choisir un qui convient à vos besoins.

## Ressources supplémentaires

Pour plus d'informations sur l'utilisation d'Angular CLI, y compris des références détaillées des commandes, visitez la page [Aperçu et Référence des Commandes Angular CLI](https://angular.dev/tools/cli).
