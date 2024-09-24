# Task Manager - Version 1.0

## Description

Task Manager est une application web qui permet de gérer différentes catégories de tâches à accomplir. Chaque tâche peut être ajoutée, modifiée ou supprimée, et les tâches terminées peuvent être marquées comme complètes. L'application stocke les tâches dans le localStorage du navigateur, permettant ainsi de les retrouver lors de la prochaine visite.

## Fonctionnalités actuelles

- **Ajout de tâches** : Les utilisateurs peuvent ajouter une nouvelle tâche dans l'une des catégories suivantes :
  - Courses
  - Administratif
  - Réparations
  - Divers
- **Marquage des tâches comme terminées** : Chaque tâche peut être marquée comme complétée via une case à cocher.
- **Suppression des tâches** : Une tâche peut être supprimée si elle est marquée comme complétée.
- **Définir une date limite** : Une date limite peut être assignée à chaque tâche, indiquant la date à laquelle la tâche doit être réalisée.
- **LocalStorage** : Toutes les tâches sont stockées dans le localStorage pour être persistantes d'une session à l'autre.

## Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

## Installation

1. Clonez ce dépôt Git sur votre machine locale :
    ```bash
    git clone https://github.com/votre-utilisateur/task-manager.git
    ```
2. Naviguez dans le dossier du projet :
    ```bash
    cd task-manager
    ```
3. Ouvrez le fichier `index.html` dans un navigateur web pour utiliser l'application.

## Utilisation

1. Sélectionnez une catégorie de tâche en cliquant sur l'onglet correspondant.
2. Ajoutez une tâche dans le champ dédié, et cliquez sur "Ajouter".
3. Vous pouvez marquer une tâche comme terminée en cochant la case à gauche de chaque tâche.
4. Une tâche terminée peut être supprimée en cliquant sur le bouton "Supprimer".
5. La date limite d'une tâche peut être définie en sélectionnant une date à l'aide du champ de date intégré.

## Prochaines améliorations (Version 2.0 et plus)

Voici une liste des améliorations prévues pour les futures versions de Task Manager :

- **Enregistrement de l'état "complété" dans le LocalStorage** : Actuellement, les tâches ne conservent pas leur statut "complété" après un rechargement de la page.
- **Refactorisation du code** : Optimisation du code pour réduire les répétitions et améliorer la maintenabilité.
- **Amélioration des performances** : Optimisation des interactions avec le DOM pour mieux gérer de grandes listes de tâches.
- **Interface utilisateur améliorée** : Améliorer l'expérience utilisateur avec un design plus intuitif.
- **Suppression des tâches non complétées** : Permettre la suppression des tâches même si elles ne sont pas marquées comme terminées.
- **Filtres et recherches** : Ajouter la possibilité de filtrer ou de rechercher des tâches par catégorie, date ou statut.

## Contributions

Les contributions sont les bienvenues ! Si vous avez des idées pour améliorer ce projet, n'hésitez pas à soumettre une pull request ou à ouvrir une issue.

## Licence

Ce projet est sous licence [MIT](LICENSE).
