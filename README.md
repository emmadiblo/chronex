
# Chronex

Chronex est un framework JavaScript qui permet d'afficher le temps écoulé entre une date spécifiée et le moment actuel. Il prend en charge plusieurs langues et peut être configuré pour mettre à jour automatiquement l'affichage du temps.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Langues supportées](#langues-supportées)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Fonctionnalités

- Affichage du temps écoulé en secondes, minutes, heures et jours.
- Support multilingue (anglais, français, espagnol, allemand, italien, néerlandais, portugais, russe, chinois, arabe).
- Option d'actualisation automatique.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/emmadiblo/chronex.git
   ```
2. Incluez le fichier `Chronex.js` dans votre projet HTML.

## Utilisation

Ajoutez un élément HTML avec l'ID `time-ago` :

```html
<span id="time-ago"></span>
```

Initialisez le framework avec votre date et vos préférences :

```javascript
new Chronex('2024-11-20 16:09:12', 'fr', true, 2000);
```

### Exemple Complet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronex Example</title>
    <script src="Chronex.js"></script>
</head>
<body>

<span id="time-ago"></span>

<script>
    new Chronex('2024-11-20 16:09:12', 'fr', true, 2000);
</script>

</body>
</html>
```

## Langues supportées

- Anglais (en)
- Français (fr)
- Espagnol (es)
- Allemand (de)
- Italien (it)
- Néerlandais (nl)
- Portugais (pt)
- Russe (ru)
- Chinois (zh)
- Arabe (ar)

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet.
2. Créez une nouvelle branche (`git checkout -b feature-branch`).
3. Effectuez vos modifications
