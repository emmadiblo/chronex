
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

 Inclurer le fichier du framwork en haut dans  ```head ``` :
   ```
    <script src="https://cdn.jsdelivr.net/gh/emmadiblo/chronex@main/chronex.js"></script>
   ```


## Utilisation

Ajoutez un élément HTML avec l'ID `time-ago` :

```html
<span id="time-ago"></span>
```

Initialisez le framework avec votre date et vos préférences :

```javascript
new Chronex('2024-11-20 16:09:12', 'fr', true, 1000);
```

### Exemple Complet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronex Example</title>
    <script src="https://cdn.jsdelivr.net/gh/emmadiblo/chronex@main/chronex.js"></script>
</head>
<body>

<span id="time-ago"></span>

<script>
 const date = '2024-11-20 16:34:00'; // Date à afficher
    const language = 'ar'; // Langue (par exemple, 'en', 'fr', 'es')
    const autoUpdate = true; // Indique si l'actualisation automatique est activée
    const updateInterval = 1000; // Délai de mise à jour en millisecondes(ici 1 sec)

    // Initialiser le framework
    new Chronex(date, language, autoUpdate, updateInterval);
    // ou new Chronex('2024-11-20 16:09:12', 'fr', true, 1000);
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

## Licence

### Creative Commons Attribution-NonCommercial 4.0 International License

Copyright (c) 2024 [Emma diblo]

#### Conditions de la licence

Vous êtes libre de :

- **Partager** — copier et redistribuer le matériel dans n'importe quel format ou support.
- **Adapter** — remixer, transformer et créer à partir du matériel.

#### Selon les conditions suivantes :

- **Attribution** — Vous devez créditer l'auteur original, fournir un lien vers la licence, et indiquer si des modifications ont été apportées. Vous pouvez le faire de manière raisonnable, mais pas de manière à suggérer que l'auteur vous soutient ou soutient votre utilisation.
  
- **NonCommercial** — Vous ne pouvez pas utiliser le matériel à des fins commerciales.

#### Pas d'autres restrictions

Vous ne pouvez pas appliquer légalement des termes ou des mesures supplémentaires qui restreindraient les droits accordés par la licence.

#### Avis de non-responsabilité

Ce matériel est fourni "tel quel", sans garanties d'aucune sorte, explicites ou implicites, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier et de non-contrefaçon.

Pour plus de détails, veuillez consulter [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/).
